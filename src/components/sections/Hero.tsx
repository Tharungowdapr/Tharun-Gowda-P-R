"use client";
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { personal } from "@/lib/data";
import { ArrowDown, Github, Linkedin, MapPin } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ROLES = ["AI/ML Engineer", "Full-Stack AI Developer", "NLP Engineer", "Computer Vision Enthusiast"];

function Typewriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
        },
        deleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [text, roleIndex, deleting]);

  return (
    <span className="inline-flex items-center gap-2 font-mono text-small text-[hsl(var(--foreground-muted))]">
      <span className="text-[hsl(var(--brand))]">$</span>
      <span>role</span>
      <span className="text-[hsl(var(--foreground-subtle))]">=</span>
      <span className="text-[hsl(32_95%_62%)]">&ldquo;{text}</span>
      <span className="inline-block w-[2px] h-4 bg-[hsl(var(--brand))] animate-[blink_1.1s_step-end_infinite] -ml-1" aria-hidden />
      <span className="text-[hsl(32_95%_62%)]">&rdquo;</span>
    </span>
  );
}

export function Hero() {
  const reduced = useReducedMotion();

  const container = {
    animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };

  const item = {
    initial: { opacity: 0, y: reduced ? 0 : 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/4 -left-24 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(32 95% 52% / 0.3), transparent 70%)",
            animation: "orb-float 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 -right-24 w-80 h-80 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsl(200 80% 50% / 0.25), transparent 70%)",
            animation: "orb-float-2 25s ease-in-out infinite",
          }}
        />
      </div>

      {/* Animated grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border-strong)/0.25) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border-strong)/0.25) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 55% at 50% 50%, black 25%, transparent 100%)",
          animation: "grid-pulse 8s ease-in-out infinite",
        }}
        aria-hidden
      />

      <div className="section-container relative z-10">
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          {/* Location pill */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-1.5 text-micro text-[hsl(var(--foreground-subtle))] border border-[hsl(var(--border))] rounded-sm px-2.5 py-1">
              <MapPin className="w-3 h-3 text-[hsl(var(--brand))]" aria-hidden />
              Bengaluru, India · Available for internships
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={item} className="text-display text-[hsl(var(--foreground))] mb-2">
            Tharun{" "}
            <span className="text-[hsl(var(--foreground-muted))]">Gowda</span>{" "}
            <span className="text-[hsl(var(--foreground-subtle))]">P R</span>
          </motion.h1>
          <motion.p variants={item} className="text-body text-[hsl(var(--foreground-muted))] mb-6">
            RV College of Engineering · B.E. AIML
          </motion.p>

          {/* Typewriter */}
          <motion.div variants={item} className="mb-6">
            <Typewriter />
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="text-body text-[hsl(var(--foreground-muted))] max-w-xl leading-relaxed mb-10"
          >
            Third-year AIML student at RVCE building production-grade AI systems — multi-agent
            pipelines, RAG architectures, diffusion models, and computer vision. Former NCC cadet
            and national-level rifle shooter. Currently at{" "}
            <span className="text-[hsl(var(--foreground))]">RVCE, Bengaluru</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3 mb-16">
            <MagneticButton
              href="#projects"
              className="inline-flex items-center gap-2 h-10 px-5 bg-[hsl(var(--brand))] text-[hsl(var(--brand-foreground))] text-small font-semibold rounded-md hover:brightness-110 active:brightness-95 transition-all duration-150"
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 bg-[hsl(var(--surface-raised))] text-[hsl(var(--foreground-muted))] text-small font-medium rounded-md border border-[hsl(var(--border))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--border-strong))] transition-all duration-150"
            >
              <Github className="w-4 h-4" aria-hidden />
              GitHub
            </MagneticButton>
            <MagneticButton
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-10 px-5 bg-[hsl(var(--surface-raised))] text-[hsl(var(--foreground-muted))] text-small font-medium rounded-md border border-[hsl(var(--border))] hover:text-[hsl(var(--foreground))] hover:border-[hsl(var(--border-strong))] transition-all duration-150"
            >
              <Linkedin className="w-4 h-4" aria-hidden />
              LinkedIn
            </MagneticButton>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-px bg-[hsl(var(--border))] rounded-lg overflow-hidden border border-[hsl(var(--border))] max-w-sm"
          >
            {[
              { value: "8.12", label: "GPA", suffix: "/10" },
              { value: "10", label: "Projects" },
              { value: "3", label: "Certifications" },
            ].map(({ value, label, suffix }) => (
              <div
                key={label}
                className="bg-[hsl(var(--surface))] px-4 py-3 text-center"
              >
                <div className="font-mono text-[1.125rem] font-semibold text-[hsl(var(--foreground))] tabular-nums">
                  {value}
                  {suffix && <span className="text-[hsl(var(--foreground-subtle))] text-small">{suffix}</span>}
                </div>
                <div className="text-micro text-[hsl(var(--foreground-subtle))] mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-micro text-[hsl(var(--foreground-subtle))]">scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[hsl(var(--foreground-subtle))]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
