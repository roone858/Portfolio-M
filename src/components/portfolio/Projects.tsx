import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/content/portfolio";
import { GithubIcon, LinkButton, SectionHead } from "./primitives";
import { projectSlug } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          id="projects-title"
          title="Selected projects"
          slate={`Work · ${projects.length} frames`}
          intro="Real products I've worked on — from learning platforms to marketplaces and e-commerce."
        />
        <ol className="space-y-20 sm:space-y-28">
          {projects.map((p, i) => (
            <li key={p.name}>
              <ProjectFrame p={p} n={i + 1} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProjectFrame({ p, n }: { p: Project; n: number }) {
  const live = Boolean(p.liveUrl);
  return (
    <article
      id={`project-${projectSlug(p.name)}`}
      className="group grid gap-8 lg:grid-cols-12 lg:gap-12"
    >
      <div className="lg:col-span-7">
        <div className="stock rounded-[3px] px-[var(--pitch)]">
          <div aria-hidden className="perf-x -mx-[var(--pitch)]" />
          <Print p={p} />
          <div aria-hidden className="perf-x -mx-[var(--pitch)]" />
        </div>
      </div>
      <div className="flex flex-col lg:col-span-5 lg:pt-6">
        <div className="flex items-center gap-3">
          <span className="font-cond tabular text-5xl text-flag">{String(n).padStart(2, "0")}</span>
          <span aria-hidden className="h-px flex-1 bg-border" />
          <StatusMark live={live} />
        </div>
        <h3 className="font-cond mt-5 text-[clamp(2.25rem,4vw,3.25rem)]">{p.name}</h3>
        <p className="label-cond mt-2 text-dim">{p.category}</p>
        <p className="mt-5 text-edge">{p.description}</p>
        <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-baseline gap-2.5 text-[0.9375rem] text-dim">
              <span aria-hidden className="size-1.5 shrink-0 translate-y-[-2px] bg-flag" />
              {h}
            </li>
          ))}
        </ul>
        {p.tech.length > 0 && (
          <p className="label-cond mt-6 text-edge">
            <span className="sr-only">Technologies: </span>
            {p.tech.join(" / ")}
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 pt-8">
          <ProjectLinks p={p} />
        </div>
      </div>
    </article>
  );
}

/** Live = a taped band; no live link = a dashed outline. State is a mark, not a hue. */
function StatusMark({ live }: { live: boolean }) {
  return live ? (
    <span className="label-cond stock rounded-[2px] px-2.5 py-1 text-[0.75rem]">Live</span>
  ) : (
    <span className="label-cond rounded-[2px] border border-dashed border-dim/60 px-2.5 py-1 text-[0.75rem] text-dim">
      No print
    </span>
  );
}

function Print({ p }: { p: Project }) {
  if (p.image)
    return (
      <div className="my-3 overflow-hidden rounded-[2px] bg-punch p-1">
        <img
          src={p.image}
          alt={`Screenshot of the ${p.name} website`}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover object-top transition-[object-position] duration-[8000ms] ease-linear group-hover:object-bottom motion-reduce:transition-none motion-reduce:group-hover:object-top"
        />
      </div>
    );
  return (
    <div className="my-3 bg-ink p-1 [clip-path:polygon(0_0,calc(100%-28px)_0,100%_28px,100%_100%,0_100%)]">
      <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 bg-spool text-center">
        <span className="font-cond text-3xl text-edge/80">{p.name}</span>
        <span className="label-cond text-dim">No print yet</span>
      </div>
    </div>
  );
}

function ProjectLinks({ p }: { p: Project }) {
  if (!p.liveUrl && !p.githubUrl)
    return <p className="label-cond text-dim">Case study coming soon</p>;
  return (
    <>
      {p.liveUrl && (
        <LinkButton href={p.liveUrl} target="_blank" rel="noopener noreferrer">
          View project <ArrowUpRight className="size-4" aria-hidden />
        </LinkButton>
      )}
      {p.githubUrl && (
        <LinkButton href={p.githubUrl} target="_blank" rel="noopener noreferrer" variant="outline">
          <GithubIcon /> GitHub
        </LinkButton>
      )}
    </>
  );
}
