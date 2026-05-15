import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyContent, { type CaseStudyData } from "@/components/CaseStudyContent";

export const metadata: Metadata = {
  title: "Routes&Roads — OSTOIA&CO",
  description:
    "Full digital rebrand and conversion-first website for the premier USA adventure travel operator. 3× direct bookings.",
};

const data: CaseStudyData = {
  num: "01",
  brand: "Routes&Roads",
  location: "Colorado, USA",
  category: "Adventure Travel",
  tagline: "Luxury meets the wild. A complete digital transformation for the premier USA adventure travel operator.",
  year: "2025",
  services: ["Brand Architecture", "Conversion Design", "Digital Authority"],
  challenge:
    "Routes&Roads had the experiences — multi-day Rockies expeditions, Patagonia treks, Alaskan wilderness tours — but a digital presence that looked like every other mid-market adventure operator. Premium travellers were bouncing. Direct bookings were stagnant. The brand had no distinguishable voice, no SEO authority, and a website built on a generic template that undermined the very thing they were selling: exclusivity.",
  approach: [
    "Rebuilt brand identity from the ground up — new positioning as 'luxury wilderness', not just 'adventure travel'",
    "Designed a custom Next.js site engineered around a 3-step booking funnel (inspire → trust → convert)",
    "Implemented semantic HTML + structured data to capture high-intent long-tail queries",
    "Created a GEO content strategy so AI assistants name Routes&Roads when asked for luxury US adventure operators",
    "A/B tested hero CTAs, pricing presentation, and inquiry form placement over 60 days post-launch",
  ],
  results: [
    { value: "3×", label: "Direct bookings", sub: "vs. prior year" },
    { value: "61%", label: "Bounce rate drop", sub: "within 90 days" },
    { value: "4.2s → 1.1s", label: "Load time", sub: "Core Web Vitals" },
    { value: "Top 3", label: "Google ranking", sub: "target keywords" },
  ],
  testimonial: {
    quote:
      "OSTOIA didn't just build us a website — they rebuilt how we present ourselves to the world. The difference in the quality of inquiries alone has paid for the project ten times over.",
    author: "James Whitfield",
    role: "Founder, Routes&Roads",
  },
  nextHref: "/work/localway-sicily",
  nextBrand: "LocalWay Sicily",
};

export default function RoutesRoadsPage() {
  return (
    <main>
      <Navbar />
      <CaseStudyContent data={data} />
      <Footer />
    </main>
  );
}
