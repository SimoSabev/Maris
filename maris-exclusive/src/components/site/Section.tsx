import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

// ─── Section ───────────────────────────────────────────────────────────────
// Content section wrapper with consistent vertical rhythm and max-width
// container. Optionally renders on --surface background.
// Server Component — no "use client" needed.

type SectionProps = {
  /** Short uppercase eyebrow label */
  eyebrow?: string;
  /** Section headline (rendered as h2) */
  title?: string;
  /** Section body content */
  children: ReactNode;
  /** Extra className applied to the outer <section> */
  className?: string;
  /** When true, renders the section on --surface background */
  surface?: boolean;
  /** aria-labelledby id — auto-derived from title if omitted */
  id?: string;
};

export function Section({
  eyebrow,
  title,
  children,
  className = "",
  surface = false,
  id,
}: SectionProps) {
  const sectionId = id ?? (title ? `section-${title.toLowerCase().replace(/\s+/g, "-")}` : undefined);

  return (
    <section
      className={[
        "py-24 lg:py-36 px-6 lg:px-16",
        surface ? "bg-[var(--surface)]" : "bg-[var(--background)]",
        className,
      ].join(" ")}
      aria-labelledby={title ? sectionId : undefined}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header block — only renders if eyebrow or title are present */}
        {(eyebrow || title) && (
          <div className="mb-14 lg:mb-20">
            {eyebrow && (
              <Reveal>
                <p className="nav-label text-[var(--accent)] text-[0.6rem] mb-4">
                  {eyebrow}
                </p>
              </Reveal>
            )}

            {/* Hairline rule under eyebrow */}
            {eyebrow && (
              <div className="w-8 h-px bg-[var(--border)] mb-6" aria-hidden="true" />
            )}

            {title && (
              <Reveal delay={0.1}>
                <h2
                  id={sectionId}
                  className="font-display text-[var(--foreground)]"
                  style={{
                    fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.1,
                  }}
                >
                  {title}
                </h2>
              </Reveal>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
