#!/usr/bin/env node
import fs from "node:fs";

const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];
const baseline = JSON.parse(fs.readFileSync("lighthouse-baseline.json", "utf8"));
const reports = fs
  .readdirSync(".lighthouseci")
  .filter((f) => f.startsWith("lhr-") && f.endsWith(".json"))
  .map((f) => JSON.parse(fs.readFileSync(`.lighthouseci/${f}`, "utf8")));

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

let failed = false;

for (const category of CATEGORIES) {
  const score = median(reports.map((r) => r.categories[category].score));
  const floor = baseline[category];
  const ok = score >= floor;
  if (!ok) failed = true;
  console.log(`${category}: ${(score * 100).toFixed(0)} (min ${(floor * 100).toFixed(0)}) ${ok ? "ok" : "FAIL"}`);
}

if (failed) process.exit(1);
