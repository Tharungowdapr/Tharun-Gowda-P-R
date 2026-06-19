"use client";
import { useActiveSection } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";
import { Code2, Briefcase, Cpu, GraduationCap, Mail, Home } from "lucide-react";

const NAV = [
  { id: "about",      label: "Home",       icon: Home },
  { id: "projects",   label: "Projects",   icon: Code2 },
  { id: "skills",     label: "Skills",     icon: Cpu },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education",  label: "Education",  icon: GraduationCap },
  { id: "contact",    label: "Contact",    icon: Mail },
];

export function MobileNav() {
  const active = useActiveSection(NAV.map((n) => n.id));

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[hsl(var(--surface)/0.92)] backdrop-blur-md border-t border-[hsl(var(--border))]"
      aria-label="Mobile navigation"
    >
      {/* Safe area for notched phones */}
      <div className="flex items-center justify-around px-1 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        {NAV.map(({ id, label, icon: Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={label}
            aria-current={active === id ? "page" : undefined}
            className={cn(
              "flex flex-col items-center gap-0.5 px-2 py-1 rounded-md transition-colors duration-150 min-w-[44px]",
              active === id
                ? "text-[hsl(var(--brand))]"
                : "text-[hsl(var(--foreground-subtle))] hover:text-[hsl(var(--foreground-muted))]"
            )}
          >
            <Icon className="w-5 h-5" aria-hidden />
            <span className="text-[10px] leading-none font-medium">{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
