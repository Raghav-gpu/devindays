import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { join, parse } from "node:path";

const WIDTHS = [480, 768, 1024, 1440, 1920];
const MOCKUP_QUALITY = 82;
const BADGE_QUALITY = 90;

async function optimizeMockup(inputPath, outputDir) {
  const { name } = parse(inputPath);
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  for (const width of WIDTHS) {
    if (width > metadata.width) {
      continue;
    }

    const outputPath = join(outputDir, `${name}-${width}.webp`);
    await sharp(inputPath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: MOCKUP_QUALITY, alphaQuality: 90, effort: 6 })
      .toFile(outputPath);
  }

  const fullPath = join(outputDir, `${name}.webp`);
  await sharp(inputPath)
    .webp({ quality: MOCKUP_QUALITY, alphaQuality: 90, effort: 6 })
    .toFile(fullPath);

  return fullPath;
}

async function optimizeBadge(inputPath, outputDir) {
  const { name } = parse(inputPath);
  const outputPath = join(outputDir, `${name}.webp`);

  await sharp(inputPath)
    .webp({ quality: BADGE_QUALITY, effort: 6 })
    .toFile(outputPath);

  return outputPath;
}

async function main() {
  const mockupsDir = "public/mockups";
  const badgesDir = "public/badges";

  const mockups = (await readdir(mockupsDir)).filter((file) => file.endsWith(".png"));
  const badges = (await readdir(badgesDir)).filter(
    (file) => file.endsWith(".png") && !file.includes("-alt")
  );

  console.log(`Optimizing ${mockups.length} mockups...`);
  for (const file of mockups) {
    const output = await optimizeMockup(join(mockupsDir, file), mockupsDir);
    console.log(`  ✓ ${file} → ${output}`);
  }

  console.log(`Optimizing ${badges.length} badges...`);
  for (const file of badges) {
    const output = await optimizeBadge(join(badgesDir, file), badgesDir);
    console.log(`  ✓ ${file} → ${output}`);
  }

  console.log("Done.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
