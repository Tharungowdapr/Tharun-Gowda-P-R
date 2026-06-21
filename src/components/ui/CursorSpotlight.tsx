"use client";
import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !ref.current) return;
    const el = ref.current;
    const spot = el.firstElementChild as HTMLElement;
    if (!spot) return;
    let frame: number;
    let x = -400, y = -400;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        spot.style.transform = `translate3d(${x - 400}px, ${y - 400}px, 0)`;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-[9998]" aria-hidden>
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--brand) / 0.04), transparent 40%)",
          willChange: "transform",
          transform: "translate3d(-400px, -400px, 0)",
        }}
      />
    </div>
  );
}
