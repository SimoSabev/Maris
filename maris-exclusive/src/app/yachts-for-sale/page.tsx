import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { OfferList } from "@/components/site/OfferList";
import { ListingGrid } from "@/components/site/ListingGrid";
import { ContactCtaBand } from "@/components/site/ContactCtaBand";
import { saleYachts, yachtTitle, yachtMeta } from "@/lib/yachts";

export const metadata: Metadata = {
  title: "Yachts for Sale — Luxury Yachts & Superyachts",
  description:
    "A refined portfolio of luxury yachts and superyachts for sale, with expert advice on acquisition, valuation and ownership transition. Based between Monaco and Greece.",
  keywords: [
    "yachts for sale",
    "buy yacht",
    "luxury yachts for sale",
    "superyacht for sale",
    "yacht brokerage",
  ],
  alternates: { canonical: "/yachts-for-sale" },
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

const listingItems = saleYachts().map((yacht) => ({
  image: yacht.image,
  alt: yacht.alt,
  title: yachtTitle(yacht),
  meta: yachtMeta(yacht),
}));

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
