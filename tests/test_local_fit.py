from __future__ import annotations

import numpy as np

from app.services.local_fit import (
    _dst_points_top,
    _extract_garment,
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

    src = _src_points_top(garment.shape[1], garment.shape[0])
    dst = _dst_points_top(chains, 1.0, 1.0, 0.0)
    overlay = _warp_top(garment, (900, 600), src, dst)

    assert overlay.shape == (900, 600, 4)
    assert np.count_nonzero(overlay[:, :, 3] > 10) > 5000
