/**
 * Generates a minimal Geist woff2 for above-the-fold / LCP text.
 * Run after `npm run build` (reads the preloaded latin woff2 from .next/static/media).
 */
import subsetFont from "subset-font";
import fs from "fs";
import path from "path";

const mediaDir = path.join(process.cwd(), ".next/static/media");
const outPath = path.join(process.cwd(), "public/fonts/geist-lcp.woff2");

const preloaded = fs.existsSync(mediaDir)
  ? fs.readdirSync(mediaDir).find((f) => f.includes(".p.") && f.endsWith(".woff2"))
  : null;

if (!preloaded) {
  console.error("Run `npm run build` first — preloaded Geist woff2 not found in .next/static/media");
  process.exit(1);
}

const source = fs.readFileSync(path.join(mediaDir, preloaded));

const lcpText = [
  "Build Your MVP in 2–3 Weeks Without Hiring a Tech Team",
  "We help founders turn ideas into production-ready mobile apps fast.",
  "Clear scope, fixed timelines, full code ownership.",
  "DevInDays Build My MVP See How It Works",
  "What We Do Pricing How It Works Projects Why Us Contact",
].join(" ");

const subset = await subsetFont(source, lcpText, { targetFormat: "woff2" });

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, subset);

console.log(`Source: ${preloaded} (${source.length} bytes)`);
console.log(`Output: public/fonts/geist-lcp.woff2 (${subset.length} bytes, ${((1 - subset.length / source.length) * 100).toFixed(1)}% smaller)`);
