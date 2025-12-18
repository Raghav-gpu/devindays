"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Moms Into Fitness",
    description: "Fitness app focused on postpartum workouts and structured health programs for new mothers.",
    badge: null,
    featured: false,
    playStore: null,
    images: [
      "/mom-into-fitness-01.webp",
      "/mom-into-fitness-02.webp",
    ],
  },
  {
    title: "Baby Monitor 3G",
    description: "Universal video and audio baby monitor for your phone, tablet, or computer. Hear every noise, stream live video, and soothe your child remotely.",
    badge: null,
    featured: false,
    playStore: null,
    images: [
      "/baby_01.webp",
      "/baby_02.webp",
    ],
  },
  {
    title: "Buddy – Money Budget Planner",
    description: "Simplifies monthly financial tracking and spending insights. Helps users stay on budget.",
    badge: null,
    featured: false,
    playStore: null,
    images: [
      "/buddy-01.webp",
      "/buddy-02.webp",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Real Products We've Shipped
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            See what we've built for founders like you. Real apps, real users, real success stories.
          </p>
        </div>

        <div className="relative px-8 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-300 hover:shadow-2xl bg-white h-full shadow-lg">
                    <div className="relative w-full bg-gray-50 overflow-hidden">
                      <div className="flex gap-3 p-6">
                        {project.images.map((image, imgIndex) => (
                          <div key={imgIndex} className="flex-1 relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg border border-gray-200">
                            <Image
                              src={image}
                              alt={`${project.title} screenshot ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 50vw, 33vw"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl font-normal mb-2 text-gray-900">
                            {project.title}
                          </CardTitle>
                          {project.badge && (
                            <Badge variant="secondary" className="mt-2 font-light bg-gray-100 text-gray-900 border-gray-200">
                              {project.badge}
                            </Badge>
                          )}
                        </div>
                        {project.featured && (
                          <Badge variant="outline" className="font-light text-gray-900 border-gray-300">FEATURED</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600 mb-4 font-light leading-relaxed">
                        {project.description}
                      </CardDescription>
                      {project.playStore && (
                        <a
                          href={project.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-2"
                        >
                          <Image
                            src="/google-play-badge.png"
                            alt="Get it on Google Play"
                            width={150}
                            height={45}
                            className="h-10 w-auto"
                          />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12 bg-white/95 hover:bg-white border-gray-300 shadow-xl hover:shadow-2xl transition-all" />
            <CarouselNext className="right-0 md:-right-12 bg-white/95 hover:bg-white border-gray-300 shadow-xl hover:shadow-2xl transition-all" />
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-600 italic font-light">
            Live demo of apps available on request
          </p>
        </div>
      </div>
    </section>
  );
}
