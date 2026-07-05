import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ContactCtaBand } from "@/components/site/ContactCtaBand";

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Locations — Maris Exclusive",
  description:
    "Maris Exclusive operates across Monaco & the French Riviera, Italy, Greece, the Middle East, London, and Spain. Exceptional properties and yachts in the world's most sought-after destinations.",
};

// ─── Destination data ──────────────────────────────────────────────────────
// No per-destination photography owned. Typographic editorial treatment only.

type Destination = {
  id: string;
  name: string;
  editorial: string;
};

const DESTINATIONS: Destination[] = [
  {
    id: "monaco",
    name: "Monaco & French Riviera",
    editorial:
      "It's been our home base for the past 20 years, allowing us to build a reliable network of contacts in real estate, yachting and interiors.",
  },
  {
    id: "italy",
    name: "Italy",
    editorial:
      "The proximity of Italy to Monaco and mastering the Italian language have permitted us to create strong ties with real estate and yachting partners, along with multiple collaborations with interior companies.",
  },
  {
    id: "greece",
    name: "Greece",
    editorial:
      "The natural beauty and the growing business opportunities in Greece have encouraged us to set base also in this region. With focus on real estate developments, seasonal rentals and yacht charters, we felt the urge to be closer to our clients and partners here.",
  },
  {
    id: "middle-east",
    name: "Middle East",
    editorial:
      "Having spent a significant time in Dubai, we have developed successful partnerships with local real estate, yachting and interior design companies.",
  },
  {
    id: "london",
    name: "London",
    editorial:
      "Having successfully closed multiple real estate transactions in the heart of London, we have benefitted from strong partnerships with direct owners and facilitators.",
  },
  {
    id: "spain",
    name: "Spain",
    editorial:
      "Mallorca, Marbella, Ibiza — we have established collaborations with local partners in those three main locations, with one of our team members based in Palma and fluent in Spanish.",
  },
];

// ─── DestinationBlock ──────────────────────────────────────────────────────
// Pure typographic editorial block — large Cormorant headline, hairline rules,
// numbered eyebrow, refined body copy. No per-destination images.

function DestinationBlock({
  destination,
  index,
}: {
  destination: Destination;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      id={destination.id}
      className="border-t border-[var(--border)] scroll-mt-24 py-14 lg:py-20"
    >
      <div
        className={[
          "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start",
        ].join(" ")}
      >
        {/* Left — number + name column */}
        <div
          className={[
            "lg:col-span-5",
            isEven ? "lg:order-1" : "lg:order-2",
          ].join(" ")}
        >
          <Reveal delay={0.04}>
            <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-5">
              {String(index + 1).padStart(2, "0")}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="w-8 h-px bg-[var(--border)] mb-7" aria-hidden="true" />
          </Reveal>

          <Reveal delay={0.12}>
            <h2
              className="font-display text-[var(--foreground)] leading-[1.05]"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 5rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
              }}
            >
              {destination.name}
            </h2>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="w-10 h-px bg-[var(--accent)] mt-8" aria-hidden="true" />
          </Reveal>
        </div>

        {/* Right — editorial body */}
        <div
          className={[
            "lg:col-span-7",
            isEven ? "lg:order-2" : "lg:order-1",
          ].join(" ")}
        >
          <Reveal delay={0.18}>
            <p
              className="text-[var(--muted-fg)] font-light leading-relaxed"
              style={{
                fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)",
                maxWidth: "580px",
              }}
            >
              {destination.editorial}
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function LocationsPage() {
  return (
    <main>
      {/* Hero — owned Monaco harbour image */}
      <PageHero
        image="/images/location-monaco.jpg"
        alt="Monaco harbour with luxury yachts moored alongside the principality"
        eyebrow="Where We Operate"
        title="Locations"
        subtitle="Six destinations. Each chosen for the depth of opportunity it presents — in property, in yachting, and in the way of living it affords."
      />

      {/* Intro */}
      <Section eyebrow="Our Presence" id="intro">
        <Reveal>
          <p
            className="font-display text-[var(--foreground)] leading-relaxed max-w-3xl"
            style={{
              fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Maris Exclusive does not follow the market — we are embedded within
            it. Our operations are anchored between Monaco and Greece, with
            longstanding relationships that extend to Italy, the Middle East,
            London, and Spain. In each destination we maintain local knowledge,
            trusted networks, and a discreet client community that rarely
            intersects with the public listings market.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="w-12 h-px bg-[var(--accent)] mt-10" aria-hidden="true" />
        </Reveal>
      </Section>

      {/* Destination blocks — typographic editorial, no per-destination images */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pb-0">
        {DESTINATIONS.map((destination, index) => (
          <DestinationBlock
            key={destination.id}
            destination={destination}
            index={index}
          />
        ))}
        <div className="border-b border-[var(--border)]" aria-hidden="true" />
      </div>

      {/* Closing CTA */}
      <ContactCtaBand
        title="Enquire About a Specific Destination"
        body="Our advisors are available to discuss opportunities across all six locations — whether you are seeking a primary residence, a seasonal retreat, a yacht berth, or interior guidance on an existing asset."
      />
    </main>
  );
}
