import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {

  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Get a Quote
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Tell us about your project. We'll send you a quote within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-gray-200 bg-white shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-normal text-gray-900 mb-2">
                Let's Discuss Your Project
              </CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Get a clear quote and timeline. No surprises, no vendor lock-in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Quick Response</p>
                    <p className="text-sm text-gray-600 font-light">
                      We'll get back to you within 2-4 hours during business hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Clear Quote</p>
                    <p className="text-sm text-gray-600 font-light">
                      Detailed breakdown of scope, timeline, and pricing within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-1">Direct Access</p>
                    <p className="text-sm text-gray-600 font-light">
                      Talk directly with the builder, not a sales team
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <Button
                  size="lg"
                  className="w-full bg-gray-900 text-white hover:bg-gray-800 text-lg py-6"
                  asChild
                >
                  <a
                    href="https://wa.link/fvdzf3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open WhatsApp to talk about your project"
                  >
                    Talk on WhatsApp
                  </a>
                </Button>
                <p className="text-center text-sm text-gray-500 font-light mt-4">
                  Or email us at{" "}
                  <a href="mailto:raghav@vaydenfoundry.com" className="text-gray-900 hover:underline">
                    raghav@vaydenfoundry.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
