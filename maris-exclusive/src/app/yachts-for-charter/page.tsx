import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { OfferList } from "@/components/site/OfferList";
import { ListingGrid } from "@/components/site/ListingGrid";
import { ContactCtaBand } from "@/components/site/ContactCtaBand";

export const metadata: Metadata = {
  title: "Yachts for Charter — Maris Exclusive",
  description:
    "Exclusive charters in prime Mediterranean and Middle Eastern cruising locations, with customised itineraries and full-service crewed options. Based between Monaco and Greece.",
};

const offerItems = [
  {
    title: "Mediterranean & Middle East Cruising",
    body: "Carefully selected itineraries across the French Riviera, the Greek archipelago, the Amalfi coast, Croatia and the waters of the Arabian Gulf. Each route is crafted around the season and your preferences.",
  },
  {
    title: "Customised Itineraries",
    body: "No two charters are alike. We design your voyage from departure port to return, incorporating private anchorages, cultural moments and culinary experiences that reflect your tastes precisely.",
  },
  {
    title: "Full Crewed Service",
    body: "Every yacht in our charter portfolio is presented with an experienced, vetted crew. Captains, chefs, stewards and deck crew are selected to deliver the quiet, attentive service the experience demands.",
  },
  {
    title: "Bespoke Provisioning",
    body: "From fine wine cellars to tailored menus, from watersport equipment to onboard spa treatments — we coordinate every element of provisioning to ensure the charter exceeds expectation.",
  },
];

const listingItems = [
  {
    image: "/images/fleet/liquid-sky.jpg",
    alt: "Liquid Sky superyacht at sea",
    title: "Liquid Sky — 47m",
    meta: "47m · 5 cabins · 12 guests · 2017 · Weekly on request",
  },
  {
    image: "/images/fleet/cappuccino-fleet.png",
    alt: "Cappuccino yacht exterior profile",
    title: "Cappuccino — 30m",
    meta: "30m · 5 cabins · 10 guests · 2007 · Weekly on request",
  },
  {
    image: "/images/fleet/triumph.jpg",
    alt: "Triumph superyacht underway",
    title: "Triumph — 65m",
    meta: "65m · 6 cabins · 12 guests · 2021 · Weekly on request",
  },
  {
    image: "/images/fleet/dxb.jpg",
    alt: "DXB motor yacht profile",
    title: "DXB — 35m",
    meta: "35m · 5 cabins · 10 guests · 2003 · Weekly on request",
  },
  {
    image: "/images/fleet/champagne-caviar-fleet.jpg",
    alt: "Champagne & Caviar yacht aerial profile",
    title: "Champagne & Caviar — 34m",
    meta: "34m · 5 cabins · 12 guests · 2004 · Weekly on request",
  },
  {
    image: "/images/fleet/lioness-v.png",
    alt: "Lioness V superyacht profile",
    title: "Lioness V — 63m",
    meta: "63m · 6 cabins · 12 guests · 2006 · Weekly on request",
  },
  {
    image: "/images/cosmico-profile.jpg",
    alt: "Cosmico motor yacht profile at sea",
    title: "Cosmico — 40.8m",
    meta: "40.8m · Motor Yacht · 2024 · Weekly on request",
  },
];

export default function YachtsForCharterPage() {
  return (
    <main>
        {/* ── Hero ── */}
        <PageHero
          image="/images/yacht-deck-sun.jpg"
          alt="Sun-drenched deck of a luxury charter yacht in the Mediterranean"
          eyebrow="Yachting · Charter"
          title="Yachts for Charter"
          subtitle="Exclusive charters in prime Mediterranean and Middle Eastern cruising locations."
        />

        {/* ── Intro — verbatim service copy ── */}
        <Section id="intro">
          <div className="max-w-3xl">
            <Reveal>
              <p
                className="text-[var(--muted-fg)] font-light leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)" }}
              >
                Exclusive charters in prime Mediterranean and Middle Eastern cruising locations,
                customised itineraries and full-service crewed options.
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
                A charter arranged through Maris Exclusive is a carefully considered journey — not
                simply a vessel booking. We curate every element: the yacht, the crew, the
                itinerary and the provisions. Whether you are drawn to the caldera of Santorini,
                the sheltered coves of Croatia or the warmth of the Arabian Gulf, we will compose
                a voyage that is entirely your own. Discretion and excellence are the only
                constants.
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

        {/* ── Charter Fleet ── */}
        <Section
          eyebrow="Charter Fleet"
          title="Available Vessels"
          id="fleet"
        >
          <ListingGrid
            items={listingItems}
            note="Selected charter representation · full fleet available on private enquiry"
            noteFontSize="1.1rem"
          />
        </Section>

        {/* ── Contact CTA ── */}
        <ContactCtaBand
          title="Commission Your Voyage"
          body="Tell us where you wish to go, and when. We will compose the itinerary, select the vessel and arrange every detail — entirely in confidence."
        />
      </main>
  );
}
