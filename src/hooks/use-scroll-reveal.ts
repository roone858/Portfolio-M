import { useEffect } from "react";

/**
 * Fades/rises every `[data-reveal]` element into view as it scrolls in.
 * Elements already on screen at mount are left alone (no flash), and nothing is
 * hidden when the user prefers reduced motion or IntersectionObserver is missing.
 * Elements that enter together are staggered in DOM order.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries.filter((e) => e.isIntersecting);
        entering.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          el.style.setProperty("--reveal-delay", `${Math.min(i, 6) * 90}ms`);
          el.dataset["reveal"] = "shown";
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      el.dataset["reveal"] = "hidden";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
