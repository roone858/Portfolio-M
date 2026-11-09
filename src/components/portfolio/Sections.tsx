import { ArrowUpRight, Code2, Languages, Mail, MapPin, Server, Zap } from "lucide-react";
import {
  approach,
  cv,
  cvHref,
  education,
  experience,
  hero,
  highlightStats,
  navLinks,
  profile,
  services,
  skillGroups,
  stackWordmarks,
} from "@/content/portfolio";
import {
  GithubIcon,
  LinkButton,
  LinkedinIcon,
  LogoMark,
  RuleHeading,
  SectionTitle,
} from "./primitives";

const wrap = "mx-auto max-w-7xl px-4 sm:px-6";
const serviceIcons = { code: Code2, server: Server, languages: Languages, zap: Zap };

/** Services cards, then the experience highlight band. */
export function About() {
  const { lead, cards } = highlightStats;
  return (
    <section id="about" aria-labelledby="about-title" className="py-24">
      <div className={wrap}>
        <h2 id="about-title" className="sr-only">
          About and services
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = serviceIcons[s.icon];
            return (
              <li
                key={s.title}
                data-reveal
                className="group rounded-[14px] border border-accent-red/15 bg-base px-3 py-7 text-center sm:px-6 sm:py-9 transition-colors hover:border-accent-red/60"
              >
                <Icon className="mx-auto size-10 text-accent-red" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-5 text-[1.125rem] sm:text-[1.375rem]">{s.title}</h3>
                <p className="mt-1.5 text-sm sm:text-[0.9375rem]">{s.text}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <div
            data-reveal
            className="flex flex-col justify-center rounded-[18px] bg-panel p-8 sm:p-10"
          >
            <div className="flex items-center gap-6">
              <span className="font-display text-[clamp(5rem,10vw,8rem)] leading-[0.85] font-bold text-accent-red">
                {lead.value}
              </span>
              <span className="max-w-[9ch] font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-tight font-bold text-heading">
                {lead.label}
              </span>
            </div>
            <p className="mt-6 text-heading/85">{lead.text}</p>
            <p className="mt-3">{hero.stack}</p>
          </div>
          <dl className="grid grid-cols-2 gap-5">
            {cards.map((c) => (
              <div
                key={c.label}
                data-reveal
                className="flex flex-col items-center justify-center rounded-[18px] bg-panel px-4 py-8 text-center"
              >
                <dt className="sr-only">{c.label}</dt>
                <dd className="font-display text-[clamp(2rem,3.4vw,2.75rem)] leading-none font-bold text-heading">
                  {c.value}
                </dd>
                <dd className="mt-3 text-[0.9375rem]">{c.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/** Numbered process cards beside a circular portrait. */
export function Approach() {
  return (
    <section aria-labelledby="approach-title" className="pb-24">
      <div className={wrap}>
        <SectionTitle
          id="approach-title"
          kicker="How I work"
          title="From requirements to a polished product"
          intro="A practical process I follow on every project, from the first conversation to the final performance pass."
          center
        />
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <ol className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {approach.map((s, i) => (
              <li key={s.title} data-reveal className="rounded-[14px] bg-panel p-6">
                <h3 className="text-[1.25rem]">
                  <span className="mr-2">{String(i + 1).padStart(2, "0")}.</span>
                  {s.title}
                </h3>
                <p className="mt-2 text-[0.9375rem]">{s.text}</p>
              </li>
            ))}
          </ol>
          <div
            data-reveal
            className="relative mx-auto aspect-square w-full max-w-[26rem] lg:col-span-5"
          >
            <div aria-hidden className="absolute inset-[8%] rounded-full bg-panel" />
            <div
              aria-hidden
              className="absolute right-[2%] bottom-[22%] h-[18%] w-[34%] rounded-b-full bg-accent-red"
            />
            <span
              aria-hidden
              className="absolute bottom-[8%] left-[2%] size-[26%] rounded-full border-2 border-accent-red"
            />
            <span
              aria-hidden
              className="absolute top-[22%] right-[6%] size-[8%] rounded-full border-2 border-accent-red"
            />
            <span
              aria-hidden
              className="absolute top-[30%] left-[14%] size-2.5 rounded-full bg-accent-red"
            />
            <img
              src={profile.cutout.src}
              width={profile.cutout.width}
              height={profile.cutout.height}
              alt=""
              loading="lazy"
              className="absolute inset-x-[10%] bottom-0 w-[80%] [mask-image:radial-gradient(circle_at_50%_42%,#000_62%,transparent_63%)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Education & training, then professional experience. */
export function Resume() {
  return (
    <section id="experience" aria-labelledby="resume-title" className="pb-24">
      <div className={wrap}>
        <h2 id="resume-title" className="sr-only">
          Resume
        </h2>
        <RuleHeading>Education</RuleHeading>
        <ul className="grid gap-5 md:grid-cols-2">
          {education.map((e) => (
            <li key={e.title} data-reveal className="rounded-[14px] bg-panel p-6">
              <h3 className="text-[1.125rem]">{e.title}</h3>
              <p className="mt-0.5 text-[0.9375rem] font-medium text-heading/80">{e.org}</p>
              <p className="mt-1 font-display text-[0.9375rem] font-bold text-accent-red">
                {e.period}
              </p>
              <p className="mt-3 text-[0.9375rem]">{e.text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div data-reveal className="overflow-hidden rounded-[18px] border bg-white">
            <img
              src={profile.studio.src}
              width={profile.studio.width}
              height={profile.studio.height}
              alt={`Studio portrait of ${profile.name}`}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover object-top"
            />
          </div>
          <div>
            <RuleHeading>Experience</RuleHeading>
            {experience.map((e) => (
              <article
                key={e.company}
                data-reveal
                className="border-t pt-8 first-of-type:border-t-0 first-of-type:pt-0 [&+&]:mt-8"
              >
                <p className="font-display text-[0.9375rem] font-bold text-accent-red">
                  {e.period}
                </p>
                <h3 className="mt-1 text-[1.5rem]">{e.company}</h3>
                <p className="font-display text-[1.0625rem] font-semibold text-heading/85">
                  {e.role}
                </p>
                <p className="mt-3">{e.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {e.achievements.map((a) => (
                    <li key={a} className="flex gap-3 text-heading/90">
                      <span
                        aria-hidden
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent-red"
                      />
                      {a}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Responsibilities">
                  {e.responsibilities.map((r) => (
                    <li key={r} className="rounded-full bg-panel-2 px-3.5 py-1 text-sm">
                      {r}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Core stack as a bordered wordmark grid. */
export function StackGrid() {
  return (
    <section aria-label="Core technologies" className="pb-24">
      <ul className={`${wrap} grid grid-cols-2 sm:grid-cols-4`}>
        {stackWordmarks.map((w) => (
          <li
            key={w}
            data-reveal
            className="-mt-px -ml-px flex h-28 items-center justify-center border font-display text-[clamp(1.5rem,2.4vw,2rem)] font-bold text-soft transition-colors hover:text-heading"
          >
            {w}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-24">
      <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
        <div className="lg:col-span-4">
          <SectionTitle
            id="skills-title"
            kicker="My skills"
            title="The toolkit behind every project"
            intro="The technologies I use day to day to ship production interfaces."
          />
          <LinkButton
            href={cvHref}
            variant="outline"
            {...(cv.available ? { download: cv.fileName } : {})}
          >
            {cv.available ? "Download CV" : "Request CV"}
          </LinkButton>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {skillGroups.map((g) => (
            <li key={g.title} data-reveal className="rounded-[14px] bg-panel p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-[1.25rem]">{g.title}</h3>
                <span className="font-display text-[0.9375rem] font-bold text-accent-red">
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s} className="rounded-full border px-3 py-1 text-sm text-heading/85">
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Closing call to action, quick links and contact details. */
export function Contact() {
  const links = [
    { label: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    {
      label: "linkedin.com/in/mahmoud-gamal-abdelsalam",
      href: profile.linkedin,
      Icon: LinkedinIcon,
    },
    { label: "github.com/roone858", href: profile.github, Icon: GithubIcon },
    { label: `${profile.location} · Gulf & remote`, href: undefined, Icon: MapPin },
  ];
  return (
    <footer id="contact" aria-labelledby="contact-title" className="rounded-t-[28px] bg-panel">
      <div className={`${wrap} py-20`}>
        <div
          data-reveal
          className="flex flex-col items-start justify-between gap-8 border-b pb-14 md:flex-row md:items-center"
        >
          <div>
            <p className="kicker">Contact</p>
            <h2 id="contact-title" className="mt-3 text-[clamp(2.25rem,5vw,3.75rem)]">
              Let's build something great
            </h2>
            <p className="mt-3 max-w-[52ch]">
              I'm open to frontend development opportunities, freelance projects, and
              collaborations.
            </p>
          </div>
          <LinkButton
            href={`mailto:${profile.email}?subject=${encodeURIComponent("Let's work together")}`}
            className="shrink-0"
          >
            Contact me <ArrowUpRight className="size-4" aria-hidden />
          </LinkButton>
        </div>

        <div className="grid gap-12 pt-14 md:grid-cols-3">
          <div>
            <a href="#top" className="flex items-center gap-2.5" aria-label="Back to top">
              <LogoMark />
              <span className="font-display text-2xl font-bold text-heading">Mahmoud</span>
            </a>
            <p className="mt-4 max-w-[34ch]">{profile.positioning}</p>
          </div>
          <nav aria-label="Quick links">
            <h3 className="text-[1.25rem]">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-accent-red">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="text-[1.25rem]">Contact</h3>
            <ul className="mt-4 space-y-3">
              {links.map(({ label, href, Icon }) => (
                <li key={label} className="flex items-center gap-3">
                  <Icon className="size-4 shrink-0 text-accent-red" />
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="break-all hover:text-accent-red"
                    >
                      {label}
                    </a>
                  ) : (
                    <span>{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t">
        <p className={`${wrap} py-6 text-center text-sm`}>
          © {new Date().getFullYear()} {profile.name} · {profile.role}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
