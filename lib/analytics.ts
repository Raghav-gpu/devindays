"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

// PostHog initialization
export function initPostHog() {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") {
          posthog.debug();
        }
      },
    });
  }
}

// PostHog hooks
export function usePostHog() {
  useEffect(() => {
    initPostHog();
  }, []);

  return {
    capture: (event: string, properties?: Record<string, any>) => {
      if (typeof window !== "undefined") {
        posthog.capture(event, properties);
      }
    },
    identify: (userId: string, properties?: Record<string, any>) => {
      if (typeof window !== "undefined") {
        posthog.identify(userId, properties);
      }
    },
  };
}

// Google Analytics
export function initGA() {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_GA_ID) {
    // Load gtag script
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `;
    document.head.appendChild(script2);
  }
}

export function useGA() {
  useEffect(() => {
    initGA();
  }, []);

  return {
    pageview: (url: string) => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        });
      }
    },
    event: (action: string, category: string, label?: string, value?: number) => {
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", action, {
          event_category: category,
          event_label: label,
          value: value,
        });
      }
    },
  };
}
