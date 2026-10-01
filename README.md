# Try Poshak — Local Virtual Fitting

Try Poshak یک موتور پرو مجازی **بدون API خارجی و بدون Generative AI** است. پروژه دو موتور مکمل دارد:

- **Ultra Live Mirror**: رهگیری بدن و Render لباس روی خود مرورگر با MediaPipe Tasks Vision + Three.js/WebGL؛ بدون ارسال هر فریم دوربین به سرور.
- **Python HQ Fit**: پردازش تک‌فریم با Python + OpenCV + MediaPipe برای جایگذاری دقیق‌تر و خروجی قابل دانلود.

## Ultra Live Mirror

مسیر Live جدید برای حس آینه واقعی طراحی شده است:

1. Camera با `getUserMedia` باز می‌شود.
2. Pose Landmarker به‌صورت local/WASM روی مرورگر اجرا می‌شود و 33 landmark و world landmark بدن را می‌دهد.
3. عکس محصول یک بار در `POST /api/garment/prepare` به PNG شفاف و metadata لباس تبدیل می‌شود.
4. Three.js چند mesh پویا برای torso، آستین‌ها، کمر و پاها Render می‌کند.
5. لباس بر اساس شانه، لگن، آرنج، مچ، زانو و مچ پا deform می‌شود.
6. زاویه چرخش بدن از world landmarks روی shading و perspective mesh اثر می‌گذارد.
7. یک فیزیک سبک spring/inertia باعث حرکت نرم‌تر پارچه هنگام جابه‌جایی بدن می‌شود.
8. Occlusion canvas سر، دست و بازوهای واقعی را دوباره جلوی لباس می‌گذارد.
9. Adaptive smoothing لرزش landmarkها را کم می‌کند.
10. انتخاب پیراهن/شلوار یا آپلود محصول در بخش اصلی، Ultra Live را بدون reload به همان لباس تغییر می‌دهد.

مدل browser pose و فایل‌های WASM داخل `static/` نگهداری می‌شوند؛ در زمان اجرا dependency اینترنتی نداریم.

### اجرای Ultra Live

    npm ci
    npm run build:ultra

سپس Backend:

    python3 -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
    pip install --no-deps mediapipe==0.10.14
    uvicorn app.main:app --host 0.0.0.0 --port 8000

روی همان کامپیوتر: `http://127.0.0.1:8000`

برای دوربین موبایل، صفحه باید از **HTTPS** باز شود؛ `getUserMedia` روی IP معمولی HTTP مجاز نیست.

## Python HQ Fit

موتور Python برای عکس ثابت: تشخیص بدن، حذف پس‌زمینه لباس، Warp هندسی، تخمین طول آستین، occlusion سر/دست، نور محلی، feathering و cache چندمرحله‌ای.

## Legacy Python Live Studio

- `POST /api/live/session`: ثبت لباس یک‌بار برای session.
- `POST /api/live/frame`: ارسال JPEG دوربین و پردازش سمت Python.
- مناسب fallback و مقایسه؛ Ultra Live برای latency پایین‌تر طراحی شده است.

## API

### `POST /api/garment/prepare`

ورودی `garment_image`؛ خروجی PNG شفاف لباس، عرض/ارتفاع، `sleeve_reach` و `alpha_coverage`.

### `POST /api/fit-local`

ورودی‌ها: `person_image`, `garment_image`, `category`, `scale`, `width_scale`, `offset_x`, `offset_y`.

## نکات ورودی

- عکس شخص: تمام بدن از سر تا کف پا، روبه‌رو، نور یکنواخت.
- عکس محصول: روبه‌رو، پس‌زمینه سفید/ساده/شفاف؛ Flat-lay یا ghost mannequin بهتر است.

## محدودیت فنی

Ultra Live یک renderer مبتنی بر body tracking و mesh deformation است و تصویر جدید از هیچ تولید نمی‌کند. بنابراین هندسه‌ای که در عکس محصول دیده نمی‌شود را بازسازی نمی‌کند. برای realism بالاتر، مسیر بعدی GLB rigged garment و mesh سه‌بعدی واقعی است؛ معماری Ultra Live برای این توسعه آماده شده است.

## تست و Build

    pytest -q
    npm ci
    npm run build:ultra
    node --check static/app.js

## Docker

Bundle مرورگر در `static/pro-live.bundle.js` قرار دارد؛ با تغییر `web/pro-live.js` دوباره `npm run build:ultra` اجرا شود.

## Third-party

- MediaPipe Tasks Vision — Apache-2.0
- Three.js — MIT

جزئیات در `THIRD_PARTY_NOTICES.md`.
