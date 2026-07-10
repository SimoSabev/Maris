const sharp = require('sharp');
const fs = require('fs');

// Packs PNG buffers into a standard multi-image .ico container.
function buildIco(sizes, pngBuffers) {
  const numImages = sizes.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const offsets = [];
  let offset = headerSize + dirEntrySize * numImages;
  for (const buf of pngBuffers) {
    offsets.push(offset);
    offset += buf.length;
  }

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(numImages, 4);

  const dirEntries = sizes.map((size, i) => {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color palette
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(pngBuffers[i].length, 8);
    entry.writeUInt32LE(offsets[i], 12);
    return entry;
  });

  return Buffer.concat([header, ...dirEntries, ...pngBuffers]);
}

const SRC = 'public/images/brand/maris-logo-dark.png';
const BBOX = { minX: 1120, minY: 382, maxX: 1758, maxY: 1182 };
const BG = '#FAF8F4';

async function main() {
  const padPct = 0.09;
  const bw = BBOX.maxX - BBOX.minX;
  const bh = BBOX.maxY - BBOX.minY;
  const padX = Math.round(bw * padPct);
  const padTop = Math.round(bh * padPct);
  const padBottom = Math.round(bh * 0.03); // text starts close below the M's tail

  const left = Math.max(0, BBOX.minX - padX);
  const top = Math.max(0, BBOX.minY - padTop);
  const width = bw + padX * 2;
  const height = bh + padTop + padBottom;

  const cropped = await sharp(SRC)
    .extract({ left, top, width, height })
    .png()
    .toBuffer();

  const cropMeta = await sharp(cropped).metadata();
  const side = Math.max(cropMeta.width, cropMeta.height);

  // Square canvas, brand background, mark centered
  const master = await sharp({
    create: {
      width: side,
      height: side,
      channels: 4,
      background: BG,
    },
  })
    .composite([
      {
        input: cropped,
        left: Math.round((side - cropMeta.width) / 2),
        top: Math.round((side - cropMeta.height) / 2),
      },
    ])
    .png()
    .toBuffer();

  fs.mkdirSync('public/images/brand', { recursive: true });
  await sharp(master).resize(1024, 1024).toFile('public/images/brand/maris-mark.png');

  // App icon conventions
  await sharp(master).resize(512, 512).toFile('src/app/icon.png');
  await sharp(master).resize(180, 180).toFile('src/app/apple-icon.png');

  // favicon.ico (multi-size, PNG-embedded ICO — supported since Vista)
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((s) => sharp(master).resize(s, s).png().toBuffer())
  );
  const ico = buildIco(sizes, pngBuffers);
  fs.writeFileSync('src/app/favicon.ico', ico);
  fs.writeFileSync('public/favicon.ico', ico);

  console.log('done', { side });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
