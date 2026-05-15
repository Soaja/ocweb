import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkContent from "@/components/WorkContent";

export const metadata: Metadata = {
  title: "Work — OSTOIA&CO",
  description:
    "Selected case studies: brand architecture, conversion design, and digital authority for boutique travel brands across USA, Italy, and Turkey.",
};

export default function WorkPage() {
  return (
    <main>
      <Navbar />
      <WorkContent />
      <Footer />
    </main>
  );
}
