import { useEffect, useState } from "react";
import { cv, cvHref, hero, profile, projects } from "@/content/portfolio";
import { LinkButton, Window } from "./primitives";
import { cn, projectSlug } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative pt-24">
      <div className="mx-auto grid max-w-7xl items-end gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,25rem)] lg:gap-16">
        <div className="pb-2">
          <h1 id="hero-title" className="font-cond text-[clamp(3rem,8vw,5rem)]">
            <span className="block text-edge">{hero.titleTop}</span>
            <span className="mt-1 block text-flag">{hero.titleBottom}</span>
          </h1>
          <p className="mt-7 max-w-[56ch] text-lg text-edge">{hero.lede}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <LinkButton href={cvHref} {...(cv.available ? { download: cv.fileName } : {})}>
              {cv.available ? "Download CV" : "Request CV"}
            </LinkButton>
            <LinkButton href="#contact" variant="outline">
              Let's talk
            </LinkButton>
            <LinkButton href="#projects" variant="link">
              See the work
            </LinkButton>
          </div>
        </div>
        <Portrait />
      </div>
      <SelectRail />
    </section>
  );
}

/** The portrait as the selected frame: a vertical strip of stock, flagged, nothing over the face. */
function Portrait() {
  return (
    <figure className="relative order-first mx-auto w-full max-w-[15rem] sm:max-w-[20rem] lg:order-none lg:max-w-[22rem]">
      <span aria-hidden className="tape-flag absolute -top-3 right-8 z-10 h-14 w-9" />
      <div className="stock flex rounded-[3px] shadow-[0_24px_40px_-24px_oklch(0_0_0/90%)]">
        <span aria-hidden className="perf-y shrink-0" />
        <Window className="my-3 flex-1 p-1">
          <img
            src={profile.photo.src}
            width={profile.photo.width}
            height={profile.photo.height}
            alt={`Portrait of ${profile.name}`}
            fetchPriority="high"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </Window>
        <span aria-hidden className="perf-y shrink-0" />
      </div>
      <figcaption className="label-cond mt-3 text-dim">
        <span className="flex justify-between gap-3">
          <span>
            <span className="text-flag">SEL</span> {profile.name}
          </span>
          <span>{profile.location}</span>
        </span>
        <span className="mt-1.5 flex items-center gap-2 text-edge">
          <span aria-hidden className="size-2 bg-flag" />
          {hero.status}
        </span>
      </figcaption>
    </figure>
  );
}

const RAIL_KEY = "portfolio:last-frame";

/** Projects strung as frames on a perforated rail; the last frame opened keeps its flag. */
function SelectRail() {
  const [flagged, setFlagged] = useState(() => projectSlug(projects[0]!.name));

  useEffect(() => {
    try {
      const saved = localStorage.getItem(RAIL_KEY);
      if (saved && projects.some((p) => projectSlug(p.name) === saved)) setFlagged(saved);
    } catch {
      /* storage unavailable: keep the first frame flagged */
    }
  }, []);

  const select = (slug: string) => {
    setFlagged(slug);
    try {
      localStorage.setItem(RAIL_KEY, slug);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="mt-10 lg:mt-6">
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-4 px-4 sm:px-6">
        <p className="label-cond text-edge">
          Select rail <span className="text-dim">· {projects.length} frames</span>
        </p>
        <p className="label-cond hidden text-dim sm:block">Scroll the rail · open a frame</p>
      </div>
      <div
        role="region"
        aria-label="Project frames"
        tabIndex={0}
        className="stock mt-3 snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:thin] [scrollbar-color:var(--ink)_var(--flag)]"
      >
        <div className="animate-rail w-max">
          <div aria-hidden className="ruler text-ink/70" />
          <div aria-hidden className="perf-x" />
          <ol className="flex gap-[var(--pitch)] px-[var(--pitch)] py-3">
            {projects.map((p, i) => {
              const slug = projectSlug(p.name);
              const on = flagged === slug;
              return (
                <li
                  key={slug}
                  className="relative w-[15rem] shrink-0 snap-start scroll-ms-[var(--pitch)] sm:w-[16rem]"
                >
                  {on && (
                    <span
                      aria-hidden
                      className="tape-flag absolute -top-8 left-4 z-10 h-10 w-7"
                      style={{ background: "var(--ink)" }}
                    />
                  )}
                  <a
                    href={`#project-${slug}`}
                    onClick={() => select(slug)}
                    aria-current={on ? "true" : undefined}
                    className="group block outline-offset-2 focus-visible:outline-ink"
                  >
                    <div
                      className={cn(
                        "relative overflow-hidden rounded-[3px] p-1 transition-colors",
                        on ? "bg-ink" : "bg-punch",
                        !p.image &&
                          "[clip-path:polygon(0_0,calc(100%-22px)_0,100%_22px,100%_100%,0_100%)]",
                      )}
                    >
                      {p.image ? (
                        <img
                          src={p.image}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="aspect-[16/10] w-full object-cover object-top grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="flex aspect-[16/10] items-center justify-center bg-spool">
                          <span className="label-cond text-dim">No print yet</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-2 flex items-baseline justify-between gap-3 text-ink">
                      <span className="font-cond truncate text-2xl">{p.name}</span>
                      <span className="label-cond tabular shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ol>
          <div aria-hidden className="perf-x" />
        </div>
      </div>
    </div>
  );
}
