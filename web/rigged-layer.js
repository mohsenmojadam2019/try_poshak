import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

const IDX = {
  NOSE: 0,
  L_SHOULDER: 11, R_SHOULDER: 12,
  L_ELBOW: 13, R_ELBOW: 14,
  L_WRIST: 15, R_WRIST: 16,
  L_HIP: 23, R_HIP: 24,
};

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const visible = (p, t = 0.20) => Boolean(p) && (p.visibility ?? 1) >= t;

function toStageNorm(p, metrics) {
  if (!metrics) return p;
  const px = metrics.ox + p.x * metrics.vw * metrics.scale;
  const py = metrics.oy + p.y * metrics.vh * metrics.scale;
  return {
    x: px / Math.max(1, metrics.sw),
    y: py / Math.max(1, metrics.sh),
    z: p.z || 0,
    visibility: p.visibility ?? 1,
  };
}

function limbDirection(lm, world, a, b) {
  const src = world || lm;
  const p = src?.[a];
  const q = src?.[b];
  if (!p || !q) return null;

  const v = new THREE.Vector3(
    q.x - p.x,
    -(q.y - p.y),
    -(q.z - p.z)
  );
  if (v.lengthSq() < 1e-8) return null;
  return v.normalize();
}

export class RiggedGarmentLayer {
  constructor(scene) {
    this.scene = scene;

    this.draco = new DRACOLoader();
    this.draco.setDecoderPath("/static/draco/");
    this.draco.setDecoderConfig({ type: "wasm" });

    this.loader = new GLTFLoader();
    this.loader.setDRACOLoader(this.draco);

    this.wrapper = new THREE.Group();
    this.wrapper.name = "TryPoshakRiggedGarment";
    this.wrapper.visible = false;
    scene.add(this.wrapper);

    this.model = null;
    this.currentUrl = null;
    this.loadingUrl = null;
    this.loadingPromise = null;
    this.ready = false;
    this.enabled = true;
    this.tint = "#18324f";

    this.bones = {};
    this.restAxis = {};
    this.lastQuat = {};

    this.hasRootState = false;
    this.currentPosition = new THREE.Vector3();
    this.currentScale = new THREE.Vector3(1, 1, 1);
    this.currentQuaternion = new THREE.Quaternion();
    this.targetScale = new THREE.Vector3();
    this.modelShoulderLocal = new THREE.Vector3(0, 0.12, 0);
    this.targetShoulderWorld = new THREE.Vector3();
    this.shoulderOffsetWorld = new THREE.Vector3();
    this._bonePosA = new THREE.Vector3();
    this._bonePosB = new THREE.Vector3();

    // Visual-fit calibration. The old depth formula accidentally cancelled
    // the detected shoulder width and behaved like an almost 1-metre shoulder
    // span, which is why the shirt looked 2-3x too large. We calibrate the
    // virtual camera against a realistic shoulder reference, then align the
    // rig's shoulder bones to the detected shoulders.
    this.referenceShoulderWidth = 0.43;
    this.fitFactor = 1.0;
    this.garmentScale = 1.0;
    this.baseWidth = 0.8;
    this.baseHeight = 0.7;
    this.baseShoulderWidth = 0.33;
    this.modelBottomLocalY = -0.3;
    this.modelShoulderToHem = 0.58;
    this.garmentWidthFactor = 1.01;
    this.garmentLengthFactor = 0.94;
    this.minDepth = 0.45;
    this.maxDepth = 6.0;
    this.torsoDrop = 1.08;
    this.positionLerp = 0.46;
    this.rotationLerp = 0.34;
    this.scaleLerp = 0.30;

    this.tmp = new THREE.Vector3();
    this.parentQ = new THREE.Quaternion();
    this.parentInvQ = new THREE.Quaternion();
    this.targetDir = new THREE.Vector3();
    this.restDir = new THREE.Vector3();
    this.targetQ = new THREE.Quaternion();
    this.yawQ = new THREE.Quaternion();
    this.rollQ = new THREE.Quaternion();
    this.rootTargetQ = new THREE.Quaternion();
  }

