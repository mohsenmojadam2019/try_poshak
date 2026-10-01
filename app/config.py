from __future__ import annotations

import os
from dataclasses import dataclass

from dotenv import load_dotenv

load_dotenv()


@dataclass(frozen=True)
class Settings:
    app_name: str = os.getenv("APP_NAME", "Try Poshak")
    max_upload_mb: int = int(os.getenv("MAX_UPLOAD_MB", "12"))
    max_image_side: int = int(os.getenv("MAX_IMAGE_SIDE", "1600"))


settings = Settings()
