import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AIRMS | Accelerated Insurance & Risk Management Services | Canada",
    template: "%s | AIRMS",
  },
  description:
    "Accelerated Insurance & Risk Management Services (AIRMS) is a licensed Canadian commercial insurance brokerage. Tailored risk management solutions including general liability, property, cyber liability, professional liability, and more.",
  keywords: [
    "commercial insurance Canada",
    "insurance broker Ontario",
    "commercial liability insurance Canada",
    "business insurance Canada",
    "risk management Canada",
    "cyber insurance Canada",
    "professional liability insurance Canada",
    "AIRMS insurance",
    "Stoneridge Insurance Brokers",
  ],
  authors: [{ name: "AIRMS" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://airms.ca",
    siteName: "Accelerated Insurance & Risk Management Services",
    title: "AIRMS | Commercial Insurance Brokers | Canada",
    description:
      "Licensed commercial insurance brokers serving businesses across Canada. Tailored risk management solutions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIRMS | Commercial Insurance Brokers | Canada",
    description: "Licensed commercial insurance brokers serving businesses across Canada.",
  },
  other: {
    "geo.region": "CA-ON",
    "geo.placename": "Hamilton",
    "geo.position": "43.2166;-79.9960",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "Accelerated Insurance & Risk Management Services",
              alternateName: "AIRMS",
              url: "https://airms.ca",
              telephone: "+1-416-457-6557",
              email: "info@airms.ca",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1336 Sandhill Drive, Unit 2",
                addressLocality: "Hamilton",
                addressRegion: "ON",
                postalCode: "L9G4V5",
                addressCountry: "CA",
              },
              description:
                "Ontario-based commercial insurance brokerage specializing in risk management solutions for businesses across Canada. A member of SIB Corp., operating as Stoneridge Insurance Brokers.",
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
