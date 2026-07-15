import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const BASE_URL = "https://www.marisexclusive.com";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Maris Exclusive — Real Estate, Yachting & Interior Advisory",
    template: "%s — Maris Exclusive",
  },
  description:
    "Where Exceptional Acquisition Meets Finer Interiors. A private advisory house for curated real estate, yachts and interior design — based between Monaco and Greece.",
  keywords: [
    // Core services
    "luxury real estate",
    "real estate",
    "buy villa",
    "luxury villa",
    "luxury villas for sale",
    "villas for sale",
    "luxury",
    "luxury property boutique",
    "charter",
    "yacht charter",
    "yacht charters",
    "charter yachts",
    "luxury yacht charter",
    "yacht brokerage",
    "yachts for sale",
    "superyacht charter",
    "interior design",
    "luxury interior design",
    "yacht interior design",
    "private advisory",
    "exclusive properties",
    // Geo × service — the client's priority markets
    "luxury real estate Monaco",
    "Monaco property for sale",
    "villas south of France",
    "French Riviera villas",
    "luxury villas Greece",
    "Mykonos villas",
    "luxury real estate Italy",
    "luxury real estate Dubai",
    "Abu Dhabi luxury property",
    "Riyadh luxury real estate",
    "Saudi Arabia luxury villas",
    "London luxury property",
    "Marbella Ibiza villas Spain",
    "Courchevel chalets",
    "Maris Exclusive",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Maris Exclusive",
    locale: "en_GB",
    url: BASE_URL,
    title: "Maris Exclusive — Real Estate, Yachting & Interior Advisory",
    description:
      "Where Exceptional Acquisition Meets Finer Interiors. A private advisory house for curated real estate, yachts and interior design — based between Monaco and Greece.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maris Exclusive — Real Estate, Yachting & Interior Advisory",
    description:
      "Where Exceptional Acquisition Meets Finer Interiors. A private advisory house for curated real estate, yachts and interior design — based between Monaco and Greece.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F4",
  colorScheme: "light",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Maris Exclusive",
  description:
    "Where Exceptional Acquisition Meets Finer Interiors. A private advisory house for curated real estate, yachts and interior design — based between Monaco and Greece.",
  url: BASE_URL,
  areaServed: [
    { "@type": "Country", name: "Monaco" },
    { "@type": "Country", name: "France" },
    { "@type": "Country", name: "Greece" },
    { "@type": "Country", name: "Italy" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Spain" },
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "City", name: "Riyadh" },
    { "@type": "City", name: "Mykonos" },
    { "@type": "City", name: "London" },
    { "@type": "City", name: "Monte Carlo" },
  ],
  knowsAbout: [
    "luxury real estate",
    "yacht brokerage",
    "yacht charter",
    "interior design",
    "villa rentals",
    "property acquisition",
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Real Estate Sales & Acquisition" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Property Rentals" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yacht Brokerage & Sales" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yacht Charter" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Design & Staging" } },
  ],
  slogan: "Where Exceptional Acquisition Meets Finer Interiors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable}`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
