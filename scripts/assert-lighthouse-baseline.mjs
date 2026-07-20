#!/usr/bin/env node
/**
 * Compare Lighthouse CI results against lighthouse-baseline.json.
 * Fails if any category score drops below baseline minus tolerance.
 *
 * Usage:
 *   node scripts/assert-lighthouse-baseline.mjs
 *   node scripts/assert-lighthouse-baseline.mjs --update
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASELINE_PATH = path.join(ROOT, "lighthouse-baseline.json");
const RESULTS_DIR = path.join(ROOT, ".lighthouseci");
const UPDATE = process.argv.includes("--update");
const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

function loadReports() {
  if (!fs.existsSync(RESULTS_DIR)) {
    throw new Error(`Missing Lighthouse results directory: ${RESULTS_DIR}`);
  }

  const files = fs
    .readdirSync(RESULTS_DIR)
    .filter(
      (name) =>
        (name.startsWith("lhr-") && name.endsWith(".json")) ||
        name.endsWith(".report.json"),
    )
    .map((name) => path.join(RESULTS_DIR, name));

  if (files.length === 0) {
    throw new Error(`No Lighthouse report JSON found in ${RESULTS_DIR}`);
  }

  return files.map((file) => JSON.parse(fs.readFileSync(file, "utf8")));
}

function scoresFromReports(reports) {
  const byCategory = Object.fromEntries(CATEGORIES.map((c) => [c, []]));

  for (const report of reports) {
    for (const category of CATEGORIES) {
      const score = report.categories?.[category]?.score;
      if (typeof score !== "number") {
        throw new Error(`Missing category score: ${category}`);
      }
      byCategory[category].push(score);
    }
  }

  return Object.fromEntries(
    CATEGORIES.map((category) => [category, median(byCategory[category])]),
  );
}

function formatScore(score) {
  return (score * 100).toFixed(0);
}

const reports = loadReports();
const scores = scoresFromReports(reports);

if (UPDATE) {
  const existing = fs.existsSync(BASELINE_PATH)
    ? JSON.parse(fs.readFileSync(BASELINE_PATH, "utf8"))
    : {
        url: "/",
        tolerance: {
          performance: 0.05,
          accessibility: 0.01,
          "best-practices": 0,
          seo: 0,
        },
      };

  const next = {
    ...existing,
    categories: scores,
  };
  fs.writeFileSync(BASELINE_PATH, `${JSON.stringify(next, null, 2)}\n`);
  console.log(`Updated ${path.relative(ROOT, BASELINE_PATH)}:`);
  for (const category of CATEGORIES) {
    console.log(`  ${category}: ${formatScore(scores[category])}`);
  }
  process.exit(0);
}

if (!fs.existsSync(BASELINE_PATH)) {
  throw new Error(`Missing baseline file: ${BASELINE_PATH}`);
}

const baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, "utf8"));
const tolerance = baseline.tolerance ?? {};
const baselineScores = baseline.categories ?? {};

console.log(`Lighthouse baseline check (${reports.length} run(s), median)\n`);
console.log(
  `${"category".padEnd(16)} ${"score".padStart(5)} ${"baseline".padStart(8)} ${"floor".padStart(5)} ${"delta".padStart(6)} result`,
);

let failed = false;

for (const category of CATEGORIES) {
  const score = scores[category];
  const base = baselineScores[category];
  if (typeof base !== "number") {
    throw new Error(`Baseline missing category: ${category}`);
  }

  const cushion = tolerance[category] ?? 0;
  const floor = base - cushion;
  const delta = score - base;
  const ok = score + 1e-9 >= floor;
  if (!ok) failed = true;

  const deltaLabel = `${delta >= 0 ? "+" : ""}${(delta * 100).toFixed(0)}`;
  console.log(
    `${category.padEnd(16)} ${formatScore(score).padStart(5)} ${formatScore(base).padStart(8)} ${formatScore(floor).padStart(5)} ${deltaLabel.padStart(6)} ${ok ? "ok" : "REGRESSED"}`,
  );
}

if (failed) {
  console.error(
    "\nLighthouse scores dropped below the committed baseline (minus tolerance).",
  );
  console.error(
    "If the drop is intentional, fix the regression. If scores improved and should become the new floor, run:",
  );
  console.error("  node scripts/assert-lighthouse-baseline.mjs --update");
  process.exit(1);
}

console.log("\nAll category scores are at or above the baseline floor.");
