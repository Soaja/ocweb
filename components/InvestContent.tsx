"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useCalendly } from "@/hooks/useCalendly";

/* ─── Gold gradient text helper ─────────────────────────────────────────── */
const goldGrad: React.CSSProperties = {
  background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 45%,#C9A84C 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/* ─── Section label ──────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-5 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
      <span
        className="font-mono uppercase"
        style={{ fontSize: "10px", letterSpacing: "0.38em", color: "rgba(201,168,76,0.55)" }}
      >
        {children}
      </span>
    </div>
  );
}

/* ─── CTA Button ─────────────────────────────────────────────────────────── */
function GoldButton({
  onClick,
  disabled,
  loading,
  children,
  fullWidth = false,
}: {
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group relative overflow-hidden inline-flex items-center justify-center gap-2
        h-14 px-8 rounded-[3px] border font-inter uppercase transition-all duration-300
        disabled:opacity-50 ${fullWidth ? "w-full" : ""}`}
      style={{
        borderColor: "rgba(201,168,76,0.5)",
        fontSize: "11px",
        letterSpacing: "0.18em",
        color: "#C9A84C",
      }}
    >
      <span
        className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-[350ms]"
        style={{
          background: "#C9A84C",
          transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
        }}
      />
      <span className="relative flex items-center gap-2 group-hover:text-[#0A1628] transition-colors duration-200">
        {loading ? (
          <span className="w-4 h-4 border border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          children
        )}
      </span>
    </button>
  );
}

/* ─── Arrow icon ─────────────────────────────────────────────────────────── */
function ArrowRight() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M2 6.5h9M8 3l4 3.5-4 3.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Checkmark ──────────────────────────────────────────────────────────── */
function Check() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 mt-0.5">
      <path
        d="M2 6l3 3 5-5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── ROI formatter ──────────────────────────────────────────────────────── */
function fmt(n: number) {
  if (n >= 1_000_000) return `€${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `€${Math.round(n / 1_000)}K`;
  return `€${Math.round(n)}`;
}

/* ─── Slider ─────────────────────────────────────────────────────────────── */
function InlineSlider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <label className="font-inter" style={{ fontSize: "12px", color: "rgba(245,240,232,0.45)" }}>
          {label}
        </label>
        <span className="font-mono font-medium" style={{ fontSize: "13px", color: "#C9A84C" }}>
          {display}
        </span>
      </div>
      <div className="relative rounded-full" style={{ height: "2px", background: "rgba(255,255,255,0.08)" }}>
        <div
          className="absolute left-0 top-0 h-full rounded-full transition-all duration-150"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(to right,#C9A84C,#E8C96A)",
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute w-full opacity-0 cursor-pointer"
          style={{ height: "24px", top: "-11px" }}
          aria-label={label}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-all duration-150"
          style={{
            width: "16px",
            height: "16px",
            background: "linear-gradient(135deg,#C9A84C,#E8C96A)",
            border: "2px solid #0A1628",
            left: `calc(${pct}% - 8px)`,
            boxShadow: "0 0 8px rgba(201,168,76,0.35)",
          }}
        />
      </div>
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const ENGAGEMENTS = [
  {
    num: "01",
    name: "Brand Architecture",
    tag: "Foundation",
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
    num: "02",
    name: "Conversion Design",
    tag: "Growth",
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
    num: "03",
    name: "Digital Authority",
    tag: "Compounding",
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
    num: "04",
    name: "Full Package",
    tag: "Transformation",
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

const PRINCIPLES = [
  {
    num: "01",
    title: "We only work with boutique travel brands.",
    body: "Not hotels AND SaaS AND e-commerce. Every framework, every SEO tactic, every design decision is built specifically for how luxury travelers discover, evaluate, and book. Niche expertise compounds.",
  },
  {
    num: "02",
    title: "We engineer for conversion, not awards.",
    body: "Pretty is the baseline. Every layout decision, CTA placement, loading time optimization, and content structure is tied directly to one metric: bookings. We don't celebrate how it looks. We celebrate what it earns.",
  },
  {
    num: "03",
    title: "We build authority that compounds.",
    body: "SEO and GEO optimization aren't campaigns — they're assets. A well-built content architecture and AI-visibility strategy keeps working for years after delivery. We're building brands that get recommended.",
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Discovery call",
    sub: "30 min · no pitch",
    desc: "We learn your brand, your market, your goals. No slide deck, no hard sell — just a real conversation to understand where you are and where you need to be.",
  },
  {
    num: "02",
    title: "Tailored proposal",
    sub: "48h turnaround",
    desc: "A custom scope, timeline, and strategy built specifically for your brand — not a template. You see exactly what we'd do and why before committing to anything.",
  },
  {
    num: "03",
    title: "Delivery",
    sub: "Structured sprints",
    desc: "Weekly check-ins. Staged deliverables. You see progress, not silence. Every decision is explained, every milestone signed off before we move forward.",
  },
  {
    num: "04",
    title: "Results + Compounding",
    sub: "We track, we optimise",
    desc: "Conversion rate, booking volume, organic growth — we measure everything. The authority we build keeps working long after delivery. Every month, you're harder to ignore.",
  },
];

/* ─── Main ───────────────────────────────────────────────────────────────── */
export default function InvestContent() {
  const { open, loading } = useCalendly();

  // Calculator state
  const TARGET_CVR = 3.8;
  const [visitors, setVisitors] = useState(3000);
  const [currentCvr, setCurrentCvr] = useState(1.2);
  const [bookingValue, setBookingValue] = useState(2500);

  const currentBookings = Math.round((visitors * currentCvr) / 100);
  const improvedBookings = Math.round((visitors * TARGET_CVR) / 100);
  const additionalRev = Math.max(0, (improvedBookings - currentBookings) * bookingValue * 12);

  // Engagement tabs
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);

  // Hero animated stats
  const [heroStats, setHeroStats] = useState({ revenue: 0, cvr: 0 });

  /* ── Hero entrance + countUp ───────────────────────────────── */
  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      gsap.from(".invest-hero-el", {
        opacity: 0,
        y: 32,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        delay: 0.15,
      });

      // countUp hero stats
      const obj = { revenue: 0, cvr: 0 };
      gsap.to(obj, {
        revenue: 84,
        cvr: 3.8,
        duration: 2.2,
        ease: "power2.out",
        delay: 0.6,
        onUpdate: () => {
          if (!cancelled) {
            setHeroStats({ revenue: Math.round(obj.revenue), cvr: Math.round(obj.cvr * 10) / 10 });
          }
        },
      });
    };
    init();
    return () => { cancelled = true; };
  }, []);

  /* ── Scroll section animations + honest stats countUp ─────── */
  useEffect(() => {
    const sectionSelectors = [
      ".honest-section",
      ".calc-section",
      ".principles-section",
      ".engagements-section",
      ".testimonial-section",
      ".process-section",
      ".scarcity-section",
    ];
    const observers: IntersectionObserver[] = [];

    sectionSelectors.forEach((sel) => {
      const el = document.querySelector(sel);
      if (!el) return;
      let played = false;

      const io = new IntersectionObserver(
        async ([entry]) => {
          if (!entry.isIntersecting || played) return;
          played = true;
          io.disconnect();

          const { gsap } = await import("gsap");

          gsap.from(`${sel} .anim-child`, {
            opacity: 0,
            y: 28,
            stagger: 0.1,
            duration: 0.9,
            ease: "power3.out",
          });

          // countUp for honest-section stats
          if (sel === ".honest-section") {
            const counters = document.querySelectorAll("[data-countup]");
            counters.forEach((el) => {
              const target = parseFloat(el.getAttribute("data-countup") || "0");
              const isDecimal = String(target).includes(".");
              const obj = { val: 0 };
              gsap.to(obj, {
                val: target,
                duration: 1.8,
                ease: "power2.out",
                delay: 0.4,
                onUpdate: () => {
                  el.textContent = isDecimal
                    ? obj.val.toFixed(1)
                    : String(Math.round(obj.val));
                },
              });
            });
          }
        },
        { threshold: 0.08 }
      );

      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((io) => io.disconnect());
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          1. CINEMATIC HERO
      ══════════════════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden px-5 md:px-16"
        style={{
          background: "#0A1628",
          paddingTop: "clamp(100px, 14vw, 180px)",
          paddingBottom: "clamp(64px, 8vw, 112px)",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Atmospheric glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -5%, rgba(201,168,76,0.07) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(to right,transparent,rgba(201,168,76,0.18),transparent)",
          }}
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(245,240,232,1) 1px,transparent 1px),linear-gradient(90deg,rgba(245,240,232,1) 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="max-w-[1200px] mx-auto w-full">
          {/* Label */}
          <div className="invest-hero-el">
            <SectionLabel>The OSTOIA Investment</SectionLabel>
          </div>

          {/* Headline */}
          <h1
            className="invest-hero-el font-cormorant font-bold text-balance"
            style={{
              fontSize: "clamp(52px,7.5vw,100px)",
              lineHeight: 1.02,
              letterSpacing: "-0.025em",
              color: "#F5F0E8",
              maxWidth: "900px",
            }}
          >
            Every day your website underperforms,{" "}
            <em className="not-italic" style={goldGrad}>
              a booking goes to someone else.
            </em>
          </h1>

          {/* Sub */}
          <p
            className="invest-hero-el font-inter mt-7 md:mt-9"
            style={{
              fontSize: "clamp(15px,1.4vw,18px)",
              lineHeight: 1.75,
              color: "rgba(245,240,232,0.45)",
              maxWidth: "580px",
            }}
          >
            We build digital presences that make boutique travel brands impossible to
            overlook — on Google, on AI, and in the minds of the travelers who matter.
          </p>

          {/* Floating stat cards */}
          <div className="invest-hero-el flex flex-col sm:flex-row gap-4 mt-12 md:mt-16">
            {/* Stat 1 */}
            <div
              className="relative flex flex-col gap-2 px-7 py-6 rounded-[4px]"
              style={{
                border: "1px solid rgba(201,168,76,0.15)",
                background:
                  "linear-gradient(135deg,rgba(201,168,76,0.05) 0%,rgba(201,168,76,0.02) 100%)",
                backdropFilter: "blur(8px)",
                minWidth: "220px",
              }}
            >
              <div
                className="absolute top-0 inset-x-0 h-px rounded-t-[4px]"
                style={{
                  background:
                    "linear-gradient(to right,transparent,rgba(201,168,76,0.35),transparent)",
                }}
              />
              <div
                className="font-cormorant font-bold leading-none"
                style={{ fontSize: "clamp(38px,4vw,56px)", ...goldGrad }}
              >
                €{heroStats.revenue}K
              </div>
              <div
                className="font-inter"
                style={{ fontSize: "11px", color: "rgba(245,240,232,0.4)", letterSpacing: "0.04em" }}
              >
                avg. additional revenue year 1
              </div>
            </div>

            {/* Stat 2 */}
            <div
              className="relative flex flex-col gap-2 px-7 py-6 rounded-[4px]"
              style={{
                border: "1px solid rgba(201,168,76,0.15)",
                background:
                  "linear-gradient(135deg,rgba(201,168,76,0.05) 0%,rgba(201,168,76,0.02) 100%)",
                backdropFilter: "blur(8px)",
                minWidth: "220px",
              }}
            >
              <div
                className="absolute top-0 inset-x-0 h-px rounded-t-[4px]"
                style={{
                  background:
                    "linear-gradient(to right,transparent,rgba(201,168,76,0.35),transparent)",
                }}
              />
              <div
                className="font-cormorant font-bold leading-none"
                style={{ fontSize: "clamp(38px,4vw,56px)", ...goldGrad }}
              >
                {heroStats.cvr.toFixed(1)}%
              </div>
              <div
                className="font-inter"
                style={{ fontSize: "11px", color: "rgba(245,240,232,0.4)", letterSpacing: "0.04em" }}
              >
                avg. conversion rate across clients
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="invest-hero-el flex flex-col sm:flex-row gap-4 mt-10">
            <GoldButton onClick={open} disabled={loading} loading={loading}>
              Book a discovery call <ArrowRight />
            </GoldButton>
            <Link
              href="/work"
              className="inline-flex items-center justify-center h-14 px-8 rounded-[3px] font-inter
                uppercase transition-all duration-300"
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                color: "rgba(245,240,232,0.35)",
                border: "1px solid rgba(245,240,232,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "rgba(245,240,232,0.65)";
                e.currentTarget.style.borderColor = "rgba(245,240,232,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(245,240,232,0.35)";
                e.currentTarget.style.borderColor = "rgba(245,240,232,0.08)";
              }}
            >
              See our work first
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          2. THE HONEST SECTION
      ══════════════════════════════════════════════════════════ */}
      <section
        className="honest-section relative overflow-hidden px-5 md:px-16 py-16 md:py-28"
        style={{ background: "#0F1E35" }}
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(to right,transparent,rgba(201,168,76,0.12),transparent)",
          }}
        />
        <div
          className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(to right,transparent,rgba(201,168,76,0.08),transparent)",
          }}
        />

        <div className="max-w-[1200px] mx-auto">
          <div className="anim-child">
            <SectionLabel>The reality</SectionLabel>
          </div>

          {/* Pull quote */}
          <blockquote
            className="anim-child font-cormorant italic text-balance"
            style={{
              fontSize: "clamp(32px,5.5vw,72px)",
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "rgba(245,240,232,0.9)",
              maxWidth: "900px",
              marginBottom: "clamp(48px,7vw,80px)",
            }}
          >
            &ldquo;A beautiful website that doesn&apos;t convert is an{" "}
            <span style={goldGrad}>expensive brochure.</span>&rdquo;
          </blockquote>

          {/* Three brutal facts */}
          <div className="anim-child grid grid-cols-1 sm:grid-cols-3 gap-px"
            style={{ background: "rgba(255,255,255,0.05)", borderRadius: "4px", overflow: "hidden" }}>
            {[
              {
                value: "85",
                suffix: "%",
                label: "of travel website visitors leave without booking",
                countup: "85",
              },
              {
                value: "1.4",
                suffix: "%",
                label: "average boutique travel conversion rate",
                countup: "1.4",
              },
              {
                value: "€0",
                suffix: "",
                label: "return on a site built for aesthetics, not results",
                countup: null,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 px-8 py-10"
                style={{ background: "#0A1628" }}
              >
                <div
                  className="font-cormorant font-bold leading-none"
                  style={{ fontSize: "clamp(52px,6vw,80px)", ...goldGrad }}
                >
                  {stat.countup ? (
                    <>
                      <span data-countup={stat.countup}>0</span>
                      {stat.suffix}
                    </>
                  ) : (
                    stat.value
                  )}
                </div>
                <p
                  className="font-inter"
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.65",
                    color: "rgba(245,240,232,0.45)",
                    maxWidth: "200px",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          3. ROI CALCULATOR
      ══════════════════════════════════════════════════════════ */}
      <section
        className="calc-section relative overflow-hidden px-5 md:px-16 py-16 md:py-28"
        style={{ background: "#0A1628" }}
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(to right,transparent,rgba(201,168,76,0.1),transparent)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 80%,rgba(201,168,76,0.04) 0%,transparent 70%)",
          }}
        />

        <div className="max-w-[1200px] mx-auto">
          <div className="anim-child text-center mb-14 md:mb-20">
            <SectionLabel>Your numbers</SectionLabel>
            <h2
              className="font-cormorant font-bold"
              style={{
                fontSize: "clamp(34px,5vw,68px)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "#F5F0E8",
              }}
            >
              Your numbers.{" "}
              <span style={goldGrad}>Your potential.</span>
            </h2>
            <p
              className="font-inter mt-5 mx-auto"
              style={{
                fontSize: "clamp(14px,1.2vw,16px)",
                lineHeight: 1.75,
                color: "rgba(245,240,232,0.4)",
                maxWidth: "480px",
              }}
            >
              Move the sliders. See what a conversion-engineered website returns for
              your brand specifically.
            </p>
          </div>

          <div
            className="anim-child grid grid-cols-1 md:grid-cols-[1fr_400px] gap-px rounded-[4px] overflow-hidden"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {/* Sliders panel */}
            <div className="flex flex-col gap-10 p-8 md:p-12" style={{ background: "#0F1E35" }}>
              <InlineSlider
                label="Monthly visitors"
                value={visitors}
                min={500}
                max={50000}
                step={500}
                display={visitors.toLocaleString()}
                onChange={setVisitors}
              />
              <InlineSlider
                label="Current conversion rate"
                value={currentCvr}
                min={0.1}
                max={5}
                step={0.1}
                display={`${currentCvr.toFixed(1)}%`}
                onChange={setCurrentCvr}
              />
              <InlineSlider
                label="Average booking value"
                value={bookingValue}
                min={500}
                max={20000}
                step={500}
                display={`€${bookingValue.toLocaleString()}`}
                onChange={setBookingValue}
              />
              <p
                className="font-inter"
                style={{ fontSize: "11px", color: "rgba(245,240,232,0.22)", lineHeight: 1.6 }}
              >
                Target based on OSTOIA client average:{" "}
                <span style={{ color: "rgba(201,168,76,0.55)" }}>{TARGET_CVR}% CVR</span>
              </p>
            </div>

            {/* Result panel */}
            <div
              className="flex flex-col justify-between gap-8 p-8 md:p-12"
              style={{ background: "rgba(201,168,76,0.02)" }}
            >
              <div>
                <p
                  className="font-mono uppercase mb-4"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.32em",
                    color: "rgba(245,240,232,0.3)",
                  }}
                >
                  Potential additional revenue / year
                </p>

                {/* Giant gold number */}
                <div
                  className="font-cormorant font-bold leading-none"
                  style={{ fontSize: "clamp(64px,8vw,100px)", ...goldGrad }}
                >
                  {fmt(additionalRev)}
                </div>

                <p
                  className="font-inter mt-4"
                  style={{ fontSize: "12px", color: "rgba(245,240,232,0.28)" }}
                >
                  {Math.max(0, Math.round(visitors * TARGET_CVR / 100 - currentBookings))} extra bookings/mo ·{" "}
                  €{bookingValue.toLocaleString()} avg · 12 months
                </p>

                <div
                  className="mt-8 pt-7"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p
                    className="font-cormorant italic"
                    style={{
                      fontSize: "clamp(16px,1.5vw,20px)",
                      lineHeight: 1.5,
                      color: "rgba(245,240,232,0.65)",
                      marginBottom: "24px",
                    }}
                  >
                    This is what we&apos;re working with. Now let&apos;s talk about
                    making it real.
                  </p>
                </div>
              </div>

              <GoldButton onClick={open} disabled={loading} loading={loading} fullWidth>
                Get my tailored proposal <ArrowRight />
              </GoldButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          4. WHAT MAKES US DIFFERENT — 3 Principles
      ══════════════════════════════════════════════════════════ */}
      <section
        className="principles-section relative overflow-hidden px-5 md:px-16 py-16 md:py-28"
        style={{ background: "#0F1E35" }}
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(to right,transparent,rgba(201,168,76,0.1),transparent)",
          }}
        />

        <div className="max-w-[1200px] mx-auto">
          <div className="anim-child mb-12 md:mb-16">
            <SectionLabel>Our principles</SectionLabel>
            <h2
              className="font-cormorant font-bold"
              style={{
                fontSize: "clamp(30px,4vw,56px)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                color: "#F5F0E8",
                maxWidth: "600px",
              }}
            >
              Why brands that choose us{" "}
              <span style={goldGrad}>don&apos;t look elsewhere.</span>
            </h2>
          </div>

          <div className="anim-child grid grid-cols-1 md:grid-cols-3 gap-px rounded-[4px] overflow-hidden"
            style={{ background: "rgba(255,255,255,0.04)" }}>
            {PRINCIPLES.map((p) => (
              <div
                key={p.num}
                className="group relative flex flex-col gap-6 px-8 py-10 overflow-hidden transition-colors duration-500"
                style={{ background: "#0A1628" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(201,168,76,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#0A1628";
                }}
              >
                {/* Faint large number behind */}
                <div
                  className="absolute top-4 right-6 font-cormorant font-bold select-none pointer-events-none
                    transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    fontSize: "clamp(80px,10vw,120px)",
                    color: "rgba(201,168,76,0.05)",
                    lineHeight: 1,
                    opacity: 0.7,
                  }}
                >
                  {p.num}
                </div>

                <span
                  className="font-mono"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.28em",
                    color: "rgba(201,168,76,0.45)",
                  }}
                >
                  {p.num}
                </span>

                <h3
                  className="font-cormorant font-bold"
                  style={{
                    fontSize: "clamp(20px,2vw,26px)",
                    lineHeight: 1.2,
                    color: "#F5F0E8",
                    maxWidth: "260px",
                  }}
                >
                  {p.title}
                </h3>

                <p
                  className="font-inter"
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.75,
                    color: "rgba(245,240,232,0.45)",
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          5. WHAT'S INCLUDED — Tabs / Accordion
      ══════════════════════════════════════════════════════════ */}
      <section
        className="engagements-section relative overflow-hidden px-5 md:px-16 py-16 md:py-28"
        style={{ background: "#0A1628" }}
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(to right,transparent,rgba(201,168,76,0.08),transparent)",
          }}
        />

        <div className="max-w-[1200px] mx-auto">
          <div className="anim-child flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <SectionLabel>Engagement types</SectionLabel>
              <h2
                className="font-cormorant font-bold"
                style={{
                  fontSize: "clamp(30px,4vw,56px)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.015em",
                  color: "#F5F0E8",
                }}
              >
                What&apos;s included —{" "}
                <span style={goldGrad}>always bespoke.</span>
              </h2>
            </div>
            <p
              className="font-inter hidden md:block"
              style={{
                fontSize: "13px",
                lineHeight: 1.7,
                color: "rgba(245,240,232,0.35)",
                maxWidth: "260px",
                textAlign: "right",
              }}
            >
              Investment varies by scope, market, and brand complexity. Every
              proposal is built from scratch — for you.
            </p>
          </div>

          {/* ── Desktop: left numbered tabs + right content panel ── */}
          <div
            className="anim-child hidden md:grid gap-px rounded-[4px] overflow-hidden"
            style={{
              gridTemplateColumns: "280px 1fr",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            {/* Tab list */}
            <div style={{ background: "#0F1E35" }}>
              {ENGAGEMENTS.map((eng, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="relative w-full text-left px-7 py-7 transition-colors duration-300"
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      background: isActive ? "rgba(201,168,76,0.05)" : "transparent",
                    }}
                  >
                    {/* Active indicator */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full transition-all duration-400"
                      style={{
                        background: "linear-gradient(to bottom,#C9A84C,#E8C96A)",
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "scaleY(1)" : "scaleY(0.3)",
                        transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                      }}
                    />
                    <span
                      className="font-mono block mb-2 transition-colors duration-300"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.28em",
                        color: isActive ? "#C9A84C" : "rgba(201,168,76,0.3)",
                      }}
                    >
                      {eng.num}
                    </span>
                    <span
                      className="font-inter font-medium block transition-colors duration-300"
                      style={{
                        fontSize: "14px",
                        color: isActive ? "#F5F0E8" : "rgba(245,240,232,0.4)",
                      }}
                    >
                      {eng.name}
                    </span>
                    <span
                      className="font-mono block mt-1 transition-colors duration-300"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.18em",
                        color: isActive ? "rgba(201,168,76,0.5)" : "rgba(245,240,232,0.2)",
                      }}
                    >
                      {eng.tag}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Content panel */}
            <div
              className="flex flex-col justify-between gap-8 p-10 md:p-12"
              style={{ background: "rgba(201,168,76,0.015)" }}
            >
              {(() => {
                const eng = ENGAGEMENTS[active];
                return (
                  <>
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-8">
                        <div>
                          <h3
                            className="font-cormorant font-bold"
                            style={{
                              fontSize: "clamp(24px,2.8vw,36px)",
                              lineHeight: 1.1,
                              color: "#F5F0E8",
                            }}
                          >
                            {eng.name}
                          </h3>
                          <span
                            className="font-mono uppercase"
                            style={{
                              fontSize: "9px",
                              letterSpacing: "0.22em",
                              color: "rgba(201,168,76,0.45)",
                            }}
                          >
                            {eng.tag} · {eng.timeline}
                          </span>
                        </div>
                        <span
                          className="font-cormorant font-bold leading-none select-none"
                          style={{
                            fontSize: "clamp(52px,6vw,80px)",
                            color: "rgba(201,168,76,0.07)",
                          }}
                        >
                          {eng.num}
                        </span>
                      </div>

                      <div className="flex flex-col gap-3.5 mb-9">
                        {eng.deliverables.map((d, i) => (
                          <div key={i} className="flex items-start gap-3.5">
                            <span style={{ color: "rgba(201,168,76,0.5)" }}>
                              <Check />
                            </span>
                            <span
                              className="font-inter"
                              style={{
                                fontSize: "13px",
                                lineHeight: 1.65,
                                color: "rgba(245,240,232,0.65)",
                              }}
                            >
                              {d}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Outcome quote */}
                      <div
                        className="pl-5"
                        style={{ borderLeft: "2px solid rgba(201,168,76,0.25)" }}
                      >
                        <p
                          className="font-cormorant italic"
                          style={{
                            fontSize: "clamp(17px,1.6vw,22px)",
                            lineHeight: 1.5,
                            color: "rgba(245,240,232,0.65)",
                          }}
                        >
                          &ldquo;{eng.outcome}&rdquo;
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex flex-col sm:flex-row gap-3 pt-7"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <GoldButton onClick={open} disabled={loading} loading={loading}>
                        Request proposal
                      </GoldButton>
                      <Link
                        href="/work"
                        className="inline-flex items-center justify-center h-14 px-6 rounded-[3px]
                          font-inter uppercase transition-all duration-300"
                        style={{
                          fontSize: "11px",
                          letterSpacing: "0.16em",
                          color: "rgba(245,240,232,0.3)",
                          border: "1px solid rgba(245,240,232,0.07)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "rgba(245,240,232,0.6)";
                          e.currentTarget.style.borderColor = "rgba(245,240,232,0.18)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "rgba(245,240,232,0.3)";
                          e.currentTarget.style.borderColor = "rgba(245,240,232,0.07)";
                        }}
                      >
                        See results first
                      </Link>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          {/* ── Mobile: accordion ── */}
          <div className="anim-child md:hidden flex flex-col gap-3">
            {ENGAGEMENTS.map((eng, i) => {
              const isOpen = mobileOpen === i;
              return (
                <div
                  key={i}
                  className="relative rounded-[4px] overflow-hidden transition-colors duration-300"
                  style={{
                    border: `1px solid ${isOpen ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.07)"}`,
                    background: isOpen ? "rgba(201,168,76,0.03)" : "transparent",
                  }}
                >
                  {/* Top accent */}
                  <div
                    className="absolute top-0 inset-x-0 h-[2px] transition-opacity duration-300"
                    style={{
                      background: "linear-gradient(to right,#C9A84C,#E8C96A)",
                      opacity: isOpen ? 1 : 0,
                    }}
                  />

                  <button
                    onClick={() => setMobileOpen(isOpen ? null : i)}
                    className="w-full text-left px-5 py-5 flex items-center justify-between gap-4"
                  >
                    <div>
                      <span
                        className="font-mono block mb-1"
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.25em",
                          color: "rgba(201,168,76,0.45)",
                        }}
                      >
                        {eng.num} · {eng.tag}
                      </span>
                      <span
                        className="font-inter font-medium"
                        style={{ fontSize: "14px", color: "rgba(245,240,232,0.8)" }}
                      >
                        {eng.name}
                      </span>
                    </div>

                    {/* +/× toggle */}
                    <div
                      className="shrink-0 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        width: "32px",
                        height: "32px",
                        border: `1px solid ${isOpen ? "rgba(201,168,76,0.3)" : "rgba(245,240,232,0.08)"}`,
                        background: isOpen ? "rgba(201,168,76,0.08)" : "transparent",
                      }}
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        style={{
                          color: isOpen ? "#C9A84C" : "rgba(245,240,232,0.3)",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                          transition: "transform 0.35s cubic-bezier(.16,1,.3,1)",
                        }}
                      >
                        <path
                          d="M5.5 1v9M1 5.5h9"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: isOpen ? "700px" : "0px",
                      opacity: isOpen ? 1 : 0,
                      transitionTimingFunction: "cubic-bezier(.16,1,.3,1)",
                    }}
                  >
                    <div className="px-5 pb-6 flex flex-col gap-4">
                      {eng.deliverables.map((d, di) => (
                        <div key={di} className="flex items-start gap-3">
                          <span style={{ color: "rgba(201,168,76,0.45)" }}>
                            <Check />
                          </span>
                          <span
                            className="font-inter"
                            style={{ fontSize: "13px", lineHeight: 1.65, color: "rgba(245,240,232,0.55)" }}
                          >
                            {d}
                          </span>
                        </div>
                      ))}

                      <div
                        className="pt-4 mt-1"
                        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <p
                          className="font-cormorant italic mb-4"
                          style={{ fontSize: "16px", lineHeight: 1.5, color: "rgba(245,240,232,0.55)" }}
                        >
                          &ldquo;{eng.outcome}&rdquo;
                        </p>
                        <p
                          className="font-mono uppercase"
                          style={{ fontSize: "9px", letterSpacing: "0.2em", color: "rgba(201,168,76,0.4)" }}
                        >
                          {eng.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          6. TESTIMONIAL MOMENT
      ══════════════════════════════════════════════════════════ */}
      <section
        className="testimonial-section relative overflow-hidden px-5 md:px-16 py-20 md:py-36"
        style={{ background: "#0F1E35" }}
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(to right,transparent,rgba(201,168,76,0.12),transparent)",
          }}
        />
        <div
          className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(to right,transparent,rgba(201,168,76,0.08),transparent)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%,rgba(201,168,76,0.03) 0%,transparent 70%)",
          }}
        />

        {/* Decorative quote mark */}
        <div
          className="absolute top-8 left-8 md:left-16 font-cormorant font-bold select-none pointer-events-none"
          style={{ fontSize: "clamp(80px,12vw,160px)", color: "rgba(201,168,76,0.05)", lineHeight: 1 }}
        >
          &ldquo;
        </div>

        <div className="max-w-[1000px] mx-auto text-center relative">
          <div className="anim-child">
            <blockquote
              className="font-cormorant italic"
              style={{
                fontSize: "clamp(26px,4vw,56px)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                color: "rgba(245,240,232,0.9)",
                marginBottom: "clamp(28px,4vw,48px)",
              }}
            >
              &ldquo;We had the tours. We just weren&apos;t telling the story. OSTOIA showed
              us how to make people feel{" "}
              <span style={goldGrad}>Sicily before they even book.</span> The results
              speak for themselves.&rdquo;
            </blockquote>

            <div className="flex flex-col items-center gap-3">
              <div
                className="w-8 h-px"
                style={{ background: "rgba(201,168,76,0.4)" }}
              />
              <div>
                <p
                  className="font-inter font-medium"
                  style={{ fontSize: "13px", color: "rgba(245,240,232,0.7)" }}
                >
                  Giulia Romano
                </p>
                <p
                  className="font-mono uppercase"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.28em",
                    color: "rgba(201,168,76,0.45)",
                    marginTop: "4px",
                  }}
                >
                  LocalWay Sicily
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          7. PROCESS — Timeline
      ══════════════════════════════════════════════════════════ */}
      <section
        className="process-section relative overflow-hidden px-5 md:px-16 py-16 md:py-28"
        style={{ background: "#0A1628" }}
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(to right,transparent,rgba(201,168,76,0.08),transparent)",
          }}
        />

        <div className="max-w-[1200px] mx-auto">
          <div className="anim-child mb-12 md:mb-16">
            <SectionLabel>How it works</SectionLabel>
            <h2
              className="font-cormorant font-bold"
              style={{
                fontSize: "clamp(30px,4vw,56px)",
                lineHeight: 1.08,
                letterSpacing: "-0.015em",
                color: "#F5F0E8",
              }}
            >
              From first call to{" "}
              <span style={goldGrad}>compounding results.</span>
            </h2>
          </div>

          {/* Desktop: horizontal timeline */}
          <div
            className="anim-child hidden md:grid gap-px rounded-[4px] overflow-hidden"
            style={{
              gridTemplateColumns: "repeat(4, 1fr)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            {PROCESS.map((p, i) => (
              <div
                key={i}
                className="group relative flex flex-col gap-5 px-7 py-9 overflow-hidden
                  transition-colors duration-500"
                style={{ background: "#0F1E35" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(201,168,76,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#0F1E35";
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100
                    transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%,rgba(201,168,76,0.05) 0%,transparent 70%)",
                  }}
                />

                {/* Step connector line (not last) */}
                {i < PROCESS.length - 1 && (
                  <div
                    className="absolute top-0 right-0 w-px h-full pointer-events-none"
                    style={{ background: "rgba(201,168,76,0.07)" }}
                  />
                )}

                {/* Large faint number */}
                <div
                  className="font-cormorant font-bold leading-none select-none
                    transition-colors duration-500 group-hover:opacity-100"
                  style={{
                    fontSize: "clamp(48px,6vw,80px)",
                    color: "rgba(201,168,76,0.08)",
                  }}
                >
                  {p.num}
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3
                    className="font-cormorant font-bold"
                    style={{
                      fontSize: "clamp(18px,1.8vw,22px)",
                      lineHeight: 1.2,
                      color: "#F5F0E8",
                    }}
                  >
                    {p.title}
                  </h3>
                  <span
                    className="font-mono uppercase"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.22em",
                      color: "rgba(201,168,76,0.4)",
                    }}
                  >
                    {p.sub}
                  </span>
                </div>

                <p
                  className="font-inter transition-colors duration-300"
                  style={{
                    fontSize: "12px",
                    lineHeight: 1.75,
                    color: "rgba(245,240,232,0.4)",
                  }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: stacked */}
          <div className="anim-child md:hidden flex flex-col gap-px rounded-[4px] overflow-hidden"
            style={{ background: "rgba(255,255,255,0.05)" }}>
            {PROCESS.map((p, i) => (
              <div
                key={i}
                className="flex gap-6 px-5 py-7"
                style={{ background: "#0F1E35" }}
              >
                <div
                  className="font-cormorant font-bold shrink-0 leading-none"
                  style={{ fontSize: "40px", color: "rgba(201,168,76,0.2)" }}
                >
                  {p.num}
                </div>
                <div className="flex flex-col gap-2">
                  <h3
                    className="font-cormorant font-bold"
                    style={{ fontSize: "20px", lineHeight: 1.2, color: "#F5F0E8" }}
                  >
                    {p.title}
                  </h3>
                  <span
                    className="font-mono uppercase"
                    style={{ fontSize: "9px", letterSpacing: "0.22em", color: "rgba(201,168,76,0.4)" }}
                  >
                    {p.sub}
                  </span>
                  <p
                    className="font-inter mt-1"
                    style={{ fontSize: "12px", lineHeight: 1.75, color: "rgba(245,240,232,0.4)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          8. SCARCITY + FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section
        className="scarcity-section relative overflow-hidden px-5 md:px-16 py-20 md:py-36"
        style={{ background: "#0F1E35" }}
      >
        <div
          className="absolute top-0 inset-x-0 h-px pointer-events-none"
          style={{
            background: "linear-gradient(to right,transparent,rgba(201,168,76,0.15),transparent)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 55%,rgba(201,168,76,0.05) 0%,transparent 70%)",
          }}
        />

        <div className="max-w-[760px] mx-auto text-center">
          <div className="anim-child flex flex-col items-center gap-8">
            {/* Scarcity badge */}
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
              style={{
                border: "1px solid rgba(201,168,76,0.18)",
                background: "rgba(201,168,76,0.04)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#C9A84C" }}
              />
              <span
                className="font-mono uppercase"
                style={{ fontSize: "9px", letterSpacing: "0.32em", color: "rgba(201,168,76,0.65)" }}
              >
                Currently accepting Q3 2026 projects
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-cormorant font-bold text-balance"
              style={{
                fontSize: "clamp(36px,5.5vw,76px)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "#F5F0E8",
              }}
            >
              We work with{" "}
              <span style={goldGrad}>4–6 new brands</span>{" "}
              per quarter.
            </h2>

            {/* Sub */}
            <p
              className="font-inter"
              style={{
                fontSize: "clamp(14px,1.2vw,17px)",
                lineHeight: 1.8,
                color: "rgba(245,240,232,0.45)",
                maxWidth: "480px",
              }}
            >
              Not because we can&apos;t scale — because quality demands it. If your
              brand is ready, let&apos;s find out if we&apos;re a fit.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <GoldButton onClick={open} disabled={loading} loading={loading}>
                Book discovery call <ArrowRight />
              </GoldButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-14 px-8 rounded-[3px]
                  font-inter uppercase transition-all duration-300"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  color: "rgba(245,240,232,0.35)",
                  border: "1px solid rgba(245,240,232,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "rgba(245,240,232,0.65)";
                  e.currentTarget.style.borderColor = "rgba(245,240,232,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(245,240,232,0.35)";
                  e.currentTarget.style.borderColor = "rgba(245,240,232,0.08)";
                }}
              >
                Send a message
              </Link>
            </div>

            {/* Reassurance note */}
            <p
              className="font-mono uppercase"
              style={{
                fontSize: "9px",
                letterSpacing: "0.24em",
                color: "rgba(245,240,232,0.18)",
              }}
            >
              No obligation · 30-minute call · Tailored proposal within 48h
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
