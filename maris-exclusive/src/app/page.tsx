import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { LocationsSection } from "@/components/sections/LocationsSection";
import { SignatureSection } from "@/components/sections/SignatureSection";
import { InteriorSection } from "@/components/sections/InteriorSection";
import { ContactCta } from "@/components/sections/ContactCta";

export const metadata = {
  title: "Maris Exclusive — Luxury Real Estate, Yachting & Interiors",
  description:
    "A private advisory house for exceptional real estate, yacht acquisition and interior design. Based between Monaco and Greece. Discreet, curated, and by appointment.",
};

export default function Home() {
  return (
    <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <LocationsSection />
        <SignatureSection />
        <InteriorSection />
        <ContactCta />
    </main>
  );
}
