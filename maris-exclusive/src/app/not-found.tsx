import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center"
      aria-labelledby="not-found-heading"
    >
      {/* Eyebrow */}
      <p
        className="nav-label text-[var(--accent)] mb-6"
        style={{ fontSize: "0.6rem", letterSpacing: "0.22em" }}
      >
        404
      </p>

      {/* Heading */}
      <h1
        id="not-found-heading"
        className="font-display text-[var(--foreground)] mb-5"
        style={{
          fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        Page Not Found
      </h1>

      {/* Divider */}
      <div
        className="w-8 h-px bg-[var(--accent)] mb-6"
        aria-hidden="true"
      />

      {/* Body copy */}
      <p
        className="text-[var(--muted-fg)] font-light leading-relaxed max-w-md mb-10"
        style={{ fontSize: "clamp(0.9rem, 1.05vw, 1rem)" }}
      >
        The page you are looking for may have moved or no longer exists. Our
        advisors are always available to help you find what you need.
      </p>

      {/* Actions */}
      <nav aria-label="Recovery navigation" className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--foreground)] text-[var(--background)] nav-label hover:bg-[var(--accent-ink)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}
        >
          RETURN HOME
        </Link>

        <Link
          href="/properties-for-sale"
          className="inline-flex items-center gap-2 px-7 py-3 border border-[var(--border)] text-[var(--foreground)] nav-label hover:border-[var(--accent)] hover:text-[var(--accent-ink)] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          style={{ fontSize: "0.6rem", letterSpacing: "0.18em" }}
        >
          VIEW PROPERTIES
        </Link>
      </nav>
    </main>
  );
}
