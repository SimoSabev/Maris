import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { OfferList } from "@/components/site/OfferList";
import { ListingGrid } from "@/components/site/ListingGrid";
import { ContactCtaBand } from "@/components/site/ContactCtaBand";
import { ProcessSteps } from "@/components/interior/ProcessSteps";

export const metadata: Metadata = {
  title: "Interior Design, Renovation & Staging — Maris Exclusive",
  description:
    "Turnkey interior design, renovation and staging services which enhance the value of the asset and accelerate sales — tailored to the specific property and yacht, from concept to completion.",
};

// ─── Offer items ───────────────────────────────────────────────────────────
const OFFER_ITEMS = [
  {
    title: "Turnkey Interior Design",
    body: "From initial concept to final installation, a complete design service tailored to the character of the space — residences, villas, chalets and aboard superyachts. Every element resolved with the same exacting standard.",
  },
  {
    title: "Renovation & Project Management",
    body: "Full oversight of structural and cosmetic transformation — coordinating architects, contractors and craftspeople so the client never carries the operational burden. Delivered on time, on brief, with the detail intact.",
  },
  {
    title: "Staging to Accelerate Sales",
    body: "Considered presentation of a property or vessel ahead of sale. Staging that communicates value, compresses time on market, and achieves the outcome the asset deserves.",
  },
  {
    title: "Residences & Yachts — Concept to Completion",
    body: "The same discipline applies at sea as on land. Whether a Monaco pied-à-terre or a motor yacht saloon, we bring cohesion, restraint and craftsmanship across every environment we touch.",
  },
];

// ─── Portfolio grid ─────────────────────────────────────────────────────────
const PORTFOLIO_ITEMS = [
  {
    image: "/images/properties/chalet-nordea-living.jpg",
    alt: "Chalet Nordéa grand vaulted living room with alpine character",
    title: "Chalet Nordéa — Living",
    meta: "Residence · Courchevel 1850",
  },
  {
    image: "/images/properties/chalet-nordea-lounge.jpg",
    alt: "Chalet Nordéa refined lounge with warm tones",
    title: "Chalet Nordéa — Lounge",
    meta: "Residence · Courchevel 1850",
  },
  {
    image: "/images/properties/chalet-nordea-kitchen.jpg",
    alt: "Chalet Nordéa bespoke kitchen with crafted joinery",
    title: "Chalet Nordéa — Kitchen",
    meta: "Residence · Courchevel 1850",
  },
  {
    image: "/images/yacht-interior-dusk.png",
    alt: "Superyacht interior at dusk with warm ambient lighting",
    title: "Motor Yacht — Main Saloon",
    meta: "Motor Yacht · Main Saloon",
  },
  {
    image: "/images/yacht-my-elixir-dusk-dining.jpg",
    alt: "MY Elixir aft deck dining set for sundown",
    title: "MY Elixir — Sundown Dining",
    meta: "Motor Yacht · MY Elixir",
  },
  {
    image: "/images/yacht-navetta33-saloon-dining.jpg",
    alt: "Navetta 33 saloon and dining area with panoramic sea views",
    title: "Navetta 33 — Saloon & Dining",
    meta: "Motor Yacht · Navetta 33",
  },
  {
    image: "/images/properties/le-renzo-dining.jpg",
    alt: "Villa Alcyone dining room styled with sculptural pink glassware",
    title: "Villa Alcyone",
    meta: "France",
  },
  {
    image: "/images/properties/le-renzo-styling.jpg",
    alt: "Villa Alcyone living room styling with floral arrangement and travertine table",
    title: "Villa Alcyone",
    meta: "France",
  },
  {
    image: "/images/properties/le-renzo-materials.jpg",
    alt: "Fabric and material selection for the Villa Alcyone interior scheme",
    title: "Villa Alcyone",
    meta: "France",
  },
];

export default function InteriorDesignPage() {
  return (
    <main>
      <PageHero
        image="/images/properties/chalet-nordea-bathroom.jpg"
        alt="Chalet Nordéa refined bathroom with alpine spa finishes"
        eyebrow="Interiors"
        title="Interior Design, Renovation & Staging"
        subtitle="A considered approach to spaces that inhabit the world of exceptional living."
      />

      {/* Verbatim service description from the brief */}
      <Section eyebrow="The Service" id="interior-intro">
        <div className="max-w-3xl">
          <Reveal>
            <p
              className="font-display text-[var(--foreground)] leading-[1.3] mb-8"
              style={{
                fontSize: "clamp(1.5rem, 2.4vw, 2.4rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Turnkey interior design, renovation and staging services which enhance the value of the asset and accelerate sales — tailored to the specific property and yacht, from concept to completion.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="w-10 h-px bg-[var(--accent)] mb-8" aria-hidden="true" />
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className="text-[var(--muted-fg)] font-light leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
            >
              This discipline represents the second pillar of Maris Exclusive. Where our brokerage practice
              curates exceptional acquisitions, our interior expertise transforms those acquisitions into
              finished environments of enduring quality. The two disciplines are naturally complementary —
              and in combination, they offer a client something rare: a single house that can accompany
              a property from discovery through to inhabitation.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p
              className="text-[var(--muted-fg)] font-light leading-relaxed mt-6"
              style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
            >
              We work across residences and yachts with equal fluency, bringing the same exacting
              standard to a Monaco apartment as to a superyacht saloon. No project is too considered
              or too particular — our approach begins where others stop.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* What we offer */}
      <Section
        surface
        eyebrow="What We Offer"
        title="A Complete Design Partnership"
        id="interior-offers"
      >
        <OfferList items={OFFER_ITEMS} />
      </Section>

      {/* Process — From Concept to Completion */}
      <ProcessSteps />

      {/* Portfolio grid */}
      <Section
        eyebrow="Selected Work"
        title="Recent Commissions"
        id="interior-portfolio"
      >
        <Reveal delay={0.05}>
          <p
            className="text-[var(--muted-fg)] font-light leading-relaxed mb-14 max-w-xl"
            style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)" }}
          >
            A selection of recent residential and marine interiors. All commissions are conducted
            with complete discretion — client and location details remain confidential.
          </p>
        </Reveal>
        <ListingGrid
          items={PORTFOLIO_ITEMS}
          note="Selected commissions · full portfolio on private enquiry"
        />
      </Section>

      <ContactCtaBand
        title="Begin a Design Conversation"
        body="Whether you are preparing a property for sale, renovating a private residence or commissioning the interiors of a new vessel — we welcome the conversation. All engagements begin in confidence."
      />
    </main>
  );
}
