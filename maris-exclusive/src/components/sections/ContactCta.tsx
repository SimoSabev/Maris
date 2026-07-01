// ─── ContactCta ────────────────────────────────────────────────────────────
// Home-page contact section. Delegates rendering to the shared ContactCtaBand
// primitive so inner pages can reuse the same band without reimplementing it.

import { ContactCtaBand } from "@/components/site/ContactCtaBand";

export function ContactCta() {
  return <ContactCtaBand />;
}
