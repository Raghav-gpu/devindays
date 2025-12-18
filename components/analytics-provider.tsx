"use client";

import { useEffect } from "react";
import { initPostHog, initGA } from "@/lib/analytics";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize analytics
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      initPostHog();
    }
    if (process.env.NEXT_PUBLIC_GA_ID) {
      initGA();
    }
  }, []);

  return <>{children}</>;
}
