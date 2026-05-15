"use client";

import { useEffect } from "react";
import Link from "next/link";
import { type Article, ARTICLES } from "@/lib/journal";

export default function ArticleContent({ article }: { article: Article }) {
  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsap.from(".article-hero-el", {
        opacity: 0, y: 28, stagger: 0.09, duration: 0.85, ease: "power3.out", delay: 0.1,
      });
      gsap.from(".article-body-el", {
        opacity: 0, y: 16, stagger: 0.07, duration: 0.65, ease: "power3.out", delay: 0.55,
      });
    };
    init();
    return () => { cancelled = true; };
  }, []);

  // next article
  const idx = ARTICLES.findIndex(a => a.slug === article.slug);
  const next = ARTICLES[(idx + 1) % ARTICLES.length];

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 pt-28 pb-12 md:pt-44 md:pb-20 px-5 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%,rgba(201,168,76,.05) 0%,transparent 65%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.12),transparent)" }} />

        <div className="max-w-[860px] mx-auto">
          {/* breadcrumb */}
          <div className="article-hero-el flex items-center gap-3 mb-10">
            <Link href="/journal"
              className="font-mono text-[9px] tracking-[.32em] text-cream/25 uppercase
                hover:text-gold/60 transition-colors duration-250">
              Journal
            </Link>
            <span className="text-cream/15 font-mono text-[9px]">/</span>
            <span className="font-mono text-[9px] tracking-[.32em] text-gold/45 uppercase">
              {article.category}
            </span>
          </div>

          {/* meta */}
          <div className="article-hero-el flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-[9px] tracking-[.28em] text-gold/50 uppercase">{article.category}</span>
            <span className="w-px h-3 bg-cream/10" />
            <span className="font-mono text-[9px] tracking-[.22em] text-cream/25 uppercase">{article.date}</span>
            <span className="w-px h-3 bg-cream/10" />
            <span className="font-mono text-[9px] tracking-[.22em] text-cream/25 uppercase">{article.readTime} read</span>
          </div>

          <h1 className="article-hero-el font-cormorant font-bold text-cream text-balance"
            style={{ fontSize: "clamp(32px,5.5vw,72px)", lineHeight: 1.1, letterSpacing: "-.012em" }}>
            {article.title}
          </h1>

          <p className="article-hero-el font-inter text-[15px] md:text-[17px] leading-[1.75] text-cream/40 mt-5 max-w-[600px]">
            {article.subtitle}
          </p>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────────────── */}
      <section className="relative bg-navy-950 pb-24 md:pb-32 px-5 md:px-16">
        <div className="max-w-[860px] mx-auto pt-14">

          {/* reading progress indicator */}
          <div className="flex items-center gap-4 mb-14 pb-8 border-b border-white/[.06]">
            <div className="w-2 h-2 rounded-full bg-gold/50 animate-pulse" />
            <span className="font-mono text-[9px] tracking-[.28em] text-cream/22 uppercase">
              By OSTOIA&amp;CO — {article.date}
            </span>
          </div>

          <div className="flex flex-col gap-6">
            {article.body.map((section, i) => {
              if (section.type === "h2") {
                return (
                  <h2 key={i} className="article-body-el font-cormorant font-bold text-cream/90 mt-4"
                    style={{ fontSize: "clamp(22px,3vw,36px)", lineHeight: 1.2, letterSpacing: "-.008em" }}>
                    {section.content as string}
                  </h2>
                );
              }
              if (section.type === "h3") {
                return (
                  <h3 key={i} className="article-body-el font-cormorant font-bold text-cream/80"
                    style={{ fontSize: "clamp(18px,2.2vw,28px)", lineHeight: 1.25 }}>
                    {section.content as string}
                  </h3>
                );
              }
              if (section.type === "p") {
                return (
                  <p key={i} className="article-body-el font-inter text-[14px] md:text-[15px] leading-[1.85] text-cream/42">
                    {section.content as string}
                  </p>
                );
              }
              if (section.type === "ul") {
                return (
                  <ul key={i} className="article-body-el flex flex-col gap-3 pl-0">
                    {(section.content as string[]).map((item, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full border border-gold/22
                          flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
                            <path d="M1 3.5l2 2 3-3" stroke="#C9A84C" strokeWidth="1.2"
                              strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="font-inter text-[14px] leading-[1.75] text-cream/40">{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (section.type === "blockquote") {
                return (
                  <blockquote key={i}
                    className="article-body-el relative my-4 pl-6 border-l-2"
                    style={{ borderColor: "rgba(201,168,76,0.4)" }}>
                    <p className="font-cormorant font-medium text-cream/65"
                      style={{ fontSize: "clamp(18px,2.2vw,26px)", lineHeight: 1.5, letterSpacing: "-.005em" }}>
                      &ldquo;{section.content as string}&rdquo;
                    </p>
                  </blockquote>
                );
              }
              return null;
            })}
          </div>

          {/* article footer */}
          <div className="mt-16 pt-8 border-t border-white/[.07] flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <span className="font-mono text-[9px] tracking-[.28em] text-cream/22 uppercase">
                Written by OSTOIA&amp;CO
              </span>
              <span className="w-px h-3 bg-cream/10" />
              <span className="font-mono text-[9px] tracking-[.22em] text-cream/18 uppercase">
                Milan · Digital agency for boutique travel
              </span>
            </div>

            <Link href="/contact"
              className="group inline-flex items-center gap-3
                font-mono text-[10px] tracking-[.25em] text-gold/45 uppercase
                hover:text-gold transition-colors duration-300 self-start">
              Work with us
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M0 4h14M10 1l4 3-4 3" stroke="currentColor" strokeWidth="1.1"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEXT ARTICLE ──────────────────────────────────────── */}
      <section className="relative bg-navy-900 py-16 px-5 md:px-16 border-t border-white/[.06]">
        <div className="max-w-[860px] mx-auto flex items-center justify-between gap-6">
          <Link href="/journal"
            className="group inline-flex items-center gap-2 font-mono text-[9px] tracking-[.3em]
              text-cream/25 uppercase hover:text-cream/55 transition-colors duration-300">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none"
              className="transition-transform duration-300 group-hover:-translate-x-1">
              <path d="M14 4H2M6 1L2 4l4 3" stroke="currentColor" strokeWidth="1.1"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All articles
          </Link>

          <Link href={`/journal/${next.slug}`}
            className="group flex flex-col items-end gap-1">
            <span className="font-mono text-[9px] tracking-[.3em] text-cream/22 uppercase">Next article</span>
            <span className="font-cormorant font-bold text-cream/70 group-hover:text-gold
              transition-colors duration-300 flex items-center gap-2 text-right"
              style={{ fontSize: "clamp(15px,2vw,22px)", lineHeight: 1.25, maxWidth: "280px" }}>
              {next.title.slice(0, 45)}…
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.1"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
