"use client";

import { useEffect, useRef, useState } from "react";

// ── Replace with your Calendly link once you register ──────────────
const CALENDLY_URL = "https://calendly.com/ostoia-co/audit";

export default function ExitIntentPopup() {
  const [visible, setVisible]   = useState(false);
  const [closing, setClosing]   = useState(false);
  const firedRef                = useRef(false);

  useEffect(() => {
    // Don't show if user already dismissed this session
    if (sessionStorage.getItem("oi_popup_dismissed")) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (!isTouch) {
      // Desktop: fire when mouse leaves viewport from top
      const onMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 10 && !firedRef.current) {
          firedRef.current = true;
          setVisible(true);
        }
      };
      document.addEventListener("mouseleave", onMouseLeave);
      return () => document.removeEventListener("mouseleave", onMouseLeave);
    } else {
      // Mobile: fire after 45 seconds of engagement
      const timer = setTimeout(() => {
        if (!firedRef.current) {
          firedRef.current = true;
          setVisible(true);
        }
      }, 45_000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setClosing(true);
    sessionStorage.setItem("oi_popup_dismissed", "1");
    setTimeout(() => { setVisible(false); setClosing(false); }, 350);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[9990] bg-navy-950/70 backdrop-blur-sm"
        style={{
          opacity: closing ? 0 : 1,
          transition: "opacity 350ms ease",
        }}
        onClick={close}
        aria-hidden
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Free boutique travel website audit"
        className="fixed z-[9991] left-1/2 top-1/2 w-[min(92vw,560px)]"
        style={{
          transform: closing
            ? "translate(-50%,-50%) scale(0.96)"
            : "translate(-50%,-50%) scale(1)",
          opacity: closing ? 0 : 1,
          transition: "transform 350ms cubic-bezier(.16,1,.3,1), opacity 350ms ease",
        }}
      >
        <div className="relative bg-navy-900 border border-white/[.08] rounded-[6px] overflow-hidden shadow-2xl">

          {/* Gold top bar */}
          <div className="h-[3px]"
            style={{ background: "linear-gradient(to right,#C9A84C,#E8C96A,#C9A84C)" }} />

          {/* Close button */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center
              rounded-full border border-white/[.08] text-cream/30 hover:text-cream/70
              hover:border-white/20 transition-all duration-200"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.3"
                strokeLinecap="round"/>
            </svg>
          </button>

          <div className="px-8 py-10 md:px-10">
            {/* Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-5 h-px bg-gold/40" />
              <span className="font-mono text-[9px] tracking-[.35em] text-gold/55 uppercase">
                Free · No strings attached
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-cormorant font-bold text-cream text-balance mb-3"
              style={{ fontSize: "clamp(26px,3.5vw,38px)", lineHeight: 1.1, letterSpacing: "-.01em" }}>
              Is your boutique travel website
              losing bookings?
            </h2>

            <p className="font-inter text-[14px] leading-[1.7] text-cream/50 mb-8 max-w-[420px]">
              We audit your website against the 12 conversion signals that matter
              most for boutique travel brands — for free. No pitch, just findings.
            </p>

            {/* Results teaser */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { v: "15 min", l: "Audit call" },
                { v: "12",     l: "Checks" },
                { v: "Free",   l: "No catch" },
              ].map((s) => (
                <div key={s.l}
                  className="flex flex-col items-center gap-1 py-3 border border-white/[.06]
                    rounded-[3px] bg-navy-950/40">
                  <span className="font-mono font-medium text-gold text-[18px] leading-none">
                    {s.v}
                  </span>
                  <span className="font-inter text-[9px] tracking-[.15em] text-cream/30 uppercase">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-6
                  bg-gold/10 border border-gold/55 rounded-[3px] font-inter text-[11px]
                  tracking-[.16em] text-gold uppercase hover:bg-gold hover:text-navy-900
                  hover:border-gold transition-all duration-300 whitespace-nowrap"
              >
                Book free audit
                <svg width="11" height="11" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5h9M8 3l4 3.5-4 3.5" stroke="currentColor"
                    strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <button
                onClick={close}
                className="flex-1 inline-flex items-center justify-center h-12 px-4
                  font-inter text-[11px] tracking-[.14em] text-cream/30 uppercase
                  hover:text-cream/55 transition-colors duration-200"
              >
                Maybe later
              </button>
            </div>

            <p className="font-mono text-[9px] tracking-[.18em] text-cream/18 uppercase mt-5 text-center">
              15-min call · No obligation · Actionable findings
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
