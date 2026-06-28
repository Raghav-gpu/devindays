export type CaseStudy = {
  id: string;
  name: string;
  tagline: string;
  timelineBadge: string;
  headline: string;
  description: string;
  metrics: Array<{ label: string; value: string }>;
  features: string[];
  screenshots: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
};

const focusFlowCaseStudy: Omit<CaseStudy, "id"> = {
  name: "FocusFlow",
  tagline:
    "Productivity app with Google Calendar sync, AI task assistant, and social accountability.",
  timelineBadge: "Built in 18 days",
  headline: "From idea to live users in 18 days",
  description:
    "A complete productivity app with Google Calendar integration, AI-powered task assistance, and social accountability features. Shipped to production with real users.",
  metrics: [
    { label: "Platform", value: "Android / iOS" },
    { label: "Timeline", value: "18 days" },
    { label: "Scope", value: "MVP → Live users" },
  ],
  features: [
    "Google Calendar sync",
    "AI task assistant",
    "Social accountability",
    "Cross-platform",
  ],
  screenshots: ["/focusflow_01.png", "/focusflow_02.png"],
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.focusflow.focus",
};

export const caseStudies: CaseStudy[] = [
  { id: "focusflow-1", ...focusFlowCaseStudy },
  { id: "focusflow-2", ...focusFlowCaseStudy },
  { id: "focusflow-3", ...focusFlowCaseStudy },
];
