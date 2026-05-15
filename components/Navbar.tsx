"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [progress,  setProgress]  = useState(0);
  const navRef  = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const sy  = window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      setScrolled(sy > 40);
      setProgress(max > 0 ? sy / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-glass border-b border-[rgba(201,168,76,0.08)]"
            : "bg-transparent"
        }`}
      >
        {/* scroll progress line */}
        <div
          className="absolute bottom-0 left-0 h-px pointer-events-none z-50"
          style={{
            width: `${progress * 100}%`,
            background: "linear-gradient(to right,#C9A84C,#E8C96A,#C9A84C)",
            transition: "width 80ms linear",
          }}
        />
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex flex-col group" data-cursor="HOME">
              <span className="font-cormorant font-medium text-[22px] tracking-[0.05em] text-cream leading-none">
                OSTOIA
                <span className="text-gold">&amp;CO</span>
              </span>
              <span className="font-mono text-[9px] tracking-[0.3em] text-slate-agency uppercase mt-[3px] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                Milan · Digital
              </span>
            </Link>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative font-inter text-[13px] tracking-[0.06em] text-cream/60 hover:text-cream/90 uppercase transition-colors duration-200 group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-4">
              {/* CTA button — desktop */}
              <Link
                href="/contact"
                className="hidden md:flex items-center gap-2 h-9 px-5 border border-gold/40 rounded-sm font-inter text-[12px] tracking-[0.1em] text-gold/80 hover:text-gold hover:border-gold/80 hover:bg-gold/5 uppercase transition-all duration-200 animate-pulse-subtle"
                data-cursor="LET'S TALK"
              >
                Start a project
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-px">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col items-end justify-center w-11 h-11 gap-[6px] group"
                aria-label="Toggle menu"
              >
                <span className={`block h-px bg-cream/70 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"}`} />
                <span className={`block h-px bg-gold transition-all duration-300 ${menuOpen ? "w-6 opacity-0" : "w-4"}`} />
                <span className={`block h-px bg-cream/70 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${menuOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-5"}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-navy-900 flex flex-col justify-between px-8 pt-24 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ paddingBottom: "max(3rem, env(safe-area-inset-bottom, 0px))" }}
      >
        {/* Mobile nav links */}
        <ul className="flex flex-col gap-2 mt-8">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-cormorant font-light italic text-[52px] leading-[1.1] text-cream/80 hover:text-cream transition-colors duration-200 block"
              >
                {link.label}
              </Link>
              <div className="gold-line mt-3 opacity-20" />
            </li>
          ))}
        </ul>

        {/* Mobile menu footer */}
        <div className="flex flex-col gap-4">
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 h-12 px-6 border border-gold/40 rounded-sm font-inter text-[13px] tracking-[0.1em] text-gold uppercase self-start"
          >
            Start a project →
          </Link>
          <p className="font-mono text-[10px] tracking-[0.25em] text-slate-agency/60 uppercase">
            Milan · Europe · USA
          </p>
        </div>
      </div>
    </>
  );
}
