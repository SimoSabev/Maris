"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

// ─── ServicesSection ───────────────────────────────────────────────────────
// Five services in alternating image/text editorial rows.

type Service = {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  isPlaceholder?: boolean;
};

const SERVICES: Service[] = [
  {
    title: "Properties for Sale",
    description:
      "An off-market, request-led acquisition service for villas, apartments, chalets and estates in premier coastal, city and mountain locations. Access to a selective database of properties and to a global network of buyers and sellers, introduced privately and matched precisely to each brief.",
    href: "/properties-for-sale",
    image: "/images/properties/chalet-nordea-pool.jpg",
    alt: "Chalet Nordéa indoor pool with panoramic snow-covered alpine lake view",
  },
  {
    title: "Properties for Rent",
    description:
      "Short- and long-term luxury and holiday rentals, thoughtfully selected and carefully managed for seamless stays. Concierge-led service to meet every lifestyle need.",
    href: "/properties-for-rent",
    image: "/images/properties/villa-elysia-pool.jpg",
    alt: "Villa Elysia infinity pool overlooking the Aegean Sea",
  },
  {
    title: "Yachts for Sale",
    description:
      "A refined portfolio of luxury yachts and superyachts, with expert advice on acquisition, valuation and ownership transition.",
    href: "/yachts-for-sale",
    image: "/images/yacht-deck-sun.jpg",
    alt: "Maltese Falcon 88m sailing yacht under full sail",
  },
  {
    title: "Yachts for Charter",
    description:
      "Exclusive charters in prime Mediterranean and Middle Eastern cruising locations, customised itineraries and full-service crewed options.",
    href: "/yachts-for-charter",
    image: "/images/fleet/maltese-falcon-sk.jpg",
    alt: "Yacht deck bathed in sunlight",
  },
  {
    title: "Interior Design, Renovation & Staging",
    description:
      "Turnkey interior design, renovation and staging services which enhance the value of the asset and accelerate sales — tailored to the specific property and yacht, from concept to completion.",
    href: "/interior-design",
    image: "/images/properties/chalet-crystal-mezzanine.jpg",
    alt: "Chalet Crystal mezzanine living room with fireplace",
  },
];

// ─── Single service row ─────────────────────────────────────────────────────

type ServiceRowProps = {
  service: Service;
  index: number;
  shouldReduceMotion: boolean | null;
};

function ServiceRow({ service, index, shouldReduceMotion }: ServiceRowProps) {
  const isEven = index % 2 === 0;

  const containerAnim = shouldReduceMotion
    ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.3 } }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.7, ease: "easeOut" as const },
      };

  return (
    <motion.article
      {...containerAnim}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch ${
        index > 0 ? "border-t border-[var(--border)]" : ""
      }`}
    >
      {/* Image — alternates left/right */}
      <div
        className={`relative overflow-hidden ${isEven ? "lg:order-1" : "lg:order-2"}`}
        style={{ minHeight: "420px" }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <Image
            src={service.image}
            alt={service.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            loading="lazy"
          />
          {/* Soft overlay */}
          <div
            className="absolute inset-0 bg-[var(--foreground)]/10 hover:bg-[var(--foreground)]/5 transition-colors duration-500"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-20 bg-[var(--background)] ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <p className="nav-label text-[var(--accent)] text-[0.6rem] mb-6">
          {String(index + 1).padStart(2, "0")}
        </p>

        <h3
          className="font-display text-[var(--foreground)] mb-6 leading-tight"
          style={{
            fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          {service.title}
        </h3>

        <div className="w-8 h-px bg-[var(--accent)] mb-6" aria-hidden="true" />

        <p
          className="text-[var(--muted-fg)] leading-relaxed font-light mb-10"
          style={{ fontSize: "clamp(0.88rem, 1vw, 0.97rem)" }}
        >
          {service.description}
        </p>

        <Link
          href={service.href}
          className="group inline-flex items-center gap-3 nav-label text-[var(--accent-ink)] text-[0.6rem] hover:text-[var(--foreground)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm cursor-pointer w-fit"
        >
          <span className="relative">
            Explore
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
      </div>
    </motion.article>
  );
}

// ─── Main export ────────────────────────────────────────────────────────────

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="bg-[var(--background)]"
      aria-labelledby="services-heading"
    >
      {/* Section header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="nav-label text-[var(--accent)] text-[0.6rem] mb-4"
        >
          What We Do
        </motion.p>
        <motion.h2
          id="services-heading"
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
          Our Services
        </motion.h2>
      </div>

      {/* Services rows */}
      <div className="border-t border-[var(--border)]">
        {SERVICES.map((service, index) => (
          <ServiceRow
            key={service.href}
            service={service}
            index={index}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </div>
    </section>
  );
}
