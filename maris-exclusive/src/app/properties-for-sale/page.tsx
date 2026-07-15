import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { OfferList } from "@/components/site/OfferList";
import { ContactCtaBand } from "@/components/site/ContactCtaBand";

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Luxury Real Estate & Villas for Sale",
  description:
    "Buy luxury villas and real estate through an off-market, request-led acquisition service for signature villas, apartments, chalets and estates in premier coastal, city and mountain locations. Access to a selective database of properties and a global network of buyers.",
  keywords: [
    "real estate",
    "luxury real estate",
    "buy villa",
    "luxury villa",
    "villas for sale",
    "luxury property",
  ],
  alternates: { canonical: "/properties-for-sale" },
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
  return (
    <main>
      {/* Hero */}
      <PageHero
        image="/images/properties/villa-alcyone-terrace.jpg"
        alt="Villa Alcyone — Cap Ferrat terrace overlooking the French Riviera"
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

      {/* Acquisitions Shared on Request — no public listings; most inventory is off-market */}
      <Section eyebrow="The Portfolio" id="portfolio">
        <div className="max-w-3xl">
          <Reveal>
            <h2
              className="font-display text-[var(--foreground)] leading-[1.1] mb-8"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 3.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.015em",
              }}
            >
              Shared Privately, on Request
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="w-10 h-px bg-[var(--accent)] mb-8" aria-hidden="true" />
          </Reveal>

          <Reveal delay={0.16}>
            <p
              className="text-[var(--muted-fg)] font-light leading-relaxed mb-6"
              style={{ fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)" }}
            >
              The great majority of our sales inventory — villas, estates,
              apartments and chalets across the Riviera, the Alps, Greece and
              beyond — is off-market and never published. Confidentiality is
              part of the value we offer both sellers and buyers.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p
              className="text-[var(--muted-fg)] font-light leading-relaxed mb-10"
              style={{ fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)" }}
            >
              Tell us what you are seeking — the location, the scale, the
              character of the property — and we will introduce a shortlist
              matched precisely to your brief, in complete discretion.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 nav-label text-[var(--accent-ink)] text-[0.6rem] hover:text-[var(--foreground)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm cursor-pointer w-fit"
            >
              <span className="relative">
                Begin an Acquisition Enquiry
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300 ease-out"
                  aria-hidden="true"
                />
              </span>
              <ArrowRight
                size={12}
                strokeWidth={1.5}
                className="translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
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
