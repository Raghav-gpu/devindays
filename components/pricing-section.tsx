"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star } from "lucide-react"

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const plans = [
    {
      name: "MVP Launch",
      price: "$799",
      description: "For early-stage validation and demos.",
      popular: true,
      features: [
        "Cross-platform mobile app (Flutter)",
        "Up to 5 key screens",
        "Clean UI (based on references)",
        "Firebase/static backend",
        "Basic auth, forms, logic",
        "7–10 day delivery",
        "1 round of revisions",
        "7 days post-launch support",
        "Full code ownership",
      ],
      cta: "Start With MVP",
    },
    {
      name: "Standard Build",
      price: "$1,999",
      description: "For launching to real users.",
      popular: false,
      features: [
        "Custom-designed mobile app",
        "Up to 12 screens",
        "Auth, APIs, logic flows",
        "Firebase or custom backend",
        "Third-party integrations",
        "2–3 week delivery",
        "2 revision rounds",
        "14 days post-launch support",
        "Full code ownership",
      ],
      cta: "Go With Standard",
    },
    {
      name: "Custom Build",
      price: "Quote-Based",
      description: "For complex, scalable products.",
      popular: false,
      features: [
        "Web + mobile apps",
        "Dashboards, admin panels",
        "Role-based features, real-time systems",
        "Scalable backend & custom infrastructure",
        "Long-term support available",
      ],
      cta: "Get Custom Quote",
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for speed, clarity, and real outcomes. Choose what fits your stage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-brand-400 shadow-lg scale-105" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-400 text-white">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold text-brand-400 my-4">{plan.price}</div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-brand-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} onClick={scrollToContact}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
