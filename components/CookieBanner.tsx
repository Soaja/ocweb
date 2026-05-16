"use client";

import { useEffect, useState } from "react";

/* ─── Types ──────────────────────────────────────────────────────────────── */
type Prefs = { analytics: boolean; marketing: boolean };

const STORAGE_KEY = "oi_cookie_consent_v2";

const CATEGORIES = [
  {
    id: "essential" as const,
    label: "Essential",
    tag: "Always active",
    always: true,
    desc:
      "These cookies are required for the website to function. They enable core features like page navigation, security, and accessibility. They cannot be disabled.",
    examples: "Session token, CSRF protection, language preference",
  },
  {
    id: "analytics" as const,
    label: "Analytics",
    tag: "Optional",
    always: false,
    desc:
      "Help us understand how visitors interact with our site — which pages are visited most, where visitors come from, and how long they stay. All data is aggregated and anonymous.",
    examples: "Google Analytics, Plausible",
  },
  {
    id: "marketing" as const,
    label: "Marketing",
    tag: "Optional",
    always: false,
    desc:
      "Allow us to measure the effectiveness of our campaigns and show you relevant content across platforms. Disabling these has no impact on your browsing experience.",
    examples: "Meta Pixel, Google Ads conversion",
  },
];

/* ─── Toggle switch ───────────────────────────────────────────────────────── */
function Toggle({
  checked,
  onChange,
  disabled,
  id,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  id: string;
}) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      aria-labelledby={id}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className="relative shrink-0 w-11 h-6 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold/60"
      style={{
        background: checked
          ? "linear-gradient(135deg,#C9A84C,#E8C96A)"
          : "rgba(255,255,255,0.1)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <span
        className="absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-sm"
        style={{
          transform: checked ? "translateX(20px)" : "translateX(0)",
          transition: "transform 300ms cubic-bezier(.16,1,.3,1)",
        }}
      />
    </button>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function CookieBanner() {
  const [visible, setVisible]     = useState(false);
  const [leaving, setLeaving]     = useState(false);
  const [expanded, setExpanded]   = useState(false);
  const [openCat, setOpenCat]     = useState<string | null>(null);
  const [prefs, setPrefs]         = useState<Prefs>({ analytics: false, marketing: false });

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const save = (p: Prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ essential: true, ...p }));
    setLeaving(true);
    setTimeout(() => setVisible(false), 420);
  };

  const acceptAll  = () => save({ analytics: true,  marketing: true  });
  const declineAll = () => save({ analytics: false, marketing: false });
  const savePrefs  = () => save(prefs);

  if (!visible) return null;
  const shown = visible && !leaving;

  return (
    <>
      {/* ── Backdrop (only when expanded on mobile) */}
      {expanded && (
        <div
          aria-hidden
          className="fixed inset-0 z-[9978] md:hidden"
          style={{ background: "rgba(10,22,40,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setExpanded(false)}
        />
      )}

      {/* ── Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Cookie preferences"
        className="fixed bottom-0 left-0 right-0 z-[9979] px-3 pb-3 md:px-5 md:pb-5 pointer-events-none"
        style={{
          transform: shown ? "translateY(0)" : "translateY(112%)",
          opacity:   shown ? 1 : 0,
          transition: "transform 500ms cubic-bezier(.16,1,.3,1), opacity 380ms ease",
        }}
      >
        <div
          className="pointer-events-auto mx-auto rounded-[8px] overflow-hidden"
          style={{
            maxWidth: expanded ? "760px" : "800px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#0F1E35",
            boxShadow: "0 28px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(201,168,76,0.05)",
            transition: "max-width 400ms ease",
          }}
        >
          {/* Gold top stripe */}
          <div className="h-[2px]" style={{
            background: "linear-gradient(to right,transparent,#C9A84C 20%,#E8C96A 50%,#C9A84C 80%,transparent)",
          }} />

          {/* ── Expanded: categories panel ── */}
          <div style={{
            maxHeight: expanded ? "500px" : "0px",
            overflow: "hidden",
            transition: "max-height 480ms cubic-bezier(.16,1,.3,1)",
          }}>
            <div className="px-6 pt-6 pb-2 md:px-8 md:pt-7">

              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="font-cormorant font-bold text-cream text-[20px] leading-tight">
                    Cookie preferences
                  </h2>
                  <p className="font-inter text-[12px] text-cream/35 mt-1">
                    Manage which cookies OSTOIA&amp;CO may use on your device.
                  </p>
                </div>
                <a
                  href="/privacy"
                  className="font-inter text-[11px] tracking-[.08em] text-gold/45 hover:text-gold/75 transition-colors underline underline-offset-2 shrink-0 ml-4"
                  style={{ textDecorationColor: "rgba(201,168,76,0.25)" }}
                >
                  Privacy Policy
                </a>
              </div>

              {/* Category rows */}
              <div className="flex flex-col divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                {CATEGORIES.map((cat) => {
                  const isOpen = openCat === cat.id;
                  const checked = cat.always || prefs[cat.id as keyof Prefs] || false;
                  return (
                    <div key={cat.id} className="py-4">
                      {/* Row header */}
                      <div className="flex items-center gap-4">
                        {/* Expand toggle */}
                        <button
                          onClick={() => setOpenCat(isOpen ? null : cat.id)}
                          className="flex items-center gap-3 flex-1 min-w-0 text-left group"
                          aria-expanded={isOpen}
                        >
                          <svg
                            width="14" height="14" viewBox="0 0 14 14" fill="none"
                            className="shrink-0 text-gold/40 group-hover:text-gold/70 transition-colors"
                            style={{
                              transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                              transition: "transform 280ms cubic-bezier(.16,1,.3,1)",
                            }}
                          >
                            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3"
                              strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <div className="flex flex-col gap-[2px] min-w-0">
                            <span className="font-inter font-medium text-[13px] text-cream/80 leading-none">
                              {cat.label}
                            </span>
                            <span className="font-mono text-[9px] tracking-[.22em] uppercase"
                              style={{ color: cat.always ? "rgba(201,168,76,0.55)" : "rgba(245,240,232,0.25)" }}>
                              {cat.tag}
                            </span>
                          </div>
                        </button>

                        {/* On/off toggle */}
                        <Toggle
                          id={`cat-${cat.id}`}
                          checked={checked}
                          disabled={cat.always}
                          onChange={(v) => setPrefs(p => ({ ...p, [cat.id]: v }))}
                        />
                      </div>

                      {/* Expanded description */}
                      <div style={{
                        maxHeight: isOpen ? "160px" : "0px",
                        overflow: "hidden",
                        transition: "max-height 320ms cubic-bezier(.16,1,.3,1)",
                      }}>
                        <div className="pl-[26px] pt-3 pb-1 flex flex-col gap-2">
                          <p className="font-inter text-[12px] leading-[1.72] text-cream/38">
                            {cat.desc}
                          </p>
                          <p className="font-mono text-[10px] text-cream/20">
                            Examples: {cat.examples}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Compact / bottom bar ── */}
          <div className="px-6 py-5 md:px-8 md:py-6">
            {!expanded && (
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                {/* Cookie icon */}
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.18)" }}>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <circle cx="7.5" cy="7.5" r="6" stroke="rgba(201,168,76,0.65)" strokeWidth="1.1"/>
                    <circle cx="5.2" cy="6" r="0.9" fill="rgba(201,168,76,0.65)"/>
                    <circle cx="9.8" cy="4.8" r="0.7" fill="rgba(201,168,76,0.65)"/>
                    <circle cx="9.5" cy="9.5" r="1.1" fill="rgba(201,168,76,0.65)"/>
                    <circle cx="5.8" cy="10" r="0.7" fill="rgba(201,168,76,0.65)"/>
                  </svg>
                </div>

                <p className="font-inter text-[13px] leading-[1.68] text-cream/45 flex-1">
                  We use cookies to ensure the site works and to understand how visitors use it.
                  You can choose which categories you allow.{" "}
                  <a
                    href="/privacy"
                    className="text-gold/55 hover:text-gold/85 underline underline-offset-2 transition-colors"
                    style={{ textDecorationColor: "rgba(201,168,76,0.25)" }}
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            )}

            {/* Action buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              {/* Decline all */}
              <button
                onClick={declineAll}
                className="flex-1 sm:flex-none h-10 px-5 rounded-[3px] font-inter text-[11px] tracking-[.12em] uppercase
                  text-cream/28 hover:text-cream/55 transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.07)" }}
              >
                Decline all
              </button>

              {/* Customize / Save preferences */}
              <button
                onClick={() => expanded ? savePrefs() : setExpanded(true)}
                className="flex-1 sm:flex-none h-10 px-5 rounded-[3px] font-inter text-[11px] tracking-[.12em] uppercase
                  text-cream/55 hover:text-cream/85 transition-colors duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                {expanded ? "Save preferences" : "Customize"}
              </button>

              {/* Accept all */}
              <button
                onClick={acceptAll}
                className="group flex-1 sm:flex-none relative overflow-hidden h-10 px-6 rounded-[3px]
                  font-inter text-[11px] tracking-[.14em] uppercase text-gold
                  hover:text-navy-900 transition-colors duration-300"
                style={{ border: "1px solid rgba(201,168,76,0.5)" }}
              >
                <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0
                  transition-transform duration-350 ease-[cubic-bezier(.16,1,.3,1)]" />
                <span className="relative">Accept all</span>
              </button>
            </div>

            {/* Legal note */}
            <p className="font-mono text-[9px] tracking-[.18em] text-cream/14 uppercase mt-4 text-center">
              OSTOIA&amp;CO · Milan, Italy · Compliant with GDPR &amp; ePrivacy Directive
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
