import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyContent, { type CaseStudyData } from "@/components/CaseStudyContent";

export const metadata: Metadata = {
  title: "LocalWay Sicily — OSTOIA&CO",
  description:
    "Redesigned booking funnel and SEO architecture for LocalWay Sicily. 8.2% average conversion rate.",
};

const data: CaseStudyData = {
  num: "02",
  brand: "LocalWay Sicily",
  location: "Palermo, Italy",
  category: "Boutique Tours",
  tagline: "The definitive digital presence for authentic Sicilian travel experiences.",
  year: "2024",
  services: ["UX/UI Design", "CRO", "Content Strategy"],
  challenge:
    "LocalWay ran extraordinary small-group tours through Sicily's less-visited regions — archaeological sites, family vineyards, coastal villages no tour bus reaches. Their website, however, was generic and cluttered, with a booking process so fragmented that 78% of visitors left before completing an inquiry. Their conversion rate sat at 1.4% — catastrophically below industry average for boutique operators. The business had the product. It needed the digital infrastructure.",
  approach: [
    "Ran a full UX audit with heatmaps and session recordings — identified 4 critical drop-off points in the booking flow",
    "Redesigned the inquiry form to a 3-step progressive disclosure model, cutting perceived friction by 70%",
    "Rebuilt the tour pages around 'experience language' — sensory descriptions, social proof, and trust signals at each scroll depth",
    "Implemented schema markup for tours, reviews, and FAQ — boosting rich snippet visibility",
    "Wrote a 12-article content hub positioning LocalWay as the authority on off-the-beaten-path Sicily",
  ],
  results: [
    { value: "8.2%", label: "Avg. conversion rate", sub: "from 1.4%" },
    { value: "5.8×", label: "Inquiry volume", sub: "same traffic" },
    { value: "#1–3", label: "Sicily tour keywords", sub: "Google Italy" },
    { value: "94", label: "PageSpeed score", sub: "Mobile" },
  ],
  testimonial: {
    quote:
      "We had the tours. We just weren't telling the story. OSTOIA showed us how to make people feel Sicily before they even book. The results speak for themselves.",
    author: "Giulia Romano",
    role: "Co-founder, LocalWay Sicily",
  },
  nextHref: "/work/led-travel",
  nextBrand: "LED Travel",
};

export default function LocalWaySicilyPage() {
  return (
    <main>
      <Navbar />
      <CaseStudyContent data={data} />
      <Footer />
    </main>
  );
}
