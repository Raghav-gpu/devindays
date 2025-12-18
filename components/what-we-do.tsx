import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "MVP Development",
    description: "Fast builds to validate your idea. Cross-platform apps, clean design, and full code ownership.",
  },
  {
    title: "Full App Development",
    description: "Complete apps with backend, APIs, and integrations. Built to scale with your business.",
  },
  {
    title: "Product Strategy",
    description: "Clarity on scope, features, and approach. We help you build the right thing, not just build fast.",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-28 px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            How We Usually Help
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-normal text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 font-light leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
