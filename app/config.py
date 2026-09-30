from __future__ import annotations

import os
from dataclasses import dataclass


@dataclass(frozen=True)
class Settings:
    app_name: str = os.getenv("APP_NAME", "Try Poshak")
    fashn_api_key: str = os.getenv("FASHN_API_KEY", "").strip()
    fashn_model: str = os.getenv("FASHN_MODEL", "tryon-v1.6").strip()
    fashn_base_url: str = os.getenv("FASHN_BASE_URL", "https://api.fashn.ai/v1").rstrip("/")
    max_upload_mb: int = int(os.getenv("MAX_UPLOAD_MB", "12"))
    request_timeout_seconds: int = int(os.getenv("REQUEST_TIMEOUT_SECONDS", "120"))
    max_image_side: int = int(os.getenv("MAX_IMAGE_SIDE", "1600"))


settings = Settings()
