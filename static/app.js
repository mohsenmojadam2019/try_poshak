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
    personUrl: null,
    cameraStream: null,
    cameraFacing: "user",
    liveSessionId: null,
    liveRunning: false,
    liveBusy: false,
    liveTimer: null,
    liveResultVisible: true,
    liveFrameCount: 0,
    liveStartedAt: 0,
    liveGeneration: 0
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
  const liveVideo = $("liveVideo");
  const liveResult = $("liveResult");
  const liveCanvas = $("liveCanvas");
  const liveIdle = $("liveIdle");
  const liveBodyGuide = $("liveBodyGuide");
  const liveProcessing = $("liveProcessing");
  const liveFps = $("liveFps");
  const liveStatusDot = $("liveStatusDot");
  const liveStatusText = $("liveStatusText");
  const livePerformance = $("livePerformance");
  const liveGarmentName = $("liveGarmentName");
  const startCamera = $("startCamera");
  const switchCamera = $("switchCamera");
  const toggleLiveResult = $("toggleLiveResult");
  const stopCamera = $("stopCamera");
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

  function emitGarmentChange() {
    window.dispatchEvent(new CustomEvent("tryposhak:garmentchange", {
      detail: {
        name: state.garmentName,
        category: state.category,
        src: state.garmentSrc,
        file: state.garmentFile,
      },
    }));
  }

  function setCategory(category) {
    const changed = state.category !== category;
    state.category = category;
    if (changed && state.liveRunning) invalidateLiveGarmentSession();
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
    liveGarmentName.textContent = state.garmentName;
    if (state.liveRunning) invalidateLiveGarmentSession();
    customSelected.hidden = true;
    garmentInput.value = "";
    resetControls(false);
    emitGarmentChange();
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
    liveGarmentName.textContent = state.garmentName;
    if (state.liveRunning) invalidateLiveGarmentSession();
    document.querySelectorAll(".product-card").forEach((x) => x.classList.remove("active"));

    resetControls(false);
    emitGarmentChange();
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

  async function closeLiveSession(sessionId) {
    if (!sessionId) return;
    try {
      await fetch("/api/live/session/" + encodeURIComponent(sessionId), {
        method: "DELETE",
        keepalive: true
      });
    } catch (_) {}
  }

  function invalidateLiveGarmentSession() {
    state.liveGeneration += 1;
    const old = state.liveSessionId;
    state.liveSessionId = null;
    if (old) closeLiveSession(old);
    if (state.liveRunning) {
      liveStatusText.textContent = "در حال آماده‌سازی لباس جدید...";
      livePerformance.textContent = "لباس جدید برای Live Studio آماده می‌شود.";
    }
  }

  async function ensureLiveSession(generation = state.liveGeneration) {
    if (state.liveSessionId) return state.liveSessionId;

    const form = new FormData();
    form.append("garment_image", await getGarmentFile());
    form.append("category", state.category);

    const response = await fetch("/api/live/session", {
      method: "POST",
      body: form
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.detail || "ساخت جلسه دوربین ناموفق بود.");
    }

    if (generation !== state.liveGeneration) {
      closeLiveSession(data.session_id);
      return null;
    }
    state.liveSessionId = data.session_id;
    return state.liveSessionId;
  }

  function stopCameraTracks() {
    if (!state.cameraStream) return;
    state.cameraStream.getTracks().forEach((track) => track.stop());
    state.cameraStream = null;
    liveVideo.srcObject = null;
  }

  function setLiveUiRunning(running) {
    startCamera.disabled = running;
    switchCamera.disabled = !running;
    toggleLiveResult.disabled = !running || !liveResult.src;
    stopCamera.disabled = !running;
    liveStatusDot.className = running ? "on" : "off";
    if (!running) {
      liveFps.textContent = "آماده";
      liveStatusText.textContent = "دوربین خاموش است";
      livePerformance.textContent = "بعد از شروع، سرعت و کیفیت تشخیص اینجا نمایش داده می‌شود.";
      liveIdle.hidden = false;
      liveBodyGuide.hidden = false;
      liveProcessing.hidden = true;
      liveResult.hidden = true;
      liveResult.src = "";
      toggleLiveResult.textContent = "نمایش دوربین";
      state.liveResultVisible = true;
    }
  }

  async function openCamera() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      throw new Error("مرورگر اجازه دوربین زنده نمی‌دهد. از Chrome/Edge و HTTPS یا localhost استفاده کن.");
    }
    if (!window.isSecureContext && location.hostname !== "localhost" && location.hostname !== "127.0.0.1") {
      throw new Error("برای دوربین زنده روی موبایل، سایت باید با HTTPS باز شود.");
    }

    stopCameraTracks();
    const constraints = {
      audio: false,
      video: {
        facingMode: { ideal: state.cameraFacing },
        width: { ideal: 1280 },
        height: { ideal: 960 }
      }
    };
    state.cameraStream = await navigator.mediaDevices.getUserMedia(constraints);
    liveVideo.srcObject = state.cameraStream;
    liveVideo.style.transform = state.cameraFacing === "user" ? "scaleX(-1)" : "none";
    await liveVideo.play();

    liveIdle.hidden = true;
    liveBodyGuide.hidden = false;
    liveStatusText.textContent = "دوربین فعال است؛ بدن را داخل کادر نگه دار";
  }

  function captureLiveFrame() {
    const sourceW = liveVideo.videoWidth;
    const sourceH = liveVideo.videoHeight;
    if (!sourceW || !sourceH) return Promise.resolve(null);

    const maxSide = 720;
    const ratio = Math.min(1, maxSide / Math.max(sourceW, sourceH));
    liveCanvas.width = Math.max(1, Math.round(sourceW * ratio));
    liveCanvas.height = Math.max(1, Math.round(sourceH * ratio));
    const ctx = liveCanvas.getContext("2d", { alpha: false });

    ctx.save();
    if (state.cameraFacing === "user") {
      ctx.translate(liveCanvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(liveVideo, 0, 0, liveCanvas.width, liveCanvas.height);
    ctx.restore();

    return new Promise((resolve) => {
      liveCanvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve(null);
            return;
          }
          resolve(new File([blob], "live-frame.jpg", { type: "image/jpeg" }));
        },
        "image/jpeg",
        0.72
      );
    });
  }

  async function processLiveFrame() {
    if (!state.liveRunning || state.liveBusy) return;
    if (!liveVideo.videoWidth || liveVideo.readyState < 2) {
      state.liveTimer = setTimeout(processLiveFrame, 140);
      return;
    }

    state.liveBusy = true;
    if (state.liveFrameCount === 0) liveProcessing.hidden = false;

    try {
      const generation = state.liveGeneration;
      const sessionId = await ensureLiveSession(generation);
      if (!sessionId || generation !== state.liveGeneration) return;
      const frame = await captureLiveFrame();
      if (!frame || !state.liveRunning) return;

      const form = new FormData();
      form.append("person_image", frame);
      form.append("session_id", sessionId);
      form.append("scale", String(Number(scaleRange.value) / 100));
      form.append("width_scale", String(Number(widthRange.value) / 100));
      form.append("offset_x", String(Number(xRange.value) / 100));
      form.append("offset_y", String(Number(yRange.value) / 100));

      const response = await fetch("/api/live/frame", {
        method: "POST",
        body: form
      });
      const data = await response.json().catch(() => ({}));

      if (response.status === 404) {
        state.liveSessionId = null;
        throw new Error("جلسه دوربین تازه‌سازی می‌شود...");
      }
      if (!response.ok) {
        throw new Error(data.detail || "بدن در فریم دیده نشد.");
      }
      if (!state.liveRunning || generation !== state.liveGeneration) return;

      liveResult.src = data.image;
      liveResult.hidden = !state.liveResultVisible;
      toggleLiveResult.disabled = false;
      liveBodyGuide.hidden = true;

      state.liveFrameCount += 1;
      const elapsed = Math.max(0.1, (performance.now() - state.liveStartedAt) / 1000);
      const fps = state.liveFrameCount / elapsed;
      const quality = Math.round((Number(data.pose_quality) || 0) * 100);
      const speed = Number(data.processing_ms) || 0;

      liveFps.textContent = fps.toFixed(1) + " FPS";
      liveStatusText.textContent = "Live Fit فعال است";
      livePerformance.textContent =
        "تشخیص بدن " + quality + "٪ • پردازش " + speed + "ms";
    } catch (error) {
      if (state.liveRunning) {
        liveStatusText.textContent = "بدن کامل داخل کادر نیست";
        livePerformance.textContent = error.message || "کمی عقب برو و روبه‌روی دوربین بایست.";
        liveBodyGuide.hidden = false;
      }
    } finally {
      state.liveBusy = false;
      liveProcessing.hidden = true;
      if (state.liveRunning) {
        state.liveTimer = setTimeout(processLiveFrame, 90);
      }
    }
  }

  async function startLiveCamera() {
    try {
      state.liveRunning = true;
      state.liveResultVisible = true;
      state.liveFrameCount = 0;
      state.liveStartedAt = performance.now();
      liveGarmentName.textContent = state.garmentName;
      setLiveUiRunning(true);
      liveProcessing.hidden = false;
      await openCamera();
      await ensureLiveSession();
      processLiveFrame();
      notify("Live Studio فعال شد؛ تمام بدن را داخل کادر نگه دار.");
    } catch (error) {
      state.liveRunning = false;
      stopCameraTracks();
      setLiveUiRunning(false);
      notify(error.message || "دسترسی به دوربین ممکن نشد.", "error");
    }
  }

  async function stopLiveCamera() {
    state.liveRunning = false;
    state.liveBusy = false;
    clearTimeout(state.liveTimer);
    stopCameraTracks();
    const old = state.liveSessionId;
    state.liveSessionId = null;
    setLiveUiRunning(false);
    await closeLiveSession(old);
  }

  async function switchLiveCamera() {
    if (!state.liveRunning) return;
    state.cameraFacing = state.cameraFacing === "user" ? "environment" : "user";
    try {
      liveProcessing.hidden = false;
      await openCamera();
      liveResult.hidden = true;
      state.liveFrameCount = 0;
      state.liveStartedAt = performance.now();
      processLiveFrame();
    } catch (error) {
      notify(error.message || "تعویض دوربین ممکن نشد.", "error");
    } finally {
      liveProcessing.hidden = true;
    }
  }

  startCamera.addEventListener("click", startLiveCamera);
  stopCamera.addEventListener("click", stopLiveCamera);
  switchCamera.addEventListener("click", switchLiveCamera);
  toggleLiveResult.addEventListener("click", () => {
    if (!state.liveRunning || !liveResult.src) return;
    state.liveResultVisible = !state.liveResultVisible;
    liveResult.hidden = !state.liveResultVisible;
    toggleLiveResult.textContent = state.liveResultVisible ? "نمایش دوربین" : "نمایش لباس";
  });

  window.addEventListener("pagehide", () => {
    state.liveRunning = false;
    clearTimeout(state.liveTimer);
    stopCameraTracks();
    if (state.liveSessionId) {
      fetch("/api/live/session/" + encodeURIComponent(state.liveSessionId), {
        method: "DELETE",
        keepalive: true
      }).catch(() => {});
    }
  });

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
      emitGarmentChange();
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

  setLiveUiRunning(false);
  updateActions();
})();