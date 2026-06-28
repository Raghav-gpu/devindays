import { Card } from "@/components/ui/card";
import { faqs } from "@/constants/faq";

function FaqChevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0 text-gray-600 transition-transform duration-200 group-open:rotate-180"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-[#FAFAFA] px-6 py-28 lg:px-8" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <div className="mb-20 text-center">
          <h2 id="faq-heading" className="mb-4 text-4xl font-light text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg font-light text-gray-600">
            Common questions from founders like you
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={faq.question}
              className="border-gray-200 bg-white transition-all hover:border-gray-300"
            >
              <details className="group" open={index === 0}>
                <summary className="block cursor-pointer list-none p-6 [&::-webkit-details-marker]:hidden">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      id={`faq-question-${index}`}
                      className="pr-8 text-lg font-normal text-gray-900"
                    >
                      {faq.question}
                    </h3>
                    <FaqChevron />
                  </div>
                </summary>
                <div
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 leading-relaxed font-light text-gray-600"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  {faq.answer}
                </div>
              </details>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
