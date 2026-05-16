"use client";

import { useEffect, useRef, useState } from "react";
import { useCalendly } from "@/hooks/useCalendly";

export default function ExitIntentPopup() {
  const [visible, setVisible]  = useState(false);
  const [entered, setEntered]  = useState(false); // animate in
  const [leaving, setLeaving]  = useState(false); // animate out
  const fired = useRef(false);
  const { open, loading } = useCalendly();

  useEffect(() => {
    if (sessionStorage.getItem("oi_exit_dismissed")) return;

    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (!isTouch) {
      // Desktop — fire when cursor exits viewport from top
      const onLeave = (e: MouseEvent) => {
        if (e.clientY <= 8 && !fired.current) {
          fired.current = true;
          trigger();
        }
      };
      document.addEventListener("mouseleave", onLeave);
      return () => document.removeEventListener("mouseleave", onLeave);
    } else {
      // Mobile — fire after 50 seconds
      const t = setTimeout(() => {
        if (!fired.current) { fired.current = true; trigger(); }
      }, 50_000);
      return () => clearTimeout(t);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const trigger = () => {
    setVisible(true);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setEntered(true))
    );
  };

  const close = () => {
    setLeaving(true);
    sessionStorage.setItem("oi_exit_dismissed", "1");
    setTimeout(() => { setVisible(false); setLeaving(false); setEntered(false); }, 380);
  };

  const handleBook = async () => {
    close();
    await open();
  };

  if (!visible) return null;

  const shown = entered && !leaving;

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        onClick={close}
        className="fixed inset-0 z-[9990] bg-navy-950/60 backdrop-blur-[6px]"
        style={{ opacity: shown ? 1 : 0, transition: "opacity 380ms ease" }}
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Free boutique travel website audit"
        className="fixed inset-0 z-[9991] flex items-center justify-center px-4 pointer-events-none"
      >
        <div
          className="pointer-events-auto w-full max-w-[520px]"
          style={{
            transform: shown ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)",
            opacity:   shown ? 1 : 0,
            transition: "transform 400ms cubic-bezier(.16,1,.3,1), opacity 380ms ease",
          }}
        >
          {/* Card */}
          <div className="relative bg-navy-900 rounded-[6px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}>

            {/* Gold top stripe */}
            <div className="h-[2px]"
              style={{ background: "linear-gradient(to right,transparent,#C9A84C 20%,#E8C96A 50%,#C9A84C 80%,transparent)" }} />

            {/* Close */}
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center
                rounded-full border border-white/[.07] text-cream/25
                hover:border-white/20 hover:text-cream/60 transition-all duration-200"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="px-8 pt-10 pb-9 md:px-10">

              {/* Label row */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-4 h-px bg-gold/40" />
                <span className="font-mono text-[9px] tracking-[.36em] text-gold/55 uppercase">
                  Free · No obligation
                </span>
              </div>

              {/* Headline */}
              <h2
                className="font-cormorant font-bold text-cream text-balance mb-4"
                style={{ fontSize: "clamp(24px,3.5vw,36px)", lineHeight: 1.1, letterSpacing: "-.015em" }}
              >
                Is your travel website losing bookings every day?
              </h2>

              <p className="font-inter text-[13px] md:text-[14px] leading-[1.75] text-cream/48 mb-8">
                We audit boutique travel websites against 12 conversion signals —
                for free. 15 minutes, actionable findings, no sales pitch.
              </p>

              {/* 3 pills */}
              <div className="flex gap-3 flex-wrap mb-9">
                {[
                  { icon: "◆", text: "15-min call" },
                  { icon: "◆", text: "12-point audit" },
                  { icon: "◆", text: "Free forever" },
                ].map((p) => (
                  <span key={p.text}
                    className="inline-flex items-center gap-2 px-4 py-2
                      border border-white/[.07] rounded-full
                      font-inter text-[11px] tracking-[.1em] text-cream/40">
                    <span className="text-gold/40 text-[6px]">{p.icon}</span>
                    {p.text}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button
                onClick={handleBook}
                disabled={loading}
                className="group w-full flex items-center justify-center gap-3 h-13
                  relative overflow-hidden rounded-[3px] border border-gold/50
                  font-inter text-[11px] tracking-[.18em] text-gold uppercase
                  hover:border-gold transition-all duration-350
                  disabled:opacity-60 disabled:cursor-wait"
                style={{ height: "52px" }}
              >
                <span className="absolute inset-0 bg-gold translate-y-full
                  group-hover:translate-y-0 transition-transform duration-350
                  ease-[cubic-bezier(.16,1,.3,1)]" />
                <span className="relative flex items-center gap-3 group-hover:text-navy-900 transition-colors duration-200">
                  {loading ? (
                    <>
                      <span className="w-3.5 h-3.5 border border-current border-t-transparent
                        rounded-full animate-spin" />
                      Loading…
                    </>
                  ) : (
                    <>
                      Book free audit — 15 min
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                        className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M2 6.5h9M8 3l4 3.5-4 3.5" stroke="currentColor"
                          strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </span>
              </button>

              <button
                onClick={close}
                className="w-full mt-3 py-2 font-inter text-[10px] tracking-[.16em]
                  text-cream/22 uppercase hover:text-cream/45 transition-colors duration-200"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
