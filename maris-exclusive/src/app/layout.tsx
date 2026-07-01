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
    "luxury real estate",
    "luxury villas",
    "yacht charter",
    "yacht brokerage",
    "interior design",
    "Monaco property",
    "Greece villas",
    "Mykonos villas",
    "Courchevel chalets",
    "private advisory",
    "exclusive properties",
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
    "Monaco",
    "France",
    "Greece",
    "Italy",
    "Middle East",
    "London",
    "Spain",
  ],
  knowsAbout: [
    "luxury real estate",
    "yacht brokerage",
    "interior design",
    "villa rentals",
    "property acquisition",
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
