"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─── Shared helpers ─────────────────────────────────────────────────────── */
const goldGrad: React.CSSProperties = {
  background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 45%,#C9A84C 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let fired = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || fired) return;
      fired = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(el.querySelectorAll("[data-reveal]"), {
        opacity: 0, y: 28, stagger: 0.09, duration: 0.85, ease: "power3.out",
      });
    }, { threshold });
    io.observe(el); return () => io.disconnect();
  }, [threshold]);
  return ref;
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const BIG_STATS = [
  { value: "2019", label: "Founded" },
  { value: "3", label: "Brands transformed" },
  { value: "3", label: "Countries" },
  { value: "100%", label: "Travel focused" },
];

const VALUES = [
  {
    num: "01",
    title: "Honesty\nfirst.",
    desc: "We tell clients when a project isn't right for us — or when their expectations aren't realistic. Trust is the only currency that compounds.",
  },
  {
    num: "02",
    title: "Specialisation\nover scale.",
    desc: "We only work with boutique travel brands. Not because we can't do other things — because focus is the only path to genuine excellence.",
  },
  {
    num: "03",
    title: "Results,\nnot deliverables.",
    desc: "A beautiful website that doesn't convert is a failure. We measure success by what happens after launch — bookings, rankings, revenue.",
  },
  {
    num: "04",
    title: "Long-term\nthinking.",
    desc: "Quick wins don't build brands. We design for compounding returns — digital authority that grows stronger every single month.",
  },
];

const TIMELINE = [
  { year: "2019", event: "Founded in Milan with one deliberate constraint: boutique travel brands only." },
  { year: "2021", event: "First major rebrand — LocalWay Sicily. Conversion rate: 1.4% → 6% in 90 days." },
  { year: "2023", event: "Developed GEO framework as AI search emerged. First brand recommended by ChatGPT." },
  { year: "2024", event: "LED Travel ranks #1 in Turkey. GEO methodology validated across three markets." },
  { year: "2025", event: "Routes&Roads: 3× direct bookings. Full Package method now fully refined." },
];

const COUNT_TARGETS = [
  { end: 6, suffix: "", label: "Years building travel brands", dec: 0 },
  { end: 3, suffix: "×", label: "Average direct booking increase", dec: 0 },
  { end: 8.2, suffix: "%", label: "Peak conversion rate achieved", dec: 1 },
  { end: 100, suffix: "%", label: "Boutique travel — zero exceptions", dec: 0 },
];

/* ═══════════════════════════════════════════════════════════════════════════ */
export default function AboutContent() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsap.from(".about-hero-el", {
        opacity: 0, y: 32, stagger: 0.08, duration: 0.9, ease: "power3.out", delay: 0.12,
      });
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <HeroSection />
      <FounderSection />
      <PhilosophySection />
      <NumbersSection />
      <ValuesSection />
      <TimelineSection />
      <AboutCta />
    </>
  );
}

