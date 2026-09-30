# Try Poshak — AI Virtual Try-On

وب‌اپ پایتونی برای پرو مجازی لباس: کاربر عکس خود را بارگذاری می‌کند، لباس را انتخاب/آپلود می‌کند و خروجی پوشیدن لباس روی همان شخص را می‌بیند.

## معماری

- **FastAPI** برای API و سرو کردن UI
- **FASHN Virtual Try-On v1.6** به‌عنوان موتور پیش‌فرض production برای `tops / bottoms / one-pieces`
- پشتیبانی اختیاری از **Try-On Max** برای خروجی با کیفیت بالاتر
- ارسال تصاویر v1.6 به‌صورت Base64 و درخواست `return_base64=true`
- UI فارسی RTL، واکنش‌گرا، مناسب موبایل و دسکتاپ
- اعتبارسنجی تصویر، EXIF rotation، resize امن و محدودیت حجم
- Docker + healthcheck + تست پایه

> این قابلیت «نمایش تقریبی» است و ابزار اندازه‌گیری سایز یا تضمین فیت واقعی لباس نیست.

## اجرای سریع

```bash
cp .env.example .env
# FASHN_API_KEY را در .env قرار بده
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

سپس:
`http://localhost:8000`

## Docker

```bash
docker build -t try-poshak .
docker run --rm -p 8000:8000 --env-file .env try-poshak
```

## تنظیمات

```env
FASHN_API_KEY=...
FASHN_MODEL=tryon-v1.6
MAX_UPLOAD_MB=12
REQUEST_TIMEOUT_SECONDS=120
```

`tryon-v1.6` برای تجربه تعاملی سریع‌تر و کنترل دقیق دسته لباس مناسب‌تر است. `tryon-max` نیز توسط provider پشتیبانی شده و برای خروجی نهایی با وفاداری بالاتر قابل انتخاب است.

## API

### `POST /api/try-on`

Multipart fields:

- `person_image`: عکس شخص
- `garment_image`: عکس لباس
- `category`: یکی از `tops`, `bottoms`, `one-pieces`
- `mode`: یکی از `performance`, `balanced`, `quality`

خروجی نمونه:

```json
{
  "status": "completed",
  "image": "data:image/jpeg;base64,...",
  "provider": "fashn",
  "model": "tryon-v1.6"
}
```

## نکات عکس ورودی

- شخص کامل یا حداقل ناحیه‌ای که لباس قرار است روی آن عوض شود واضح باشد.
- نور یکنواخت و تصویر بدون تاری شدید باشد.
- عکس لباس ترجیحاً روبه‌رو، پس‌زمینه ساده یا ghost-mannequin/flat-lay باشد.
- برای پیراهن `tops`، برای شلوار `bottoms` و برای لباس یک‌تکه `one-pieces`.

## موتورهای متن‌باز بررسی‌شده

CatVTON و IDM-VTON برای R&D مناسب‌اند، اما مجوزهای رسمی آن‌ها **CC BY-NC-SA 4.0** است و برای محصول تجاری انتخاب پیش‌فرض این پروژه نیستند. لایه provider از UI جدا شده تا در ادامه بتوان موتور دیگری را بدون بازنویسی تجربه کاربری جایگزین کرد.
