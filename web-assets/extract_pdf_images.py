import sys, os, fitz  # PyMuPDF

pdf_path = sys.argv[1]
out_dir = sys.argv[2]
prefix = sys.argv[3] if len(sys.argv) > 3 else "img"
MIN_W, MIN_H = 700, 500           # skip logos / tiny decorations
MAX_W = 1920                      # cap for web

os.makedirs(out_dir, exist_ok=True)
doc = fitz.open(pdf_path)
seen = set()
saved = 0
for pno in range(len(doc)):
    for img in doc.get_page_images(pno):
        xref = img[0]
        if xref in seen:
            continue
        seen.add(xref)
        try:
            pix = fitz.Pixmap(doc, xref)
        except Exception:
            continue
        # normalise colorspace: CMYK / alpha -> RGB
        if pix.alpha:
            pix = fitz.Pixmap(pix, 0)
        if pix.colorspace is None or pix.colorspace.n not in (1, 3):
            pix = fitz.Pixmap(fitz.csRGB, pix)
        w, h = pix.width, pix.height
        if w < MIN_W or h < MIN_H:
            continue
        if w > MAX_W:                 # downscale large images
            factor = max(1, round(w / MAX_W))
            if factor > 1:
                pix.shrink(factor)
                w, h = pix.width, pix.height
        saved += 1
        name = f"{prefix}-{saved:02d}-p{pno+1}-{w}x{h}.jpg"
        try:
            data = pix.tobytes(output="jpg", jpg_quality=84)
        except TypeError:
            data = pix.tobytes("jpeg")
        with open(os.path.join(out_dir, name), "wb") as f:
            f.write(data)
        print(f"{name}  ({w}x{h}, {len(data)//1000}KB)")
print(f"PAGES={len(doc)} SAVED={saved}")
