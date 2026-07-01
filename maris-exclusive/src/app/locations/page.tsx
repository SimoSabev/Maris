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
      "The Côte d'Azur remains the enduring archetype of Mediterranean luxury — a seamless blend of clifftop estates, protected harbours, and the discreet society that orbits them. Monaco's compact principality concentrates extraordinary wealth and yachting heritage in a single harbour, while the broader Riviera stretches from Menton to Saint-Tropez through some of Europe's most coveted coastal addresses. We maintain longstanding relationships across this corridor and access properties that rarely, if ever, reach the open market.",
  },
  {
    id: "italy",
    name: "Italy",
    editorial:
      "Italy's diversity of landscape and architectural heritage makes it one of the world's most compelling property markets. From the terraced lemon groves of the Amalfi Coast and the azure panoramas of Sardinia's Costa Smeralda to Tuscan estates hidden behind cypress alleys and Venetian palazzi on the Grand Canal, each acquisition here carries genuine cultural depth. Our network spans the finest coastal, hillside, and historic-centre addresses, connecting motivated sellers with discerning international buyers.",
  },
  {
    id: "greece",
    name: "Greece",
    editorial:
      "Greece has emerged as one of the defining luxury markets of this decade. The Cyclades — Mykonos, Santorini, Paros — draw a global clientele seeking whitewashed architecture suspended above cobalt water, while Athens' historic neighbourhoods and the Peloponnese coastline offer a quieter, equally refined alternative. The Greek sailing season provides a natural anchor for yacht charter and acquisition enquiries, and our base between Monaco and Athens places us at the intersection of both worlds.",
  },
  {
    id: "middle-east",
    name: "Middle East",
    editorial:
      "The Gulf region represents one of the most significant concentrations of ultra-high-net-worth residential demand globally. Dubai's Palm Jumeirah and Jumeirah Bay Island offer landmark residences with direct marina access; Abu Dhabi and Qatar are developing their own prime residential and cultural quarters at pace. For clients seeking scale, privacy, and architectural grandeur — alongside a stable regulatory environment — the Middle East presents opportunities distinct from any European market.",
  },
  {
    id: "london",
    name: "London",
    editorial:
      "London remains the pre-eminent global city for prime residential property — a deep, liquid market anchored by centuries of legal and financial infrastructure. Belgravia, Mayfair, Knightsbridge, and the wider South Kensington corridor attract an international ownership profile, while the City fringe and riverside neighbourhoods continue to evolve as architectural destinations in their own right. Our London relationships cover both acquisition and discreet off-market introductions, with particular expertise in staging and interior repositioning prior to sale.",
  },
  {
    id: "spain",
    name: "Spain",
    editorial:
      "Spain's golden triangle — Marbella, Ibiza, and Mallorca — has solidified its position as the Mediterranean's most versatile luxury market. Marbella's Golden Mile and the sierra hillsides of La Zagaleta attract year-round international buyers; Ibiza balances architectural creativity with cultural cachet; Mallorca offers expansive estates within a short flight of the major European capitals. Spain also provides a compelling backdrop for yacht charter, with the Balearics ranking among the finest sailing grounds in European waters.",
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
