import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { navLinks, cv, cvHref, profile } from "@/content/portfolio";
import { GithubIcon, LinkButton, LinkedinIcon, LogoMark } from "./primitives";
import { cn } from "@/lib/utils";

const socials = [
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

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
        "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
        scrolled || open ? "border-b bg-base/90 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label={`${profile.name}, back to top`}
        >
          <LogoMark />
          <span className="font-display text-2xl font-bold text-heading">Mahmoud</span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-[1.0625rem] font-bold text-heading transition-colors hover:text-accent-red"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2.5">
          <ul className="hidden items-center gap-2.5 sm:flex">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="inline-flex size-10 items-center justify-center rounded-full bg-panel-2 text-heading transition-colors hover:bg-accent-red"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
          <LinkButton
            href={cvHref}
            className="ml-2 hidden min-h-10 px-5 text-[0.9375rem] lg:inline-flex"
            {...(cv.available ? { download: cv.fileName } : {})}
          >
            {cv.available ? "Download CV" : "Request CV"}
          </LinkButton>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full bg-accent-red text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t px-4 pb-6 lg:hidden">
          <ul>
            {navLinks.map((l) => (
              <li key={l.href} className="border-b">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 font-display text-xl font-bold text-heading hover:text-accent-red"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <LinkButton
            href={cvHref}
            className="mt-5 w-full"
            {...(cv.available ? { download: cv.fileName } : {})}
          >
            {cv.available ? "Download CV" : "Request CV"}
          </LinkButton>
        </div>
      )}
    </header>
  );
}
