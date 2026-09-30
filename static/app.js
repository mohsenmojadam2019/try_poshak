(() => {
  const state = {
    person: null,
    garment: null,
    category: "tops",
    result: null,
    busy: false
  };

  const $ = (id) => document.getElementById(id);

  const personInput = $("personInput");
  const garmentInput = $("garmentInput");
  const personPreview = $("personPreview");
  const garmentPreview = $("garmentPreview");
  const personEmpty = $("personEmpty");
  const garmentEmpty = $("garmentEmpty");
  const cameraGuide = $("cameraGuide");
  const resultImage = $("resultImage");
  const resultPlaceholder = $("resultPlaceholder");
  const processing = $("processing");
  const tryOnButton = $("tryOnButton");
  const resultActions = $("resultActions");
  const modeSelect = $("modeSelect");
  const toast = $("toast");

  function showToast(message, type = "") {
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => {
      toast.className = "toast";
    }, 4200);
  }

  function isImage(file) {
    return file && ["image/jpeg", "image/png", "image/webp"].includes(file.type);
  }

  function setPreview(file, imageEl, emptyEl, kind) {
    if (!isImage(file)) {
      showToast("فقط تصویر JPG، PNG یا WEBP قابل قبول است.", "error");
      return;
    }

    if (file.size > 12 * 1024 * 1024) {
      showToast("حجم تصویر باید کمتر از ۱۲ مگابایت باشد.", "error");
      return;
    }

    const url = URL.createObjectURL(file);
    imageEl.onload = () => URL.revokeObjectURL(url);
    imageEl.src = url;
    imageEl.hidden = false;
    emptyEl.hidden = true;

    if (kind === "person") {
      state.person = file;
      cameraGuide.hidden = false;
    } else {
      state.garment = file;
    }

    updateButton();
  }

  personInput.addEventListener("change", () => {
    setPreview(personInput.files[0], personPreview, personEmpty, "person");
  });

  garmentInput.addEventListener("change", () => {
    setPreview(garmentInput.files[0], garmentPreview, garmentEmpty, "garment");
  });

  document.querySelectorAll(".category-card").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".category-card").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.category = button.dataset.category;
    });
  });

  ["personDrop", "garmentDrop"].forEach((id) => {
    const zone = $(id);
    ["dragenter", "dragover"].forEach((eventName) => {
      zone.addEventListener(eventName, (event) => {
        event.preventDefault();
        zone.classList.add("drag-over");
      });
    });
    ["dragleave", "drop"].forEach((eventName) => {
      zone.addEventListener(eventName, (event) => {
        event.preventDefault();
        zone.classList.remove("drag-over");
      });
    });
    zone.addEventListener("drop", (event) => {
      const file = event.dataTransfer.files[0];
      if (id === "personDrop") {
        setPreview(file, personPreview, personEmpty, "person");
      } else {
        setPreview(file, garmentPreview, garmentEmpty, "garment");
      }
    });
  });

  function updateButton() {
    tryOnButton.disabled = state.busy || !state.person || !state.garment;
  }

  function setBusy(value) {
    state.busy = value;
    tryOnButton.disabled = value || !state.person || !state.garment;
    tryOnButton.querySelector("span").textContent = value ? "در حال پردازش..." : "پرو کن";
    processing.hidden = !value;
    resultPlaceholder.hidden = value || !!state.result;
    if (value) {
      resultImage.hidden = true;
      resultActions.hidden = true;
    }
  }

  async function runTryOn() {
    if (!state.person || !state.garment) {
      showToast("ابتدا عکس مشتری و لباس را انتخاب کن.", "error");
      return;
    }

    if (!window.TRY_POSHAK?.providerReady) {
      showToast("FASHN_API_KEY روی سرور تنظیم نشده است.", "error");
      return;
    }

    const form = new FormData();
    form.append("person_image", state.person);
    form.append("garment_image", state.garment);
    form.append("category", state.category);
    form.append("mode", modeSelect.value);

    setBusy(true);

    try {
      const response = await fetch("/api/try-on", {
        method: "POST",
        body: form
      });

      let data = null;
      try {
        data = await response.json();
      } catch (_) {
        data = null;
      }

      if (!response.ok) {
        throw new Error(data?.detail || "پردازش تصویر ناموفق بود.");
      }

      state.result = data.image;
      resultImage.src = data.image;
      resultImage.hidden = false;
      resultPlaceholder.hidden = true;
      processing.hidden = true;
      resultActions.hidden = false;
      showToast("پرو مجازی با موفقیت ساخته شد.");
    } catch (error) {
      state.result = null;
      resultImage.hidden = true;
      resultPlaceholder.hidden = false;
      showToast(error.message || "خطای ناشناخته رخ داد.", "error");
    } finally {
      setBusy(false);
    }
  }

  tryOnButton.addEventListener("click", runTryOn);

  $("downloadButton").addEventListener("click", () => {
    if (!state.result) return;
    const link = document.createElement("a");
    link.href = state.result;
    link.download = `try-poshak-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  });

  $("resetButton").addEventListener("click", () => {
    state.garment = null;
    state.result = null;
    garmentInput.value = "";
    garmentPreview.removeAttribute("src");
    garmentPreview.hidden = true;
    garmentEmpty.hidden = false;
    resultImage.removeAttribute("src");
    resultImage.hidden = true;
    resultActions.hidden = true;
    resultPlaceholder.hidden = false;
    updateButton();
  });

  updateButton();
})();
