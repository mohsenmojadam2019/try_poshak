from __future__ import annotations

import hashlib
import threading
import time
from collections import OrderedDict
from dataclasses import dataclass

import cv2
import mediapipe as mp
import numpy as np


class LocalFitError(RuntimeError):
    pass


@dataclass
class LocalFitResult:
    image_bytes: bytes
    pose_quality: float
    category: str
    processing_ms: int
    person_cache_hit: bool
    garment_cache_hit: bool


_POSE_LOCK = threading.Lock()
_CACHE_LOCK = threading.Lock()
_PERSON_CACHE: OrderedDict[str, tuple[np.ndarray, list[dict], np.ndarray | None, float]] = OrderedDict()
_GARMENT_CACHE: OrderedDict[str, np.ndarray] = OrderedDict()
_PERSON_CACHE_LIMIT = 8
_GARMENT_CACHE_LIMIT = 24
_POSE = mp.solutions.pose.Pose(
    static_image_mode=True,
    model_complexity=1,
    enable_segmentation=True,
    min_detection_confidence=0.45,
)


def _decode(raw: bytes, *, max_bytes: int, max_side: int) -> np.ndarray:
    if not raw:
        raise LocalFitError("فایل تصویر خالی است.")
    if len(raw) > max_bytes:
        raise LocalFitError("حجم تصویر بیشتر از حد مجاز است.")

    arr = np.frombuffer(raw, dtype=np.uint8)
    image = cv2.imdecode(arr, cv2.IMREAD_UNCHANGED)
    if image is None:
        raise LocalFitError("تصویر قابل خواندن نیست.")

    h, w = image.shape[:2]
    if h < 256 or w < 180:
        raise LocalFitError("رزولوشن تصویر خیلی پایین است.")

    ratio = min(1.0, max_side / float(max(h, w)))
    if ratio < 1.0:
        image = cv2.resize(
            image,
            (max(1, round(w * ratio)), max(1, round(h * ratio))),
            interpolation=cv2.INTER_AREA,
        )
    return image


def _to_bgr(image: np.ndarray) -> np.ndarray:
    if image.ndim == 2:
        return cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)
    if image.shape[2] == 4:
        alpha = image[:, :, 3:4].astype(np.float32) / 255.0
        rgb = image[:, :, :3].astype(np.float32)
        white = np.full_like(rgb, 255.0)
        return (rgb * alpha + white * (1.0 - alpha)).astype(np.uint8)
    return image[:, :, :3].copy()


def _largest_components(mask: np.ndarray) -> np.ndarray:
    binary = (mask > 24).astype(np.uint8)
    n, labels, stats, _ = cv2.connectedComponentsWithStats(binary, 8)
    if n <= 1:
        return mask

    areas = stats[1:, cv2.CC_STAT_AREA]
    largest = int(areas.max()) if len(areas) else 0
    keep = np.zeros_like(binary)
    for idx, area in enumerate(areas, start=1):
        if area >= max(120, int(largest * 0.05)):
            keep[labels == idx] = 1
    return (mask.astype(np.float32) * keep).astype(np.uint8)


