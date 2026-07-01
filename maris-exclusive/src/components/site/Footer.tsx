import Link from "next/link";

const NAV_COLUMNS = [
  {
    heading: "Real Estate",
    links: [
      { label: "Properties for Sale", href: "/properties-for-sale" },
      { label: "Properties for Rent", href: "/properties-for-rent" },
    ],
  },
  {
    heading: "Yachting",
    links: [
      { label: "Yachts for Sale", href: "/yachts-for-sale" },
      { label: "Yachts for Charter", href: "/yachts-for-charter" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Interior Design & Staging", href: "/interior-design" },
      { label: "Locations", href: "/locations" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[var(--surface)] border-t border-[var(--border)]"
      role="contentinfo"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-14 pb-10">

        {/* Top row: wordmark + tagline */}
        <div className="mb-12 lg:mb-16">
          <p className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-[var(--foreground)] mb-2">
            Maris Exclusive
          </p>
          <p
            className="font-display text-[1.35rem] text-[var(--muted-fg)] leading-snug"
            style={{ fontStyle: "italic", fontWeight: 400 }}
          >
            Where Exceptional Acquisition Meets Finer Interiors
          </p>
        </div>

        {/* Nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14 border-t border-[var(--border)] pt-10">
          {NAV_COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="nav-label text-[var(--accent)] mb-4 text-[0.6rem]">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--muted-fg)] hover:text-[var(--foreground)] transition-colors duration-200 text-sm font-light leading-relaxed focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)] rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row: location + copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[var(--border)] pt-6">
          <p className="nav-label text-[var(--accent)] text-[0.6rem]">
            Between Monaco &amp; Greece
          </p>
          <p className="text-[var(--muted-fg)] text-xs font-light tracking-wide">
            &copy; {year} Maris Exclusive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
