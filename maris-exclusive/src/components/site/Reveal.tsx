"use client";

import { useReducedMotion, motion } from "motion/react";
import type { ReactNode, ElementType, ComponentPropsWithoutRef } from "react";

// ─── Reveal ────────────────────────────────────────────────────────────────
// Reusable whileInView fade + rise wrapper. Honors prefers-reduced-motion.
// Renders the supplied `as` element tag (default: div) so callsites keep
// semantic correctness without adding extra wrappers.

type RevealProps<T extends ElementType = "div"> = {
  /** Content to animate in */
  children: ReactNode;
  /** Optional stagger delay in seconds (default 0) */
  delay?: number;
  /** Override the rendered element (default: "div") */
  as?: T;
  /** Additional className */
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  children,
  delay = 0,
  as,
  className,
  ...rest
}: RevealProps<T>) {
  const shouldReduceMotion = useReducedMotion();

  // Build a motion component from the requested element type.
  // motion() accepts any valid HTML/SVG tag string or React component.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionEl = motion(as ?? ("div" as any));

  return (
    <MotionEl
      {...rest}
      className={className}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, y: 20 }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0 }
      }
      viewport={{ once: true }}
      transition={{
        duration: shouldReduceMotion ? 0.25 : 0.65,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionEl>
  );
}
