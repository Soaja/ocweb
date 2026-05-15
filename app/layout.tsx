import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OSTOIA&CO — Premium Digital Agency for Boutique Travel Brands",
  description:
    "We design and build digital presences for boutique travel brands — tour operators, boutique hotels, independent travel agencies. Based in Milan. Clients in Europe and USA.",
  keywords: [
    "web design boutique hotel",
    "tour operator website design",
    "travel agency digital agency",
    "tourism web design Milan",
    "boutique travel branding",
  ],
  authors: [{ name: "OSTOIA&CO", url: "https://ostoia.co" }],
  openGraph: {
    title: "OSTOIA&CO — Premium Digital Agency for Boutique Travel Brands",
    description:
      "Your experiences deserve a digital presence that matches. We build for the travel brands that refuse to be ordinary.",
    type: "website",
    locale: "en_US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OSTOIA&CO",
  url: "https://ostoia.co",
  logo: "https://ostoia.co/og-image.jpg",
  description:
    "Premium digital agency specialising in boutique travel brands. Brand architecture, conversion design, and digital authority for tour operators worldwide.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Milan",
    addressCountry: "IT",
  },
  areaServed: ["Europe", "United States", "Global"],
  serviceType: [
    "Brand Architecture",
    "Web Design",
    "SEO",
    "Digital Marketing",
    "Conversion Rate Optimisation",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@ostoia.co",
    contactType: "customer service",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
