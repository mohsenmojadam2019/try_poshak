(() => {
  const $ = (id) => document.getElementById(id);
  const state = {
    personFile: null, personImage: null, category: "tops",
    garmentSrc: "/static/samples/shirt_navy.png", garmentFile: null,
    garmentImage: null, garmentName: "پیراهن سرمه‌ای",
    scale: 1, y: 0, aiBusy: false, autoTimer: null
  };

  const personInput = $("personInput");
  const garmentInput = $("garmentInput");
  const personPreview = $("personPreview");
  const personEmpty = $("personEmpty");
  const poseGuide = $("poseGuide");
  const garmentPreview = $("garmentPreview");
  const customSelected = $("customSelected");
  const customName = $("customName");
  const selectedLabel = $("selectedLabel");
  const canvas = $("previewCanvas");
  const ctx = canvas.getContext("2d");
  const previewEmpty = $("previewEmpty");
  const aiLoading = $("aiLoading");
  const aiResult = $("aiResult");
  const aiButton = $("aiButton");
  const scaleRange = $("scaleRange");
  const yRange = $("yRange");
  const toast = $("toast");

  function notify(message, type = "") {
    toast.textContent = message;
    toast.className = "toast show " + type;
    clearTimeout(notify.t);
    notify.t = setTimeout(() => toast.className = "toast", 3200);
  }

  function validImage(file) {
    if (!file || !["image/jpeg","image/png","image/webp"].includes(file.type)) {
      notify("فایل باید JPG، PNG یا WEBP باشد.", "error"); return false;
    }
    if (file.size > 12 * 1024 * 1024) {
      notify("حجم تصویر بیشتر از ۱۲ مگابایت است.", "error"); return false;
    }
    return true;
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }

  async function setPerson(file) {
    if (!validImage(file)) return;
    state.personFile = file;
    const url = URL.createObjectURL(file);
    try {
      state.personImage = await loadImage(url);
      personPreview.src = url;
      personPreview.hidden = false;
      personEmpty.hidden = true;
      poseGuide.style.opacity = ".38";
      if (state.personImage.width > state.personImage.height) {
        notify("برای نتیجه بهتر عکس عمودی و تمام‌قد انتخاب کن.");
      } else {
        notify("عکس آماده شد؛ حالا یک لباس را انتخاب کن.");
      }
      await ensureGarmentImage();
      renderPreview();
      updateActions();
      scheduleAutoAI();
    } catch {
      URL.revokeObjectURL(url);
      notify("این تصویر قابل خواندن نیست.", "error");
    }
  }

  function setCategory(category) {
    state.category = category;
    document.querySelectorAll(".category-chip").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === category);
    });
  }

  async function selectSample(card) {
    document.querySelectorAll(".product-card").forEach(x => x.classList.remove("active"));
    card.classList.add("active");
    state.garmentSrc = card.dataset.src;
    state.garmentFile = null;
    state.garmentName = card.dataset.name;
    state.garmentImage = await loadImage(state.garmentSrc);
    setCategory(card.dataset.category);
    selectedLabel.textContent = state.garmentName;
    customSelected.hidden = true;
    garmentInput.value = "";
    resetFit(false);
    renderPreview();
    updateActions();
    scheduleAutoAI();
  }

  async function removeWhiteBackground(file) {
    const url = URL.createObjectURL(file);
    const img = await loadImage(url);
    const maxSide = 900;
    const ratio = Math.min(1, maxSide / Math.max(img.width, img.height));
    const w = Math.max(1, Math.round(img.width * ratio));
    const h = Math.max(1, Math.round(img.height * ratio));
    const c = document.createElement("canvas"); c.width = w; c.height = h;
    const x = c.getContext("2d", { willReadFrequently: true });
    x.drawImage(img, 0, 0, w, h);
    const data = x.getImageData(0,0,w,h);
    for (let i=0;i<data.data.length;i+=4) {
      const r=data.data[i], g=data.data[i+1], b=data.data[i+2];
      const min=Math.min(r,g,b), max=Math.max(r,g,b);
      if (min > 242 && max-min < 18) data.data[i+3]=0;
      else if (min > 225 && max-min < 25) data.data[i+3]=Math.min(data.data[i+3],90);
    }
    x.putImageData(data,0,0);
    URL.revokeObjectURL(url);
    return loadImage(c.toDataURL("image/png"));
  }

  async function setCustomGarment(file) {
    if (!validImage(file)) return;
    state.garmentFile = file;
    state.garmentSrc = null;
    state.garmentName = file.name.replace(/\.[^.]+$/, "");
    try {
      state.garmentImage = await removeWhiteBackground(file);
      const url = URL.createObjectURL(file);
      garmentPreview.src = url;
      customName.textContent = state.garmentName;
      customSelected.hidden = false;
      selectedLabel.textContent = "لباس شخصی";
      document.querySelectorAll(".product-card").forEach(x => x.classList.remove("active"));
      resetFit(false);
      renderPreview();
      updateActions();
      scheduleAutoAI();
      notify("لباس شخصی آماده شد. در صورت نیاز نوع لباس را اصلاح کن.");
    } catch {
      notify("تصویر لباس قابل پردازش نیست.", "error");
    }
  }

  async function ensureGarmentImage() {
    if (state.garmentImage) return;
    if (state.garmentSrc) state.garmentImage = await loadImage(state.garmentSrc);
  }

  function drawContained(img, w, h) {
    const s = Math.min(w / img.width, h / img.height);
    const dw = img.width*s, dh=img.height*s;
    const dx=(w-dw)/2, dy=(h-dh)/2;
    ctx.drawImage(img,dx,dy,dw,dh);
  }

  function renderPreview() {
    if (!state.personImage) {
      canvas.style.display = "none";
      previewEmpty.hidden = false;
      return;
    }
    const displayW = 900, displayH = 1125;
    canvas.width = displayW; canvas.height = displayH;
    canvas.style.display = "block";
    previewEmpty.hidden = true;
    ctx.clearRect(0,0,displayW,displayH);
    ctx.fillStyle="#eef2f4"; ctx.fillRect(0,0,displayW,displayH);
    drawContained(state.personImage, displayW, displayH);
    if (!state.garmentImage) return;

    const baseScale = state.category === "tops" ? 0.64 : 0.60;
    const h = displayH * baseScale * state.scale;
    const w = h * (state.garmentImage.width / state.garmentImage.height);
    const x = (displayW - w) / 2;
    const baseY = state.category === "tops" ? displayH*0.07 : displayH*0.39;
    const y = baseY + (state.y/100)*displayH;
    ctx.drawImage(state.garmentImage, x, y, w, h);
  }

  function resetFit(redraw = true) {
    state.scale = 1; state.y = 0;
    scaleRange.value = 100; yRange.value = 0;
    if (redraw) renderPreview();
  }

  function updateActions() {
    aiButton.disabled = !state.personFile || state.aiBusy;
  }

  function showTab(category) {
    document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === category));
    document.querySelectorAll(".product-card").forEach(card => {
      card.classList.toggle("hidden-product", card.dataset.category !== category);
    });
  }

  async function getGarmentFile() {
    if (state.garmentFile) return state.garmentFile;
    const response = await fetch(state.garmentSrc);
    const blob = await response.blob();
    return new File([blob], (state.garmentSrc.split("/").pop() || "garment.png"), {type: blob.type || "image/png"});
  }

  function scheduleAutoAI() {
    clearTimeout(state.autoTimer);
    if (!window.TRY_POSHAK?.providerReady || !state.personFile) return;
    state.autoTimer = setTimeout(() => runAI(true), 900);
  }

  async function runAI(auto = false) {
    if (!state.personFile) { notify("اول عکس تمام‌قد را انتخاب کن.", "error"); return; }
    if (!window.TRY_POSHAK?.providerReady) {
      notify("پیش‌نمایش فوری فعال است؛ برای پرو واقعی باید FASHN_API_KEY تنظیم شود.", "error"); return;
    }
    if (state.aiBusy) return;
    state.aiBusy = true; updateActions();
    aiLoading.hidden = false; aiResult.hidden = true;
    try {
      const form = new FormData();
      form.append("person_image", state.personFile);
      form.append("garment_image", await getGarmentFile());
      form.append("category", state.category);
      form.append("mode", "balanced");
      const response = await fetch("/api/try-on", {method:"POST", body:form});
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.detail || "پردازش AI ناموفق بود.");
      aiResult.src = data.image;
      aiResult.hidden = false;
      notify(auto ? "پرو واقعی به‌صورت خودکار ساخته شد." : "پرو واقعی آماده شد.");
    } catch (error) {
      notify(error.message || "خطا در پرو واقعی.", "error");
    } finally {
      state.aiBusy = false; aiLoading.hidden = true; updateActions();
    }
  }

  personInput.addEventListener("change", () => setPerson(personInput.files[0]));
  garmentInput.addEventListener("change", () => setCustomGarment(garmentInput.files[0]));

  document.querySelectorAll(".product-card").forEach(card => card.addEventListener("click", () => selectSample(card)));
  document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", async () => {
    showTab(tab.dataset.tab);
    const first = [...document.querySelectorAll(".product-card")].find(x => x.dataset.category === tab.dataset.tab);
    if (first) await selectSample(first);
  }));
  document.querySelectorAll(".category-chip").forEach(btn => btn.addEventListener("click", () => {
    setCategory(btn.dataset.category); resetFit(); scheduleAutoAI();
  }));

  scaleRange.addEventListener("input", () => { state.scale = Number(scaleRange.value)/100; renderPreview(); });
  yRange.addEventListener("input", () => { state.y = Number(yRange.value); renderPreview(); });
  $("resetFit").addEventListener("click", () => resetFit());
  aiButton.addEventListener("click", () => runAI(false));

  ["dragenter","dragover"].forEach(name => $("personDrop").addEventListener(name, e => {
    e.preventDefault(); $("personDrop").classList.add("drag-over");
  }));
  ["dragleave","drop"].forEach(name => $("personDrop").addEventListener(name, e => {
    e.preventDefault(); $("personDrop").classList.remove("drag-over");
  }));
  $("personDrop").addEventListener("drop", e => setPerson(e.dataTransfer.files[0]));

  ensureGarmentImage().then(renderPreview);
  updateActions();
})();