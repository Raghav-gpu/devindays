"use client";

import { useEffect } from "react";

export function ScrollTriggerRefresh() {
  useEffect(() => {
    let cancelled = false;

    async function refresh() {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (!cancelled) {
        ScrollTrigger.refresh();
      }
    }

    refresh();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
