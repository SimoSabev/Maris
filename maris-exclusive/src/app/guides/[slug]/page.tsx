import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ContactCtaBand } from "@/components/site/ContactCtaBand";
import { guides, getGuide, type Guide } from "@/lib/guides";

const BASE_URL = "https://www.marisexclusive.com";

function buildGuideJsonLd(g: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.h1,
    description: g.metaDescription,
    url: `${BASE_URL}/guides/${g.slug}`,
    about: g.keywords,
    author: { "@type": "Organization", name: "Maris Exclusive", url: BASE_URL },
    publisher: { "@type": "Organization", name: "Maris Exclusive", url: BASE_URL },
    inLanguage: "en",
  };
}

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    keywords: g.keywords,
    alternates: { canonical: `${BASE_URL}/guides/${g.slug}` },
    openGraph: {
      type: "article",
      title: g.metaTitle,
      description: g.metaDescription,
      url: `${BASE_URL}/guides/${g.slug}`,
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const jsonLd = buildGuideJsonLd(g);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Typographic header */}
      <Section eyebrow={g.eyebrow} id="intro">
        <Reveal>
          <h1
            className="font-display text-[var(--foreground)] leading-[1.05]"
            style={{
              fontSize: "clamp(2rem, 4vw, 4.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            {g.h1}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p
            className="font-display text-[var(--foreground)] leading-relaxed mt-6 max-w-3xl"
            style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.4rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            {g.intro}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="w-12 h-px bg-[var(--accent)] mt-10" aria-hidden="true" />
        </Reveal>
      </Section>

      {/* Body sections */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {g.sections.map((section, index) => (
          <div
            key={section.heading}
            className="border-t border-[var(--border)] py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16"
          >
            <div className="lg:col-span-5">
              <Reveal delay={0.04}>
                <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-5">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2
                  className="font-display text-[var(--foreground)] leading-tight"
                  style={{
                    fontSize: "clamp(1.5rem, 2.6vw, 2.6rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {section.heading}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              {section.body.map((paragraph, pIndex) => (
                <Reveal key={pIndex} delay={0.14 + pIndex * 0.06}>
                  <p
                    className="text-[var(--muted-fg)] font-light leading-relaxed mb-5 last:mb-0"
                    style={{ fontSize: "clamp(0.9rem, 1.05vw, 1.05rem)", maxWidth: "620px" }}
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        {/* Related internal links */}
        <div className="border-t border-[var(--border)] py-12">
          <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-6">Related</p>
          <ul className="flex flex-wrap gap-3">
            {g.related.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 border border-[var(--border)] nav-label text-[var(--muted-fg)] text-[0.58rem] bg-[var(--surface)] hover:border-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-b border-[var(--border)]" aria-hidden="true" />
      </div>

      <ContactCtaBand
        title="Enquire in Confidence"
        body="Our advisors are available by appointment to discuss opportunities across every market we serve."
      />
    </main>
  );
}
