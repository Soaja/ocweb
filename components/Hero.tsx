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
  { target: 8.2,  decimals: 1, suffix: "%", label: "Avg. conversion rate" },
  { target: 3,    decimals: 0, suffix: "×", label: "Direct bookings"      },
  { target: 12,   decimals: 0, suffix: "+", label: "Travel brands"        },
];

function countUp(el: HTMLElement, to: number, decimals: number, suffix: string, duration = 1300) {
  const start = performance.now();
  const run = (now: number) => {
    const t      = Math.min((now - start) / duration, 1);
    const eased  = 1 - Math.pow(1 - t, 3);
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
        { opacity: 0, y: 22 }
      );
      gsap.set(overlayRef.current, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(overlayRef.current,   { opacity: 1,   duration: 1.2 },     0)
        .to(labelRef.current,     { opacity: 1, y: 0, duration: 0.7 }, 0.6)
        .to(headlineRef.current,  { opacity: 1, y: 0, duration: 0.9 }, 0.85)
        .to(subRef.current,       { opacity: 1, y: 0, duration: 0.7 }, 1.15)
        .to(ctasRef.current,      { opacity: 1, y: 0, duration: 0.6 }, 1.35)
        .to(statsRef.current,     { opacity: 1, y: 0, duration: 0.6 }, 1.5)
        .add(() => {
          STATS.forEach((s, i) => {
            const el = statEls.current[i];
            if (el) countUp(el, s.target, s.decimals, s.suffix, 1400 + i * 120);
          });
        }, 1.5)
        .to(tickerRef.current,    { opacity: 1, y: 0, duration: 0.5 }, 1.65);
    };

    init();
  }, []);

  return (
    <section className="relative h-[100dvh] flex flex-col overflow-hidden bg-navy-950">

      {/* ── VIDEO BACKGROUND ─────────────────────────────────── */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.42) saturate(0.65)" }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>

      {/* ── GRADIENT OVERLAY ─────────────────────────────────── */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom,
            rgba(10,22,40,0.80) 0%,
            rgba(10,22,40,0.35) 35%,
            rgba(10,22,40,0.35) 65%,
            rgba(10,22,40,0.95) 100%)`,
        }}
      />
      {/* edge vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center,transparent 48%,rgba(5,13,24,0.88) 100%)" }} />

      {/* ── CENTRE CONTENT ───────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 md:px-16">

        {/* Label */}
        <div ref={labelRef} className="flex items-center gap-3 mb-7">
          <span className="w-8 h-px bg-gold/60 hidden sm:block" />
          <span className="font-mono text-[10px] tracking-[0.35em] text-gold/65 uppercase">
            <span className="hidden sm:inline">Milan · Boutique Travel · </span>Digital Agency
          </span>
          <span className="w-8 h-px bg-gold/60 hidden sm:block" />
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-cormorant font-bold text-cream text-balance"
          style={{ fontSize: "clamp(52px,7.5vw,112px)", lineHeight: 1.04, letterSpacing: "-0.01em" }}
        >
          Your experiences deserve<br />
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
          className="font-inter text-[15px] md:text-[17px] leading-[1.7] text-cream/50 max-w-[520px] mt-6 mb-9"
        >
          We design and build for the boutique travel brands that refuse
          to be ordinary — tour operators, hotels, independent agencies.
        </p>

        {/* CTAs */}
        <div ref={ctasRef} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 w-full px-4 sm:px-0">
          <Link href="/contact" data-cursor="LET'S TALK"
            className="group inline-flex items-center justify-center gap-3 h-12 w-full sm:w-auto px-8
              bg-gold/10 border border-gold/60 rounded-[3px] font-inter text-[11px]
              tracking-[0.18em] text-gold uppercase hover:bg-gold hover:text-navy-900
              hover:border-gold transition-all duration-300
              ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-sm">
            Start a project
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M2 6.5h9M8 3l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.3"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/work" data-cursor="EXPLORE"
            className="inline-flex items-center justify-center gap-2 h-12 w-full sm:w-auto px-6
              rounded-[3px] font-inter text-[11px] tracking-[0.18em] text-cream/50 uppercase
              hover:text-cream/85 border border-white/10 hover:border-white/28
              transition-all duration-300 backdrop-blur-sm">
            View our work
          </Link>
        </div>

        {/* Stats — counter-animated */}
        <div ref={statsRef} className="flex items-center gap-6 sm:gap-8 md:gap-12">
          {STATS.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                ref={el => { statEls.current[i] = el; }}
                className="font-mono text-[26px] md:text-[30px] text-gold font-medium leading-none tracking-tight"
              >
                0{s.suffix}
              </span>
              <span className="font-inter text-[9px] tracking-[0.2em] text-cream/38 uppercase mt-1.5">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SCROLL INDICATOR ─────────────────────────────────── */}
      <div className="relative z-10 flex justify-center pb-7">
        <div className="flex flex-col items-center gap-2 opacity-35">
          <span className="font-mono text-[8px] tracking-[0.35em] text-cream/60 uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-cream/50 to-transparent" />
        </div>
      </div>

      {/* ── TICKER ───────────────────────────────────────────── */}
      <div ref={tickerRef}
        className="relative z-10 border-t border-white/[0.07] overflow-hidden shrink-0">
        <div className="absolute left-0 inset-y-0 w-14 z-10 bg-gradient-to-r from-navy-950/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-14 z-10 bg-gradient-to-l from-navy-950/80 to-transparent pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap py-3 w-max">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center">
              <span className="font-inter text-[10px] tracking-[0.22em] uppercase text-cream/18 px-5">
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
