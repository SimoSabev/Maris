"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

// ─── SignatureSection ──────────────────────────────────────────────────────
// Large editorial feature: aerial yacht, off-market access copy.

export function SignatureSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="relative bg-[var(--foreground)] overflow-hidden py-0"
      aria-labelledby="signature-heading"
      style={{ minHeight: "70vh" }}
    >
      {/* Aerial yacht — full bleed with dark overlay for editorial look */}
      <div className="absolute inset-0">
        <Image
          src="/images/yacht-aerial-profile.png"
          alt="Luxury yacht from above, open sea"
          fill
          sizes="100vw"
          className="object-cover object-center"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to right, rgba(20,17,14,0.88) 0%, rgba(20,17,14,0.55) 50%, rgba(20,17,14,0.20) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[70vh] px-6 lg:px-16 py-24 max-w-[1440px] mx-auto w-full">
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="nav-label text-[var(--accent)] text-[0.6rem] mb-8"
          >
            Signature Access
          </motion.p>

          <motion.div
            className="w-12 h-px bg-[var(--accent)] mb-10"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-hidden="true"
          />

          <motion.h2
            id="signature-heading"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" as const }}
            className="font-display text-white leading-[1.1] mb-8"
            style={{
              fontSize: "clamp(2rem, 4vw, 4.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.015em",
            }}
          >
            Curated Access to Exceptional Vessels
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" as const }}
            className="text-white/70 font-light leading-relaxed mb-12"
            style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)" }}
          >
            Our portfolio of luxury yachts and superyachts is curated through a global network built
            over fifteen years. Many of our finest vessels never reach the open market — made available
            exclusively, discreetly, and only to those who understand true ownership.
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" as const }}
          >
            <Link
              href="/yachts-for-sale"
              className="group inline-flex items-center gap-3 border border-white/40 text-white nav-label text-[0.6rem] px-8 py-4 hover:bg-white hover:text-[var(--foreground)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
            >
              View Yachts
              <ArrowRight
                size={12}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