def _extract_garment(image: np.ndarray) -> np.ndarray:
    if image.ndim == 2:
        bgr = cv2.cvtColor(image, cv2.COLOR_GRAY2BGR)
        alpha = np.full(image.shape, 255, np.uint8)
    elif image.shape[2] == 4:
        bgr = image[:, :, :3].copy()
        alpha = image[:, :, 3].copy()
        if np.count_nonzero(alpha > 20) < alpha.size * 0.03:
            alpha[:] = 255
    else:
        bgr = image[:, :, :3].copy()
        alpha = np.full(bgr.shape[:2], 255, np.uint8)

    # If the source has no useful alpha, estimate foreground from border color,
    # then refine with GrabCut. This is deterministic local computer vision.
    if np.mean(alpha < 245) < 0.01:
        h, w = bgr.shape[:2]
        strip = max(3, int(min(h, w) * 0.035))
        border = np.concatenate(
            [
                bgr[:strip].reshape(-1, 3),
                bgr[-strip:].reshape(-1, 3),
                bgr[:, :strip].reshape(-1, 3),
                bgr[:, -strip:].reshape(-1, 3),
            ],
            axis=0,
        )
        bg = np.median(border.astype(np.float32), axis=0)
        dist = np.linalg.norm(bgr.astype(np.float32) - bg, axis=2)
        color_mask = np.clip((dist - 14.0) * 8.5, 0, 255).astype(np.uint8)

        gc = np.zeros((h, w), np.uint8)
        rect = (
            max(1, int(w * 0.025)),
            max(1, int(h * 0.025)),
            max(2, int(w * 0.95)),
            max(2, int(h * 0.95)),
        )
        bgd = np.zeros((1, 65), np.float64)
        fgd = np.zeros((1, 65), np.float64)
        try:
            cv2.grabCut(bgr, gc, rect, bgd, fgd, 3, cv2.GC_INIT_WITH_RECT)
            gc_fg = np.where(
                (gc == cv2.GC_FGD) | (gc == cv2.GC_PR_FGD), 255, 0
            ).astype(np.uint8)
            alpha = cv2.max(color_mask, gc_fg)
        except cv2.error:
            alpha = color_mask

    k = max(3, int(min(alpha.shape) * 0.012) | 1)
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (k, k))
    alpha = cv2.morphologyEx(alpha, cv2.MORPH_CLOSE, kernel)
    alpha = cv2.morphologyEx(alpha, cv2.MORPH_OPEN, kernel)
    alpha = _largest_components(alpha)
    alpha = cv2.GaussianBlur(alpha, (0, 0), sigmaX=max(0.8, k / 4))

    ys, xs = np.where(alpha > 18)
    if len(xs) < 300:
        raise LocalFitError("لباس از پس‌زمینه تشخیص داده نشد. عکس محصول ساده‌تر انتخاب کن.")

    x0, x1 = max(0, xs.min() - 2), min(alpha.shape[1], xs.max() + 3)
    y0, y1 = max(0, ys.min() - 2), min(alpha.shape[0], ys.max() + 3)
    rgba = cv2.cvtColor(bgr[y0:y1, x0:x1], cv2.COLOR_BGR2BGRA)
    rgba[:, :, 3] = alpha[y0:y1, x0:x1]
    return rgba


def _cache_key(raw: bytes, *, max_side: int, prefix: str) -> str:
    h = hashlib.blake2b(digest_size=16)
    h.update(prefix.encode("ascii"))
    h.update(str(max_side).encode("ascii"))
    h.update(raw)
    return h.hexdigest()


def _cache_get(cache: OrderedDict, key: str):
    with _CACHE_LOCK:
        value = cache.get(key)
        if value is None:
            return None
        cache.move_to_end(key)
        return value


def _cache_put(cache: OrderedDict, key: str, value, limit: int) -> None:
    with _CACHE_LOCK:
        cache[key] = value
        cache.move_to_end(key)
        while len(cache) > limit:
            cache.popitem(last=False)


def _prepare_person(
    raw: bytes,
    *,
    max_upload_bytes: int,
    max_side: int,
) -> tuple[np.ndarray, list[dict], np.ndarray | None, float, bool]:
    key = _cache_key(raw, max_side=max_side, prefix="person")
    cached = _cache_get(_PERSON_CACHE, key)
    if cached is not None:
        person, chains, segmentation, quality = cached
        return person, chains, segmentation, quality, True

    person_src = _decode(raw, max_bytes=max_upload_bytes, max_side=max_side)
    person = _to_bgr(person_src)
    chains, segmentation, quality = _detect_pose(person)
    _cache_put(
        _PERSON_CACHE,
        key,
        (person, chains, segmentation, quality),
        _PERSON_CACHE_LIMIT,
    )
    return person, chains, segmentation, quality, False


def _prepare_garment(
    raw: bytes,
    *,
    max_upload_bytes: int,
    max_side: int,
) -> tuple[np.ndarray, bool]:
    key = _cache_key(raw, max_side=max_side, prefix="garment")
    cached = _cache_get(_GARMENT_CACHE, key)
    if cached is not None:
        return cached, True

    garment_src = _decode(raw, max_bytes=max_upload_bytes, max_side=max_side)
    garment = _extract_garment(garment_src)
    _cache_put(_GARMENT_CACHE, key, garment, _GARMENT_CACHE_LIMIT)
    return garment, False


def _point(landmarks, index: int, w: int, h: int) -> np.ndarray:
    lm = landmarks[index]
    return np.array([lm.x * w, lm.y * h], dtype=np.float32)


def _visibility(landmarks, indexes: list[int]) -> float:
    values = [float(landmarks[i].visibility) for i in indexes]
    return float(sum(values) / max(1, len(values)))


