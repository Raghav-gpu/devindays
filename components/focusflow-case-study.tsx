import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const metrics = [
  { label: "Platform", value: "Android / iOS" },
  { label: "Timeline", value: "18 days" },
  { label: "Scope", value: "MVP → Live users" },
];

export function FocusFlowCaseStudy() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 font-light text-gray-900 border-gray-300">
            Featured Case Study
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            FocusFlow
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Productivity app with Google Calendar sync, AI task assistant, and social accountability.
          </p>
        </div>

        <Card className="border-gray-200 overflow-hidden hover:border-gray-300 transition-all duration-300 shadow-2xl bg-white">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left: Screenshots */}
            <div className="relative bg-gray-50 p-8 md:p-12">
              <div className="flex gap-4 justify-center">
                {["/focusflow_01.png", "/focusflow_02.png"].map((image, index) => (
                  <div key={index} className="relative aspect-[9/16] w-32 md:w-40 rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200 transform hover:scale-105 transition-transform duration-300">
                    <Image
                      src={image}
                      alt={`FocusFlow screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 160px, 200px"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <Badge variant="secondary" className="mb-3 font-light bg-gray-100 text-gray-900 border-gray-200">
                  Built in 18 days
                </Badge>
                <h3 className="text-2xl font-normal text-gray-900 mb-4">
                  From idea to live users in 18 days
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  A complete productivity app with Google Calendar integration, AI-powered task assistance, 
                  and social accountability features. Shipped to production with real users.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <p className="text-xs text-gray-500 font-light mb-1">{metric.label}</p>
                    <p className="text-sm font-normal text-gray-900">{metric.value}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <p className="text-sm font-medium text-gray-900 mb-2">Key Features:</p>
                <div className="space-y-2">
                  {["Google Calendar sync", "AI task assistant", "Social accountability", "Cross-platform"].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-gray-900 text-sm">✓</span>
                      <span className="text-sm text-gray-700 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div>
                <a
                  href="https://play.google.com/store/apps/details?id=com.focusflow.focus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Image
                    src="/google-play-badge.png"
                    alt="Get it on Google Play"
                    width={150}
                    height={45}
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
