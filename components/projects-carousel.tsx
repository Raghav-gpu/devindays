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
import { cn } from "@/lib/utils";
import WheelGesturesPlugin from "embla-carousel-wheel-gestures";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ProjectsCarouselProps = {
  projects: Project[];
};

function getVisibleRange(current: number, total: number) {
  if (total <= 1) {
    return new Set([0]);
  }

  const prev = (current - 1 + total) % total;
  const next = (current + 1) % total;

  return new Set([prev, current, next]);
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [enableWheelGestures, setEnableWheelGestures] = useState(false);
  const [loadedSlides, setLoadedSlides] = useState<Set<number>>(() => new Set());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateWheelGestures = () => setEnableWheelGestures(mediaQuery.matches);

    updateWheelGestures();
    mediaQuery.addEventListener("change", updateWheelGestures);

    return () => {
      mediaQuery.removeEventListener("change", updateWheelGestures);
    };
  }, []);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        setIsPaused(!entry.isIntersecting);
      },
      { rootMargin: "200px 0px", threshold: 0.1 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

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
    api.on("scroll", onSelect);

    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
      api.off("scroll", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!isVisible || projects.length === 0) {
      return;
    }

    const nearbySlides = getVisibleRange(current, projects.length);

    setLoadedSlides((previous) => {
      let changed = false;
      const next = new Set(previous);

      nearbySlides.forEach((index) => {
        if (!next.has(index)) {
          next.add(index);
          changed = true;
        }
      });

      return changed ? next : previous;
    });
  }, [current, isVisible, projects.length]);

  return (
    <div ref={containerRef} className="relative">
      <div className="relative overflow-hidden">
        <Carousel
          setApi={setApi}
          plugins={
            isPaused || !enableWheelGestures
              ? []
              : [WheelGesturesPlugin({ forceWheelAxis: "x" })]
          }
          opts={{
            align: "center",
            loop: true,
            dragFree: true,
            skipSnaps: true,
            containScroll: false,
            watchDrag: true,
            dragThreshold: 5,
            duration: 25,
          }}
          className="w-full [&_.is-wheel-dragging]:cursor-grabbing"
        >
          <CarouselContent className="-ml-3 py-4 md:-ml-4 md:py-6">
            {projects.map((project, index) => (
              <CarouselItem
                key={project.id}
                className="basis-[92%] pl-3 sm:basis-[88%] md:basis-1/2 md:pl-4 lg:basis-1/3"
              >
                <ProjectCard
                  project={project}
                  shouldLoadImage={loadedSlides.has(index)}
                  priority={false}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous project"
            onClick={() => api?.scrollPrev()}
            className="absolute top-1/2 left-3 z-20 h-10 w-10 -translate-y-1/2 rounded-full border-2 border-gray-200 bg-white/95 text-gray-900 shadow-md backdrop-blur-sm hover:bg-gray-50 hover:text-gray-900 md:left-4 md:h-11 md:w-11"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next project"
            onClick={() => api?.scrollNext()}
            className="absolute top-1/2 right-3 z-20 h-10 w-10 -translate-y-1/2 rounded-full border-2 border-gray-200 bg-white/95 text-gray-900 shadow-md backdrop-blur-sm hover:bg-gray-50 hover:text-gray-900 md:right-4 md:h-11 md:w-11"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </Carousel>
      </div>

      {slideCount > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={`project-slide-${index}`}
              type="button"
              aria-label={`Go to project slide ${index + 1}`}
              aria-current={current === index}
              onClick={() => api?.scrollTo(index)}
              className="inline-flex h-6 w-6 items-center justify-center rounded-full"
            >
              <span
                className={cn(
                  "rounded-full transition-all duration-300",
                  current === index
                    ? "h-2.5 w-8 bg-gray-900"
                    : "h-2.5 w-2.5 bg-gray-300 hover:bg-gray-400"
                )}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
