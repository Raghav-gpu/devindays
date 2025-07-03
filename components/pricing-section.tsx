"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
        <p className="text-xl text-gray-600 mb-8">
          Tailored. Transparent. Built for Impact.
        </p>
        <p className="text-lg text-gray-700 mb-12">
          We offer custom solutions based on what you're building—whether it's a fast MVP or a scalable product powered by AI.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 text-left">
          <Card className="shadow-lg border-brand-100 hover:shadow-2xl transition">
            <CardHeader>
              <CardTitle className="text-brand-700">MVPs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Rapid builds to validate your idea and demo to investors.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-brand-100 hover:shadow-2xl transition">
            <CardHeader>
              <CardTitle className="text-brand-700">Full App Development</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Custom-designed cross-platform apps with backend, APIs, and integrations.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-brand-100 hover:shadow-2xl transition">
            <CardHeader>
              <CardTitle className="text-brand-700">AI-Powered Features</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Integrate AI chat, image analysis, recommendation systems, automation, and more.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="shadow-lg border-brand-100 hover:shadow-2xl transition">
            <CardHeader>
              <CardTitle className="text-brand-700">Advanced Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Web dashboards, admin panels, role-based access, real-time sync, and analytics.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="mb-8">
          <p className="text-base text-gray-600">
            <span className="font-semibold text-brand-700">No rigid packages.</span> Just clear, custom pricing.<br />
            We scope your idea, suggest the best approach, and send you a quote — fast.
          </p>
        </div>
        <Button
          size="lg"
          className="bg-brand-400 hover:bg-brand-500 text-white font-semibold px-8 py-4 text-lg"
          onClick={scrollToContact}
        >
          Request a Quote
        </Button>
        <div className="mt-4 text-sm text-gray-500">
          Get a detailed response within <span className="font-semibold text-brand-700">24 hours</span>.
        </div>
      </div>
    </section>
  )
}
