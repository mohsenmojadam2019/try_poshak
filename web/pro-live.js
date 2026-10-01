import * as THREE from "three";
import { FilesetResolver, PoseLandmarker } from "@mediapipe/tasks-vision";

const IDX = {
  NOSE: 0, L_EAR: 7, R_EAR: 8,
  L_SHOULDER: 11, R_SHOULDER: 12,
  L_ELBOW: 13, R_ELBOW: 14,
  L_WRIST: 15, R_WRIST: 16,
  L_INDEX: 19, R_INDEX: 20,
  L_HIP: 23, R_HIP: 24,
  L_KNEE: 25, R_KNEE: 26,
  L_ANKLE: 27, R_ANKLE: 28,
};

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const mixPoint = (a, b, t) => ({
  x: lerp(a.x, b.x, t),
  y: lerp(a.y, b.y, t),
  z: lerp(a.z || 0, b.z || 0, t),
  visibility: Math.min(a.visibility ?? 1, b.visibility ?? 1),
});

class PoseSmoother {
  constructor() {
    this.points = new Map();
  }
  reset() {
    this.points.clear();
  }
  update(landmarks, dt) {
    const out = [];
    for (let i = 0; i < landmarks.length; i++) {
      const p = landmarks[i];
      const prev = this.points.get(i);
      if (!prev) {
        const init = { x: p.x, y: p.y, z: p.z || 0, visibility: p.visibility ?? 1 };
        this.points.set(i, init);
        out[i] = { ...init };
        continue;
      }
      const speed = Math.hypot(p.x - prev.x, p.y - prev.y) / Math.max(0.008, dt);
      const alpha = clamp(0.18 + speed * 0.12, 0.18, 0.72);
      prev.x = lerp(prev.x, p.x, alpha);
      prev.y = lerp(prev.y, p.y, alpha);
      prev.z = lerp(prev.z, p.z || 0, alpha);
      prev.visibility = lerp(prev.visibility, p.visibility ?? 1, 0.35);
      out[i] = { ...prev };
    }
    return out;
  }
}

