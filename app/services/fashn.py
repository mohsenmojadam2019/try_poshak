from __future__ import annotations

import asyncio
import time
from dataclasses import dataclass

import httpx


class FashnError(RuntimeError):
    pass


@dataclass
class FashnResult:
    image: str
    prediction_id: str
    model: str


class FashnClient:
    def __init__(
        self,
        *,
        api_key: str,
        base_url: str,
        model: str,
        timeout_seconds: int,
    ) -> None:
        self.api_key = api_key
        self.base_url = base_url.rstrip("/")
        self.model = model
        self.timeout_seconds = timeout_seconds

    @property
    def configured(self) -> bool:
        return bool(self.api_key)

    def _headers(self) -> dict[str, str]:
        return {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }

    async def run_try_on(
        self,
        *,
        person_image: str,
        garment_image: str,
        category: str,
        mode: str,
    ) -> FashnResult:
        if not self.configured:
            raise FashnError("کلید FASHN_API_KEY روی سرور تنظیم نشده است.")

        payload = {
            "model_name": self.model,
            "inputs": {
                "model_image": person_image,
                "garment_image": garment_image,
                "category": category,
                "mode": mode,
                "output_format": "jpeg",
                "return_base64": True,
                "num_samples": 1,
            },
        }

        timeout = httpx.Timeout(self.timeout_seconds, connect=20.0)
        async with httpx.AsyncClient(timeout=timeout) as client:
            try:
                run_response = await client.post(
                    f"{self.base_url}/run",
                    headers=self._headers(),
                    json=payload,
                )
                run_response.raise_for_status()
                run_data = run_response.json()
            except httpx.HTTPStatusError as exc:
                detail = _safe_detail(exc.response)
                raise FashnError(f"خطای سرویس Try-On: {detail}") from exc
            except (httpx.HTTPError, ValueError) as exc:
                raise FashnError("ارتباط با سرویس Try-On برقرار نشد.") from exc

            prediction_id = run_data.get("id")
            if not prediction_id:
                raise FashnError("سرویس Try-On شناسه پردازش برنگرداند.")

            deadline = time.monotonic() + self.timeout_seconds

            while time.monotonic() < deadline:
                await asyncio.sleep(1.5)

                try:
                    status_response = await client.get(
                        f"{self.base_url}/status/{prediction_id}",
                        headers=self._headers(),
                    )
                    status_response.raise_for_status()
                    status_data = status_response.json()
                except httpx.HTTPStatusError as exc:
                    detail = _safe_detail(exc.response)
                    raise FashnError(f"خطا در دریافت وضعیت Try-On: {detail}") from exc
                except (httpx.HTTPError, ValueError) as exc:
                    raise FashnError("دریافت وضعیت Try-On ناموفق بود.") from exc

                status = status_data.get("status")

                if status == "completed":
                    output = status_data.get("output") or []
                    if not output or not isinstance(output[0], str):
                        raise FashnError("خروجی تصویر از سرویس دریافت نشد.")
                    return FashnResult(
                        image=output[0],
                        prediction_id=prediction_id,
                        model=self.model,
                    )

                if status in {"starting", "in_queue", "processing"}:
                    continue

                error = status_data.get("error") or "پردازش تصویر ناموفق بود."
                raise FashnError(str(error)[:500])

        raise FashnError("زمان پردازش بیش از حد مجاز شد. دوباره تلاش کنید.")


def _safe_detail(response: httpx.Response) -> str:
    try:
        data = response.json()
        detail = data.get("error") or data.get("message") or data.get("detail")
        if detail:
            return str(detail)[:500]
    except ValueError:
        pass
    return f"HTTP {response.status_code}"
