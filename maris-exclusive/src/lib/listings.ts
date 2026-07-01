// Real Maris Exclusive property listings. All imagery is the client's own
// (extracted from their listing brochures). Do NOT add third-party/stock media.

export type GalleryImage = { src: string; caption: string };

export type Listing = {
  slug: string;
  name: string;
  location: string; // e.g. "Courchevel 1850"
  region: "French Alps" | "Greece";
  tagline: string;
  bedrooms: number;
  bathrooms: number;
  sleeps: number;
  size?: string; // e.g. "837 m²"
  levels?: number;
  price: string;
  description: string;
  amenities: string[];
  hero: string;
  gallery: GalleryImage[];
};

const P = "/images/properties";

export const listings: Listing[] = [
  {
    slug: "chalet-nordea",
    name: "Chalet Nordéa",
    location: "Courchevel 1850",
    region: "French Alps",
    tagline: "Ski-in / Ski-out",
    bedrooms: 7,
    bathrooms: 7,
    sleeps: 14,
    size: "837 m²",
    levels: 5,
    price: "Price on application",
    description:
      "Set in prestigious Courchevel 1850, Chalet Nordéa spans 837 m² over five levels and sleeps 14 guests in six en-suite bedrooms plus a children's bunk room. A grand vaulted living space opens to a wrap-around balcony and a stylish dining area with open kitchen. A remarkable private spa includes a pool, hammam, sauna, massage room, Nordic bath and an outdoor barrel sauna with hot tub, while a games lounge with bar, billiards and air hockey keeps everyone entertained. An elevator and ski room complete this standout ski-in/ski-out retreat.",
    amenities: [
      "Indoor Swimming Pool",
      "Indoor & Outdoor Nordic Hot Tub",
      "Hammam",
      "Indoor Sauna",
      "Outdoor Barrel Sauna",
      "Massage Room",
      "Fitness Room",
      "Wine Cellar",
      "Bar Area",
      "Games Lounge",
      "Ski Room",
      "Elevator Access",
    ],
    hero: `${P}/chalet-nordea-pool.jpg`,
    gallery: [
      { src: `${P}/chalet-nordea-living.jpg`, caption: "The vaulted living room" },
      { src: `${P}/chalet-nordea-lounge.jpg`, caption: "Lounge with Alpine views" },
      { src: `${P}/chalet-nordea-dining.jpg`, caption: "Dining & open kitchen" },
      { src: `${P}/chalet-nordea-kitchen.jpg`, caption: "The kitchen" },
      { src: `${P}/chalet-nordea-spa.jpg`, caption: "Private spa & pool" },
      { src: `${P}/chalet-nordea-master.jpg`, caption: "Master suite" },
      { src: `${P}/chalet-nordea-bedroom.jpg`, caption: "Bedroom with balcony" },
      { src: `${P}/chalet-nordea-bathroom.jpg`, caption: "Stone bathroom" },
      { src: `${P}/chalet-nordea-skiroom.jpg`, caption: "Ski room" },
    ],
  },
  {
    slug: "chalet-crystal",
    name: "Chalet Crystal",
    location: "Courchevel 1850",
    region: "French Alps",
    tagline: "Private Spa · Cinema · Ski-in",
    bedrooms: 8,
    bathrooms: 8,
    sleeps: 15,
    size: "687 m²",
    price: "Price on application",
    description:
      "An ultra-luxurious retreat in Courchevel 1850, Chalet Crystal sleeps up to 15 guests in eight en-suite bedrooms. Blending contemporary elegance with alpine charm, the chalet features grand living and dining areas, a stylish bar and wine cave, and floor-to-ceiling windows framing the mountains. The private spa is a true highlight — an infinity pool, jacuzzi, hammam, massage room and outdoor hot tub — while a cinema room, games room and ski-in convenience strike the perfect balance of relaxation and entertainment.",
    amenities: [
      "Indoor Swimming Pool",
      "Indoor Jacuzzi",
      "Outdoor Nordic Hot Tub",
      "Hammam",
      "Massage Room",
      "Wine Cellar & Bar",
      "Cinema Room",
      "Games Room",
      "TV Lounge",
      "Terraces & Balconies",
      "Ski Room",
      "Elevator Access",
    ],
    hero: `${P}/chalet-crystal-hero.jpg`,
    gallery: [
      { src: `${P}/chalet-crystal-spa.jpg`, caption: "Indoor pool & spa" },
      { src: `${P}/chalet-crystal-living.jpg`, caption: "Lounge with fireplace" },
      { src: `${P}/chalet-crystal-dining.jpg`, caption: "Dining & wine cave" },
      { src: `${P}/chalet-crystal-bar.jpg`, caption: "Bar & wine cave" },
      { src: `${P}/chalet-crystal-master.jpg`, caption: "Master suite" },
      { src: `${P}/chalet-crystal-bedroom.jpg`, caption: "Bedroom with mountain views" },
      { src: `${P}/chalet-crystal-bath.jpg`, caption: "Marble en-suite" },
      { src: `${P}/chalet-crystal-cinema.jpg`, caption: "Private cinema room" },
      { src: `${P}/chalet-crystal-view.jpg`, caption: "Alpine exterior" },
    ],
  },
  {
    slug: "villa-celeste",
    name: "Villa Celeste",
    location: "Aleomandra, Mykonos",
    region: "Greece",
    tagline: "Waterfront · Sunset Views",
    bedrooms: 6,
    bathrooms: 6,
    sleeps: 12,
    size: "520 m²",
    levels: 3,
    price: "Price on application",
    description:
      "Villa Celeste is an ultra-luxury waterfront villa in Aleomandra, Mykonos, offering breathtaking views over the Aegean Sea and nearby islands. Set across three levels, it features six elegant en-suite bedrooms, spacious living areas and two fully-equipped kitchens, all designed with a modern, refined aesthetic. Outdoors, a private infinity pool, fire pit and master-suite terrace with jacuzzi create an exceptional setting for sunsets, sea views and a truly exclusive island stay.",
    amenities: [
      "Infinity Pool",
      "Waterfront Setting",
      "Jacuzzi",
      "Fire Pit Lounge",
      "Two Kitchens",
      "Alfresco Dining",
      "Poolside Lounge",
      "Master-Suite Terrace",
    ],
    hero: `${P}/villa-celeste-hero.jpg`,
    gallery: [
      { src: `${P}/villa-celeste-pool.jpg`, caption: "Infinity pool to the sea" },
      { src: `${P}/villa-celeste-living.jpg`, caption: "Open-plan living & dining" },
      { src: `${P}/villa-celeste-dining.jpg`, caption: "Dining area" },
      { src: `${P}/villa-celeste-kitchen.jpg`, caption: "Designer kitchen" },
      { src: `${P}/villa-celeste-master.jpg`, caption: "Master bedroom" },
      { src: `${P}/villa-celeste-bedroom.jpg`, caption: "Guest bedroom" },
      { src: `${P}/villa-celeste-bath.jpg`, caption: "En-suite bathroom" },
      { src: `${P}/villa-celeste-view.jpg`, caption: "Fire pit lounge at dusk" },
    ],
  },
  {
    slug: "villa-metis",
    name: "Villa Metis",
    location: "Agios Lazaros, Mykonos",
    region: "Greece",
    tagline: "Grand Cycladic Estate",
    bedrooms: 10,
    bathrooms: 10,
    sleeps: 20,
    size: "1,000 m²",
    levels: 5,
    price: "Price on application",
    description:
      "Villa Metis is a striking ten-bedroom Cycladic villa in Mykonos, designed to host up to 20 guests in complete privacy across five expansive levels. Blending refined luxury with traditional Greek architecture, the villa offers elegant interiors, all-en-suite bedrooms and panoramic Aegean views from private terraces. A separate guest house with its own entrance adds flexibility, while outdoor living takes centre stage with a heated infinity pool, jacuzzi, pool bar, BBQ and multiple lounge areas overlooking the coastline.",
    amenities: [
      "Heated Infinity Pool",
      "Heated Jacuzzi",
      "Panoramic Sea Views",
      "Outdoor Fitness Area",
      "Alfresco Dining (×3)",
      "Private Guest House",
      "Shaded Bar Area",
      "Poolside Lounge",
      "Open-Plan Living",
    ],
    hero: `${P}/villa-metis-hero.jpg`,
    gallery: [
      { src: `${P}/villa-metis-pool.jpg`, caption: "Cliff-edge infinity pool" },
      { src: `${P}/villa-metis-living.jpg`, caption: "Beamed living room" },
      { src: `${P}/villa-metis-dining.jpg`, caption: "Alfresco dining terrace" },
      { src: `${P}/villa-metis-kitchen.jpg`, caption: "Island kitchen" },
      { src: `${P}/villa-metis-master.jpg`, caption: "Master with Aegean view" },
      { src: `${P}/villa-metis-bedroom.jpg`, caption: "Arched-alcove bedroom" },
      { src: `${P}/villa-metis-bath.jpg`, caption: "Sculptural bathroom" },
      { src: `${P}/villa-metis-terrace.jpg`, caption: "Covered sea-view lounge" },
    ],
  },
  {
    slug: "villa-elysia",
    name: "Villa Elysia",
    location: "Kounoupas, Mykonos",
    region: "Greece",
    tagline: "Cycladic Retreat · Aegean Views",
    bedrooms: 6,
    bathrooms: 6,
    sleeps: 12,
    price: "Price on application",
    description:
      "Villa Elysia is a refined retreat in Kounoupas, blending modern elegance with Cycladic charm and panoramic Aegean views. The villa features six en-suite bedrooms and light-filled living spaces designed for seamless indoor-outdoor living. Outdoors, a private infinity pool, sun-drenched terraces and dining areas create a relaxed setting, just a short drive from Mykonos Town and the island's finest beaches.",
    amenities: [
      "Infinity Pool",
      "Outdoor Lounge",
      "Hillside Setting",
      "Alfresco Dining",
      "Poolside Sunbeds",
      "Panoramic Aegean Views",
    ],
    hero: `${P}/villa-elysia-hero.jpg`,
    gallery: [
      { src: `${P}/villa-elysia-pool.jpg`, caption: "Infinity pool & Aegean panorama" },
      { src: `${P}/villa-elysia-terrace.jpg`, caption: "Shaded lounge terrace" },
      { src: `${P}/villa-elysia-living.jpg`, caption: "Open-plan living & dining" },
      { src: `${P}/villa-elysia-kitchen.jpg`, caption: "Designer kitchen" },
      { src: `${P}/villa-elysia-master.jpg`, caption: "Master suite with sea views" },
      { src: `${P}/villa-elysia-bedroom.jpg`, caption: "Guest bedroom with pool view" },
      { src: `${P}/villa-elysia-bath.jpg`, caption: "Spa bath with island view" },
      { src: `${P}/villa-elysia-view.jpg`, caption: "The villa at sunset" },
    ],
  },
];

export function getListing(slug: string): Listing | undefined {
  return listings.find((l) => l.slug === slug);
}

export function listingMeta(l: Listing): string {
  return `${l.location} · ${l.bedrooms} bedrooms · ${l.price}`;
}
