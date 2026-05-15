import type { Metadata } from "next";
import Navbar  from "@/components/Navbar";
import Footer  from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Start a Project — OSTOIA&CO",
  description:
    "Tell us about your boutique travel brand. We'll design and build a digital presence that converts — and one that AI recommends.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
