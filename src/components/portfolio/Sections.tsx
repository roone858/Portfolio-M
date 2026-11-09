import { ArrowUpRight, Mail } from "lucide-react";
import { approach, cv, cvHref, experience, hero, profile, skillGroups } from "@/content/portfolio";
import { GithubIcon, LinkButton, LinkedinIcon, SectionHead } from "./primitives";

const wrap = "mx-auto max-w-7xl px-4 sm:px-6";

export function About() {
  const facts = [
    { k: "Approach", v: "Clean architecture, reusable components, reliable API integration." },
    {
      k: "Interests",
      v: "Frontend architecture, performance, real-time UIs, AI-assisted workflows.",
    },
    { k: "Goal", v: "Grow as a frontend engineer on products in Egypt, the Gulf, or remote." },
    { k: "Based in", v: `${profile.location} · Open to Saudi Arabia, Gulf & remote` },
  ];
  return (
    <section id="about" aria-labelledby="about-title" className="py-24 sm:py-32">
      <div className={wrap}>
        <SectionHead
          id="about-title"
          title="Practical frontend, built for real products"
          slate="About"
        />
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 text-lg lg:col-span-7">
            <p className="text-edge">
              I'm a Frontend Developer focused on building modern web applications with React,
              Angular, and TypeScript.
            </p>
            <p className="text-edge">{hero.stack}</p>
            <p className="text-dim">
              I enjoy transforming complex requirements into clean, maintainable interfaces with
              responsive layouts, reusable components, and reliable API integrations.
            </p>
            <p className="text-dim">
              My experience includes educational platforms, dashboards, authentication systems,
              real-time communication, and payment integrations.
            </p>
            <p className="text-dim">
              I'm continuously improving my frontend architecture, performance, and development
              workflow using modern tools and AI-assisted development.
            </p>
            <div className="pt-4">
              <LinkButton
                href={cvHref}
                variant="outline"
                {...(cv.available ? { download: cv.fileName } : {})}
              >
                {cv.available ? "Download CV" : "Request CV"}
              </LinkButton>
            </div>
          </div>
          <dl className="holes-ends self-start rounded-[3px] border border-flag/40 bg-char px-8 text-flag/50 lg:col-span-5">
            {facts.map((f) => (
              <div key={f.k} className="border-b border-dashed border-edge/15 py-5 last:border-b-0">
                <dt className="label-cond text-flag">{f.k}</dt>
                <dd className="mt-1.5 text-[0.9375rem] text-edge">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-y bg-char py-24 sm:py-32">
      <div className={wrap}>
        <SectionHead
          id="skills-title"
          title="Technical toolkit"
          slate={`Skills · ${skillGroups.length} reels`}
          intro="The technologies I use day to day to ship production interfaces."
        />
        <dl>
          {skillGroups.map((g) => (
            <div
              key={g.title}
              className="grid gap-3 border-t py-6 sm:grid-cols-[14rem_1fr] sm:gap-8 last:border-b"
            >
              <dt className="font-cond text-3xl text-flag">{g.title}</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-2 gap-y-1 text-lg text-edge">
                  {g.items.map((s, i) => (
                    <li key={s} className="flex items-center gap-2">
                      {s}
                      {i < g.items.length - 1 && (
                        <span aria-hidden className="size-1.5 bg-dim/40" />
                      )}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-24 sm:py-32">
      <div className={wrap}>
        <SectionHead id="experience-title" title="Where I work" slate="Experience" />
        {experience.map((e) => (
          <article
            key={e.company}
            className="holes-ends rounded-[3px] border border-flag/40 bg-char px-10 py-8 text-flag/50 sm:px-12 sm:py-10"
          >
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h3 className="font-cond text-[clamp(2.25rem,4vw,3.25rem)] text-edge">{e.role}</h3>
                <p className="label-cond mt-2 text-flag">{e.company}</p>
                <p className="mt-5 max-w-[60ch] text-edge">{e.description}</p>
              </div>
              <TimecodeCard period={e.period} />
            </div>
            <ul className="mt-8 grid gap-x-8 gap-y-2.5 border-t border-dashed border-edge/15 pt-6 sm:grid-cols-2">
              {e.responsibilities.map((r) => (
                <li key={r} className="flex items-baseline gap-2.5 text-[0.9375rem] text-edge">
                  <span aria-hidden className="size-1.5 shrink-0 translate-y-[-2px] bg-flag" />
                  {r}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/** In / out points read off the period string ("July 2025 – Present"). */
function TimecodeCard({ period }: { period: string }) {
  const [start, end] = period.split(/\s*[–-]\s*/);
  return (
    <dl className="label-cond tabular self-start text-edge lg:col-span-4">
      <div className="flex justify-between border-b border-dashed border-edge/15 py-3">
        <dt className="text-dim">In</dt>
        <dd>{start}</dd>
      </div>
      <div className="flex justify-between border-b border-dashed border-edge/15 py-3">
        <dt className="text-dim">Out</dt>
        <dd className={end === "Present" ? "text-flag" : undefined}>{end ?? "—"}</dd>
      </div>
    </dl>
  );
}

export function Approach() {
  return (
    <section aria-labelledby="approach-title" className="stock pt-24 pb-16 sm:pt-32 sm:pb-20">
      <div className={wrap}>
        <SectionHead
          id="approach-title"
          title="How I approach projects"
          slate={`Process · ${approach.length} steps`}
          tone="stock"
        />
      </div>
      <div className="overflow-x-auto [scrollbar-width:thin] [scrollbar-color:var(--ink)_var(--flag)]">
        <div className="mx-auto w-max min-w-full max-w-7xl lg:w-auto">
          <div aria-hidden className="perf-x" />
          <ol className="mx-auto grid max-w-7xl auto-cols-[15rem] grid-flow-col gap-[var(--pitch)] px-4 py-3 sm:px-6 lg:auto-cols-auto lg:grid-flow-row lg:grid-cols-6">
            {approach.map((s, i) => (
              <li key={s.title} className="flex min-h-56 flex-col rounded-[3px] bg-ink p-5">
                <span className="font-cond tabular text-4xl text-flag">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-cond mt-10 text-2xl text-edge">{s.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-snug text-dim">{s.text}</p>
              </li>
            ))}
          </ol>
          <div aria-hidden className="perf-x" />
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    {
      label: "LinkedIn",
      value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
      href: profile.linkedin,
      Icon: LinkedinIcon,
    },
    {
      label: "GitHub",
      value: profile.github.replace(/^https?:\/\//, ""),
      href: profile.github,
      Icon: GithubIcon,
    },
  ];
  return (
    <section id="contact" aria-labelledby="contact-title" className="stock py-24 sm:py-32">
      <div className={`${wrap} grid gap-14 lg:grid-cols-12`}>
        <div className="lg:col-span-7">
          <h2 id="contact-title" className="font-cond text-[clamp(3rem,8vw,5.5rem)] text-ink">
            Let's build <span className="text-punch">something great.</span>
          </h2>
          <p className="mt-6 max-w-[48ch] text-lg text-ink">
            I'm open to frontend development opportunities, freelance projects, and collaborations.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-3">
            <LinkButton
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Let's work together")}`}
              variant="dark"
            >
              Contact me
            </LinkButton>
            <LinkButton
              href={cvHref}
              variant="outlineInk"
              {...(cv.available ? { download: cv.fileName } : {})}
            >
              {cv.available ? "Download CV" : "Request CV"}
            </LinkButton>
          </div>
        </div>
        <ul className="self-end lg:col-span-5">
          {links.map(({ label, value, href, Icon }) => (
            <li key={label} className="border-t border-ink/30 last:border-b">
              <a
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center gap-4 py-5 text-ink"
              >
                <Icon className="size-5 shrink-0" />
                <span className="min-w-0 flex-1">
                  <span className="label-cond block opacity-75">{label}</span>
                  <span className="mt-1 block break-all font-semibold group-hover:underline">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
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
    <footer>
      <div aria-hidden className="stock">
        <div className="perf-x" />
      </div>
      <div className={`${wrap} flex flex-col items-center justify-between gap-4 py-8 sm:flex-row`}>
        <p className="label-cond text-dim">
          © {new Date().getFullYear()} {profile.name} · {profile.role} ·{" "}
          <span className="text-flag">End of reel</span>
        </p>
        <div className="flex gap-2">
          {[
            { href: profile.github, label: "GitHub", Icon: GithubIcon },
            { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
            { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="inline-flex size-11 items-center justify-center text-dim transition-colors hover:text-flag"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
