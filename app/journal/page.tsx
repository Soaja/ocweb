import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JournalContent from "@/components/JournalContent";

export const metadata: Metadata = {
  title: "Journal — OSTOIA&CO",
  description:
    "Strategy, design, and digital authority insights for boutique travel brands. GEO, conversion design, and SEO that actually works.",
};

export default function JournalPage() {
  return (
    <main>
      <Navbar />
      <JournalContent />
      <Footer />
    </main>
  );
}
