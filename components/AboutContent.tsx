"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────────────────────────── */

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

/* ─────────────────────────────────────────────────────────────── */

export default function AboutContent() {

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsap.from(".about-hero-el", {
        opacity: 0, y: 32, stagger: 0.08, duration: 0.9, ease: "power3.out", delay: 0.12,
      });
    };
    init();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <NumbersSection />
      <ValuesSection />
      <TimelineSection />
      <AboutCta />
    </>
  );
}

/* ── 1. HERO ─────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative bg-navy-950 pt-28 pb-0 md:pt-44 overflow-hidden">
      {/* radial gold glow top */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% -5%,rgba(201,168,76,.07) 0%,transparent 60%)" }} />

      {/* giant watermark */}
      <div className="absolute bottom-0 left-0 right-0 select-none pointer-events-none overflow-hidden"
        style={{ lineHeight: 0.8 }}>
        <span className="font-cormorant font-bold text-white/[.025] block whitespace-nowrap"
          style={{ fontSize: "clamp(80px,18vw,240px)", letterSpacing: "-.02em", transform: "translateY(25%)" }}>
          OSTOIA&amp;CO
        </span>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-16">
        {/* top label */}
        <div className="about-hero-el flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-gold/50" />
          <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">Who we are</span>
        </div>

        {/* main statement — 2 col on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-end pb-0">
          <div>
            <h1 className="about-hero-el font-cormorant font-bold text-cream leading-[1.02]"
              style={{ fontSize: "clamp(52px,8.5vw,120px)", letterSpacing: "-.02em" }}>
              Built for<br />
              <em className="not-italic" style={{
                background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 40%,#C9A84C 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>one<br />industry.</em>
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

        {/* stat strip — spans full width, 2×2 on mobile */}
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

