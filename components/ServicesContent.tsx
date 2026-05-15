"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

/* ── Data ─────────────────────────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    id: "brand-architecture",
    title: "Brand Architecture",
    tagline: "The foundation everything else is built on.",
    price: "From €3,000",
    duration: "2–3 weeks",
    desc: "Before pixels, before copy — your brand needs a strategic foundation. We define your positioning, voice, visual identity, and the story that makes premium travelers choose you over every alternative.",
    deliverables: [
      "Brand strategy & positioning document",
      "Visual identity system (logo, colors, typography)",
      "Brand guidelines & usage rules",
      "Tone of voice & messaging framework",
      "Competitive positioning map",
    ],
    bestFor: "New operators launching or established brands that have outgrown their identity.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2L20 19H2L11 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
        <path d="M11 8v5M11 15.5v.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    id: "conversion-design",
    title: "Conversion Design",
    tagline: "A website that earns its place.",
    price: "From €6,000",
    duration: "4–6 weeks",
    desc: "A beautiful site that doesn't convert is an expensive brochure. We design and build custom websites engineered around your booking funnel — every section, every CTA, every micro-interaction has a measurable purpose.",
    deliverables: [
      "Custom Next.js website (no templates)",
      "Conversion-optimised booking funnel",
      "Mobile-first responsive design",
      "Performance optimization (Core Web Vitals)",
      "CMS integration (Sanity / Contentful)",
      "Analytics & conversion tracking setup",
    ],
    bestFor: "Operators who need a website that actively generates revenue, not just looks good.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M2 8h18" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M8 8v10" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    num: "03",
    id: "digital-authority",
    title: "Digital Authority",
    tagline: "Become the answer — on Google and in AI.",
    price: "From €2,500/mo",
    duration: "Ongoing",
    desc: "Standard SEO chases volume. We build authority. Through technical SEO, content strategy, and GEO (Generative Engine Optimization), we position you as the definitive expert in your niche — the brand Google trusts and AI recommends.",
    deliverables: [
      "Technical SEO audit & remediation",
      "Content strategy & editorial calendar",
      "GEO optimization (AI search visibility)",
      "Monthly authority content (4 articles)",
      "Link acquisition strategy",
      "Monthly reporting & insights",
    ],
    bestFor: "Operators who want to own their niche in search results and AI recommendations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M11 3v16M3 11h16" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5 5.5C7 8 9 9.5 11 9.5s4-1.5 6-4M5 16.5c2-2.5 4-4 6-4s4 1.5 6 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    id: "full-package",
    title: "Full Package",
    tagline: "Brand + Web + Authority. Everything, integrated.",
    price: "From €14,000",
    duration: "8–12 weeks",
    desc: "The complete transformation. Brand architecture, conversion-first website, and ongoing digital authority — designed as one integrated system. This is how boutique operators become dominant digital presences in their niche.",
    deliverables: [
      "Everything in Brand Architecture",
      "Everything in Conversion Design",
      "6 months of Digital Authority",
      "Priority support & quarterly strategy calls",
      "Dedicated Slack channel",
      "First-year performance guarantee",
    ],
    bestFor: "Ambitious operators ready for a complete digital transformation with long-term results.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 6.5H20l-5.5 4 2 6.5L11 15l-5.5 4 2-6.5L2 8.5h6.5L11 2Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery",
    desc: "30-min call to understand your brand, goals, competitors, and ideal client. No pitch, just clarity.",
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Strategy",
    desc: "We map your positioning, define your digital roadmap, and present a tailored proposal.",
    duration: "Week 1–2",
  },
  {
    step: "03",
    title: "Creation",
    desc: "Design, build, and refine. You get weekly progress updates and two rounds of revisions on every deliverable.",
    duration: "Weeks 2–8",
  },
  {
    step: "04",
    title: "Launch",
    desc: "QA, performance testing, analytics verification — then a coordinated launch with post-live monitoring.",
    duration: "Final week",
  },
  {
    step: "05",
    title: "Growth",
    desc: "Monthly reporting, content delivery, SEO progress, and strategy adjustments based on real data.",
    duration: "Ongoing",
  },
];

const FAQS = [
  {
    q: "Do you work with travel brands outside Europe?",
    a: "Absolutely. We work with boutique operators worldwide — our clients include brands in the USA, Turkey, Italy, and beyond. Everything is handled remotely with a structured async workflow.",
  },
  {
    q: "How long does a full website project take?",
    a: "A Conversion Design engagement typically takes 4–6 weeks from kickoff to launch. The Full Package runs 8–12 weeks. Timelines depend on scope and how quickly you can provide feedback.",
  },
  {
    q: "We already have a website. Can you just improve it?",
    a: "We can, but we're honest about it: if the foundation isn't right, patching it rarely delivers the results you need. We always start with an audit and give you a straight assessment before recommending a path.",
  },
  {
    q: "What makes you different from a general web agency?",
    a: "We only work with boutique travel brands. That means every framework, every design decision, every SEO tactic is built specifically for how luxury and adventure travellers discover, evaluate, and book. We don't dilute our focus.",
  },
  {
    q: "Do you require a long-term contract for Digital Authority?",
    a: "We ask for a minimum 3-month commitment — SEO and authority-building take time to compound. After that, it's month-to-month. We'd rather earn your continued trust than lock you in.",
  },
  {
    q: "What's your payment structure?",
    a: "Project work: 50% upfront, 50% on delivery. Retainer work (Digital Authority): monthly in advance. We accept bank transfer and major cards.",
  },
];

/* ── Component ────────────────────────────────────────────────── */
export default function ServicesContent() {
  const heroRef    = useRef<HTMLDivElement>(null);
  const [openService, setOpenService] = useState<number | null>(null);
  const [openFaq, setOpenFaq]         = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsap.from(".svc-hero-el", {
        opacity: 0, y: 28, stagger: 0.09, duration: 0.85, ease: "power3.out", delay: 0.1,
      });
    };
    init();
    return () => { cancelled = true; };
  }, []);

  /* ProcessSection and FaqSection handle their own scroll animations internally */

  const toggleService = (i: number) => setOpenService(openService === i ? null : i);
  const toggleFaq     = (i: number) => setOpenFaq(openFaq === i ? null : i);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 pt-28 pb-14 md:pt-44 md:pb-28 px-5 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 55% at 50% 0%,rgba(201,168,76,.055) 0%,transparent 65%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.12),transparent)" }} />

        <div ref={heroRef} className="max-w-[1200px] mx-auto">
          <div className="svc-hero-el flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-gold/50" />
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">
              What we do
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <h1 className="svc-hero-el font-cormorant font-bold text-cream text-balance"
                style={{ fontSize: "clamp(42px,6.5vw,96px)", lineHeight: 1.06, letterSpacing: "-.015em" }}>
                Four ways we<br />
                <em className="not-italic" style={{
                  background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 45%,#C9A84C 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  grow your brand.
                </em>
              </h1>
              <p className="svc-hero-el font-inter text-[15px] md:text-[17px] leading-[1.75] text-cream/40 max-w-[500px] mt-6">
                Every engagement is custom. No packages off a shelf — we scope exactly
                what your brand needs, and nothing it doesn&apos;t.
              </p>
            </div>

            {/* stat */}
            <div className="svc-hero-el hidden lg:flex flex-col items-end gap-1 pb-1">
              <span className="font-mono font-medium text-gold/80 leading-none"
                style={{ fontSize: "clamp(36px,4vw,56px)" }}>100%</span>
              <span className="font-mono text-[9px] tracking-[.28em] text-cream/22 uppercase">
                Travel specialists
              </span>
            </div>
          </div>

          {/* service nav pills */}
          <div className="svc-hero-el flex flex-wrap gap-3 mt-12">
            {SERVICES.map((s, i) => (
              <button key={i} onClick={() => {
                setOpenService(i);
                document.getElementById("services-list")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
                className="min-h-[44px] px-5 rounded-[3px] font-inter text-[11px] tracking-[.1em] uppercase
                  border border-white/[.09] text-cream/35
                  hover:border-gold/40 hover:text-gold hover:bg-gold/5
                  transition-all duration-250">
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ─────────────────────────────────────── */}
      <section id="services-list" className="relative bg-navy-950 pb-16 md:pb-32 px-5 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col border-t border-white/[.07]">
            {SERVICES.map((svc, i) => {
              const isOpen = openService === i;
              return (
                <div key={i} className="border-b border-white/[.07]">
                  {/* Row header — always visible */}
                  <button
                    onClick={() => toggleService(i)}
                    className="w-full text-left group py-8 md:py-9 flex items-start gap-5 md:gap-8
                      transition-colors duration-300"
                    style={{ background: isOpen ? "rgba(201,168,76,0.025)" : "transparent" }}
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-[11px] tracking-[.3em] text-gold/35 pt-1 shrink-0 w-8">
                      {svc.num}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline gap-3 mb-1">
                            <h2 className="font-cormorant font-bold transition-colors duration-300"
                              style={{
                                fontSize: "clamp(22px,2.8vw,40px)", lineHeight: 1.15,
                                color: isOpen ? "#F5F0E8" : "rgba(245,240,232,0.85)",
                              }}>
                              {svc.title}
                            </h2>
                            <span className="font-mono text-[9px] tracking-[.25em] text-gold/40 uppercase">
                              {svc.price} · {svc.duration}
                            </span>
                          </div>
                          <p className="font-inter text-[13px] text-cream/38 transition-colors duration-300"
                            style={{ color: isOpen ? "rgba(245,240,232,0.5)" : undefined }}>
                            {svc.tagline}
                          </p>
                        </div>

                        <div className="flex items-center gap-3 shrink-0 pt-1">
                          <span className="transition-colors duration-300"
                            style={{ color: isOpen ? "rgba(201,168,76,0.7)" : "rgba(245,240,232,0.18)" }}>
                            {svc.icon}
                          </span>
                          {/* toggle chevron */}
                          <div className="w-8 h-8 rounded-full border flex items-center justify-center
                            transition-all duration-300 shrink-0"
                            style={{
                              borderColor: isOpen ? "rgba(201,168,76,0.4)" : "rgba(245,240,232,0.08)",
                              background: isOpen ? "rgba(201,168,76,0.06)" : "transparent",
                            }}>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                              style={{
                                color: isOpen ? "#C9A84C" : "rgba(245,240,232,0.2)",
                                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.35s cubic-bezier(.16,1,.3,1), color 0.3s",
                              }}>
                              <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.3"
                                strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Expanded detail */}
                  <div className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
                    style={{ maxHeight: isOpen ? "1600px" : "0px", opacity: isOpen ? 1 : 0 }}>
                    <div className="pb-10 pl-[52px] md:pl-[68px] pr-0">
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-8 md:gap-12">

                        {/* Description + deliverables */}
                        <div className="flex flex-col gap-6">
                          <p className="font-inter text-[14px] md:text-[15px] leading-[1.75] text-cream/45 max-w-[560px]">
                            {svc.desc}
                          </p>

                          <div className="flex flex-col gap-3">
                            <span className="font-mono text-[9px] tracking-[.32em] text-gold/40 uppercase">
                              What&apos;s included
                            </span>
                            <ul className="flex flex-col gap-2">
                              {svc.deliverables.map((d, j) => (
                                <li key={j} className="flex items-start gap-3">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                    className="shrink-0 mt-0.5">
                                    <path d="M2 6l3 3 5-6" stroke="#C9A84C" strokeWidth="1.3"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  <span className="font-inter text-[13px] text-cream/50">{d}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Best for + CTA */}
                        <div className="flex flex-col gap-6">
                          <div className="border border-white/[.06] rounded-[4px] p-5 flex flex-col gap-3">
                            <span className="font-mono text-[9px] tracking-[.3em] text-cream/22 uppercase">
                              Best for
                            </span>
                            <p className="font-inter text-[12px] leading-[1.65] text-cream/40">
                              {svc.bestFor}
                            </p>
                          </div>

                          <Link href="/contact"
                            className="group inline-flex items-center justify-center gap-3
                              h-12 px-7 rounded-[3px] overflow-hidden relative
                              font-inter text-[11px] tracking-[.15em] uppercase
                              border border-gold/40 text-gold
                              hover:border-gold hover:text-navy-900
                              transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]">
                            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0
                              transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)]" />
                            <span className="relative">Discuss this service</span>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none"
                              className="relative transition-transform duration-300 group-hover:translate-x-0.5">
                              <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5v6"
                                stroke="currentColor" strokeWidth="1.2"
                                strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────── */}
      <ProcessSection />

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <FaqSection faqs={FAQS} open={openFaq} toggle={toggleFaq} />

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <BottomCta />
    </>
  );
}

/* ── Process Section ──────────────────────────────────────────── */
function ProcessCard({
  p,
  isWide = false,
}: {
  p: (typeof PROCESS)[number];
  isWide?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="svc-process-step relative overflow-hidden rounded-[4px] p-7 md:p-8 flex flex-col gap-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "rgba(201,168,76,0.35)" : "rgba(255,255,255,0.06)"}`,
        background: hovered ? "rgba(201,168,76,0.025)" : "transparent",
        transition: "border-color 0.35s ease, background 0.35s ease",
        minHeight: isWide ? "220px" : "260px",
      }}
    >
      {/* huge faded step number — bg texture */}
      <span
        aria-hidden="true"
        className="absolute bottom-3 right-4 font-cormorant font-bold select-none pointer-events-none leading-none"
        style={{
          fontSize: isWide ? "clamp(120px,13vw,180px)" : "clamp(100px,11vw,155px)",
          color: "#C9A84C",
          opacity: 0.04,
          lineHeight: 1,
        }}
      >
        {p.step}
      </span>

      {/* top row: small mono step + duration badge */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <span className="font-mono text-[10px] tracking-[.22em] uppercase"
          style={{ color: "rgba(201,168,76,0.4)" }}>
          {p.step}
        </span>
        <span
          className="font-mono text-[9px] tracking-[.2em] uppercase px-2 py-1 rounded-[2px]"
          style={{
            color: "rgba(245,240,232,0.18)",
            border: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {p.duration}
        </span>
      </div>

      {/* title */}
      <h3
        className="relative z-10 font-cormorant font-bold text-cream leading-[1.1]"
        style={{
          fontSize: isWide
            ? "clamp(28px,3.2vw,44px)"
            : "clamp(22px,2.5vw,34px)",
        }}
      >
        {p.title}
      </h3>

      {/* description */}
      <p className="relative z-10 font-inter leading-[1.75]"
        style={{ fontSize: "13px", color: "rgba(245,240,232,0.38)" }}>
        {p.desc}
      </p>
    </div>
  );
}

function ProcessSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".svc-process-header > *", {
        opacity: 0, y: 24, stagger: 0.09, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".svc-process-step", {
        opacity: 0, y: 22, stagger: 0.1, duration: 0.7, ease: "power3.out", delay: 0.3,
      });
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // PROCESS indices: 0=Discovery, 1=Strategy, 2=Creation, 3=Launch, 4=Growth
  const [p01, p02, p03, p04, p05] = PROCESS;

  return (
    <section ref={ref} className="relative bg-navy-900 py-16 md:py-32 px-5 md:px-16 overflow-hidden">
      {/* noise texture */}
      <div className="absolute inset-0 opacity-[.018] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* section header — unchanged */}
        <div className="svc-process-header mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-7">
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">
              How we work
            </span>
          </div>
          <h2 className="font-cormorant font-bold text-cream"
            style={{ fontSize: "clamp(32px,4.5vw,64px)", lineHeight: 1.08, letterSpacing: "-.01em" }}>
            A process built for<br className="hidden md:block" />{" "}
            <em className="not-italic" style={{
              background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 50%,#C9A84C 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              zero surprises.
            </em>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="flex flex-col gap-4">
          {/* Row 1: 01 + 02 side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProcessCard p={p01} />
            <ProcessCard p={p02} />
          </div>

          {/* Row 2: 03 full-width */}
          <ProcessCard p={p03} isWide />

          {/* Row 3: 04 + 05 side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProcessCard p={p04} />
            <ProcessCard p={p05} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ Section ──────────────────────────────────────────────── */
function FaqSection({
  faqs,
  open,
  toggle,
}: {
  faqs: typeof FAQS;
  open: number | null;
  toggle: (i: number) => void;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".svc-faq-header > *", {
        opacity: 0, y: 24, stagger: 0.09, duration: 0.8, ease: "power3.out",
      });
      gsap.from(".svc-faq-row", {
        opacity: 0, y: 18, stagger: 0.08, duration: 0.65, ease: "power3.out", delay: 0.3,
      });
    }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-950 py-16 md:py-32 px-5 md:px-16">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.1),transparent)" }} />

      <div className="max-w-[1200px] mx-auto">
        <div className="svc-faq-header mb-14 md:mb-18">
          <div className="flex items-center gap-4 mb-7">
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/50 uppercase">
              Common questions
            </span>
          </div>
          <h2 className="font-cormorant font-bold text-cream"
            style={{ fontSize: "clamp(32px,4.5vw,64px)", lineHeight: 1.08, letterSpacing: "-.01em" }}>
            Everything you need<br className="hidden md:block" /> to know.
          </h2>
        </div>

        <div className="flex flex-col border-t border-white/[.07]">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="svc-faq-row border-b border-white/[.07]">
                <button
                  onClick={() => toggle(i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-6
                    group transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="font-inter text-[14px] md:text-[15px] leading-[1.6] font-medium
                    transition-colors duration-200"
                    style={{ color: isOpen ? "#F5F0E8" : "rgba(245,240,232,0.75)" }}>
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full border flex items-center justify-center
                    shrink-0 mt-0.5 transition-all duration-300"
                    style={{
                      borderColor: isOpen ? "rgba(201,168,76,0.4)" : "rgba(245,240,232,0.08)",
                      background: isOpen ? "rgba(201,168,76,0.06)" : "transparent",
                    }}>
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none"
                      style={{
                        color: isOpen ? "#C9A84C" : "rgba(245,240,232,0.25)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.35s cubic-bezier(.16,1,.3,1), color 0.3s",
                      }}>
                      <path d="M1 2.5l3.5 4 3.5-4" stroke="currentColor" strokeWidth="1.2"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                <div className="overflow-hidden transition-all duration-450 ease-[cubic-bezier(.16,1,.3,1)]"
                  style={{ maxHeight: isOpen ? "600px" : "0px", opacity: isOpen ? 1 : 0 }}>
                  <p className="font-inter text-[13px] md:text-[14px] leading-[1.75] text-cream/40 pb-6 max-w-[680px]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Bottom CTA ──────────────────────────────────────────────── */
function BottomCta() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(".svc-cta-el", {
        opacity: 0, y: 22, stagger: 0.1, duration: 0.8, ease: "power3.out",
      });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative bg-navy-900 py-16 md:py-32 px-5 md:px-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 70% at 50% 100%,rgba(201,168,76,.04) 0%,transparent 65%)" }} />

      <div className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-8">
        <div className="svc-cta-el flex items-center gap-3">
          <span className="w-5 h-px bg-gold/30" />
          <span className="font-mono text-[9px] tracking-[.35em] text-gold/45 uppercase">
            Ready to start
          </span>
          <span className="w-5 h-px bg-gold/30" />
        </div>

        <h2 className="svc-cta-el font-cormorant font-bold text-cream text-balance"
          style={{ fontSize: "clamp(36px,5.5vw,80px)", lineHeight: 1.07, letterSpacing: "-.015em" }}>
          Not sure which service<br />
          <em className="not-italic" style={{
            background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 45%,#C9A84C 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
            fits your brand?
          </em>
        </h2>

        <p className="svc-cta-el font-inter text-[15px] md:text-[16px] leading-[1.75] text-cream/38 max-w-[480px]">
          Tell us about your brand in 2 minutes. We&apos;ll come back with an honest
          recommendation — no upsell, no agenda.
        </p>

        <div className="svc-cta-el flex flex-col sm:flex-row items-center gap-4">
          <Link href="/contact"
            className="group relative h-14 px-10 rounded-[3px] overflow-hidden
              font-inter text-[11px] tracking-[.18em] uppercase
              border border-gold/50 text-gold
              hover:border-gold hover:text-navy-900
              transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]
              inline-flex items-center gap-3"
            style={{ minWidth: "220px", justifyContent: "center" }}>
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0
              transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)]" />
            <span className="relative flex items-center gap-3">
              Start the conversation
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>

          <a href="mailto:hello@ostoia.co"
            className="font-cormorant font-medium text-[18px] text-cream/40
              hover:text-gold transition-colors duration-300 tracking-tight">
            hello@ostoia.co
          </a>
        </div>

        <p className="svc-cta-el font-mono text-[9px] tracking-[.2em] text-cream/15 uppercase">
          48h response · No pitch · No spam
        </p>
      </div>
    </section>
  );
}
