import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/constants/projects";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

function StoreLinks({ project }: ProjectCardProps) {
  const { playStoreUrl, appStoreUrl, title } = project;

  if (!playStoreUrl && !appStoreUrl) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
      {playStoreUrl && (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Image
            src="/google-play-badge.png"
            alt={`Get ${title} on Google Play`}
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
            alt={`Get ${title} on the App Store`}
            width={150}
            height={45}
            className="h-9 w-auto"
          />
        </a>
      )}
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-300 hover:shadow-2xl bg-white h-full shadow-lg flex flex-col min-h-[420px] sm:min-h-[440px] md:min-h-0">
      <div className="relative w-full bg-gray-50">
        <div className="flex flex-col items-center justify-center p-5 sm:p-6 md:p-6 gap-4">
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
            {project.images.map((image, index) => (
              <div
                key={`${project.id}-image-${index}`}
                className="relative aspect-[9/16] flex-1 max-w-[175px] sm:max-w-[195px] md:max-w-[140px] rounded-xl overflow-hidden shadow-lg border border-gray-200"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 42vw, 140px"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <StoreLinks project={project} />
        </div>
      </div>

      <CardHeader className="pb-3 px-5 sm:px-6 md:px-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-xl sm:text-2xl font-normal mb-1 text-gray-900">
              {project.title}
            </CardTitle>
            {project.badge && (
              <Badge
                variant="secondary"
                className="mt-2 font-light bg-gray-100 text-gray-900 border-gray-200"
              >
                {project.badge}
              </Badge>
            )}
          </div>
          {project.featured && (
            <Badge
              variant="outline"
              className="font-light text-gray-900 border-gray-300 shrink-0"
            >
              FEATURED
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pt-0 mt-auto px-5 sm:px-6 md:px-6">
        <CardDescription className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
          {project.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
