import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { OfferList } from "@/components/site/OfferList";
import { ListingGrid } from "@/components/site/ListingGrid";
import { ContactCtaBand } from "@/components/site/ContactCtaBand";
import { listings, listingMeta } from "@/lib/listings";

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Properties for Sale — Maris Exclusive",
  description:
    "Curated selection of signature villas, apartments, chalets and estates in premier coastal, city and mountain locations. Access to a selective database of properties and a global network of buyers to achieve the best outcome for all parties involved.",
};

// ─── Offer points ──────────────────────────────────────────────────────────

const OFFER_ITEMS = [
  {
    title: "Off-Market Access",
    body: "Many of the finest properties never reach the open market. Through our discreet international network we surface exceptional opportunities before they are visible elsewhere.",
  },
  {
    title: "Global Buyer & Seller Network",
    body: "A curated community of qualified buyers and motivated sellers, cultivated over 15 years and spanning the Mediterranean coast, the Alps, London, and the Middle East.",
  },
  {
    title: "Discreet Marketing",
    body: "We manage the full process in confidence — from targeted private introductions and bespoke presentation materials to negotiations and completion — without public exposure.",
  },
  {
    title: "Coastal · City · Mountain",
    body: "Whether a Riviera clifftop estate, a Mykonos hillside villa, a London pied-à-terre or an Alpine chalet, we advise on the full spectrum of premier residential locations worldwide.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function PropertiesForSalePage() {
  const gridItems = listings.map((l) => ({
    image: l.hero,
    alt: l.name,
    title: l.name,
    meta: listingMeta(l),
    href: `/properties/${l.slug}`,
  }));

  return (
    <main>
      {/* Hero — owned Villa Celeste image */}
      <PageHero
        image="/images/properties/chalet-nordea-pool.jpg"
        alt="Maris Exclusive — Properties for Sale"
        eyebrow="Real Estate · For Sale"
        title="Properties for Sale"
      />

      {/* Intro — verbatim client copy */}
      <Section eyebrow="The Collection" id="intro">
        <Reveal>
          <p
            className="text-[var(--foreground)] font-display leading-relaxed max-w-3xl"
            style={{
              fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Curated selection of signature villas, apartments, chalets and
            estates in premier coastal, city and mountain locations. Access to a
            selective database of properties and yachts, and to a global network
            of clients, sellers and buyers to achieve the best outcome for all
            parties involved.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="w-12 h-px bg-[var(--accent)] mt-10" aria-hidden="true" />
        </Reveal>
      </Section>

      {/* What we offer */}
      <Section
        eyebrow="What We Offer"
        title="A Private Advantage"
        surface
        id="offer"
      >
        <OfferList items={OFFER_ITEMS} />
      </Section>

      {/* All 5 listings grid */}
      <Section eyebrow="Current Properties" title="The Collection" id="listings">
        <ListingGrid
          items={gridItems}
          note="Selected representation · enquire for the full off-market portfolio"
        />
      </Section>

      {/* Private portfolio note */}
      <Section surface eyebrow="Beyond the Collection" id="portfolio">
        <div className="max-w-2xl">
          <Reveal>
            <p
              className="text-[var(--muted-fg)] font-light leading-relaxed"
              style={{ fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)" }}
            >
              The wider collection — spanning villas, estates and chalets not yet
              published — is shared discreetly on enquiry, introduced only to
              clients whose requirements align precisely.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Closing CTA */}
      <ContactCtaBand
        title="Discuss a Property Acquisition"
        body="Reach out in confidence to explore our current selection of off-market and exclusive listings. Our advisors are available between Monaco and Greece and across all premier markets."
      />
    </main>
  );
}
