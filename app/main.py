from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI, File, Form, HTTPException, Request, UploadFile
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from app.config import settings
from app.services.fashn import FashnClient, FashnError
from app.services.images import ImageValidationError, normalize_image, to_data_uri

BASE_DIR = Path(__file__).resolve().parent.parent

app = FastAPI(
    title=settings.app_name,
    version="0.1.0",
    docs_url="/api/docs",
    redoc_url=None,
)

app.mount("/static", StaticFiles(directory=BASE_DIR / "static"), name="static")
templates = Jinja2Templates(directory=str(BASE_DIR / "templates"))

fashn = FashnClient(
    api_key=settings.fashn_api_key,
    base_url=settings.fashn_base_url,
    model=settings.fashn_model,
    timeout_seconds=settings.request_timeout_seconds,
)

VALID_CATEGORIES = {"tops", "bottoms", "one-pieces"}
VALID_MODES = {"performance", "balanced", "quality"}


@app.get("/", response_class=HTMLResponse)
async def home(request: Request) -> HTMLResponse:
    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "provider_ready": fashn.configured,
            "model_name": settings.fashn_model,
        },
    )


@app.get("/health")
async def health() -> dict[str, object]:
    return {
        "status": "ok",
        "provider": "fashn",
        "provider_ready": fashn.configured,
        "model": settings.fashn_model,
    }


@app.post("/api/try-on")
async def try_on(
    person_image: UploadFile = File(...),
    garment_image: UploadFile = File(...),
    category: str = Form("tops"),
    mode: str = Form("balanced"),
) -> dict[str, str]:
    if category not in VALID_CATEGORIES:
        raise HTTPException(status_code=422, detail="نوع لباس نامعتبر است.")
    if mode not in VALID_MODES:
        raise HTTPException(status_code=422, detail="حالت پردازش نامعتبر است.")

    max_upload_bytes = settings.max_upload_mb * 1024 * 1024

    try:
        person_raw = await person_image.read(max_upload_bytes + 1)
        garment_raw = await garment_image.read(max_upload_bytes + 1)

        person_jpeg = normalize_image(
            person_raw,
            max_upload_bytes=max_upload_bytes,
            max_side=settings.max_image_side,
        )
        garment_jpeg = normalize_image(
            garment_raw,
            max_upload_bytes=max_upload_bytes,
            max_side=settings.max_image_side,
        )

        result = await fashn.run_try_on(
            person_image=to_data_uri(person_jpeg),
            garment_image=to_data_uri(garment_jpeg),
            category=category,
            mode=mode,
        )

        return {
            "status": "completed",
            "image": result.image,
            "prediction_id": result.prediction_id,
            "provider": "fashn",
            "model": result.model,
        }

    except ImageValidationError as exc:
        raise HTTPException(status_code=400, detail=str(exc)) from exc
    except FashnError as exc:
        status_code = 503 if not fashn.configured else 502
        raise HTTPException(status_code=status_code, detail=str(exc)) from exc
