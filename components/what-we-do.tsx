import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Smartphone, Palette, MessageSquare, Lightbulb } from "lucide-react"

export function WhatWeDo() {
  const services = [
    {
      icon: <Lightbulb className="h-8 w-8 text-brand-400" />,
      title: "MVP Development",
      description: "Fast builds to validate your idea",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-brand-400" />,
      title: "Full App Development",
      description: "Cross-platform apps with backend/API",
    },
    {
      icon: <Palette className="h-8 w-8 text-brand-400" />,
      title: "UI/UX Design",
      description: "Clean, intuitive interfaces",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-brand-400" />,
      title: "Product Consulting",
      description: "Get clarity before you build",
    },
  ]

  return (
    <section id="what-we-do" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We help founders turn ideas into real products — quickly, affordably, and without wasting time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-brand-200">
              <CardHeader>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
