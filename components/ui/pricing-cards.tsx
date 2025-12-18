import { Check, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Pricing() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-light text-gray-900">
              Pricing
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-gray-600 max-w-2xl text-center font-light">
              Clear pricing. No surprises. Most projects fall into one of the options below.
            </p>
          </div>
          <div className="grid pt-20 text-left grid-cols-1 md:grid-cols-3 w-full gap-6 max-w-6xl mx-auto">
            {/* MVP Build */}
            <Card className="w-full rounded-md border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-900 font-normal text-xl mb-2">
                  MVP Build
                </CardTitle>
                <CardDescription className="font-light text-gray-600 text-sm">
                  For founders launching their first version
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6 justify-start">
                  <p className="flex flex-row items-baseline gap-2">
                    <span className="text-4xl font-light text-gray-900">₹40,000</span>
                    <span className="text-sm text-gray-500 font-light">
                      starting
                    </span>
                  </p>
                  <div className="flex flex-col gap-3 justify-start">
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Cross-platform mobile app (iOS + Android)</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Core MVP features only (no bloat)</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Clean, production-ready codebase</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">2–3 week delivery</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Full code ownership</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-gray-500 font-light mb-4">
                      <span className="font-medium text-gray-700">Best for:</span> validating ideas, early users, demos, first launch
                    </p>
                  </div>
                  <Button variant="outline" className="gap-2 font-light text-gray-900 border-gray-300 hover:bg-gray-50 w-full" asChild>
                    <Link href="https://wa.me/919354120990" target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp to build your MVP">
                      Build My MVP <MoveRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Full App Build */}
            <Card className="w-full rounded-md border-2 border-gray-900 hover:border-gray-900 transition-all duration-300 hover:shadow-2xl bg-white shadow-xl relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gray-900 text-white font-light text-xs px-3 py-1">
                  Most Popular
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-gray-900 font-normal text-xl mb-2">
                  Full App Build
                </CardTitle>
                <CardDescription className="font-light text-gray-600 text-sm">
                  For founders ready to scale beyond MVP
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6 justify-start">
                  <p className="flex flex-row items-baseline gap-2">
                    <span className="text-4xl font-light text-gray-900">₹80,000</span>
                    <span className="text-sm text-gray-500 font-light">
                      starting
                    </span>
                  </p>
                  <div className="flex flex-col gap-3 justify-start">
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Everything in MVP, plus</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Backend & APIs</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Authentication, roles & integrations</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Scalable architecture</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Post-launch support</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-gray-500 font-light mb-4">
                      <span className="font-medium text-gray-700">Best for:</span> real users, payments, dashboards, growth
                    </p>
                  </div>
                  <Button className="gap-2 font-light bg-gray-900 hover:bg-gray-800 text-white w-full" asChild>
                    <Link href="https://wa.me/919354120990" target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp to get a project quote">
                      Get a Project Quote <MoveRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Advanced / Custom Systems */}
            <Card className="w-full rounded-md border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-gray-900 font-normal text-xl mb-2">
                  Advanced / Custom Systems
                </CardTitle>
                <CardDescription className="font-light text-gray-600 text-sm">
                  For complex workflows and AI-powered products
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-6 justify-start">
                  <p className="flex flex-row items-baseline gap-2">
                    <span className="text-4xl font-light text-gray-900">Custom</span>
                    <span className="text-sm text-gray-500 font-light">
                      pricing
                    </span>
                  </p>
                  <div className="flex flex-col gap-3 justify-start">
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">AI features & automations</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Admin panels & dashboards</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Web + mobile systems</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Advanced integrations</p>
                    </div>
                    <div className="flex flex-row gap-3">
                      <Check className="w-4 h-4 mt-0.5 text-gray-900 flex-shrink-0" />
                      <p className="font-light text-gray-700 text-sm">Long-term scalability planning</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-gray-500 font-light mb-4">
                      <span className="font-medium text-gray-700">Best for:</span> internal tools, AI products, complex platforms
                    </p>
                  </div>
                  <Button variant="outline" className="gap-2 font-light text-gray-900 border-gray-300 hover:bg-gray-50 w-full" asChild>
                    <Link href="https://wa.me/919354120990" target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp to discuss your requirements">
                      Discuss My Requirements <MoveRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="pt-12 text-center space-y-4">
            <p className="text-sm text-gray-500 font-light max-w-2xl mx-auto">
              We take on a limited number of projects each month to ensure quality and timelines don't slip.
            </p>
            <div className="flex justify-center mt-6">
              <Badge className="bg-gray-900 text-white font-light text-sm px-6 py-2 rounded-full">
                25+ apps delivered in 12 months
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Pricing };
