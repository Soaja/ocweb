import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About — OSTOIA&CO",
  description:
    "A digital studio built for one industry: boutique travel brands. Based in Milan, working globally. Strategy, craft, and digital authority.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutContent />
      <Footer />
    </main>
  );
}
