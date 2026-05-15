"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote: "OSTOIA&CO didn't just build us a website — they built a conversion machine. Direct bookings tripled in the first quarter.",
    name: "Marco Pellegrini",
    title: "Founder, Routes&Roads",
    location: "USA",
  },
  {
    quote: "We went from invisible to page one. ChatGPT now recommends us when travelers ask about Sicily. That's the kind of visibility that compounds.",
    name: "Giulia Romano",
    title: "Director, LocalWay Sicily",
    location: "Italy",
  },
  {
    quote: "The team understood our brand immediately. The site feels exactly like our tours — premium, personal, and unforgettable.",
    name: "Ahmet Yilmaz",
    title: "CEO, LED Travel",
    location: "Turkey",
  },
];

export default function TestimonialsSection() {
  const [active, setActive]       = useState(0);
  const [fading, setFading]       = useState(false);
  const sectionRef                = useRef<HTMLElement>(null);
  const timerRef                  = useRef<ReturnType<typeof setTimeout>>();

  const goTo = (idx: number) => {
    if (fading || idx === active) return;
    setFading(true);
    setTimeout(() => { setActive(idx); setFading(false); }, 350);
  };

  /* auto-advance */
  useEffect(() => {
    timerRef.current = setTimeout(() => goTo((active + 1) % TESTIMONIALS.length), 5500);
    return () => clearTimeout(timerRef.current);
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  /* entrance */
  useEffect(() => {
    let played = false;
    const io = new IntersectionObserver(async ([e]) => {
      if (!e.isIntersecting || played) return;
      played = true; io.disconnect();
      const { gsap } = await import("gsap");
      gsap.from(sectionRef.current?.querySelectorAll(".t-animate") ?? [], {
        opacity: 0, y: 24, stagger: 0.12, duration: 0.8, ease: "power3.out",
      });
    }, { threshold: 0.2 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section ref={sectionRef} className="relative bg-navy-950 py-20 md:py-44 px-5 md:px-16 overflow-hidden">
      {/* Decorative huge quote mark */}
      <div
        aria-hidden
        className="absolute top-12 left-1/2 -translate-x-1/2 font-cormorant font-bold
          text-gold/[.035] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(180px,28vw,360px)" }}
      >
        ❝
      </div>

      {/* Radial centre glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%,rgba(201,168,76,.03) 0%,transparent 70%)" }} />

      <div className="relative z-10 max-w-[820px] mx-auto text-center">

        {/* label */}
        <div className="t-animate flex items-center justify-center gap-3 mb-16">
          <span className="w-6 h-px bg-gold/30" />
          <span className="font-mono text-[10px] tracking-[.38em] text-gold/40 uppercase">04 — Client voices</span>
          <span className="w-6 h-px bg-gold/30" />
        </div>

        {/* quote */}
        <blockquote
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(10px)" : "translateY(0)",
            transition: "opacity 350ms ease, transform 350ms ease",
          }}
        >
          <p className="t-animate font-cormorant font-medium italic text-cream/75 mb-10 text-balance"
            style={{ fontSize: "clamp(20px,2.6vw,34px)", lineHeight: 1.5 }}>
            &ldquo;{t.quote}&rdquo;
          </p>
          <footer className="t-animate flex flex-col items-center gap-1">
            <span className="font-inter font-medium text-[13px] text-cream/55">{t.name}</span>
            <span className="font-mono text-[9px] tracking-[.28em] text-gold/40 uppercase">{t.title}</span>
          </footer>
        </blockquote>

        {/* dot nav */}
        <div className="t-animate flex items-center justify-center gap-3 mt-12">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
              className="transition-all duration-400 rounded-full"
              style={{
                width:  i === active ? 24 : 6,
                height: 6,
                background: i === active ? "#C9A84C" : "rgba(245,240,232,.15)",
                transition: "width 400ms cubic-bezier(.16,1,.3,1), background 300ms",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
