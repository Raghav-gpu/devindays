import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Discovery & Scope",
    duration: "2–3 days",
    description: "We break your idea into core MVP features, nice-to-haves, and launch-ready version.",
    deliverables: [
      "Feature list",
      "Timeline",
      "Fixed quote",
    ],
    note: "No surprises later.",
  },
  {
    number: "2",
    title: "Design & Architecture",
    duration: null,
    description: "Clean UI aligned with your users. Scalable app architecture (even for MVPs).",
    deliverables: [
      "UI designs",
      "Tech decisions explained in plain English",
      "Architecture plan",
    ],
    note: null,
  },
  {
    number: "3",
    title: "Development",
    duration: "2–3 weeks",
    description: "Weekly progress updates, clear milestones, feedback loop built-in.",
    deliverables: [
      "Weekly updates",
      "Clear milestones",
      "What's done, what's next, what's launching",
    ],
    note: "You always know where things stand.",
  },
  {
    number: "4",
    title: "Testing & Launch",
    duration: null,
    description: "Internal testing, bug fixes, App Store & Play Store support.",
    deliverables: [
      "Thorough testing",
      "Bug fixes",
      "Store submission support",
    ],
    note: null,
  },
  {
    number: "5",
    title: "Post-Launch Support",
    duration: null,
    description: "Help with fixes, guidance on next version, you own 100% of the code.",
    deliverables: [
      "Fix support",
      "Next version guidance",
      "Full code ownership",
    ],
    note: null,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 lg:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Our Proven Build Process
          </h2>
          <p className="text-xl text-gray-600 font-light">
            Clear steps. No surprises. Real progress.
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-200"></div>
            
            <div className="grid grid-cols-5 gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-gray-900 border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-white text-sm font-light">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Card */}
                  <Card className="mt-8 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl bg-white shadow-md">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg font-normal text-gray-900 mb-1">
                        {step.title}
                      </CardTitle>
                      {step.duration && (
                        <p className="text-xs text-gray-500 font-light">
                          {step.duration}
                        </p>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 font-light leading-relaxed mb-3">
                        {step.description}
                      </p>
                      <div className="space-y-1.5">
                        {step.deliverables.slice(0, 2).map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-2">
                            <span className="text-gray-900 text-xs mt-0.5">✓</span>
                            <span className="text-xs text-gray-700 font-light">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-0">
                    <div className="w-8 h-8 rounded-full bg-gray-900 border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-white text-sm font-light">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Card */}
                  <Card className="border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl bg-white shadow-md">
                    <CardHeader>
                      <div className="flex items-baseline gap-3 mb-2">
                        <CardTitle className="text-xl font-normal text-gray-900">
                          {step.title}
                        </CardTitle>
                        {step.duration && (
                          <span className="text-sm text-gray-500 font-light">
                            ({step.duration})
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base text-gray-600 font-light mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="space-y-2">
                        {step.deliverables.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-2">
                            <span className="text-gray-900 mt-1">✓</span>
                            <span className="text-gray-700 font-light text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                      {step.note && (
                        <p className="text-sm text-gray-500 font-light italic mt-3">
                          {step.note}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
