"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/ostoia-co/audit";

function fmt(n: number) {
  return n >= 1_000_000
    ? `€${(n / 1_000_000).toFixed(1)}M`
    : n >= 1_000
    ? `€${Math.round(n / 1_000)}K`
    : `€${Math.round(n)}`;
}

export default function ROICalculator() {
  const ref = useRef<HTMLElement>(null);

  const [visitors,    setVisitors]    = useState(3000);
  const [currentCvr,  setCurrentCvr]  = useState(1.2);
  const [bookingValue,setBookingValue] = useState(2500);
  const [revealed,   setRevealed]    = useState(false);

  // Intersection-based entrance
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".roi-inner > *", {
        opacity: 0, y: 28, stagger: 0.1, duration: 0.85, ease: "power3.out",
      });
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Target CVR is OSTOIA's benchmark
  const TARGET_CVR = 3.8;
  const currentBookings   = Math.round((visitors * currentCvr) / 100);
  const improvedBookings  = Math.round((visitors * TARGET_CVR) / 100);
  const additionalBookings = Math.max(0, improvedBookings - currentBookings);
  const additionalRevenue  = additionalBookings * bookingValue;
  const currentRevenue     = currentBookings * bookingValue;

  const liftPct = currentCvr > 0
    ? Math.round(((TARGET_CVR - currentCvr) / currentCvr) * 100)
    : 0;

  return (
    <section ref={ref}
      className="relative bg-navy-900 py-16 md:py-32 px-5 md:px-16 overflow-hidden">

      {/* accents */}
      <div className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.12),transparent)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 100%,rgba(201,168,76,.03) 0%,transparent 70%)" }} />

      <div className="roi-inner max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-5 h-px bg-gold/40" />
              <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">
                Revenue calculator
              </span>
            </div>
            <h2 className="font-cormorant font-bold text-cream text-balance"
              style={{ fontSize: "clamp(32px,4.5vw,64px)", lineHeight: 1.08, letterSpacing: "-.01em" }}>
              How much is a poor<br className="hidden md:block" /> website{" "}
              <em className="not-italic" style={{
                background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 50%,#C9A84C 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>costing you?</em>
            </h2>
          </div>
          <p className="font-inter text-[13px] leading-[1.7] text-cream/35 max-w-[260px] hidden md:block">
            Enter your numbers. See what a conversion-engineered website would add to your bottom line.
          </p>
        </div>

        {/* Calculator grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[.05] rounded-[4px] overflow-hidden">

          {/* ── Inputs ── */}
          <div className="bg-navy-950 p-7 md:p-10 flex flex-col gap-8">
            <Slider
              label="Monthly website visitors"
              value={visitors}
              min={500} max={50000} step={500}
              display={visitors.toLocaleString()}
              onChange={setVisitors}
            />
            <Slider
              label="Current conversion rate"
              value={currentCvr}
              min={0.1} max={5} step={0.1}
              display={`${currentCvr.toFixed(1)}%`}
              onChange={setCurrentCvr}
            />
            <Slider
              label="Average booking value"
              value={bookingValue}
              min={500} max={20000} step={500}
              display={`€${bookingValue.toLocaleString()}`}
              onChange={setBookingValue}
            />

            <p className="font-inter text-[11px] leading-[1.6] text-cream/25">
              Target conversion rate based on OSTOIA&apos;s client average: <span className="text-gold/60">{TARGET_CVR}%</span>
            </p>
          </div>

          {/* ── Results ── */}
          <div className="bg-navy-950/60 p-7 md:p-10 flex flex-col justify-center gap-6">

            {/* Current vs Improved */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5 p-4 border border-white/[.06] rounded-[3px]">
                <span className="font-mono text-[9px] tracking-[.2em] text-cream/30 uppercase">Now</span>
                <span className="font-mono font-medium text-cream/60 leading-none"
                  style={{ fontSize: "clamp(20px,2.5vw,28px)" }}>
                  {currentBookings}
                </span>
                <span className="font-inter text-[11px] text-cream/25">bookings/mo</span>
                <span className="font-mono text-[12px] text-cream/40 mt-1">{fmt(currentRevenue)}/yr</span>
              </div>
              <div className="flex flex-col gap-1.5 p-4 border border-gold/20 rounded-[3px]
                bg-gold/[.03] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(to right,#C9A84C,#E8C96A)" }} />
                <span className="font-mono text-[9px] tracking-[.2em] text-gold/50 uppercase">Optimised</span>
                <span className="font-mono font-medium text-gold leading-none"
                  style={{ fontSize: "clamp(20px,2.5vw,28px)" }}>
                  {improvedBookings}
                </span>
                <span className="font-inter text-[11px] text-cream/35">bookings/mo</span>
                <span className="font-mono text-[12px] text-gold/60 mt-1">{fmt(improvedBookings * bookingValue)}/yr</span>
              </div>
            </div>

            {/* Big result */}
            <div className="border-t border-white/[.06] pt-6">
              <p className="font-mono text-[9px] tracking-[.28em] text-cream/30 uppercase mb-3">
                Additional annual revenue
              </p>
              <div className="flex items-end gap-3 flex-wrap">
                <span className="font-cormorant font-bold text-gold leading-none"
                  style={{ fontSize: "clamp(40px,6vw,72px)" }}>
                  {fmt(additionalRevenue * 12)}
                </span>
                {liftPct > 0 && (
                  <span className="font-mono text-[12px] text-gold/50 mb-1">
                    +{liftPct}% conversion lift
                  </span>
                )}
              </div>
              <p className="font-inter text-[12px] text-cream/30 mt-2">
                {additionalBookings} additional bookings/month × €{bookingValue.toLocaleString()} × 12
              </p>
            </div>

            {/* CTA */}
            {!revealed ? (
              <button
                onClick={() => setRevealed(true)}
                className="group inline-flex items-center justify-center gap-2 h-11 px-6 w-full
                  bg-gold/10 border border-gold/45 rounded-[3px] font-inter text-[11px]
                  tracking-[.16em] text-gold uppercase hover:bg-gold hover:text-navy-900
                  hover:border-gold transition-all duration-300"
              >
                Get your free audit
                <svg width="11" height="11" viewBox="0 0 13 13" fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M2 6.5h9M8 3l4 3.5-4 3.5" stroke="currentColor"
                    strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 h-11 px-6
                    bg-gold/10 border border-gold/55 rounded-[3px] font-inter text-[11px]
                    tracking-[.16em] text-gold uppercase hover:bg-gold hover:text-navy-900
                    hover:border-gold transition-all duration-300"
                >
                  Book a free 15-min audit call
                </a>
                <Link href="/contact"
                  className="inline-flex items-center justify-center h-10 font-inter text-[10px]
                    tracking-[.14em] text-cream/35 uppercase hover:text-cream/60 transition-colors">
                  Or send us a message →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Reusable slider ───────────────────────────────────────────── */
function Slider({
  label, value, min, max, step, display, onChange,
}: {
  label: string; value: number; min: number; max: number;
  step: number; display: string; onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label className="font-inter text-[12px] text-cream/55">{label}</label>
        <span className="font-mono text-[13px] font-medium text-gold">{display}</span>
      </div>
      <div className="relative h-[3px] bg-white/[.08] rounded-full">
        <div className="absolute left-0 top-0 h-full rounded-full bg-gold/50 transition-all duration-150"
          style={{ width: `${pct}%` }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
          style={{ height: "20px", top: "-8px" }}
          aria-label={label}
        />
        {/* thumb dot */}
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gold
          border-2 border-navy-950 shadow-sm pointer-events-none transition-all duration-150"
          style={{ left: `calc(${pct}% - 8px)` }} />
      </div>
    </div>
  );
}