class DynamicGrid {
  constructor(scene, cols, rows, uvRect, material) {
    this.cols = cols;
    this.rows = rows;
    this.count = cols * rows;
    this.positions = new Float32Array(this.count * 3);
    this.targets = new Float32Array(this.count * 3);
    this.velocity = new Float32Array(this.count * 3);
    this.weights = new Float32Array(this.count);
    const uvs = new Float32Array(this.count * 2);
    const indices = [];

    const [u0, v0, u1, v1] = uvRect;
    for (let y = 0; y < rows; y++) {
      const v = y / (rows - 1);
      for (let x = 0; x < cols; x++) {
        const u = x / (cols - 1);
        const i = y * cols + x;
        uvs[i * 2] = lerp(u0, u1, u);
        uvs[i * 2 + 1] = lerp(v0, v1, v);
        this.weights[i] = Math.pow(v, 1.65);
      }
    }
    for (let y = 0; y < rows - 1; y++) {
      for (let x = 0; x < cols - 1; x++) {
        const a = y * cols + x;
        const b = a + 1;
        const c = a + cols;
        const e = c + 1;
        indices.push(a, c, b, b, c, e);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(this.positions, 3));
    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    geometry.setIndex(indices);
    this.geometry = geometry;
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
    this.initialized = false;
    scene.add(this.mesh);
  }

  setTarget(fn) {
    for (let y = 0; y < this.rows; y++) {
      const v = y / (this.rows - 1);
      for (let x = 0; x < this.cols; x++) {
        const u = x / (this.cols - 1);
        const p = fn(u, v);
        const i = (y * this.cols + x) * 3;
        this.targets[i] = p.x;
        this.targets[i + 1] = p.y;
        this.targets[i + 2] = p.z || 0;
      }
    }
  }

  snap() {
    this.positions.set(this.targets);
    this.velocity.fill(0);
    this.geometry.attributes.position.needsUpdate = true;
  }

  step(dt, motionX, stiffness = 44, damping = 0.78) {
    if (!this.initialized) {
      this.snap();
      this.initialized = true;
      return;
    }
    const frame = clamp(dt, 0.008, 0.034);
    for (let n = 0; n < this.count; n++) {
      const i = n * 3;
      const weight = this.weights[n];
      const localStiff = stiffness * (1.35 - weight * 0.55);
      const sway = motionX * weight * 0.12;
      const gravity = -0.012 * weight;

      let vx = this.velocity[i];
      let vy = this.velocity[i + 1];
      let vz = this.velocity[i + 2];

      vx += (this.targets[i] - this.positions[i]) * localStiff * frame;
      vy += (this.targets[i + 1] - this.positions[i + 1]) * localStiff * frame;
      vz += (this.targets[i + 2] - this.positions[i + 2]) * localStiff * frame;

      vx += sway * frame;
      vy += gravity * frame;

      const decay = Math.pow(damping, frame * 60);
      vx *= decay;
      vy *= decay;
      vz *= decay;

      this.velocity[i] = vx;
      this.velocity[i + 1] = vy;
      this.velocity[i + 2] = vz;

      this.positions[i] += vx * frame;
      this.positions[i + 1] += vy * frame;
      this.positions[i + 2] += vz * frame;
    }
    this.geometry.attributes.position.needsUpdate = true;
  }

  setVisible(v) {
    if (v && !this.mesh.visible) this.initialized = false;
    this.mesh.visible = v;
  }

  dispose() {
    this.geometry.dispose();
  }
}

class UltraLiveStudio {
  constructor() {
    this.root = document.getElementById("ultraStudio");
    if (!this.root) return;

    this.video = document.getElementById("ultraVideo");
    this.mount = document.getElementById("ultraWebgl");
    this.occlusion = document.getElementById("ultraOcclusion");
    this.guide = document.getElementById("ultraGuide");
    this.idle = document.getElementById("ultraIdle");
    this.loading = document.getElementById("ultraLoading");
    this.startButton = document.getElementById("ultraStart");
    this.switchButton = document.getElementById("ultraSwitch");
    this.stopButton = document.getElementById("ultraStop");
    this.snapshotButton = document.getElementById("ultraSnapshot");
    this.physicsInput = document.getElementById("ultraPhysics");
    this.fpsLabel = document.getElementById("ultraFPS");
    this.poseLabel = document.getElementById("ultraPose");
    this.yawLabel = document.getElementById("ultraYaw");
    this.garmentLabel = document.getElementById("ultraGarment");
    this.engineLabel = document.getElementById("ultraEngine");
    this.modeLabel = document.getElementById("ultraMode");

    this.poseLandmarker = null;
    this.fileset = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.material = null;
    this.texture = null;
    this.grids = {};
    this.running = false;
    this.stream = null;
    this.facing = "user";
    this.lastDetect = 0;
    this.lastRender = performance.now();
    this.lastPoseAt = 0;
    this.lastTorsoX = null;
    this.motionX = 0;
    this.smoothYaw = 0;
    this.frameCounter = 0;
    this.fpsWindowStart = performance.now();
    this.raf = 0;
    this.smoother = new PoseSmoother();
    this.landmarks = null;
    this.worldLandmarks = null;
    this.garment = {
      name: "پیراهن سرمه‌ای",
      category: "tops",
      src: "/static/samples/shirt_navy.png",
      file: null,
      image: null,
      sleeveReach: 0.78,
    };
    this.garmentVersion = 0;
    this.initializedGarment = false;
    this.poseReady = false;

    this.occlusionCtx = this.occlusion.getContext("2d", { alpha: true });
    this.setupEvents();
    this.syncInitialGarment();
    this.setButtons(false);
    this.engineLabel.textContent = "MediaPipe + WebGL";
  }

  setupEvents() {
    this.startButton.addEventListener("click", () => this.start());
    this.stopButton.addEventListener("click", () => this.stop());
    this.switchButton.addEventListener("click", () => this.switchCamera());
    this.snapshotButton.addEventListener("click", () => this.snapshot());

    window.addEventListener("tryposhak:garmentchange", (event) => {
      const detail = event.detail || {};
      this.garment.name = detail.name || this.garment.name;
      this.garment.category = detail.category || this.garment.category;
      this.garment.src = detail.src || null;
      this.garment.file = detail.file || null;
      this.garmentLabel.textContent = this.garment.name;
      this.prepareGarment().catch((err) => this.setMode("خطا در لباس: " + err.message));
    });

    window.addEventListener("resize", () => this.resize());
    window.addEventListener("pagehide", () => this.stop(false));
  }

  syncInitialGarment() {
    const active = document.querySelector(".product-card.active");
    if (active) {
      this.garment.name = active.dataset.name || this.garment.name;
      this.garment.category = active.dataset.category || this.garment.category;
      this.garment.src = active.dataset.src || this.garment.src;
      this.garmentLabel.textContent = this.garment.name;
    }
  }

  setButtons(running) {
    this.startButton.disabled = running;
    this.switchButton.disabled = !running;
    this.stopButton.disabled = !running;
    this.snapshotButton.disabled = !running;
  }

  setMode(text) {
    if (this.modeLabel) this.modeLabel.textContent = text;
  }

