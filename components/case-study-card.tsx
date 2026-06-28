import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/constants/case-studies";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  className?: string;
  shadow?: "active" | "background";
};

function StoreLinks({ caseStudy }: { caseStudy: CaseStudy }) {
  const { playStoreUrl, appStoreUrl, name } = caseStudy;

  if (!playStoreUrl && !appStoreUrl) {
    return null;
  }

  return (
    <div className="flex w-full items-center justify-center gap-3 flex-wrap shrink-0 pt-2 md:pt-3">
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full max-w-[160px] sm:w-auto sm:max-w-none"
        >
          <Image
            src="/google-play-badge.png"
            alt={`Get ${name} on Google Play`}
            width={150}
            height={45}
            className="mx-auto h-9 w-auto sm:h-10"
          />
        </a>
      )}
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full max-w-[160px] sm:w-auto sm:max-w-none"
        >
          <Image
            src="/app-store-badge.png"
            alt={`Get ${name} on the App Store`}
            width={150}
            height={45}
            className="mx-auto h-9 w-auto sm:h-10"
          />
        </a>
      )}
    </div>
  );
}

export function CaseStudyCard({
  caseStudy,
  className,
  shadow = "active",
}: CaseStudyCardProps) {
  return (
    <article
      data-case-card
      className={cn(
        "mx-auto flex h-full w-full flex-col rounded-[22px] border border-gray-200/80 bg-white",
        "md:max-w-[900px] lg:max-w-[1180px] min-[1400px]:max-w-[1400px]",
        shadow === "active"
          ? "shadow-[0_40px_100px_rgba(0,0,0,0.18)]"
          : "shadow-[0_16px_48px_rgba(0,0,0,0.07)]",
        className
      )}
    >
      <div className="grid h-full min-h-0 grid-cols-1 lg:grid-cols-[45fr_55fr] min-[1400px]:grid-cols-[48fr_52fr]">
        <div className="flex min-h-0 shrink-0 flex-col items-center justify-center bg-[#F7F7F7] p-[clamp(20px,3vw,36px)] lg:p-[clamp(24px,2.5vw,36px)] min-[1400px]:p-[clamp(28px,3vw,48px)]">
          <div className="flex w-full max-w-[80vw] items-center justify-center gap-[clamp(12px,2vw,28px)] md:max-w-none md:gap-[clamp(16px,2vw,28px)]">
            {caseStudy.screenshots.map((image, index) => (
              <div
                key={`${caseStudy.id}-screenshot-${index}`}
                className="relative aspect-[9/16] h-[clamp(220px,38vw,520px)] w-auto max-w-[38vw] overflow-hidden rounded-2xl border border-gray-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:max-w-[170px] md:h-[clamp(260px,34vw,420px)] md:max-w-[200px] lg:h-[clamp(280px,42vh,520px)] lg:max-w-[45%] min-[1400px]:max-w-[46%]"
              >
                <Image
                  src={image}
                  alt={`${caseStudy.name} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 38vw, (max-width: 1024px) 200px, (max-width: 1400px) 240px, 280px"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <StoreLinks caseStudy={caseStudy} />
        </div>

        <div className="flex min-h-0 flex-col justify-center overflow-y-auto p-[clamp(20px,3vw,36px)] lg:p-[clamp(24px,2.5vw,36px)] min-[1400px]:p-[clamp(28px,3vw,48px)]">
          <div className="mb-[clamp(16px,2vw,32px)]">
            <div className="mb-[clamp(12px,1.5vw,16px)] flex flex-wrap items-center gap-2 md:gap-3">
              <h3 className="font-normal text-gray-900 text-[clamp(1.625rem,2.5vw,2.375rem)] leading-tight">
                {caseStudy.name}
              </h3>
              <Badge
                variant="secondary"
                className="max-w-full shrink font-light bg-gray-100 text-gray-900 border-gray-200 text-[13px] sm:text-sm"
              >
                {caseStudy.timelineBadge}
              </Badge>
            </div>
            <p className="mb-[clamp(10px,1.5vw,16px)] max-w-[65ch] text-gray-600 font-light text-[clamp(1rem,1.2vw,1.125rem)] leading-relaxed">
              {caseStudy.tagline}
            </p>
            <p className="mb-[clamp(8px,1vw,12px)] max-w-[65ch] font-normal text-gray-900 text-[clamp(1.0625rem,1.4vw,1.25rem)]">
              {caseStudy.headline}
            </p>
            <p className="max-w-[65ch] text-gray-600 font-light leading-relaxed text-[clamp(1rem,1.2vw,1.125rem)]">
              {caseStudy.description}
            </p>
          </div>

          <div className="mb-[clamp(16px,2vw,32px)] grid grid-cols-1 gap-2 border-b border-gray-200 pb-[clamp(16px,2vw,32px)] md:grid-cols-2 lg:grid-cols-3 lg:gap-[clamp(8px,1vw,12px)]">
            {caseStudy.metrics.map((metric) => (
              <div
                key={`${caseStudy.id}-${metric.label}`}
                className="rounded-xl bg-gray-50 border border-gray-100 px-3 py-2.5 text-center sm:px-2 lg:px-3 lg:py-3"
              >
                <p className="mb-1 text-[11px] uppercase tracking-wide text-gray-500 font-light leading-snug">
                  {metric.label}
                </p>
                <p className="font-normal text-gray-900 text-[clamp(0.75rem,1vw,0.875rem)]">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-[clamp(12px,1.5vw,16px)] font-medium text-gray-900 text-sm">
              Key Features
            </p>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-[clamp(8px,1vw,10px)] lg:gap-2.5">
              {caseStudy.features.map((feature) => (
                <div
                  key={`${caseStudy.id}-${feature}`}
                  className="flex min-h-[44px] items-center gap-2.5 rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5 lg:gap-3"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900">
                    <Check className="h-3 w-3 text-white" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 text-gray-700 font-light leading-snug text-[clamp(0.8125rem,1vw,0.875rem)]">
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
