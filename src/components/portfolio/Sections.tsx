import { Database, Download, Layers, LayoutTemplate, Plug, Server, Smartphone, Wrench, Mail, ArrowUpRight } from "lucide-react";
import { approach, cv, cvHref, experience, profile, skillGroups } from "@/content/portfolio";
import { GithubIcon, LinkButton, LinkedinIcon, Reveal, SectionHeader } from "./primitives";

const icons = { layout: LayoutTemplate, layers: Layers, plug: Plug, wrench: Wrench, smartphone: Smartphone, server: Server, database: Database };
const wrap = "mx-auto max-w-6xl px-5";

export function About() {
  const facts = [
    { k: "Approach", v: "Clean architecture, reusable components, reliable API integration." },
    { k: "Interests", v: "Frontend architecture, performance, real-time UIs, AI-assisted workflows." },
    { k: "Goal", v: "Grow as a frontend engineer on products in Egypt, the Gulf, or remote." },
  ];
  return (
    <section id="about" className="py-24">
      <div className={wrap}>
        <SectionHeader eyebrow="About" title="Practical frontend, built for real products" />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-muted-foreground">
            <p>I'm a Frontend Developer focused on building modern web applications with React, Angular, and TypeScript.</p>
            <p>I enjoy transforming complex requirements into clean, maintainable interfaces with responsive layouts, reusable components, and reliable API integrations.</p>
            <p>My experience includes educational platforms, dashboards, authentication systems, real-time communication, and payment integrations.</p>
            <p>I'm continuously improving my frontend architecture, performance, and development workflow using modern tools and AI-assisted development.</p>
            <LinkButton href={cvHref} variant="outline" className="mt-2" {...(cv.available ? { download: cv.fileName } : {})}>
              <Download className="size-4" /> {cv.available ? "Download CV" : "Request CV"}
            </LinkButton>
          </Reveal>
          <Reveal delay={100}>
            <dl className="divide-y rounded-lg border bg-card">
              {facts.map((f) => (
                <div key={f.k} className="p-5">
                  <dt className="font-mono text-xs uppercase tracking-widest text-primary">{f.k}</dt>
                  <dd className="mt-2 text-sm">{f.v}</dd>
                </div>
              ))}
              <div className="p-5">
                <dt className="font-mono text-xs uppercase tracking-widest text-primary">Based in</dt>
                <dd className="mt-2 text-sm">{profile.location} · Open to Saudi Arabia, Gulf &amp; remote</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="border-y bg-surface/40 py-24">
      <div className={wrap}>
        <SectionHeader eyebrow="Skills" title="Technical toolkit" intro="The technologies I use day to day to ship production interfaces." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon];
            return (
              <Reveal key={g.title} delay={i * 60} className={g.title === "Frontend" ? "lg:row-span-2" : ""}>
                <div className="h-full rounded-lg border bg-card p-6 transition-colors hover:border-primary/40">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <h3 className="text-base font-semibold">{g.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s} className="rounded-md border bg-secondary px-2.5 py-1 text-sm text-secondary-foreground">{s}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className={wrap}>
        <SectionHeader eyebrow="Experience" title="Where I work" />
        <ol className="relative border-l pl-8">
          {experience.map((e) => (
            <li key={e.company}>
              <Reveal>
                <span aria-hidden className="absolute -left-[5px] mt-2 size-2.5 rounded-full bg-primary" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">{e.role} <span className="text-muted-foreground">· {e.company}</span></h3>
                  <p className="font-mono text-xs text-muted-foreground">{e.period}</p>
                </div>
                <p className="mt-3 max-w-2xl text-muted-foreground">{e.description}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {e.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2 text-sm"><span className="text-primary" aria-hidden>→</span>{r}</li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section aria-labelledby="approach-title" className="border-y bg-surface/40 py-24">
      <div className={wrap}>
        <Reveal className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Process</p>
          <h2 id="approach-title" className="mt-3 text-3xl font-semibold sm:text-4xl">How I approach projects</h2>
        </Reveal>
        <ol className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {approach.map((s, i) => (
            <li key={s.title} className="bg-card p-6">
              <Reveal delay={i * 50}>
                <p className="font-mono text-sm text-primary">0{i + 1}</p>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: "LinkedIn", value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), href: profile.linkedin, Icon: LinkedinIcon },
    { label: "GitHub", value: "github.com/roone858", href: profile.github, Icon: GithubIcon },
  ];
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div aria-hidden className="absolute inset-0 bg-glow opacity-70" />
      <div className={`${wrap} relative`}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Let's Build Something Great</h2>
          <p className="mt-5 text-muted-foreground">I'm open to frontend development opportunities, freelance projects, and collaborations.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <LinkButton href={`mailto:${profile.email}?subject=${encodeURIComponent("Let's work together")}`}>Contact Me</LinkButton>
            <LinkButton href={`mailto:${profile.email}`} variant="outline"><Mail className="size-4" /> Email Me</LinkButton>
            <LinkButton href={profile.github} target="_blank" rel="noopener noreferrer" variant="outline"><GithubIcon /> View GitHub</LinkButton>
          </div>
        </Reveal>
        <ul className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-3">
          {links.map(({ label, value, href, Icon }) => (
            <li key={label}>
              <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full flex-col rounded-lg border bg-card p-5 transition-colors hover:border-primary/40">
                <span className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Icon className="size-4" /> {label}</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                </span>
                <span className="mt-3 break-all text-sm font-medium">{value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className={`${wrap} flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row`}>
        <p>© {new Date().getFullYear()} {profile.name} · {profile.role}</p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground"><GithubIcon /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground"><LinkedinIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-foreground"><Mail className="size-4" /></a>
        </div>
      </div>
    </footer>
  );
}
