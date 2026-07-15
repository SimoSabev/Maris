"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

// ─── ListingGrid ───────────────────────────────────────────────────────────
// Placeholder portfolio grid. Cards feature next/image (lazy), title, optional
// meta, and a subtle hover zoom + lift. A caption notes the stock-placeholder
// status for agents reviewing the codebase.

type ListingItem = {
  /** Path relative to /public */
  image: string;
  /** Alt text for the image (required for accessibility) */
  alt?: string;
  /** Property or vessel title */
  title: string;
  /** Optional metadata line, e.g. "Monaco · 6 bed · On request" */
  meta?: string;
  /** Optional internal href — wraps the card in a Next.js Link when present */
  href?: string;
};

type ListingGridProps = {
  items: ListingItem[];
  /** Caption shown below the grid */
  note?: string;
  /** Override the caption's font size, e.g. "3rem". Applied inline — .nav-label's font-size wins over a Tailwind class at equal specificity, so a class override alone won't render. */
  noteFontSize?: string;
};

const DEFAULT_NOTE =
  "Selected representation · full portfolio available on enquiry";

// stock placeholder — all images in this grid are swappable Unsplash/asset files

function ListingCard({
  item,
  index,
  shouldReduceMotion,
}: {
  item: ListingItem;
  index: number;
  shouldReduceMotion: boolean | null;
}) {
  const inner = (
    <>
      {/* Image wrapper */}
      <div
        className="relative overflow-hidden mb-4"
        style={{ aspectRatio: "4/3" }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={shouldReduceMotion ? {} : { scale: 1.04 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <Image
            src={item.image}
            alt={item.alt ?? item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center"
            loading="lazy"
          />
          {/* Subtle lift overlay */}
          <div
            className="absolute inset-0 bg-[var(--foreground)]/0 group-hover:bg-[var(--foreground)]/8 transition-colors duration-500"
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* Card text */}
      <div>
        <h3
          className="font-display text-[var(--foreground)] leading-snug mb-1"
          style={{
            fontSize: "clamp(1rem, 1.2vw, 1.2rem)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          {item.title}
        </h3>
        {item.meta && (
          <p className="nav-label text-[var(--muted-fg)] text-[0.58rem]">
            {item.meta}
          </p>
        )}
        {item.href && (
          <p className="nav-label text-[var(--accent)] text-[0.58rem] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Property
          </p>
        )}
      </div>
    </>
  );

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={item.href ? "group cursor-pointer" : "group cursor-default"}
    >
      {item.href ? (
        <Link
          href={item.href}
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded-sm"
        >
          {inner}
        </Link>
      ) : (
        inner
      )}
    </motion.article>
  );
}

export function ListingGrid({
  items,
  note = DEFAULT_NOTE,
  noteFontSize,
}: ListingGridProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
        {items.map((item, index) => (
          <ListingCard
            key={item.title}
            item={item}
            index={index}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </div>

      {/* Caption */}
      <p
        className="nav-label text-[var(--muted-fg)] text-center border-t border-[var(--border)] pt-6"
        style={{ fontSize: noteFontSize ?? "0.58rem" }}
      >
        {note}
      </p>
    </div>
  );
}
