"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ARTICLES, type Article } from "@/lib/journal";

const CATEGORIES = ["All", "Strategy", "Design", "SEO"];

export default function JournalContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsap.from(".journal-hero-el", {
        opacity: 0, y: 28, stagger: 0.09, duration: 0.85, ease: "power3.out", delay: 0.1,
      });
    };
    init();
    return () => { cancelled = true; };
  }, []);

  const filtered = activeCategory === "All"
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 pt-28 pb-12 md:pt-44 md:pb-20 px-5 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%,rgba(201,168,76,.05) 0%,transparent 65%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.12),transparent)" }} />

        <div className="max-w-[1200px] mx-auto">
          <div className="journal-hero-el flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-gold/50" />
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">
              Insights
            </span>
          </div>
          <h1 className="journal-hero-el font-cormorant font-bold text-cream"
            style={{ fontSize: "clamp(42px,6.5vw,88px)", lineHeight: 1.06, letterSpacing: "-.015em" }}>
            The Journal.
          </h1>
          <p className="journal-hero-el font-inter text-[15px] md:text-[17px] leading-[1.75] text-cream/40 max-w-[480px] mt-5">
            Strategy, design, and digital authority for boutique travel brands.
            No fluff — just what works.
          </p>

          {/* category filter */}
          <div className="journal-hero-el flex flex-wrap gap-2 mt-10">
            {CATEGORIES.map(cat => {
              const on = activeCategory === cat;
              return (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className="h-8 px-5 rounded-[3px] font-inter text-[11px] tracking-[.1em] uppercase
                    border transition-all duration-250"
                  style={{
                    borderColor: on ? "rgba(201,168,76,0.55)" : "rgba(245,240,232,0.09)",
                    background: on ? "rgba(201,168,76,0.07)" : "transparent",
                    color: on ? "#C9A84C" : "rgba(245,240,232,0.32)",
                  }}>
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ARTICLE LIST ──────────────────────────────────────── */}
      <ArticleList articles={filtered} />
    </>
  );
}

function ArticleList({ articles }: { articles: Article[] }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".journal-row", {
        opacity: 0, y: 24, stagger: 0.12, duration: 0.75, ease: "power3.out",
      });
    }, { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative bg-navy-950 pb-24 md:pb-32 px-5 md:px-16">
      <div className="max-w-[1200px] mx-auto">
        {articles.length === 0 ? (
          <div className="py-20 flex flex-col items-center gap-4 text-center">
            <span className="font-mono text-[10px] tracking-[.3em] text-cream/20 uppercase">
              No articles yet
            </span>
          </div>
        ) : (
          <div className="flex flex-col">
            {articles.map((a, i) => (
              <div
                key={a.slug}
                className="journal-row group relative border-t border-white/[.07] last:border-b last:border-white/[.07]
                  cursor-pointer transition-colors duration-300"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ backgroundColor: hovered === i ? "rgba(201,168,76,0.025)" : "transparent" }}
              >
                {/* left gold line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] rounded-r-full transition-all duration-400"
                  style={{
                    background: "linear-gradient(to bottom,#C9A84C,#E8C96A)",
                    opacity: hovered === i ? 1 : 0,
                    transform: hovered === i ? "scaleY(1)" : "scaleY(0.3)",
                  }} />

                <Link href={`/journal/${a.slug}`} className="block py-9 md:py-10 pl-0 md:pl-4">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 md:gap-12 items-start">
                    <div className="flex flex-col gap-3">
                      {/* meta */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-[9px] tracking-[.28em] text-gold/45 uppercase">
                          {a.category}
                        </span>
                        <span className="w-px h-3 bg-cream/10" />
                        <span className="font-mono text-[9px] tracking-[.22em] text-cream/22 uppercase">
                          {a.date}
                        </span>
                        <span className="w-px h-3 bg-cream/10" />
                        <span className="font-mono text-[9px] tracking-[.22em] text-cream/22 uppercase">
                          {a.readTime} read
                        </span>
                      </div>

                      <h2 className="font-cormorant font-bold transition-colors duration-300"
                        style={{
                          fontSize: "clamp(20px,2.5vw,34px)", lineHeight: 1.2,
                          color: hovered === i ? "#F5F0E8" : "rgba(245,240,232,0.88)",
                        }}>
                        {a.title}
                      </h2>

                      <p className="font-inter text-[13px] leading-[1.7] text-cream/35 max-w-[600px]">
                        {a.excerpt}
                      </p>
                    </div>

                    {/* arrow */}
                    <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border
                      mt-2 transition-all duration-300 shrink-0"
                      style={{
                        borderColor: hovered === i ? "rgba(201,168,76,0.4)" : "rgba(245,240,232,0.07)",
                        background: hovered === i ? "rgba(201,168,76,0.06)" : "transparent",
                      }}>
                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                        style={{
                          color: hovered === i ? "#C9A84C" : "rgba(245,240,232,0.2)",
                          transform: hovered === i ? "translate(1px,-1px)" : "translate(0,0)",
                          transition: "transform 0.3s, color 0.3s",
                        }}>
                        <path d="M2 11L11 2M11 2H4M11 2v7"
                          stroke="currentColor" strokeWidth="1.2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* bottom note */}
        <div className="mt-12 flex items-center gap-4">
          <div className="w-8 h-px bg-gold/20" />
          <span className="font-mono text-[9px] tracking-[.3em] text-cream/18 uppercase">
            New articles every month
          </span>
        </div>
      </div>
    </section>
  );
}
