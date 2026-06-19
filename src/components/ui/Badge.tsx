import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "brand" | "muted";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-micro rounded-sm font-medium",
        variant === "default" && "bg-[hsl(var(--surface-raised))] text-[hsl(var(--foreground-muted))] border border-[hsl(var(--border))]",
        variant === "brand" && "bg-[hsl(32_95%_52%/0.12)] text-[hsl(32_95%_62%)] border border-[hsl(32_95%_52%/0.2)]",
        variant === "muted" && "bg-[hsl(var(--surface))] text-[hsl(var(--foreground-subtle))] border border-[hsl(var(--border))]",
        className
      )}
    >
      {children}
    </span>
  );
}
