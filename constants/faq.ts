export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "How much does an MVP usually cost?",
    answer:
      "Cost depends on complexity. We scope your idea and provide a fixed quote within 24 hours.",
  },
  {
    question: "What if I want changes mid-way?",
    answer:
      "We build in feedback loops. Minor tweaks are included. Major scope changes are discussed upfront with timeline and cost adjustments.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. 100% ownership. We hand over all code, assets, and documentation. No vendor lock-in, ever.",
  },
  {
    question: "Do you provide backend?",
    answer:
      "Yes. For full app development, we build complete backends with APIs, databases, and integrations. MVPs can start with simpler setups.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Post-launch support is included. We help with fixes, answer questions, and guide you on next steps. You own everything, so you can scale with us or take it elsewhere.",
  },
  {
    question: "Can you scale the app later?",
    answer:
      "Absolutely. We build scalable architecture from day one. When you're ready to grow, we can add features, optimize performance, and scale infrastructure.",
  },
];
