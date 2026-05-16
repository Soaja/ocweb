"use client";

import { useEffect, useState } from "react";

// ── Update this to your WhatsApp number (international format, no + or spaces)
const WA_NUMBER = "393XXXXXXXXX"; // e.g. 393491234567 for Italy +39 349 123 4567
const WA_MESSAGE = encodeURIComponent("Hi, I'd like to learn more about your services for boutique travel brands.");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Appear after 2s so it doesn't compete with page load
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="fixed z-[9970] flex items-center gap-3 select-none"
      style={{
        bottom: "clamp(20px,4vw,32px)",
        right: "clamp(16px,4vw,32px)",
        transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
        opacity: visible ? 1 : 0,
        transition: "transform 500ms cubic-bezier(.16,1,.3,1), opacity 400ms ease",
      }}
    >
      {/* Tooltip */}
      <span
        className="font-inter text-[11px] tracking-[.06em] text-cream/80 whitespace-nowrap
          rounded-[4px] px-3 py-1.5 pointer-events-none"
        style={{
          background: "rgba(15,30,53,0.95)",
          border: "1px solid rgba(255,255,255,0.08)",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(0)" : "translateX(6px)",
          transition: "opacity 220ms ease, transform 280ms cubic-bezier(.16,1,.3,1)",
          backdropFilter: "blur(8px)",
        }}
      >
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div
        className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        style={{
          background: hovered
            ? "linear-gradient(135deg,#20b03a,#25d366)"
            : "linear-gradient(135deg,#1da733,#25d366)",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          transition: "background 0.3s, transform 0.3s cubic-bezier(.16,1,.3,1)",
          boxShadow: hovered
            ? "0 12px 40px rgba(37,211,102,0.35)"
            : "0 8px 28px rgba(0,0,0,0.35)",
        }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px solid rgba(37,211,102,0.5)",
            animation: "wa-pulse 2.5s ease-out infinite",
          }}
        />

        {/* WhatsApp icon */}
        <svg width="26" height="26" viewBox="0 0 32 32" fill="white" aria-hidden>
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.822 6.5L4 29l7.688-1.8A12.94 12.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm6.406 16.563c-.27.756-1.578 1.446-2.156 1.537-.553.088-1.25.124-2.016-.127-.463-.15-1.059-.35-1.822-.686-3.2-1.38-5.293-4.6-5.453-4.813-.16-.21-1.297-1.72-1.297-3.28s.82-2.328 1.112-2.645c.29-.316.635-.395.846-.395l.61.012c.195.008.458-.074.717.548.27.645.916 2.233.997 2.394.08.16.133.348.027.558-.107.21-.16.34-.32.523-.16.183-.336.41-.48.55-.16.16-.327.334-.14.655.186.32.826 1.362 1.773 2.204 1.217 1.085 2.244 1.42 2.563 1.582.32.16.506.133.695-.08.19-.213.81-.947 1.027-1.273.213-.326.428-.273.72-.16.293.113 1.865.878 2.185 1.038.32.16.533.24.613.373.08.133.08.77-.19 1.525z"/>
        </svg>
      </div>

      <style>{`
        @keyframes wa-pulse {
          0% { transform: scale(1); opacity: 0.8; }
          70% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1.5); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