def _detect_pose(person: np.ndarray):
    rgb = cv2.cvtColor(person, cv2.COLOR_BGR2RGB)
    with _POSE_LOCK:
        result = _POSE.process(rgb)

    if not result.pose_landmarks:
        raise LocalFitError(
            "بدن در تصویر پیدا نشد. عکس تمام‌قد، مستقیم و با نور بهتر انتخاب کن."
        )

    lm = result.pose_landmarks.landmark
    h, w = person.shape[:2]
    visibility_quality = _visibility(lm, [11, 12, 23, 24, 25, 26, 27, 28])
    nose = _point(lm, 0, w, h)
    ankle_y = max(_point(lm, 27, w, h)[1], _point(lm, 28, w, h)[1])
    body_fraction = float(np.clip((ankle_y - nose[1]) / max(1.0, float(h)), 0.0, 1.0))
    framing_quality = float(np.clip((body_fraction - 0.30) / 0.48, 0.0, 1.0))
    quality = visibility_quality * 0.78 + framing_quality * 0.22

    if visibility_quality < 0.36:
        raise LocalFitError(
            "نقاط بدن واضح نیستند. سر، شانه‌ها، کمر، زانو و پاها باید داخل کادر باشند."
        )

    chains = [
        {
            "shoulder": _point(lm, 11, w, h),
            "elbow": _point(lm, 13, w, h),
            "wrist": _point(lm, 15, w, h),
            "hip": _point(lm, 23, w, h),
            "knee": _point(lm, 25, w, h),
            "ankle": _point(lm, 27, w, h),
        },
        {
            "shoulder": _point(lm, 12, w, h),
            "elbow": _point(lm, 14, w, h),
            "wrist": _point(lm, 16, w, h),
            "hip": _point(lm, 24, w, h),
            "knee": _point(lm, 26, w, h),
            "ankle": _point(lm, 28, w, h),
        },
    ]
    chains.sort(key=lambda c: float(c["shoulder"][0]))

    segmentation = None
    if result.segmentation_mask is not None:
        segmentation = np.clip(result.segmentation_mask, 0.0, 1.0).astype(np.float32)

    return chains, segmentation, quality


def _row_extent(mask: np.ndarray, y: int) -> tuple[float, float] | None:
    y = int(np.clip(y, 0, mask.shape[0] - 1))
    xs = np.flatnonzero(mask[y])
    if len(xs) < 2:
        return None
    return float(xs[0]), float(xs[-1])


def _row_segments(mask: np.ndarray, y: int) -> list[tuple[int, int]]:
    y = int(np.clip(y, 0, mask.shape[0] - 1))
    xs = np.flatnonzero(mask[y])
    if len(xs) == 0:
        return []
    gaps = np.where(np.diff(xs) > 1)[0]
    starts = np.r_[0, gaps + 1]
    ends = np.r_[gaps, len(xs) - 1]
    return [(int(xs[s]), int(xs[e])) for s, e in zip(starts, ends)]


def _src_points_top(garment: np.ndarray) -> np.ndarray:
    h, w = garment.shape[:2]
    mask = garment[:, :, 3] > 28
    ys, xs = np.where(mask)
    if len(xs) < 50:
        pts = [
            (0.34, 0.04), (0.66, 0.04),
            (0.02, 0.24), (0.98, 0.24),
            (0.22, 0.35), (0.78, 0.35),
            (0.24, 0.98), (0.76, 0.98),
        ]
        return np.array([(x * (w - 1), y * (h - 1)) for x, y in pts], np.float32)

    center = float(np.median(xs))
    body_widths: list[float] = []
    for y in range(int(h * 0.45), max(int(h * 0.96), int(h * 0.45) + 1)):
        ext = _row_extent(mask, y)
        if ext:
            body_widths.append(ext[1] - ext[0])
    body_width = (
        float(np.percentile(body_widths, 20))
        if body_widths
        else float(w * 0.52)
    )
    body_width = max(body_width, w * 0.22)

    shoulder_y = max(1, int(h * 0.05))
    shoulder_l = center - body_width * 0.47
    shoulder_r = center + body_width * 0.47

    widest_y = int(h * 0.24)
    widest_ext = None
    widest = -1.0
    for y in range(max(1, int(h * 0.07)), max(2, int(h * 0.58))):
        ext = _row_extent(mask, y)
        if ext and ext[1] - ext[0] > widest:
            widest = ext[1] - ext[0]
            widest_ext = ext
            widest_y = y

    if widest_ext is None:
        widest_ext = (0.0, float(w - 1))

    side_left = center - body_width * 0.58
    side_right = center + body_width * 0.58
    sleeve_rows: list[int] = []
    for y in range(max(1, int(h * 0.06)), max(2, int(h * 0.96))):
        row = np.flatnonzero(mask[y])
        if len(row) and (row[0] < side_left or row[-1] > side_right):
            sleeve_rows.append(y)

    sleeve_y = max(sleeve_rows) if sleeve_rows else widest_y
    sleeve_ext = _row_extent(mask, sleeve_y) or widest_ext
    sleeve_l, sleeve_r = sleeve_ext

    armpit_y = int(np.clip(h * 0.36, 1, h - 2))
    armpit_l = center - body_width * 0.52
    armpit_r = center + body_width * 0.52

    bottom_extents = []
    for y in range(max(0, int(h * 0.88)), h):
        ext = _row_extent(mask, y)
        if ext:
            bottom_extents.append(ext)
    if bottom_extents:
        bottom_l = float(np.median([e[0] for e in bottom_extents]))
        bottom_r = float(np.median([e[1] for e in bottom_extents]))
    else:
        bottom_l = center - body_width * 0.48
        bottom_r = center + body_width * 0.48

    return np.array(
        [
            (shoulder_l, shoulder_y),
            (shoulder_r, shoulder_y),
            (sleeve_l, sleeve_y),
            (sleeve_r, sleeve_y),
            (armpit_l, armpit_y),
            (armpit_r, armpit_y),
            (bottom_l, h - 1),
            (bottom_r, h - 1),
        ],
        np.float32,
    )


