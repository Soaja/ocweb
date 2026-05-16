"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useCalendly } from "@/hooks/useCalendly";

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { open, loading } = useCalendly();

  useEffect(() => {
    let played = false;
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || played) return;
        played = true;
        observer.disconnect();

        const { gsap } = await import("gsap");
        gsap.from(contentRef.current?.children ?? [], {
          opacity: 0, y: 28, stagger: 0.12, duration: 0.8, ease: "power3.out",
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-navy-900 py-20 md:py-40 px-5 md:px-16 overflow-hidden"
    >
      {/* Gold accent lines */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.2), transparent)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.1), transparent)" }}
      />

      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        <div ref={contentRef} className="flex flex-col items-center gap-8">

          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-gold/40" />
            <span className="font-mono text-[10px] tracking-[0.38em] text-gold/50 uppercase">
              03 — Start here
            </span>
            <span className="w-8 h-px bg-gold/40" />
          </div>

          {/* Headline */}
          <h2
            className="font-cormorant font-bold text-cream text-balance"
            style={{
              fontSize: "clamp(42px, 6vw, 88px)",
              lineHeight: 1.06,
              letterSpacing: "-0.015em",
            }}
          >
            Ready to build something<br />
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #E8C96A 45%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              extraordinary?
            </em>
          </h2>

          {/* Sub */}
          <p className="font-inter text-[15px] md:text-[17px] leading-[1.7] text-cream/40 max-w-[480px]">
            Tell us about your brand. We&apos;ll tell you exactly how we&apos;d
            make it unmissable — for travelers and AI alike.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full">
            <Link
              href="/contact"
              data-cursor="LET'S TALK"
              className="group inline-flex items-center justify-center gap-3 h-14 px-10 w-full sm:w-auto
                bg-gold/10 border border-gold/60 rounded-[3px] font-inter text-[11px]
                tracking-[0.18em] text-gold uppercase hover:bg-gold hover:text-navy-900
                hover:border-gold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              Start a project
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M2 6.5h9M8 3l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.3"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            <button
              onClick={open}
              disabled={loading}
              className="group inline-flex items-center justify-center gap-2 h-14 px-7 w-full sm:w-auto
                rounded-[3px] font-inter text-[11px] tracking-[0.18em] text-cream/40 uppercase
                hover:text-cream/75 border border-white/10 hover:border-white/25
                transition-all duration-300 disabled:opacity-50"
            >
              {loading ? (
                <span className="w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="shrink-0">
                    <rect x="1" y="2" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1 5.5h12M5 1v2M9 1v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  Book a free call
                </>
              )}
            </button>
          </div>

          {/* Locations */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/[0.06] w-full justify-center">
            {["Milan, IT", "Europe", "USA"].map((loc, i) => (
              <span key={i} className="font-mono text-[9px] tracking-[0.3em] text-cream/20 uppercase">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
