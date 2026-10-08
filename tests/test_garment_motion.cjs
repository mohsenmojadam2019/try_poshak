const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const { calculateLanding } = require("../static/garment-motion.js");

test("top and bottom garment landing zones remain within the preview", () => {
  const stage = { left: 120, top: 80, width: 380, height: 530 };
  for (const category of ["tops", "bottoms"]) {
    const box = calculateLanding(stage, category);
    assert.ok(box.width > 0 && box.height > 0);
    assert.ok(box.left >= stage.left && box.top >= stage.top);
    assert.ok(box.left + box.width <= stage.left + stage.width);
    assert.ok(box.top + box.height <= stage.top + stage.height);
  }
});

test("trousers fly toward lower body than shirts", () => {
  const stage = { left: 0, top: 0, width: 400, height: 600 };
  const shirt = calculateLanding(stage, "tops");
  const trousers = calculateLanding(stage, "bottoms");
  assert.ok(trousers.top > shirt.top);
  assert.ok(trousers.top + trousers.height > shirt.top + shirt.height);
});

test("flight destination tracks resized preview", () => {
  const a = calculateLanding({ left: 20, top: 30, width: 200, height: 300 }, "tops");
  const b = calculateLanding({ left: 20, top: 30, width: 400, height: 600 }, "tops");
  assert.equal(b.width, a.width * 2);
  assert.equal(b.height, a.height * 2);
});

test("the existing fitting page loads motion scripts and has the toggle", () => {
  const page = fs.readFileSync(path.join(__dirname, "..", "templates", "index.html"), "utf8");
  const app = fs.readFileSync(path.join(__dirname, "..", "static", "app.js"), "utf8");
  assert.match(page, /id="garmentMotionToggle"/);
  assert.match(page, /\/static\/garment-motion\.js\?v=1/);
  assert.match(page, /\/static\/garment-motion\.css\?v=1/);
  assert.match(app, /tryposhak:garmentchange/);
});