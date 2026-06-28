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

export function ProjectCard({ project, className }: ProjectCardProps) {
  const mockupImage = (
    <Image
      src={project.images[0]}
      alt={`${project.title} app mockup`}
      width={600}
      height={1000}
      className={cn(
        "h-auto max-h-[min(58vw,340px)] w-[clamp(180px,78vw,300px)] object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.14)] sm:max-h-[min(54vw,360px)] sm:w-[clamp(200px,62vw,320px)] md:max-h-[min(52vw,460px)] md:w-[clamp(240px,90%,400px)] lg:max-h-[min(50vw,520px)] lg:w-[clamp(260px,94%,440px)] xl:max-h-[540px] xl:w-[clamp(280px,95%,460px)] min-[1400px]:max-h-[580px] min-[1400px]:w-[clamp(300px,96%,480px)]",
        project.playStoreUrl && "transition-opacity duration-200 hover:opacity-95"
      )}
      sizes="(max-width: 768px) 78vw, (max-width: 1024px) 48vw, (max-width: 1280px) 34vw, 460px"
      loading="lazy"
      draggable={false}
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
