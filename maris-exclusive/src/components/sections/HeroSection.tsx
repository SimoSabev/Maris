"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";

// ─── HeroSection ───────────────────────────────────────────────────────────
// Full-bleed hero with yacht profile image, gradient scrim, staggered reveal.

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3, delay } }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: "easeOut" as const },
        };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh", minHeight: "560px" }}
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed image */}
      <Image
        src="/images/hero-yacht-profile.jpg"
        alt="Luxury yacht profile on open water"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center"
      />

      {/* Dark gradient scrim — bottom-left emphasis for legibility */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,17,14,0.72) 0%, rgba(20,17,14,0.40) 45%, rgba(20,17,14,0.08) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 px-6 lg:px-16 max-w-[1440px] mx-auto w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0.1)}
            className="nav-label text-white/70 mb-6 text-[0.65rem]"
          >
            Real Estate &middot; Yachting &middot; Interiors
          </motion.p>

          {/* Tagline */}
          <motion.h1
            id="hero-heading"
            {...fadeUp(0.3)}
            className="font-display text-white leading-[1.05] mb-10"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 7rem)",
              fontWeight: 400,
              letterSpacing: "-0.015em",
            }}
          >
            Where Exceptional
            <br />
            Acquisition Meets
            <br />
            Finer Interiors
          </motion.h1>

          {/* CTA */}
          <motion.div {...fadeUp(0.55)}>
            <Link
              href="/contact"
              className="inline-block border border-white/60 text-white nav-label text-[0.65rem] px-8 py-4 hover:bg-white hover:text-[var(--foreground)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-transparent cursor-pointer"
            >
              Make an Enquiry
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          {...fadeUp(0.9)}
          className="absolute bottom-8 right-8 lg:right-16 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="nav-label text-white/40 text-[0.55rem] tracking-[0.2em] writing-mode-vertical"
            style={{ writingMode: "vertical-rl", letterSpacing: "0.18em" }}>
            scroll
          </span>
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={14} strokeWidth={1} className="text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
