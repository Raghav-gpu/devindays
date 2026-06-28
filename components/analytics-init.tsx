"use client";

import { runAfterInteraction } from "@/lib/deferred-init";
import { useEffect } from "react";

export function AnalyticsInit() {
  useEffect(() => {
    runAfterInteraction(async () => {
      if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
        const { initPostHog } = await import("@/lib/analytics");
        initPostHog();
      }

      if (process.env.NEXT_PUBLIC_GA_ID) {
        const { initGA } = await import("@/lib/analytics");
        initGA();
      }
    });
  }, []);

  return null;
}
