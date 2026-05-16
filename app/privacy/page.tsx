import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — OSTOIA&CO",
  description:
    "How OSTOIA&CO collects, uses, and protects your personal data. GDPR-compliant privacy policy.",
  robots: { index: false },
};

const goldGrad: React.CSSProperties = {
  background: "linear-gradient(135deg,#C9A84C 0%,#E8C96A 45%,#C9A84C 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 pt-10 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <h2 className="font-cormorant font-bold text-cream" style={{ fontSize: "clamp(20px,2.5vw,28px)", letterSpacing: "-.01em" }}>
        {title}
      </h2>
      <div className="flex flex-col gap-3 font-inter text-[14px] leading-[1.82] text-cream/45">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <main className="bg-navy-950 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-14 md:pt-48 md:pb-20 px-5 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% -5%,rgba(201,168,76,.06) 0%,transparent 60%)" }} />

        <div className="relative max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-5 h-px bg-gold/40" />
            <span className="font-mono text-[10px] tracking-[.38em] text-gold/55 uppercase">Legal</span>
          </div>
          <h1 className="font-cormorant font-bold text-cream mb-4" style={{ fontSize: "clamp(38px,6vw,72px)", lineHeight: 1.06, letterSpacing: "-.018em" }}>
            Privacy <em className="not-italic" style={goldGrad}>Policy</em>
          </h1>
          <p className="font-inter text-[14px] text-cream/35 mb-2">
            Last updated: <span className="text-cream/50">May 2025</span>
          </p>
          <p className="font-inter text-[14px] text-cream/35">
            Controller: <span className="text-cream/50">OSTOIA&amp;CO, Milan, Italy</span>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-5 md:px-16 pb-24 md:pb-32">
        <div className="max-w-[800px] mx-auto flex flex-col gap-0">

          {/* Intro */}
          <div className="flex flex-col gap-4 pb-10 font-inter text-[14px] leading-[1.82] text-cream/45">
            <p>
              OSTOIA&amp;CO (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your personal data
              and respecting your privacy. This policy explains what data we collect, why we collect it,
              how we use it, and what rights you have under the General Data Protection Regulation (GDPR)
              and the ePrivacy Directive.
            </p>
            <p>
              By using ostoia.co, you acknowledge this policy. If you have any questions, contact us at{" "}
              <a href="mailto:hello@ostoia.co" className="text-gold/60 hover:text-gold/90 transition-colors underline underline-offset-2"
                style={{ textDecorationColor: "rgba(201,168,76,0.3)" }}>
                hello@ostoia.co
              </a>.
            </p>
          </div>

          <Section title="1. Who we are">
            <p>
              OSTOIA&amp;CO is a digital studio based in Milan, Italy, specialising in digital presence
              for boutique travel brands. We are the data controller for personal data collected through this website.
            </p>
            <p>
              <strong className="text-cream/65">Contact:</strong> hello@ostoia.co<br />
              <strong className="text-cream/65">Address:</strong> Milan, Italy
            </p>
          </Section>

          <Section title="2. What data we collect">
            <p>We may collect the following categories of personal data:</p>
            <ul className="list-none flex flex-col gap-2 pl-0">
              {[
                { label: "Contact data", desc: "Name, email address, and message content when you submit our contact form or book a call." },
                { label: "Usage data", desc: "Pages visited, time on site, referral source, browser type, and device type — collected via analytics tools when you consent." },
                { label: "Communication data", desc: "Email correspondence if you contact us directly." },
                { label: "Cookie data", desc: "See Section 5 for full details on the cookies we use." },
              ].map(({ label, desc }) => (
                <li key={label} className="flex gap-3">
                  <span className="text-gold/40 mt-1 shrink-0">◆</span>
                  <span><strong className="text-cream/65">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="3. How we use your data">
            <p>We use your data only for the purposes for which it was collected:</p>
            <ul className="list-none flex flex-col gap-2 pl-0">
              {[
                "Responding to enquiries submitted through our contact form",
                "Scheduling and conducting consultation calls",
                "Sending a one-time auto-reply confirming receipt of your enquiry",
                "Understanding how visitors use our website (analytics, with consent only)",
                "Complying with legal obligations",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold/40 mt-1 shrink-0">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>We do not sell, rent, or share your data with third parties for marketing purposes.</p>
          </Section>

          <Section title="4. Legal basis for processing">
            <p>We process your personal data on the following legal bases under GDPR Article 6:</p>
            <ul className="list-none flex flex-col gap-2 pl-0">
              {[
                { label: "Consent (Art. 6(1)(a))", desc: "For analytics and marketing cookies, and for receiving marketing communications." },
                { label: "Contract (Art. 6(1)(b))", desc: "When processing data necessary to respond to your enquiry or provide services." },
                { label: "Legitimate interests (Art. 6(1)(f))", desc: "For essential site functionality and security." },
                { label: "Legal obligation (Art. 6(1)(c))", desc: "When required to comply with applicable law." },
              ].map(({ label, desc }) => (
                <li key={label} className="flex gap-3">
                  <span className="text-gold/40 mt-1 shrink-0">◆</span>
                  <span><strong className="text-cream/65">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="5. Cookies">
            <p>
              We use cookies and similar technologies on this website. You can manage your preferences
              at any time using our cookie banner. Below is a summary of the cookies we use:
            </p>
            <div className="rounded-[6px] overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              {[
                {
                  category: "Essential",
                  required: true,
                  purpose: "Enable core site functionality, security, and session management.",
                  examples: "Session token, CSRF protection",
                  retention: "Session / up to 1 year",
                },
                {
                  category: "Analytics",
                  required: false,
                  purpose: "Understand how visitors navigate and use the site. All data is aggregated and anonymous.",
                  examples: "Google Analytics, Plausible",
                  retention: "Up to 26 months",
                },
                {
                  category: "Marketing",
                  required: false,
                  purpose: "Measure campaign effectiveness and enable basic retargeting.",
                  examples: "Meta Pixel, Google Ads",
                  retention: "Up to 90 days",
                },
              ].map((row, i) => (
                <div key={row.category}
                  className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-3 p-5 text-[12px]"
                  style={{ borderTop: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.012)" : "transparent" }}>
                  <div className="flex flex-col gap-1">
                    <span className="font-inter font-medium text-cream/70">{row.category}</span>
                    <span className="font-mono text-[9px] tracking-[.2em] uppercase"
                      style={{ color: row.required ? "rgba(201,168,76,0.6)" : "rgba(245,240,232,0.25)" }}>
                      {row.required ? "Required" : "Optional"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 text-cream/38">
                    <p>{row.purpose}</p>
                    <p className="text-cream/22">Tools: {row.examples} · Retention: {row.retention}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="6. Data retention">
            <p>
              We retain personal data only for as long as necessary for the purpose it was collected:
            </p>
            <ul className="list-none flex flex-col gap-2 pl-0">
              {[
                "Contact form submissions: up to 2 years from last contact",
                "Analytics data: up to 26 months (if consent given)",
                "Email correspondence: up to 5 years for business records",
                "Cookie consent records: 1 year",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold/40 mt-1 shrink-0">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="7. Your rights">
            <p>Under the GDPR, you have the following rights regarding your personal data:</p>
            <ul className="list-none flex flex-col gap-2 pl-0">
              {[
                { label: "Access", desc: "Request a copy of the personal data we hold about you." },
                { label: "Rectification", desc: "Ask us to correct inaccurate or incomplete data." },
                { label: "Erasure", desc: "Request deletion of your data ('right to be forgotten')." },
                { label: "Restriction", desc: "Ask us to limit how we process your data in certain circumstances." },
                { label: "Portability", desc: "Receive your data in a structured, machine-readable format." },
                { label: "Objection", desc: "Object to processing based on legitimate interests." },
                { label: "Withdraw consent", desc: "Withdraw consent at any time where processing is consent-based." },
              ].map(({ label, desc }) => (
                <li key={label} className="flex gap-3">
                  <span className="text-gold/40 mt-1 shrink-0">◆</span>
                  <span><strong className="text-cream/65">{label}:</strong> {desc}</span>
                </li>
              ))}
            </ul>
            <p>
              To exercise any of these rights, email us at{" "}
              <a href="mailto:hello@ostoia.co" className="text-gold/60 hover:text-gold/90 transition-colors underline underline-offset-2"
                style={{ textDecorationColor: "rgba(201,168,76,0.3)" }}>
                hello@ostoia.co
              </a>. We will respond within 30 days.
            </p>
            <p>
              You also have the right to lodge a complaint with your local supervisory authority. In Italy,
              this is the <strong className="text-cream/60">Garante per la Protezione dei Dati Personali</strong> (garante.it).
            </p>
          </Section>

          <Section title="8. Third-party services">
            <p>We use the following third-party services that may process your data:</p>
            <ul className="list-none flex flex-col gap-2 pl-0">
              {[
                { name: "Resend", purpose: "Email delivery for contact form responses", link: "https://resend.com/privacy" },
                { name: "Calendly", purpose: "Scheduling discovery and consultation calls", link: "https://calendly.com/privacy" },
                { name: "Vercel", purpose: "Website hosting and edge delivery", link: "https://vercel.com/legal/privacy-policy" },
                { name: "Google Analytics", purpose: "Website analytics (only with your consent)", link: "https://policies.google.com/privacy" },
              ].map(({ name, purpose, link }) => (
                <li key={name} className="flex gap-3">
                  <span className="text-gold/40 mt-1 shrink-0">◆</span>
                  <span>
                    <strong className="text-cream/65">{name}:</strong> {purpose}.{" "}
                    <a href={link} target="_blank" rel="noopener noreferrer"
                      className="text-gold/50 hover:text-gold/80 transition-colors underline underline-offset-2"
                      style={{ textDecorationColor: "rgba(201,168,76,0.25)" }}>
                      Privacy Policy ↗
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="9. International transfers">
            <p>
              Some of our service providers (Resend, Vercel, Calendly, Google) are based in or operate from the United States.
              Where data is transferred outside the EEA, we ensure appropriate safeguards are in place,
              including Standard Contractual Clauses (SCCs) approved by the European Commission.
            </p>
          </Section>

          <Section title="10. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. Material changes will be communicated via
              a notice on our website. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
              We encourage you to review this policy periodically.
            </p>
          </Section>

          {/* Back link */}
          <div className="pt-12 mt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-inter text-[12px] tracking-[.1em] uppercase
                text-cream/30 hover:text-cream/65 transition-colors duration-200"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10 6H2M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.3"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to home
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
