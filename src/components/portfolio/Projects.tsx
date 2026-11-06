import { ArrowUpRight, Check } from "lucide-react";
import { projects, type Project } from "@/content/portfolio";
import { GithubIcon, LinkButton, Reveal, SectionHeader } from "./primitives";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="Featured work" title="Selected projects" intro="Real products I've worked on — from learning platforms to marketplaces and e-commerce." />
        <div className="space-y-8">
          {projects.map((p, i) => (
            <Reveal key={p.name}>
              <article className="group grid overflow-hidden rounded-xl border bg-card shadow-card transition-colors hover:border-primary/30 lg:grid-cols-2">
                <div className={`border-b bg-surface p-6 sm:p-8 lg:border-b-0 ${i % 2 ? "lg:order-2 lg:border-l" : "lg:border-r"}`}>
                  <Preview kind={p.preview} name={p.name} />
                </div>
                <div className="flex flex-col p-6 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-primary">{p.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-3 text-muted-foreground">{p.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm"><Check className="size-4 text-primary" aria-hidden />{h}</li>
                    ))}
                  </ul>
                  {p.tech.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                      {p.tech.map((t) => (
                        <li key={t} className="rounded border px-2 py-0.5 font-mono text-xs text-muted-foreground">{t}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto flex flex-wrap gap-3 pt-7">
                    <ProjectLinks p={p} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectLinks({ p }: { p: Project }) {
  if (!p.liveUrl && !p.githubUrl)
    return <span className="inline-flex min-h-11 items-center rounded-md border border-dashed px-4 text-sm text-muted-foreground">Case study coming soon</span>;
  return (
    <>
      {p.liveUrl && (
        <LinkButton href={p.liveUrl} target="_blank" rel="noopener noreferrer">View Project <ArrowUpRight className="size-4" /></LinkButton>
      )}
      {p.githubUrl && (
        <LinkButton href={p.githubUrl} target="_blank" rel="noopener noreferrer" variant="outline"><GithubIcon /> GitHub</LinkButton>
      )}
    </>
  );
}

/** Illustrative interface preview (not a screenshot). Replace with real screenshots when available. */
function Preview({ kind, name }: { kind: Project["preview"]; name: string }) {
  return (
    <div role="img" aria-label={`Illustrative interface preview for ${name}`} className="overflow-hidden rounded-lg border bg-background transition-transform duration-500 group-hover:-translate-y-1">
      <div className="flex items-center gap-1.5 border-b px-3 py-2">
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="size-2 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 h-4 flex-1 rounded bg-muted" />
      </div>
      <div className="aspect-[16/10] p-4">
        {kind === "edu" && <EduUI />}
        {kind === "market" && <MarketUI />}
        {kind === "shop" && <ShopUI />}
      </div>
    </div>
  );
}

const bar = "rounded bg-muted";
function EduUI() {
  return (
    <div className="grid h-full grid-cols-[22%_1fr] gap-3">
      <div className="space-y-2 rounded-md bg-surface p-2">
        <div className="h-3 w-3/4 rounded bg-primary/60" />
        {[...Array(5)].map((_, i) => <div key={i} className={`h-2.5 ${bar}`} />)}
      </div>
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {["bg-primary/25", "bg-violet/25", "bg-success/20"].map((c) => (
            <div key={c} className={`h-12 rounded-md ${c} p-2`}><div className="h-2 w-1/2 rounded bg-foreground/30" /></div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-1.5 rounded-md bg-surface p-3">
          {[40, 65, 50, 80, 60, 90, 70, 55].map((h, i) => <div key={i} className="flex-1 rounded-sm bg-primary/60" style={{ height: `${h}%` }} />)}
        </div>
      </div>
    </div>
  );
}
function MarketUI() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex gap-2"><div className="h-6 flex-1 rounded-md border bg-surface" /><div className="h-6 w-16 rounded-md bg-primary/60" /></div>
      <div className="flex gap-1.5">{[...Array(5)].map((_, i) => <div key={i} className="h-4 w-12 rounded-full border" />)}</div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col gap-1 rounded-md bg-surface p-1.5">
            <div className={`flex-1 rounded ${i % 2 ? "bg-violet/20" : "bg-primary/20"}`} />
            <div className={`h-1.5 w-3/4 ${bar}`} /><div className="h-1.5 w-1/3 rounded bg-primary/50" />
          </div>
        ))}
      </div>
    </div>
  );
}
function ShopUI() {
  return (
    <div className="grid h-full grid-cols-2 gap-4">
      <div className="rounded-md bg-gradient-to-br from-accent to-surface p-3">
        <div className="mx-auto mt-6 h-1/2 w-3/4 rounded-t-3xl bg-muted-foreground/25" />
        <div className="mx-auto h-3 w-5/6 rounded bg-muted-foreground/35" />
      </div>
      <div className="flex flex-col justify-center gap-2.5">
        <div className="h-2 w-1/3 rounded bg-primary/50" />
        <div className="h-4 w-5/6 rounded bg-foreground/40" />
        <div className={`h-2 w-full ${bar}`} /><div className={`h-2 w-2/3 ${bar}`} />
        <div className="flex gap-1.5 pt-1">{["bg-muted-foreground/40", "bg-primary/40", "bg-violet/40"].map((c) => <span key={c} className={`size-4 rounded-full ${c}`} />)}</div>
        <div className="mt-2 h-7 w-2/3 rounded-md bg-primary/70" />
      </div>
    </div>
  );
}