def _estimate_sleeve_reach(garment: np.ndarray) -> float:
    h, w = garment.shape[:2]
    mask = garment[:, :, 3] > 28
    ys, xs = np.where(mask)
    if len(xs) < 50:
        return 0.75

    center = float(np.median(xs))
    body_widths: list[float] = []
    for y in range(int(h * 0.45), max(int(h * 0.96), int(h * 0.45) + 1)):
        ext = _row_extent(mask, y)
        if ext:
            body_widths.append(ext[1] - ext[0])
    body_width = (
        float(np.percentile(body_widths, 20))
        if body_widths
        else float(w * 0.52)
    )
    body_width = max(body_width, w * 0.22)

    side_left = center - body_width * 0.58
    side_right = center + body_width * 0.58
    sleeve_rows: list[int] = []
    for y in range(max(1, int(h * 0.06)), max(2, int(h * 0.97))):
        row = np.flatnonzero(mask[y])
        if len(row) and (row[0] < side_left or row[-1] > side_right):
            sleeve_rows.append(y)

    if not sleeve_rows:
        return 0.42

    depth = float(np.percentile(sleeve_rows, 96)) / max(1.0, float(h - 1))
    return float(
        np.interp(
            depth,
            [0.28, 0.42, 0.62, 0.82, 0.96],
            [0.52, 0.78, 1.12, 1.58, 1.90],
        )
    )


def _arm_point(chain: dict, reach: float) -> np.ndarray:
    shoulder = chain["shoulder"]
    elbow = chain["elbow"]
    wrist = chain["wrist"]
    reach = float(np.clip(reach, 0.2, 1.95))
    if reach <= 1.0:
        return shoulder + (elbow - shoulder) * reach
    return elbow + (wrist - elbow) * (reach - 1.0)


def _dst_points_top(
    chains,
    scale: float,
    width_scale: float,
    offset_x: float,
    offset_y: float,
    sleeve_reach: float = 0.75,
) -> np.ndarray:
    left, right = chains
    sl, sr = left["shoulder"], right["shoulder"]
    hl, hr = left["hip"], right["hip"]
    sw = max(20.0, float(np.linalg.norm(sr - sl)))
    torso_h = max(30.0, float(np.linalg.norm((hl + hr) / 2 - (sl + sr) / 2)))

    s_l = sl + np.array([-0.10 * sw, -0.035 * torso_h], np.float32)
    s_r = sr + np.array([0.10 * sw, -0.035 * torso_h], np.float32)
    a_l = sl * 0.68 + hl * 0.32 + np.array([-0.08 * sw, 0], np.float32)
    a_r = sr * 0.68 + hr * 0.32 + np.array([0.08 * sw, 0], np.float32)

    def outer_sleeve_point(chain: dict, desired_x: float) -> np.ndarray:
        point = _arm_point(chain, sleeve_reach)
        vec = point - chain["shoulder"]
        normal = np.array([-vec[1], vec[0]], dtype=np.float32)
        norm = float(np.linalg.norm(normal))
        if norm < 1e-4:
            normal = np.array([desired_x, 0.0], dtype=np.float32)
        else:
            normal /= norm
            if normal[0] * desired_x < 0:
                normal *= -1.0
        return point + normal * (sw * 0.08)

    sleeve_l = outer_sleeve_point(left, -1.0)
    sleeve_r = outer_sleeve_point(right, 1.0)
    bottom_l = hl + np.array([-0.08 * sw, 0.10 * torso_h], np.float32)
    bottom_r = hr + np.array([0.08 * sw, 0.10 * torso_h], np.float32)

    pts = np.array(
        [s_l, s_r, sleeve_l, sleeve_r, a_l, a_r, bottom_l, bottom_r],
        np.float32,
    )
    center = (pts[0] + pts[1] + pts[6] + pts[7]) / 4.0
    pts = center + (pts - center) * float(scale)
    pts[:, 0] = center[0] + (pts[:, 0] - center[0]) * float(width_scale)
    pts[:, 0] += float(offset_x) * sw
    pts[:, 1] += float(offset_y) * torso_h
    return pts


