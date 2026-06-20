"use client";
import { motion, useReducedMotion } from "framer-motion";

export function RevealText({ children, className, id, as = "h2" }: { children: string; className?: string; id?: string; as?: "h1" | "h2" | "h3" | "p" | "span" }) {
  const reduced = useReducedMotion();
  const words = children.split(" ");
  const Tag = as;

  return (
    <Tag id={id} className={className} aria-label={children}>
      <span className="sr-only">{children}</span>
      <span aria-hidden className="inline-flex flex-wrap">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: reduced ? 0 : 12, filter: reduced ? "none" : "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
