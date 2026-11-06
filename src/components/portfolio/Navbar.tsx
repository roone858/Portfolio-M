import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, cv, cvHref } from "@/content/portfolio";
import { LinkButton } from "./primitives";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled || open ? "border-border bg-background/85 backdrop-blur-md" : "border-transparent",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-display text-base font-semibold">
          mahmoud<span className="text-primary">.</span>gamal
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <LinkButton href={cvHref} variant="outline" className="min-h-9 px-4" {...(cv.available ? { download: cv.fileName } : {})}>
            {cv.available ? "Download CV" : "Request CV"}
          </LinkButton>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-md md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      {open && (
        <ul className="border-t px-5 pb-5 md:hidden">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-base text-muted-foreground hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