def _src_points_bottom(garment: np.ndarray) -> np.ndarray:
    h, w = garment.shape[:2]
    mask = garment[:, :, 3] > 28
    ys, xs = np.where(mask)
    if len(xs) < 50:
        pts = [
            (0.07, 0.03), (0.93, 0.03), (0.50, 0.43),
            (0.15, 0.64), (0.43, 0.64), (0.57, 0.64), (0.85, 0.64),
            (0.12, 0.98), (0.43, 0.98), (0.57, 0.98), (0.88, 0.98),
        ]
        return np.array([(x * (w - 1), y * (h - 1)) for x, y in pts], np.float32)

    center = float(np.median(xs))

    waist_rows = []
    for y in range(max(0, int(h * 0.02)), max(1, int(h * 0.14))):
        ext = _row_extent(mask, y)
        if ext:
            waist_rows.append(ext)
    if waist_rows:
        waist_l = float(np.median([e[0] for e in waist_rows]))
        waist_r = float(np.median([e[1] for e in waist_rows]))
    else:
        waist_l, waist_r = w * 0.08, w * 0.92

    crotch_y = int(h * 0.43)
    for y in range(int(h * 0.20), int(h * 0.68)):
        segs = [s for s in _row_segments(mask, y) if s[1] - s[0] > max(3, w * 0.03)]
        if len(segs) >= 2:
            left_seg = min(segs, key=lambda s: s[0])
            right_seg = max(segs, key=lambda s: s[1])
            if left_seg[1] < center < right_seg[0]:
                crotch_y = max(int(h * 0.18), y - max(1, int(h * 0.02)))
                break

    knee_y = int(crotch_y + (h - crotch_y) * 0.43)
    ankle_y = max(crotch_y + 1, int(h * 0.96))

    def leg_points(y: int, fallback_frac: float) -> tuple[float, float, float, float]:
        segs = [s for s in _row_segments(mask, y) if s[1] - s[0] > max(2, w * 0.02)]
        if len(segs) >= 2:
            segs = sorted(segs, key=lambda s: (s[0] + s[1]) / 2)
            left = segs[0]
            right = segs[-1]
            return float(left[0]), float(left[1]), float(right[0]), float(right[1])
        half = max(w * 0.12, (waist_r - waist_l) * fallback_frac)
        gap = max(w * 0.02, (waist_r - waist_l) * 0.04)
        return (
            center - gap - half,
            center - gap,
            center + gap,
            center + gap + half,
        )

    lk_o, lk_i, rk_i, rk_o = leg_points(knee_y, 0.33)
    la_o, la_i, ra_i, ra_o = leg_points(ankle_y, 0.25)

    return np.array(
        [
            (waist_l, max(1, int(h * 0.04))),
            (waist_r, max(1, int(h * 0.04))),
            (center, crotch_y),
            (lk_o, knee_y), (lk_i, knee_y),
            (rk_i, knee_y), (rk_o, knee_y),
            (la_o, ankle_y), (la_i, ankle_y),
            (ra_i, ankle_y), (ra_o, ankle_y),
        ],
        np.float32,
    )


def _side_pair(center: np.ndarray, width: float) -> tuple[np.ndarray, np.ndarray]:
    return (
        center + np.array([-width / 2, 0], np.float32),
        center + np.array([width / 2, 0], np.float32),
    )


