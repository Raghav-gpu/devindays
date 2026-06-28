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
    <div className="flex min-h-0 items-start gap-2 lg:gap-2">
      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-slate-100 lg:h-[18px] lg:w-[18px] xl:h-5 xl:w-5">
        <Check
          className="h-2.5 w-2.5 text-slate-900 lg:h-2.5 lg:w-2.5 xl:h-3 xl:w-3"
          strokeWidth={2.5}
          aria-hidden="true"
        />
      </span>
      <p className="min-w-0 text-[13px] font-light leading-snug text-slate-700 sm:text-[14px] lg:text-[12.5px] lg:leading-snug xl:text-[14px] xl:leading-normal min-[1400px]:text-[15px]">
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
          "group relative flex h-full w-full flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:rounded-[20px] sm:p-5 md:p-5 lg:p-4 xl:p-6 min-[1400px]:p-8",
          tier.highlighted &&
            "z-10 border-slate-300/80 bg-[#FCFCFD] shadow-[0_16px_48px_rgba(15,23,42,0.12),0_0_0_1px_rgba(15,23,42,0.04)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.16),0_0_32px_rgba(15,23,42,0.06)] min-[1400px]:scale-[1.02] min-[1400px]:hover:-translate-y-1.5"
        )}
      >
        {tier.badge && (
          <div className="absolute -top-2.5 left-1/2 z-10 -translate-x-1/2 lg:-top-3">
            <Badge className="rounded-full border border-slate-900/10 bg-slate-900 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-white shadow-sm lg:px-2.5 lg:py-0.5 lg:text-[10px] xl:px-3 xl:py-1 xl:text-[11px]">
              {tier.badge}
            </Badge>
          </div>
        )}

        <div className={cn("flex h-full min-h-0 flex-col", tier.badge && "pt-1 sm:pt-1.5 lg:pt-2")}>
          <div className="shrink-0">
            <h3 className="text-[clamp(1.25rem,4.5vw,1.375rem)] font-light leading-tight text-slate-900 lg:text-[1.125rem] xl:text-[1.25rem] min-[1400px]:text-[1.625rem]">
              {tier.title}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-[13px] font-light leading-snug text-slate-500 sm:mt-2 sm:text-[14px] lg:mt-2 lg:min-h-0 lg:text-[12.5px] xl:mt-3 xl:min-h-12 xl:text-[14px] min-[1400px]:text-base">
              {tier.description}
            </p>
          </div>

          <div className="mt-3 flex shrink-0 items-end gap-1.5 sm:mt-4 lg:mt-3 lg:gap-1.5 xl:mt-5 xl:gap-2">
            <span className="text-[clamp(1.5rem,5.5vw,1.75rem)] font-light leading-none tracking-tight text-slate-900 lg:text-[1.375rem] xl:text-[1.75rem] min-[1400px]:text-[2.125rem]">
              {tier.price}
            </span>
            {tier.priceSuffix && (
              <span className="pb-0.5 shrink-0 text-[11px] font-light text-slate-400 lg:text-xs xl:pb-1 xl:text-sm">
                {tier.priceSuffix}
              </span>
            )}
          </div>

          <div className="mt-3 flex shrink-0 flex-col gap-2 sm:mt-4 sm:gap-2.5 lg:mt-3 lg:gap-2 xl:mt-5 xl:gap-3 min-[1400px]:gap-[14px]">
            {tier.features.map((feature) => (
              <PricingFeatureItem key={feature.text} text={feature.text} />
            ))}
          </div>

          <div className="mt-auto flex shrink-0 flex-col pt-3 sm:pt-4 lg:pt-3 xl:pt-5 min-[1400px]:pt-6">
            <div className="rounded-lg bg-slate-50 px-2.5 py-2 sm:rounded-xl sm:px-3 sm:py-2.5 lg:px-3 lg:py-2 xl:px-3.5 xl:py-3">
              <p className="mb-0.5 text-[9px] font-medium uppercase tracking-[0.12em] text-slate-500 lg:text-[10px] xl:mb-1 xl:text-[11px]">
                Best for
              </p>
              <p className="text-[12px] font-light leading-snug text-slate-600 lg:text-[11.5px] xl:text-[13px] xl:leading-relaxed min-[1400px]:text-[14px]">
                {tier.bestFor}
              </p>
            </div>

            <Button
              variant={tier.highlighted ? "default" : "outline"}
              className={cn(
                "mt-2.5 h-10 w-full shrink-0 rounded-xl px-3 text-[13px] font-medium transition-all duration-300 sm:mt-3 sm:h-11 sm:text-sm lg:mt-2.5 lg:h-9 lg:rounded-lg lg:px-2.5 lg:text-[12px] xl:mt-4 xl:h-11 xl:rounded-2xl xl:px-4 xl:text-[15px]",
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
                className="inline-flex h-10 w-full items-center justify-center gap-1.5 sm:h-11 lg:h-9 xl:h-11 xl:gap-2"
              >
                <span className="truncate">{tier.ctaLabel}</span>
                <MoveRight className="h-3.5 w-3.5 shrink-0 lg:h-3 lg:w-3 xl:h-4 xl:w-4" aria-hidden="true" />
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
    <div className="w-full pb-[clamp(56px,8vw,96px)] pt-[clamp(5.5rem,10vw,7rem)]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-6 xl:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(1.75rem,5.5vw,3rem)] font-light tracking-tight text-slate-900 lg:text-[clamp(1.875rem,3vw,3rem)]">
            Pricing
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-light leading-relaxed text-slate-500 sm:mt-4 sm:text-base lg:mt-3 lg:text-[15px] xl:text-[17px]">
            Clear pricing. No surprises. Most projects fall into one of the options below.
          </p>
        </FadeIn>

        <div className="mx-auto mt-8 grid w-full grid-cols-1 items-stretch gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 md:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-4 xl:mt-14 xl:gap-6 min-[1400px]:gap-7">
          {pricingTiers.map((tier, index) => (
            <div key={tier.title} className="flex h-full min-h-0">
              <PricingTierCard tier={tier} index={index} />
            </div>
          ))}
        </div>

        <FadeIn delay={300} className="mt-10 space-y-3 text-center sm:mt-14 sm:space-y-4">
          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-slate-500 sm:text-sm">
            We take on a limited number of projects each month to ensure quality and timelines
            don&apos;t slip.
          </p>
          <div className="flex justify-center">
            <Badge className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm sm:px-6 sm:py-2 sm:text-sm">
              25+ apps delivered in 12 months
            </Badge>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export { Pricing };
