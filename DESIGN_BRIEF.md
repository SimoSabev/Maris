# Maris Exclusive — Design Brief (Source of Truth)

> Boutique Real Estate, Yachting & Interior Advisory.
> Visual concept = the **Home page** first. Real Next.js + shadcn/ui project.

## Brand
- **Name:** Maris Exclusive  (lat. *maris* — "of the sea")
- **Tagline:** *Where Exceptional Acquisition Meets Finer Interiors*
- **Positioning:** A private, discreet advisory house — a curator, NOT a listings portal.
  Tone: restrained, editorial, confident, quietly luxurious. "Quiet luxury."
- **Founders:** two women — one Sales/brokerage, one Interior Design. (Do not name them; no bios yet.)
- **About facts (for copy):** 15+ years experience; based between Monaco and Greece;
  access to off-market properties and yachts; operates globally; €1B+ in transactions.

## Aesthetic Direction
Editorial / "exaggerated minimalism": oversized high-contrast serif headlines, massive
negative space, thin letter-spaced uppercase labels, hairline dividers, full-bleed cinematic
imagery. Color comes from the photography (sea blue, teak wood, stone) — the UI itself stays
neutral. NOT a busy template. Light theme only (no dark mode for now).

## Color Tokens (exact)
| Token | Value | Use |
|---|---|---|
| `--background` | `#FAF8F4` (warm bone white) | page background |
| `--foreground` | `#14110E` (warm near-black) | text, headings |
| `--surface`    | `#EDE7DD` (soft sand) | secondary sections, cards |
| `--accent`     | `#9C8C78` (warm taupe/greige) | accents, active states, hairlines, hover |
| `--accent-ink` | `#6F614F` (deep taupe) | accent text on light |
| `--muted-fg`   | `#6B655C` | secondary text |
| `--border`     | `#E2DACE` | hairline borders |
Map these into shadcn/ui's CSS variables in `globals.css` (light theme). No bright/saturated colors.

## Typography
- **Display / headings:** **Cormorant Garamond** (400/500/600) — large, elegant, high-contrast serif.
- **Body / UI / nav:** **Jost** (300/400/500) — clean geometric humanist sans; use wide
  letter-spacing (`0.18em`) UPPERCASE for nav items and eyebrow labels.
- Load via `next/font/google`. Heading sizes use `clamp()` and can be very large
  (hero up to `clamp(3rem, 8vw, 8rem)`), weight 400–500, slightly negative tracking.

## Information Architecture (full site — only Home is built now)
Nav: Properties for Sale · Properties for Rent · Yachts for Sale · Yachts for Charter ·
Interior Design & Staging · Locations · About · Contact (Contact is its own page).
Locations sub-items: Monaco & French Riviera · Italy · Greece · Middle East · London · Spain.

## Home Page — sections (in order)
1. **Header / nav** — sticky. Wordmark "MARIS EXCLUSIVE" (letter-spaced) left; nav right.
   Transparent over the hero, transitions to solid bone bg + hairline border on scroll.
   Mobile: elegant slide-in sheet menu (shadcn Sheet).
2. **Hero** — full-bleed `hero-yacht-profile.jpg` (yacht side profile, open sea, no people),
   subtle dark gradient scrim bottom-left for legibility. Eyebrow label, oversized serif
   tagline, one quiet outline CTA ("Discover" / "Make an enquiry"). Staggered load reveal.
3. **Intro / manifesto** — short editorial paragraph (About facts). Generous whitespace,
   a thin rule, small caps eyebrow. Optionally 3 quiet stats (15+ years · €1B+ · Monaco↔Greece).
4. **Services** — the 5 services as cards/editorial rows, each with image + title + the
   exact description below + "Explore" link. Subtle image zoom + lift on hover.
5. **Locations** — 6 destination image-tiles (Monaco & French Riviera, Italy, Greece,
   Middle East, London, Spain). Use `location-monaco.jpg` for Monaco; tasteful neutral
   treatment (or reuse coastal yacht shots) for others — these are PLACEHOLDERS.
