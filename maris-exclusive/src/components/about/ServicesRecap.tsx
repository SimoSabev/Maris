import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

// ─── ServicesRecap ──────────────────────────────────────────────────────────
// Refined five-service list for the About page.
// Each service links to its dedicated route with an inline animated arrow.
// Server Component — no motion needed here; Reveal handles the scroll fade.

const SERVICES = [
  {
    title: "Properties for Sale",
    body: "Curated selection of signature villas, apartments, chalets and estates in premier coastal, city and mountain locations.",
    href: "/properties-for-sale",
    eyebrow: "Real Estate",
  },
  {
    title: "Properties for Rent",
    body: "Short- and long-term luxury and holiday rentals, thoughtfully selected and carefully managed for seamless stays.",
    href: "/properties-for-rent",
    eyebrow: "Real Estate",
  },
  {
    title: "Yachts for Sale",
    body: "A refined portfolio of luxury yachts and superyachts, with expert advice on acquisition, valuation and ownership transition.",
    href: "/yachts-for-sale",
    eyebrow: "Yachting",
  },
  {
    title: "Yachts for Charter",
    body: "Exclusive charters in prime Mediterranean and Middle Eastern cruising locations, customised itineraries and full-service crewed options.",
    href: "/yachts-for-charter",
    eyebrow: "Yachting",
  },
  {
    title: "Interior Design, Renovation & Staging",
    body: "Turnkey interior design, renovation and staging services which enhance the value of the asset and accelerate sales — from concept to completion.",
    href: "/interior-design",
    eyebrow: "Interiors",
  },
] as const;

export function ServicesRecap() {
  return (
    <section
      className="bg-[var(--background)] py-24 lg:py-36 px-6 lg:px-16"
      aria-labelledby="services-recap-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="mb-14 lg:mb-20">
          <Reveal>
            <p className="nav-label text-[var(--accent)] text-[0.6rem] mb-4">
              Our Services
            </p>
          </Reveal>
          <div className="w-8 h-px bg-[var(--border)] mb-6" aria-hidden="true" />
          <Reveal delay={0.1}>
            <h2
              id="services-recap-heading"
              className="font-display text-[var(--foreground)]"
              style={{
                fontSize: "clamp(1.8rem, 3.2vw, 3.2rem)",
                fontWeight: 400,
                letterSpacing: "-0.015em",
                lineHeight: 1.1,
              }}
            >
              Five ways we serve our clients
            </h2>
          </Reveal>
        </div>

        {/* Service list */}
        <ol
          className="divide-y divide-[var(--border)] border-t border-[var(--border)]"
          role="list"
          aria-label="Services offered"
        >
          {SERVICES.map((service, index) => (
            <Reveal
              key={service.href}
              as="li"
              delay={index * 0.07}
              className="list-none"
            >
              <Link
                href={service.href}
                className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 py-8 lg:py-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded-sm"
              >
                {/* Eyebrow + number column */}
                <div className="flex-none w-36">
                  <p className="nav-label text-[var(--accent)] text-[0.58rem]">
                    {service.eyebrow}
                  </p>
                </div>

                {/* Main content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-display text-[var(--foreground)] leading-tight mb-3 group-hover:text-[var(--accent-ink)] transition-colors duration-300"
                    style={{
                      fontSize: "clamp(1.1rem, 1.5vw, 1.5rem)",
                      fontWeight: 400,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-[var(--muted-fg)] font-light leading-relaxed"
                    style={{ fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)" }}
                  >
                    {service.body}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex-none self-center">
                  <ArrowRight
                    size={16}
                    strokeWidth={1.25}
                    className="text-[var(--accent)] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
