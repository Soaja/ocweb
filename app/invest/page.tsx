import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InvestContent from "@/components/InvestContent";

export const metadata: Metadata = {
  title: "Investment — OSTOIA&CO",
  description:
    "See exactly what a conversion-engineered digital presence returns for your boutique travel brand. Calculate your potential uplift and request a tailored proposal.",
};

export default function InvestPage() {
  return (
    <main>
      <Navbar />
      <InvestContent />
      <Footer />
    </main>
  );
}
