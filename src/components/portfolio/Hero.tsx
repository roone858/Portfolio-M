import { ArrowRight, Download, MessageSquare } from "lucide-react";
import { cv, cvHref } from "@/content/portfolio";
import { LinkButton } from "./primitives";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="absolute inset-0 bg-glow animate-drift" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-60" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border bg-surface/70 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-success animate-pulse-dot" aria-hidden />
            Open to Frontend Opportunities
          </p>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-primary">Hello, I'm Mahmoud</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Frontend Developer Building <span className="text-gradient">Modern Web Experiences</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I build responsive, scalable, and user-focused web applications using React, Angular, TypeScript, and modern
            frontend technologies.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <LinkButton href="#projects">
              Explore My Projects <ArrowRight className="size-4" />
            </LinkButton>
            <LinkButton href={cvHref} variant="outline" {...(cv.available ? { download: cv.fileName } : {})}>
              <Download className="size-4" /> {cv.available ? "Download CV" : "Request CV"}
            </LinkButton>
            <LinkButton href="#contact" variant="ghost">
              <MessageSquare className="size-4" /> Let's Talk
            </LinkButton>
          </div>
        </div>
        <CodeVisual />
      </div>
    </section>
  );
}

function CodeVisual() {
  return (
    <div className="relative" aria-hidden>
      <div className="rounded-xl border bg-card/90 shadow-card backdrop-blur">
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="size-2.5 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">CourseDashboard.tsx</span>
        </div>
        <pre className="overflow-hidden p-5 font-mono text-[12.5px] leading-6 text-muted-foreground">
          <code>
            <span className="text-violet">export function</span> <span className="text-foreground">CourseDashboard</span>() {"{"}
            {"\n"}  <span className="text-violet">const</span> {"{"} data, isLoading {"}"} = <span className="text-primary">useCourses</span>();
            {"\n"}  <span className="text-violet">const</span> user = <span className="text-primary">useAppSelector</span>(selectUser);
            {"\n\n"}  <span className="text-violet">return</span> (
            {"\n"}    {"<"}<span className="text-foreground">Layout</span> title=<span className="text-success">"Overview"</span>{">"}
            {"\n"}      {"<"}<span className="text-foreground">StatsGrid</span> user={"{"}user{"}"} /{">"}
            {"\n"}      {"<"}<span className="text-foreground">CourseList</span> items={"{"}data{"}"} /{">"}
            {"\n"}    {"</"}<span className="text-foreground">Layout</span>{">"}
            {"\n"}  );
            {"\n"}{"}"}
          </code>
        </pre>
      </div>
      <div className="absolute -bottom-8 -left-4 hidden w-56 rounded-lg border bg-surface p-4 shadow-card sm:block">
        <div className="flex items-center justify-between text-xs">
          <span className="text-muted-foreground">Build</span>
          <span className="font-mono text-success">passing</span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="h-1.5 w-full rounded bg-primary/70" />
          <div className="h-1.5 w-3/4 rounded bg-violet/60" />
          <div className="h-1.5 w-1/2 rounded bg-muted-foreground/30" />
        </div>
      </div>
      <div className="absolute -top-5 -right-3 hidden rounded-md border bg-surface px-3 py-2 font-mono text-xs text-muted-foreground shadow-card sm:block">
        <span className="text-primary">React</span> · <span className="text-violet">TS</span> · Tailwind
      </div>
    </div>
  );
}
