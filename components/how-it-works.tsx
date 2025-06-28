import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Cog, Rocket } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: <MessageCircle className="h-8 w-8 text-brand-400" />,
      title: "Share your idea",
      description: "Tell us about your vision and requirements",
    },
    {
      number: "2",
      icon: <Cog className="h-8 w-8 text-brand-400" />,
      title: "We scope & start building",
      description: "We plan the project and begin development",
    },
    {
      number: "3",
      icon: <Rocket className="h-8 w-8 text-brand-400" />,
      title: "You launch in 2–3 weeks",
      description: "Your app is ready for users",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-2xl text-brand-400 font-semibold">Simple. Fast. Done.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center relative border-brand-200">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-400 text-white rounded-full flex items-center justify-center font-bold">
                  {step.number}
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{step.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
