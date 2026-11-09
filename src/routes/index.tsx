import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import {
  About,
  Approach,
  Contact,
  Resume,
  Skills,
  StackGrid,
} from "@/components/portfolio/Sections";
import { profile } from "@/content/portfolio";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const title = "Mahmoud Gamal | Frontend Developer | React & Angular";
const description =
  "Mahmoud Gamal is a Frontend Developer specializing in React, Angular, TypeScript, and modern responsive web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.role,
            email: `mailto:${profile.email}`,
            address: { "@type": "PostalAddress", addressCountry: "EG" },
            sameAs: [profile.linkedin, profile.github],
            knowsAbout: ["React", "Angular", "TypeScript", "Next.js", "Frontend Development"],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: `${profile.name} — Portfolio`,
          },
        ]),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Approach />
        <Resume />
        <StackGrid />
        <Projects />
        <Skills />
      </main>
      <Contact />
    </>
  );
}
