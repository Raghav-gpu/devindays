import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/constants/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
  className?: string;
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

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden border-gray-200 bg-white shadow-lg transition-all duration-300 hover:border-gray-300 hover:shadow-2xl",
        className
      )}
    >
      <div className="relative w-full shrink-0 bg-gray-50">
        <div className="flex flex-col items-center justify-center gap-4 p-[clamp(16px,2vw,24px)]">
          <div className="grid w-full grid-cols-2 gap-[clamp(8px,1.5vw,16px)]">
            {project.images.map((image, index) => (
              <div
                key={`${project.id}-image-${index}`}
                className="relative aspect-[9/16] w-full overflow-hidden rounded-xl border border-gray-200 shadow-lg"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 42vw, (max-width: 1280px) 28vw, 220px"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <StoreLinks project={project} />
        </div>
      </div>

      <CardHeader className="shrink-0 px-[clamp(16px,2vw,24px)] pb-3 pt-[clamp(16px,2vw,20px)]">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="mb-1 line-clamp-2 font-normal text-gray-900 text-[clamp(1.125rem,1.6vw,1.5rem)] leading-snug">
              {project.title}
            </CardTitle>
            {project.badge && (
              <Badge
                variant="secondary"
                className="mt-2 max-w-full font-light bg-gray-100 text-gray-900 border-gray-200"
              >
                {project.badge}
              </Badge>
            )}
          </div>
          {project.featured && (
            <Badge
              variant="outline"
              className="shrink-0 font-light text-gray-900 border-gray-300"
            >
              FEATURED
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-1 flex-col px-[clamp(16px,2vw,24px)] pb-[clamp(16px,2vw,24px)] pt-0">
        <CardDescription className="line-clamp-4 flex-1 font-light leading-relaxed text-gray-600 text-[clamp(0.875rem,1.1vw,1rem)]">
          {project.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
