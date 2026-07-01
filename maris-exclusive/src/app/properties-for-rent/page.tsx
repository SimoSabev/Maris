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
  title: "Properties for Rent — Maris Exclusive",
  description:
    "Short- and long-term luxury and holiday rentals, thoughtfully selected and carefully managed for seamless stays. Concierge-led service to meet every lifestyle need.",
};

// ─── Offer points ──────────────────────────────────────────────────────────

const OFFER_ITEMS = [
  {
    title: "Short & Long-Term Rentals",
    body: "From a fortnight on the Riviera to a seasonal residence in Greece, we arrange rental terms that match exactly how and when you wish to live — without compromise.",
  },
  {
    title: "Vetted & Managed Properties",
    body: "Every residence in our portfolio is personally inspected and held to an exacting standard. Property management, housekeeping and maintenance are coordinated on your behalf.",
  },
  {
    title: "Concierge-Led Service",
    body: "A dedicated advisor oversees your stay from the first inquiry to departure — arranging transfers, staffing, provisioning, restaurant reservations and any bespoke requirement.",
  },
  {
    title: "Seamless Stays",
    body: "Our role is to ensure that the only thing you experience is the property itself. Every logistical detail is anticipated and resolved quietly, before you arrive.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────────

export default function PropertiesForRentPage() {
  return (
    <main>
      {/* Hero — Villa Elysia hero (summer-rental feel) */}
      <PageHero
        image="/images/properties/villa-elysia-hero.jpg"
        alt="Villa Elysia — Cycladic retreat with Aegean views"
        eyebrow="Real Estate · For Rent"
        title="Properties for Rent"
      />

      {/* Intro — verbatim client copy */}
      <Section eyebrow="Curated Rentals" id="intro">
        <Reveal>
          <p
            className="text-[var(--foreground)] font-display leading-relaxed max-w-3xl"
            style={{
              fontSize: "clamp(1.1rem, 1.6vw, 1.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Short- and long-term luxury and holiday rentals, thoughtfully
            selected and carefully managed for seamless stays. Concierge-led
            service to meet every lifestyle need.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="w-12 h-px bg-[var(--accent)] mt-10" aria-hidden="true" />
        </Reveal>
      </Section>

      {/* What we offer */}
      <Section
        eyebrow="What We Offer"
        title="Thoughtfully Selected"
        surface
        id="offer"
      >
        <OfferList items={OFFER_ITEMS} />
      </Section>

      {/* Rentals Curated on Request — editorial block replacing fabricated listings */}
      <Section eyebrow="The Rental Portfolio" id="portfolio">
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
              Rentals Curated on Request
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
              Our rental portfolio — spanning the French Riviera, Greece, Italy,
              Spain, and the Middle East — is presented exclusively on enquiry.
              Short-term and long-term options alike are selected personally, held
              to the same standard as our sales portfolio, and introduced only to
              clients whose preferences and timing we understand.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <p
              className="text-[var(--muted-fg)] font-light leading-relaxed mb-10"
              style={{ fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)" }}
            >
              Tell us where and when you wish to be — the coastline, the city,
              the mountain — and we will present a thoughtful shortlist. There
              is no generic listing board here. There is only a conversation,
              and what follows from it.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 nav-label text-[var(--accent-ink)] text-[0.6rem] hover:text-[var(--foreground)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm cursor-pointer w-fit"
            >
              <span className="relative">
                Begin a Rental Enquiry
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
        title="Reserve Your Residence"
        body="Tell us where and when you wish to be, and we will present a shortlist tailored precisely to your preferences. All enquiries are handled with complete discretion."
      />
    </main>
  );
}
