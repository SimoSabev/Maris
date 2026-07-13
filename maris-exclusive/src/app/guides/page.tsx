import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ContactCtaBand } from "@/components/site/ContactCtaBand";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides — Luxury Real Estate & Yachting",
  description:
    "Private guides to luxury real estate, villas and yachting across Monaco, Greece, Mykonos, Dubai and the Gulf — by Maris Exclusive.",
};

export default function GuidesPage() {
  return (
    <main>
      {/* Typographic header — no stock media */}
      <Section eyebrow="Guides" id="intro">
        <Reveal>
          <h1
            className="font-display text-[var(--foreground)] leading-[1.05]"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Guides
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p
            className="text-[var(--muted-fg)] font-light leading-relaxed mt-6 max-w-2xl"
            style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.1rem)" }}
          >
            A private perspective on the markets we know best — luxury real
            estate, villas and yachting across Monaco, Greece, Mykonos, Dubai
            and the Gulf.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="w-12 h-px bg-[var(--accent)] mt-10" aria-hidden="true" />
        </Reveal>
      </Section>

      {/* Guide list */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pb-4">
        {guides.map((guide, index) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="block border-t border-[var(--border)] py-10 lg:py-14 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
          >
            <Reveal delay={0.04}>
              <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-4">
                {guide.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="font-display text-[var(--foreground)] leading-tight group-hover:text-[var(--accent-ink)] transition-colors duration-200"
                style={{
                  fontSize: "clamp(1.6rem, 3vw, 3rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}
              >
                {guide.title}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p
                className="text-[var(--muted-fg)] font-light leading-relaxed mt-4 max-w-2xl"
                style={{ fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)" }}
              >
                {guide.intro}
              </p>
            </Reveal>
          </Link>
        ))}
        <div className="border-b border-[var(--border)]" aria-hidden="true" />
      </div>

      <ContactCtaBand
        title="Speak With an Advisor"
        body="Every acquisition, charter and interior commission begins with a private conversation. Our advisors are available by appointment."
      />
    </main>
  );
}
