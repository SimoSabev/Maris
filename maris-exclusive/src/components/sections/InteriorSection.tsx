"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

// ─── InteriorSection ───────────────────────────────────────────────────────
// Interior Design teaser — warm image, "by appointment" editorial feel.

export function InteriorSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      className="bg-[var(--background)] py-0"
      aria-labelledby="interior-heading"
    >
      <div className="max-w-[1440px] mx-auto px-0 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">

          {/* Image — large, left column */}
          <div className="relative overflow-hidden order-2 lg:order-1" style={{ minHeight: "520px" }}>
            <motion.div
              className="absolute inset-0"
              whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
            >
              <Image
                src="/images/properties/villa-metis-living.jpg"
                alt="Villa Metis beamed living room with Aegean views"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
                loading="lazy"
              />
            </motion.div>
            {/* Warm amber tint overlay — reinforces interior mood */}
            <div
              className="absolute inset-0 mix-blend-multiply"
              aria-hidden="true"
              style={{ background: "rgba(156, 140, 120, 0.12)" }}
            />
          </div>

          {/* Text — right column */}
          <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20 lg:py-28 bg-[var(--surface)] order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="nav-label text-[var(--accent)] text-[0.6rem] mb-6"
            >
              Interior Design & Staging
            </motion.p>

            <motion.div
              className="w-8 h-px bg-[var(--accent)] mb-8"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              aria-hidden="true"
            />

            <motion.h2
              id="interior-heading"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" as const }}
              className="font-display text-[var(--foreground)] leading-tight mb-8"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 3.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              Spaces Conceived
              <br />
              With Intention
            </motion.h2>

            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" as const }}
              className="text-[var(--muted-fg)] leading-relaxed font-light mb-6"
              style={{ fontSize: "clamp(0.88rem, 1vw, 0.97rem)" }}
            >
              Turnkey interior design, renovation and staging services which enhance the value of the
              asset and accelerate sales — tailored to the specific property and yacht, from concept
              to completion.
            </motion.p>

            <motion.p
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.38, ease: "easeOut" as const }}
              className="text-[var(--muted-fg)] leading-relaxed font-light mb-12"
              style={{ fontSize: "clamp(0.88rem, 1vw, 0.97rem)", fontStyle: "italic" }}
            >
              Consultations by appointment.
            </motion.p>

            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.48, ease: "easeOut" as const }}
            >
              <Link
                href="/interior-design"
                className="group inline-flex items-center gap-3 nav-label text-[var(--accent-ink)] text-[0.6rem] hover:text-[var(--foreground)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm cursor-pointer"
              >
                <span className="relative">
                  Explore Interior Design
                  <span
                    className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300 ease-out"
                    aria-hidden="true"
                  />
                </span>
                <ArrowRight
                  size={12}
                  strokeWidth={1.5}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
