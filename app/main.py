from __future__ import annotations

import base64
import secrets
import threading
import time
from collections import OrderedDict
from dataclasses import dataclass
from pathlib import Path

from fastapi import FastAPI, File, Form, HTTPException, Request, UploadFile
from fastapi.concurrency import run_in_threadpool
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from app.config import settings
from app.services.local_fit import LocalFitError, fit_local, prepare_garment_asset

BASE_DIR = Path(__file__).resolve().parent.parent

app = FastAPI(
    title=settings.app_name,
    version="1.1.0",
    docs_url="/api/docs",
    redoc_url=None,
)

app.mount("/static", StaticFiles(directory=BASE_DIR / "static"), name="static")
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))

VALID_CATEGORIES = {"tops", "bottoms"}
LIVE_SESSION_TTL = 30 * 60
LIVE_SESSION_LIMIT = 16


@dataclass
class LiveSession:
    garment_raw: bytes
    category: str
    created_at: float
    touched_at: float


_LIVE_LOCK = threading.Lock()
_LIVE_SESSIONS: OrderedDict[str, LiveSession] = OrderedDict()


def _prune_live_sessions() -> None:
    now = time.monotonic()
    expired = [
        key
        for key, session in _LIVE_SESSIONS.items()
        if now - session.touched_at > LIVE_SESSION_TTL
    ]
    for key in expired:
        _LIVE_SESSIONS.pop(key, None)
    while len(_LIVE_SESSIONS) > LIVE_SESSION_LIMIT:
        _LIVE_SESSIONS.popitem(last=False)


def _store_live_session(garment_raw: bytes, category: str) -> str:
    token = secrets.token_urlsafe(18)
    now = time.monotonic()
    with _LIVE_LOCK:
        _prune_live_sessions()
        _LIVE_SESSIONS[token] = LiveSession(
            garment_raw=garment_raw,
            category=category,
            created_at=now,
            touched_at=now,
        )
    return token


def _get_live_session(token: str) -> LiveSession:
    with _LIVE_LOCK:
        _prune_live_sessions()
        session = _LIVE_SESSIONS.get(token)
        if session is None:
            raise HTTPException(
                status_code=404,
                detail="جلسه دوربین منقضی شده؛ دوباره Live Studio را شروع کن.",
            )
        session.touched_at = time.monotonic()
        _LIVE_SESSIONS.move_to_end(token)
        return session


@app.get("/", response_class=HTMLResponse)
async def home(request: Request) -> HTMLResponse:
    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "engine_ready": True,
            "engine_name": "Python + OpenCV",
        },
    )


@app.get("/health")
async def health() -> dict[str, object]:
    return {
        "status": "ok",
        "engine": "local-python-cv",
        "engine_ready": True,
        "external_api": False,
        "live_camera": True,
    }


async def _fit_bytes(
    person_raw: bytes,
    garment_raw: bytes,
    *,
    category: str,
    scale: float,
    width_scale: float,
    offset_x: float,
    offset_y: float,
    jpeg_quality: int = 94,
) -> dict[str, object]:
    if category not in VALID_CATEGORIES:
        raise HTTPException(status_code=422, detail="نوع لباس باید بالاتنه یا پایین‌تنه باشد.")

    max_upload_bytes = settings.max_upload_mb * 1024 * 1024
    if len(person_raw) > max_upload_bytes or len(garment_raw) > max_upload_bytes:
        raise HTTPException(status_code=413, detail="حجم تصویر بیشتر از حد مجاز است.")

    try:
        result = await run_in_threadpool(
            fit_local,
            person_raw,
            garment_raw,
            category=category,
            max_upload_bytes=max_upload_bytes,
            max_side=settings.max_image_side,
            scale=scale,
            width_scale=width_scale,
            offset_x=offset_x,
            offset_y=offset_y,
            jpeg_quality=jpeg_quality,
        )
    except LocalFitError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    except Exception as exc:
        raise HTTPException(status_code=500, detail="پردازش محلی لباس ناموفق بود.") from exc

    encoded = base64.b64encode(result.image_bytes).decode("ascii")
    return {
        "status": "completed",
        "image": f"data:image/jpeg;base64,{encoded}",
        "engine": "python-opencv-mediapipe",
        "category": result.category,
        "pose_quality": round(result.pose_quality, 3),
        "processing_ms": result.processing_ms,
        "cache": {
            "person": result.person_cache_hit,
            "garment": result.garment_cache_hit,
            "result": result.result_cache_hit,
        },
    }


