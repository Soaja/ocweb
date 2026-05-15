import Link from "next/link";

const NAV_LINKS = [
  { label: "Work",     href: "/work"     },
  { label: "Services", href: "/services" },
  { label: "About",    href: "/about"    },
  { label: "Journal",  href: "/journal"  },
  { label: "Contact",  href: "/contact"  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 overflow-hidden border-t border-white/[.04]">

      {/* top gold accent */}
      <div className="w-full h-px"
        style={{ background: "linear-gradient(to right,transparent,rgba(201,168,76,.2),transparent)" }} />

      {/* watermark */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[38%]
          font-cormorant font-bold text-white/[.022] select-none pointer-events-none leading-none whitespace-nowrap"
        style={{ fontSize: "clamp(72px,16vw,200px)" }}
      >
        OSTOIA&amp;CO
      </div>

      {/* main grid */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-16 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* ── brand ── */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex flex-col group w-fit">
              <span className="font-cormorant font-medium text-[28px] tracking-[.05em] text-cream leading-none">
                OSTOIA<span className="text-gold">&amp;CO</span>
              </span>
              <span className="font-mono text-[9px] tracking-[.3em] text-slate-agency/50 uppercase mt-[4px]">
                Milan · Digital
              </span>
            </Link>

            <p className="font-inter text-[12px] leading-[1.75] text-cream/28 max-w-[210px] mt-1">
              Premium digital agency for boutique travel brands that refuse to be ordinary.
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/70 animate-pulse" />
              <span className="font-mono text-[9px] tracking-[.22em] text-cream/22 uppercase">
                Available for projects
              </span>
            </div>
          </div>

          {/* ── navigation ── */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] tracking-[.3em] text-cream/18 uppercase mb-4">
              Navigation
            </span>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-inter text-[13px] text-cream/35 hover:text-cream/75
                  transition-colors duration-200 w-fit min-h-[44px] flex items-center group"
              >
                {link.label}
                <span className="absolute bottom-0.5 left-0 w-0 h-px bg-gold/60
                  group-hover:w-full transition-all duration-300 ease-[cubic-bezier(.16,1,.3,1)]" />
              </Link>
            ))}
          </div>

          {/* ── contact ── */}
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] tracking-[.3em] text-cream/18 uppercase mb-4">
              Contact
            </span>
            <a
              href="mailto:hello@ostoia.co"
              className="font-inter text-[13px] text-cream/35 hover:text-gold
                transition-colors duration-200 py-1 w-fit"
            >
              hello@ostoia.co
            </a>
            <div className="flex flex-col gap-0.5 mt-3">
              {["Milan, Italy", "Europe · USA"].map((loc) => (
                <span key={loc} className="font-mono text-[9px] tracking-[.25em] text-cream/18 uppercase py-0.5">
                  {loc}
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-5 h-10 px-6
                border border-gold/30 rounded-[3px] font-inter text-[10px] tracking-[.15em]
                text-gold/60 uppercase hover:bg-gold/8 hover:border-gold/55 hover:text-gold
                transition-all duration-300 w-fit"
            >
              Start a project
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M1 5h8M6 2l3 3-3 3" stroke="currentColor" strokeWidth="1.1"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative z-10 border-t border-white/[.04]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-16 py-5
          flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[9px] tracking-[.22em] text-cream/18 uppercase">
            © {year} OSTOIA&amp;CO. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="font-mono text-[9px] tracking-[.22em] text-cream/15 uppercase
                  hover:text-cream/35 transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
