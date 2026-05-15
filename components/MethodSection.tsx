"use client";

import { useEffect, useRef } from "react";

const PILLARS = [
  {
    num: "01",
    title: "Brand Architecture",
    sub: "Your story, told with precision",
    desc: "We distill your identity into copy, visual language, and structure that resonates with premium travelers — from the first scroll to the final booking.",
    tags: ["Brand voice", "Visual identity", "Copywriting"],
  },
  {
    num: "02",
    title: "Conversion Design",
    sub: "Beautiful that actually books",
    desc: "Stunning is the baseline. Every layout decision, CTA placement, and interaction is engineered to turn browsers into bookers and inquiries into revenue.",
    tags: ["UX/UI", "CRO", "Motion design"],
  },
  {
    num: "03",
    title: "Digital Authority",
    sub: "Findable — on Google and on AI",
    desc: "Technical SEO, GEO optimisation (ChatGPT, Claude, Perplexity), and content strategy that compound over time. We build brands that get recommended.",
    tags: ["SEO", "GEO", "Content"],
  },
];

export default function MethodSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let played = false;
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || played) return;
        played = true;
        observer.disconnect();

        const { gsap } = await import("gsap");
        gsap.from(headRef.current, { opacity: 0, y: 32, duration: 0.9, ease: "power3.out" });
        gsap.from(
          pillarsRef.current?.querySelectorAll(".pillar-card") ?? [],
          { opacity: 0, y: 40, stagger: 0.15, duration: 0.75, ease: "power3.out", delay: 0.3 }
        );
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-navy-950 py-20 md:py-36 px-5 md:px-16 overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-10 md:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[10px] tracking-[0.38em] text-gold/50 uppercase">02 — Our method</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2
              className="font-cormorant font-bold text-cream text-balance"
              style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
              }}
            >
              Three pillars.<br />
              <em
                className="not-italic"
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 50%, #C9A84C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                One outcome.
              </em>
            </h2>
            <p className="font-inter text-[13px] md:text-[14px] leading-[1.7] text-cream/40 max-w-[320px] md:text-right">
              Everything we build is engineered around one metric: more qualified bookings for your brand.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06]">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="pillar-card group relative bg-navy-950 p-6 md:p-10 flex flex-col gap-4 md:gap-6 hover:bg-navy-900/60 transition-colors duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)" }}
              />

              {/* Number */}
              <span
                className="font-cormorant font-bold text-gold/10 group-hover:text-gold/20 transition-colors duration-500 select-none leading-none"
                style={{ fontSize: "clamp(44px, 8vw, 96px)" }}
              >
                {p.num}
              </span>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-3">
                <h3
                  className="font-cormorant font-bold text-cream text-balance"
                  style={{ fontSize: "clamp(22px, 2.2vw, 30px)", lineHeight: 1.15 }}
                >
                  {p.title}
                </h3>
                <p className="font-mono text-[10px] tracking-[0.25em] text-gold/50 uppercase">
                  {p.sub}
                </p>
                <p className="font-inter text-[13px] leading-[1.7] text-cream/40 group-hover:text-cream/55 transition-colors duration-300 mt-1">
                  {p.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-inter text-[10px] tracking-[0.15em] uppercase text-cream/25 group-hover:text-cream/40 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
