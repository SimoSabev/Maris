// SEO "money pages" — location + service guides targeting the client's priority
// keywords (Monaco, Greece/Mykonos, Dubai). Typographic only — no third-party
// media, per the owned-media rule. Kept intentionally lean for the entry tier.

export type GuideSection = {
  heading: string;
  body: string[];
};

export type Guide = {
  slug: string;
  // <title> + H1 — lead with the primary keyword phrase people actually search
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  intro: string;
  sections: GuideSection[];
  // Internal links to the relevant service pages (SEO + navigation)
  related: { label: string; href: string }[];
};

export const guides: Guide[] = [
  {
    slug: "luxury-real-estate-monaco",
    title: "Luxury Real Estate in Monaco",
    h1: "Luxury Real Estate in Monaco",
    metaTitle: "Luxury Real Estate in Monaco — Buying Property & Villas",
    metaDescription:
      "A private guide to buying luxury real estate in Monaco and the French Riviera — off-market apartments, penthouses and villas through Maris Exclusive.",
    keywords: [
      "luxury real estate Monaco",
      "Monaco property for sale",
      "buy apartment Monaco",
      "French Riviera villas",
      "Monte Carlo penthouse",
    ],
    eyebrow: "Guide · Monaco & French Riviera",
    intro:
      "Monaco remains the most concentrated luxury property market in the world — and the least public. The finest apartments and penthouses rarely reach open listings. This is how acquisition really works here.",
    sections: [
      {
        heading: "Why Monaco",
        body: [
          "For over twenty years Monaco has been our home base. The principality combines security, tax residency advantages and a year-round Mediterranean lifestyle within less than two square kilometres — which is precisely why demand consistently outstrips supply.",
          "Prime addresses such as Carré d'Or, Monte Carlo and Fontvieille trade almost entirely off-market, through a small circle of advisors and direct owners.",
        ],
      },
      {
        heading: "How we work",
        body: [
          "We represent buyers discreetly, sourcing apartments, penthouses and villas that are never advertised. Every viewing is by appointment and in complete confidence.",
          "Beyond the transaction, we advise on interiors, renovation and staging — so an acquisition becomes a finished residence rather than a project.",
        ],
      },
    ],
    related: [
      { label: "Properties for Sale", href: "/properties-for-sale" },
      { label: "Interior Design", href: "/interior-design" },
      { label: "Locations", href: "/locations#monaco" },
    ],
  },
  {
    slug: "luxury-villas-greece-mykonos",
    title: "Luxury Villas in Greece & Mykonos",
    h1: "Luxury Villas in Greece & Mykonos",
    metaTitle: "Luxury Villas in Greece & Mykonos — For Sale & Rent",
    metaDescription:
      "A guide to luxury villas in Greece and Mykonos — waterfront estates and Cycladic retreats for sale and seasonal rental through Maris Exclusive.",
    keywords: [
      "luxury villas Greece",
      "Mykonos villas",
      "villa for sale Mykonos",
      "Greek islands luxury real estate",
      "Mykonos villa rental",
    ],
    eyebrow: "Guide · Greece",
    intro:
      "From the Cycladic cliffs of Mykonos to the wider Greek islands, the market for waterfront villas has matured into one of the Mediterranean's most sought-after — for ownership and for the season alike.",
    sections: [
      {
        heading: "The Greek market",
        body: [
          "Greece pairs natural beauty with a genuinely growing investment landscape. We are based close to our clients and partners here, with a focus on real estate developments, seasonal rentals and yacht charters.",
          "Mykonos in particular commands a premium: infinity-pool estates in Aleomandra, Agios Lazaros and Kounoupas rarely stay available for long.",
        ],
      },
      {
        heading: "Buy or charter the season",
        body: [
          "We advise on outright acquisition as well as high-end seasonal rental, and can pair a villa with a crewed yacht charter across the Aegean for a complete island stay.",
        ],
      },
    ],
    related: [
      { label: "Properties for Sale", href: "/properties-for-sale" },
      { label: "Properties for Rent", href: "/properties-for-rent" },
      { label: "Yachts for Charter", href: "/yachts-for-charter" },
    ],
  },
  {
    slug: "luxury-real-estate-dubai",
    title: "Luxury Real Estate in Dubai & the Gulf",
    h1: "Luxury Real Estate in Dubai & the Gulf",
    metaTitle: "Luxury Real Estate in Dubai, Abu Dhabi & Saudi Arabia",
    metaDescription:
      "A private guide to luxury real estate and yachting across Dubai, Abu Dhabi, Riyadh and the Gulf — advisory and partnerships through Maris Exclusive.",
    keywords: [
      "luxury real estate Dubai",
      "Abu Dhabi luxury property",
      "Riyadh luxury real estate",
      "Saudi Arabia luxury villas",
      "yacht charter Arabian Gulf",
    ],
    eyebrow: "Guide · Middle East",
    intro:
      "Dubai, Abu Dhabi and the wider Gulf have become a defining market for luxury property and yachting. Having spent significant time in the region, we work through established local partnerships.",
    sections: [
      {
        heading: "A market we know",
        body: [
          "We have developed successful partnerships with local real estate, yachting and interior design companies across Dubai and Abu Dhabi, and extend advisory into Riyadh and Saudi Arabia.",
          "Our clients move between the Mediterranean and the Gulf — and expect the same discretion in both.",
        ],
      },
      {
        heading: "Property, yachts and interiors",
        body: [
          "Whether acquiring a residence, chartering across the Arabian Gulf, or commissioning interiors, we coordinate the full arc through a single point of contact.",
        ],
      },
    ],
    related: [
      { label: "Properties for Sale", href: "/properties-for-sale" },
      { label: "Yachts for Charter", href: "/yachts-for-charter" },
      { label: "Locations", href: "/locations#middle-east" },
    ],
  },
  {
    slug: "luxury-real-estate-italy",
    title: "Luxury Real Estate in Italy",
    h1: "Luxury Real Estate in Italy",
    metaTitle: "Luxury Real Estate in Italy — Villas & Coastal Estates",
    metaDescription:
      "A guide to luxury real estate in Italy — coastal villas, lakeside estates and city residences on the Riviera, Lake Como, Portofino and beyond, with Maris Exclusive.",
    keywords: [
      "luxury real estate Italy",
      "villas Italy for sale",
      "Lake Como villa",
      "Portofino property",
      "Italian Riviera real estate",
    ],
    eyebrow: "Guide · Italy",
    intro:
      "From the Ligurian coast to Lake Como and Portofino, Italy offers some of Europe's most storied luxury property — much of it changing hands quietly, between trusted parties.",
    sections: [
      {
        heading: "An advantage of proximity",
        body: [
          "Italy's closeness to Monaco, and our command of the Italian language, have let us build strong ties with real estate and yachting partners, along with lasting collaborations with interior companies.",
          "That network gives our clients early, discreet access to coastal villas, lakeside estates and prime city residences.",
        ],
      },
      {
        heading: "Beyond the purchase",
        body: [
          "We coordinate acquisition, interiors and — where a coastline calls for it — a yacht, through a single point of contact.",
        ],
      },
    ],
    related: [
      { label: "Properties for Sale", href: "/properties-for-sale" },
      { label: "Interior Design", href: "/interior-design" },
      { label: "Locations", href: "/locations#italy" },
    ],
  },
  {
    slug: "luxury-villas-south-of-france",
    title: "Luxury Villas in the South of France",
    h1: "Luxury Villas in the South of France",
    metaTitle: "Luxury Villas in the South of France & French Riviera",
    metaDescription:
      "A private guide to luxury villas in the South of France and the French Riviera — Saint-Tropez, Cap Ferrat, Cannes and the Côte d'Azur, with Maris Exclusive.",
    keywords: [
      "villas south of France",
      "French Riviera property",
      "Saint-Tropez villa",
      "Cap Ferrat real estate",
      "Cannes luxury villa",
    ],
    eyebrow: "Guide · South of France",
    intro:
      "The Côte d'Azur — from Saint-Tropez to Cap Ferrat — is the natural extension of our Monaco base, and one of the most tightly held villa markets in the Mediterranean.",
    sections: [
      {
        heading: "On home ground",
        body: [
          "Monaco has been our base for over twenty years, and with it comes a reliable network across the French Riviera in real estate, yachting and interiors.",
          "The finest villas along the Côte d'Azur seldom appear publicly; we source them directly for our clients.",
        ],
      },
      {
        heading: "A complete Riviera life",
        body: [
          "A villa here pairs naturally with a berth and a yacht. We arrange both, and handle interiors from concept to completion.",
        ],
      },
    ],
    related: [
      { label: "Properties for Sale", href: "/properties-for-sale" },
      { label: "Yachts for Charter", href: "/yachts-for-charter" },
      { label: "Locations", href: "/locations#monaco" },
    ],
  },
  {
    slug: "luxury-real-estate-spain",
    title: "Luxury Real Estate in Spain",
    h1: "Luxury Real Estate in Spain",
    metaTitle: "Luxury Real Estate in Spain — Marbella, Ibiza & Mallorca",
    metaDescription:
      "A guide to luxury real estate in Spain — villas in Marbella, Ibiza and Mallorca — sourced through local partners, with Maris Exclusive.",
    keywords: [
      "luxury real estate Spain",
      "Marbella villas",
      "Ibiza villa for sale",
      "Mallorca property",
      "Costa del Sol luxury real estate",
    ],
    eyebrow: "Guide · Spain",
    intro:
      "Marbella, Ibiza and Mallorca form the heart of Spain's luxury villa market — sun, privacy and strong demand in three of the Mediterranean's most desirable addresses.",
    sections: [
      {
        heading: "Local partners, on the ground",
        body: [
          "We have established collaborations across Mallorca, Marbella and Ibiza, with a team member based in Palma and fluent in Spanish.",
          "That presence means genuine local knowledge rather than a distant listings feed.",
        ],
      },
      {
        heading: "Buy or take the season",
        body: [
          "We advise on both acquisition and high-end seasonal rental, and can add a crewed yacht charter along the coast.",
        ],
      },
    ],
    related: [
      { label: "Properties for Sale", href: "/properties-for-sale" },
      { label: "Properties for Rent", href: "/properties-for-rent" },
      { label: "Locations", href: "/locations#spain" },
    ],
  },
  {
    slug: "luxury-real-estate-london",
    title: "Luxury Real Estate in London",
    h1: "Luxury Real Estate in London",
    metaTitle: "Luxury Real Estate in London — Prime Central Property",
    metaDescription:
      "A private guide to prime central London property — Mayfair, Knightsbridge and Belgravia apartments and townhouses, sourced discreetly by Maris Exclusive.",
    keywords: [
      "luxury real estate London",
      "prime central London property",
      "Mayfair apartment",
      "Knightsbridge property",
      "London luxury penthouse",
    ],
    eyebrow: "Guide · London",
    intro:
      "Prime central London — Mayfair, Knightsbridge, Belgravia — remains a global safe harbour for capital, and one of the most discreet property markets in the world.",
    sections: [
      {
        heading: "Direct access",
        body: [
          "Having closed multiple real estate transactions in the heart of London, we work through strong partnerships with direct owners and facilitators.",
          "Much of the best stock never reaches the portals; we represent buyers privately.",
        ],
      },
      {
        heading: "From acquisition to interiors",
        body: [
          "We advise on the purchase and, where wanted, take the residence through renovation, interior design and staging.",
        ],
      },
    ],
    related: [
      { label: "Properties for Sale", href: "/properties-for-sale" },
      { label: "Interior Design", href: "/interior-design" },
      { label: "Locations", href: "/locations#london" },
    ],
  },
  {
    slug: "luxury-real-estate-russian-clients",
    title: "Luxury Real Estate & Yachting for Russian Clients",
    h1: "Luxury Real Estate & Yachting for Russian Clients",
    metaTitle: "Luxury Real Estate & Yachting for Russian Clients",
    metaDescription:
      "Discreet luxury real estate, villa and yacht advisory for Russian-speaking clients across Monaco, the French Riviera, Greece and the Mediterranean, with Maris Exclusive.",
    keywords: [
      "luxury real estate Russia",
      "элитная недвижимость",
      "Russian buyers Mediterranean property",
      "Monaco property Russian clients",
      "yacht charter Russian speaking",
    ],
    eyebrow: "Guide · Russian Clients",
    intro:
      "We work with Russian-speaking clients acquiring property and chartering yachts across Monaco, the French Riviera, Greece and the wider Mediterranean — with complete discretion.",
    sections: [
      {
        heading: "A familiar standard of service",
        body: [
          "Our clients move between markets and expect one trusted advisor across all of them — property, yachts and interiors alike.",
          "We coordinate every stage privately, from first viewing to a finished residence or a chartered season at sea.",
        ],
      },
    ],
    related: [
      { label: "Properties for Sale", href: "/properties-for-sale" },
      { label: "Yachts for Charter", href: "/yachts-for-charter" },
      { label: "Locations", href: "/locations" },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
