import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { OfferList } from "@/components/site/OfferList";
import { ListingGrid } from "@/components/site/ListingGrid";
import { ContactCtaBand } from "@/components/site/ContactCtaBand";

export const metadata: Metadata = {
  title: "Yachts for Sale — Maris Exclusive",
  description:
    "A refined portfolio of luxury yachts and superyachts, with expert advice on acquisition, valuation and ownership transition. Based between Monaco and Greece.",
};

const offerItems = [
  {
    title: "Acquisition Advisory",
    body: "End-to-end guidance from initial brief through sea trial and delivery. We identify vessels aligned to your requirements — on-market and off — and manage the full acquisition process with discretion.",
  },
  {
    title: "Valuation & Market Intelligence",
    body: "Independent, data-informed valuations for buyers and sellers. Our team draws on 15 years of transaction history and active market intelligence across the Mediterranean and beyond.",
  },
  {
    title: "Ownership Transition",
    body: "Structured support through flag registration, flag transfer, crew handover and first-season planning. We ensure continuity so that ownership begins with confidence from day one.",
  },
  {
    title: "Discreet Brokerage",
    body: "Access to a selective database of yachts and superyachts, and a private network of buyers and sellers rarely visible through conventional channels. Confidentiality is absolute.",
  },
];

const listingItems = [
  {
    image: "/images/cosmico-profile.jpg",
    alt: "Cosmico motor yacht profile at sea",
    title: "Cosmico — 40.8m Motor Yacht",
    meta: "40.8m · Motor Yacht · 2024 · On request",
  },
  {
    image: "/images/deepblue-profile.jpg",
    alt: "Deep Blue motor yacht at anchor",
    title: "Deep Blue — 55m Motor Yacht",
    meta: "55m · Motor Yacht · 2014 · On request",
  },
  {
    image: "/images/yacht-aerial-profile.png",
    alt: "Aerial view of superyacht profile",
    title: "Horizon — 55m Superyacht",
    meta: "55m · Superyacht · 2018 · On request",
  },
  {
    image: "/images/Cappucino-ryi-6.png",
    alt: "Cappucino yacht profile along the coast",
    title: "Cappucino — 38m Motor Yacht",
    meta: "38m · Motor Yacht · 2019 · On request",
  },
  {
    image: "/images/Cappucino-ryi-3.png",
    alt: "Cappucino yacht exterior view",
    title: "Azzurra — 34m Motor Yacht",
    meta: "34m · Motor Yacht · 2021 · On request",
  },
  {
    image: "/images/DJI_0175.jpg",
    alt: "Drone view of yacht underway",
    title: "Levante — 48m Motor Yacht",
    meta: "48m · Motor Yacht · 2017 · On request",
  },
  {
    image: "/images/DJI_0356.jpg",
    alt: "Aerial profile of yacht at sea",
    title: "Sirocco — 36m Motor Yacht",
    meta: "36m · Motor Yacht · 2022 · On request",
  },
];

export default function YachtsForSalePage() {
  return (
    <main>
        {/* ── Hero ── */}
        <PageHero
          image="/images/champagne-caviar-profile.jpg"
          alt="Champagne & Caviar — luxury motor yacht at anchor off the Riviera coast"
          eyebrow="Yachting · For Sale"
          title="Yachts for Sale"
          subtitle="A refined portfolio of luxury yachts and superyachts, expertly curated for discerning buyers."
        />

        {/* ── Intro — verbatim service copy ── */}
        <Section id="intro">
          <div className="max-w-3xl">
            <Reveal>
              <p
                className="text-[var(--muted-fg)] font-light leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)" }}
              >
                A refined portfolio of luxury yachts and superyachts, with expert advice on
                acquisition, valuation and ownership transition.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="w-10 h-px bg-[var(--border)] my-10" aria-hidden="true" />
            </Reveal>

            <Reveal delay={0.2}>
              <p
                className="text-[var(--foreground)] font-light leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
              >
                Maris Exclusive approaches each acquisition as a singular endeavour. Drawing on
                15 years of experience and a private network spanning Monaco, the Mediterranean
                and beyond, we offer access to exceptional vessels — many of which never reach the
                open market. From initial brief to sea trial, we guide you through every stage with
                absolute discretion and without compromise.
              </p>
            </Reveal>
          </div>
        </Section>

        {/* ── What We Offer ── */}
        <Section
          surface
          eyebrow="Our Approach"
          title="What We Offer"
          id="what-we-offer"
        >
          <OfferList items={offerItems} />
        </Section>

        {/* ── Selected Listings ── */}
        <Section
          eyebrow="Portfolio"
          title="Selected Representation"
          id="listings"
        >
          <ListingGrid
            items={listingItems}
            note="Selected representation · full portfolio available on private enquiry"
          />
        </Section>

        {/* ── Contact CTA ── */}
        <ContactCtaBand
          title="Seek the Exceptional"
          body="Whether you are acquiring your first yacht or adding to a portfolio, we invite you to begin in confidence. Every conversation is entirely private."
        />
      </main>
  );
}
