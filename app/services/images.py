from __future__ import annotations

import base64
import io

from PIL import Image, ImageOps, UnidentifiedImageError

Image.MAX_IMAGE_PIXELS = 40_000_000

ALLOWED_FORMATS = {"JPEG", "PNG", "WEBP"}


class ImageValidationError(ValueError):
    pass


def normalize_image(raw: bytes, *, max_upload_bytes: int, max_side: int) -> bytes:
    if not raw:
        raise ImageValidationError("فایل تصویر خالی است.")

    if len(raw) > max_upload_bytes:
        raise ImageValidationError("حجم تصویر بیشتر از حد مجاز است.")

    try:
        with Image.open(io.BytesIO(raw)) as probe:
            fmt = (probe.format or "").upper()
            if fmt not in ALLOWED_FORMATS:
                raise ImageValidationError("فرمت تصویر باید JPG، PNG یا WEBP باشد.")
            probe.verify()

        with Image.open(io.BytesIO(raw)) as image:
            image = ImageOps.exif_transpose(image)

            if image.width < 256 or image.height < 256:
                raise ImageValidationError("رزولوشن تصویر خیلی پایین است.")

            image.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)

            if image.mode in ("RGBA", "LA"):
                background = Image.new("RGB", image.size, "white")
                alpha = image.getchannel("A")
                background.paste(image.convert("RGB"), mask=alpha)
                image = background
            else:
                image = image.convert("RGB")

            out = io.BytesIO()
            image.save(out, format="JPEG", quality=91, optimize=True, progressive=True)
            return out.getvalue()

    except ImageValidationError:
        raise
    except (UnidentifiedImageError, OSError, Image.DecompressionBombError) as exc:
        raise ImageValidationError("فایل ارسال‌شده تصویر معتبر نیست.") from exc


def to_data_uri(jpeg_bytes: bytes) -> str:
    encoded = base64.b64encode(jpeg_bytes).decode("ascii")
    return f"data:image/jpeg;base64,{encoded}"
