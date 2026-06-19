"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink as ExtLinkIcon, Github, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TYPE_COLORS: Record<string, string> = {
  "AI System": "brand",
  "NLP": "brand",
  "Vision": "default",
};

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.article
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "group relative flex flex-col p-6 rounded-lg border border-[hsl(var(--border))]",
        "bg-[hsl(var(--surface))] hover:bg-[hsl(var(--surface-raised))]",
        "hover:border-[hsl(var(--border-strong))] transition-all duration-200",
        "cursor-default"
      )}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(32 95% 52% / 0.04), transparent 70%)",
        }}
        aria-hidden
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant={(TYPE_COLORS[project.type] as "brand" | "default" | "muted") ?? "muted"}>
              {project.type}
            </Badge>
          </div>
          <h3 className="text-heading text-[hsl(var(--foreground))]">{project.title}</h3>
          <p className="text-small text-[hsl(var(--foreground-subtle))] mt-0.5">{project.subtitle}</p>
        </div>

        <div className="flex items-center gap-1">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live demo`}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md text-[hsl(var(--foreground-subtle))] hover:text-[hsl(var(--brand))] hover:bg-[hsl(var(--surface-raised))] border border-transparent hover:border-[hsl(var(--border))] transition-all duration-150"
            >
              <ExtLinkIcon className="w-4 h-4" aria-hidden />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md text-[hsl(var(--foreground-subtle))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface-raised))] border border-transparent hover:border-[hsl(var(--border))] transition-all duration-150"
          >
            <Github className="w-4 h-4" aria-hidden />
          </a>
        </div>
      </div>

      {/* Description */}
      <p className="text-small text-[hsl(var(--foreground-muted))] leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="space-y-1.5 mb-5" aria-label="Key highlights">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-small text-[hsl(var(--foreground-muted))]">
            <ChevronRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-[hsl(var(--brand))]" aria-hidden />
            {h}
          </li>
        ))}
      </ul>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[hsl(var(--border))]">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="muted">
            {tech}
          </Badge>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24" aria-labelledby="projects-heading">
      <div className="section-container">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-micro text-[hsl(var(--brand))] mb-2">Work</p>
          <h2 id="projects-heading" className="text-title text-[hsl(var(--foreground))]">
            Projects
          </h2>
          <p className="text-body text-[hsl(var(--foreground-muted))] mt-3 max-w-lg">
            Production-grade AI systems — multi-agent architectures, RAG pipelines, diffusion models, and computer vision — all containerized with Docker.
          </p>
        </div>

        {/* Grid — 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
