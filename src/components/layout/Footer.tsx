import { personal } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[hsl(var(--border))] py-8">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left — name + year */}
          <p className="text-small text-[hsl(var(--foreground-subtle))]">
            <span className="font-mono text-[hsl(var(--brand))]">© {year}</span>{" "}
            Tharun Gowda P R
          </p>

          {/* Center — built with */}
          <p className="text-small text-[hsl(var(--foreground-subtle))] font-mono order-last sm:order-none">
            Built with{" "}
            <span className="text-[hsl(var(--foreground-muted))]">Next.js</span>
            {" · "}
            <span className="text-[hsl(var(--foreground-muted))]">Tailwind</span>
            {" · "}
            <span className="text-[hsl(var(--foreground-muted))]">Framer Motion</span>
          </p>

          {/* Right — socials */}
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
                className="w-8 h-8 flex items-center justify-center rounded-md text-[hsl(var(--foreground-subtle))] hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--surface-raised))] transition-colors duration-150"
              >
                <Icon className="w-4 h-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
