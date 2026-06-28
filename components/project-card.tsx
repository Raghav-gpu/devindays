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
import { memo } from "react";

type ProjectCardProps = {
  project: Project;
  className?: string;
  shouldLoadImage?: boolean;
  priority?: boolean;
};

export const ProjectCard = memo(function ProjectCard({
  project,
  className,
  shouldLoadImage = true,
  priority = false,
}: ProjectCardProps) {
  const mockupImage = shouldLoadImage ? (
    <Image
      src={project.images[0]}
      alt={`${project.title} app mockup`}
      width={1500}
      height={1125}
      className={cn(
        "h-auto max-h-[min(58vw,340px)] w-[clamp(180px,78vw,300px)] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.14)] sm:max-h-[min(54vw,360px)] sm:w-[clamp(200px,62vw,320px)] md:max-h-[min(52vw,460px)] md:w-[clamp(240px,90%,400px)] lg:max-h-[min(50vw,520px)] lg:w-[clamp(260px,94%,440px)] xl:max-h-[540px] xl:w-[clamp(280px,95%,460px)] min-[1400px]:max-h-[580px] min-[1400px]:w-[clamp(300px,96%,480px)]",
        project.playStoreUrl && "transition-opacity duration-200 hover:opacity-95"
      )}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
      quality={100}
      decoding="async"
      loading={priority ? undefined : "lazy"}
      priority={priority}
      fetchPriority={priority ? "high" : "auto"}
      draggable={false}
    />
  ) : (
    <div
      aria-hidden="true"
      className="h-[min(58vw,340px)] w-[clamp(180px,78vw,300px)] sm:h-[min(54vw,360px)] sm:w-[clamp(200px,62vw,320px)] md:h-[min(52vw,460px)] md:w-[clamp(240px,90%,400px)]"
    />
  );

  return (
    <Card
      className={cn(
        "flex h-full flex-col overflow-hidden border-gray-200 bg-white shadow-lg transition-all duration-300 hover:border-gray-300 hover:shadow-2xl",
        className
      )}
    >
      <div className="relative w-full shrink-0 bg-gray-50">
        <div className="flex flex-col items-center justify-center gap-4 p-[clamp(12px,1.5vw,20px)]">
          <div className="flex min-h-[240px] w-full items-center justify-center sm:min-h-[260px] md:min-h-[360px] lg:min-h-[420px] xl:min-h-[460px] min-[1400px]:min-h-[500px]">
            {project.playStoreUrl ? (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                aria-label={`View ${project.title} on Google Play`}
                className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:ring-offset-2"
              >
                {mockupImage}
              </a>
            ) : (
              mockupImage
            )}
          </div>
        </div>
      </div>

      <CardHeader className="shrink-0 px-[clamp(16px,2vw,24px)] pt-[clamp(16px,2vw,20px)] pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="mb-1 line-clamp-2 text-[clamp(1.125rem,1.6vw,1.5rem)] leading-snug font-normal text-gray-900">
              {project.title}
            </CardTitle>
            {project.badge && (
              <Badge
                variant="secondary"
                className="mt-2 max-w-full border-gray-200 bg-gray-100 font-light text-gray-900"
              >
                {project.badge}
              </Badge>
            )}
          </div>
          {project.featured && (
            <Badge variant="outline" className="shrink-0 border-gray-300 font-light text-gray-900">
              FEATURED
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-1 flex-col px-[clamp(16px,2vw,24px)] pt-0 pb-[clamp(16px,2vw,24px)]">
        <CardDescription className="line-clamp-4 flex-1 text-[clamp(0.875rem,1.1vw,1rem)] leading-relaxed font-light text-gray-600">
          {project.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
});
