import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { listings, getListing, listingMeta, type Listing } from "@/lib/listings";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ContactCtaBand } from "@/components/site/ContactCtaBand";

const BASE_URL = "https://www.marisexclusive.com";

function buildListingJsonLd(l: Listing) {
  return {
    "@context": "https://schema.org",
    "@type": "Accommodation",
    name: l.name,
    description: l.description,
    image: `${BASE_URL}${l.hero}`,
    numberOfRooms: l.bedrooms,
    numberOfBathroomsTotal: l.bathrooms,
    ...(l.size
      ? {
          floorSize: {
            "@type": "QuantitativeValue",
            value: l.size.replace(/[^\d]/g, ""),
            unitCode: "MTK",
          },
        }
      : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: l.location,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: l.price,
      priceCurrency: "EUR",
      seller: {
        "@type": "RealEstateAgent",
        name: "Maris Exclusive",
        url: BASE_URL,
      },
    },
  };
}

// ─── Static params ──────────────────────────────────────────────────────────

export function generateStaticParams() {
  return listings.map((l) => ({ slug: l.slug }));
}

// ─── Metadata ───────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = getListing(slug);
  if (!l) return {};
  return {
    title: `${l.name}, ${l.location} — Maris Exclusive`,
    description: l.description.slice(0, 150),
  };
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function ListingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = getListing(slug);
  if (!l) notFound();

  // Build the key-facts bar dynamically — only include present fields
  const keyFacts = [
    { label: "Bedrooms", value: String(l.bedrooms) },
    { label: "Bathrooms", value: String(l.bathrooms) },
    { label: "Sleeps", value: String(l.sleeps) },
    ...(l.size ? [{ label: "Area", value: l.size }] : []),
    ...(l.levels ? [{ label: "Levels", value: String(l.levels) }] : []),
    { label: "Price", value: l.price === "Price on application" ? "On application" : l.price },
  ];

  const jsonLd = buildListingJsonLd(l);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <PageHero
        image={l.hero}
        alt={`${l.name} — ${l.tagline}`}
        eyebrow={`Properties for Rent · ${l.region}`}
        title={l.name}
        subtitle={`${l.location} · ${l.tagline}`}
      />

      {/* ── Key-facts bar ───────────────────────────────────────────────── */}
      <div
        className="bg-[var(--surface)] border-b border-[var(--border)] px-6 lg:px-16"
        aria-label="Key property facts"
      >
        <div className="max-w-[1440px] mx-auto">
          <dl className="flex flex-wrap items-stretch divide-x divide-[var(--border)]">
            {keyFacts.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center px-5 py-5 sm:px-8 sm:py-6 min-w-[80px] flex-1"
              >
                <dt
                  className="nav-label text-[var(--muted-fg)] text-[0.52rem] mb-1.5"
                  style={{ letterSpacing: "0.2em" }}
                >
                  {label.toUpperCase()}
                </dt>
                <dd
                  className="font-display text-[var(--foreground)] leading-none text-center"
                  style={{
                    fontSize: "clamp(1rem, 1.4vw, 1.4rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ── Description ─────────────────────────────────────────────────── */}
      <Section eyebrow="The Property" id="intro">
        <div className="max-w-3xl">
          <Reveal>
            <p
              className="font-display text-[var(--foreground)] leading-relaxed mb-8"
              style={{
                fontSize: "clamp(1.15rem, 1.7vw, 1.55rem)",
                fontWeight: 400,
                letterSpacing: "-0.01em",
              }}
            >
              {l.description.split(".")[0]}.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="text-[var(--muted-fg)] font-light leading-relaxed mb-10"
              style={{ fontSize: "clamp(0.9rem, 1.05vw, 1rem)" }}
            >
              {l.description.split(".").slice(1).join(".").trim()}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="w-8 h-px bg-[var(--accent)] mb-10" aria-hidden="true" />
          </Reveal>

          <Reveal delay={0.25}>
            <Link
              href="/properties-for-rent"
              className="group inline-flex items-center gap-2 nav-label text-[var(--accent-ink)] text-[0.6rem] hover:text-[var(--foreground)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm cursor-pointer"
            >
              <span
                className="relative"
                style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}
              >
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300 ease-out"
                  aria-hidden="true"
                />
                ← BACK TO PROPERTIES FOR RENT
              </span>
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ── Photo gallery ───────────────────────────────────────────────── */}
      <Section
        eyebrow="The Interiors"
        title={l.name}
        surface
        id="gallery"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-6">
          {l.gallery.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.06} className="group">
              <figure>
                <div
                  className="relative overflow-hidden mb-3"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-[var(--foreground)]/0 group-hover:bg-[var(--foreground)]/6 transition-colors duration-500"
                    aria-hidden="true"
                  />
                </div>
                <figcaption className="nav-label text-[var(--muted-fg)] text-[0.55rem]">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="nav-label text-[var(--muted-fg)] text-[0.55rem] text-center border-t border-[var(--border)] pt-6">
          Private viewings by appointment
        </p>
      </Section>

      {/* ── Amenities ───────────────────────────────────────────────────── */}
      <Section
        eyebrow="Amenities"
        title="Complete in Every Detail"
        id="amenities"
      >
        <Reveal delay={0.05}>
          <div className="border-t border-[var(--border)] pt-10">
            <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-6">
              {listingMeta(l).toUpperCase()}
            </p>
            <ul
              className="flex flex-wrap gap-2"
              aria-label={`Full list of amenities for ${l.name}`}
            >
              {l.amenities.map((amenity) => (
                <li
                  key={amenity}
                  className="px-4 py-2 border border-[var(--border)] nav-label text-[var(--muted-fg)] text-[0.58rem] bg-[var(--surface)] hover:border-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors duration-200"
                >
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <ContactCtaBand
        title="Arrange a Private Viewing"
        body={`${l.name} is available for discreet private viewings by appointment. Contact our advisors to discuss the property, availability, and rental terms in complete confidence.`}
      />
    </main>
  );
}
