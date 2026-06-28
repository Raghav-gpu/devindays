"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { faqs } from "@/constants/faq";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3
                      id={`faq-question-${index}`}
                      className="pr-8 text-lg font-normal text-gray-900"
                    >
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray-600 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  {openIndex === index && (
                    <div
                      id={`faq-answer-${index}`}
                      className="mt-4 leading-relaxed font-light text-gray-600"
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                    >
                      {faq.answer}
                    </div>
                  )}
                </CardContent>
              </button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
