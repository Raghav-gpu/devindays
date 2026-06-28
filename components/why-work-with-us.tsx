import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    title: "Strictly Capped Bandwidth",
    description:
      "We cap our engineering pod at 6 active deployments per month. This ensures our Lead Engineer maintains strict oversight over code reviews, architecture, and flawless delivery.",
  },
  {
    title: "We think like founders",
    description: "We help you decide what not to build.",
  },
  {
    title: "Speed without shortcuts",
    description: "Fast builds, but production-ready code.",
  },
  {
    title: "You talk directly to builders",
    description: "No account managers. No miscommunication.",
  },
];

export function WhyWorkWithUs() {
  return (
    <section id="why-us" className="py-28 px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Why Founders Choose DevInDays
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-normal text-gray-900">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 font-light leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
