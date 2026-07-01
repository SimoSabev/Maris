"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

// ─── ContactCtaBand ────────────────────────────────────────────────────────
// Reusable quiet full-width CTA band on --surface.
// Used by ContactCta (Home) and by inner-page components.

type ContactCtaBandProps = {
  /** Override the default heading */
  title?: string;
  /** Override the default body paragraph */
  body?: string;
};

const DEFAULT_TITLE = "Begin Your Enquiry in Confidence";
const DEFAULT_BODY =
  "Whether you are seeking a signature property, an exceptional yacht or a transformation of your interior — we invite you to reach out. All conversations are entirely private.";

export function ContactCtaBand({
  title = DEFAULT_TITLE,
  body = DEFAULT_BODY,
}: ContactCtaBandProps) {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    shouldReduceMotion
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.25 } }
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      className="bg-[var(--surface)] py-28 lg:py-40 px-6 lg:px-16"
      aria-labelledby="contact-cta-band-heading"
    >
      <div className="max-w-[1440px] mx-auto text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="nav-label text-[var(--accent)] text-[0.6rem] mb-8"
        >
          Private Enquiries
        </motion.p>

        {/* Hairline rule */}
        <motion.div
          className="w-12 h-px bg-[var(--accent)] mb-10 mx-auto"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          aria-hidden="true"
        />

        {/* Heading */}
        <motion.h2
          id="contact-cta-band-heading"
          {...fadeUp(0.1)}
          className="font-display text-[var(--foreground)] leading-tight mb-8 mx-auto"
          style={{
            fontSize: "clamp(2rem, 4vw, 4.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.015em",
            maxWidth: "780px",
          }}
        >
          {title}
        </motion.h2>

        {/* Body */}
        <motion.p
          {...fadeUp(0.25)}
          className="text-[var(--muted-fg)] font-light leading-relaxed mb-14 mx-auto"
          style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)", maxWidth: "520px" }}
        >
          {body}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.4)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-[var(--foreground)] text-[var(--background)] nav-label text-[0.6rem] px-10 py-4 hover:bg-[var(--accent-ink)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 cursor-pointer"
          >
            Contact Us
            <ArrowRight
              size={12}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>

          <Link
            href="/about"
            className="group inline-flex items-center gap-3 nav-label text-[var(--accent-ink)] text-[0.6rem] hover:text-[var(--foreground)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm cursor-pointer"
          >
            <span className="relative">
              Learn About Us
              <span
                className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300 ease-out"
                aria-hidden="true"
              />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
