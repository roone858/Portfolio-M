import { useState } from "react";
import { ArrowRight, Brain, Layers, Rocket } from "lucide-react";
import { mindset, type MindsetStage } from "@/content/portfolio";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const wrap = "mx-auto max-w-7xl px-4 sm:px-6";

const stageIcons = {
  brain: Brain,
  layers: Layers,
  rocket: Rocket,
};

const revealEase = "ease-[cubic-bezier(0.16,1,0.3,1)]";

/**
 * "The building mindset" — three connected stages that tell the story of an
 * idea becoming a shipped product. Hover, tap or keyboard-focus a stage to
 * move the progress line and bring its details forward.
 */
export function Mindset() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView<HTMLDivElement>({
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px",
  });

  const stages = mindset.stages;
  const progress = stages.length > 1 ? active / (stages.length - 1) : 0;
  const lineProgress = inView ? Math.max(progress * 100, 6) : 0;

  return (
    <section
      id="mindset"
      aria-labelledby="mindset-title"
      className="relative overflow-hidden border-y border-line/60 bg-base py-24 sm:py-32"
    >
      <MindsetBackdrop />

      <div ref={ref} className={`${wrap} relative`}>
        <header
          className={cn(
            "grid gap-8 transition-[opacity,transform] duration-700",
            revealEase,
            "lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-end",
            inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          <div>
            <p className="kicker">{mindset.kicker}</p>
            <h2
              id="mindset-title"
              className="mt-4 text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[0.92] tracking-[-0.02em] uppercase"
            >
              I build more than{" "}
              <span className="block">
                <span className="text-white/10 [-webkit-text-stroke:1px_#ffffff4d]">
                  just software
                </span>
                <span className="text-accent-red">.</span>
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-[34ch] text-[1.0625rem] leading-relaxed text-heading/80 sm:text-[1.125rem]">
              {mindset.intro}
            </p>
            <p className="mt-6 flex items-center gap-3 font-display text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-soft">
              <span aria-hidden className="h-px w-8 bg-accent-red" />
              {mindset.note}
            </p>
          </div>
        </header>

        <div className="mt-16 sm:mt-20">
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <span className="flex items-center gap-2 font-display text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-soft">
              <span aria-hidden className="size-1.5 rounded-full bg-accent-red" />
              Idea
            </span>
            <span className="flex items-center gap-2 font-display text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-soft">
              Product
              <span aria-hidden className="size-1.5 rounded-full bg-accent-red" />
            </span>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute top-7 hidden h-px bg-line lg:block"
              style={{
                left: "calc((100% - 4rem) / 6)",
                right: "calc((100% - 4rem) / 6)",
              }}
            >
              <div
                className={cn("h-full bg-accent-red transition-[width] duration-700", revealEase)}
                style={{ width: `${lineProgress}%` }}
              />
            </div>

            <ol
              aria-label="The three stages of the building mindset"
              className="relative grid gap-10 lg:grid-cols-3 lg:gap-8"
            >
              {stages.map((stage, index) => {
                const isActive = active === index;
                const isComplete = index < active;

                return (
                  <li
                    key={stage.id}
                    className={cn(
                      "group relative pl-16 transition-[opacity,transform] duration-700",
                      revealEase,
                      "lg:pl-0 lg:pt-20",
                      inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                    )}
                    style={{ transitionDelay: `${120 + index * 120}ms` }}
                  >
                    {index < stages.length - 1 && (
                      <span
                        aria-hidden
                        className={cn(
                          "absolute top-14 -bottom-10 left-7 w-px transition-colors duration-500 lg:hidden",
                          index < active ? "bg-accent-red" : "bg-line",
                        )}
                      />
                    )}

                    <span
                      aria-hidden
                      className={cn(
                        "absolute top-0 left-0 z-20 flex size-14 items-center justify-center rounded-full border font-display text-lg font-bold transition-[background-color,border-color,color,box-shadow] duration-500",
                        "lg:left-1/2 lg:-translate-x-1/2",
                        isActive
                          ? "border-accent-red bg-accent-red text-white shadow-[0_0_0_6px_rgba(255,74,74,0.08)]"
                          : isComplete
                            ? "border-accent-red/60 bg-base text-accent-red"
                            : "border-line bg-base text-soft group-hover:border-accent-red/50 group-hover:text-heading",
                      )}
                    >
                      {stage.index}
                    </span>

                    <StageCard stage={stage} active={isActive} />

                    <button
                      type="button"
                      aria-label={`Select the ${stage.label} stage`}
                      aria-pressed={isActive}
                      onClick={() => setActive(index)}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      className="absolute inset-0 z-30 rounded-[18px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-red"
                    />
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div
          className={cn(
            "mt-16 flex flex-col gap-4 border-t border-line/70 pt-6 transition-[opacity,transform] duration-700 sm:flex-row sm:items-center sm:justify-between",
            revealEase,
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
          style={{ transitionDelay: "480ms" }}
        >
          <p className="font-display text-[0.6875rem] font-bold uppercase tracking-[0.22em] text-soft">
            {mindset.note}
          </p>
          <p className="max-w-[48ch] text-sm text-body">
            One continuous line of thinking — from the first question to the final deploy.
          </p>
        </div>
      </div>
    </section>
  );
}

function StageCard({ stage, active }: { stage: MindsetStage; active: boolean }) {
  const Icon = stageIcons[stage.icon];

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-[18px] border p-6 transition-[transform,background-color,border-color,box-shadow] duration-500",
        revealEase,
        "sm:p-8",
        active
          ? "border-accent-red/40 bg-panel shadow-[0_28px_80px_-52px_rgba(255,74,74,0.45)]"
          : "border-line/70 bg-base",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "flex size-12 items-center justify-center rounded-[12px] border transition-[background-color,border-color,color] duration-500",
            active
              ? "border-accent-red/40 bg-accent-red/10 text-accent-red"
              : "border-line bg-panel-2 text-soft",
          )}
        >
          <Icon
            className="size-6 transition-transform duration-500 group-hover:scale-110"
            strokeWidth={1.5}
            aria-hidden
          />
        </span>
        <span className="font-display text-[0.8125rem] font-bold uppercase tracking-[0.18em] text-soft">
          {stage.label}
        </span>
      </div>

      <h3 className="mt-7 text-[1.5rem] leading-[1.15] sm:text-[1.625rem]">{stage.title}</h3>
      <p className="mt-3 text-[0.9375rem] leading-relaxed">{stage.description}</p>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${stage.label} concepts`}>
        {stage.concepts.map((concept) => (
          <li
            key={concept}
            className={cn(
              "rounded-full border px-3 py-1 text-[0.8125rem] transition-colors duration-500",
              active
                ? "border-accent-red/30 bg-accent-red/5 text-heading/90"
                : "border-line bg-panel-2/40 text-body",
            )}
          >
            {concept}
          </li>
        ))}
      </ul>
    </article>
  );
}

/** A faint technical grid, echoing the contour lines in the hero. */
function MindsetBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="h-full w-full opacity-50">
        <defs>
          <pattern id="mindset-grid" width="72" height="72" patternUnits="userSpaceOnUse">
            <path
              d="M72 0H0V72"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.04"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mindset-grid)" />
      </svg>
    </div>
  );
}
