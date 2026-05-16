"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useCalendly } from "@/hooks/useCalendly";

/* ── What's included per engagement type ──────────────────────── */
const ENGAGEMENTS = [
  {
    num:   "01",
    name:  "Brand Architecture",
    tag:   "Foundation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2 7v11h5v-6h6v6h5V7L10 2z" stroke="currentColor" strokeWidth="1.3"
          strokeLinejoin="round"/>
      </svg>
    ),
    deliverables: [
      "Brand positioning & voice document",
      "Visual identity guidelines",
      "Copywriting for all core pages",
      "Competitor positioning audit",
      "Messaging hierarchy",
    ],
    outcome: "A brand that premium travelers recognise — and trust.",
    timeline: "3–4 weeks",
  },
  {
    num:   "02",
    name:  "Conversion Design",
    tag:   "Growth",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l4-5 4 3 3-4 3 3" stroke="currentColor" strokeWidth="1.3"
          strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="17" cy="11" r="1.5" fill="currentColor"/>
      </svg>
    ),
    deliverables: [
      "Custom Next.js website (no templates)",
      "Conversion-engineered booking funnel",
      "Mobile-first, sub-1.5s load time",
      "A/B tested CTAs & form placement",
      "60-day post-launch optimisation",
    ],
    outcome: "A website that turns browsers into paying guests.",
    timeline: "5–7 weeks",
  },
  {
    num:   "03",
    name:  "Digital Authority",
    tag:   "Compounding",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
    deliverables: [
      "Technical SEO audit & implementation",
      "GEO optimisation (ChatGPT, Perplexity, Claude)",
      "Content authority cluster (12+ articles)",
      "Monthly performance reporting",
      "Link building & PR outreach",
    ],
    outcome: "Top Google rankings and AI recommendations — compounding monthly.",
    timeline: "3-month minimum, then month-to-month",
  },
  {
    num:   "04",
    name:  "Full Package",
    tag:   "Transformation",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.5 5 5.5.8-4 3.9.95 5.5L10 14.5 5.05 17.2 6 11.7 2 7.8l5.5-.8L10 2z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
    deliverables: [
      "Everything in Brand Architecture",
      "Everything in Conversion Design",
      "Everything in Digital Authority",
      "Priority support & direct access",
      "Quarterly strategy reviews",
    ],
    outcome: "Complete digital transformation — brand, website, and authority.",
    timeline: "8–12 weeks build · ongoing authority",
  },
];

/* ── Process steps ─────────────────────────────────────────────── */
const PROCESS = [
  {
    num: "01",
    title: "Discovery call",
    desc: "30 minutes. We learn your brand, your market, your goals. No pitch — just understanding.",
  },
  {
    num: "02",
    title: "Tailored proposal",
    desc: "Within 48 hours: a custom scope, timeline, and investment range built specifically for your brand.",
  },
  {
    num: "03",
    title: "Delivery",
    desc: "Structured sprints with weekly check-ins. You see progress, not silence.",
  },
  {
    num: "04",
    title: "Results",
    desc: "We track conversion rate, booking volume, and organic growth. Numbers, not promises.",
  },
];

/* ── ROI Calculator (inline, lighter version) ──────────────────── */
function fmt(n: number) {
  return n >= 1_000_000
    ? `€${(n / 1_000_000).toFixed(1)}M`
    : n >= 1_000
    ? `€${Math.round(n / 1_000)}K`
    : `€${Math.round(n)}`;
}

