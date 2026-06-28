import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const founderTypes = [
  {
    title: "Domain Experts & Operators",
    description:
      "You know your industry, we know the architecture. We translate your business requirements into scalable technical infrastructure.",
  },
  {
    title: "Funded & Bootstrapped Startups",
    description:
      "You need market validation without sacrificing the codebase. We build MVPs on robust foundations (Node.js/Supabase) so you don't have to rewrite everything when you scale.",
  },
  {
    title: "Scaling Platforms",
    description:
      "You need reliable execution, not daily micromanagement. We operate on strict sprint cycles with transparent CI/CD pipelines and clear delivery milestones.",
  },
];

export function WhoThisIsFor() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Built Specifically for Founders Like You
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {founderTypes.map((type, index) => (
            <Card key={index} className="border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl bg-white shadow-md">
              <CardHeader>
                <CardTitle className="text-xl font-normal text-gray-900">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 font-light leading-relaxed">
                  {type.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
