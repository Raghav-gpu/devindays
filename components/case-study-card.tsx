import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { CaseStudy } from "@/constants/case-studies";
import { Check } from "lucide-react";
import Image from "next/image";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

function StoreLinks({ caseStudy }: CaseStudyCardProps) {
  const { playStoreUrl, appStoreUrl, name } = caseStudy;

  if (!playStoreUrl && !appStoreUrl) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap">
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
            className="h-9 w-auto"
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
            className="h-9 w-auto"
          />
        </a>
      )}
    </div>
  );
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-300 shadow-lg bg-white">
      <div className="grid md:grid-cols-2 gap-0">
        <div className="relative bg-gray-50 p-8 md:p-10 flex flex-col items-center justify-center gap-6 min-h-[320px] md:min-h-[420px]">
          <div className="flex items-center justify-center gap-4 md:gap-5">
            {caseStudy.screenshots.map((image, index) => (
              <div
                key={`${caseStudy.id}-screenshot-${index}`}
                className="relative aspect-[9/16] w-36 sm:w-40 md:w-44 lg:w-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 transform hover:scale-[1.02] transition-transform duration-300"
              >
                <Image
                  src={image}
                  alt={`${caseStudy.name} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 160px, 192px"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <StoreLinks caseStudy={caseStudy} />
        </div>

        <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
          <div className="mb-5">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h3 className="text-xl font-normal text-gray-900">{caseStudy.name}</h3>
              <Badge
                variant="secondary"
                className="font-light bg-gray-100 text-gray-900 border-gray-200"
              >
                {caseStudy.timelineBadge}
              </Badge>
            </div>
            <p className="text-sm text-gray-600 font-light mb-3">{caseStudy.tagline}</p>
            <p className="text-base font-normal text-gray-900 mb-2">{caseStudy.headline}</p>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              {caseStudy.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-gray-200">
            {caseStudy.metrics.map((metric) => (
              <div
                key={`${caseStudy.id}-${metric.label}`}
                className="rounded-lg bg-gray-50 border border-gray-100 px-2 py-3 text-center"
              >
                <p className="text-xs text-gray-500 font-light mb-1">{metric.label}</p>
                <p className="text-sm font-normal text-gray-900">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-5">
            <p className="text-sm font-medium text-gray-900 mb-3">Key Features</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {caseStudy.features.map((feature) => (
                <div
                  key={`${caseStudy.id}-${feature}`}
                  className="flex items-center gap-2.5 rounded-lg border border-gray-100 bg-gray-50/80 px-3 py-2.5"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900">
                    <Check className="h-3 w-3 text-white" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="text-sm text-gray-700 font-light leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
