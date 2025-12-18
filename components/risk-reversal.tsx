import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const guarantees = [
  "Full code ownership",
  "Clear milestones",
  "Regular updates",
  "No vendor lock-in",
  "Post-launch support included",
];

export function RiskReversal() {
  return (
    <section className="py-28 px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            No-Nonsense Guarantees
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            We remove the risks that keep founders up at night.
          </p>
        </div>

        <Card className="border-gray-200 bg-white shadow-xl">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-6">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-900 font-light">{guarantee}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 font-light italic">
                If we miss agreed milestones, we compensate with free support time.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
