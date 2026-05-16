"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    // Don't show if already answered
    if (localStorage.getItem("oi_cookie_consent")) return;
    // Small delay so it doesn't flash on first paint
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const dismiss = (accepted: boolean) => {
    localStorage.setItem("oi_cookie_consent", accepted ? "accepted" : "declined");
    setLeaving(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  const shown = visible && !leaving;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[9980] px-4 pb-4 md:pb-6 pointer-events-none"
      style={{
        transform: shown ? "translateY(0)" : "translateY(110%)",
        opacity: shown ? 1 : 0,
        transition: "transform 480ms cubic-bezier(.16,1,.3,1), opacity 380ms ease",
      }}
    >
      <div
        className="pointer-events-auto max-w-[720px] mx-auto rounded-[6px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        style={{ border: "1px solid rgba(255,255,255,0.07)", background: "#0F1E35" }}
      >
        {/* Gold top stripe */}
        <div className="h-[2px]"
          style={{ background: "linear-gradient(to right,transparent,#C9A84C 20%,#E8C96A 50%,#C9A84C 80%,transparent)" }} />

        <div className="px-6 py-5 md:px-8 md:py-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">

          {/* Icon */}
          <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="rgba(201,168,76,0.7)" strokeWidth="1.2"/>
              <circle cx="5.5" cy="6.5" r="1" fill="rgba(201,168,76,0.7)"/>
              <circle cx="10.5" cy="5" r="0.75" fill="rgba(201,168,76,0.7)"/>
              <circle cx="10" cy="10" r="1.25" fill="rgba(201,168,76,0.7)"/>
              <circle cx="6" cy="10.5" r="0.75" fill="rgba(201,168,76,0.7)"/>
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="font-inter text-[13px] leading-[1.65] text-cream/50">
              We use essential cookies to ensure the site works correctly. Analytics cookies help us understand how visitors engage with our content — we&apos;ll only use them with your consent.{" "}
              <a
                href="/privacy"
                className="text-gold/60 hover:text-gold/90 underline underline-offset-2 transition-colors duration-200"
                style={{ textDecorationColor: "rgba(201,168,76,0.3)" }}
              >
                Privacy Policy
              </a>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => dismiss(false)}
              className="flex-1 sm:flex-none h-9 px-5 rounded-[3px] font-inter text-[11px] tracking-[.12em] uppercase
                text-cream/30 hover:text-cream/60 transition-colors duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              Decline
            </button>
            <button
              onClick={() => dismiss(true)}
              className="group flex-1 sm:flex-none relative overflow-hidden h-9 px-5 rounded-[3px]
                font-inter text-[11px] tracking-[.12em] uppercase text-gold
                hover:text-navy-900 transition-colors duration-300"
              style={{ border: "1px solid rgba(201,168,76,0.5)" }}
            >
              <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0
                transition-transform duration-350 ease-[cubic-bezier(.16,1,.3,1)]" />
              <span className="relative">Accept</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
