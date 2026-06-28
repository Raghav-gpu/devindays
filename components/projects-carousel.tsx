"use client";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { Project } from "@/constants/projects";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ProjectsCarouselProps = {
  projects: Project[];
};

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
      setSlideCount(api.scrollSnapList().length);
    };

    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <div className="relative px-12 md:px-16">
          <CarouselContent className="-ml-3 md:-ml-4">
            {projects.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-3 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard project={project} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous project"
            onClick={() => api?.scrollPrev()}
            className="absolute left-0 top-1/2 z-20 h-11 w-11 -translate-y-1/2 rounded-full border-2 border-gray-200 bg-white text-gray-900 shadow-lg hover:bg-gray-50 hover:text-gray-900"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next project"
            onClick={() => api?.scrollNext()}
            className="absolute right-0 top-1/2 z-20 h-11 w-11 -translate-y-1/2 rounded-full border-2 border-gray-200 bg-white text-gray-900 shadow-lg hover:bg-gray-50 hover:text-gray-900"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </Carousel>

      {slideCount > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={`project-slide-${index}`}
              type="button"
              aria-label={`Go to project slide ${index + 1}`}
              aria-current={current === index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300",
                current === index
                  ? "w-8 bg-gray-900"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