  async load(url) {
    if (!url) throw new Error("مدل سه‌بعدی مشخص نشده است.");
    if (this.currentUrl === url && this.ready) {
      this.enabled = true;
      this.wrapper.visible = true;
      return;
    }
    if (this.loadingUrl === url && this.loadingPromise) {
      return this.loadingPromise;
    }

    this.loadingUrl = url;
    this.ready = false;
    this.wrapper.visible = false;

    const task = (async () => {
      const gltf = await this.loader.loadAsync(url);
      if (this.loadingUrl !== url) return;

      this.disposeModel();

      const rawModel = gltf.scene;
      const box = new THREE.Box3().setFromObject(rawModel);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      this.baseWidth = Math.max(0.05, size.x);
      this.baseHeight = Math.max(0.05, size.y);
      this.modelBottomLocalY = box.min.y - center.y;

      rawModel.position.set(-center.x, -center.y, -center.z);

      rawModel.traverse((node) => {
        if (node.isMesh) {
          node.frustumCulled = false;
          node.castShadow = false;
          node.receiveShadow = false;
        }
        if (node.isSkinnedMesh && node.material) {
          const mats = Array.isArray(node.material) ? node.material : [node.material];
          for (const mat of mats) {
            mat.skinning = true;
            mat.side = THREE.DoubleSide;
            mat.depthTest = true;
            mat.depthWrite = true;
            if ("metalness" in mat) mat.metalness = Math.min(mat.metalness ?? 0, 0.12);
            if ("roughness" in mat) mat.roughness = Math.max(mat.roughness ?? 0.5, 0.58);
          }
        }
      });

      this.wrapper.position.set(0, 0, 0);
      this.wrapper.scale.set(1, 1, 1);
      this.wrapper.quaternion.identity();

      this.model = rawModel;
      this.wrapper.add(rawModel);
      this.bindSkeleton();
      this.captureModelShoulderAnchor();
      this.applyTint();

      this.currentUrl = url;
      this.ready = true;
      this.enabled = true;
      this.hasRootState = false;
      this.wrapper.visible = true;
    })();

    this.loadingPromise = task;
    try {
      await task;
    } finally {
      if (this.loadingUrl === url) this.loadingUrl = null;
      if (this.loadingPromise === task) this.loadingPromise = null;
    }
  }

  setTint(color) {
    if (color) this.tint = color;
    this.applyTint();
  }

  applyTint() {
    if (!this.model) return;
    const color = new THREE.Color(this.tint);
    this.model.traverse((node) => {
      if (!node.isMesh || !node.material) return;
      const mats = Array.isArray(node.material) ? node.material : [node.material];
      for (const mat of mats) {
        // Keep the original fabric maps. Material.color multiplies the base
        // texture, so folds/normal detail survive instead of becoming a flat
        // plastic-looking solid block.
        if ("color" in mat) mat.color.copy(color);
        if ("emissive" in mat) mat.emissive.set(0x000000);
        if ("metalness" in mat) mat.metalness = Math.min(mat.metalness ?? 0, 0.08);
        if ("roughness" in mat) mat.roughness = Math.max(mat.roughness ?? 0.55, 0.62);
        mat.needsUpdate = true;
      }
    });
  }

  bindSkeleton() {
    this.bones = {};
    this.restAxis = {};
    this.restQuat = {};
    this.lastQuat = {};

    let skeleton = null;
    this.model?.traverse((obj) => {
      if (!skeleton && obj.isSkinnedMesh && obj.skeleton) skeleton = obj.skeleton;
    });
    if (!skeleton) return;

    for (const bone of skeleton.bones) this.bones[bone.name] = bone;

    const chains = [
      ["left_shoulder", "left_elbow"],
      ["left_elbow", "left_wrist"],
      ["right_shoulder", "right_elbow"],
      ["right_elbow", "right_wrist"],
    ];

    for (const [boneName, childName] of chains) {
      const bone = this.bones[boneName];
      const child = this.bones[childName];
      if (!bone || !child) continue;

      const axis = child.position.clone();
      if (axis.lengthSq() < 1e-8) continue;

      const restQ = bone.quaternion.clone();
      // child.position lives in the bone's local frame. Convert the bind-pose
      // limb direction into the bone-parent frame so it can be compared with
      // the live target direction in the same coordinate system.
      this.restAxis[boneName] = axis.normalize().applyQuaternion(restQ);
      this.restQuat[boneName] = restQ;
      this.lastQuat[boneName] = restQ.clone();
    }
  }

