"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Sparkles, Star } from "lucide-react"

export function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const projects = [
   {
      name: "Bykea",
      description: "Multi-purpose ride and delivery service with integrated booking and payment system.",
      buildTime: "",
      featured: false,
      screenshots: ["/bykea-01.webp", "/bykea-02.webp"],
    },
    {
      name: "FocusFlow",
      description: "Productivity app with Google Calendar sync, AI task assistant, and social accountability.",
      buildTime: "Built in 18 days",
      featured: true,
      googlePlayLink: "https://play.google.com/store/apps/details?id=com.focusflow.focus",
      screenshots: ["/focusflow_01.png", "/focusflow_02.png"],
    },
        {
      name: "Moms Into Fitness",
      description: "Fitness app focused on postpartum workouts and structured health programs for new mothers.",
      buildTime: "",
      featured: false,
      screenshots: ["/mom-into-fitness-01.webp", "/mom-into-fitness-02.webp"],
    },
        {
      name: "Baby Monitor 3G",
      description:
        "BABY MONITOR 3G is a universal video and audio baby monitor for your phone, tablet, or computer. Hear every noise, stream live video, and soothe your child remotely.",
      buildTime: "",
      featured: false,
      screenshots: [
        "/baby_01.webp", // Save your first image as this in /public
        "/baby_02.webp", // Save your second image as this in /public
      ],
    },
    {
      name: "Buddy – Money Budget Planner",
      description: "Simplifies monthly financial tracking and spending insights. Helps users stay on budget.",
      buildTime: "",
      featured: false,
      screenshots: ["/buddy-01.webp", "/buddy-02.webp"],
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextSlide, 6000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  type ProjectWithIndex = (typeof projects)[number] & { index: number }

  const getVisibleProjects = (): ProjectWithIndex[] => {
    if (typeof window === "undefined") return [{ ...projects[0], index: 0 }]

    const visibleCount = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
    const visible: ProjectWithIndex[] = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % projects.length
      visible.push({ ...projects[index], index })
    }
    return visible
  }

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-brand-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-brand-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-brand-300/30 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-brand-200 text-brand-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg">
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4" />
            Real Projects, Real Results
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Apps That <span className="text-brand-400">Actually Work</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            See what we've built for founders like you. Real apps, real users, real success stories.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-1 sm:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md shadow-xl border-0 hover:bg-white hover:scale-110 transition-all duration-300 rounded-full h-8 w-8 sm:h-10 sm:w-10 touch-manipulation"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-1 sm:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md shadow-xl border-0 hover:bg-white hover:scale-110 transition-all duration-300 rounded-full h-8 w-8 sm:h-10 sm:w-10 touch-manipulation"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden mx-2 sm:mx-4 lg:mx-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8 px-2 sm:px-4">
              {getVisibleProjects().map((project, index) => (
                <div key={`${project.index}-${index}`} className="relative group h-full">
                  {/* Animated Border Container */}
                  <div
                    className={`absolute -inset-1 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-500 ${
                      project.featured ? "bg-brand-400 animate-pulse" : "bg-gray-300 opacity-0 group-hover:opacity-50"
                    }`}
                  ></div>

                  <Card
                    className={`relative h-full flex flex-col border-2 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                      project.featured
                        ? "bg-brand-50 border-brand-300"
                        : "bg-white/95 backdrop-blur-sm border-gray-200 hover:border-brand-300"
                    }`}
                  >
                    {/* Featured Tag */}
                    {project.featured && (
                      <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 z-10">
                        <Badge className="bg-orange-500 text-white border-0 shadow-lg px-2 sm:px-3 py-1 text-xs font-bold rounded-full animate-pulse">
                          <Star className="w-2 sm:w-3 h-2 sm:h-3 mr-1" />
                          FEATURED
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="pb-3 sm:pb-4 flex-shrink-0 p-4 sm:p-6">
                      <CardTitle
                        className={`text-lg sm:text-xl font-bold transition-colors ${
                          project.featured ? "text-brand-700" : "text-gray-900 group-hover:text-brand-400"
                        }`}
                      >
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base leading-relaxed text-gray-600 min-h-[3rem]">
                        {project.description}
                      </CardDescription>
                      {project.buildTime && (
                        <Badge
                          variant="secondary"
                          className={`w-fit mt-2 sm:mt-3 text-xs ${
                            project.featured
                              ? "bg-brand-200 text-brand-700 border-brand-300"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {project.buildTime}
                        </Badge>
                      )}
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col p-4 sm:p-6 pt-0">
                      {/* Screenshots */}
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 flex-1">
                        {project.screenshots.slice(0, 2).map((screenshot, screenshotIndex) => (
                          <div
                            key={screenshotIndex}
                            className="aspect-[9/16] bg-gray-100 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300"
                          >
                            <img
                              src={screenshot || "/placeholder.svg"}
                              alt={`${project.name} screenshot ${screenshotIndex + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        ))}
                      </div>

                      {/* Download Button - Only for FocusFlow */}
                      {project.googlePlayLink && (
                        <div className="mt-auto">
                          <button
                            onClick={() => window.open(project.googlePlayLink, "_blank")}
                            className="w-full hover:scale-105 transition-transform duration-300 touch-manipulation"
                          >
                            <img
                              src="/google-play-badge.png"
                              alt="Get it on Google Play"
                              className="h-10 sm:h-12 w-auto mx-auto"
                            />
                          </button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${
                  index === currentIndex ? "bg-brand-400 w-6 sm:w-8 shadow-lg" : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Live Demo Note */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <div className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-brand-50 border border-brand-300/50 shadow-lg backdrop-blur-sm">
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-brand-400 rounded-full mr-3 sm:mr-4 animate-pulse"></div>
            <p className="text-gray-700 font-medium text-base sm:text-lg">Live demo of apps available on request</p>
          </div>
        </div>
      </div>
    </section>
  )
}
