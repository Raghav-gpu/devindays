import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Code, Shield, DollarSign, Globe } from "lucide-react"

export function WhyWorkWithUs() {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-brand-400" />,
      title: "Fast delivery",
      description: "7 to 21 days",
    },
    {
      icon: <Code className="h-8 w-8 text-brand-400" />,
      title: "Clean, scalable code",
      description: "Built for growth",
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-400" />,
      title: "Full code ownership",
      description: "& post-launch support",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-brand-400" />,
      title: "Transparent pricing",
      description: "No hidden costs",
    },
    {
      icon: <Globe className="h-8 w-8 text-brand-400" />,
      title: "Trusted globally",
      description: "By founders worldwide",
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-brand-200">
              <CardHeader>
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
