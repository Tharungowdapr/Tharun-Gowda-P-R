"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function ParallaxSection({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [reduced ? 0 : 3, 0, reduced ? 0 : -3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [reduced ? 1 : 0.97, 1, reduced ? 1 : 0.97]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [reduced ? 0 : 30, 0, reduced ? 0 : -30]);

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{ perspective: 1000, rotateX, scale, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