def _dst_points_bottom(
    chains,
    scale: float,
    width_scale: float,
    offset_x: float,
    offset_y: float,
) -> np.ndarray:
    left, right = chains
    hl, hr = left["hip"], right["hip"]
    kl, kr = left["knee"], right["knee"]
    al, ar = left["ankle"], right["ankle"]

    hip_w = max(20.0, float(np.linalg.norm(hr - hl)))
    leg_h = max(60.0, float(np.linalg.norm(((al + ar) / 2) - ((hl + hr) / 2))))
    waist_l = hl + np.array([-0.14 * hip_w, -0.06 * leg_h], np.float32)
    waist_r = hr + np.array([0.14 * hip_w, -0.06 * leg_h], np.float32)
    crotch = (hl + hr) / 2 + np.array([0, 0.14 * leg_h], np.float32)

    lk_o, lk_i = _side_pair(kl, hip_w * 0.34)
    rk_i, rk_o = _side_pair(kr, hip_w * 0.34)
    la_o, la_i = _side_pair(al, hip_w * 0.22)
    ra_i, ra_o = _side_pair(ar, hip_w * 0.22)

    pts = np.array(
        [waist_l, waist_r, crotch, lk_o, lk_i, rk_i, rk_o, la_o, la_i, ra_i, ra_o],
        np.float32,
    )
    center = (waist_l + waist_r + al + ar) / 4.0
    pts = center + (pts - center) * float(scale)
    pts[:, 0] = center[0] + (pts[:, 0] - center[0]) * float(width_scale)
    pts[:, 0] += float(offset_x) * hip_w
    pts[:, 1] += float(offset_y) * leg_h
    return pts


def _warp_piecewise(
    garment: np.ndarray,
    dst_shape: tuple[int, int],
    src_points: np.ndarray,
    dst_points: np.ndarray,
    triangles: list[tuple[int, int, int]],
) -> np.ndarray:
    out_h, out_w = dst_shape
    overlay = np.zeros((out_h, out_w, 4), np.uint8)

    for tri in triangles:
        src = np.float32([src_points[i] for i in tri])
        dst = np.float32([dst_points[i] for i in tri])

        if abs(cv2.contourArea(dst)) < 8:
            continue

        matrix = cv2.getAffineTransform(src, dst)
        warped = cv2.warpAffine(
            garment,
            matrix,
            (out_w, out_h),
            flags=cv2.INTER_LINEAR,
            borderMode=cv2.BORDER_CONSTANT,
            borderValue=(0, 0, 0, 0),
        )

        tri_mask = np.zeros((out_h, out_w), np.uint8)
        cv2.fillConvexPoly(tri_mask, np.int32(np.round(dst)), 255, lineType=cv2.LINE_AA)
        warped[:, :, 3] = cv2.bitwise_and(warped[:, :, 3], tri_mask)

        src_a = warped[:, :, 3:4].astype(np.float32) / 255.0
        dst_a = overlay[:, :, 3:4].astype(np.float32) / 255.0
        combined_a = src_a + dst_a * (1.0 - src_a)

        rgb = (
            warped[:, :, :3].astype(np.float32) * src_a
            + overlay[:, :, :3].astype(np.float32) * dst_a * (1.0 - src_a)
        )
        safe = np.maximum(combined_a, 1e-6)
        overlay[:, :, :3] = np.clip(rgb / safe, 0, 255).astype(np.uint8)
        overlay[:, :, 3] = np.clip(combined_a[:, :, 0] * 255, 0, 255).astype(np.uint8)

    return overlay


def _merge_overlays(base: np.ndarray, top: np.ndarray) -> np.ndarray:
    src_a = top[:, :, 3:4].astype(np.float32) / 255.0
    dst_a = base[:, :, 3:4].astype(np.float32) / 255.0
    combined_a = src_a + dst_a * (1.0 - src_a)
    rgb = (
        top[:, :, :3].astype(np.float32) * src_a
        + base[:, :, :3].astype(np.float32) * dst_a * (1.0 - src_a)
    )
    safe = np.maximum(combined_a, 1e-6)
    out = base.copy()
    out[:, :, :3] = np.clip(rgb / safe, 0, 255).astype(np.uint8)
    out[:, :, 3] = np.clip(combined_a[:, :, 0] * 255, 0, 255).astype(np.uint8)
    return out


def _warp_perspective_region(
    garment: np.ndarray,
    dst_shape: tuple[int, int],
    src_quad: np.ndarray,
    dst_quad: np.ndarray,
    src_polygon: np.ndarray,
) -> np.ndarray:
    out_h, out_w = dst_shape
    region = garment.copy()
    src_mask = np.zeros(garment.shape[:2], np.uint8)
    cv2.fillConvexPoly(src_mask, np.int32(np.round(src_polygon)), 255, lineType=cv2.LINE_AA)
    region[:, :, 3] = cv2.bitwise_and(region[:, :, 3], src_mask)

    matrix = cv2.getPerspectiveTransform(
        np.float32(src_quad),
        np.float32(dst_quad),
    )
    return cv2.warpPerspective(
        region,
        matrix,
        (out_w, out_h),
        flags=cv2.INTER_LINEAR,
        borderMode=cv2.BORDER_CONSTANT,
        borderValue=(0, 0, 0, 0),
    )


