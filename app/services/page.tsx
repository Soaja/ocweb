import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services — OSTOIA&CO",
  description:
    "Brand architecture, conversion-first web design, and digital authority for boutique travel brands. Four ways we grow your presence online.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesContent />
      <Footer />
    </main>
  );
}
