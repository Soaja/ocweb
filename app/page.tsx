import Navbar             from "@/components/Navbar";
import Hero               from "@/components/Hero";
import ProblemSection     from "@/components/ProblemSection";
import MethodSection      from "@/components/MethodSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ROICalculator      from "@/components/ROICalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection         from "@/components/CTASection";
import Footer             from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <MethodSection />
      <CaseStudiesSection />
      <ROICalculator />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
