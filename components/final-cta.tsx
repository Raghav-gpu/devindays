"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-400">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to launch? Let's build your app.</h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" variant="secondary" className="px-8 py-3 text-lg" onClick={scrollToContact}>
            Get a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-3 text-lg bg-transparent text-white border-white hover:bg-white hover:text-brand-400"
            onClick={() => window.open("https://calendly.com/raghavv-kaushik/30min", "_blank")}
          >
            Book Free Call
          </Button>
        </div>
      </div>
    </section>
  )
}
