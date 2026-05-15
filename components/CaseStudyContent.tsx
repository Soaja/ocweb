"use client";

import { useEffect } from "react";
import Link from "next/link";

export type CaseStudyData = {
  num: string;
  brand: string;
  location: string;
  category: string;
  tagline: string;
  year: string;
  services: string[];
  challenge: string;
  approach: string[];
  results: { value: string; label: string; sub?: string }[];
  testimonial?: { quote: string; author: string; role: string };
  nextHref: string;
  nextBrand: string;
};

export default function CaseStudyContent({ data }: { data: CaseStudyData }) {
  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsap.from(".cs-hero-el", {
        opacity: 0, y: 28, stagger: 0.09, duration: 0.85, ease: "power3.out", delay: 0.1,
      });
    };
    init();
    return () => { cancelled = true; };
  }, []);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 pt-28 pb-14 md:pt-44 md:pb-28 px-5 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%,rgba(201,168,76,.055) 0%,transparent 65%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.12),transparent)" }} />

        <div className="max-w-[1200px] mx-auto">
          {/* breadcrumb */}
          <div className="cs-hero-el flex items-center gap-3 mb-10">
            <Link href="/work"
              className="font-mono text-[9px] tracking-[.32em] text-cream/25 uppercase
                hover:text-gold/60 transition-colors duration-250">
              Work
            </Link>
            <span className="text-cream/15 font-mono text-[9px]">/</span>
            <span className="font-mono text-[9px] tracking-[.32em] text-gold/50 uppercase">
              {data.brand}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">
            <div>
              <div className="cs-hero-el flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] tracking-[.35em] text-gold/45 uppercase">
                  {data.num} — {data.category}
                </span>
              </div>
              <h1 className="cs-hero-el font-cormorant font-bold text-cream"
                style={{ fontSize: "clamp(40px,7vw,100px)", lineHeight: 1.04, letterSpacing: "-.015em" }}>
                {data.brand}
              </h1>
              <p className="cs-hero-el font-inter text-[15px] md:text-[18px] leading-[1.7] text-cream/40 max-w-[500px] mt-5">
                {data.tagline}
              </p>
            </div>

            {/* meta */}
            <div className="cs-hero-el flex flex-col gap-6 pt-2">
              <MetaBlock label="Location" value={data.location} />
              <MetaBlock label="Year" value={data.year} />
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] tracking-[.32em] text-cream/22 uppercase">Services</span>
                <div className="flex flex-wrap gap-2">
                  {data.services.map(s => (
                    <span key={s}
                      className="font-inter text-[10px] tracking-[.1em] uppercase
                        border border-white/[.09] text-cream/35 rounded-[3px] px-3 py-1">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS BAR ───────────────────────────────────────── */}
      <ResultsBar results={data.results} />

      {/* ── CHALLENGE + APPROACH ─────────────────────────────── */}
      <ChallengeSection challenge={data.challenge} approach={data.approach} />

      {/* ── TESTIMONIAL ───────────────────────────────────────── */}
      {data.testimonial && <TestimonialBlock t={data.testimonial} />}

      {/* ── NEXT PROJECT ──────────────────────────────────────── */}
      <NextProject href={data.nextHref} brand={data.nextBrand} />
    </>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-[9px] tracking-[.32em] text-cream/22 uppercase">{label}</span>
      <span className="font-inter text-[14px] text-cream/60">{value}</span>
    </div>
  );
}

function ResultsBar({ results }: { results: CaseStudyData["results"] }) {
  useEffect(() => {
    const el = document.querySelector(".cs-results-section");
    if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".cs-result-item", {
        opacity: 0, y: 16, stagger: 0.1, duration: 0.7, ease: "power3.out",
      });
    }, { threshold: 0.2 });
    io.observe(el as Element);
    return () => io.disconnect();
  }, []);

  return (
    <section className="cs-results-section relative bg-navy-900 py-16 md:py-20 px-5 md:px-16">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.15),transparent)" }} />
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {results.map((r, i) => (
            <div key={i} className="cs-result-item flex flex-col gap-1">
              <span className="font-mono font-medium text-gold leading-none"
                style={{ fontSize: "clamp(32px,4.5vw,60px)" }}>
                {r.value}
              </span>
              <span className="font-inter text-[13px] text-cream/55">{r.label}</span>
              {r.sub && (
                <span className="font-mono text-[9px] tracking-[.2em] text-cream/22 uppercase">{r.sub}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengeSection({ challenge, approach }: { challenge: string; approach: string[] }) {
  useEffect(() => {
    const el = document.querySelector(".cs-challenge-section");
    if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".cs-challenge-el", {
        opacity: 0, y: 22, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });
    }, { threshold: 0.1 });
    io.observe(el as Element);
    return () => io.disconnect();
  }, []);

  return (
    <section className="cs-challenge-section relative bg-navy-950 py-24 md:py-32 px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Challenge */}
          <div className="flex flex-col gap-6 cs-challenge-el">
            <span className="font-mono text-[9px] tracking-[.38em] text-gold/45 uppercase">
              The challenge
            </span>
            <p className="font-inter text-[15px] md:text-[16px] leading-[1.8] text-cream/45">
              {challenge}
            </p>
          </div>

          {/* Approach */}
          <div className="flex flex-col gap-6 cs-challenge-el">
            <span className="font-mono text-[9px] tracking-[.38em] text-gold/45 uppercase">
              Our approach
            </span>
            <ul className="flex flex-col gap-4">
              {approach.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full border border-gold/25 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l2 2 3-3.5" stroke="#C9A84C" strokeWidth="1.2"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-inter text-[14px] leading-[1.7] text-cream/42">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialBlock({ t }: { t: NonNullable<CaseStudyData["testimonial"]> }) {
  useEffect(() => {
    const el = document.querySelector(".cs-testimonial-section");
    if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".cs-testimonial-el", {
        opacity: 0, y: 20, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });
    }, { threshold: 0.2 });
    io.observe(el as Element);
    return () => io.disconnect();
  }, []);

  return (
    <section className="cs-testimonial-section relative bg-navy-900 py-20 md:py-28 px-5 md:px-16 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.1),transparent)" }} />

      {/* decorative quote */}
      <div className="absolute top-4 left-8 md:left-16 pointer-events-none select-none
        font-cormorant leading-none text-gold/[0.035]"
        style={{ fontSize: "clamp(120px,20vw,260px)" }}>
        ❝
      </div>

      <div className="relative max-w-[800px] mx-auto flex flex-col gap-8 items-center text-center">
        <p className="cs-testimonial-el font-cormorant font-medium text-cream/80 text-balance"
          style={{ fontSize: "clamp(20px,2.8vw,36px)", lineHeight: 1.45, letterSpacing: "-.005em" }}>
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="cs-testimonial-el flex flex-col gap-1 items-center">
          <span className="font-inter text-[13px] text-cream/55">{t.author}</span>
          <span className="font-mono text-[9px] tracking-[.28em] text-gold/40 uppercase">{t.role}</span>
        </div>
      </div>
    </section>
  );
}

function NextProject({ href, brand }: { href: string; brand: string }) {
  return (
    <section className="relative bg-navy-950 py-16 md:py-20 px-5 md:px-16 border-t border-white/[.06]">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-6">
        <Link href="/work"
          className="group inline-flex items-center gap-2 font-mono text-[9px] tracking-[.3em]
            text-cream/25 uppercase hover:text-cream/55 transition-colors duration-300">
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none"
            className="transition-transform duration-300 group-hover:-translate-x-1">
            <path d="M14 4H2M6 1L2 4l4 3" stroke="currentColor" strokeWidth="1.1"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          All work
        </Link>

        <Link href={href}
          className="group flex flex-col items-end gap-1">
          <span className="font-mono text-[9px] tracking-[.3em] text-cream/22 uppercase">Next project</span>
          <span className="font-cormorant font-bold text-cream/70 group-hover:text-gold
            transition-colors duration-300 flex items-center gap-2"
            style={{ fontSize: "clamp(18px,2.5vw,30px)", lineHeight: 1.2 }}>
            {brand}
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1">
              <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
