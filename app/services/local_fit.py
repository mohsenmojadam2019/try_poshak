from __future__ import annotations

import math
import threading
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


_POSE_LOCK = threading.Lock()
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
    quality = _visibility(lm, [11, 12, 23, 24, 25, 26, 27, 28])
    if quality < 0.36:
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


def _src_points_top(w: int, h: int) -> np.ndarray:
    pts = [
        (0.34, 0.04), (0.66, 0.04),
        (0.02, 0.24), (0.98, 0.24),
        (0.22, 0.35), (0.78, 0.35),
        (0.24, 0.98), (0.76, 0.98),
    ]
    return np.array([(x * (w - 1), y * (h - 1)) for x, y in pts], np.float32)


def _dst_points_top(chains, scale: float, width_scale: float, offset_y: float) -> np.ndarray:
    left, right = chains
    sl, sr = left["shoulder"], right["shoulder"]
    hl, hr = left["hip"], right["hip"]
    el, er = left["elbow"], right["elbow"]

    sw = max(20.0, float(np.linalg.norm(sr - sl)))
    torso_h = max(30.0, float(np.linalg.norm((hl + hr) / 2 - (sl + sr) / 2)))

    s_l = sl + np.array([-0.10 * sw, -0.035 * torso_h], np.float32)
    s_r = sr + np.array([0.10 * sw, -0.035 * torso_h], np.float32)
    a_l = sl * 0.68 + hl * 0.32 + np.array([-0.08 * sw, 0], np.float32)
    a_r = sr * 0.68 + hr * 0.32 + np.array([0.08 * sw, 0], np.float32)
    sleeve_l = sl + (el - sl) * 0.45 + np.array([-0.10 * sw, 0], np.float32)
    sleeve_r = sr + (er - sr) * 0.45 + np.array([0.10 * sw, 0], np.float32)
    bottom_l = hl + np.array([-0.08 * sw, 0.10 * torso_h], np.float32)
    bottom_r = hr + np.array([0.08 * sw, 0.10 * torso_h], np.float32)

    pts = np.array(
        [s_l, s_r, sleeve_l, sleeve_r, a_l, a_r, bottom_l, bottom_r],
        np.float32,
    )
    center = (pts[0] + pts[1] + pts[6] + pts[7]) / 4.0
    pts = center + (pts - center) * float(scale)
    pts[:, 0] = center[0] + (pts[:, 0] - center[0]) * float(width_scale)
    pts[:, 1] += float(offset_y) * torso_h
    return pts


def _src_points_bottom(w: int, h: int) -> np.ndarray:
    pts = [
        (0.07, 0.03), (0.93, 0.03), (0.50, 0.43),
        (0.15, 0.64), (0.43, 0.64), (0.57, 0.64), (0.85, 0.64),
        (0.12, 0.98), (0.43, 0.98), (0.57, 0.98), (0.88, 0.98),
    ]
    return np.array([(x * (w - 1), y * (h - 1)) for x, y in pts], np.float32)


def _side_pair(center: np.ndarray, width: float) -> tuple[np.ndarray, np.ndarray]:
    return (
        center + np.array([-width / 2, 0], np.float32),
        center + np.array([width / 2, 0], np.float32),
    )


def _dst_points_bottom(chains, scale: float, width_scale: float, offset_y: float) -> np.ndarray:
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


def _alpha_blend(base: np.ndarray, overlay: np.ndarray) -> np.ndarray:
    alpha = overlay[:, :, 3:4].astype(np.float32) / 255.0
    out = overlay[:, :, :3].astype(np.float32) * alpha + base.astype(np.float32) * (1.0 - alpha)
    return np.clip(out, 0, 255).astype(np.uint8)


def _restore_forearms(result: np.ndarray, original: np.ndarray, chains, shoulder_width: float) -> np.ndarray:
    mask = np.zeros(original.shape[:2], np.uint8)
    thickness = max(8, int(shoulder_width * 0.16))
    for chain in chains:
        shoulder, elbow, wrist = chain["shoulder"], chain["elbow"], chain["wrist"]
        start = shoulder + (elbow - shoulder) * 0.58
        cv2.line(
            mask,
            tuple(np.int32(start)),
            tuple(np.int32(elbow)),
            255,
            thickness,
            lineType=cv2.LINE_AA,
        )
        cv2.line(
            mask,
            tuple(np.int32(elbow)),
            tuple(np.int32(wrist)),
            255,
            max(thickness - 2, 6),
            lineType=cv2.LINE_AA,
        )
        cv2.circle(mask, tuple(np.int32(wrist)), max(5, thickness // 2), 255, -1, cv2.LINE_AA)

    mask = cv2.GaussianBlur(mask, (0, 0), sigmaX=1.2)
    a = mask[:, :, None].astype(np.float32) / 255.0
    return np.clip(original.astype(np.float32) * a + result.astype(np.float32) * (1.0 - a), 0, 255).astype(np.uint8)


def fit_local(
    person_raw: bytes,
    garment_raw: bytes,
    *,
    category: str,
    max_upload_bytes: int,
    max_side: int,
    scale: float = 1.0,
    width_scale: float = 1.0,
    offset_y: float = 0.0,
) -> LocalFitResult:
    if category not in {"tops", "bottoms"}:
        raise LocalFitError("فعلاً فقط پیراهن/بالاتنه و شلوار/پایین‌تنه پشتیبانی می‌شود.")

    scale = float(np.clip(scale, 0.72, 1.35))
    width_scale = float(np.clip(width_scale, 0.72, 1.45))
    offset_y = float(np.clip(offset_y, -0.28, 0.28))

    person_src = _decode(person_raw, max_bytes=max_upload_bytes, max_side=max_side)
    garment_src = _decode(garment_raw, max_bytes=max_upload_bytes, max_side=max_side)

    person = _to_bgr(person_src)
    garment = _extract_garment(garment_src)
    chains, segmentation, quality = _detect_pose(person)

    h, w = person.shape[:2]
    shoulder_width = float(np.linalg.norm(chains[1]["shoulder"] - chains[0]["shoulder"]))

    if category == "tops":
        src = _src_points_top(garment.shape[1], garment.shape[0])
        dst = _dst_points_top(chains, scale, width_scale, offset_y)
        overlay = _warp_top(garment, (h, w), src, dst)
    else:
        src = _src_points_bottom(garment.shape[1], garment.shape[0])
        dst = _dst_points_bottom(chains, scale, width_scale, offset_y)
        triangles = [
            (0, 1, 2),
            (0, 2, 3), (2, 4, 3),
            (3, 4, 7), (4, 8, 7),
            (2, 1, 6), (2, 6, 5),
            (5, 6, 9), (6, 10, 9),
        ]
        overlay = _warp_piecewise(garment, (h, w), src, dst, triangles)
    overlay = _clip_to_body(overlay, segmentation, shoulder_width)
    fitted = _alpha_blend(person, overlay)
    fitted = _restore_forearms(fitted, person, chains, shoulder_width)

    ok, encoded = cv2.imencode(".jpg", fitted, [int(cv2.IMWRITE_JPEG_QUALITY), 94])
    if not ok:
        raise LocalFitError("ساخت خروجی ناموفق بود.")

    return LocalFitResult(
        image_bytes=encoded.tobytes(),
        pose_quality=quality,
        category=category,
    )