/* ── 1. HERO (unchanged) ─────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative bg-navy-950 pt-28 pb-0 md:pt-44 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% -5%,rgba(201,168,76,.07) 0%,transparent 60%)" }} />

      <div className="absolute bottom-0 left-0 right-0 select-none pointer-events-none overflow-hidden"
        style={{ lineHeight: 0.8 }}>
        <span className="font-cormorant font-bold text-white/[.025] block whitespace-nowrap"
          style={{ fontSize: "clamp(80px,18vw,240px)", letterSpacing: "-.02em", transform: "translateY(25%)" }}>
          OSTOIA&amp;CO
        </span>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-16">
        <div className="about-hero-el flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-gold/50" />
          <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">Who we are</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end pb-0">
          <div>
            <h1 className="about-hero-el font-cormorant font-bold text-cream leading-[1.02]"
              style={{ fontSize: "clamp(52px,8.5vw,120px)", letterSpacing: "-.02em" }}>
              Built for<br />
              <em className="not-italic" style={goldGrad}>one<br />industry.</em>
            </h1>
          </div>

          <div className="about-hero-el flex flex-col gap-5 pb-4 pt-6 lg:pt-0 lg:pl-8">
            <p className="font-inter text-[15px] md:text-[17px] leading-[1.8] text-cream/45 max-w-[420px]">
              OSTOIA&amp;CO is a digital studio founded in Milan with a single, deliberate constraint:
              we only work with boutique travel brands.
            </p>
            <p className="font-inter text-[13px] leading-[1.8] text-cream/28 max-w-[380px]">
              Not hotels. Not airlines. Not OTAs. The operators who create experiences travellers
              remember for decades — and who deserve a digital presence that reflects that quality.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="w-5 h-px bg-gold/30" />
              <span className="font-mono text-[9px] tracking-[.3em] text-gold/40 uppercase">
                Milan · Serving Europe &amp; USA
              </span>
            </div>
          </div>
        </div>

        <div className="about-hero-el grid grid-cols-2 md:grid-cols-4 gap-0 mt-16 border-t border-white/[.06]">
          {BIG_STATS.map((s, i) => (
            <div key={i}
              className="py-6 md:py-8 flex flex-col gap-2 pr-4 md:pr-8
                border-r border-white/[.05]
                even:border-r-0 md:even:border-r md:last:border-r-0
                border-b md:border-b-0 border-white/[.04]
                last:border-b-0 [&:nth-child(3)]:border-b-0"
              style={{ paddingLeft: i === 0 || i === 2 ? 0 : "16px" }}>
              <span className="font-mono font-medium text-gold/75"
                style={{ fontSize: "clamp(24px,3.5vw,48px)", letterSpacing: "-.01em" }}>
                {s.value}
              </span>
              <span className="font-mono text-[9px] tracking-[.28em] text-cream/22 uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 2. FOUNDER STORY ────────────────────────────────────────────────────── */
