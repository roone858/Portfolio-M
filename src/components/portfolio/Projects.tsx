import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/content/portfolio";
import { cn, projectSlug } from "@/lib/utils";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="rounded-[28px] bg-panel py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p
          aria-hidden
          data-reveal
          className="outline-text text-center font-display text-[clamp(3rem,11vw,9rem)] leading-none font-bold uppercase"
        >
          Latest Portfolio
        </p>
        <header
          data-reveal
          className="mx-auto -mt-[clamp(1.5rem,4vw,3.5rem)] max-w-2xl text-center"
        >
          <h2 id="projects-title" className="text-[clamp(2rem,4vw,2.75rem)]">
            Selected projects
          </h2>
          <p className="mt-3">
            Real products I've worked on — from learning platforms to marketplaces and e-commerce.
          </p>
        </header>
        <ul className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.name} data-reveal className={cn(i % 2 === 1 && "md:mt-14")}>
              <ProjectCard p={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const Wrapper = p.liveUrl ? "a" : "div";
  return (
    <article id={`project-${projectSlug(p.name)}`}>
      <Wrapper
        {...(p.liveUrl ? { href: p.liveUrl, target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group block"
      >
        <div className="relative overflow-hidden rounded-[18px] border bg-[radial-gradient(120%_80%_at_80%_100%,oklch(0.42_0.16_25/55%),transparent_60%),var(--base)] p-6 pb-0 transition-colors group-hover:border-accent-red/50 sm:p-8 sm:pb-0">
          <div className="flex items-start justify-between gap-4">
            <p className="font-display text-[1.375rem] leading-tight font-bold text-heading">
              {p.category}
              <span className="block text-accent-red">{p.name}</span>
            </p>
            {p.liveUrl && (
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-red text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-5" aria-hidden />
              </span>
            )}
          </div>
          <div className="mt-6 overflow-hidden rounded-t-[10px] border border-b-0">
            {p.image ? (
              <img
                src={p.image}
                alt={`Screenshot of the ${p.name} website`}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full object-cover object-top transition-[object-position] duration-[6000ms] ease-linear group-hover:object-bottom motion-reduce:transition-none"
              />
            ) : (
              <div className="flex aspect-[16/10] items-center justify-center bg-panel-2">
                <span className="font-display text-3xl font-bold text-soft">{p.name}</span>
              </div>
            )}
          </div>
        </div>
      </Wrapper>
      <h3 className="mt-6 text-[1.5rem]">
        {p.liveUrl ? (
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-red"
          >
            {p.name}
          </a>
        ) : (
          p.name
        )}
      </h3>
      <p className="mt-2">{p.description}</p>
      {p.tech.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {p.tech.map((t) => (
            <li key={t} className="rounded-full bg-panel-2 px-3 py-1 text-sm text-heading/85">
              {t}
            </li>
          ))}
        </ul>
      )}
      {!p.liveUrl && <p className="mt-3 text-sm text-soft">Case study coming soon</p>}
    </article>
  );
}
