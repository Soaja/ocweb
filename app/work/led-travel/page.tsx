import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyContent, { type CaseStudyData } from "@/components/CaseStudyContent";

export const metadata: Metadata = {
  title: "LED Travel — OSTOIA&CO",
  description:
    "SEO + GEO overhaul positioning LED Travel as Turkey's premier cultural tour authority. #1 on Google Turkey.",
};

const data: CaseStudyData = {
  num: "03",
  brand: "LED Travel",
  location: "Istanbul, Turkey",
  category: "Cultural Journeys",
  tagline: "Turkey's premier cultural tour authority — on Google and in every AI that matters.",
  year: "2024",
  services: ["Technical SEO", "GEO Optimization", "Content Authority"],
  challenge:
    "LED Travel specialised in deep-dive cultural tours across Turkey — Ottoman history, Cappadocia hot air journeys, Ephesus scholar-guided expeditions. Despite a decade of five-star reviews and a loyal international client base, they ranked on page 4 for their core keywords. Larger OTAs dominated Google. Worse, when travellers asked ChatGPT or Perplexity for 'the best cultural tour operator in Turkey', LED Travel simply did not appear. They were invisible in both traditional and AI-powered search.",
  approach: [
    "Complete technical SEO audit — fixed 340+ crawl errors, canonicalization issues, and duplicate content problems",
    "Built a topical authority cluster: 40+ expert articles covering Turkish cultural history, regions, and travel planning",
    "Implemented GEO schema and structured data specifically designed for AI model training and retrieval",
    "Earned high-authority backlinks from travel publications, cultural institutions, and tourism boards",
    "Optimised Core Web Vitals from F to A across all pages — load time from 6.8s to under 1.5s",
  ],
  results: [
    { value: "#1", label: "Google Turkey", sub: "target keywords" },
    { value: "340%", label: "Organic traffic", sub: "within 6 months" },
    { value: "AI visible", label: "ChatGPT & Perplexity", sub: "recommended" },
    { value: "1.5s", label: "Load time", sub: "from 6.8s" },
  ],
  testimonial: {
    quote:
      "For years we competed on experience and lost on digital. OSTOIA flipped that completely. We now rank above operators with ten times our marketing budget, and AI assistants recommend us by name.",
    author: "Ahmet Yilmaz",
    role: "Director, LED Travel",
  },
  nextHref: "/work/routes-roads",
  nextBrand: "Routes&Roads",
};

export default function LedTravelPage() {
  return (
    <main>
      <Navbar />
      <CaseStudyContent data={data} />
      <Footer />
    </main>
  );
}
