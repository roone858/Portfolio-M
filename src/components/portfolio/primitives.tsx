import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";
const variants: Record<Variant, string> = {
  primary: "bg-accent-red text-white hover:bg-red-deep",
  outline: "border border-line bg-panel text-heading hover:border-accent-red hover:text-accent-red",
  ghost: "text-heading hover:text-accent-red px-1",
};

export function LinkButton({
  variant = "primary",
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 font-display text-base font-bold tracking-wide transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

/** Red kicker over a large heading, optionally centered with an intro line. */
export function SectionTitle({
  id,
  kicker,
  title,
  intro,
  center = false,
}: {
  id?: string;
  kicker: string;
  title: ReactNode;
  intro?: string;
  center?: boolean;
}) {
  return (
    <header data-reveal className={cn("mb-12", center && "mx-auto max-w-2xl text-center")}>
      <p className="kicker">{kicker}</p>
      <h2 id={id} className="mt-3 text-[clamp(2rem,4vw,2.75rem)]">
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-4", center ? "mx-auto max-w-[56ch]" : "max-w-[60ch]")}>{intro}</p>
      )}
    </header>
  );
}

/** Small heading with a thin rule trailing it (Education, Experience). */
export function RuleHeading({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <div data-reveal className="mb-8 flex items-center gap-5">
      <h3 id={id} className="text-[1.75rem]">
        {children}
      </h3>
      <span aria-hidden className="flex w-14 items-center">
        <span className="size-1.5 rounded-full bg-soft" />
        <span className="h-px flex-1 bg-soft" />
        <span className="size-1.5 rounded-full bg-soft" />
      </span>
    </div>
  );
}

/** Brand mark: a red ring with an inner dot, beside the name. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-8", className)}>
      <circle cx="16" cy="16" r="12" fill="none" stroke="var(--red)" strokeWidth="5" />
      <circle cx="16" cy="16" r="3.5" fill="var(--red)" />
    </svg>
  );
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-4 fill-current", className)}>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cn("size-4 fill-current", className)}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}
