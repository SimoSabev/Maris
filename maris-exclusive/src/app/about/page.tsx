import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ContactCtaBand } from "@/components/site/ContactCtaBand";
import { AboutStats } from "@/components/about/AboutStats";
import { ServicesRecap } from "@/components/about/ServicesRecap";

export const metadata: Metadata = {
  title: "About Maris Exclusive — A Private Advisory House",
  description:
    "Fifteen years of experience across Europe and the Middle East. Based between Monaco and Greece. Over €1 billion in transactions. Two disciplines: luxury brokerage and interior design.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        image="/images/hero-yacht-profile.jpg"
        alt="Luxury yacht profile on open water — the sea is central to everything Maris does"
        eyebrow="About"
        title="A Private Advisory House"
        subtitle="Rooted in two disciplines — the art of acquisition and the craft of interiors."
      />

      {/* Editorial brand story */}
      <Section eyebrow="Who We Are" id="about-story">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* Primary copy column */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2
                className="font-display text-[var(--foreground)] leading-[1.2] mb-10"
                style={{
                  fontSize: "clamp(1.8rem, 3.2vw, 3.4rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                }}
              >
                Two specialists. One house. An uncommon standard.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="w-10 h-px bg-[var(--accent)] mb-10" aria-hidden="true" />
            </Reveal>

            <Reveal delay={0.18}>
              <p
                className="text-[var(--muted-fg)] font-light leading-relaxed mb-7"
                style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
              >
                Maris Exclusive is a private advisory practice founded by two specialists with more
                than fifteen years of combined experience across Europe and the Middle East. The name
                comes from the Latin <em>maris</em> — &ldquo;of the sea&rdquo; — a quiet acknowledgement
                of the Mediterranean world in which we live and work.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p
                className="text-[var(--muted-fg)] font-light leading-relaxed mb-7"
                style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
              >
                We are based between Monaco and Greece, two cities that together encompass what we do:
                Monaco for its position at the apex of European luxury real estate and yachting; Greece
                for the depth of its residential market and the breadth of its coastline. From these two
                bases we serve a global clientele, with particular focus on the French Riviera, Italy,
                the Aegean, the Middle East, London and Spain.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p
                className="text-[var(--muted-fg)] font-light leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
              >
                Over €1 billion in transactions is the result of fifteen years of introductions made with
                care, of trust maintained across generations of clients, and of an access to off-market
                properties and yachts that no listings platform can replicate. We do not advertise inventory.
                We present possibilities — selectively, and always in confidence.
              </p>
            </Reveal>
          </div>

          {/* Secondary pull-quote column */}
          <div className="lg:col-span-5 lg:pt-2">
            <Reveal delay={0.2}>
              <blockquote
                className="border-l-2 border-[var(--accent)] pl-8"
                aria-label="Brand positioning statement"
              >
                <p
                  className="font-display text-[var(--foreground)] leading-[1.35]"
                  style={{
                    fontSize: "clamp(1.3rem, 2vw, 2rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  &ldquo;We are not a listings portal — we are a curator, acting in confidence for
                  clients who expect nothing ordinary.&rdquo;
                </p>
                <div className="mt-6 w-6 h-px bg-[var(--border)]" aria-hidden="true" />
                <p className="nav-label text-[var(--accent)] text-[0.6rem] mt-5">
                  Maris Exclusive
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={0.35}>
              <p
                className="text-[var(--muted-fg)] font-light leading-relaxed mt-12"
                style={{ fontSize: "clamp(0.9rem, 1vw, 1rem)" }}
              >
                Our approach is bespoke by design. Every mandate is accepted individually, assessed
                against what we genuinely believe we can deliver, and conducted without the pressure
                of a sales pipeline. The client relationship comes first — the transaction follows.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Stats row — mirrors IntroSection pattern */}
      <AboutStats />

      {/* Two disciplines */}
      <Section
        surface
        eyebrow="Our Disciplines"
        title="Two Pillars, One Practice"
        id="about-disciplines"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[var(--border)]">

          {/* Brokerage */}
          <Reveal
            className="border-b border-[var(--border)] md:border-b-0 md:border-r md:pr-14 pt-10 pb-12"
          >
            <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-4">01</p>
            <h3
              className="font-display text-[var(--foreground)] mb-4 leading-tight"
              style={{
                fontSize: "clamp(1.3rem, 1.8vw, 1.8rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Luxury Brokerage
            </h3>
            <div className="w-6 h-px bg-[var(--accent)] mb-4" aria-hidden="true" />
            <p
              className="text-[var(--muted-fg)] font-light leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}
            >
              Properties for sale and rent, yachts for sale and charter — across the French Riviera,
              Greece, Italy, the Middle East, London and Spain. A selective database of real estate
              and vessels, combined with a global network of clients, sellers and buyers. The emphasis
              is always on access: to properties that do not appear publicly, and to counterparties
              who expect the same discretion in return.
            </p>
          </Reveal>

          {/* Interior Design */}
          <Reveal delay={0.1} className="md:pl-14 pt-10 pb-12">
            <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-4">02</p>
            <h3
              className="font-display text-[var(--foreground)] mb-4 leading-tight"
              style={{
                fontSize: "clamp(1.3rem, 1.8vw, 1.8rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Interior Design
            </h3>
            <div className="w-6 h-px bg-[var(--accent)] mb-4" aria-hidden="true" />
            <p
              className="text-[var(--muted-fg)] font-light leading-relaxed"
              style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}
            >
              Turnkey interior design, renovation and staging for residences and yachts — from
              concept to completion. This discipline works in concert with the brokerage practice:
              a client who acquires through us can, if they choose, transform what they have acquired
              through us as well. The result is an uncommon continuity of care, and a finished
              environment that reflects the full intention of the original acquisition.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Services recap */}
      <ServicesRecap />

      <ContactCtaBand
        title="Speak With Us in Confidence"
        body="We accept a limited number of new mandates each season. If you are considering an acquisition, a disposal or an interior commission, we would be glad to hear from you."
      />
    </main>
  );
}
