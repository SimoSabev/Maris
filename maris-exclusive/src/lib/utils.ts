// Minimal cn() utility — merges class names without external dependencies.
// When clsx + tailwind-merge are available, swap this for:
//   import { type ClassValue, clsx } from "clsx";
//   import { twMerge } from "tailwind-merge";
//   export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

type ClassValue = string | number | boolean | null | undefined | ClassValue[];

function clsx(...inputs: ClassValue[]): string {
  const classes: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (typeof input === "string" || typeof input === "number") {
      classes.push(String(input));
    } else if (Array.isArray(input)) {
      const inner = clsx(...input);
      if (inner) classes.push(inner);
    }
  }
  return classes.join(" ");
}

export function cn(...inputs: ClassValue[]): string {
  return clsx(...inputs);
}
