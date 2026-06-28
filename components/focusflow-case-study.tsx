import { Badge } from "@/components/ui/badge";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/constants/case-studies";

export function FocusFlowCaseStudy() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 font-light text-gray-900 border-gray-300">
            Case Studies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Apps we shipped fast
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Real products built for founders — from MVP to live users.
          </p>
        </div>

        <div className="space-y-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
