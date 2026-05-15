"use client";

import { useEffect, useRef, useState, cloneElement } from "react";

const SERVICES = [
  "Brand Architecture",
  "Conversion Design",
  "Digital Authority",
  "Full Package",
];

const BUDGETS = [
  "€3,000 – €8,000",
  "€8,000 – €20,000",
  "€20,000+",
  "Let's discuss",
];

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactContent() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const formRef   = useRef<HTMLDivElement>(null);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget]   = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm]       = useState({ name: "", company: "", email: "", message: "" });

  /* entrance animations */
  useEffect(() => {
    let cancelled = false;
    const init = async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;

      // Hero
      gsap.from(".contact-hero-el", {
        opacity: 0, y: 28, stagger: 0.1, duration: 0.85, ease: "power3.out", delay: 0.15,
      });
      // Info
      gsap.from(".contact-info-el", {
        opacity: 0, x: -20, stagger: 0.09, duration: 0.75, ease: "power3.out", delay: 0.5,
      });
      // Form fields
      gsap.from(".contact-form-el", {
        opacity: 0, y: 20, stagger: 0.07, duration: 0.65, ease: "power3.out", delay: 0.55,
      });
    };
    init();
    return () => { cancelled = true; };
  }, []);

  const toggleService = (s: string) =>
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    /* ── Replace with your email service (Resend, Formspree, EmailJS) ── */
    await new Promise((r) => setTimeout(r, 1800));
    setFormState("success");
  };

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative bg-navy-950 pt-28 pb-14 md:pt-44 md:pb-24 px-5 md:px-16 overflow-hidden">
        {/* bg accent */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%,rgba(201,168,76,.06) 0%,transparent 65%)" }} />
        <div className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.12),transparent)" }} />

        <div ref={heroRef} className="max-w-[1200px] mx-auto">
          <div className="contact-hero-el flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-gold/50" />
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">
              Let&apos;s work together
            </span>
          </div>
          <h1
            className="contact-hero-el font-cormorant font-bold text-cream text-balance"
            style={{ fontSize: "clamp(42px,6.5vw,96px)", lineHeight: 1.06, letterSpacing: "-.015em" }}
          >
            Tell us about<br />
            <em className="not-italic" style={{
              background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 45%,#C9A84C 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              your brand.
            </em>
          </h1>
          <p className="contact-hero-el font-inter text-[15px] md:text-[17px] leading-[1.75] text-cream/40 max-w-[480px] mt-6">
            We respond within 48 hours. No sales pitch — just an honest conversation
            about whether we&apos;re the right fit.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="contact-form-section relative bg-navy-950 pb-16 md:pb-32 px-5 md:px-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 lg:gap-20">

            {/* ── LEFT: info ─────────────────────────────────────── */}
            <div className="flex flex-col gap-10 pt-4">

              {/* direct contact */}
              <div className="contact-info-el flex flex-col gap-4">
                <span className="font-mono text-[9px] tracking-[.35em] text-cream/22 uppercase">
                  Or reach us directly
                </span>
                <a href="mailto:hello@ostoia.co"
                  className="font-cormorant font-medium text-[22px] md:text-[26px] text-cream/70
                    hover:text-gold transition-colors duration-300 tracking-tight">
                  hello@ostoia.co
                </a>
              </div>

              {/* location */}
              <div className="contact-info-el flex flex-col gap-3">
                <span className="font-mono text-[9px] tracking-[.35em] text-cream/22 uppercase">Based in</span>
                <div className="flex flex-col gap-1">
                  <span className="font-inter text-[14px] text-cream/55">Milan, Italy</span>
                  <span className="font-mono text-[9px] tracking-[.22em] text-cream/22 uppercase">
                    Serving Europe · USA · Global
                  </span>
                </div>
              </div>

              {/* availability */}
              <div className="contact-info-el flex flex-col gap-3">
                <span className="font-mono text-[9px] tracking-[.35em] text-cream/22 uppercase">
                  Availability
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold/70 animate-pulse" />
                  <span className="font-inter text-[13px] text-cream/50">
                    Available for new projects — Q3 2026
                  </span>
                </div>
              </div>

              {/* what to expect */}
              <div className="contact-info-el border border-white/[.06] rounded-[4px] p-6 flex flex-col gap-4">
                <span className="font-mono text-[9px] tracking-[.3em] text-cream/22 uppercase">
                  What happens next
                </span>
                {[
                  ["48h", "We review your inquiry and respond personally"],
                  ["Call", "30-min discovery call — no pitch, just clarity"],
                  ["Proposal", "Tailored strategy + investment overview"],
                ].map(([step, desc]) => (
                  <div key={step} className="flex items-start gap-4">
                    <span className="font-mono text-[10px] tracking-[.2em] text-gold/50 w-12 shrink-0 pt-0.5">
                      {step}
                    </span>
                    <span className="font-inter text-[12px] leading-[1.6] text-cream/35">{desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: form ────────────────────────────────────── */}
            <div ref={formRef}>
              {formState === "success" ? (
                /* ── Success state ── */
                <SuccessState />
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                  {/* name + company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Your name" required>
                      <input
                        type="text" placeholder="Marco Pellegrini" required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      />
                    </Field>
                    <Field label="Company / Brand">
                      <input
                        type="text" placeholder="Routes&Roads"
                        value={form.company}
                        onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      />
                    </Field>
                  </div>

                  {/* email */}
                  <Field label="Email address" required>
                    <input
                      type="email" placeholder="hello@yourbrand.com" required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </Field>

                  {/* services */}
                  <div className="contact-form-el flex flex-col gap-3">
                    <label className="font-mono text-[9px] tracking-[.32em] text-gold/50 uppercase">
                      What do you need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((s) => {
                        const on = selectedServices.includes(s);
                        return (
                          <button
                            key={s} type="button"
                            onClick={() => toggleService(s)}
                            className="min-h-[44px] px-5 rounded-[3px] font-inter text-[11px] tracking-[.12em]
                              uppercase border transition-all duration-250"
                            style={{
                              borderColor: on ? "rgba(201,168,76,0.6)" : "rgba(245,240,232,0.1)",
                              background:  on ? "rgba(201,168,76,0.08)" : "transparent",
                              color:       on ? "#C9A84C" : "rgba(245,240,232,0.35)",
                            }}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* budget */}
                  <div className="contact-form-el flex flex-col gap-3">
                    <label className="font-mono text-[9px] tracking-[.32em] text-gold/50 uppercase">
                      Budget range
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => {
                        const on = budget === b;
                        return (
                          <button
                            key={b} type="button"
                            onClick={() => setBudget(on ? "" : b)}
                            className="min-h-[44px] px-5 rounded-[3px] font-inter text-[11px] tracking-[.1em]
                              border transition-all duration-250"
                            style={{
                              borderColor: on ? "rgba(201,168,76,0.6)" : "rgba(245,240,232,0.1)",
                              background:  on ? "rgba(201,168,76,0.08)" : "transparent",
                              color:       on ? "#C9A84C" : "rgba(245,240,232,0.35)",
                            }}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* message */}
                  <Field label="Tell us about your project" required>
                    <textarea
                      rows={5} required
                      placeholder="We're a boutique adventure travel operator based in Colorado. Our current site isn't converting and we're invisible on Google..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="resize-none"
                    />
                  </Field>

                  {/* submit */}
                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="contact-form-el group relative h-14 px-10 rounded-[3px] overflow-hidden
                      font-inter text-[11px] tracking-[.18em] uppercase
                      border border-gold/50 text-gold
                      hover:border-gold hover:text-navy-900
                      transition-all duration-400 ease-[cubic-bezier(.16,1,.3,1)]
                      disabled:opacity-50 disabled:cursor-not-allowed self-start"
                    style={{ minWidth: "220px" }}
                  >
                    {/* fill on hover */}
                    <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0
                      transition-transform duration-400 ease-[cubic-bezier(.16,1,.3,1)]" />
                    <span className="relative flex items-center justify-center gap-3">
                      {formState === "sending" ? (
                        <>
                          <span className="w-3.5 h-3.5 border border-current border-t-transparent rounded-full animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send inquiry
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                            className="transition-transform duration-300 group-hover:translate-x-1">
                            <path d="M2 6.5h9M8 3l4 3.5-4 3.5" stroke="currentColor"
                              strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                  <p className="font-mono text-[9px] tracking-[.2em] text-cream/18 uppercase">
                    We respond within 48 hours · No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Reusable field wrapper ──────────────────────────────────── */
function Field({
  label, required, children,
}: {
  label: string; required?: boolean; children: React.ReactElement;
}) {
  return (
    <div className="contact-form-el flex flex-col gap-2">
      <label className="font-mono text-[9px] tracking-[.32em] text-gold/50 uppercase">
        {label}{required && <span className="text-gold/40 ml-1">*</span>}
      </label>
      <div className="relative">
        {cloneElement(children, {
          className: [
            children.props.className ?? "",
            "w-full bg-navy-900 border border-white/[.08] rounded-[3px]",
            "px-4 py-3.5 font-inter text-[14px] text-cream/75 placeholder-cream/20",
            "outline-none focus:border-gold/40 focus:bg-navy-800/60",
            "transition-all duration-250",
          ].join(" "),
        })}
      </div>
    </div>
  );
}

/* ── Success state ───────────────────────────────────────────── */
function SuccessState() {
  return (
    <div className="flex flex-col items-start gap-6 py-12">
      <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 10l5 5 7-9" stroke="#C9A84C" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <h3 className="font-cormorant font-bold text-cream mb-2"
          style={{ fontSize: "clamp(26px,3vw,40px)", lineHeight: 1.15 }}>
          Message received.
        </h3>
        <p className="font-inter text-[14px] leading-[1.7] text-cream/40 max-w-[400px]">
          We&apos;ll review your inquiry and get back to you within 48 hours.
          In the meantime, feel free to explore our work.
        </p>
      </div>
      <a href="/work"
        className="group inline-flex items-center gap-2 font-mono text-[10px] tracking-[.25em]
          text-gold/50 uppercase hover:text-gold transition-colors duration-300">
        View our work
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none"
          className="transition-transform duration-300 group-hover:translate-x-1">
          <path d="M0 4h12M9 1l3 3-3 3" stroke="currentColor" strokeWidth="1.1"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  );
}