  captureModelShoulderAnchor() {
    const left = this.bones.left_shoulder;
    const right = this.bones.right_shoulder;
    if (!left || !right) return;

    this.wrapper.updateMatrixWorld(true);
    left.getWorldPosition(this._bonePosA);
    right.getWorldPosition(this._bonePosB);
    const leftLocal = this.wrapper.worldToLocal(this._bonePosA.clone());
    const rightLocal = this.wrapper.worldToLocal(this._bonePosB.clone());
    this.baseShoulderWidth = Math.max(0.02, leftLocal.distanceTo(rightLocal));
    this.modelShoulderLocal.copy(leftLocal).add(rightLocal).multiplyScalar(0.5);
    this.modelShoulderToHem = Math.max(
      0.08,
      this.modelShoulderLocal.y - this.modelBottomLocalY
    );
  }

  setEnabled(enabled) {
    this.enabled = Boolean(enabled);
    this.wrapper.visible = this.enabled && this.ready;
  }

  update(landmarks, worldLandmarks, camera, metrics, yaw, dt) {
    if (!this.enabled || !this.ready || !landmarks || !camera || !metrics) return false;

    const ls = landmarks[IDX.L_SHOULDER];
    const rs = landmarks[IDX.R_SHOULDER];
    if (!visible(ls) || !visible(rs)) {
      this.wrapper.visible = false;
      return false;
    }

    // MediaPipe landmarks are normalized to the raw camera frame, while the
    // <video> uses object-fit: cover. Convert into the actually visible stage
    // coordinates before projecting the garment into the 3D camera.
    const toStage = (p) => {
      const px = metrics.ox + p.x * metrics.vw * metrics.scale;
      const py = metrics.oy + p.y * metrics.vh * metrics.scale;
      return {
        x: px / metrics.sw,
        y: py / metrics.sh,
        visibility: p.visibility ?? 1,
      };
    };

    const sl = toStage(ls);
    const sr = toStage(rs);
    const shoulderMidX = (sl.x + sr.x) * 0.5;
    const shoulderMidY = (sl.y + sr.y) * 0.5;
    const shoulderW = Math.max(Math.hypot(sl.x - sr.x, sl.y - sr.y), 0.001);

    const vFov = THREE.MathUtils.degToRad(camera.fov);
    const tanHalf = Math.tan(vFov * 0.5);

    // Estimate virtual camera depth from the *observed shoulder span* and a
    // realistic physical shoulder reference. This preserves perspective while
    // keeping the projected rig shoulders locked to the user's shoulders.
    const denom = Math.max(
      shoulderW * 2 * tanHalf * camera.aspect * this.fitFactor,
      0.0001
    );
    const distance = clamp(
      this.referenceShoulderWidth / denom,
      this.minDepth,
      this.maxDepth
    );
    const depthZ = camera.position.z - distance;

    this.yawQ.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -(yaw || 0));
    const shoulderRoll = -Math.atan2(sr.y - sl.y, sr.x - sl.x);
    this.rollQ.setFromAxisAngle(new THREE.Vector3(0, 0, 1), shoulderRoll);
    this.rootTargetQ.copy(this.rollQ).multiply(this.yawQ);

    const worldWidthAtDepth = 2 * tanHalf * distance * camera.aspect;
    const targetShoulderWorldWidth =
      shoulderW * worldWidthAtDepth * this.garmentWidthFactor;

    // Width is fitted from the rig's anatomical shoulder bones, not from the
    // garment bounding box. Vertical scale is independently refined from the
    // visible shoulder-to-hip distance when hips are available. This prevents
    // the oversized torso/neck seen in the previous build.
    const scaleX = clamp(
      targetShoulderWorldWidth / Math.max(this.baseShoulderWidth, 0.02),
      0.62,
      1.85
    );

    let scaleY = scaleX * this.garmentLengthFactor;
    const lh = landmarks[IDX.L_HIP];
    const rh = landmarks[IDX.R_HIP];
    if (visible(lh, 0.18) && visible(rh, 0.18)) {
      const hl = toStage(lh);
      const hr = toStage(rh);
      const hipMidX = (hl.x + hr.x) * 0.5;
      const hipMidY = (hl.y + hr.y) * 0.5;
      const torsoScreen = Math.hypot(
        hipMidX - shoulderMidX,
        hipMidY - shoulderMidY
      );
      const worldHeightAtDepth = 2 * tanHalf * distance;
      const targetTorsoWorld = torsoScreen * worldHeightAtDepth;
      scaleY = clamp(
        (targetTorsoWorld * this.garmentLengthFactor) /
          Math.max(this.modelShoulderToHem, 0.08),
        scaleX * 0.78,
        scaleX * 1.18
      );
    }