function InlineSlider({
  label, value, min, max, step, display, onChange,
}: {
  label: string; value: number; min: number; max: number;
  step: number; display: string; onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label className="font-inter text-[12px] text-cream/50">{label}</label>
        <span className="font-mono text-[13px] font-medium text-gold">{display}</span>
      </div>
      <div className="relative h-[2px] bg-white/[.08] rounded-full">
        <div className="absolute left-0 top-0 h-full rounded-full transition-all duration-150"
          style={{ width: `${pct}%`, background: "linear-gradient(to right,#C9A84C,#E8C96A)" }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="absolute w-full opacity-0 cursor-pointer"
          style={{ height: "20px", top: "-9px" }}
          aria-label={label}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-gold
            border-2 border-navy-950 pointer-events-none transition-all duration-150"
          style={{ left: `calc(${pct}% - 7px)` }}
        />
      </div>
    </div>
  );
}

/* ── Main component ────────────────────────────────────────────── */
export default function InvestContent() {
  const { open, loading } = useCalendly();

  // Calculator state
  const TARGET_CVR = 3.8;
  const [visitors,     setVisitors]     = useState(3000);
  const [currentCvr,   setCurrentCvr]   = useState(1.2);
  const [bookingValue, setBookingValue]  = useState(2500);

  const currentBookings  = Math.round((visitors * currentCvr) / 100);
  const improvedBookings = Math.round((visitors * TARGET_CVR) / 100);
  const additionalRev    = Math.max(0, (improvedBookings - currentBookings) * bookingValue * 12);

  // Active engagement
  const [active, setActive] = useState(0);

  // Entrance animations
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsap.from(".invest-hero-el", {
        opacity: 0, y: 28, stagger: 0.1, duration: 0.85, ease: "power3.out", delay: 0.1,
      });
    };
    init();
    return () => { cancelled = true; };
  }, []);

  // Section animations via IntersectionObserver
  useEffect(() => {
    const sections = [".calc-section", ".engagements-section", ".process-section"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((sel) => {
      const el = document.querySelector(sel);
      if (!el) return;
      let played = false;
      const io = new IntersectionObserver(async ([e]) => {
        if (!e.isIntersecting || played) return;
        played = true; io.disconnect();
        const { gsap } = await import("gsap");
        gsap.from(`${sel} .anim-child`, {
          opacity: 0, y: 24, stagger: 0.1, duration: 0.8, ease: "power3.out",
        });
      }, { threshold: 0.08 });
      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach(io => io.disconnect());
  }, []);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 pt-28 pb-16 md:pt-44 md:pb-24 px-5 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%,rgba(201,168,76,.06) 0%,transparent 65%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.15),transparent)" }} />

        <div ref={heroRef} className="max-w-[1200px] mx-auto">
          <div className="invest-hero-el flex items-center gap-3 mb-8">
            <span className="w-5 h-px bg-gold/40" />
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">
              Investment
            </span>
          </div>

          <div className="invest-hero-el flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1 className="font-cormorant font-bold text-cream text-balance"
              style={{ fontSize: "clamp(42px,6vw,88px)", lineHeight: 1.05, letterSpacing: "-.02em" }}>
              Your return comes<br className="hidden md:block" /> before{" "}
              <em className="not-italic" style={{
                background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 45%,#C9A84C 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>our invoice.</em>
            </h1>
            <p className="font-inter text-[14px] md:text-[15px] leading-[1.8] text-cream/40 max-w-[340px]">
              We don&apos;t quote until we understand your brand. Every proposal is
              built around your market, your goals, and your potential upside.
            </p>
          </div>

          {/* 3 philosophy pills */}
          <div className="invest-hero-el flex flex-wrap gap-3 mt-10">
            {[
              "No templates. Ever.",
              "No retainers without results.",
              "No pitch — only proposals.",
            ].map((t) => (
              <span key={t}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/[.07]
                  rounded-full font-inter text-[11px] tracking-[.08em] text-cream/40">
                <span className="text-gold/40 text-[7px]">◆</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROI CALCULATOR ────────────────────────────────────── */}
      <section className="calc-section relative bg-navy-900 py-16 md:py-28 px-5 md:px-16 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.1),transparent)" }} />

        <div className="max-w-[1200px] mx-auto">
          <div className="anim-child flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-5 h-px bg-gold/40" />
                <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">
                  Your numbers
                </span>
              </div>
              <h2 className="font-cormorant font-bold text-cream text-balance"
                style={{ fontSize: "clamp(30px,4vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em" }}>
                How much is an underperforming<br className="hidden md:block" /> website costing you?
              </h2>
            </div>
            <p className="font-inter text-[13px] leading-[1.7] text-cream/35 max-w-[240px] hidden md:block md:text-right">
              Adjust the sliders to your brand. The math doesn&apos;t lie.
            </p>
          </div>

          <div className="anim-child grid grid-cols-1 md:grid-cols-[1fr_380px] gap-px bg-white/[.05] rounded-[4px] overflow-hidden">

            {/* Sliders */}
            <div className="bg-navy-950 p-7 md:p-10 flex flex-col gap-8">
              <InlineSlider label="Monthly visitors" value={visitors}
                min={500} max={50000} step={500}
                display={visitors.toLocaleString()}
                onChange={setVisitors} />
              <InlineSlider label="Current conversion rate" value={currentCvr}
                min={0.1} max={5} step={0.1}
                display={`${currentCvr.toFixed(1)}%`}
                onChange={setCurrentCvr} />
              <InlineSlider label="Average booking value" value={bookingValue}
                min={500} max={20000} step={500}
                display={`€${bookingValue.toLocaleString()}`}
                onChange={setBookingValue} />
              <p className="font-inter text-[11px] text-cream/20 leading-[1.6]">
                Target based on OSTOIA client average: <span className="text-gold/50">{TARGET_CVR}% CVR</span>
              </p>
            </div>

            {/* Result */}
            <div className="bg-navy-950/50 p-7 md:p-10 flex flex-col justify-between gap-8">
              <div>
                <p className="font-mono text-[9px] tracking-[.28em] text-cream/30 uppercase mb-3">
                  Potential additional revenue / year
                </p>
                <div className="font-cormorant font-bold text-gold leading-none"
                  style={{ fontSize: "clamp(48px,6vw,80px)" }}>
                  {fmt(additionalRev)}
                </div>
                <p className="font-inter text-[12px] text-cream/25 mt-3">
                  {Math.max(0, Math.round((visitors * TARGET_CVR / 100) - currentBookings))} extra bookings/mo
                  · €{bookingValue.toLocaleString()} avg · 12 months
                </p>
              </div>

              <div className="border-t border-white/[.06] pt-6 flex flex-col gap-3">
                <p className="font-inter text-[12px] text-cream/40 leading-[1.6]">
                  This is what a properly engineered digital presence adds — before we even
                  discuss authority building or AI visibility.
                </p>
                <button
                  onClick={open}
                  disabled={loading}
                  className="group relative overflow-hidden inline-flex items-center justify-center
                    gap-2 h-12 px-6 rounded-[3px] border border-gold/50 font-inter text-[11px]
                    tracking-[.16em] text-gold uppercase hover:border-gold
                    transition-all duration-300 disabled:opacity-50 w-full"
                >
                  <span className="absolute inset-0 bg-gold translate-y-full
                    group-hover:translate-y-0 transition-transform duration-350
                    ease-[cubic-bezier(.16,1,.3,1)]" />
                  <span className="relative flex items-center gap-2 group-hover:text-navy-900
                    transition-colors duration-200">
                    {loading
                      ? <span className="w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin" />
                      : <>Get my tailored proposal<svg width="11" height="11" viewBox="0 0 13 13" fill="none"
                          className="transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M2 6.5h9M8 3l4 3.5-4 3.5" stroke="currentColor"
                            strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg></>
                    }
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ───────────────────────────────────── */}
      <section className="engagements-section relative bg-navy-950 py-16 md:py-28 px-5 md:px-16 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.08),transparent)" }} />

        <div className="max-w-[1200px] mx-auto">

          <div className="anim-child flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-5 h-px bg-gold/40" />
                <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">
                  Engagement types
                </span>
              </div>
              <h2 className="font-cormorant font-bold text-cream text-balance"
                style={{ fontSize: "clamp(30px,4vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em" }}>
                What&apos;s included —<br className="hidden md:block" />{" "}
                <em className="not-italic" style={{
                  background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 50%,#C9A84C 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>always bespoke.</em>
              </h2>
            </div>
            <p className="font-inter text-[13px] leading-[1.7] text-cream/35 max-w-[260px] hidden md:block">
              Investment varies by scope, market, and brand complexity.
              Every proposal is built from scratch — for you.
            </p>
          </div>

          {/* Desktop: 2-col split — left tabs, right content */}
          <div className="anim-child hidden md:grid md:grid-cols-[260px_1fr] gap-px bg-white/[.05] rounded-[4px] overflow-hidden">

            {/* Tab list */}
            <div className="bg-navy-900 flex flex-col">
              {ENGAGEMENTS.map((eng, i) => {
                const isActive = active === i;
                return (
                  <button key={i}
                    onClick={() => setActive(i)}
                    className="relative text-left px-7 py-6 border-b border-white/[.05] last:border-b-0
                      transition-colors duration-300"
                    style={{ backgroundColor: isActive ? "rgba(201,168,76,0.04)" : "transparent" }}
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full transition-all duration-400"
                      style={{
                        background: "linear-gradient(to bottom,#C9A84C,#E8C96A)",
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scaleY(1)" : "scaleY(0.3)",
                      }} />
                    <span className="font-mono text-[9px] tracking-[.25em] block mb-1.5 transition-colors duration-300"
                      style={{ color: isActive ? "#C9A84C" : "rgba(201,168,76,0.3)" }}>
                      {eng.num}
                    </span>
                    <span className="font-inter text-[13px] font-medium transition-colors duration-300"
                      style={{ color: isActive ? "#F5F0E8" : "rgba(245,240,232,0.45)" }}>
                      {eng.name}
                    </span>
                    <span className="font-mono text-[9px] tracking-[.18em] block mt-1 transition-colors duration-300"
                      style={{ color: isActive ? "rgba(201,168,76,0.5)" : "rgba(245,240,232,0.2)" }}>
                      {eng.tag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Content panel */}
            <div className="bg-navy-950/40 p-10 flex flex-col justify-between gap-8">
              {(() => {
                const eng = ENGAGEMENTS[active];
                return (
                  <>
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-gold/50">{eng.icon}</span>
                        <div>
                          <h3 className="font-cormorant font-bold text-cream"
                            style={{ fontSize: "clamp(22px,2.5vw,32px)", lineHeight: 1.1 }}>
                            {eng.name}
                          </h3>
                          <span className="font-mono text-[9px] tracking-[.22em] text-gold/40 uppercase">
                            {eng.tag} · {eng.timeline}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 mb-8">
                        {eng.deliverables.map((d, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="text-gold/40 mt-0.5 shrink-0">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.3"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            <span className="font-inter text-[13px] leading-[1.6] text-cream/60">{d}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-l-2 border-gold/25 pl-5">
                        <p className="font-inter text-[13px] leading-[1.7] text-cream/50 italic">
                          &ldquo;{eng.outcome}&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 border-t border-white/[.06] pt-7">
                      <button onClick={open} disabled={loading}
                        className="group relative overflow-hidden inline-flex items-center justify-center
                          gap-2 h-11 px-6 rounded-[3px] border border-gold/50 font-inter text-[11px]
                          tracking-[.16em] text-gold uppercase hover:border-gold transition-all duration-300
                          disabled:opacity-50">
                        <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0
                          transition-transform duration-350 ease-[cubic-bezier(.16,1,.3,1)]" />
                        <span className="relative group-hover:text-navy-900 transition-colors duration-200 flex items-center gap-2">
                          {loading
                            ? <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                            : "Request proposal"
                          }
                        </span>
                      </button>
                      <Link href="/work"
                        className="inline-flex items-center justify-center h-11 px-5 font-inter
                          text-[11px] tracking-[.14em] text-cream/30 uppercase border border-white/[.07]
                          hover:border-white/20 hover:text-cream/55 rounded-[3px] transition-all duration-300">
                        See results first
                      </Link>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          {/* Mobile: stacked cards */}
          <div className="anim-child md:hidden flex flex-col gap-4">
            {ENGAGEMENTS.map((eng, i) => {
              const isOpen = active === i;
              return (
                <div key={i}
                  className="relative border border-white/[.07] rounded-[4px] overflow-hidden
                    transition-colors duration-300"
                  style={{ backgroundColor: isOpen ? "rgba(201,168,76,0.03)" : "transparent" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to right,#C9A84C,#E8C96A)",
                      opacity: isOpen ? 1 : 0,
                    }} />

                  <button onClick={() => setActive(isOpen ? -1 : i)}
                    className="w-full text-left px-5 py-5 flex items-start justify-between gap-4"
                  >
                    <div>
                      <span className="font-mono text-[9px] tracking-[.25em] text-gold/40 block mb-1">
                        {eng.num} · {eng.tag}
                      </span>
                      <span className="font-inter text-[14px] font-medium text-cream/75">
                        {eng.name}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full border shrink-0 flex items-center justify-center
                      mt-0.5 transition-all duration-300"
                      style={{
                        borderColor: isOpen ? "rgba(201,168,76,0.35)" : "rgba(245,240,232,0.08)",
                        background: isOpen ? "rgba(201,168,76,0.06)" : "transparent",
                      }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                        style={{ color: isOpen ? "#C9A84C" : "rgba(245,240,232,0.25)" }}>
                        <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.3"
                          strokeLinecap="round"
                          style={{
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                            transformOrigin: "center",
                            transition: "transform 0.35s cubic-bezier(.16,1,.3,1)",
                          }} />
                      </svg>
                    </div>
                  </button>

                  <div className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                    style={{ maxHeight: isOpen ? "600px" : "0px", opacity: isOpen ? 1 : 0 }}>
                    <div className="px-5 pb-6 flex flex-col gap-4">
                      {eng.deliverables.map((d, di) => (
                        <div key={di} className="flex items-start gap-3">
                          <span className="text-gold/40 mt-0.5 shrink-0">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.3"
                                strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                          <span className="font-inter text-[13px] leading-[1.6] text-cream/55">{d}</span>
                        </div>
                      ))}
                      <p className="font-mono text-[9px] tracking-[.18em] text-gold/40 uppercase mt-1">
                        {eng.timeline}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <section className="process-section relative bg-navy-900 py-16 md:py-28 px-5 md:px-16 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.08),transparent)" }} />

        <div className="max-w-[1200px] mx-auto">
          <div className="anim-child flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-5 h-px bg-gold/40" />
                <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">
                  How it works
                </span>
              </div>
              <h2 className="font-cormorant font-bold text-cream"
                style={{ fontSize: "clamp(30px,4vw,56px)", lineHeight: 1.08, letterSpacing: "-.01em" }}>
                From inquiry<br className="hidden md:block" /> to results.
              </h2>
            </div>
          </div>

          <div className="anim-child grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/[.05] rounded-[4px] overflow-hidden">
            {PROCESS.map((p, i) => (
              <div key={i}
                className="relative bg-navy-950 px-6 py-8 flex flex-col gap-4
                  group hover:bg-navy-900/60 transition-colors duration-500">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 50% 0%,rgba(201,168,76,.04) 0%,transparent 70%)" }} />
                <span className="font-cormorant font-bold text-gold/10 group-hover:text-gold/18
                  transition-colors duration-500 leading-none select-none"
                  style={{ fontSize: "clamp(40px,6vw,72px)" }}>
                  {p.num}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-cormorant font-bold text-cream"
                    style={{ fontSize: "clamp(18px,2vw,22px)", lineHeight: 1.2 }}>
                    {p.title}
                  </h3>
                  <p className="font-inter text-[12px] md:text-[13px] leading-[1.7] text-cream/40
                    group-hover:text-cream/55 transition-colors duration-300">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="relative bg-navy-950 py-20 md:py-32 px-5 md:px-16 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.1),transparent)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%,rgba(201,168,76,.04) 0%,transparent 70%)" }} />

        <div className="max-w-[760px] mx-auto text-center flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-gold/30" />
            <span className="font-mono text-[9px] tracking-[.38em] text-gold/40 uppercase">
              Ready?
            </span>
            <span className="w-8 h-px bg-gold/30" />
          </div>

          <h2 className="font-cormorant font-bold text-cream text-balance"
            style={{ fontSize: "clamp(36px,5vw,72px)", lineHeight: 1.07, letterSpacing: "-.015em" }}>
            Let&apos;s see what your brand is worth — properly presented.
          </h2>

          <p className="font-inter text-[14px] leading-[1.8] text-cream/40 max-w-[440px]">
            30-minute discovery call. We learn your brand, you see our thinking.
            If it&apos;s a fit, you get a tailored proposal within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button onClick={open} disabled={loading}
              className="group relative overflow-hidden inline-flex items-center justify-center
                gap-3 h-14 px-10 rounded-[3px] border border-gold/55 font-inter text-[11px]
                tracking-[.18em] text-gold uppercase hover:border-gold
                transition-all duration-300 disabled:opacity-50 w-full sm:w-auto">
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0
                transition-transform duration-350 ease-[cubic-bezier(.16,1,.3,1)]" />
              <span className="relative flex items-center gap-3 group-hover:text-navy-900 transition-colors duration-200">
                {loading
                  ? <span className="w-4 h-4 border border-current border-t-transparent rounded-full animate-spin" />
                  : <>
                      Book discovery call
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M2 6.5h9M8 3l4 3.5-4 3.5" stroke="currentColor"
                          strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                }
              </span>
            </button>
            <Link href="/contact"
              className="inline-flex items-center justify-center h-14 px-8 rounded-[3px]
                font-inter text-[11px] tracking-[.18em] text-cream/35 uppercase
                border border-white/[.08] hover:border-white/20 hover:text-cream/60
                transition-all duration-300 w-full sm:w-auto">
              Send a message instead
            </Link>
          </div>

          <p className="font-mono text-[9px] tracking-[.2em] text-cream/18 uppercase">
            No obligation · Reply within 1 business day · Tailored to your brand
          </p>
        </div>
      </section>
    </>
  );
}