def _warp_top(
    garment: np.ndarray,
    dst_shape: tuple[int, int],
    src: np.ndarray,
    dst: np.ndarray,
) -> np.ndarray:
    # Torso gets one continuous projective transform so collars, buttons,
    # logos and patterns stay visually continuous. Sleeves are warped
    # separately toward the upper arms.
    torso_src_poly = np.float32([src[0], src[1], src[5], src[7], src[6], src[4]])
    torso_src_quad = np.float32([src[0], src[1], src[7], src[6]])
    torso_dst_quad = np.float32([dst[0], dst[1], dst[7], dst[6]])
    overlay = _warp_perspective_region(
        garment,
        dst_shape,
        torso_src_quad,
        torso_dst_quad,
        torso_src_poly,
    )

    left_sleeve = _warp_piecewise(
        garment,
        dst_shape,
        src,
        dst,
        [(2, 0, 4)],
    )
    right_sleeve = _warp_piecewise(
        garment,
        dst_shape,
        src,
        dst,
        [(1, 3, 5)],
    )
    overlay = _merge_overlays(overlay, left_sleeve)
    overlay = _merge_overlays(overlay, right_sleeve)
    return overlay


def _clip_to_body(overlay: np.ndarray, segmentation: np.ndarray | None, shoulder_width: float) -> np.ndarray:
    if segmentation is None:
        return overlay

    mask = np.clip(segmentation * 255.0, 0, 255).astype(np.uint8)
    _, mask = cv2.threshold(mask, 35, 255, cv2.THRESH_BINARY)
    dilation = max(7, int(shoulder_width * 0.16) | 1)
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (dilation, dilation))
    mask = cv2.dilate(mask, kernel)
    mask = cv2.GaussianBlur(mask, (0, 0), sigmaX=max(1.0, dilation / 5))
    overlay = overlay.copy()
    overlay[:, :, 3] = (
        overlay[:, :, 3].astype(np.float32) * (mask.astype(np.float32) / 255.0)
    ).astype(np.uint8)
    return overlay


def _feather_overlay(overlay: np.ndarray, shoulder_width: float) -> np.ndarray:
    feathered = overlay.copy()
    sigma = float(np.clip(shoulder_width * 0.006, 0.55, 1.8))
    feathered[:, :, 3] = cv2.GaussianBlur(
        feathered[:, :, 3],
        (0, 0),
        sigmaX=sigma,
    )
    return feathered


def _apply_local_lighting(overlay: np.ndarray, person: np.ndarray) -> np.ndarray:
    alpha = overlay[:, :, 3] > 18
    if np.count_nonzero(alpha) < 200:
        return overlay

    gray = cv2.cvtColor(person, cv2.COLOR_BGR2GRAY).astype(np.float32)
    sigma = max(6.0, min(person.shape[:2]) * 0.025)
    smooth = cv2.GaussianBlur(gray, (0, 0), sigmaX=sigma)
    reference = float(np.median(smooth[alpha]))
    if reference < 12:
        return overlay

    lighting = np.clip(smooth / reference, 0.78, 1.20)
    shaded = overlay.copy()
    rgb = shaded[:, :, :3].astype(np.float32)
    rgb *= lighting[:, :, None]
    shaded[:, :, :3] = np.clip(rgb, 0, 255).astype(np.uint8)
    return shaded


def _alpha_blend(base: np.ndarray, overlay: np.ndarray) -> np.ndarray:
    alpha = overlay[:, :, 3:4].astype(np.float32) / 255.0
    out = overlay[:, :, :3].astype(np.float32) * alpha + base.astype(np.float32) * (1.0 - alpha)
    return np.clip(out, 0, 255).astype(np.uint8)


