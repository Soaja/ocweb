import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Off the Map — OSTOIA&CO",
  description: "This page doesn't exist, but your next great travel campaign can.",
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen bg-navy-950 flex flex-col items-center justify-center px-6 text-center"
      style={{ fontFamily: "var(--font-inter, sans-serif)" }}
    >
      {/* Decorative compass rose */}
      <div className="relative mb-10 select-none" aria-hidden>
        <span
          className="font-cormorant font-bold text-[clamp(96px,18vw,180px)] leading-none"
          style={{
            background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 50%,#C9A84C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 0.18,
          }}
        >
          404
        </span>
        {/* Crosshair lines */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-px h-full" style={{ background: "rgba(201,168,76,0.15)" }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-px w-full" style={{ background: "rgba(201,168,76,0.15)" }} />
        </div>
        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "linear-gradient(135deg,#C9A84C,#E8C96A)" }}
          />
        </div>
      </div>

      {/* Label */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-5 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
        <span
          className="font-mono uppercase"
          style={{ fontSize: "10px", letterSpacing: "0.38em", color: "rgba(201,168,76,0.55)" }}
        >
          Off the map
        </span>
        <span className="w-5 h-px" style={{ background: "rgba(201,168,76,0.4)" }} />
      </div>

      {/* Headline */}
      <h1
        className="font-cormorant font-bold text-cream mb-4"
        style={{ fontSize: "clamp(32px,5vw,56px)", lineHeight: 1.1, letterSpacing: "-0.02em" }}
      >
        This page went on a trip<br />and forgot to come back.
      </h1>

      <p
        className="font-inter text-cream/45 max-w-[420px] mb-10"
        style={{ fontSize: "clamp(14px,1.5vw,16px)", lineHeight: 1.75 }}
      >
        The URL you followed doesn&apos;t exist — probably a broken link, a renamed page,
        or a very adventurous typo. Either way, we can get you somewhere better.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/"
          className="group relative overflow-hidden inline-flex items-center justify-center gap-2
            h-14 px-8 rounded-[3px] border font-inter uppercase transition-all duration-300"
          style={{
            borderColor: "rgba(201,168,76,0.5)",
            color: "#C9A84C",
            fontSize: "11px",
            letterSpacing: "0.18em",
          }}
        >
          <span
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-350"
            style={{ background: "#C9A84C", transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
          />
          <span className="relative flex items-center gap-2 group-hover:text-navy-900 transition-colors duration-200">
            Back to home
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M2 6.5h9M8 3l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.3"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </Link>

        <Link
          href="/contact"
          className="font-inter uppercase text-cream/35 hover:text-cream/65 transition-colors duration-200"
          style={{ fontSize: "11px", letterSpacing: "0.18em" }}
        >
          Start a project
        </Link>
      </div>

      {/* Quick links */}
      <div className="mt-14 pt-10 border-t w-full max-w-sm" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <p className="font-mono uppercase mb-5" style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(201,168,76,0.4)" }}>
          Or explore
        </p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {[
            { label: "Work", href: "/work" },
            { label: "Services", href: "/services" },
            { label: "Investment", href: "/invest" },
            { label: "Journal", href: "/journal" },
            { label: "About", href: "/about" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter text-cream/35 hover:text-cream/70 transition-colors duration-200"
              style={{ fontSize: "13px", letterSpacing: "0.05em" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
