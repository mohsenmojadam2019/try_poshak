/* Shared-element garment flight for Try Poshak (no external dependencies). */
(() => {
  "use strict";

  /**
   * Returns the temporary visual landing zone inside the preview stage.
   * This is an animation target, not a replacement for Python/MediaPipe fitting.
   */
  function calculateLanding(stageRect, category) {
    const isBottom = category === "bottoms";
    const width = stageRect.width * (isBottom ? 0.40 : 0.52);
    const height = stageRect.height * (isBottom ? 0.43 : 0.39);
    return {
      left: stageRect.left + (stageRect.width - width) / 2,
      top: stageRect.top + stageRect.height * (isBottom ? 0.49 : 0.19),
      width,
      height
    };
  }

  // Allow geometry and source-selection logic to be checked in Node's test runner.
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { calculateLanding };
  }
  if (typeof document === "undefined") return;

  const grid = document.getElementById("productGrid");
  const stage = document.getElementById("previewStage");
  const toggle = document.getElementById("garmentMotionToggle");
  const person = document.getElementById("personPreview");
  const customImage = document.getElementById("garmentPreview");
  if (!grid || !stage || !toggle) return;

  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let enabled = !prefersReducedMotion;
  let currentSource = "/static/samples/shirt_navy.png";
  let active = null;
  let generation = 0;
  let productWasClicked = false;

  function setToggleState() {
    toggle.setAttribute("aria-pressed", String(enabled));
    toggle.textContent = enabled ? "فعال" : "غیرفعال";
    toggle.classList.toggle("is-active", enabled);
    toggle.setAttribute(
      "aria-label",
      enabled ? "غیرفعال کردن انیمیشن انتقال لباس" : "فعال کردن انیمیشن انتقال لباس"
    );
  }

  function clearActive() {
    if (!active) return;
    if (active.timer) window.clearTimeout(active.timer);
    if (active.animation) active.animation.cancel();
    if (active.clone) active.clone.remove();
    if (active.overlay) active.overlay.remove();
    if (active.releaseUrl) URL.revokeObjectURL(active.releaseUrl);
    stage.classList.remove("garment-motion-in-progress");
    active = null;
  }

  function sourceImage(detail) {
    if (detail.file) {
      const src = URL.createObjectURL(detail.file);
      return { src, element: customImage, releaseUrl: src };
    }

    const card = Array.from(grid.querySelectorAll(".product-card")).find(
      (item) => item.dataset.src === detail.src && !item.classList.contains("hidden-product")
    );
    const image = card && card.querySelector("img");
    return { src: detail.src, element: image, releaseUrl: null };
  }

  function createTemporaryPreview(src, destination) {
    const overlay = document.createElement("div");
    overlay.className = "garment-motion-overlay";
    overlay.setAttribute("aria-hidden", "true");

    // Show the visitor's real photo only while the clothing travels.
    // The final fitted image remains the existing /api/fit-local result.
    if (person && !person.hidden && person.currentSrc) {
      const photo = document.createElement("img");
      photo.className = "garment-motion-person";
      photo.src = person.currentSrc;
      photo.alt = "";
      overlay.appendChild(photo);
    }

    const outfit = document.createElement("img");
    outfit.src = src;
    outfit.alt = "";
    outfit.className = "garment-motion-outfit";
    outfit.style.left = (destination.left - stage.getBoundingClientRect().left) + "px";
    outfit.style.top = (destination.top - stage.getBoundingClientRect().top) + "px";
    outfit.style.width = destination.width + "px";
    outfit.style.height = destination.height + "px";
    overlay.appendChild(outfit);

    const ripple = document.createElement("span");
    ripple.className = "garment-motion-ripple";
    ripple.style.left = (destination.left - stage.getBoundingClientRect().left +
      destination.width / 2) + "px";
    ripple.style.top = (destination.top - stage.getBoundingClientRect().top +
      destination.height / 2) + "px";
    overlay.appendChild(ripple);

    stage.appendChild(overlay);
    stage.classList.add("garment-motion-in-progress");
    return overlay;
  }

  function runFlight(detail) {
    generation += 1;
    const myGeneration = generation;
    clearActive();

    if (!enabled || !detail || (!detail.src && !detail.file)) return;

    const { src, element, releaseUrl } = sourceImage(detail);
    let origin = element && element.getBoundingClientRect();
    if (detail.file && (!origin || origin.width < 2 || origin.height < 2)) {
      const customPanel = document.getElementById("customSelected");
      origin = customPanel && customPanel.getBoundingClientRect();
    }
    const targetRect = stage.getBoundingClientRect();

    if (!origin || origin.width < 2 || origin.height < 2 ||
        !targetRect.width || !targetRect.height) {
      if (releaseUrl) URL.revokeObjectURL(releaseUrl);
      return;
    }

    const destination = calculateLanding(targetRect, detail.category);
    const overlay = createTemporaryPreview(src, destination);
    const clone = document.createElement("img");
    clone.className = "garment-motion-flight";
    clone.alt = "";
    clone.src = src;
    clone.style.left = origin.left + "px";
    clone.style.top = origin.top + "px";
    clone.style.width = origin.width + "px";
    clone.style.height = origin.height + "px";
    document.body.appendChild(clone);

    const record = { clone, overlay, animation: null, timer: null, releaseUrl };
    active = record;

    function finish() {
      if (myGeneration !== generation || active !== record) return;
      clone.remove();
      overlay.classList.add("has-landed");
      record.timer = window.setTimeout(() => {
        if (myGeneration === generation && active === record) clearActive();
      }, 560);
    }

    if (typeof clone.animate === "function") {
      const midX = origin.left + (destination.left - origin.left) * 0.62;
      const midY = origin.top + (destination.top - origin.top) * 0.45 - 24;
      record.animation = clone.animate([
        {
          left: origin.left + "px",
          top: origin.top + "px",
          width: origin.width + "px",
          height: origin.height + "px",
          opacity: 1,
          transform: "rotate(0deg) scale(1)"
        },
        {
          left: midX + "px",
          top: midY + "px",
          width: ((origin.width + destination.width) / 2) + "px",
          height: ((origin.height + destination.height) / 2) + "px",
          opacity: 0.98,
          transform: "rotate(-5deg) scale(1.09)"
        },
        {
          left: destination.left + "px",
          top: destination.top + "px",
          width: destination.width + "px",
          height: destination.height + "px",
          opacity: 0.78,
          transform: "rotate(0deg) scale(1)"
        }
      ], { duration: 820, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" });
      record.animation.finished.then(finish).catch(() => {});
    } else {
      // Graceful fallback for browsers without the Web Animations API.
      clone.style.transition = "all 820ms cubic-bezier(.22,1,.36,1)";
      window.requestAnimationFrame(() => {
        clone.style.left = destination.left + "px";
        clone.style.top = destination.top + "px";
        clone.style.width = destination.width + "px";
        clone.style.height = destination.height + "px";
        clone.style.opacity = ".78";
      });
      record.timer = window.setTimeout(finish, 850);
    }
  }

  toggle.addEventListener("click", () => {
    enabled = !enabled;
    if (!enabled) {
      generation += 1;
      clearActive();
    }
    setToggleState();
  });

  // A repeated click on the already selected garment should replay the effect.
  // The main app emits garmentchange synchronously from each product-card click.
  grid.addEventListener("click", (event) => {
    if (!event.target.closest(".product-card")) return;
    productWasClicked = true;
    queueMicrotask(() => { productWasClicked = false; });
  }, true);

  window.addEventListener("tryposhak:garmentchange", (event) => {
    const detail = event.detail || {};
    // Category controls also emit garmentchange: avoid replaying the flight
    // when the product picture itself has not changed.
    const source = detail.file || detail.src;
    if (!source || (source === currentSource && !productWasClicked)) return;
    currentSource = source;
    runFlight(detail);
  });

  window.addEventListener("pagehide", () => {
    generation += 1;
    clearActive();
  });

  setToggleState();
})();