#!/usr/bin/env python3
"""Prepara los assets de imagen para el sitio de Metales NT."""
import os
from PIL import Image

SRC_PDF = "/tmp/pdfimg"
SRC_CAND = "/tmp/imgcand"
OUT = "/home/z/my-project/public/images"
os.makedirs(OUT, exist_ok=True)


def save_jpg(src, dst, max_w, quality=80, crop=None):
    im = Image.open(src).convert("RGB")
    if crop:
        im = im.crop(crop)
    if im.width > max_w:
        h = int(im.height * max_w / im.width)
        im = im.resize((max_w, h), Image.LANCZOS)
    im.save(dst, "JPEG", quality=quality, optimize=True, progressive=True)
    print(f"{dst}: {im.size}, {os.path.getsize(dst)//1024} KB")


# ---- Hero (cobre con luz dorada, imagen buscada) ----
save_jpg(f"{SRC_CAND}/hero5.jpg", f"{OUT}/hero.jpg", 1920, quality=78)

# ---- Nosotros: fotos reales del brochure ----
save_jpg(f"{SRC_PDF}/img-023.jpg", f"{OUT}/nosotros-main.jpg", 1200, quality=80)
save_jpg(f"{SRC_PDF}/img-027.jpg", f"{OUT}/nosotros-sec.jpg", 720, quality=80)

# ---- Tarjetas de materiales ----
save_jpg(f"{SRC_CAND}/cables1.jpg", f"{OUT}/mat-cables.jpg", 900)
save_jpg(f"{SRC_PDF}/img-008.png", f"{OUT}/mat-transformadores.jpg", 800)
save_jpg(f"{SRC_CAND}/metals2.jpg", f"{OUT}/mat-metales.jpg", 900)
save_jpg(f"{SRC_CAND}/equipos2.jpg", f"{OUT}/mat-equipos.jpg", 900)
save_jpg(f"{SRC_CAND}/thermal4.jpg", f"{OUT}/mat-termicos.jpg", 900)

# ---- Galería de la planta (fotos reales) ----
save_jpg(f"{SRC_PDF}/img-029.jpg", f"{OUT}/planta-1.jpg", 800)
# img-030 tiene un ícono de estrella en la esquina inferior derecha -> recortar
im030 = Image.open(f"{SRC_PDF}/img-030.jpg")
w, h = im030.size
save_jpg(f"{SRC_PDF}/img-030.jpg", f"{OUT}/planta-2.jpg", 800, crop=(0, 0, int(w * 0.88), int(h * 0.90)))
save_jpg(f"{SRC_PDF}/img-047.jpg", f"{OUT}/planta-3.jpg", 800)
save_jpg(f"{SRC_PDF}/img-012.png", f"{OUT}/planta-4.jpg", 800)
save_jpg(f"{SRC_PDF}/img-001.jpg", f"{OUT}/planta-5.jpg", 800)
save_jpg(f"{SRC_PDF}/img-038.jpg", f"{OUT}/planta-6.jpg", 800)

# ---- Logística (fotos reales) ----
save_jpg(f"{SRC_PDF}/img-042.jpg", f"{OUT}/logistica-main.jpg", 1100)
save_jpg(f"{SRC_PDF}/img-034.jpg", f"{OUT}/logistica-1.jpg", 700)
save_jpg(f"{SRC_PDF}/img-035.jpg", f"{OUT}/logistica-2.jpg", 700)

# ---- Logo: isotipo con transparencia (recorte ajustado) ----
logo = Image.open(f"{SRC_PDF}/logo_full.png")
alpha = logo.split()[3]
bbox = alpha.getbbox()
icon_bbox = (bbox[0], bbox[1], min(bbox[0] + (bbox[3] - bbox[1]), bbox[2]), bbox[3])
icon = logo.crop(icon_bbox)
icon.save(f"{OUT}/logo-icon.png")
print(f"logo-icon.png: {icon.size}")

# ---- Favicon desde el isotipo ----
fav = icon.copy()
fav_io = fav.resize((256, 256), Image.LANCZOS)
# fondo transparente cuadrado centrado
side = max(fav_io.size)
sq = Image.new("RGBA", (side, side), (0, 0, 0, 0))
sq.paste(fav_io, ((side - fav_io.width) // 2, (side - fav_io.height) // 2), fav_io)
sq.save("/home/z/my-project/public/favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])
sq.resize((180, 180), Image.LANCZOS).save("/home/z/my-project/public/apple-touch-icon.png")
print("favicon.ico + apple-touch-icon.png listos")

print("\nTotal en public/images:")
for f in sorted(os.listdir(OUT)):
    print(" ", f, f"{os.path.getsize(os.path.join(OUT, f))//1024} KB")
