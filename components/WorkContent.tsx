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
    year: "2025",
    services: ["Brand Architecture", "Conversion Design", "Digital Authority"],
    desc: "Full digital rebrand and conversion-first website for the premier USA adventure travel operator. Luxury meets the wild.",
    href: "/work/routes-roads",
  },
  {
    num: "02",
    brand: "LocalWay Sicily",
    location: "Italy",
    category: "Boutique Tours",
    result: "8.2%",
    resultLabel: "Avg. conversion rate",
    year: "2024",
    services: ["UX/UI", "CRO", "Content Strategy"],
    desc: "Redesigned booking funnel and SEO architecture that made LocalWay the definitive name for authentic Sicilian experiences.",
    href: "/work/localway-sicily",
  },
  {
    num: "03",
    brand: "LED Travel",
    location: "Turkey",
    category: "Cultural Journeys",
    result: "#1",
    resultLabel: "Google Turkey",
    year: "2024",
    services: ["SEO", "GEO", "Technical"],
    desc: "SEO + GEO overhaul positioning LED Travel as Turkey's premier cultural tour authority — online and in AI results.",
    href: "/work/led-travel",
  },
];

export default function WorkContent() {
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsap.from(".work-hero-el", {
        opacity: 0, y: 28, stagger: 0.09, duration: 0.9, ease: "power3.out", delay: 0.1,
      });
    };
    init();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 pt-28 pb-12 md:pt-44 md:pb-20 px-5 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%,rgba(201,168,76,.055) 0%,transparent 65%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.12),transparent)" }} />

        {/* Large faded brand name watermark */}
        <div className="absolute inset-x-0 bottom-0 overflow-hidden select-none pointer-events-none flex justify-end">
          <span className="font-cormorant font-bold text-white/[.025] whitespace-nowrap"
            style={{ fontSize: "clamp(60px,15vw,200px)", letterSpacing: "-.02em", transform: "translateY(30%)" }}>
            SELECTED WORK
          </span>
        </div>

        <div className="relative max-w-[1200px] mx-auto">
          <div className="work-hero-el flex items-center gap-3 mb-10">
            <span className="w-6 h-px bg-gold/50" />
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">Selected work</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-end">
            <div>
              <h1 className="work-hero-el font-cormorant font-bold text-cream"
                style={{ fontSize: "clamp(52px,8vw,110px)", lineHeight: 1.03, letterSpacing: "-.02em" }}>
                Work that<br />
                <em className="not-italic" style={{
                  background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 45%,#C9A84C 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>converts.</em>
              </h1>
              <p className="work-hero-el font-inter text-[14px] md:text-[16px] leading-[1.78] text-cream/38 max-w-[440px] mt-6">
                Every project is custom — no templates, no shortcuts. Here&apos;s what happens
                when strategy, design, and authority work as one system.
              </p>
            </div>

            {/* mini stat */}
            <div className="work-hero-el hidden lg:flex flex-col gap-1 pb-1">
              <span className="font-mono text-[9px] tracking-[.28em] text-cream/18 uppercase mb-3">Proof of work</span>
              {[["3×", "avg. booking lift"], ["8.2%", "peak conv. rate"], ["#1", "google turkey"]].map(([v, l]) => (
                <div key={v} className="flex items-baseline gap-3">
                  <span className="font-mono font-medium text-gold" style={{ fontSize: "clamp(18px,2vw,26px)" }}>{v}</span>
                  <span className="font-mono text-[9px] tracking-[.18em] text-cream/22 uppercase">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ─────────────────────────────────────── */}
      <CaseList hovered={hovered} setHovered={setHovered} />

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <WorkCta />
    </>
  );
}

/* ── Case list ───────────────────────────────────────────────── */
function CaseList({
  hovered, setHovered,
}: { hovered: number | null; setHovered: (i: number | null) => void }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".work-row", { opacity: 0, y: 32, stagger: 0.14, duration: 0.85, ease: "power3.out" });
    }, { threshold: 0.05 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-950 pb-0 px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col">
          {CASES.map((c, i) => {
            const on = hovered === i;
            return (
              <div
                key={i}
                className="work-row group relative border-t border-white/[.07] last:border-b last:border-white/[.07] cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ background: on ? "rgba(201,168,76,0.02)" : "transparent", transition: "background 0.4s" }}
              >
                {/* gold left flash */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-r-full"
                  style={{
                    background: "linear-gradient(to bottom,#C9A84C,#E8C96A)",
                    opacity: on ? 1 : 0,
                    transform: on ? "scaleY(1)" : "scaleY(0)",
                    transition: "opacity 0.3s, transform 0.5s cubic-bezier(.16,1,.3,1)",
                    transformOrigin: "top",
                  }} />

                <Link href={c.href} className="block py-8 md:py-14 pl-0 md:pl-5">
                  <div className="flex flex-col lg:grid lg:grid-cols-[56px_1fr_auto] lg:items-center gap-5 lg:gap-10">

                    {/* num */}
                    <span className="font-mono text-[11px] tracking-[.3em] text-gold/30">{c.num}</span>

                    {/* main */}
                    <div className="flex flex-col gap-4">
                      {/* brand + meta row */}
                      <div className="flex flex-wrap items-baseline gap-4">
                        <h2 className="font-cormorant font-bold"
                          style={{
                            fontSize: "clamp(32px,5.5vw,72px)", lineHeight: 1.05, letterSpacing: "-.015em",
                            color: on ? "#ffffff" : "rgba(245,240,232,0.88)",
                            transition: "color 0.3s",
                          }}>
                          {c.brand}
                        </h2>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[9px] tracking-[.28em] text-gold/40 uppercase">{c.location}</span>
                          <span className="text-cream/15 text-[9px]">·</span>
                          <span className="font-mono text-[9px] tracking-[.22em] text-cream/22 uppercase">{c.category}</span>
                          <span className="text-cream/15 text-[9px]">·</span>
                          <span className="font-mono text-[9px] tracking-[.22em] text-cream/18 uppercase">{c.year}</span>
                        </div>
                      </div>

                      {/* desc — reveal on hover */}
                      <div className="overflow-hidden"
                        style={{
                          maxHeight: on ? "60px" : "0px",
                          opacity: on ? 1 : 0,
                          transition: "max-height 0.5s cubic-bezier(.16,1,.3,1), opacity 0.4s",
                        }}>
                        <p className="font-inter text-[13px] leading-[1.65] text-cream/38 max-w-[520px]">
                          {c.desc}
                        </p>
                      </div>

                      {/* service tags */}
                      <div className="flex flex-wrap gap-3">
                        {c.services.map(tag => (
                          <span key={tag}
                            className="font-mono text-[9px] tracking-[.18em] uppercase"
                            style={{
                              color: on ? "rgba(201,168,76,0.55)" : "rgba(245,240,232,0.18)",
                              transition: "color 0.3s",
                            }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* result — right side */}
                    <div className="flex lg:flex-col lg:items-end items-center gap-4 lg:gap-1 shrink-0">
                      <span className="font-cormorant font-bold leading-none"
                        style={{
                          fontSize: "clamp(40px,5.5vw,72px)",
                          color: on ? "#C9A84C" : "rgba(201,168,76,0.45)",
                          transition: "color 0.35s",
                        }}>
                        {c.result}
                      </span>
                      <div className="flex lg:flex-col items-start lg:items-end gap-2 lg:gap-1">
                        <span className="font-mono text-[9px] tracking-[.22em] text-cream/22 uppercase">
                          {c.resultLabel}
                        </span>
                        {/* view arrow */}
                        <div className="hidden lg:flex items-center gap-1 mt-2"
                          style={{
                            opacity: on ? 1 : 0,
                            transform: on ? "translateX(0)" : "translateX(-6px)",
                            transition: "opacity 0.3s, transform 0.4s cubic-bezier(.16,1,.3,1)",
                          }}>
                          <span className="font-mono text-[9px] tracking-[.22em] text-gold/50 uppercase">View</span>
                          <svg width="12" height="6" viewBox="0 0 12 6" fill="none">
                            <path d="M0 3h10M7 1l3 2-3 2" stroke="#C9A84C" strokeWidth="1.1"
                              strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* bottom note */}
        <div className="py-10 flex items-center gap-4 border-t border-white/[.05]">
          <div className="w-8 h-px bg-gold/20" />
          <span className="font-mono text-[9px] tracking-[.3em] text-cream/16 uppercase">
            Additional projects available under NDA
          </span>
        </div>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────────────────── */
function WorkCta() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".work-cta-el", { opacity: 0, y: 22, stagger: 0.1, duration: 0.8, ease: "power3.out" });
    }, { threshold: 0.2 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-900 py-20 md:py-36 px-5 md:px-16 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.1),transparent)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%,rgba(201,168,76,.04) 0%,transparent 65%)" }} />

      {/* watermark */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden select-none pointer-events-none flex justify-center">
        <span className="font-cormorant font-bold text-white/[.022] whitespace-nowrap"
          style={{ fontSize: "clamp(60px,15vw,200px)", letterSpacing: "-.02em", transform: "translateY(28%)" }}>
          YOUR BRAND
        </span>
      </div>

      <div className="relative max-w-[900px] mx-auto text-center flex flex-col items-center gap-8">
        <div className="work-cta-el flex items-center gap-3">
          <span className="w-5 h-px bg-gold/30" />
          <span className="font-mono text-[9px] tracking-[.38em] text-gold/45 uppercase">Your brand, next</span>
          <span className="w-5 h-px bg-gold/30" />
        </div>

        <h2 className="work-cta-el font-cormorant font-bold text-cream text-balance"
          style={{ fontSize: "clamp(36px,6vw,84px)", lineHeight: 1.06, letterSpacing: "-.018em" }}>
          Ready to build something<br />
          <em className="not-italic" style={{
            background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 45%,#C9A84C 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>extraordinary?</em>
        </h2>

        <p className="work-cta-el font-inter text-[15px] leading-[1.75] text-cream/35 max-w-[420px]">
          We only take on brands we genuinely believe in.
          If that&apos;s you, let&apos;s talk.
        </p>

        <div className="work-cta-el flex flex-col sm:flex-row items-center gap-5 mt-2">
          <Link href="/contact"
            className="group relative h-14 px-10 rounded-[3px] overflow-hidden
              font-inter text-[11px] tracking-[.18em] uppercase
              border border-gold/50 text-gold
              hover:border-gold hover:text-navy-900
              transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]
              inline-flex items-center gap-3"
            style={{ minWidth: "220px", justifyContent: "center" }}>
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0
              transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)]" />
            <span className="relative flex items-center gap-3">
              Start a project
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
          <Link href="/services"
            className="font-inter text-[12px] tracking-[.1em] uppercase text-cream/28
              hover:text-cream/60 transition-colors duration-300">
            View services →
          </Link>
        </div>
      </div>
    </section>
  );
}