def _restore_exposed_arms(
    result: np.ndarray,
    original: np.ndarray,
    chains,
    shoulder_width: float,
    sleeve_reach: float,
) -> np.ndarray:
    mask = np.zeros(original.shape[:2], np.uint8)
    thickness = max(8, int(shoulder_width * 0.16))

    shoulder_mid = (chains[0]["shoulder"] + chains[1]["shoulder"]) / 2.0
    head_center = shoulder_mid + np.array([0.0, -0.55 * shoulder_width], np.float32)
    head_axes = (
        max(10, int(shoulder_width * 0.34)),
        max(12, int(shoulder_width * 0.46)),
    )
    cv2.ellipse(
        mask,
        tuple(np.int32(head_center)),
        head_axes,
        0,
        0,
        360,
        255,
        -1,
        cv2.LINE_AA,
    )

    for chain in chains:
        shoulder = chain["shoulder"]
        elbow = chain["elbow"]
        wrist = chain["wrist"]

        # For short sleeves, restore the visible arm from the sleeve hem down.
        # For long sleeves, only the wrist/hand is restored in front of the cloth.
        if sleeve_reach <= 1.0:
            start = shoulder + (elbow - shoulder) * float(np.clip(sleeve_reach, 0.25, 0.95))
        else:
            forearm_fraction = float(np.clip(sleeve_reach - 1.0, 0.0, 0.92))
            start = elbow + (wrist - elbow) * forearm_fraction

        cv2.line(
            mask,
            tuple(np.int32(start)),
            tuple(np.int32(wrist)),
            255,
            max(thickness - 2, 6),
            lineType=cv2.LINE_AA,
        )
        cv2.circle(
            mask,
            tuple(np.int32(wrist)),
            max(5, thickness // 2),
            255,
            -1,
            cv2.LINE_AA,
        )

    mask = cv2.GaussianBlur(mask, (0, 0), sigmaX=1.2)
    a = mask[:, :, None].astype(np.float32) / 255.0
    return np.clip(
        original.astype(np.float32) * a + result.astype(np.float32) * (1.0 - a),
        0,
        255,
    ).astype(np.uint8)


def fit_local(
    person_raw: bytes,
    garment_raw: bytes,
    *,
    category: str,
    max_upload_bytes: int,
    max_side: int,
    scale: float = 1.0,
    width_scale: float = 1.0,
    offset_x: float = 0.0,
    offset_y: float = 0.0,
) -> LocalFitResult:
    if category not in {"tops", "bottoms"}:
        raise LocalFitError("فعلاً فقط پیراهن/بالاتنه و شلوار/پایین‌تنه پشتیبانی می‌شود.")

    scale = float(np.clip(scale, 0.72, 1.35))
    width_scale = float(np.clip(width_scale, 0.72, 1.45))
    offset_x = float(np.clip(offset_x, -0.30, 0.30))
    offset_y = float(np.clip(offset_y, -0.28, 0.28))

    started = time.perf_counter()
    person, chains, segmentation, quality, person_cache_hit = _prepare_person(
        person_raw,
        max_upload_bytes=max_upload_bytes,
        max_side=max_side,
    )
    garment, garment_cache_hit = _prepare_garment(
        garment_raw,
        max_upload_bytes=max_upload_bytes,
        max_side=max_side,
    )

    h, w = person.shape[:2]
    shoulder_width = float(np.linalg.norm(chains[1]["shoulder"] - chains[0]["shoulder"]))

    if category == "tops":
        sleeve_reach = _estimate_sleeve_reach(garment)
        src = _src_points_top(garment)
        dst = _dst_points_top(
            chains,
            scale,
            width_scale,
            offset_x,
            offset_y,
            sleeve_reach=sleeve_reach,
        )
        overlay = _warp_top(garment, (h, w), src, dst)
    else:
        sleeve_reach = 0.25
        src = _src_points_bottom(garment)
        dst = _dst_points_bottom(chains, scale, width_scale, offset_x, offset_y)
        triangles = [
            (0, 1, 2),
            (0, 2, 3), (2, 4, 3),
            (3, 4, 7), (4, 8, 7),
            (2, 1, 6), (2, 6, 5),
            (5, 6, 9), (6, 10, 9),
        ]
        overlay = _warp_piecewise(garment, (h, w), src, dst, triangles)
    overlay = _clip_to_body(overlay, segmentation, shoulder_width)
    overlay = _feather_overlay(overlay, shoulder_width)
    overlay = _apply_local_lighting(overlay, person)
    fitted = _alpha_blend(person, overlay)
    fitted = _restore_exposed_arms(
        fitted,
        person,
        chains,
        shoulder_width,
        sleeve_reach,
    )

    ok, encoded = cv2.imencode(".jpg", fitted, [int(cv2.IMWRITE_JPEG_QUALITY), 94])
    if not ok:
        raise LocalFitError("ساخت خروجی ناموفق بود.")

    return LocalFitResult(
        image_bytes=encoded.tobytes(),
        pose_quality=quality,
        category=category,
        processing_ms=max(1, int((time.perf_counter() - started) * 1000)),
        person_cache_hit=person_cache_hit,
        garment_cache_hit=garment_cache_hit,
    )
