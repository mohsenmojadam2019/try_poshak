from __future__ import annotations

import cv2
import numpy as np

from app.services.local_fit import (
    _dst_points_top,
    _estimate_sleeve_reach,
    _extract_garment,
    _prepare_garment,
    _src_points_bottom,
    _src_points_top,
    _warp_top,
)


def test_extract_garment_preserves_transparency() -> None:
    image = np.zeros((320, 260, 4), dtype=np.uint8)
    image[50:280, 45:215, :3] = (30, 80, 160)
    image[50:280, 45:215, 3] = 255

    garment = _extract_garment(image)

    assert garment.shape[2] == 4
    assert garment.shape[0] < image.shape[0]
    assert garment.shape[1] < image.shape[1]
    assert int(garment[:, :, 3].max()) == 255


def test_top_warp_produces_visible_overlay() -> None:
    garment = np.zeros((300, 240, 4), dtype=np.uint8)
    garment[20:290, 20:220, :3] = (60, 90, 130)
    garment[20:290, 20:220, 3] = 255

    chains = [
        {
            "shoulder": np.array([180, 170], np.float32),
            "elbow": np.array([120, 290], np.float32),
            "wrist": np.array([115, 420], np.float32),
            "hip": np.array([205, 420], np.float32),
            "knee": np.array([205, 620], np.float32),
            "ankle": np.array([205, 830], np.float32),
        },
        {
            "shoulder": np.array([420, 170], np.float32),
            "elbow": np.array([480, 290], np.float32),
            "wrist": np.array([485, 420], np.float32),
            "hip": np.array([395, 420], np.float32),
            "knee": np.array([395, 620], np.float32),
            "ankle": np.array([395, 830], np.float32),
        },
    ]

    src = _src_points_top(garment)
    dst = _dst_points_top(chains, 1.0, 1.0, 0.0, 0.0)
    overlay = _warp_top(garment, (900, 600), src, dst)

    assert overlay.shape == (900, 600, 4)
    assert np.count_nonzero(overlay[:, :, 3] > 10) > 5000


def test_bottom_source_points_detect_two_legs() -> None:
    garment = np.zeros((500, 300, 4), dtype=np.uint8)
    garment[20:210, 55:245, :3] = (45, 55, 70)
    garment[20:210, 55:245, 3] = 255
    garment[180:490, 55:135, :3] = (45, 55, 70)
    garment[180:490, 55:135, 3] = 255
    garment[180:490, 165:245, :3] = (45, 55, 70)
    garment[180:490, 165:245, 3] = 255

    points = _src_points_bottom(garment)

    assert points.shape == (11, 2)
    assert 120 < points[2, 1] < 300
    assert points[3, 0] < points[4, 0] < points[5, 0] < points[6, 0]
    assert points[7, 0] < points[8, 0] < points[9, 0] < points[10, 0]


def test_sleeve_reach_distinguishes_long_and_short_sleeves() -> None:
    short = np.zeros((400, 300, 4), dtype=np.uint8)
    short[40:390, 90:210, :3] = (40, 80, 130)
    short[40:390, 90:210, 3] = 255
    short[70:170, 30:270, :3] = (40, 80, 130)
    short[70:170, 30:270, 3] = 255

    long = short.copy()
    long[120:330, 20:95, :3] = (40, 80, 130)
    long[120:330, 20:95, 3] = 255
    long[120:330, 205:280, :3] = (40, 80, 130)
    long[120:330, 205:280, 3] = 255

    assert _estimate_sleeve_reach(short) < 1.0
    assert _estimate_sleeve_reach(long) > 1.2


def test_garment_preprocessing_cache_hits() -> None:
    image = np.full((320, 260, 3), 255, dtype=np.uint8)
    cv2.rectangle(image, (60, 40), (200, 285), (30, 80, 160), -1)
    ok, encoded = cv2.imencode(".png", image)
    assert ok
    raw = encoded.tobytes()

    first, first_hit = _prepare_garment(
        raw,
        max_upload_bytes=5 * 1024 * 1024,
        max_side=1200,
    )
    second, second_hit = _prepare_garment(
        raw,
        max_upload_bytes=5 * 1024 * 1024,
        max_side=1200,
    )

    assert first_hit is False
    assert second_hit is True
    assert first.shape == second.shape
