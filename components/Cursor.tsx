"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const follower = followerRef.current;
    const label = labelRef.current;
    if (!dot || !follower || !label) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      followerPos.current.x = lerp(followerPos.current.x, pos.current.x, 0.1);
      followerPos.current.y = lerp(followerPos.current.y, pos.current.y, 0.1);
      follower.style.transform = `translate(${followerPos.current.x}px, ${followerPos.current.y}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);

    const onEnterLink = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const cursorLabel = el.dataset.cursor ?? "VIEW";
      follower.style.width = "72px";
      follower.style.height = "72px";
      follower.style.background = "rgba(201,168,76,0.12)";
      follower.style.borderColor = "#C9A84C";
      dot.style.opacity = "0";
      label.textContent = cursorLabel;
      label.style.opacity = "1";
    };

    const onLeaveLink = () => {
      follower.style.width = "36px";
      follower.style.height = "36px";
      follower.style.background = "transparent";
      follower.style.borderColor = "rgba(245,240,232,0.3)";
      dot.style.opacity = "1";
      label.style.opacity = "0";
    };

    const interactive = document.querySelectorAll<HTMLElement>(
      "a, button, [data-cursor]"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterLink);
        el.removeEventListener("mouseleave", onLeaveLink);
      });
    };
  }, []);

  return (
    <>
      {/* Gold dot */}
      <div
        ref={dotRef}
        className="cursor-dot fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 7,
          height: 7,
          marginLeft: -3.5,
          marginTop: -3.5,
          borderRadius: "50%",
          background: "#C9A84C",
          transition: "opacity 200ms",
          willChange: "transform",
        }}
      />
      {/* Follower ring */}
      <div
        ref={followerRef}
        className="cursor-follower fixed top-0 left-0 z-[9998] pointer-events-none flex items-center justify-center"
        style={{
          width: 36,
          height: 36,
          marginLeft: -18,
          marginTop: -18,
          borderRadius: "50%",
          border: "1px solid rgba(245,240,232,0.3)",
          background: "transparent",
          transition: "width 300ms cubic-bezier(0.16,1,0.3,1), height 300ms cubic-bezier(0.16,1,0.3,1), background 300ms, border-color 300ms",
          willChange: "transform",
        }}
      >
        <span
          ref={labelRef}
          className="font-mono text-[9px] tracking-widest text-gold uppercase"
          style={{ opacity: 0, transition: "opacity 200ms" }}
        />
      </div>
    </>
  );
}
