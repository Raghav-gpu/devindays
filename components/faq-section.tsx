"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does an MVP usually cost?",
    answer: "Most MVPs start at ₹40,000, depending on complexity. We scope your idea and provide a fixed quote within 24 hours.",
  },
  {
    question: "What if I want changes mid-way?",
    answer: "We build in feedback loops. Minor tweaks are included. Major scope changes are discussed upfront with timeline and cost adjustments.",
  },
  {
    question: "Who owns the code?",
    answer: "You do. 100% ownership. We hand over all code, assets, and documentation. No vendor lock-in, ever.",
  },
  {
    question: "Do you provide backend?",
    answer: "Yes. For full app development, we build complete backends with APIs, databases, and integrations. MVPs can start with simpler setups.",
  },
  {
    question: "What happens after launch?",
    answer: "Post-launch support is included. We help with fixes, answer questions, and guide you on next steps. You own everything, so you can scale with us or take it elsewhere.",
  },
  {
    question: "Can you scale the app later?",
    answer: "Absolutely. We build scalable architecture from day one. When you're ready to grow, we can add features, optimize performance, and scale infrastructure.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Common questions from founders like you
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:border-gray-300 transition-all bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 id={`faq-question-${index}`} className="text-lg font-normal text-gray-900 pr-8">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  {openIndex === index && (
                    <div id={`faq-answer-${index}`} className="mt-4 text-gray-600 font-light leading-relaxed" role="region" aria-labelledby={`faq-question-${index}`}>
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