function FounderSection() {
  const ref = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section ref={ref} className="relative bg-navy-950 overflow-hidden">
      {/* Top gold separator */}
      <div className="h-px w-full"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.15) 30%,rgba(201,168,76,.15) 70%,transparent)" }} />

      <div className="max-w-[1200px] mx-auto px-5 md:px-16 py-20 md:py-32">

        {/* Two-column: left = portrait/initials card, right = text */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-20 items-start">

          {/* Left — portrait card */}
          <div data-reveal className="relative">
            {/* Main card */}
            <div className="relative rounded-[6px] overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(245,240,232,0.025)" }}>

              {/* Gold top stripe */}
              <div className="h-[2px]"
                style={{ background: "linear-gradient(to right,transparent,#C9A84C 20%,#E8C96A 50%,#C9A84C 80%,transparent)" }} />

              {/* Portrait area — decorative initials */}
              <div className="relative flex items-center justify-center"
                style={{ minHeight: "320px", background: "linear-gradient(160deg,rgba(201,168,76,.04) 0%,transparent 60%)" }}>

                {/* giant watermark letter */}
                <span className="absolute select-none pointer-events-none font-cormorant font-bold text-gold/[.06]"
                  style={{ fontSize: "clamp(160px,22vw,260px)", lineHeight: 1 }}>
                  V
                </span>

                {/* Center monogram */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{ border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.06)" }}>
                    <span className="font-cormorant font-bold text-[32px]" style={goldGrad}>VO</span>
                  </div>
                  <div className="text-center">
                    <p className="font-cormorant font-medium text-cream/80 text-[18px] leading-tight">Vojin Ostojić</p>
                    <p className="font-mono text-[9px] tracking-[.32em] text-gold/45 uppercase mt-1">Founder &amp; Creative Director</p>
                  </div>
                </div>
              </div>

              {/* Info strip */}
              <div className="px-7 py-5 border-t"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Location", value: "Milan, Italy" },
                    { label: "Focus", value: "Boutique Travel Digital" },
                    { label: "Since", value: "2019" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-[.28em] text-cream/22 uppercase">{label}</span>
                      <span className="font-inter text-[12px] text-cream/50">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative quote card below portrait */}
            <div className="mt-4 rounded-[4px] px-6 py-5"
              style={{ border: "1px solid rgba(201,168,76,0.12)", background: "rgba(201,168,76,0.03)" }}>
              <p className="font-cormorant italic text-[15px] leading-[1.65] text-cream/45">
                &ldquo;I got tired of watching extraordinary travel operators be invisible online while generic brands dominated search.
                So I built the studio I wished existed.&rdquo;
              </p>
            </div>
          </div>

          {/* Right — story text */}
          <div className="flex flex-col justify-center gap-8 pt-2">

            <div data-reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-5 h-px bg-gold/40" />
                <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">The story</span>
              </div>
              <h2 className="font-cormorant font-bold text-cream leading-[1.08]"
                style={{ fontSize: "clamp(34px,4.5vw,58px)", letterSpacing: "-.015em" }}>
                Why boutique travel.<br />
                Why <em className="not-italic" style={goldGrad}>only</em> boutique travel.
              </h2>
            </div>

            <div data-reveal className="flex flex-col gap-5">
              <p className="font-inter leading-[1.82] text-cream/48"
                style={{ fontSize: "clamp(14px,1.4vw,16px)" }}>
                In 2019, after years working across digital studios in Milan — branding, e-commerce, SaaS —
                I noticed a pattern. The clients that kept coming back, the projects that felt meaningful,
                the briefs that made me think hardest: they were always travel.
              </p>
              <p className="font-inter leading-[1.82] text-cream/38"
                style={{ fontSize: "clamp(13px,1.3vw,15px)" }}>
                Specifically, the boutique operators. The family-run adventure companies. The expedition leaders.
                The cultural immersion guides. Brands that were creating some of the most remarkable human experiences
                on earth — and whose digital presence was letting them down, invisibly, every single day.
              </p>
              <p className="font-inter leading-[1.82] text-cream/38"
                style={{ fontSize: "clamp(13px,1.3vw,15px)" }}>
                OSTOIA&amp;CO started with a single conviction: that specialisation produces better outcomes than breadth.
                Six years later, every client we work with is in boutique travel. Every methodology we&apos;ve built
                is designed around how premium travellers discover, consider, and book.
                Nothing else. No exceptions.
              </p>
            </div>

            {/* Horizontal divider with text */}
            <div data-reveal className="flex items-center gap-5 py-2">
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
              <span className="font-mono text-[9px] tracking-[.28em] text-cream/18 uppercase whitespace-nowrap">
                Milan · Est. 2019
              </span>
              <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </div>

            {/* 3 conviction pills */}
            <div data-reveal className="flex flex-wrap gap-2">
              {[
                "Zero generalist work",
                "Every project, personally directed",
                "Results-first methodology",
              ].map((tag) => (
                <span key={tag}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-inter text-[11px] tracking-[.08em] text-cream/38"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-gold/50 text-[6px]">◆</span>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 3. PHILOSOPHY ───────────────────────────────────────────────────────── */
function PhilosophySection() {
  const ref = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section ref={ref} className="relative bg-navy-900 py-20 md:py-32 px-5 md:px-16 overflow-hidden">
      {/* noise texture */}
      <div className="absolute inset-0 opacity-[.018] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }} />

      {/* giant decorative quote mark */}
      <div className="absolute -top-8 right-0 md:right-10 select-none pointer-events-none
        font-cormorant text-gold/[.025] leading-none"
        style={{ fontSize: "clamp(180px,30vw,520px)" }}>
        &ldquo;
      </div>

      <div className="relative max-w-[1200px] mx-auto">

        {/* Label */}
        <div data-reveal className="flex items-center gap-3 mb-12">
          <span className="w-5 h-px bg-gold/40" />
          <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">Our philosophy</span>
        </div>

        {/* Big statement */}
        <blockquote data-reveal className="font-cormorant font-bold text-cream max-w-[960px]"
          style={{ fontSize: "clamp(28px,5vw,68px)", lineHeight: 1.18, letterSpacing: "-.014em" }}>
          Most travel brands are extraordinary in person
          {" "}and{" "}
          <em className="not-italic" style={goldGrad}>invisible online.</em>
          {" "}We exist to fix that.
        </blockquote>

        {/* Attribution line */}
        <div data-reveal className="flex items-center gap-4 mt-8 mb-16 md:mb-20">
          <div className="w-8 h-px bg-gold/30" />
          <span className="font-mono text-[9px] tracking-[.28em] text-cream/22 uppercase">
            Vojin Ostojić · Founder
          </span>
        </div>

        {/* 3 pillars */}
        <div data-reveal className="grid grid-cols-1 md:grid-cols-3 gap-0 pt-12 md:pt-14 border-t border-white/[.06]">
          {[
            {
              num: "01",
              label: "Strategy",
              icon: "→",
              text: "Every design decision tied to a business outcome. We don't add elements for aesthetics — we add them for results.",
            },
            {
              num: "02",
              label: "Craft",
              icon: "◇",
              text: "Custom code, custom design, custom content. Nothing off a shelf. Your brand is unique; your digital presence should be too.",
            },
            {
              num: "03",
              label: "Authority",
              icon: "△",
              text: "We build for how AI and search engines work in 5 years — because that's where your clients are headed.",
            },
          ].map(({ num, label, icon, text }, i) => (
            <div key={label}
              className="flex flex-col gap-5 py-10 md:py-0"
              style={{
                paddingRight: i < 2 ? "clamp(24px,3.5vw,56px)" : 0,
                paddingLeft: i > 0 ? "clamp(24px,3.5vw,56px)" : 0,
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                borderTop: i > 0 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
              // desktop: no top border; mobile: top border on items 2/3
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-gold/35 text-[14px]">{icon}</span>
                  <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">{label}</span>
                </div>
                <span className="font-mono text-[9px] tracking-[.2em] text-cream/12">{num}</span>
              </div>
              <p className="font-inter text-[13px] md:text-[14px] leading-[1.82] text-cream/38">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 4. NUMBERS ──────────────────────────────────────────────────────────── */
function NumbersSection() {
  const ref = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(el.querySelectorAll("[data-reveal]"), {
        opacity: 0, y: 24, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });

      COUNT_TARGETS.forEach((t, i) => {
        const span = numRefs.current[i];
        if (!span) return;
        const start = performance.now();
        const dur = 1800;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          span.textContent = `${(t.end * eased).toFixed(t.dec)}${t.suffix}`;
          if (p < 1) requestAnimationFrame(tick);
          else span.textContent = `${t.end.toFixed(t.dec)}${t.suffix}`;
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.2 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-950 py-20 md:py-32 px-5 md:px-16 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.12),transparent)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 55% at 50% 50%,rgba(201,168,76,.03) 0%,transparent 65%)" }} />

      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div data-reveal className="flex flex-col gap-4 mb-16 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="w-5 h-px bg-gold/40" />
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">By the numbers</span>
          </div>
          <h2 className="font-cormorant font-bold text-cream"
            style={{ fontSize: "clamp(34px,5vw,64px)", lineHeight: 1.08, letterSpacing: "-.015em" }}>
            Six years of{" "}
            <em className="not-italic" style={goldGrad}>measurable</em>{" "}results.
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {COUNT_TARGETS.map((t, i) => (
            <div key={i} data-reveal
              className="flex flex-col gap-4 py-10 md:py-12"
              style={{
                paddingRight: i < 3 ? "clamp(16px,3vw,48px)" : 0,
                paddingLeft: i > 0 ? "clamp(16px,3vw,48px)" : 0,
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}>

              <span ref={el => { numRefs.current[i] = el; }}
                className="font-cormorant font-bold leading-none"
                style={{
                  fontSize: "clamp(44px,7vw,100px)",
                  letterSpacing: "-.025em",
                  background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 50%,#C9A84C 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                0{t.suffix}
              </span>

              <div className="flex flex-col gap-1">
                <span className="font-inter text-[11px] md:text-[12px] leading-[1.6] text-cream/35 max-w-[160px]">
                  {t.label}
                </span>
                <div className="w-6 h-[1px] mt-1" style={{ background: "rgba(201,168,76,0.3)" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 5. VALUES ───────────────────────────────────────────────────────────── */
function ValuesSection() {
  const ref = useReveal(0.1) as React.RefObject<HTMLElement>;
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative bg-navy-900 py-20 md:py-32 px-5 md:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }} />

      <div className="relative max-w-[1200px] mx-auto">

        {/* Header */}
        <div data-reveal className="mb-14 md:mb-18 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="w-5 h-px bg-gold/40" />
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">How we operate</span>
          </div>
          <h2 className="font-cormorant font-bold text-cream"
            style={{ fontSize: "clamp(34px,5vw,68px)", lineHeight: 1.06, letterSpacing: "-.015em" }}>
            Four principles we{" "}
            <em className="not-italic" style={goldGrad}>don&apos;t compromise on.</em>
          </h2>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {VALUES.map((v, i) => {
            const on = hovered === i;
            return (
              <div key={i} data-reveal
                className="val-card relative rounded-[6px] border overflow-hidden cursor-default
                  flex flex-col justify-between p-8 md:p-10 min-h-[260px] md:min-h-[340px]"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderColor: on ? "rgba(201,168,76,0.3)" : "rgba(245,240,232,0.06)",
                  background: on ? "rgba(201,168,76,0.025)" : "rgba(245,240,232,0.012)",
                  transition: "border-color 0.45s, background 0.45s",
                }}>

                {/* Gold top accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background: "linear-gradient(to right,transparent,#C9A84C 20%,#E8C96A 50%,#C9A84C 80%,transparent)",
                    opacity: on ? 1 : 0,
                    transition: "opacity 0.4s",
                  }} />

                {/* Huge background number */}
                <div className="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden"
                  style={{ lineHeight: 1 }}>
                  <span className="font-cormorant font-bold block"
                    style={{
                      fontSize: "clamp(100px,13vw,170px)",
                      color: on ? "rgba(201,168,76,0.07)" : "rgba(245,240,232,0.025)",
                      transition: "color 0.5s",
                      transform: "translate(5%,18%)",
                    }}>
                    {v.num}
                  </span>
                </div>

                {/* Small number top */}
                <span className="font-mono text-[9px] tracking-[.32em] text-gold/30 uppercase">{v.num}</span>

                {/* Content */}
                <div className="flex flex-col gap-4 relative z-10">
                  <h3 className="font-cormorant font-bold whitespace-pre-line"
                    style={{
                      fontSize: "clamp(26px,3.2vw,42px)", lineHeight: 1.12,
                      color: on ? "#F5F0E8" : "rgba(245,240,232,0.78)",
                      transition: "color 0.35s",
                    }}>
                    {v.title}
                  </h3>
                  <p className="font-inter text-[13px] leading-[1.78]"
                    style={{
                      color: on ? "rgba(245,240,232,0.52)" : "rgba(245,240,232,0.3)",
                      transition: "color 0.35s",
                    }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── 6. TIMELINE ─────────────────────────────────────────────────────────── */
function TimelineSection() {
  const ref = useReveal(0.1) as React.RefObject<HTMLElement>;
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative bg-navy-950 py-20 md:py-32 px-5 md:px-16 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.1),transparent)" }} />

      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div data-reveal className="mb-14 md:mb-18 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="w-5 h-px bg-gold/40" />
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">Our journey</span>
          </div>
          <h2 className="font-cormorant font-bold text-cream"
            style={{ fontSize: "clamp(34px,5vw,68px)", lineHeight: 1.06, letterSpacing: "-.015em" }}>
            How we got here.
          </h2>
        </div>

        {/* Timeline rows */}
        <div className="flex flex-col">
          {TIMELINE.map((t, i) => {
            const on = hovered === i;
            const isLast = i === TIMELINE.length - 1;
            return (
              <div key={i} data-reveal
                className="relative cursor-default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.07)",
                  borderBottom: isLast ? "1px solid rgba(255,255,255,0.07)" : "none",
                  background: on ? "rgba(201,168,76,0.018)" : "transparent",
                  transition: "background 0.4s",
                }}>

                {/* Gold left bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-r-full"
                  style={{
                    background: "linear-gradient(to bottom,#C9A84C,#E8C96A)",
                    opacity: on ? 1 : 0,
                    transform: on ? "scaleY(1)" : "scaleY(0.25)",
                    transformOrigin: "top",
                    transition: "opacity 0.35s, transform 0.5s cubic-bezier(.16,1,.3,1)",
                  }} />

                <div className="py-8 md:py-10 pl-4 md:pl-6 grid grid-cols-[72px_1fr] md:grid-cols-[140px_1fr] gap-4 md:gap-12 items-center">

                  {/* Year */}
                  <div className="flex flex-col gap-1">
                    <span className="font-mono font-medium leading-none"
                      style={{
                        fontSize: "clamp(16px,2.2vw,28px)",
                        color: on ? "#C9A84C" : "rgba(201,168,76,0.32)",
                        transition: "color 0.35s",
                        letterSpacing: "-.01em",
                      }}>
                      {t.year}
                    </span>
                  </div>

                  {/* Event */}
                  <div className="flex items-center justify-between gap-6">
                    <p className="font-inter leading-[1.72]"
                      style={{
                        fontSize: "clamp(13px,1.4vw,15px)",
                        color: on ? "rgba(245,240,232,0.68)" : "rgba(245,240,232,0.36)",
                        transition: "color 0.35s",
                      }}>
                      {t.event}
                    </p>
                    {/* Arrow reveal */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"
                      style={{
                        opacity: on ? 1 : 0,
                        transform: on ? "translateX(0)" : "translateX(-8px)",
                        transition: "opacity 0.35s, transform 0.45s cubic-bezier(.16,1,.3,1)",
                      }}>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="rgba(201,168,76,0.7)"
                        strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p data-reveal className="font-mono text-[9px] tracking-[.28em] text-cream/15 uppercase mt-10">
          And we&apos;re just getting started.
        </p>
      </div>
    </section>
  );
}

/* ── 7. CTA ──────────────────────────────────────────────────────────────── */
function AboutCta() {
  const ref = useReveal(0.2) as React.RefObject<HTMLElement>;

  return (
    <section ref={ref} className="relative bg-navy-900 py-20 md:py-32 px-5 md:px-16 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.14),transparent)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 70% at 50% 115%,rgba(201,168,76,.05) 0%,transparent 65%)" }} />

      {/* Watermark */}
      <div className="absolute inset-x-0 bottom-0 select-none pointer-events-none overflow-hidden flex items-end justify-center">
        <span className="font-cormorant font-bold text-white/[.018] whitespace-nowrap block"
          style={{ fontSize: "clamp(50px,14vw,200px)", letterSpacing: "-.02em", transform: "translateY(20%)" }}>
          LET&apos;S BUILD
        </span>
      </div>

      <div className="relative max-w-[900px] mx-auto text-center flex flex-col items-center gap-8">

        <div data-reveal className="flex items-center gap-3">
          <span className="w-5 h-px bg-gold/30" />
          <span className="font-mono text-[9px] tracking-[.38em] text-gold/45 uppercase">Work with us</span>
          <span className="w-5 h-px bg-gold/30" />
        </div>

        <h2 data-reveal className="font-cormorant font-bold text-cream text-balance"
          style={{ fontSize: "clamp(30px,6vw,84px)", lineHeight: 1.06, letterSpacing: "-.018em" }}>
          If you care about your brand<br className="hidden md:block" /> as much as we do —
        </h2>

        <p data-reveal className="font-cormorant font-medium text-balance"
          style={{ fontSize: "clamp(22px,4vw,56px)", lineHeight: 1.2, letterSpacing: "-.01em", ...goldGrad }}>
          let&apos;s build something.
        </p>

        <div data-reveal className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
          <Link href="/contact"
            className="group relative h-14 px-10 rounded-[3px] overflow-hidden
              font-inter text-[11px] tracking-[.18em] uppercase
              border border-gold/50 text-gold
              transition-all duration-400
              inline-flex items-center gap-3 w-full sm:w-auto"
            style={{ minWidth: "230px", justifyContent: "center" }}>
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0
              transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)]" />
            <span className="relative flex items-center gap-3 group-hover:text-navy-900 transition-colors duration-200">
              Start a conversation
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>

          <Link href="/work"
            className="font-inter text-[12px] tracking-[.1em] uppercase text-cream/28
              hover:text-cream/65 transition-colors duration-300 min-h-[44px] flex items-center">
            See our work →
          </Link>
        </div>

        <p data-reveal className="font-mono text-[9px] tracking-[.22em] text-cream/12 uppercase">
          Based in Milan · Available globally · Selective by design
        </p>
      </div>
    </section>
  );
}