/* ── 2. PHILOSOPHY ───────────────────────────────────────────── */
function PhilosophySection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".phil-el", { opacity: 0, y: 28, stagger: 0.1, duration: 0.9, ease: "power3.out" });
    }, { threshold: 0.12 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-900 py-16 md:py-28 px-5 md:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[.018] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }} />

      {/* enormous decorative mark */}
      <div className="absolute -top-6 right-0 md:right-12 select-none pointer-events-none
        font-cormorant text-gold/[.03] leading-none"
        style={{ fontSize: "clamp(160px,28vw,480px)" }}>
        &ldquo;
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        {/* big statement */}
        <blockquote className="phil-el font-cormorant font-bold text-cream max-w-[920px]"
          style={{ fontSize: "clamp(26px,4.5vw,64px)", lineHeight: 1.22, letterSpacing: "-.012em" }}>
          Most travel brands are extraordinary in person
          {" "}and{" "}
          <em className="not-italic" style={{
            background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 50%,#C9A84C 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            invisible online.
          </em>
          {" "}We exist to fix that.
        </blockquote>

        {/* 3-pillar grid */}
        <div className="phil-el grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-20 pt-12 md:pt-14 border-t border-white/[.06]">
          {[
            {
              label: "Strategy",
              icon: "→",
              text: "Every design decision tied to a business outcome. We don't add elements for aesthetics — we add them for results.",
            },
            {
              label: "Craft",
              icon: "◇",
              text: "Custom code, custom design, custom content. Nothing off a shelf. Your brand is unique; your digital presence should be too.",
            },
            {
              label: "Authority",
              icon: "△",
              text: "We build for how AI and search engines work in 5 years — because that's where your clients are headed.",
            },
          ].map(({ label, icon, text }) => (
            <div key={label} className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-gold/40 text-[14px]">{icon}</span>
                <span className="font-mono text-[9px] tracking-[.38em] text-gold/45 uppercase">{label}</span>
              </div>
              <p className="font-inter text-[13px] leading-[1.78] text-cream/38">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3. NUMBERS ────────────────────────────────────────────────── */
function NumbersSection() {
  const ref = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const targets = [
    { end: 6, suffix: "", label: "Years building travel brands", dec: 0 },
    { end: 3, suffix: "×", label: "Average direct booking increase", dec: 0 },
    { end: 8.2, suffix: "%", label: "Peak conversion rate achieved", dec: 1 },
    { end: 100, suffix: "%", label: "Boutique travel — zero exceptions", dec: 0 },
  ];

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".nums-el", { opacity: 0, y: 24, stagger: 0.1, duration: 0.8, ease: "power3.out" });

      // count up
      targets.forEach((t, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const start = performance.now();
        const dur = 1800;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const val = t.end * ease;
          el.textContent = `${val.toFixed(t.dec)}${t.suffix}`;
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = `${t.end.toFixed(t.dec)}${t.suffix}`;
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.2 });
    io.observe(el); return () => io.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-950 py-16 md:py-28 px-5 md:px-16 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.12),transparent)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%,rgba(201,168,76,.03) 0%,transparent 65%)" }} />

      <div className="max-w-[1200px] mx-auto">
        <div className="nums-el mb-12 md:mb-14 flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">By the numbers</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {targets.map((t, i) => (
            <div key={i}
              className="nums-el flex flex-col gap-3 py-8 md:py-10 pr-4 md:pr-10
                border-r border-white/[.05]
                even:border-r-0 md:even:border-r md:last:border-r-0
                border-b md:border-b-0 border-white/[.04]
                last:border-b-0 [&:nth-child(3)]:border-b-0"
              style={{ paddingLeft: i === 0 || i === 2 ? 0 : "12px" }}>
              <span ref={el => { numRefs.current[i] = el; }}
                className="font-cormorant font-bold text-gold leading-none"
                style={{ fontSize: "clamp(40px,7vw,96px)", letterSpacing: "-.02em" }}>
                0{t.suffix}
              </span>
              <span className="font-inter text-[11px] md:text-[12px] leading-[1.6] text-cream/35 max-w-[160px]">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 4. VALUES ─────────────────────────────────────────────────── */
function ValuesSection() {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".val-header > *", { opacity: 0, y: 24, stagger: 0.08, duration: 0.8, ease: "power3.out" });
      gsap.from(".val-card", { opacity: 0, y: 28, stagger: 0.1, duration: 0.75, ease: "power3.out", delay: 0.25 });
    }, { threshold: 0.1 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-900 py-16 md:py-28 px-5 md:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-[.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }} />

      <div className="relative max-w-[1200px] mx-auto">
        <div className="val-header mb-12 md:mb-16 flex flex-col gap-5">
          <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">How we operate</span>
          <h2 className="font-cormorant font-bold text-cream"
            style={{ fontSize: "clamp(36px,5vw,72px)", lineHeight: 1.06, letterSpacing: "-.015em" }}>
            Four principles we<br className="hidden md:block" />{" "}
            <em className="not-italic" style={{
              background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 50%,#C9A84C 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>don&apos;t compromise on.</em>
          </h2>
        </div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {VALUES.map((v, i) => {
            const on = hovered === i;
            return (
              <div key={i}
                className="val-card relative rounded-[6px] border overflow-hidden cursor-default
                  flex flex-col justify-between p-7 md:p-10 min-h-[240px] md:min-h-[320px]"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  borderColor: on ? "rgba(201,168,76,0.35)" : "rgba(245,240,232,0.06)",
                  background: on ? "rgba(201,168,76,0.03)" : "rgba(245,240,232,0.012)",
                  transition: "border-color 0.4s, background 0.4s",
                }}>
                {/* huge background number */}
                <div className="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden"
                  style={{ lineHeight: 1 }}>
                  <span className="font-cormorant font-bold block"
                    style={{
                      fontSize: "clamp(100px,13vw,160px)",
                      color: on ? "rgba(201,168,76,0.07)" : "rgba(245,240,232,0.025)",
                      transition: "color 0.5s",
                      transform: "translate(5%,18%)",
                    }}>
                    {v.num}
                  </span>
                </div>

                {/* small number top */}
                <span className="font-mono text-[10px] tracking-[.3em] text-gold/35 uppercase">{v.num}</span>

                {/* content */}
                <div className="flex flex-col gap-4 relative z-10">
                  <h3 className="font-cormorant font-bold whitespace-pre-line"
                    style={{
                      fontSize: "clamp(24px,3vw,40px)", lineHeight: 1.15,
                      color: on ? "#F5F0E8" : "rgba(245,240,232,0.8)",
                      transition: "color 0.35s",
                    }}>
                    {v.title}
                  </h3>
                  <p className="font-inter text-[13px] leading-[1.75]"
                    style={{
                      color: on ? "rgba(245,240,232,0.5)" : "rgba(245,240,232,0.32)",
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

/* ── 5. TIMELINE ─────────────────────────────────────────────── */
function TimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".tl-header > *", { opacity: 0, y: 24, stagger: 0.08, duration: 0.8, ease: "power3.out" });
      gsap.from(".tl-row", { opacity: 0, x: -20, stagger: 0.1, duration: 0.75, ease: "power3.out", delay: 0.3 });
    }, { threshold: 0.1 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-950 py-16 md:py-28 px-5 md:px-16 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.1),transparent)" }} />

      <div className="max-w-[1200px] mx-auto">
        <div className="tl-header mb-12 md:mb-16 flex flex-col gap-5">
          <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">Our journey</span>
          <h2 className="font-cormorant font-bold text-cream"
            style={{ fontSize: "clamp(36px,5vw,72px)", lineHeight: 1.06, letterSpacing: "-.015em" }}>
            How we got here.
          </h2>
        </div>

        <div className="flex flex-col">
          {TIMELINE.map((t, i) => {
            const on = hovered === i;
            return (
              <div key={i}
                className="tl-row group relative border-t border-white/[.07] last:border-b last:border-white/[.07]
                  cursor-default"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: on ? "rgba(201,168,76,0.02)" : "transparent",
                  transition: "background 0.35s",
                }}>
                {/* gold left indicator */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-r-full"
                  style={{
                    background: "linear-gradient(to bottom,#C9A84C,#E8C96A)",
                    opacity: on ? 1 : 0,
                    transform: on ? "scaleY(1)" : "scaleY(0.3)",
                    transition: "opacity 0.35s, transform 0.45s cubic-bezier(.16,1,.3,1)",
                  }} />

                <div className="py-7 md:py-9 pl-0 md:pl-4 grid grid-cols-[60px_1fr] md:grid-cols-[120px_1fr] gap-4 md:gap-10 items-center">
                  {/* year — large */}
                  <span className="font-mono font-medium leading-none"
                    style={{
                      fontSize: "clamp(18px,2.8vw,36px)",
                      color: on ? "#C9A84C" : "rgba(201,168,76,0.35)",
                      transition: "color 0.35s",
                      letterSpacing: "-.01em",
                    }}>
                    {t.year}
                  </span>

                  {/* event */}
                  <p className="font-inter text-[13px] md:text-[15px] leading-[1.7]"
                    style={{
                      color: on ? "rgba(245,240,232,0.65)" : "rgba(245,240,232,0.38)",
                      transition: "color 0.35s",
                    }}>
                    {t.event}
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

/* ── 6. CTA ─────────────────────────────────────────────────────── */
function AboutCta() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".about-cta-el", { opacity: 0, y: 22, stagger: 0.1, duration: 0.8, ease: "power3.out" });
    }, { threshold: 0.2 });
    io.observe(el); return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-900 py-16 md:py-28 px-5 md:px-16 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.12),transparent)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 80% at 50% 110%,rgba(201,168,76,.05) 0%,transparent 65%)" }} />

      {/* huge watermark */}
      <div className="absolute inset-x-0 bottom-0 select-none pointer-events-none overflow-hidden flex items-end justify-center">
        <span className="font-cormorant font-bold text-white/[.02] whitespace-nowrap block"
          style={{ fontSize: "clamp(50px,14vw,200px)", letterSpacing: "-.02em", transform: "translateY(20%)" }}>
          LET&apos;S BUILD
        </span>
      </div>

      <div className="relative max-w-[900px] mx-auto text-center flex flex-col items-center gap-8">
        <div className="about-cta-el flex items-center gap-3">
          <span className="w-5 h-px bg-gold/30" />
          <span className="font-mono text-[9px] tracking-[.38em] text-gold/45 uppercase">Work with us</span>
          <span className="w-5 h-px bg-gold/30" />
        </div>

        <h2 className="about-cta-el font-cormorant font-bold text-cream text-balance"
          style={{ fontSize: "clamp(30px,6vw,84px)", lineHeight: 1.06, letterSpacing: "-.018em" }}>
          If you care about your brand<br className="hidden md:block" /> as much as we do —
        </h2>

        <p className="about-cta-el font-cormorant font-medium text-gold/70 text-balance"
          style={{ fontSize: "clamp(22px,4vw,56px)", lineHeight: 1.2, letterSpacing: "-.01em" }}>
          let&apos;s build something.
        </p>

        <div className="about-cta-el flex flex-col sm:flex-row items-center gap-5 mt-2 w-full sm:w-auto">
          <Link href="/contact"
            className="group relative h-14 px-8 sm:px-10 rounded-[3px] overflow-hidden
              font-inter text-[11px] tracking-[.18em] uppercase
              border border-gold/50 text-gold
              hover:border-gold hover:text-navy-900
              transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]
              inline-flex items-center gap-3 w-full sm:w-auto"
            style={{ minWidth: "230px", justifyContent: "center" }}>
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0
              transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)]" />
            <span className="relative flex items-center gap-3">
              Start a conversation
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
          <Link href="/work"
            className="font-inter text-[12px] tracking-[.1em] uppercase text-cream/30
              hover:text-cream/65 transition-colors duration-300 min-h-[44px] flex items-center">
            See our work →
          </Link>
        </div>

        <p className="about-cta-el font-mono text-[9px] tracking-[.22em] text-cream/15 uppercase">
          Based in Milan · Available globally · Selective by design
        </p>
      </div>
    </section>
  );
}
