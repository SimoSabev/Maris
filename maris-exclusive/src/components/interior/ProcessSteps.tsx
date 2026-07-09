"use client";

import { motion, useReducedMotion } from "motion/react";

// ─── ProcessSteps ──────────────────────────────────────────────────────────
// Editorial 4-step process sequence for the Interior Design page.
// Styled inline to match the Section/Reveal primitive rhythm — no new
// design tokens needed.

const STEPS = [
  {
    number: "01",
    phase: "Discovery",
    description:
      "We listen first. A detailed brief covering the asset, the intended use, the timeline and the standard expected. No assumptions, no templates — every project begins from a blank page.",
  },
  {
    number: "02",
    phase: "Concept & Specification",
    description:
      "Mood, material, proportion and palette are resolved into a coherent concept. A full specification is produced — from structural interventions to the selection of individual objects.",
  },
  {
    number: "03",
    phase: "Coordination & Delivery",
    description:
      "We manage every supplier, contractor and craftsperson directly. The client receives one point of contact, transparent reporting, and delivery that honours the brief.",
  },
  {
    number: "04",
    phase: "Completion & Handover",
    description:
      "Final installation, styling and a comprehensive handover. We remain engaged after completion — available for ongoing refinements as the space is lived in.",
  },
];

export function ProcessSteps() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true as const },
          transition: { duration: 0.25, delay },
        }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true as const },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      className="bg-[var(--background)] py-24 lg:py-36 px-6 lg:px-16"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <motion.p
            {...fadeUp(0)}
            className="nav-label text-[var(--accent)] text-[0.6rem] mb-4"
          >
            Our Process
          </motion.p>
          <div className="w-8 h-px bg-[var(--border)] mb-6" aria-hidden="true" />
          <motion.h2
            id="process-heading"
            {...fadeUp(0.1)}
            className="font-display text-[var(--foreground)]"
            style={{
              fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)",
              fontWeight: 400,
              letterSpacing: "-0.015em",
              lineHeight: 1.1,
            }}
          >
            From Concept to Completion
          </motion.h2>
        </div>

        {/* Steps */}
        <ol
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 md:gap-x-10 lg:gap-x-0 border-t border-[var(--border)]"
          aria-label="Design process phases"
          role="list"
        >
          {STEPS.map((step, index) => (
            <motion.li
              key={step.number}
              {...fadeUp(0.08 + index * 0.1)}
              className={`border-b border-[var(--border)] lg:border-b-0 lg:border-r last:border-r-0 border-[var(--border)] pt-10 pb-12 pr-0 lg:pr-10 pl-0 ${
                index > 0 ? "lg:pl-10" : "lg:pl-0"
              } list-none`}
            >
              {/* Step number */}
              <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-5">
                {step.number}
              </p>

              {/* Phase name */}
              <h3
                className="font-display text-[var(--foreground)] mb-4 leading-tight"
                style={{
                  fontSize: "clamp(1.2rem, 1.5vw, 1.5rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                {step.phase}
              </h3>

              {/* Hairline */}
              <div className="w-6 h-px bg-[var(--accent)] mb-4" aria-hidden="true" />

              {/* Description */}
              <p
                className="text-[var(--muted-fg)] font-light leading-relaxed"
                style={{ fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)" }}
              >
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
