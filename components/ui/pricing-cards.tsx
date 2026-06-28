"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

type PricingFeature = {
  text: string;
};

type PricingTier = {
  title: string;
  description: string;
  price: string;
  priceSuffix?: string;
  features: PricingFeature[];
  bestFor: string;
  ctaLabel: string;
  ctaHref: string;
  ctaAriaLabel: string;
  highlighted?: boolean;
  badge?: string;
};

const pricingTiers: PricingTier[] = [
  {
    title: "MVP Build",
    description: "For founders validating core mechanics",
    price: "₹80,000",
    priceSuffix: "starting",
    features: [
      { text: "Cross-platform architecture (iOS & Android)" },
      { text: "Core user flow & state management" },
      { text: "Automated CI/CD deployment pipelines" },
      { text: "3–4 week rapid delivery cycle" },
      { text: "Complete IP and codebase ownership" },
    ],
    bestFor: "market validation, seed-stage product demos, and core feature testing",
    ctaLabel: "Initiate MVP Build",
    ctaHref: "https://wa.me/919315735371",
    ctaAriaLabel: "Open WhatsApp to initiate MVP build",
  },
  {
    title: "Full App Build",
    description: "For scalable consumer apps, marketplaces, and transactional platforms",
    price: "₹2,00,000",
    priceSuffix: "starting",
    features: [
      { text: "Production-grade backend infrastructure (Node.js/Supabase)" },
      { text: "Complex state management & real-time WebSockets" },
      { text: "Secure payment routing & third-party API integrations" },
      { text: "Dedicated admin control dashboard" },
      { text: "Post-deployment SLA and stability support" },
    ],
    bestFor:
      "consumer social apps (e.g., dating/matching mechanics), on-demand service platforms, and revenue-generating products",
    ctaLabel: "Request Technical Review",
    ctaHref: "https://wa.me/919315735371",
    ctaAriaLabel: "Open WhatsApp to request a technical review",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    title: "Advanced / Custom Systems",
    description: "For heavy infrastructure, multi-sided platforms, and AI-integrated systems",
    price: "Custom",
    priceSuffix: "pricing",
    features: [
      { text: "Multi-app ecosystems (e.g., Customer App + Provider App + Admin)" },
      { text: "Microservices, geolocation tracking & background worker queues" },
      { text: "Applied AI & matching algorithm integrations" },
      { text: "Legacy system refactoring & migration" },
      { text: "Long-term architectural consulting" },
    ],
    bestFor:
      "large-scale service aggregators (e.g., Urban Company models), high-concurrency consumer networks, and complex enterprise automation",
    ctaLabel: "Discuss Architecture",
    ctaHref: "https://wa.me/919315735371",
    ctaAriaLabel: "Open WhatsApp to discuss architecture",
  },
];

function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100",
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function PricingFeatureItem({ text }: PricingFeature) {
  return (
    <div className="flex min-h-[44px] items-start gap-2.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100">
        <Check className="h-3 w-3 text-slate-900" strokeWidth={2.5} aria-hidden="true" />
      </span>
      <p className="min-w-0 text-[15px] leading-[1.5] text-slate-700 lg:text-[15px] min-[1200px]:text-[15px]">
        {text}
      </p>
    </div>
  );
}

function PricingTierCard({ tier, index }: { tier: PricingTier; index: number }) {
  return (
    <FadeIn delay={index * 100} className="flex h-full">
      <div
        className={cn(
          "group relative flex h-full w-full flex-col rounded-[20px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:p-7 min-[1400px]:p-8",
          tier.highlighted &&
            "z-10 border-slate-300/80 bg-[#FCFCFD] shadow-[0_16px_48px_rgba(15,23,42,0.12),0_0_0_1px_rgba(15,23,42,0.04)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.16),0_0_32px_rgba(15,23,42,0.06)] min-[1400px]:scale-[1.03] min-[1400px]:hover:-translate-y-1.5"
        )}
      >
        {tier.badge && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <Badge className="rounded-full border border-slate-900/10 bg-slate-900 px-3 py-1 text-[11px] font-medium tracking-wide text-white shadow-sm">
              {tier.badge}
            </Badge>
          </div>
        )}

        <div className={cn("flex h-full min-h-0 flex-col", tier.badge && "pt-2")}>
          <div className="shrink-0">
            <h3 className="text-[clamp(1.5rem,1.8vw,1.625rem)] font-semibold leading-tight text-slate-900">
              {tier.title}
            </h3>
            <p className="mt-3 min-h-[3rem] line-clamp-2 text-[15px] leading-relaxed text-slate-500 lg:mt-4 lg:text-base">
              {tier.description}
            </p>
          </div>

          <div className="mt-5 flex min-h-[3.25rem] shrink-0 items-end gap-2 lg:mt-5">
            <span className="text-[clamp(2rem,1.8vw,2.125rem)] font-bold leading-none tracking-tight text-slate-900">
              {tier.price}
            </span>
            {tier.priceSuffix && (
              <span className="pb-1 shrink-0 text-sm font-medium text-slate-400">{tier.priceSuffix}</span>
            )}
          </div>

          <div className="mt-5 flex shrink-0 flex-col gap-[14px] lg:mt-5">
            {tier.features.map((feature) => (
              <PricingFeatureItem key={feature.text} text={feature.text} />
            ))}
          </div>

          <div className="mt-auto flex shrink-0 flex-col pt-5 lg:pt-6">
            <div className="rounded-xl bg-slate-50 px-3.5 py-3">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Best for
              </p>
              <p className="text-[14px] leading-relaxed text-slate-600">{tier.bestFor}</p>
            </div>

            <Button
              variant={tier.highlighted ? "default" : "outline"}
              className={cn(
                "mt-4 h-12 w-full shrink-0 rounded-2xl px-4 text-[15px] font-medium whitespace-nowrap transition-all duration-300",
                tier.highlighted
                  ? "bg-slate-900 text-white hover:bg-slate-800"
                  : "border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50"
              )}
              asChild
            >
              <Link
                href={tier.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2"
              >
                <span className="truncate">{tier.ctaLabel}</span>
                <MoveRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function Pricing() {
  return (
    <div className="w-full py-[clamp(80px,8vw,96px)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-semibold tracking-tight text-slate-900">
            Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-500 lg:text-[17px]">
            Clear pricing. No surprises. Most projects fall into one of the options below.
          </p>
        </FadeIn>

        <div className="mx-auto mt-14 grid w-full grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 min-[1400px]:gap-7">
          {pricingTiers.map((tier, index) => (
            <div
              key={tier.title}
              className={cn(
                "flex h-full min-h-0",
                index === 2 &&
                  "md:col-span-2 md:mx-auto md:w-full md:max-w-[min(100%,420px)] lg:col-span-1 lg:max-w-none"
              )}
            >
              <PricingTierCard tier={tier} index={index} />
            </div>
          ))}
        </div>

        <FadeIn delay={300} className="mt-14 space-y-4 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-500">
            We take on a limited number of projects each month to ensure quality and timelines
            don&apos;t slip.
          </p>
          <div className="flex justify-center">
            <Badge className="rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-medium text-slate-700 shadow-sm">
              25+ apps delivered in 12 months
            </Badge>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export { Pricing };
