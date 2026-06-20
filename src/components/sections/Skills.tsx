"use client";
import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/lib/data";
import { RevealText } from "@/components/ui/RevealText";

export function Skills() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="py-24 border-t border-[hsl(var(--border))]" aria-labelledby="skills-heading">
      <div className="section-container">
        <div className="mb-12">
          <p className="text-micro text-[hsl(var(--brand))] mb-2">Capabilities</p>
          <RevealText id="skills-heading" className="text-title text-[hsl(var(--foreground))]">
            Technical Skills
          </RevealText>
        </div>

        <div className="space-y-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: reduced ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: gi * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-[140px_1fr] gap-6 items-start py-5 border-b border-[hsl(var(--border))] last:border-0"
            >
              {/* Category label */}
              <div>
                <span className="text-small font-medium text-[hsl(var(--foreground-subtle))]">
                  {group.category}
                </span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: reduced ? 1 : 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: gi * 0.04 + si * 0.03 }}
                    className="inline-flex items-center px-3 py-1 text-small font-mono rounded-md bg-[hsl(var(--surface-raised))] text-[hsl(var(--foreground-muted))] border border-[hsl(var(--border))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--border-strong))] transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
