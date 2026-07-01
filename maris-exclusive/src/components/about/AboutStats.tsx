"use client";

import { motion, useReducedMotion } from "motion/react";

// ─── AboutStats ─────────────────────────────────────────────────────────────
// Quiet stats row mirroring the IntroSection pattern from the Home page.
// Three key figures on a hairline grid.

const STATS = [
  { value: "15+", label: "Years of Expertise" },
  { value: "€1B+", label: "In Transactions" },
  { value: "Monaco · Greece", label: "Our Bases" },
];

export function AboutStats() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="bg-[var(--background)] px-6 lg:px-16 pb-24 lg:pb-36"
      aria-label="Key figures"
    >
      <div className="max-w-[1440px] mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.65,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--border)]"
          role="list"
        >
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="bg-[var(--background)] px-10 py-10 sm:py-12 text-center"
              role="listitem"
            >
              <p
                className="font-display text-[var(--foreground)] mb-2"
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </p>
              <p className="nav-label text-[var(--accent)] text-[0.6rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
