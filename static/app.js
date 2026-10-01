(() => {
  const $ = (id) => document.getElementById(id);
  const state = {
    personFile: null,
    garmentFile: null,
    garmentSrc: "/static/samples/shirt_navy.png",
    garmentName: "پیراهن سرمه‌ای",
    category: "tops",
    busy: false,
    timer: null,
    requestId: 0,
    personUrl: null
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
  const previewEmpty = $("previewEmpty");
  const fitLoading = $("fitLoading");
  const fitResult = $("fitResult");
  const compareOriginal = $("compareOriginal");
  const fitButton = $("fitButton");
  const compareButton = $("compareButton");
  const qualityValue = $("qualityValue");
  const qualityBar = $("qualityBar");
  const processingInfo = $("processingInfo");
  const downloadButton = $("downloadButton");
  const scaleRange = $("scaleRange");
  const widthRange = $("widthRange");
  const xRange = $("xRange");
  const yRange = $("yRange");
  const toast = $("toast");

  function notify(message, type = "") {
    toast.textContent = message;
    toast.className = "toast show " + type;
    clearTimeout(notify.t);
    notify.t = setTimeout(() => {
      toast.className = "toast";
    }, 3600);
  }

  function validImage(file) {
    if (!file || !["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      notify("فایل باید JPG، PNG یا WEBP باشد.", "error");
      return false;
    }
    if (file.size > 12 * 1024 * 1024) {
      notify("حجم تصویر بیشتر از ۱۲ مگابایت است.", "error");
      return false;
    }
    return true;
  }

  function setCategory(category) {
    state.category = category;
    document.querySelectorAll(".category-chip").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.category === category);
    });
  }

  async function setPerson(file) {
    if (!validImage(file)) return;
    state.personFile = file;

    if (state.personUrl) URL.revokeObjectURL(state.personUrl);
    const url = URL.createObjectURL(file);
    state.personUrl = url;
    personPreview.src = url;
    compareOriginal.src = url;
    personPreview.hidden = false;
    personEmpty.hidden = true;
    poseGuide.style.opacity = ".22";

    previewEmpty.hidden = true;
    fitResult.hidden = true;
    compareOriginal.hidden = true;
    compareButton.disabled = true;
    downloadButton.disabled = true;
    qualityValue.textContent = "—";
    qualityBar.style.width = "0";
    processingInfo.textContent = "در حال تحلیل عکس...";
    notify("عکس دریافت شد؛ بدن با پایتون اندازه‌گیری می‌شود.");
    updateActions();
    scheduleFit(120);
  }

  async function selectSample(card) {
    document.querySelectorAll(".product-card").forEach((x) => x.classList.remove("active"));
    card.classList.add("active");

    state.garmentSrc = card.dataset.src;
    state.garmentFile = null;
    state.garmentName = card.dataset.name;
    setCategory(card.dataset.category);

    selectedLabel.textContent = state.garmentName;
    customSelected.hidden = true;
    garmentInput.value = "";
    resetControls(false);
    scheduleFit(80);
  }

  function setCustomGarment(file) {
    if (!validImage(file)) return;
    state.garmentFile = file;
    state.garmentSrc = null;
    state.garmentName = file.name.replace(/\.[^.]+$/, "");

    const url = URL.createObjectURL(file);
    garmentPreview.onload = () => URL.revokeObjectURL(url);
    garmentPreview.src = url;
    customName.textContent = state.garmentName;
    customSelected.hidden = false;
    selectedLabel.textContent = "لباس شخصی";
    document.querySelectorAll(".product-card").forEach((x) => x.classList.remove("active"));

    resetControls(false);
    notify("لباس شخصی انتخاب شد؛ اگر لازم است نوع بالاتنه/پایین‌تنه را اصلاح کن.");
    scheduleFit(120);
  }

  function showTab(category) {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.tab === category);
    });
    document.querySelectorAll(".product-card").forEach((card) => {
      card.classList.toggle("hidden-product", card.dataset.category !== category);
    });
  }

  async function getGarmentFile() {
    if (state.garmentFile) return state.garmentFile;
    if (!state.garmentSrc) throw new Error("لباس انتخاب نشده است.");

    const response = await fetch(state.garmentSrc, { cache: "force-cache" });
    if (!response.ok) throw new Error("فایل لباس نمونه خوانده نشد.");
    const blob = await response.blob();
    const name = state.garmentSrc.split("/").pop() || "garment.png";
    return new File([blob], name, { type: blob.type || "image/png" });
  }

  function updateActions() {
    fitButton.disabled = !state.personFile || state.busy;
    const ready = !fitResult.hidden && Boolean(fitResult.src);
    downloadButton.disabled = !ready;
    compareButton.disabled = !ready || !compareOriginal.src;
  }

  function setBusy(value) {
    state.busy = value;
    fitLoading.hidden = !value;
    if (value) previewEmpty.hidden = true;
    updateActions();
  }

  function scheduleFit(delay = 280) {
    clearTimeout(state.timer);
    if (!state.personFile) return;
    state.timer = setTimeout(() => runFit(true), delay);
  }

  async function runFit(auto = false) {
    if (!state.personFile) {
      notify("اول عکس تمام‌قد را انتخاب کن.", "error");
      return;
    }
    if (state.busy && !auto) return;

    const currentRequest = ++state.requestId;
    setBusy(true);

    try {
      const form = new FormData();
      form.append("person_image", state.personFile);
      form.append("garment_image", await getGarmentFile());
      form.append("category", state.category);
      form.append("scale", String(Number(scaleRange.value) / 100));
      form.append("width_scale", String(Number(widthRange.value) / 100));
      form.append("offset_x", String(Number(xRange.value) / 100));
      form.append("offset_y", String(Number(yRange.value) / 100));

      const response = await fetch("/api/fit-local", {
        method: "POST",
        body: form
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.detail || "جایگذاری لباس ناموفق بود.");
      }
      if (currentRequest !== state.requestId) return;

      fitResult.src = data.image;
      fitResult.hidden = false;
      compareOriginal.hidden = true;
      compareButton.classList.remove("active");
      previewEmpty.hidden = true;
      downloadButton.disabled = false;
      compareButton.disabled = false;

      const quality = Math.round((Number(data.pose_quality) || 0) * 100);
      qualityValue.textContent = quality + "٪";
      qualityBar.style.width = Math.max(0, Math.min(100, quality)) + "%";
      const speed = Number(data.processing_ms) || 0;
      const cache = data.cache || {};
      processingInfo.textContent =
        "پردازش " + speed + " میلی‌ثانیه" +
        (cache.result ? " • نتیجه آماده از کش" : "") +
        (cache.person ? " • بدن از کش" : "") +
        (cache.garment ? " • لباس از کش" : "");
      const message = auto
        ? "لباس با پایتون روی بدن قرار گرفت — کیفیت تشخیص بدن " + quality + "٪"
        : "جایگذاری انجام شد — کیفیت تشخیص بدن " + quality + "٪";
      notify(message);
    } catch (error) {
      if (currentRequest === state.requestId) {
        fitResult.hidden = true;
        compareOriginal.hidden = true;
        compareButton.disabled = true;
        downloadButton.disabled = true;
        qualityValue.textContent = "—";
        qualityBar.style.width = "0";
        processingInfo.textContent = "برای نتیجه بهتر عکس تمام‌قد و روبه‌رو بفرست.";
        previewEmpty.hidden = false;
        previewEmpty.querySelector("b").textContent = "عکس برای جایگذاری مناسب نیست";
        previewEmpty.querySelector("small").textContent =
          error.message || "عکس تمام‌قد و روبه‌رو انتخاب کن.";
        notify(error.message || "خطا در پردازش محلی.", "error");
      }
    } finally {
      if (currentRequest === state.requestId) setBusy(false);
    }
  }

  function resetControls(run = true) {
    scaleRange.value = "100";
    widthRange.value = "100";
    xRange.value = "0";
    yRange.value = "0";
    if (run) scheduleFit(100);
  }

  personInput.addEventListener("change", () => setPerson(personInput.files[0]));
  garmentInput.addEventListener("change", () => setCustomGarment(garmentInput.files[0]));

  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => selectSample(card));
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const category = tab.dataset.tab;
      showTab(category);
      const first = [...document.querySelectorAll(".product-card")].find(
        (item) => item.dataset.category === category
      );
      if (first) selectSample(first);
    });
  });

  document.querySelectorAll(".category-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      setCategory(btn.dataset.category);
      scheduleFit(120);
    });
  });

  scaleRange.addEventListener("input", () => scheduleFit(320));
  widthRange.addEventListener("input", () => scheduleFit(320));
  xRange.addEventListener("input", () => scheduleFit(320));
  yRange.addEventListener("input", () => scheduleFit(320));
  $("resetFit").addEventListener("click", () => resetControls(true));
  fitButton.addEventListener("click", () => runFit(false));

  function showOriginal(show) {
    if (compareButton.disabled) return;
    compareOriginal.hidden = !show;
    compareButton.classList.toggle("active", show);
  }

  compareButton.addEventListener("click", () => {
    showOriginal(compareOriginal.hidden);
  });

  downloadButton.addEventListener("click", () => {
    if (!fitResult.src || fitResult.hidden) return;
    const link = document.createElement("a");
    link.href = fitResult.src;
    link.download = "try-poshak-" + Date.now() + ".jpg";
    document.body.appendChild(link);
    link.click();
    link.remove();
  });

  ["dragenter", "dragover"].forEach((name) => {
    $("personDrop").addEventListener(name, (event) => {
      event.preventDefault();
      $("personDrop").classList.add("drag-over");
    });
  });

  ["dragleave", "drop"].forEach((name) => {
    $("personDrop").addEventListener(name, (event) => {
      event.preventDefault();
      $("personDrop").classList.remove("drag-over");
    });
  });

  $("personDrop").addEventListener("drop", (event) => {
    setPerson(event.dataTransfer.files[0]);
  });

  updateActions();
})();