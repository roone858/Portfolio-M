import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, cv, cvHref, profile } from "@/content/portfolio";
import { LinkButton } from "./primitives";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // The flag follows the section in view.
  useEffect(() => {
    const els = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((e): e is Element => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        scrolled || open ? "border-flag/50 bg-ink/95 backdrop-blur-sm" : "border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6"
      >
        <a
          href="#top"
          className="flex items-center gap-3"
          aria-label={`${profile.name}, back to top`}
        >
          <span aria-hidden className="stock flex h-8 w-5 justify-center rounded-[2px]">
            <span className="perf-y h-full w-3 [background-size:12px_10px]" />
          </span>
          <span className="font-cond text-[1.75rem] text-edge">{profile.name}</span>
          <span
            lang="ar"
            dir="rtl"
            className="hidden font-arabic text-sm font-semibold text-flag sm:inline"
          >
            {profile.nameAr}
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.href ? "location" : undefined}
                className={cn(
                  "label-cond relative py-2 transition-colors",
                  active === l.href ? "text-flag" : "text-edge hover:text-flag",
                )}
              >
                {l.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 -bottom-0.5 h-0.5 bg-flag transition-transform duration-200",
                    active === l.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <LinkButton
            href={cvHref}
            variant="outline"
            className="min-h-10 px-8 text-[0.8125rem]"
            {...(cv.available ? { download: cv.fileName } : {})}
          >
            {cv.available ? "Download CV" : "Request CV"}
          </LinkButton>
        </div>
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-edge md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-flag/50 px-4 pb-6 md:hidden">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href} className="border-b">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-cond block py-4 text-3xl text-edge hover:text-flag"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <LinkButton
            href={cvHref}
            className="mt-6 w-full"
            {...(cv.available ? { download: cv.fileName } : {})}
          >
            {cv.available ? "Download CV" : "Request CV"}
          </LinkButton>
        </div>
      )}
    </header>
  );
}
