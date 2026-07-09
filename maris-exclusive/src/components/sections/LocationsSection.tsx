"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

// ─── LocationsSection ──────────────────────────────────────────────────────
// Six destination tiles — purely typographic treatment.
// We do not own photographs of Italy, Greece, Middle East, London, or Spain,
// so no per-destination images are used here. The tiles use large Cormorant
// place names, eyebrow numbering, brief editorial descriptors, and hairline
// rules to create a luxurious, intentional editorial layout.

type Location = {
  number: string;
  name: string;
  href: string;
  descriptor: string;
};

const LOCATIONS: Location[] = [
  {
    number: "01",
    name: "Monaco & French Riviera",
    href: "/locations#monaco",
    descriptor:
      "It's been our home base for the past 20 years, allowing us to build a reliable network of contacts in real estate, yachting and interiors.",
  },
  {
    number: "02",
    name: "Italy",
    href: "/locations#italy",
    descriptor:
      "From the Amalfi Coast to the Costa Smeralda — architectural heritage and coastline of uncommon depth.",
  },
  {
    number: "03",
    name: "Greece",
    href: "/locations#greece",
    descriptor:
      "The Cyclades and Aegean — whitewashed architecture suspended above cobalt water, and a sailing season without equal.",
  },
  {
    number: "04",
    name: "Middle East",
    href: "/locations#middle-east",
    descriptor:
      "Dubai, Abu Dhabi and beyond — landmark residences combining scale, privacy, and architectural grandeur.",
  },
  {
    number: "05",
    name: "London",
    href: "/locations#london",
    descriptor:
      "Belgravia, Mayfair, Knightsbridge — a deep, liquid prime market anchored by centuries of legal and financial infrastructure.",
  },
  {
    number: "06",
    name: "Spain",
    href: "/locations#spain",
    descriptor:
      "Marbella, Ibiza, Mallorca — the Mediterranean's most versatile luxury market, from golden coastlines to sierra hillsides.",
  },
];

// ─── Single tile ────────────────────────────────────────────────────────────

type LocationTileProps = {
  location: Location;
  delay: number;
  shouldReduceMotion: boolean | null;
};

function LocationTile({ location, delay, shouldReduceMotion }: LocationTileProps) {
  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: "easeOut" as const }}
    >
      <Link
        href={location.href}
        id={location.href.split("#")[1]}
        className="group block border-t border-[var(--border)] pt-6 pb-8 hover:border-[var(--accent)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded-sm cursor-pointer"
        aria-label={`Explore ${location.name}`}
      >
        {/* Eyebrow number */}
        <p className="nav-label text-[var(--accent)] text-[0.55rem] mb-5">
          {location.number}
        </p>

        {/* Place name — large Cormorant display */}
        <h3
          className="font-display text-[var(--foreground)] leading-tight mb-5"
          style={{
            fontSize: "clamp(1.35rem, 1.8vw, 2rem)",
            fontWeight: 400,
            letterSpacing: "-0.015em",
          }}
        >
          {location.name}
        </h3>

        {/* Animated hairline accent */}
        <div
          className="w-6 h-px bg-[var(--border)] mb-5 group-hover:bg-[var(--accent)] group-hover:w-10 transition-all duration-400 ease-out"
          aria-hidden="true"
        />

        {/* Short editorial descriptor */}
        <p
          className="text-[var(--muted-fg)] font-light leading-relaxed"
          style={{ fontSize: "clamp(0.8rem, 0.9vw, 0.9rem)" }}
        >
          {location.descriptor}
        </p>

        {/* Hover cue */}
        <p
          className="nav-label text-[var(--accent)] text-[0.55rem] mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        >
          Explore
        </p>
      </Link>
    </motion.div>
  );
}

// ─── Main export ────────────────────────────────────────────────────────────

export function LocationsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="bg-[var(--surface)] py-24 lg:py-36 px-6 lg:px-16"
      aria-labelledby="locations-heading"
    >
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="nav-label text-[var(--accent)] text-[0.6rem] mb-4"
            >
              Where We Operate
            </motion.p>
            <motion.h2
              id="locations-heading"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" as const }}
              className="font-display text-[var(--foreground)]"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.015em",
              }}
            >
              Our Locations
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[var(--muted-fg)] font-light text-sm max-w-xs leading-relaxed"
          >
            Premier destinations across the Mediterranean, Middle East and beyond.
          </motion.p>
        </div>

        {/* Typographic tile grid — 2 cols mobile, 3 tablet, 6 desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-0">
          {LOCATIONS.map((loc, i) => (
            <LocationTile
              key={loc.href}
              location={loc}
              delay={i * 0.07}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </div>

        {/* Closing hairline */}
        <div className="border-t border-[var(--border)] mt-0" aria-hidden="true" />
      </div>
    </section>
  );
}
