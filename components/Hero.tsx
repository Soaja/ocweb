"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const TICKER_ITEMS = [
  "Routes&Roads", "USA", "LocalWay Sicily", "Italy",
  "LED Travel", "Turkey", "12+ travel brands",
  "Milan-based", "Boutique Tourism", "Digital Excellence",
];

const VIDEO_SRC = "https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_25fps.mp4";

const STATS = [
  { target: 8.2,  decimals: 1, suffix: "%", label: "Avg. conversion" },
  { target: 3,    decimals: 0, suffix: "×", label: "Direct bookings"  },
  { target: 12,   decimals: 0, suffix: "+", label: "Travel brands"    },
];

function countUp(el: HTMLElement, to: number, decimals: number, suffix: string, duration = 1300) {
  const start = performance.now();
  const run = (now: number) => {
    const t     = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (eased * to).toFixed(decimals) + suffix;
    if (t < 1) requestAnimationFrame(run);
  };
  requestAnimationFrame(run);
}

export default function Hero() {
  const labelRef    = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef      = useRef<HTMLParagraphElement>(null);
  const ctasRef     = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const tickerRef   = useRef<HTMLDivElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const statEls     = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");

      gsap.set(
        [labelRef.current, headlineRef.current, subRef.current,
         ctasRef.current, statsRef.current, tickerRef.current],
        { opacity: 0, y: 18 }
      );
      gsap.set(overlayRef.current, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(overlayRef.current,  { opacity: 1,   duration: 1.2 },     0)
        .to(labelRef.current,    { opacity: 1, y: 0, duration: 0.7 }, 0.6)
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.82)
        .to(subRef.current,      { opacity: 1, y: 0, duration: 0.7 }, 1.1)
        .to(ctasRef.current,     { opacity: 1, y: 0, duration: 0.6 }, 1.28)
        .to(statsRef.current,    { opacity: 1, y: 0, duration: 0.6 }, 1.42)
        .add(() => {
          STATS.forEach((s, i) => {
            const el = statEls.current[i];
            if (el) countUp(el, s.target, s.decimals, s.suffix, 1400 + i * 120);
          });
        }, 1.42)
        .to(tickerRef.current,   { opacity: 1, y: 0, duration: 0.5 }, 1.55);
    };
    init();
  }, []);

  return (
    <section className="relative h-[100dvh] min-h-[580px] flex flex-col overflow-hidden bg-navy-950">

      {/* ── VIDEO ────────────────────────────────────────────── */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.38) saturate(0.6)" }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* ── OVERLAYS ─────────────────────────────────────────── */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom,
            rgba(5,13,24,0.82) 0%,
            rgba(5,13,24,0.28) 38%,
            rgba(5,13,24,0.28) 60%,
            rgba(5,13,24,0.96) 100%)`,
        }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center,transparent 45%,rgba(5,13,24,0.85) 100%)" }} />

      {/* ── CONTENT — bottom on mobile, centered on desktop ──── */}
      <div className="relative z-10 flex-1 flex flex-col
        justify-end md:justify-center items-center text-center
        px-5 md:px-16 pb-8 md:pb-0">

        {/* Label */}
        <div ref={labelRef} className="flex items-center gap-3 mb-4 md:mb-7">
          <span className="w-6 h-px bg-gold/50 hidden md:block" />
          <span className="font-mono text-[10px] tracking-[0.32em] text-gold/65 uppercase">
            <span className="hidden sm:inline">Milan · Boutique Travel · </span>Digital Agency
          </span>
          <span className="w-6 h-px bg-gold/50 hidden md:block" />
        </div>

        {/* Headline — bigger on mobile, full width, text-balance */}
        <h1
          ref={headlineRef}
          className="font-cormorant font-bold text-cream text-balance w-full md:max-w-none"
          style={{ fontSize: "clamp(44px,8vw,112px)", lineHeight: 1.06, letterSpacing: "-0.015em" }}
        >
          Your experiences deserve{" "}
          <em className="not-italic" style={{
            background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 45%,#C9A84C 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            digital excellence.
          </em>
        </h1>

        {/* Sub */}
        <p
          ref={subRef}
          className="font-inter text-[13px] md:text-[16px] leading-[1.7] text-cream/48
            max-w-[360px] md:max-w-[500px] mt-4 mb-6 md:mt-6 md:mb-9"
        >
          We design and build for boutique travel brands that refuse to be ordinary.
        </p>

        {/* CTAs — side by side on all sizes */}
        <div ref={ctasRef} className="flex flex-row items-center justify-center gap-3 md:gap-4 mb-7 md:mb-10">
          <Link href="/contact" data-cursor="LET'S TALK"
            className="group inline-flex items-center justify-center gap-2 h-11 md:h-12 px-6 md:px-8
              bg-gold/10 border border-gold/55 rounded-[3px] font-inter text-[10px] md:text-[11px]
              tracking-[0.16em] md:tracking-[0.18em] text-gold uppercase hover:bg-gold hover:text-navy-900
              hover:border-gold transition-all duration-300
              ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-sm whitespace-nowrap">
            Start a project
            <svg width="11" height="11" viewBox="0 0 13 13" fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1 shrink-0">
              <path d="M2 6.5h9M8 3l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.3"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/work" data-cursor="EXPLORE"
            className="inline-flex items-center justify-center h-11 md:h-12 px-5 md:px-6
              rounded-[3px] font-inter text-[10px] md:text-[11px]
              tracking-[0.16em] md:tracking-[0.18em] text-cream/55 uppercase
              hover:text-cream/90 border border-white/[.15] hover:border-white/30
              transition-all duration-300 backdrop-blur-sm whitespace-nowrap">
            View work
          </Link>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="flex items-center gap-6 sm:gap-10 md:gap-14">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <span
                ref={el => { statEls.current[i] = el; }}
                className="font-mono font-medium text-gold leading-none tracking-tight"
                style={{ fontSize: "clamp(20px,3vw,30px)" }}
              >
                0{s.suffix}
              </span>
              <span className="font-inter text-[9px] tracking-[0.16em] text-cream/35 uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── TICKER ───────────────────────────────────────────── */}
      <div ref={tickerRef}
        className="relative z-10 border-t border-white/[0.07] overflow-hidden shrink-0">
        <div className="absolute left-0 inset-y-0 w-10 z-10 bg-gradient-to-r from-navy-950/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-10 z-10 bg-gradient-to-l from-navy-950/80 to-transparent pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap py-3 w-max">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-inter text-[10px] tracking-[0.22em] uppercase text-cream/18 px-4 md:px-5">
                {item}
              </span>
              <span className="text-gold/25 text-[7px]">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