    const scaleZ = Math.min(scaleX, scaleY) * 0.96;
    this.targetScale.set(scaleX, scaleY, scaleZ);

    // Exact anchor fit: project the user's shoulder midpoint into the 3D scene,
    // then place the model so the rigged shoulder midpoint lands on it.
    const shoulderTarget = this.projectAtDepth(
      shoulderMidX,
      shoulderMidY,
      depthZ,
      camera,
      tanHalf,
      this.targetShoulderWorld
    );
    this.shoulderOffsetWorld
      .copy(this.modelShoulderLocal)
      .multiply(this.targetScale)
      .applyQuaternion(this.rootTargetQ);
    const targetPos = this.tmp
      .copy(shoulderTarget)
      .sub(this.shoulderOffsetWorld);

    if (!this.hasRootState) {
      this.currentPosition.copy(targetPos);
      this.currentScale.copy(this.targetScale);
      this.currentQuaternion.copy(this.rootTargetQ);
      this.hasRootState = true;
    } else {
      const pAlpha = clamp(this.positionLerp + dt * 1.5, 0.35, 0.72);
      this.currentPosition.lerp(targetPos, pAlpha);
      this.currentScale.lerp(this.targetScale, this.scaleLerp);
      this.currentQuaternion.slerp(this.rootTargetQ, this.rotationLerp);
    }

    this.wrapper.position.copy(this.currentPosition);
    this.wrapper.scale.copy(this.currentScale);
    this.wrapper.quaternion.copy(this.currentQuaternion);
    this.wrapper.visible = true;

    this.applyArmPose(landmarks, worldLandmarks, dt);
    return true;
  }

  projectAtDepth(nx, ny, z, camera, tanHalf, out) {
    const dist = Math.abs(z - camera.position.z);
    const height = 2 * tanHalf * dist;
    const width = height * camera.aspect;
    out.set(
      (nx - 0.5) * width,
      -(ny - 0.5) * height,
      z
    );
    return out;
  }

  applyArmPose(lm, world, dt) {
    const chains = [
      ["left_shoulder", IDX.L_SHOULDER, IDX.L_ELBOW],
      ["left_elbow", IDX.L_ELBOW, IDX.L_WRIST],
      ["right_shoulder", IDX.R_SHOULDER, IDX.R_ELBOW],
      ["right_elbow", IDX.R_ELBOW, IDX.R_WRIST],
    ];

    for (const [boneName, fromIdx, toIdx] of chains) {
      const bone = this.bones[boneName];
      const restAxis = this.restAxis[boneName];
      const restQ = this.restQuat[boneName];
      const last = this.lastQuat[boneName];
      if (!bone || !restAxis || !restQ || !last || !bone.parent) continue;
      if (!visible(lm[fromIdx], 0.16) || !visible(lm[toIdx], 0.16)) continue;

      const direction = limbDirection(lm, world, fromIdx, toIdx);
      if (!direction) continue;

      this.wrapper.updateMatrixWorld(true);
      bone.parent.getWorldQuaternion(this.parentQ);
      this.parentInvQ.copy(this.parentQ).invert();
      this.targetDir.copy(direction).applyQuaternion(this.parentInvQ).normalize();

      this.restDir.copy(restAxis).normalize();
      // Delta rotation from bind-pose limb direction to the live direction,
      // then compose it with the original bind quaternion. This avoids the
      // extreme sleeve twists caused by treating the bind pose as identity.
      this.targetQ
        .setFromUnitVectors(this.restDir, this.targetDir)
        .multiply(restQ);

      const alpha = clamp(0.24 + dt * 4.0, 0.22, 0.44);
      last.slerp(this.targetQ, alpha);
      bone.quaternion.copy(last);
      bone.updateMatrixWorld(true);
    }
  }

  debugShow(camera) {
    if (!this.ready) return;
    this.enabled = true;
    this.wrapper.visible = true;
    this.wrapper.position.set(0, -0.1, camera ? camera.position.z - 1.8 : 0);
    this.wrapper.scale.setScalar(1);
    this.wrapper.quaternion.identity();
  }

  disposeModel() {
    if (!this.model) return;
    this.wrapper.remove(this.model);
    this.model.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose?.();
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        for (const mat of mats) mat.dispose?.();
      }
    });
    this.model = null;
  }

  dispose() {
    this.disposeModel();
    this.draco.dispose?.();
    this.scene.remove(this.wrapper);
  }
}
