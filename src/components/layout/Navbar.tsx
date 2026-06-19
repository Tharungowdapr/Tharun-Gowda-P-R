"use client";
import { useScrollProgress, useActiveSection } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/lib/data";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = NAV_ITEMS.map((n) => n.id);

export function Navbar() {
  const progress = useScrollProgress();
  const active = useActiveSection(SECTION_IDS);
  const scrolled = progress > 2;

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[hsl(var(--brand))] z-50 transition-all duration-150"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />

      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-[hsl(var(--background)/0.85)] backdrop-blur-md border-b border-[hsl(var(--border))]"
            : "bg-transparent"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a
              href="#about"
              className="font-mono text-small text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] transition-colors"
            >
              <span className="text-[hsl(var(--brand))]">~/</span>tharun
            </a>

            {/* Nav links — desktop */}
            <ul className="hidden md:flex items-center gap-0.5" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "px-3 py-1.5 text-small rounded-md transition-colors duration-150",
                      active === item.id
                        ? "text-[hsl(var(--foreground))] bg-[hsl(var(--surface-raised))]"
                        : "text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface-raised)/0.5)]"
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <div className="flex items-center gap-1">
              {[
                { href: personal.github, icon: Github, label: "GitHub" },
                { href: personal.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personal.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center rounded-md text-[hsl(var(--foreground-muted))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface-raised))] transition-colors"
                >
                  <Icon className="w-4 h-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
