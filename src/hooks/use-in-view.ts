import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  /** Keep observing after the first intersection. Defaults to true. */
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
};

/**
 * Reports whether an element has entered the viewport.
 *
 * Falls back to visible when IntersectionObserver is unavailable or the user
 * prefers reduced motion, so content never depends on an animation to exist.
 */
export function useInView<T extends Element>({
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries.some((entry) => entry.isIntersecting);
        if (isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return { ref, inView };
}
