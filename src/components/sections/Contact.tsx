"use client";
import { motion, useReducedMotion } from "framer-motion";
import { personal } from "@/lib/data";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Phone, FileText } from "lucide-react";

const LINKS = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail,
    description: "Best way to reach me",
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone}`,
    icon: Phone,
    description: "Call or WhatsApp",
  },
  {
    label: "GitHub",
    value: "tharungowdapr",
    href: personal.github,
    icon: Github,
    description: "See my code & projects",
  },
  {
    label: "LinkedIn",
    value: "tharun-gowda-p-r",
    href: personal.linkedin,
    icon: Linkedin,
    description: "Let's connect professionally",
  },
  {
    label: "Resume",
    value: "View my resume",
    href: personal.resume,
    icon: FileText,
    description: "PDF · Download",
  },
];

export function Contact() {
  const reduced = useReducedMotion();

  return (
    <section
      id="contact"
      className="py-24 border-t border-[hsl(var(--border))]"
      aria-labelledby="contact-heading"
    >
      <div className="section-container">
        <div className="max-w-2xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-12"
          >
            <p className="text-micro text-[hsl(var(--brand))] mb-2">Get in touch</p>
            <h2
              id="contact-heading"
              className="text-title text-[hsl(var(--foreground))] mb-4"
            >
              Contact
            </h2>
            <p className="text-body text-[hsl(var(--foreground-muted))] leading-relaxed">
               I&apos;m actively looking for AI/ML and NLP engineering internships. If you&apos;re
               working on something interesting — multi-agent systems, RAG, computer vision, or
               AI for social impact — let&apos;s talk.
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="space-y-3">
            {LINKS.map(({ label, value, href, icon: Icon, description }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.38,
                  delay: i * 0.07,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--surface))] hover:bg-[hsl(var(--surface-raised))] hover:border-[hsl(var(--border-strong))] transition-all duration-200"
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-[hsl(32_95%_52%/0.10)] border border-[hsl(32_95%_52%/0.18)] flex-shrink-0">
                  <Icon className="w-4 h-4 text-[hsl(var(--brand))]" aria-hidden />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-small font-medium text-[hsl(var(--foreground))]">{label}</p>
                  <p className="text-small text-[hsl(var(--foreground-muted))] truncate">{value}</p>
                </div>

                {/* Arrow */}
                <ArrowUpRight
                  className="w-4 h-4 text-[hsl(var(--foreground-subtle))] group-hover:text-[hsl(var(--brand))] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 flex-shrink-0"
                  aria-hidden
                />
              </motion.a>
            ))}
          </div>

          {/* Location note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center gap-1.5 mt-8 text-small text-[hsl(var(--foreground-subtle))]"
          >
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" aria-hidden />
            Based in Bengaluru, India · Open to remote internships
          </motion.p>
        </div>
      </div>
    </section>
  );
}
