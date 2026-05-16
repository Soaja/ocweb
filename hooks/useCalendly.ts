"use client";

import { useCallback, useRef, useState } from "react";

export const CALENDLY_URL = "https://calendly.com/ostojich-vojin/30min";

const CSS_URL = "https://assets.calendly.com/assets/external/widget.css";
const JS_URL  = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string; text?: string; color?: string; textColor?: string }) => void;
    };
  }
}

/**
 * Lazy-loads Calendly script + CSS only on first click.
 * Zero impact on page load performance.
 */
export function useCalendly() {
  const [loading, setLoading] = useState(false);
  const ready = useRef(false);

  const load = useCallback((): Promise<void> => {
    return new Promise((resolve) => {
      // Already loaded
      if (ready.current && window.Calendly) { resolve(); return; }

      // Inject CSS once
      if (!document.querySelector(`link[href="${CSS_URL}"]`)) {
        const link = document.createElement("link");
        link.rel  = "stylesheet";
        link.href = CSS_URL;
        document.head.appendChild(link);
      }

      // Script already in DOM — poll until Calendly is ready
      const existing = document.querySelector(`script[src="${JS_URL}"]`);
      if (existing) {
        const poll = setInterval(() => {
          if (window.Calendly) { clearInterval(poll); ready.current = true; resolve(); }
        }, 40);
        return;
      }

      // Inject script
      const script = document.createElement("script");
      script.src   = JS_URL;
      script.async = true;
      script.onload = () => { ready.current = true; resolve(); };
      document.head.appendChild(script);
    });
  }, []);

  const open = useCallback(async () => {
    setLoading(true);
    await load();
    setLoading(false);
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  }, [load]);

  return { open, loading };
}
