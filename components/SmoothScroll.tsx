"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Disable Lenis on touch devices — iOS native momentum scroll is better
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
    });

    lenisRef.current = lenis;

    let animFrame: number;

    function raf(time: number) {
      lenis.raf(time);
      animFrame = requestAnimationFrame(raf);
    }

    animFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animFrame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
