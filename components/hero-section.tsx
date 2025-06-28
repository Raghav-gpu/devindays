"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Sparkles } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-brand-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-brand-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-80 h-40 sm:h-80 bg-brand-300/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-brand-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-brand-100 text-brand-700 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 shadow-lg backdrop-blur-sm border border-brand-200/50">
            <Zap className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
            Fast App Development for Founders
            <Sparkles className="w-3 sm:w-4 h-3 sm:h-4 ml-2" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
            We Build Apps for Founders. <span className="text-brand-400">Fast.</span>
          </h1>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
            Get a fully functional cross-platform app in 2–3 weeks — starting at $799. Ideal for MVPs, startups, and
            small businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-brand-400 hover:bg-brand-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 touch-manipulation"
              onClick={() => scrollToSection("contact")}
            >
              Get a Quote
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white/80 backdrop-blur-sm border-2 border-brand-300 hover:bg-white hover:border-brand-400 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 touch-manipulation"
              onClick={() => window.open("https://calendly.com/raghavv-kaushik/30min", "_blank")}
            >
              Book Free Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
