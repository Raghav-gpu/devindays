"use client";

import { useEffect } from "react";

export async function initPostHog() {
  if (typeof window === "undefined" || !process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return;
  }

  const posthog = (await import("posthog-js")).default;

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    loaded: (client) => {
      if (process.env.NODE_ENV === "development") {
        client.debug();
      }
    },
  });
}

export function usePostHog() {
  useEffect(() => {
    void initPostHog();
  }, []);

  return {
    capture: async (event: string, properties?: Record<string, unknown>) => {
      if (typeof window === "undefined") {
        return;
      }

      const posthog = (await import("posthog-js")).default;
      posthog.capture(event, properties);
    },
    identify: async (userId: string, properties?: Record<string, unknown>) => {
      if (typeof window === "undefined") {
        return;
      }

      const posthog = (await import("posthog-js")).default;
      posthog.identify(userId, properties);
    },
  };
}

export function initGA() {
  if (typeof window === "undefined" || !process.env.NEXT_PUBLIC_GA_ID) {
    return;
  }

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

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

function getGtag() {
  if (typeof window === "undefined") {
    return undefined;
  }

  return (window as GtagWindow).gtag;
}

export function useGA() {
  useEffect(() => {
    initGA();
  }, []);

  return {
    pageview: (url: string) => {
      const gtag = getGtag();

      if (gtag) {
        gtag("config", process.env.NEXT_PUBLIC_GA_ID, { page_path: url });
      }
    },
    event: (action: string, category: string, label?: string, value?: number) => {
      const gtag = getGtag();

      if (gtag) {
        gtag("event", action, {
          event_category: category,
          event_label: label,
          value,
        });
      }
    },
  };
}