async def _fit_request(
    person_image: UploadFile,
    garment_image: UploadFile,
    category: str,
    scale: float,
    width_scale: float,
    offset_x: float,
    offset_y: float,
) -> dict[str, object]:
    max_upload_bytes = settings.max_upload_mb * 1024 * 1024
    person_raw = await person_image.read(max_upload_bytes + 1)
    garment_raw = await garment_image.read(max_upload_bytes + 1)
    return await _fit_bytes(
        person_raw,
        garment_raw,
        category=category,
        scale=scale,
        width_scale=width_scale,
        offset_x=offset_x,
        offset_y=offset_y,
    )


@app.post("/api/garment/prepare")
async def prepare_garment(
    garment_image: UploadFile = File(...),
) -> dict[str, object]:
    max_upload_bytes = settings.max_upload_mb * 1024 * 1024
    raw = await garment_image.read(max_upload_bytes + 1)
    if len(raw) > max_upload_bytes:
        raise HTTPException(status_code=413, detail="حجم تصویر لباس بیشتر از حد مجاز است.")

    try:
        prepared = await run_in_threadpool(
            prepare_garment_asset,
            raw,
            max_upload_bytes=max_upload_bytes,
            max_side=settings.max_image_side,
        )
    except LocalFitError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc

    encoded = base64.b64encode(prepared.png_bytes).decode("ascii")
    return {
        "status": "ready",
        "image": f"data:image/png;base64,{encoded}",
        "width": prepared.width,
        "height": prepared.height,
        "sleeve_reach": round(prepared.sleeve_reach, 3),
        "alpha_coverage": round(prepared.alpha_coverage, 4),
    }


@app.post("/api/fit-local")
async def fit_local_endpoint(
    person_image: UploadFile = File(...),
    garment_image: UploadFile = File(...),
    category: str = Form("tops"),
    scale: float = Form(1.0),
    width_scale: float = Form(1.0),
    offset_x: float = Form(0.0),
    offset_y: float = Form(0.0),
) -> dict[str, object]:
    return await _fit_request(
        person_image,
        garment_image,
        category,
        scale,
        width_scale,
        offset_x,
        offset_y,
    )


@app.post("/api/try-on")
async def try_on_compat(
    person_image: UploadFile = File(...),
    garment_image: UploadFile = File(...),
    category: str = Form("tops"),
    scale: float = Form(1.0),
    width_scale: float = Form(1.0),
    offset_x: float = Form(0.0),
    offset_y: float = Form(0.0),
) -> dict[str, object]:
    return await _fit_request(
        person_image,
        garment_image,
        category,
        scale,
        width_scale,
        offset_x,
        offset_y,
    )


@app.post("/api/live/session")
async def create_live_session(
    garment_image: UploadFile = File(...),
    category: str = Form("tops"),
) -> dict[str, object]:
    if category not in VALID_CATEGORIES:
        raise HTTPException(status_code=422, detail="نوع لباس باید بالاتنه یا پایین‌تنه باشد.")

    max_upload_bytes = settings.max_upload_mb * 1024 * 1024
    garment_raw = await garment_image.read(max_upload_bytes + 1)
    if not garment_raw:
        raise HTTPException(status_code=400, detail="تصویر لباس خالی است.")
    if len(garment_raw) > max_upload_bytes:
        raise HTTPException(status_code=413, detail="حجم تصویر لباس بیشتر از حد مجاز است.")

    token = _store_live_session(garment_raw, category)
    return {
        "status": "ready",
        "session_id": token,
        "category": category,
        "expires_in": LIVE_SESSION_TTL,
    }


@app.post("/api/live/frame")
async def fit_live_frame(
    person_image: UploadFile = File(...),
    session_id: str = Form(...),
    scale: float = Form(1.0),
    width_scale: float = Form(1.0),
    offset_x: float = Form(0.0),
    offset_y: float = Form(0.0),
) -> dict[str, object]:
    session = _get_live_session(session_id)
    max_upload_bytes = settings.max_upload_mb * 1024 * 1024
    person_raw = await person_image.read(max_upload_bytes + 1)

    result = await _fit_bytes(
        person_raw,
        session.garment_raw,
        category=session.category,
        scale=scale,
        width_scale=width_scale,
        offset_x=offset_x,
        offset_y=offset_y,
        jpeg_quality=86,
    )
    result["live"] = True
    return result


@app.delete("/api/live/session/{session_id}")
async def close_live_session(session_id: str) -> dict[str, object]:
    with _LIVE_LOCK:
        removed = _LIVE_SESSIONS.pop(session_id, None) is not None
    return {"status": "closed", "removed": removed}
