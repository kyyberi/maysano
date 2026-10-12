from pathlib import Path

from PIL import Image, ImageDraw, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
OUTPUT = PUBLIC / "og"
BACKGROUNDS = ROOT / "scripts" / "og-backgrounds"
CANVAS = (1200, 630)
FONT = Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf")

IMAGES = [
    ("insight-data-catalog-portfolio.png", "insight-catalog-background.png", ["Data Catalog vs. Data", "Product Portfolio", "Management: Why", "Enterprises Need Both"]),
    ("insight-data-contracts-specifications.png", "insight-contracts-background.png", ["Data Contracts and", "Data Product", "Specifications:", "Different Jobs, One Product"]),
    ("insight-minimum-lovable-governance.png", "insight-governance-background.png", ["From Traditional Governance", "to Minimum Lovable", "Governance"]),
    ("insight-knowledge-graph-ontology.png", "insight-graph-background.png", ["Knowledge Graph vs.", "Ontology: What Enterprise", "Data Products Need"]),
    ("insight-governed-ai-agents.png", "insight-agents-background.png", ["Traditional AI Agents", "vs. Governed AI Agents", "for Enterprise Data Work"]),
    ("insight-ai-assisted-delivery.png", "insight-delivery-background.png", ["Manual vs. AI-Assisted,", "Governed Data", "Product Delivery"]),
    ("insight-ai-control-plane-vs-operating-layer.png", "insight-control-plane-background.png", ["AI Control Plane vs.", "Data Product", "Operating Layer"]),
]


def tracking_text(draw, xy, text, font, fill, tracking=0):
    x, y = xy
    for character in text:
        draw.text((x, y), character, font=font, fill=fill)
        x += draw.textlength(character, font=font) + tracking


def title_font(lines):
    for size in range(52, 34, -1):
        font = ImageFont.truetype(FONT, size)
        if max(font.getlength(line) for line in lines) <= 555:
            return font
    return ImageFont.truetype(FONT, 35)


OUTPUT.mkdir(parents=True, exist_ok=True)
logo = Image.open(PUBLIC / "logo.webp").convert("RGBA").resize((33, 37), Image.Resampling.LANCZOS)

for output, background_name, lines in IMAGES:
    background = Image.open(BACKGROUNDS / background_name).convert("RGB")
    canvas = ImageOps.fit(background, CANVAS, method=Image.Resampling.LANCZOS, centering=(0.5, 0.5)).convert("RGBA")
    overlay = Image.new("RGBA", CANVAS, (0, 0, 0, 0))
    overlay_draw = ImageDraw.Draw(overlay)
    overlay_draw.rectangle((0, 0, 635, 630), fill=(13, 36, 57, 199))
    canvas = Image.alpha_composite(canvas, overlay)
    canvas.alpha_composite(logo, (74, 53))

    draw = ImageDraw.Draw(canvas)
    brand_font = ImageFont.truetype(FONT, 19)
    kicker_font = ImageFont.truetype(FONT, 14)
    tracking_text(draw, (126, 58), "MAYSĀNO", brand_font, "#f4f5ee", tracking=4.5)
    draw.line((74, 145, 132, 145), fill="#c7df8c", width=3)
    tracking_text(draw, (74, 166), "MAYSANO INSIGHTS", kicker_font, "#c7df8c", tracking=3)

    font = title_font(lines)
    line_height = font.size + 15
    title_y = 250 if len(lines) == 2 else 215
    for index, line in enumerate(lines):
        draw.text((74, title_y + index * line_height), line, font=font, fill="#f8f8f3")

    canvas.convert("RGB").save(OUTPUT / output, "PNG", optimize=True)

print(f"Generated {len(IMAGES)} Maysano Insight social images in public/og/")
