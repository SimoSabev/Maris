import { Reveal } from "./Reveal";

// ─── OfferList ─────────────────────────────────────────────────────────────
// Editorial column/grid of {title, body} offer points with hairline dividers.
// Server Component.

type OfferItem = {
  title: string;
  body: string;
};

type OfferListProps = {
  items: OfferItem[];
};

export function OfferList({ items }: OfferListProps) {
  return (
    <ol
      className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[var(--border)]"
      aria-label="What we offer"
      role="list"
    >
      {items.map((item, index) => (
        <Reveal
          key={item.title}
          as="li"
          delay={index * 0.08}
          className="border-b border-[var(--border)] md:odd:border-r py-10 px-0 md:even:pl-10 md:odd:pr-10 list-none"
        >
          {/* Number indicator */}
          <p className="nav-label text-[var(--accent)] text-[0.58rem] mb-4">
            {String(index + 1).padStart(2, "0")}
          </p>

          {/* Offer title */}
          <h3
            className="font-display text-[var(--foreground)] mb-4 leading-tight"
            style={{
              fontSize: "clamp(1.2rem, 1.6vw, 1.6rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            {item.title}
          </h3>

          {/* Hairline rule */}
          <div className="w-6 h-px bg-[var(--accent)] mb-4" aria-hidden="true" />

          {/* Body copy */}
          <p
            className="text-[var(--muted-fg)] font-light leading-relaxed"
            style={{ fontSize: "clamp(0.875rem, 0.95vw, 0.95rem)" }}
          >
            {item.body}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
