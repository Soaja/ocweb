"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CASES = [
  {
    num: "01",
    brand: "Routes&Roads",
    location: "USA",
    category: "Adventure Travel",
    result: "3×",
    resultLabel: "Direct bookings",
    desc: "Full digital rebrand and conversion-first website for the premier USA adventure travel operator. Luxury meets the wild.",
    href: "/work/routes-roads",
    tags: ["Branding", "Web design", "SEO"],
  },
  {
    num: "02",
    brand: "LocalWay Sicily",
    location: "Italy",
    category: "Boutique Tours",
    result: "8.2%",
    resultLabel: "Avg. conversion rate",
    desc: "Redesigned booking funnel and SEO architecture that made LocalWay the definitive name for authentic Sicilian experiences.",
    href: "/work/localway-sicily",
    tags: ["UX/UI", "CRO", "Content"],
  },
  {
    num: "03",
    brand: "LED Travel",
    location: "Turkey",
    category: "Cultural Journeys",
    result: "#1",
    resultLabel: "Google Turkey",
    desc: "SEO + GEO overhaul positioning LED Travel as Turkey's premier cultural tour authority — online and on AI.",
    href: "/work/led-travel",
    tags: ["SEO", "GEO", "Technical"],
  },
];

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".cs-header > *", {
        opacity: 0, y: 24, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".cs-row", {
        opacity: 0, y: 32, stagger: 0.12, duration: 0.7, ease: "power3.out", delay: 0.3,
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-navy-950 py-16 md:py-32 overflow-hidden">

      {/* top accent line */}
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.18),transparent)" }} />

      <div className="max-w-[1200px] mx-auto px-5 md:px-16">

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="cs-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">
                03 — Selected work
              </span>
            </div>
            <h2 className="font-cormorant font-bold text-cream"
              style={{ fontSize: "clamp(36px,5vw,72px)", lineHeight: 1.08, letterSpacing: "-.01em" }}>
              Results that{" "}
              <em className="not-italic" style={{
                background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 50%,#C9A84C 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>speak.</em>
            </h2>
          </div>
          <Link href="/work"
            className="group inline-flex items-center gap-3 font-mono text-[10px] tracking-[.28em]
              text-cream/30 uppercase hover:text-cream/65 transition-colors duration-300 self-end md:self-auto">
            All case studies
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M0 4h18M14 1l4 3-4 3" stroke="currentColor" strokeWidth="1.2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* ── Case study rows ─────────────────────────────────── */}
        <div className="flex flex-col">
          {CASES.map((c, i) => (
            <div
              key={i}
              className="cs-row group relative border-t border-white/[.07] last:border-b last:border-white/[.07]
                transition-colors duration-300 cursor-pointer"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                backgroundColor: hovered === i ? "rgba(201,168,76,0.025)" : "transparent",
              }}
            >
              <Link href={c.href} data-cursor="VIEW" className="block py-8 md:py-10">
                <div className="flex flex-col md:grid md:grid-cols-[80px_1fr_auto_auto] md:items-center gap-4 md:gap-8">

                  {/* number */}
                  <span className="font-mono text-[11px] tracking-[.3em] text-gold/35 uppercase">
                    {c.num}
                  </span>

                  {/* brand + meta + desc */}
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="font-cormorant font-bold text-cream group-hover:text-white
                        transition-colors duration-300"
                        style={{ fontSize: "clamp(22px,2.8vw,38px)", lineHeight: 1.1 }}>
                        {c.brand}
                      </h3>
                      <span className="font-mono text-[9px] tracking-[.28em] text-gold/40 uppercase">
                        {c.location} · {c.category}
                      </span>
                    </div>
                    {/* desc — visible on hover */}
                    <p
                      className="font-inter text-[13px] leading-[1.65] text-cream/35
                        transition-all duration-500 overflow-hidden"
                      style={{
                        maxHeight: hovered === i ? "60px" : "0px",
                        opacity: hovered === i ? 1 : 0,
                        marginTop: hovered === i ? "4px" : "0px",
                      }}
                    >
                      {c.desc}
                    </p>
                    {/* tags */}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {c.tags.map(tag => (
                        <span key={tag}
                          className="font-inter text-[9px] tracking-[.15em] uppercase text-cream/20
                            group-hover:text-cream/35 transition-colors duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* result */}
                  <div className="flex flex-col items-start md:items-end gap-1 min-w-[100px]">
                    <span className="font-mono font-medium text-gold leading-none"
                      style={{ fontSize: "clamp(30px,3.5vw,48px)" }}>
                      {c.result}
                    </span>
                    <span className="font-mono text-[9px] tracking-[.22em] text-cream/25 uppercase">
                      {c.resultLabel}
                    </span>
                  </div>

                  {/* arrow */}
                  <div className="hidden md:flex items-center justify-center w-10 h-10
                    rounded-full border border-white/[.08] group-hover:border-gold/40
                    transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                      className="text-cream/25 group-hover:text-gold transition-all duration-300
                        group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.2"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ──────────────────────────────────────── */}
        <div className="mt-12 flex items-center justify-between">
          <div className="flex items-center gap-3 text-cream/20">
            <span className="font-mono text-[9px] tracking-[.3em] uppercase">
              3 brands · 3 countries
            </span>
          </div>
          <Link href="/work"
            className="group inline-flex items-center gap-2 h-10 px-6 border border-white/[.08]
              rounded-[3px] font-inter text-[10px] tracking-[.15em] text-cream/35 uppercase
              hover:border-gold/35 hover:text-gold transition-all duration-300">
            View full portfolio
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M1 5h8M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.1"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
