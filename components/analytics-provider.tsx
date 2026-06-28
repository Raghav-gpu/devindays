"use client";

import { runAfterInteraction } from "@/lib/deferred-init";
import { useEffect } from "react";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
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

  return <>{children}</>;
}
