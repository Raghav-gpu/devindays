import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { execSync } from "node:child_process";

const SOURCE = "public/logo.png";
const ICONS_DIR = "public/icons";

const SIZES = [
  { name: "icon-16.png", size: 16, dir: ICONS_DIR },
  { name: "icon-32.png", size: 32, dir: ICONS_DIR },
  { name: "icon-192.png", size: 192, dir: ICONS_DIR },
  { name: "icon-512.png", size: 512, dir: ICONS_DIR },
  { name: "icon.png", size: 32, dir: "app" },
  { name: "apple-icon.png", size: 180, dir: "app" },
];

async function renderIcon(size, paddingRatio = 0.08) {
  const canvas = size;
  const inset = Math.round(canvas * paddingRatio);
  const inner = canvas - inset * 2;

  const logo = await sharp(SOURCE)
    .resize(inner, inner, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();

  return sharp({
    create: {
      width: canvas,
      height: canvas,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: logo, gravity: "center" }])
    .png()
    .toBuffer();
}

async function main() {
  await mkdir(ICONS_DIR, { recursive: true });

  await writeFile(join(ICONS_DIR, "apple-touch-icon.png"), await renderIcon(180));
  console.log(`  ✓ ${join(ICONS_DIR, "apple-touch-icon.png")}`);

  for (const { name, size, dir } of SIZES) {
    const output = join(dir, name);
    const buffer = await renderIcon(size);
    await writeFile(output, buffer);
    console.log(`  ✓ ${output}`);
  }

  const favicon32 = join(ICONS_DIR, "icon-32.png");
  try {
    execSync(`npx --yes png-to-ico "${favicon32}" > app/favicon.ico`, {
      stdio: "pipe",
    });
    console.log("  ✓ app/favicon.ico");
  } catch {
    const fallback = await renderIcon(32);
    await writeFile("app/favicon.ico", fallback);
    console.log("  ✓ app/favicon.ico (png fallback)");
  }

  const maskable = await renderIcon(512, 0.18);
  await writeFile(join(ICONS_DIR, "icon-512-maskable.png"), maskable);
  console.log(`  ✓ ${join(ICONS_DIR, "icon-512-maskable.png")}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
