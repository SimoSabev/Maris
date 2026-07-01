import sharp from "sharp";
import { readdir, stat, rename } from "node:fs/promises";
import path from "node:path";

const DIR = path.resolve("public/images");
// Hero gets a larger cap; everything else is section-sized.
const HERO = new Set(["hero-yacht-profile.jpg"]);
const MAX_HERO = 2560;
const MAX_OTHER = 1920;
const JPG_Q = 82;

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

for (const file of files) {
  const full = path.join(DIR, file);
  const before = (await stat(full)).size;
  const max = HERO.has(file) ? MAX_HERO : MAX_OTHER;
  const isPng = /\.png$/i.test(file);
  const tmp = full + ".tmp";
  const pipeline = sharp(full).rotate().resize({ width: max, height: max, fit: "inside", withoutEnlargement: true });
  // Keep original format (extension must match served Content-Type for Next's optimizer).
  if (isPng) {
    await pipeline.png({ quality: 80, compressionLevel: 9, palette: true }).toFile(tmp);
  } else {
    await pipeline.jpeg({ quality: JPG_Q, mozjpeg: true }).toFile(tmp);
  }
  await rename(tmp, full);
  const after = (await stat(full)).size;
  console.log(`${file}: ${(before / 1e6).toFixed(1)}MB -> ${(after / 1e6).toFixed(2)}MB`);
}
console.log("done");
