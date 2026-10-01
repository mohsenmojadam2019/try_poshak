from __future__ import annotations

import base64
from pathlib import Path

from fastapi import FastAPI, File, Form, HTTPException, Request, UploadFile
from fastapi.concurrency import run_in_threadpool
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from app.config import settings
from app.services.local_fit import LocalFitError, fit_local

BASE_DIR = Path(__file__).resolve().parent.parent

app = FastAPI(
    title=settings.app_name,
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url=None,
)

app.mount("/static", StaticFiles(directory=BASE_DIR / "static"), name="static")
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))

VALID_CATEGORIES = {"tops", "bottoms"}


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
    if category not in VALID_CATEGORIES:
        raise HTTPException(status_code=422, detail="نوع لباس باید بالاتنه یا پایین‌تنه باشد.")

    max_upload_bytes = settings.max_upload_mb * 1024 * 1024
    person_raw = await person_image.read(max_upload_bytes + 1)
    garment_raw = await garment_image.read(max_upload_bytes + 1)

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
