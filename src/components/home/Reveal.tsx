"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    element.classList.add("is-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -56px 0px", threshold: 0.06 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
