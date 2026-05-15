"use client";

import { useEffect, useRef, useState } from "react";

const PAIN_POINTS = [
  {
    num: "01",
    title: "Generic templates",
    short: "Built for volume, not prestige.",
    desc: "Your 14-day Amalfi itinerary deserves more than a WordPress theme built for 10,000 brands. Premium travelers can feel the difference.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="10" y="1" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="1" y="10" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="10" y="10" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Zero AI visibility",
    short: "ChatGPT doesn't know you exist.",
    desc: "When a traveler asks an AI assistant for a Sicily specialist or a Turkey cultural tour, you don't appear. That's business lost before the search even starts.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "SEO built for airlines",
    short: "Mass-market strategy, boutique brand.",
    desc: "Standard SEO agencies chase volume keywords — flights, hotels, packages. Boutique operators need authority, not traffic. The strategy is completely different.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 15L9 3l6 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.5 10.5h7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "Design that looks, not converts",
    short: "Pretty galleries don't book tours.",
    desc: "A beautiful site that doesn't convert is an expensive brochure. Every layout decision, every CTA, every pixel needs a purpose tied directly to your bottom line.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M2 13l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function ProblemSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".prob-header > *", {
        opacity: 0, y: 28, stagger: 0.1, duration: 0.85, ease: "power3.out",
      });
      gsap.from(".prob-row", {
        opacity: 0, y: 24, stagger: 0.1, duration: 0.7, ease: "power3.out", delay: 0.35,
      });
    }, { threshold: 0.1 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-navy-900 py-16 md:py-32 overflow-hidden">

      {/* subtle noise grain */}
      <div className="absolute inset-0 opacity-[.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-16">

        {/* ── Header ──────────────────────────────────────────── */}
        <div className="prob-header mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-7">
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">
              01 — The problem
            </span>
          </div>
          <h2 className="font-cormorant font-bold text-cream text-balance"
            style={{ fontSize: "clamp(36px,5vw,72px)", lineHeight: 1.08, letterSpacing: "-.01em" }}>
            Most boutique travel brands<br className="hidden md:block" /> are{" "}
            <em className="not-italic" style={{
              background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 50%,#C9A84C 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              invisible online.
            </em>
          </h2>
          <p className="font-inter text-[15px] md:text-[16px] leading-[1.75] text-cream/40 max-w-[500px] mt-5">
            Not because they lack quality — but because their digital presence
            doesn&apos;t match the experience they deliver.
          </p>
        </div>

        {/* ── Pain point rows ─────────────────────────────────── */}
        <div className="flex flex-col border-t border-white/[.07]">
          {PAIN_POINTS.map((p, i) => {
            const isActive = active === i;
            return (
              <div
                key={i}
                className="prob-row group relative border-b border-white/[.07] transition-colors duration-300"
                style={{ backgroundColor: isActive ? "rgba(201,168,76,0.04)" : "transparent" }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                {/* gold left border indicator */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full transition-all duration-400"
                  style={{
                    background: "linear-gradient(to bottom,#C9A84C,#E8C96A)",
                    opacity: isActive ? 1 : 0,
                    transform: isActive ? "scaleY(1)" : "scaleY(0)",
                  }}
                />

                <div className="relative py-7 md:py-8 px-0 md:px-2">
                  <div className="flex items-start gap-5 md:gap-8">

                    {/* number */}
                    <span className="font-mono text-[11px] tracking-[.3em] text-gold/40 pt-1 shrink-0 w-8">
                      {p.num}
                    </span>

                    {/* content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          {/* title */}
                          <h3
                            className="font-cormorant font-bold transition-colors duration-300"
                            style={{
                              fontSize: "clamp(20px,2.2vw,30px)",
                              lineHeight: 1.2,
                              color: isActive ? "#F5F0E8" : "rgba(245,240,232,0.82)",
                            }}
                          >
                            {p.title}
                          </h3>

                          {/* short always visible */}
                          <p className="font-inter text-[13px] text-cream/35 mt-1 transition-colors duration-300"
                            style={{ color: isActive ? "rgba(245,240,232,0.55)" : "rgba(245,240,232,0.42)" }}>
                            {p.short}
                          </p>

                          {/* expanded description */}
                          <div
                            className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                            style={{ maxHeight: isActive ? "120px" : "0px", opacity: isActive ? 1 : 0 }}
                          >
                            <p className="font-inter text-[13px] md:text-[14px] leading-[1.7] text-cream/45 mt-3 max-w-[580px]">
                              {p.desc}
                            </p>
                          </div>
                        </div>

                        {/* icon + arrow */}
                        <div className="flex items-center gap-3 shrink-0 pt-0.5">
                          <span
                            className="transition-all duration-300"
                            style={{ color: isActive ? "rgba(201,168,76,0.7)" : "rgba(245,240,232,0.18)" }}
                          >
                            {p.icon}
                          </span>
                          <div
                            className="w-8 h-8 rounded-full border flex items-center justify-center
                              transition-all duration-300 shrink-0"
                            style={{
                              borderColor: isActive ? "rgba(201,168,76,0.4)" : "rgba(245,240,232,0.08)",
                              background: isActive ? "rgba(201,168,76,0.06)" : "transparent",
                            }}
                          >
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                              className="transition-all duration-300"
                              style={{
                                color: isActive ? "#C9A84C" : "rgba(245,240,232,0.2)",
                                transform: isActive ? "translate(1px,-1px)" : "translate(0,0)",
                              }}>
                              <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5v6"
                                stroke="currentColor" strokeWidth="1.1"
                                strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Bottom nudge ────────────────────────────────────── */}
        <div className="mt-12 flex items-center gap-4">
          <div className="w-10 h-px bg-gold/25" />
          <span className="font-mono text-[9px] tracking-[.32em] text-gold/35 uppercase">
            There&apos;s a better way
          </span>
          <svg width="18" height="6" viewBox="0 0 18 6" fill="none" className="text-gold/30">
            <path d="M0 3h16M12 1l4 2-4 2" stroke="currentColor" strokeWidth="1.1"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
