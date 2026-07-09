"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

// ─── Nav structure ─────────────────────────────────────────────────────────

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Properties for Sale", href: "/properties-for-sale" },
  { label: "Properties for Rent", href: "/properties-for-rent" },
  { label: "Yachts for Sale", href: "/yachts-for-sale" },
  { label: "Yachts for Charter", href: "/yachts-for-charter" },
  { label: "Interior Design", href: "/interior-design" },
  { label: "Locations", href: "/locations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ─── Header ────────────────────────────────────────────────────────────────

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close sheet on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when sheet is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[var(--background)]/92 backdrop-blur-md border-b border-[var(--border)]"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
        role="banner"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 lg:h-20 flex items-center justify-between">

          {/* Wordmark */}
          <Link
            href="/"
            className="flex-shrink-0 group flex items-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
            aria-label="Maris Exclusive — home"
          >
            <Image
              src={scrolled ? "/images/brand/maris-icon-dark.png" : "/images/brand/maris-icon-white.png"}
              alt="Maris Exclusive"
              width={150}
              height={60}
              priority
              className={[
                "h-[72px] lg:h-[84px] w-auto transition-opacity duration-200",
                scrolled ? "" : "drop-shadow-sm",
              ].join(" ")}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-6 xl:gap-7"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "nav-label nav-link-underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm",
                  scrolled
                    ? "text-[var(--muted-fg)] hover:text-[var(--foreground)]"
                    : "text-white/80 hover:text-white drop-shadow-sm",
                ].join(" ")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu trigger */}
          <button
            className={[
              "lg:hidden p-2 -mr-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded",
              scrolled ? "text-[var(--foreground)]" : "text-white",
            ].join(" ")}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile sheet overlay */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Backdrop */}
        <div
          className={[
            "absolute inset-0 bg-[var(--foreground)]/40 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Sheet panel */}
        <nav
          className={[
            "absolute top-0 right-0 h-full w-72 bg-[var(--background)] border-l border-[var(--border)]",
            "flex flex-col pt-20 pb-12 px-8",
            "transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          {/* Close button inside sheet */}
          <button
            className="absolute top-5 right-6 p-1 text-[var(--muted-fg)] hover:text-[var(--foreground)] transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          {/* Wordmark in sheet */}
          <p className="nav-label text-[var(--accent)] mb-10">Maris Exclusive</p>

          <ul className="flex flex-col gap-1" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 border-b border-[var(--border)] nav-label text-[var(--muted-fg)] hover:text-[var(--foreground)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-auto nav-label text-[var(--accent)] text-[0.6rem]">
            Between Monaco &amp; Greece
          </p>
        </nav>
      </div>
    </>
  );
}
