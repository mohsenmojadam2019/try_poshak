from __future__ import annotations

import io

import pytest
from PIL import Image

from app.services.images import ImageValidationError, normalize_image, to_data_uri


def make_image(width: int = 640, height: int = 800, fmt: str = "PNG") -> bytes:
    image = Image.new("RGB", (width, height), "white")
    output = io.BytesIO()
    image.save(output, format=fmt)
    return output.getvalue()


def test_normalize_image_returns_jpeg() -> None:
    result = normalize_image(
        make_image(),
        max_upload_bytes=5 * 1024 * 1024,
        max_side=1200,
    )
    image = Image.open(io.BytesIO(result))
    assert image.format == "JPEG"
    assert image.width == 640
    assert image.height == 800


def test_normalize_image_resizes_large_input() -> None:
    result = normalize_image(
        make_image(2400, 1800),
        max_upload_bytes=20 * 1024 * 1024,
        max_side=1000,
    )
    image = Image.open(io.BytesIO(result))
    assert max(image.size) == 1000


def test_rejects_tiny_image() -> None:
    with pytest.raises(ImageValidationError):
        normalize_image(
            make_image(100, 100),
            max_upload_bytes=5 * 1024 * 1024,
            max_side=1200,
        )


def test_data_uri_prefix() -> None:
    result = to_data_uri(b"hello")
    assert result.startswith("data:image/jpeg;base64,")
