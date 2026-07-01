import Image from "next/image";

// ─── PageHero ──────────────────────────────────────────────────────────────
// Inner-page hero: ~58vh, full-bleed next/image, bottom-left dark scrim,
// eyebrow label + large Cormorant title. Intentionally NOT "use client" —
// it's a pure presentational Server Component.

type PageHeroProps = {
  /** Path to the hero image (relative to /public) */
  image: string;
  /** Descriptive alt text for the image */
  alt: string;
  /** Short uppercase eyebrow label, e.g. "Real Estate · For Sale" */
  eyebrow: string;
  /** Large serif headline */
  title: string;
  /** Optional secondary line beneath the title */
  subtitle?: string;
};

export function PageHero({ image, alt, eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(420px, 58vh, 760px)" }}
      aria-labelledby="page-hero-title"
    >
      {/* Full-bleed image — priority because it IS the LCP element */}
      <Image
        src={image}
        alt={alt}
        fill
        sizes="100vw"
        priority
        className="object-cover object-center"
      />

      {/* Bottom-left gradient scrim for legibility */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, rgba(20,17,14,0.76) 0%, rgba(20,17,14,0.42) 48%, rgba(20,17,14,0.06) 100%)",
        }}
      />

      {/* Text content — aligned bottom-left */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 lg:px-16 pb-14 lg:pb-20 max-w-[1440px] mx-auto w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="nav-label text-white/70 text-[0.65rem] mb-5">{eyebrow}</p>

          {/* Title */}
          <h1
            id="page-hero-title"
            className="font-display text-white leading-[1.05]"
            style={{
              fontSize: "clamp(2.4rem, 5.5vw, 6rem)",
              fontWeight: 400,
              letterSpacing: "-0.015em",
            }}
          >
            {title}
          </h1>

          {/* Optional subtitle */}
          {subtitle && (
            <p
              className="text-white/75 font-light leading-relaxed mt-5"
              style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)", maxWidth: "520px" }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
