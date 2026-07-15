// Single source of truth for the Maris Exclusive yacht fleet.
//
// Charter vs sale is expressed by the explicit `status` field — never by which
// page a yacht happens to be listed on. A yacht has exactly ONE status, so a
// vessel can never appear as both "for charter" and "for sale" at once.
//
// IMPORTANT — Cosmico is the client's own yacht and is CHARTER ONLY. It must
// never be presented as for sale (legal risk). It lives here with status
// "charter" and nowhere else.
//
// Media: charter-yacht imagery is licensed from the client's partner
// (Sergey Krotov) with the client's authorisation. This is the one exception to
// the "owned media only" rule, which still applies to all real-estate assets.

export type YachtStatus = "charter" | "sale";

export type Yacht = {
  slug: string;
  name: string;
  status: YachtStatus;
  length: string; // e.g. "65m"
  type: string; // e.g. "Motor Yacht", "Superyacht"
  cabins?: number;
  guests?: number;
  year: number;
  priceNote: string; // e.g. "Weekly on request", "On request"
  image: string; // path relative to /public
  alt: string;
};

// Ordered largest / newest first so the most impressive vessels lead each grid.
export const yachts: Yacht[] = [
  // ── Charter fleet ──────────────────────────────────────────────────────────
  {
    slug: "maltese-falcon",
    name: "Maltese Falcon",
    status: "charter",
    length: "88m",
    type: "Sailing Yacht",
    cabins: 6,
    guests: 12,
    year: 2006,
    priceNote: "Weekly on request",
    image: "/images/fleet/maltese-falcon-sk.jpg",
    alt: "Maltese Falcon 88m sailing yacht under full sail",
  },
  {
    slug: "force-blue",
    name: "Force Blue",
    status: "charter",
    length: "70m",
    type: "Motor Yacht",
    cabins: 6,
    guests: 12,
    year: 2002,
    priceNote: "Weekly on request",
    image: "/images/fleet/force-blue-sk.jpg",
    alt: "Force Blue 70m explorer yacht cruising the Riviera",
  },
  {
    slug: "triumph",
    name: "Triumph",
    status: "charter",
    length: "65m",
    type: "Superyacht",
    cabins: 6,
    guests: 12,
    year: 2021,
    priceNote: "Weekly on request",
    image: "/images/fleet/triumph-sk.jpg",
    alt: "Triumph superyacht underway",
  },
  {
    slug: "utopia-iv",
    name: "Utopia IV",
    status: "charter",
    length: "63m",
    type: "Motor Yacht",
    cabins: 6,
    guests: 12,
    year: 2018,
    priceNote: "Weekly on request",
    image: "/images/fleet/utopia-iv-sk.jpg",
    alt: "Utopia IV 63m superyacht at anchor",
  },
  {
    slug: "lioness-v",
    name: "Lioness V",
    status: "charter",
    length: "63m",
    type: "Superyacht",
    cabins: 6,
    guests: 12,
    year: 2006,
    priceNote: "Weekly on request",
    image: "/images/fleet/lioness-v-sk.jpg",
    alt: "Lioness V superyacht profile",
  },
  {
    slug: "liquid-sky",
    name: "Liquid Sky",
    status: "charter",
    length: "47m",
    type: "Motor Yacht",
    cabins: 5,
    guests: 12,
    year: 2017,
    priceNote: "Weekly on request",
    image: "/images/fleet/liquid-sky-sk.jpg",
    alt: "Liquid Sky superyacht at sea",
  },
  {
    slug: "cosmico",
    name: "Cosmico",
    status: "charter",
    length: "40.8m",
    type: "Motor Yacht",
    year: 2024,
    priceNote: "Weekly on request",
    image: "/images/cosmico-profile.jpg",
    alt: "Cosmico motor yacht profile at sea",
  },
  {
    slug: "dxb",
    name: "DXB",
    status: "charter",
    length: "35m",
    type: "Motor Yacht",
    cabins: 5,
    guests: 10,
    year: 2003,
    priceNote: "Weekly on request",
    image: "/images/fleet/dxb-sk.jpg",
    alt: "DXB motor yacht profile",
  },
  {
    slug: "champagne-caviar",
    name: "Champagne & Caviar",
    status: "charter",
    length: "34m",
    type: "Motor Yacht",
    cabins: 5,
    guests: 12,
    year: 2004,
    priceNote: "Weekly on request",
    image: "/images/fleet/champagne-caviar-sk.jpg",
    alt: "Champagne & Caviar yacht aerial profile",
  },
  {
    slug: "cappuccino",
    name: "Cappuccino",
    status: "charter",
    length: "30m",
    type: "Motor Yacht",
    cabins: 5,
    guests: 10,
    year: 2007,
    priceNote: "Weekly on request",
    image: "/images/fleet/cappuccino-sk.jpg",
    alt: "Cappuccino yacht exterior profile",
  },

  // ── For sale ───────────────────────────────────────────────────────────────
  // NOTE: sale vessels are NOT from Sergey's charter link. Pending the office
  // link, only classification/ordering is corrected here; the sale roster itself
  // (newer/larger vessels) awaits confirmed data from the office.
  {
    slug: "deep-blue",
    name: "Deep Blue",
    status: "sale",
    length: "55m",
    type: "Motor Yacht",
    year: 2014,
    priceNote: "On request",
    image: "/images/deepblue-profile.jpg",
    alt: "Deep Blue motor yacht at anchor",
  },
  {
    slug: "horizon",
    name: "Horizon",
    status: "sale",
    length: "55m",
    type: "Superyacht",
    year: 2018,
    priceNote: "On request",
    image: "/images/yacht-aerial-profile.png",
    alt: "Aerial view of superyacht profile",
  },
  {
    slug: "levante",
    name: "Levante",
    status: "sale",
    length: "48m",
    type: "Motor Yacht",
    year: 2017,
    priceNote: "On request",
    image: "/images/DJI_0175.jpg",
    alt: "Drone view of yacht underway",
  },
  {
    slug: "cappucino-sale",
    name: "Cappucino",
    status: "sale",
    length: "38m",
    type: "Motor Yacht",
    year: 2019,
    priceNote: "On request",
    image: "/images/Cappucino-ryi-6.png",
    alt: "Cappucino yacht profile along the coast",
  },
  {
    slug: "sirocco",
    name: "Sirocco",
    status: "sale",
    length: "36m",
    type: "Motor Yacht",
    year: 2022,
    priceNote: "On request",
    image: "/images/DJI_0356.jpg",
    alt: "Aerial profile of yacht at sea",
  },
  {
    slug: "azzurra",
    name: "Azzurra",
    status: "sale",
    length: "34m",
    type: "Motor Yacht",
    year: 2021,
    priceNote: "On request",
    image: "/images/Cappucino-ryi-3.png",
    alt: "Azzurra motor yacht exterior view",
  },
];

export function charterYachts(): Yacht[] {
  return yachts.filter((y) => y.status === "charter");
}

export function saleYachts(): Yacht[] {
  return yachts.filter((y) => y.status === "sale");
}

export function yachtTitle(y: Yacht): string {
  return `${y.name} — ${y.length}`;
}

export function yachtMeta(y: Yacht): string {
  const segments: string[] = [y.length];
  if (y.cabins && y.guests) {
    segments.push(`${y.cabins} cabins`, `${y.guests} guests`);
  } else {
    segments.push(y.type);
  }
  segments.push(String(y.year), y.priceNote);
  return segments.join(" · ");
}