6. **Signature / featured** — large editorial moment featuring a yacht (Cappucino/Deep Blue),
   profile image + a short line about curated access. `yacht-aerial-profile.png`.
7. **Interior Design teaser** — warm dusk interior (`yacht-interior-dusk.png` or `yacht-saloon.jpg`)
   with copy for the Interior Design & Staging service (the second founder's specialty).
8. **Contact CTA** — quiet full-width band inviting a private enquiry → links to /contact.
9. **Footer** — wordmark, nav columns, Monaco/Greece note, copyright. Hairline top border.

## Service copy (use verbatim, from client .docx)
- **Properties for Sale:** Curated selection of signature villas, apartments, chalets and estates in premier coastal, city and mountain locations. Access to a selective database of properties and yachts, and to a global network of clients, sellers and buyers to achieve the best outcome for all parties involved.
- **Properties for Rent:** Short- and long-term luxury and holiday rentals, thoughtfully selected and carefully managed for seamless stays. Concierge-led service to meet every lifestyle need.
- **Yachts for Sale:** A refined portfolio of luxury yachts and superyachts, with expert advice on acquisition, valuation and ownership transition.
- **Yachts for Charter:** Exclusive charters in prime Mediterranean and Middle Eastern cruising locations, customised itineraries and full-service crewed options.
- **Interior Design, Renovation & Staging:** Turnkey interior design, renovation and staging services which enhance the value of the asset and accelerate sales — tailored to the specific property and yacht, from concept to completion.

## Imagery rules
- **No people in any photo.** Yacht shots must show a clear profile/silhouette.
- Lead with yachts (abundant, high quality). Property sections use placeholders (note in code with a `// PLACEHOLDER` comment).
- Source assets are in `../web-assets/` (and `../web-assets/gallery-yachts/` for more options).
  Copy chosen images into the Next project's `public/images/`. Use `next/image` with width/height
  or `fill` + `sizes`, `priority` on hero only, `loading="lazy"` elsewhere.

## Motion (subtle, elegant — Framer Motion / `motion`)
- Hero: staggered fade + slight rise on load (eyebrow → headline → CTA).
- On-scroll: fade + 16–24px rise, once, with `IntersectionObserver`/`whileInView`.
- Hover: image scale 1.03–1.05 + soft lift on cards; links get an animated underline in taupe.
- Durations 200–400ms, ease-out. **Respect `prefers-reduced-motion`** (disable transforms).

## Tech
Next.js (App Router, TS) · Tailwind · shadcn/ui · `motion` (Framer Motion) · `next/font/google`.
Icons: lucide-react (thin). No emojis as icons.

## PROPERTY IMAGES (NEW — properties are the priority)
Real, license-free luxury real-estate photos now live in `public/images/properties/`
(Unsplash license — free for commercial use, swappable placeholders for the clients' real
listings). NO PEOPLE in any of these. Use property imagery PROMINENTLY across the whole
site — properties lead, yachts are the second pillar.
- `villa-modern-pool.jpg` — white modern villa + pool, dramatic sky (premier exterior / hero-grade)
- `villa-hillside.jpg` — curved white villa on a hillside, cacti garden (striking architecture)
- `villa-estate-dusk.jpg` — Mediterranean estate at dusk with pool (warm, atmospheric)
- `villa-riviera-cliff.jpg` — classic French Riviera villa on a sea cliff, turquoise water
- `estate-ornate.jpg` — ornate stone estate with rooftop pool & cabanas (grand / Middle East)
- `villa-glass-pool.jpg` — modern glass house + pool, garden
- `pool-sunset.jpg` — pink-sunset infinity pool meeting the sea (lifestyle/atmosphere)
- `pool-dusk-sea.jpg` — dusk infinity pool over a bay + headland (Greece feel)
- `pool-mykonos.jpg` — Cycladic infinity pool over the Aegean (Greece)
- `interior-dramatic.jpg` — double-height living room at dusk, city view (staging hero)
- `interior-bright-beams.jpg` — bright living room, wood beams, arched windows, fireplace
- `interior-scandi.jpg` — bright airy apartment living room (rentals)
- `interior-garden.jpg` — modern living room with garden view
- `chalet-mountain.jpg` — mountain lodge interior, fireplace, snow view (mountain/chalets)
- `chalet-aframe.jpg` — cosy A-frame cabin interior (mountain/chalets)
Yacht images (`public/images/`): `hero-yacht-profile.jpg`, `yacht-aerial-profile.png`,
`yacht-interior-dusk.png`, `yacht-saloon.jpg`, `yacht-deck-sun.jpg`, plus
`gallery-yachts/` (Cappucino-ryi-*.png profiles/interiors, DJI_*.jpg drone profiles).
`location-monaco.jpg` = Monaco harbour. All marked swappable in code (`isPlaceholder`).

## SITE PAGES TO BUILD (routes under src/app/)
Reuse Header/Footer + a shared inner-page hero/section primitives. Each service page:
short hero (image + title + the verbatim service description), an intro, a 3–4 "what we
offer" points block, a placeholder listings/gallery grid (label clearly "Selected
representation · full portfolio on enquiry"), and a Contact CTA. Property pages lead with
PROPERTY imagery; yacht pages with yacht imagery.
- `/properties-for-sale` — villas/apartments/chalets/estates. Imgs: villa-modern-pool (hero),
  villa-hillside, villa-estate-dusk, villa-riviera-cliff, interior-bright-beams, chalet-mountain.
- `/properties-for-rent` — rentals. Imgs: villa-glass-pool (hero), interior-scandi,
  interior-garden, pool-sunset, villa-riviera-cliff.
- `/yachts-for-sale` — Imgs: hero-yacht-profile (hero), yacht-aerial-profile, Cappucino profiles.
- `/yachts-for-charter` — Imgs: yacht-deck-sun (hero), pool/sea + Cappucino, yacht-interior-dusk.
- `/interior-design` — Interior Design, Renovation & Staging. Imgs: interior-dramatic (hero),
  interior-bright-beams, yacht-interior-dusk, yacht-saloon (residences AND yachts).
- `/locations` — grid of 6 destinations, each a short editorial block with an image:
  Monaco & French Riviera (villa-riviera-cliff / location-monaco), Italy (villa-estate-dusk),
  Greece (pool-mykonos / pool-dusk-sea), Middle East (estate-ornate), London (interior-dramatic),
  Spain (villa-hillside). Link each (no separate sub-pages yet — anchors/cards only).
- `/about` — the brand story: 15+ years, between Monaco & Greece, €1B+ transactions, the two
  disciplines (brokerage + interior design), discreet/off-market approach, the 5 services recap.
  Imgs: villa-modern-pool or interior-bright-beams; editorial layout.
- `/contact` — SEPARATE page (per client). Editorial intro + a refined enquiry form
  (name, email, phone, interest [select: the 5 services], message) using shadcn-style inputs;
  client-side validation, visible labels, success state (no backend — fake submit + toast/inline
  success). Plus "Between Monaco & Greece", email/enquiry line. Img: pool-dusk-sea or villa-riviera-cliff.
Update the Header nav links + Footer links to point to these real routes. Update the Home
page Services/Locations sections to USE THE NEW PROPERTY IMAGES (properties lead) and link to
the routes above. Keep everything on-brand and consistent with the existing Home page.

## Quality bar
Responsive at 375 / 768 / 1024 / 1440. Text contrast ≥ 4.5:1. Visible focus rings.
`cursor-pointer` on clickables. No horizontal scroll. Semantic HTML (`header/main/section/footer`).
Avoid generic "AI template" look — must read as a real luxury brand site.
