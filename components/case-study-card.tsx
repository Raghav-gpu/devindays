import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/constants/case-studies";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  className?: string;
  shadow?: "active" | "background";
  priority?: boolean;
  shouldLoadImage?: boolean;
};

function PlatformChips({ platforms }: { platforms: string[] }) {
  return (
    <div className="mb-3 flex flex-wrap gap-2">
      {platforms.map((platform) => (
        <span
          key={platform}
          className="rounded-full border border-gray-200/90 bg-white/80 px-2.5 py-1 text-[11px] font-medium tracking-wide text-gray-600 shadow-sm"
        >
          {platform}
        </span>
      ))}
    </div>
  );
}

function StoreLinks({ caseStudy }: { caseStudy: CaseStudy }) {
  const { playStoreUrl, appStoreUrl, name } = caseStudy;

  if (!playStoreUrl && !appStoreUrl) {
    return null;
  }

  return (
    <div className="mt-5 flex flex-col gap-3 md:mt-5 md:flex-row md:flex-wrap md:items-center md:gap-4 lg:mt-5">
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-full shrink-0 items-center justify-center md:w-auto"
        >
          <Image
            src="/badges/google-play-badge.webp"
            alt={`Get ${name} on Google Play`}
            width={135}
            height={40}
            className="h-8 w-auto opacity-90 transition-opacity hover:opacity-100"
            sizes="135px"
            loading="lazy"
          />
        </a>
      )}
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 w-full shrink-0 items-center justify-center md:w-auto"
        >
          <Image
            src="/badges/app-store-badge.webp"
            alt={`Get ${name} on the App Store`}
            width={135}
            height={40}
            className="h-8 w-auto opacity-90 transition-opacity hover:opacity-100"
            sizes="135px"
            loading="lazy"
          />
        </a>
      )}
    </div>
  );
}

function DeviceMockupHero({
  caseStudy,
  priority = false,
  shouldLoadImage = true,
}: {
  caseStudy: CaseStudy;
  priority?: boolean;
  shouldLoadImage?: boolean;
}) {
  const mockupImage = shouldLoadImage ? (
    <Image
      src={caseStudy.mockup}
      alt={`${caseStudy.name} app mockup`}
      width={1500}
      height={1125}
      className={cn(
        "h-auto max-h-[min(72vw,420px)] w-[clamp(280px,78vw,420px)] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)]",
        "md:max-h-[min(52vw,460px)] md:w-[clamp(300px,52vw,460px)]",
        "lg:max-h-[min(64vh,600px)] lg:w-[clamp(320px,48vw,720px)]",
        "min-[1200px]:max-h-[min(62vh,480px)] min-[1200px]:w-[clamp(300px,32vw,480px)]",
        "min-[1400px]:max-h-[min(68vh,520px)] min-[1400px]:w-[clamp(340px,36vw,560px)]",
        caseStudy.playStoreUrl && "transition-opacity duration-200 hover:opacity-95"
      )}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 78vw, (max-width: 1200px) 50vw, 40vw"
      quality={100}
      decoding="async"
      priority={priority}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  ) : (
    <div
      aria-hidden="true"
      className="h-[min(72vw,420px)] w-[clamp(280px,78vw,420px)] md:h-[min(52vw,460px)] md:w-[clamp(300px,52vw,460px)]"
    />
  );

  return (
    <div className="relative flex min-h-[320px] w-full items-center justify-center overflow-hidden md:min-h-[380px] lg:min-h-0 lg:h-full">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 scale-110 opacity-90"
        style={{
          background: `radial-gradient(circle at 50% 42%, ${caseStudy.accentColor} 0%, transparent 72%)`,
        }}
      />

      <div
        data-case-mockup
        className="relative z-10 flex w-full max-w-full items-center justify-center px-2 lg:px-4 min-[1200px]:px-5 min-[1400px]:px-6"
      >
        {caseStudy.playStoreUrl ? (
          <a
            href={caseStudy.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${caseStudy.name} on Google Play`}
            className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2"
          >
            {mockupImage}
          </a>
        ) : (
          mockupImage
        )}
      </div>
    </div>
  );
}

export const CaseStudyCard = memo(function CaseStudyCard({
  caseStudy,
  className,
  shadow = "active",
  priority = false,
  shouldLoadImage = true,
}: CaseStudyCardProps) {
  return (
    <article
      data-case-card
      className={cn(
        "mx-auto flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-gray-200/80 bg-white",
        "md:max-w-[900px] lg:max-w-[1180px] min-[1400px]:max-w-[1400px]",
        shadow === "active"
          ? "shadow-[0_40px_100px_rgba(0,0,0,0.18)]"
          : "shadow-[0_16px_48px_rgba(0,0,0,0.07)]",
        className
      )}
    >
      <div
        className={cn(
          "grid h-full min-h-0 grid-cols-1",
          "lg:grid-cols-[minmax(0,1fr)_minmax(420px,1fr)]",
          "min-[1200px]:grid-cols-[52fr_minmax(420px,48fr)]",
          "min-[1400px]:grid-cols-[55fr_minmax(420px,45fr)]"
        )}
      >
        <div className="relative overflow-hidden bg-[#FAFAFA] p-[clamp(16px,2.5vw,28px)] lg:p-6 min-[1200px]:p-7 min-[1400px]:p-8">
          <DeviceMockupHero
            caseStudy={caseStudy}
            priority={priority}
            shouldLoadImage={shouldLoadImage}
          />
        </div>

        <div className="flex min-h-0 min-w-0 flex-col justify-center overflow-y-auto p-[clamp(20px,3vw,36px)] lg:min-w-[420px] lg:p-6 min-[1200px]:p-7 min-[1400px]:p-8">
          <PlatformChips platforms={caseStudy.platforms} />

          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2 md:gap-3">
              <h3 className="text-[clamp(1.625rem,2.5vw,2.375rem)] leading-tight font-normal text-gray-900">
                {caseStudy.name}
              </h3>
              <Badge
                variant="secondary"
                className="max-w-full shrink border-gray-200 bg-gray-100 text-[13px] font-light text-gray-900 sm:text-sm"
              >
                {caseStudy.timelineBadge}
              </Badge>
            </div>

            <p className="mb-4 max-w-[65ch] text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed font-light text-gray-600 lg:mb-4">
              {caseStudy.tagline}
            </p>
            <p className="mb-4 max-w-[65ch] text-[clamp(1.0625rem,1.4vw,1.25rem)] font-normal text-gray-900 lg:mb-4">
              {caseStudy.headline}
            </p>
            <p className="max-w-[65ch] text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed font-light text-gray-600">
              {caseStudy.description}
            </p>

            <StoreLinks caseStudy={caseStudy} />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2 border-b border-gray-200 pb-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-2.5">
            {caseStudy.metrics.map((metric) => (
              <div
                key={`${caseStudy.id}-${metric.label}`}
                className="rounded-xl border border-gray-100 bg-gray-50 px-2.5 py-2.5 text-center lg:px-3 lg:py-2.5"
              >
                <p className="mb-1 text-[11px] leading-snug font-light tracking-wide text-gray-500 uppercase">
                  {metric.label}
                </p>
                <p className="text-[clamp(0.75rem,1vw,0.875rem)] font-normal text-gray-900">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-gray-900">Key Features</p>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2.5">
              {caseStudy.features.map((feature) => (
                <div
                  key={`${caseStudy.id}-${feature}`}
                  className="flex min-h-[44px] items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900">
                    <Check className="h-3 w-3 text-white" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 text-[clamp(0.8125rem,1vw,0.875rem)] leading-snug font-light text-gray-700">
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
});
