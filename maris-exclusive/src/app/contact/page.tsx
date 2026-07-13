import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { EnquiryForm } from "@/components/contact/EnquiryForm";

// ─── Metadata ──────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Contact — Maris Exclusive",
  description:
    "Private enquiries for luxury real estate, yachts, and interior design. Reach the Maris Exclusive team — based between Monaco and Greece.",
};

// ─── Page ──────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        image="/images/properties/chalet-nordea-spa.jpg"
        alt="Chalet Nordéa spa — a space of complete private calm"
        eyebrow="Private Enquiries"
        title="Contact"
        subtitle="All conversations are handled with complete discretion. We respond to every enquiry personally."
      />

      {/* Intro + form section */}
      <Section eyebrow="Get in Touch" id="enquiry">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">

          {/* Left column — editorial intro + contact details */}
          <div>
            <Reveal>
              <p
                className="font-display text-[var(--foreground)] leading-relaxed mb-10"
                style={{
                  fontSize: "clamp(1.1rem, 1.5vw, 1.45rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                Whether you are pursuing a singular property, planning a
                charter, or considering a transformation of an existing
                interior — we invite you to begin a conversation.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="w-8 h-px bg-[var(--accent)] mb-10" aria-hidden="true" />
            </Reveal>

            <Reveal delay={0.18}>
              <p
                className="text-[var(--muted-fg)] font-light leading-relaxed mb-12"
                style={{ fontSize: "clamp(0.875rem, 0.95vw, 0.975rem)" }}
              >
                Maris Exclusive operates as a private advisory house — not a
                listings portal. Every enquiry is reviewed by a principal, and
                we engage only with opportunities we can serve with genuine
                attention and expertise.
              </p>
            </Reveal>

            {/* Quiet contact block */}
            <Reveal delay={0.24}>
              <div
                className="border-t border-[var(--border)] pt-8 space-y-6"
                aria-label="Contact details"
              >
                {/* Location */}
                <div>
                  <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-2">
                    Based Between
                  </p>
                  <p
                    className="text-[var(--foreground)] font-light"
                    style={{ fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)" }}
                  >
                    Monaco &amp; Greece
                  </p>
                </div>

                {/* Email */}
                <div>
                  <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:sales@marisexclusive.com"
                    className="group inline-flex items-center gap-2 text-[var(--foreground)] font-light hover:text-[var(--accent-ink)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm"
                    style={{ fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)" }}
                  >
                    <Mail
                      size={13}
                      strokeWidth={1.5}
                      className="text-[var(--accent)] flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="relative">
                      sales@marisexclusive.com
                      <span
                        className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300 ease-out"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-2">
                    Phone
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href="tel:+306949661859"
                      className="group inline-flex items-center gap-2 text-[var(--foreground)] font-light hover:text-[var(--accent-ink)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm"
                      style={{ fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)" }}
                    >
                      <Phone
                        size={13}
                        strokeWidth={1.5}
                        className="text-[var(--accent)] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="relative">
                        +30 694 966 1859
                        <span
                          className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300 ease-out"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                    <a
                      href="https://wa.me/306949661859"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-[var(--foreground)] font-light hover:text-[var(--accent-ink)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm"
                      style={{ fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)" }}
                    >
                      <MessageCircle
                        size={13}
                        strokeWidth={1.5}
                        className="text-[var(--accent)] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="relative">
                        WhatsApp
                        <span
                          className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300 ease-out"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                    <a
                      href="tel:+33660051391"
                      className="group inline-flex items-center gap-2 text-[var(--foreground)] font-light hover:text-[var(--accent-ink)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm"
                      style={{ fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)" }}
                    >
                      <Phone
                        size={13}
                        strokeWidth={1.5}
                        className="text-[var(--accent)] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="relative">
                        +33 6 60 05 13 91
                        <span
                          className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--accent)] group-hover:w-full transition-all duration-300 ease-out"
                          aria-hidden="true"
                        />
                      </span>
                    </a>
                  </div>
                </div>

                {/* Response note */}
                <div className="pt-2">
                  <p
                    className="text-[var(--muted-fg)] font-light leading-relaxed italic"
                    style={{ fontSize: "clamp(0.8rem, 0.88vw, 0.875rem)" }}
                  >
                    We aim to respond to all enquiries within one business day.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column — the form */}
          <Reveal delay={0.08}>
            <EnquiryForm />
          </Reveal>
        </div>
      </Section>

      {/* Surface band — quiet brand note above the footer */}
      <section
        className="bg-[var(--surface)] border-t border-[var(--border)] py-16 lg:py-20 px-6 lg:px-16"
        aria-label="Discretion note"
      >
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Reveal>
            <p className="nav-label text-[var(--accent)] text-[0.6rem]">
              Maris Exclusive · Monaco &amp; Greece
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="text-[var(--muted-fg)] font-light leading-relaxed"
              style={{
                fontSize: "clamp(0.8rem, 0.9vw, 0.9rem)",
                maxWidth: "480px",
              }}
            >
              All communications are handled in complete confidence. We do not
              share client details with third parties under any circumstances.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
