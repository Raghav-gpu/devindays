import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/constants/case-studies";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  className?: string;
  variant?: "hero" | "mobile";
  shadow?: "active" | "background";
};

function StoreLinks({ caseStudy, compact }: { caseStudy: CaseStudy; compact?: boolean }) {
  const { playStoreUrl, appStoreUrl, name } = caseStudy;

  if (!playStoreUrl && !appStoreUrl) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap shrink-0">
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Image
            src="/google-play-badge.png"
            alt={`Get ${name} on Google Play`}
            width={150}
            height={45}
            className={cn(compact ? "h-8 w-auto" : "h-10 w-auto")}
          />
        </a>
      )}
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Image
            src="/app-store-badge.png"
            alt={`Get ${name} on the App Store`}
            width={150}
            height={45}
            className={cn(compact ? "h-8 w-auto" : "h-10 w-auto")}
          />
        </a>
      )}
    </div>
  );
}

export function CaseStudyCard({
  caseStudy,
  className,
  variant = "hero",
  shadow = "active",
}: CaseStudyCardProps) {
  const isHero = variant === "hero";

  return (
    <article
      data-case-card
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-gray-200/80 bg-white",
        shadow === "active"
          ? "shadow-[0_40px_100px_rgba(0,0,0,0.18)]"
          : "shadow-[0_16px_48px_rgba(0,0,0,0.07)]",
        className
      )}
    >
      <div
        className={cn(
          "grid h-full min-h-0",
          isHero ? "grid-cols-1 lg:grid-cols-[2fr_3fr]" : "grid-cols-1"
        )}
      >
        <div
          className={cn(
            "flex min-h-0 flex-col items-center justify-center bg-[#F7F7F7]",
            isHero ? "px-8 py-10 lg:px-10 lg:py-12" : "px-6 py-8 gap-4"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-center",
              isHero
                ? "h-[88%] max-h-full w-full gap-5 lg:gap-7"
                : "gap-4 w-full"
            )}
          >
            {caseStudy.screenshots.map((image, index) => (
              <div
                key={`${caseStudy.id}-screenshot-${index}`}
                className={cn(
                  "relative aspect-[9/16] overflow-hidden rounded-2xl border border-gray-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.12)]",
                  isHero ? "h-full w-auto max-w-[45%]" : "h-48 w-auto sm:h-56"
                )}
              >
                <Image
                  src={image}
                  alt={`${caseStudy.name} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes={
                    isHero
                      ? "(max-width: 1024px) 40vw, 280px"
                      : "(max-width: 640px) 45vw, 200px"
                  }
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <StoreLinks caseStudy={caseStudy} compact={!isHero} />
        </div>

        <div
          className={cn(
            "flex min-h-0 flex-col justify-center",
            isHero ? "px-10 py-12 lg:px-14 lg:py-14" : "px-6 pb-8"
          )}
        >
          <div className={cn(isHero ? "mb-8" : "mb-5")}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3
                className={cn(
                  "font-normal text-gray-900",
                  isHero ? "text-3xl lg:text-4xl" : "text-2xl"
                )}
              >
                {caseStudy.name}
              </h3>
              <Badge
                variant="secondary"
                className="font-light bg-gray-100 text-gray-900 border-gray-200"
              >
                {caseStudy.timelineBadge}
              </Badge>
            </div>
            <p
              className={cn(
                "text-gray-600 font-light",
                isHero ? "text-lg mb-4" : "text-sm mb-3"
              )}
            >
              {caseStudy.tagline}
            </p>
            <p
              className={cn(
                "font-normal text-gray-900",
                isHero ? "text-xl mb-3" : "text-base mb-2"
              )}
            >
              {caseStudy.headline}
            </p>
            <p
              className={cn(
                "text-gray-600 font-light leading-relaxed",
                isHero ? "text-base max-w-xl" : "text-sm"
              )}
            >
              {caseStudy.description}
            </p>
          </div>

          <div
            className={cn(
              "grid grid-cols-3 gap-3 border-b border-gray-200",
              isHero ? "mb-8 pb-8" : "mb-5 pb-5"
            )}
          >
            {caseStudy.metrics.map((metric) => (
              <div
                key={`${caseStudy.id}-${metric.label}`}
                className="rounded-xl bg-gray-50 border border-gray-100 px-3 py-3 text-center"
              >
                <p className="text-[11px] uppercase tracking-wide text-gray-500 font-light mb-1">
                  {metric.label}
                </p>
                <p className={cn("font-normal text-gray-900", isHero ? "text-sm" : "text-xs")}>
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <div>
            <p
              className={cn(
                "font-medium text-gray-900",
                isHero ? "text-sm mb-4" : "text-xs mb-3"
              )}
            >
              Key Features
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.features.map((feature) => (
                <div
                  key={`${caseStudy.id}-${feature}`}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900">
                    <Check className="h-3 w-3 text-white" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span
                    className={cn(
                      "text-gray-700 font-light leading-snug",
                      isHero ? "text-sm" : "text-xs"
                    )}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