  async initPose() {
    if (this.poseLandmarker) return;
    this.setMode("در حال بارگذاری Body Tracker...");
    try {
      this.fileset = await FilesetResolver.forVisionTasks("/static/mediapipe/wasm");
      const options = {
        baseOptions: {
          modelAssetPath: "/static/models/pose_landmarker_lite.task",
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        numPoses: 1,
        minPoseDetectionConfidence: 0.45,
        minPosePresenceConfidence: 0.45,
        minTrackingConfidence: 0.45,
        outputSegmentationMasks: false,
      };
      try {
        this.poseLandmarker = await PoseLandmarker.createFromOptions(this.fileset, options);
        this.engineLabel.textContent = "MediaPipe GPU + WebGL";
      } catch (_) {
        options.baseOptions.delegate = "CPU";
        this.poseLandmarker = await PoseLandmarker.createFromOptions(this.fileset, options);
        this.engineLabel.textContent = "MediaPipe CPU + WebGL";
      }
      this.setMode("Body Tracker آماده");
    } catch (error) {
      this.setMode("Body Tracker لود نشد");
      throw error;
    }
  }

  initRenderer() {
    if (this.renderer) return;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10);
    this.camera.position.z = 5;

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
      premultipliedAlpha: true,
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
    this.mount.appendChild(this.renderer.domElement);

    const vertexShader = `
      varying vec2 vUv;
      varying float vDepth;
      void main() {
        vUv = uv;
        vDepth = position.z;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const fragmentShader = `
      uniform sampler2D uMap;
      uniform float uYaw;
      uniform float uMotion;
      uniform float uTime;
      uniform float uOpacity;
      varying vec2 vUv;
      varying float vDepth;

      void main() {
        vec4 tex = texture2D(uMap, vUv);
        if (tex.a < 0.025) discard;

        float centerShade = 0.90 + 0.10 * cos((vUv.x - 0.5) * 3.14159);
        float turnShade = 1.0 + uYaw * (vUv.x - 0.5) * 0.22;
        float wrinkle = 1.0 + sin(vUv.y * 47.0 + vUv.x * 13.0 + uTime * 1.7) * 0.025 * min(uMotion, 1.0);
        float depthShade = 1.0 + vDepth * 0.09;
        vec3 color = tex.rgb * centerShade * turnShade * wrinkle * depthShade;
        gl_FragColor = vec4(color, tex.a * uOpacity);
      }
    `;

    this.material = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide,
      vertexShader,
      fragmentShader,
      uniforms: {
        uMap: { value: new THREE.Texture() },
        uYaw: { value: 0 },
        uMotion: { value: 0 },
        uTime: { value: 0 },
        uOpacity: { value: 0.98 },
      },
    });

    this.grids.torso = new DynamicGrid(this.scene, 13, 17, [0.18, 0.03, 0.82, 0.98], this.material);
    this.grids.leftSleeve = new DynamicGrid(this.scene, 4, 9, [0.00, 0.04, 0.36, 0.58], this.material);
    this.grids.rightSleeve = new DynamicGrid(this.scene, 4, 9, [0.64, 0.04, 1.00, 0.58], this.material);
    this.grids.waist = new DynamicGrid(this.scene, 9, 5, [0.08, 0.02, 0.92, 0.34], this.material);
    this.grids.leftLeg = new DynamicGrid(this.scene, 5, 15, [0.06, 0.25, 0.49, 0.99], this.material);
    this.grids.rightLeg = new DynamicGrid(this.scene, 5, 15, [0.51, 0.25, 0.94, 0.99], this.material);

    this.resize();
  }

  async start() {
    if (this.running) return;
    try {
      this.loading.hidden = false;
      this.idle.hidden = true;
      await this.initPose();
      this.initRenderer();
      this.setMode("در حال آماده‌سازی لباس...");
      await this.prepareGarment();
      this.setMode("در انتظار دسترسی دوربین...");
      await this.openCamera();
      this.setMode("دوربین آماده؛ شروع رهگیری...");
      this.running = true;
      this.setButtons(true);
      this.guide.hidden = false;
      this.smoother.reset();
      this.lastDetect = 0;
      this.lastRender = performance.now();
      this.frameCounter = 0;
      this.fpsWindowStart = performance.now();
      this.setMode("Ultra Live فعال");
      this.loop(performance.now());
    } catch (error) {
      this.idle.hidden = false;
      this.setMode(error.message || "شروع دوربین ناموفق بود");
      this.stopTracks();
    } finally {
      this.loading.hidden = true;
    }
  }

  async openCamera() {
    if (!navigator.mediaDevices?.getUserMedia) {
      throw new Error("مرورگر از دوربین زنده پشتیبانی نمی‌کند");
    }
    if (!window.isSecureContext && !["localhost", "127.0.0.1"].includes(location.hostname)) {
      throw new Error("برای دوربین روی موبایل HTTPS لازم است");
    }
    this.stopTracks();

    const requestCamera = (constraints, timeoutMs = 6500) => {
      let timer;
      const timeout = new Promise((_, reject) => {
        timer = setTimeout(
          () => reject(new Error("دسترسی دوربین طول کشید؛ مجوز Camera مرورگر را بررسی کن.")),
          timeoutMs
        );
      });
      return Promise.race([
        navigator.mediaDevices.getUserMedia(constraints),
        timeout,
      ]).finally(() => clearTimeout(timer));
    };

    const preferred = {
      audio: false,
      video: {
        facingMode: { ideal: this.facing },
        width: { ideal: 1280 },
        height: { ideal: 960 },
        frameRate: { ideal: 30, max: 60 },
      },
    };

    try {
      this.stream = await requestCamera(preferred);
    } catch (firstError) {
      try {
        this.stream = await requestCamera({ audio: false, video: true }, 4500);
      } catch (_) {
        throw firstError;
      }
    }

    this.video.srcObject = this.stream;
    if (this.video.readyState < 1) {
      await Promise.race([
        new Promise((resolve) => {
          const done = () => {
            this.video.removeEventListener("loadedmetadata", done);
            resolve();
          };
          this.video.addEventListener("loadedmetadata", done, { once: true });
        }),
        new Promise((resolve) => setTimeout(resolve, 1800)),
      ]);
    }
    const playPromise = this.video.play();
    if (playPromise && typeof playPromise.then === "function") {
      await Promise.race([
        playPromise.catch(() => undefined),
        new Promise((resolve) => setTimeout(resolve, 1800)),
      ]);
    }
    this.applyMirror();
    this.resize();
  }

  async switchCamera() {
    if (!this.running) return;
    this.facing = this.facing === "user" ? "environment" : "user";
    this.loading.hidden = false;
    try {
      await this.openCamera();
      this.smoother.reset();
      this.landmarks = null;
      this.worldLandmarks = null;
    } finally {
      this.loading.hidden = true;
    }
  }

  applyMirror() {
    const transform = this.facing === "user" ? "scaleX(-1)" : "none";
    this.video.style.transform = transform;
    if (this.renderer) this.renderer.domElement.style.transform = transform;
    this.occlusion.style.transform = transform;
  }

  stopTracks() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
    this.video.srcObject = null;
  }

  stop(updateUi = true) {
    this.running = false;
    cancelAnimationFrame(this.raf);
    this.stopTracks();
    this.hideGarment();
    this.occlusionCtx.clearRect(0, 0, this.occlusion.width, this.occlusion.height);
    this.landmarks = null;
    this.worldLandmarks = null;
    if (updateUi) {
      this.idle.hidden = false;
      this.guide.hidden = false;
      this.setButtons(false);
      this.fpsLabel.textContent = "—";
      this.poseLabel.textContent = "—";
      this.yawLabel.textContent = "—";
      this.setMode("آماده شروع");
    }
  }

  async prepareGarment() {
    const version = ++this.garmentVersion;
    let file;
    if (this.garment.file) {
      file = this.garment.file;
    } else if (this.garment.src) {
      const res = await fetch(this.garment.src, { cache: "force-cache" });
      if (!res.ok) throw new Error("تصویر لباس خوانده نشد");
      const blob = await res.blob();
      file = new File([blob], "garment.png", { type: blob.type || "image/png" });
    } else {
      throw new Error("لباس انتخاب نشده");
    }

    const form = new FormData();
    form.append("garment_image", file);
    const response = await fetch("/api/garment/prepare", { method: "POST", body: form });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.detail || "آماده‌سازی لباس ناموفق بود");
    if (version !== this.garmentVersion) return;

    this.garment.image = data.image;
    this.garment.sleeveReach = Number(data.sleeve_reach) || 0.78;
    this.garmentLabel.textContent = this.garment.name;

    if (this.renderer) {
      await this.loadTexture(data.image, version);
    }
  }

  async loadTexture(src, version) {
    const loader = new THREE.TextureLoader();
    const texture = await loader.loadAsync(src);
    if (version !== this.garmentVersion) {
      texture.dispose();
      return;
    }
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    if (this.texture) this.texture.dispose();
    this.texture = texture;
    this.material.uniforms.uMap.value = texture;
  }

  resize() {
    if (!this.root) return;
    const stage = document.getElementById("ultraStage");
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const w = Math.max(1, Math.round(rect.width));
    const h = Math.max(1, Math.round(rect.height));
    const aspect = w / h;

    if (this.renderer) {
      this.renderer.setSize(w, h, false);
      this.camera.left = -aspect;
      this.camera.right = aspect;
      this.camera.top = 1;
      this.camera.bottom = -1;
      this.camera.updateProjectionMatrix();
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    this.occlusion.width = Math.round(w * dpr);
    this.occlusion.height = Math.round(h * dpr);
    this.occlusion.style.width = w + "px";
    this.occlusion.style.height = h + "px";
    this.occlusionDpr = dpr;
  }

  coverMetrics() {
    const stage = document.getElementById("ultraStage");
    const rect = stage.getBoundingClientRect();
    const sw = rect.width;
    const sh = rect.height;
    const vw = this.video.videoWidth || sw;
    const vh = this.video.videoHeight || sh;
    const scale = Math.max(sw / vw, sh / vh);
    const rw = vw * scale;
    const rh = vh * scale;
    return { sw, sh, vw, vh, scale, ox: (sw - rw) / 2, oy: (sh - rh) / 2, aspect: sw / sh };
  }

  landmarkToPixel(p, metrics) {
    return {
      x: metrics.ox + p.x * metrics.vw * metrics.scale,
      y: metrics.oy + p.y * metrics.vh * metrics.scale,
    };
  }

  landmarkToWorld(p, metrics) {
    const px = this.landmarkToPixel(p, metrics);
    return {
      x: ((px.x / metrics.sw) * 2 - 1) * metrics.aspect,
      y: 1 - (px.y / metrics.sh) * 2,
      z: p.z || 0,
    };
  }

  computeYaw(world) {
    if (!world || !world[IDX.L_SHOULDER] || !world[IDX.R_SHOULDER] || !world[IDX.L_HIP] || !world[IDX.R_HIP]) {
      return this.smoothYaw;
    }
    const ls = world[IDX.L_SHOULDER], rs = world[IDX.R_SHOULDER];
    const lh = world[IDX.L_HIP], rh = world[IDX.R_HIP];
    const sx = rs.x - ls.x, sy = rs.y - ls.y, sz = rs.z - ls.z;
    const ux = (ls.x + rs.x) * 0.5 - (lh.x + rh.x) * 0.5;
    const uy = (ls.y + rs.y) * 0.5 - (lh.y + rh.y) * 0.5;
    const uz = (ls.z + rs.z) * 0.5 - (lh.z + rh.z) * 0.5;
    const fx = sy * uz - sz * uy;
    const fz = sx * uy - sy * ux;
    let yaw = Math.atan2(fx, Math.abs(fz) + 1e-5);
    yaw = clamp(yaw, -1.05, 1.05);
    this.smoothYaw = lerp(this.smoothYaw, yaw, 0.18);
    return this.smoothYaw;
  }

  poseQuality(lm) {
    const ids = [11,12,23,24,25,26,27,28];
    let sum = 0;
    for (const i of ids) sum += lm[i]?.visibility ?? 0;
    return sum / ids.length;
  }

  hideGarment() {
    Object.values(this.grids).forEach((g) => g?.setVisible(false));
  }

  updateTopTargets(lm, metrics, yaw) {
    const ls = this.landmarkToWorld(lm[IDX.L_SHOULDER], metrics);
    const rs = this.landmarkToWorld(lm[IDX.R_SHOULDER], metrics);
    const lh = this.landmarkToWorld(lm[IDX.L_HIP], metrics);
    const rh = this.landmarkToWorld(lm[IDX.R_HIP], metrics);
    const le = this.landmarkToWorld(lm[IDX.L_ELBOW], metrics);
    const re = this.landmarkToWorld(lm[IDX.R_ELBOW], metrics);
    const lw = this.landmarkToWorld(lm[IDX.L_WRIST], metrics);
    const rw = this.landmarkToWorld(lm[IDX.R_WRIST], metrics);

    const scaleCtl = Number(document.getElementById("scaleRange")?.value || 100) / 100;
    const widthCtl = Number(document.getElementById("widthRange")?.value || 100) / 100;
    const xCtl = Number(document.getElementById("xRange")?.value || 0) / 100;
    const yCtl = Number(document.getElementById("yRange")?.value || 0) / 100;

    const shoulderMid = mixPoint(ls, rs, 0.5);
    const hipMid = mixPoint(lh, rh, 0.5);
    const shoulderW = Math.hypot(rs.x - ls.x, rs.y - ls.y);
    const hipW = Math.hypot(rh.x - lh.x, rh.y - lh.y);
    const torsoH = Math.hypot(hipMid.x - shoulderMid.x, hipMid.y - shoulderMid.y);
    const turn = 0.70 + 0.30 * Math.cos(Math.abs(yaw));
    const shiftX = xCtl * shoulderW * 0.8;
    const shiftY = -yCtl * torsoH * 1.1;

    this.grids.torso.setVisible(true);
    this.grids.leftSleeve.setVisible(true);
    this.grids.rightSleeve.setVisible(true);
    this.grids.waist.setVisible(false);
    this.grids.leftLeg.setVisible(false);
    this.grids.rightLeg.setVisible(false);

    this.grids.torso.setTarget((u, v) => {
      const center = mixPoint(shoulderMid, hipMid, v * 0.98);
      const width = lerp(shoulderW * 1.18, hipW * 1.18, v) * widthCtl * scaleCtl * turn;
      const local = (u - 0.5);
      const perspective = 1 - Math.sin(yaw) * local * 0.33;
      const flare = 1 + Math.pow(v, 2.2) * 0.06;
      const curve = Math.cos(local * Math.PI) * 0.026 * scaleCtl;
      return {
        x: center.x + local * width * perspective * flare + shiftX + Math.sin(yaw) * torsoH * (v - 0.45) * 0.05,
        y: center.y - v * torsoH * (scaleCtl - 1) * 0.72 + shiftY - 0.015 + v * -0.025 * scaleCtl,
        z: curve + Math.sin(yaw) * local * 0.07,
      };
    });

    const reach = clamp(this.garment.sleeveReach, 0.45, 1.9);
    const armPoint = (s, e, w, t) => {
      const full = reach <= 1 ? mixPoint(s, e, reach * t) : (t < 0.58 ? mixPoint(s, e, t / 0.58) : mixPoint(e, w, (t - 0.58) / 0.42 * (reach - 1)));
      return full;
    };

    const sleeveTarget = (side, u, v) => {
      const s = side === "left" ? ls : rs;
      const e = side === "left" ? le : re;
      const w = side === "left" ? lw : rw;
      const p = armPoint(s, e, w, v);
      const q = armPoint(s, e, w, clamp(v + 0.04, 0, 1));
      const dx = q.x - p.x, dy = q.y - p.y;
      const len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len, ny = dx / len;
      const sign = side === "left" ? -1 : 1;
      const sleeveWidth = shoulderW * lerp(0.29, 0.18, v) * widthCtl * scaleCtl;
      const offset = (u - 0.5) * sleeveWidth;
      return {
        x: p.x + nx * offset + shiftX + sign * shoulderW * 0.02,
        y: p.y + ny * offset + shiftY,
        z: 0.015 + Math.cos((u - 0.5) * Math.PI) * 0.012,
      };
    };
    this.grids.leftSleeve.setTarget((u,v) => sleeveTarget("left",u,v));
    this.grids.rightSleeve.setTarget((u,v) => sleeveTarget("right",u,v));

    const torsoX = shoulderMid.x;
    if (this.lastTorsoX !== null) this.motionX = lerp(this.motionX, (torsoX - this.lastTorsoX) * 24, 0.28);
    this.lastTorsoX = torsoX;
  }

  updateBottomTargets(lm, metrics, yaw) {
    const lh = this.landmarkToWorld(lm[IDX.L_HIP], metrics);
    const rh = this.landmarkToWorld(lm[IDX.R_HIP], metrics);
    const lk = this.landmarkToWorld(lm[IDX.L_KNEE], metrics);
    const rk = this.landmarkToWorld(lm[IDX.R_KNEE], metrics);
    const la = this.landmarkToWorld(lm[IDX.L_ANKLE], metrics);
    const ra = this.landmarkToWorld(lm[IDX.R_ANKLE], metrics);

    const scaleCtl = Number(document.getElementById("scaleRange")?.value || 100) / 100;
    const widthCtl = Number(document.getElementById("widthRange")?.value || 100) / 100;
    const xCtl = Number(document.getElementById("xRange")?.value || 0) / 100;
    const yCtl = Number(document.getElementById("yRange")?.value || 0) / 100;

    const hipMid = mixPoint(lh, rh, 0.5);
    const hipW = Math.hypot(rh.x-lh.x, rh.y-lh.y);
    const legH = (Math.hypot(la.x-lh.x,la.y-lh.y)+Math.hypot(ra.x-rh.x,ra.y-rh.y))*0.5;
    const turn = 0.72 + 0.28 * Math.cos(Math.abs(yaw));
    const shiftX = xCtl * hipW * 0.8;
    const shiftY = -yCtl * legH * 0.7;

    this.grids.torso.setVisible(false);
    this.grids.leftSleeve.setVisible(false);
    this.grids.rightSleeve.setVisible(false);
    this.grids.waist.setVisible(true);
    this.grids.leftLeg.setVisible(true);
    this.grids.rightLeg.setVisible(true);

    this.grids.waist.setTarget((u,v) => {
      const left = mixPoint(lh, lk, v*0.18);
      const right = mixPoint(rh, rk, v*0.18);
      const center = mixPoint(left,right,0.5);
      const width = hipW * widthCtl * scaleCtl * turn * lerp(1.18,0.92,v);
      return {
        x:center.x+(u-.5)*width+shiftX,
        y:center.y+shiftY-v*0.025,
        z:Math.cos((u-.5)*Math.PI)*0.018,
      };
    });

    const legTarget = (side,u,v) => {
      const hip = side==="left"?lh:rh;
      const knee = side==="left"?lk:rk;
      const ankle = side==="left"?la:ra;
      let center;
      if(v<0.48) center=mixPoint(hip,knee,v/0.48);
      else center=mixPoint(knee,ankle,(v-0.48)/0.52);
      const width = hipW * lerp(0.42,0.22,v) * widthCtl * scaleCtl * turn;
      const dx = v<0.48?knee.x-hip.x:ankle.x-knee.x;
      const dy = v<0.48?knee.y-hip.y:ankle.y-knee.y;
      const len=Math.hypot(dx,dy)||1;
      const nx=-dy/len, ny=dx/len;
      const offset=(u-.5)*width;
      return {
        x:center.x+nx*offset+shiftX,
        y:center.y+ny*offset+shiftY,
        z:Math.cos((u-.5)*Math.PI)*0.014,
      };
    };
    this.grids.leftLeg.setTarget((u,v)=>legTarget("left",u,v));
    this.grids.rightLeg.setTarget((u,v)=>legTarget("right",u,v));

    if (this.lastTorsoX !== null) this.motionX = lerp(this.motionX,(hipMid.x-this.lastTorsoX)*22,0.28);
    this.lastTorsoX=hipMid.x;
  }

  drawOcclusion(lm, metrics) {
    const ctx = this.occlusionCtx;
    const dpr = this.occlusionDpr || 1;
    const w = metrics.sw, h = metrics.sh;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0,0,w,h);

    ctx.save();
    ctx.drawImage(this.video, metrics.ox, metrics.oy, metrics.vw*metrics.scale, metrics.vh*metrics.scale);
    ctx.globalCompositeOperation = "destination-in";
    ctx.strokeStyle = "#fff";
    ctx.fillStyle = "#fff";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const px = (i)=>this.landmarkToPixel(lm[i],metrics);
    const lS=px(IDX.L_SHOULDER), rS=px(IDX.R_SHOULDER);
    const lE=px(IDX.L_ELBOW), rE=px(IDX.R_ELBOW);
    const lW=px(IDX.L_WRIST), rW=px(IDX.R_WRIST);
    const shoulderPx=Math.hypot(rS.x-lS.x,rS.y-lS.y);
    const reach=this.garment.category==="tops"?clamp(this.garment.sleeveReach,0.45,1.9):0.2;

    const armPath=(s,e,wrist)=>{
      let start;
      if(this.garment.category==="tops"){
        start = reach<=1 ? mixPoint(s,e,clamp(reach,0.35,0.95)) : mixPoint(e,wrist,clamp(reach-1,0,0.88));
      } else {
        start=s;
      }
      ctx.beginPath();
      ctx.lineWidth=Math.max(12,shoulderPx*0.17);
      ctx.moveTo(start.x,start.y);
      ctx.lineTo(e.x,e.y);
      ctx.lineTo(wrist.x,wrist.y);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(wrist.x,wrist.y,Math.max(8,shoulderPx*0.09),0,Math.PI*2);
      ctx.fill();
    };
    armPath(lS,lE,lW);
    armPath(rS,rE,rW);

    const nose=px(IDX.NOSE), le=px(IDX.L_EAR), re=px(IDX.R_EAR);
    const earW=Math.max(shoulderPx*0.34,Math.hypot(re.x-le.x,re.y-le.y)*0.82);
    ctx.beginPath();
    ctx.ellipse(nose.x,nose.y-shoulderPx*0.08,earW,shoulderPx*0.34,0,0,Math.PI*2);
    ctx.fill();

    ctx.restore();
  }

  updatePose(timestamp) {
    if (!this.poseLandmarker || this.video.readyState < 2) return;
    if (timestamp - this.lastDetect < 32) return;
    this.lastDetect = timestamp;
    const start = performance.now();

    try {
      const result = this.poseLandmarker.detectForVideo(this.video, timestamp);
      if (!result.landmarks?.length) {
        this.poseReady=false;
        this.landmarks=null;
        this.hideGarment();
        this.guide.hidden=false;
        this.poseLabel.textContent="بدن پیدا نشد";
        return;
      }
      const dt = this.lastPoseAt ? (timestamp-this.lastPoseAt)/1000 : 1/30;
      this.lastPoseAt=timestamp;
      this.landmarks=this.smoother.update(result.landmarks[0],dt);
      this.worldLandmarks=result.worldLandmarks?.[0] || null;
      const q=this.poseQuality(this.landmarks);
      this.poseReady=q>0.38;
      this.poseLabel.textContent=Math.round(q*100)+"٪";
      this.guide.hidden=this.poseReady;
      const inferMs=performance.now()-start;
      if(this.engineLabel) this.engineLabel.dataset.ms=inferMs.toFixed(0);
    } catch (error) {
      this.setMode("خطای Body Tracker");
    }
  }

  renderGarment(dt, timestamp) {
    if (!this.renderer || !this.poseReady || !this.landmarks || !this.texture) {
      this.hideGarment();
      if (this.renderer) this.renderer.render(this.scene,this.camera);
      return;
    }

    const metrics=this.coverMetrics();
    const yaw=this.computeYaw(this.worldLandmarks);
    if(this.garment.category==="bottoms") this.updateBottomTargets(this.landmarks,metrics,yaw);
    else this.updateTopTargets(this.landmarks,metrics,yaw);

    const physics=Number(this.physicsInput?.value || 55)/100;
    const stiffness=lerp(72,28,physics);
    const damping=lerp(0.68,0.84,physics);
    Object.values(this.grids).forEach((g)=>g?.mesh.visible && g.step(dt,this.motionX,stiffness,damping));
    this.motionX*=0.90;

    this.material.uniforms.uYaw.value=yaw;
    this.material.uniforms.uMotion.value=Math.min(1.2,Math.abs(this.motionX)*8);
    this.material.uniforms.uTime.value=timestamp/1000;

    this.renderer.render(this.scene,this.camera);
    this.drawOcclusion(this.landmarks,metrics);
    this.yawLabel.textContent=Math.round(yaw*180/Math.PI)+"°";
  }

  loop(timestamp) {
    if (!this.running) return;
    const dt=clamp((timestamp-this.lastRender)/1000,0.008,0.05);
    this.lastRender=timestamp;

    this.updatePose(timestamp);
    this.renderGarment(dt,timestamp);

    this.frameCounter++;
    if(timestamp-this.fpsWindowStart>=1000){
      const fps=this.frameCounter*1000/(timestamp-this.fpsWindowStart);
      this.fpsLabel.textContent=fps.toFixed(0)+" FPS";
      this.frameCounter=0;
      this.fpsWindowStart=timestamp;
      const ms=this.engineLabel?.dataset.ms;
      this.setMode(ms ? "Tracking "+ms+"ms • Render Live" : "Render Live");
    }

    this.raf=requestAnimationFrame((t)=>this.loop(t));
  }

  snapshot() {
    if (!this.running) return;
    const stage=document.getElementById("ultraStage");
    const rect=stage.getBoundingClientRect();
    const canvas=document.createElement("canvas");
    const scale=2;
    canvas.width=Math.round(rect.width*scale);
    canvas.height=Math.round(rect.height*scale);
    const ctx=canvas.getContext("2d");
    const metrics=this.coverMetrics();

    ctx.save();
    if(this.facing==="user"){
      ctx.translate(canvas.width,0);
      ctx.scale(-1,1);
    }
    ctx.scale(scale,scale);
    ctx.drawImage(this.video,metrics.ox,metrics.oy,metrics.vw*metrics.scale,metrics.vh*metrics.scale);
    ctx.drawImage(this.renderer.domElement,0,0,rect.width,rect.height);
    ctx.drawImage(this.occlusion,0,0,rect.width,rect.height);
    ctx.restore();

    const link=document.createElement("a");
    link.download="try-poshak-ultra-"+Date.now()+".png";
    link.href=canvas.toDataURL("image/png",0.95);
    link.click();
  }
}

function boot() {
  try {
    window.TryPoshakUltraLive = new UltraLiveStudio();
    if (new URLSearchParams(location.search).get("ultraAutoStart") === "1") {
      setTimeout(() => window.TryPoshakUltraLive?.start(), 350);
    }
  } catch (error) {
    console.error("Ultra Live boot failed", error);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
