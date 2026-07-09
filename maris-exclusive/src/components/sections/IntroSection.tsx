"use client";

import { motion, useReducedMotion } from "motion/react";

// ─── IntroSection ──────────────────────────────────────────────────────────
// Editorial manifesto with generous whitespace, thin rule, and quiet stats.

const STATS = [
  { value: "20+", label: "Years of Expertise" },
  { value: "€1B+", label: "In Transactions" },
  { value: "Monaco · Greece", label: "Our Bases" },
];

export function IntroSection() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.3, delay } }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.65, delay, ease: "easeOut" as const },
        };

  return (
    <section
      className="bg-[var(--background)] py-28 lg:py-40 px-6 lg:px-16"
      aria-labelledby="intro-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0 lg:ml-[10%]">

          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0)}
            className="nav-label text-[var(--accent)] text-[0.6rem] mb-8"
          >
            About Maris Exclusive
          </motion.p>

          {/* Thin rule */}
          <motion.div
            {...fadeUp(0.05)}
            className="w-12 h-px bg-[var(--accent)] mb-10 mx-auto lg:mx-0"
            aria-hidden="true"
          />

          {/* Manifesto */}
          <motion.h2
            id="intro-heading"
            {...fadeUp(0.1)}
            className="font-display text-[var(--foreground)] leading-[1.25] mb-10"
            style={{
              fontSize: "clamp(1.8rem, 3.2vw, 3rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            A private advisory house rooted in two disciplines — the art of acquisition and the craft of interiors.
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="text-[var(--muted-fg)] leading-relaxed font-light"
            style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
          >
            Founded by two highly specialised professionals with more than twenty years of combined experience, Maris
            Exclusive operates at the intersection of real estate, yachting and interior design. Based between Monaco
            and Greece, we maintain discreet access to off-market properties and exceptional yachts across Europe and
            the Middle East.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--border)]"
          role="list"
          aria-label="Key figures"
        >
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="bg-[var(--background)] px-10 py-10 sm:py-12 text-center"
              role="listitem"
            >
              <p
                className="font-display text-[var(--foreground)] mb-2"
                style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 400, letterSpacing: "-0.02em" }}
              >
                {stat.value}
              </p>
              <p className="nav-label text-[var(--accent)] text-[0.6rem]">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
