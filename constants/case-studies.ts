export type CaseStudy = {
  id: string;
  name: string;
  tagline: string;
  timelineBadge: string;
  headline: string;
  description: string;
  metrics: Array<{ label: string; value: string }>;
  features: string[];
  mockup: string;
  accentColor: string;
  platforms: string[];
  playStoreUrl?: string;
  appStoreUrl?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "homeyfixit",
    name: "HomeyFixIt",
    tagline:
      "On-demand home services platform connecting homeowners with trusted local professionals for repairs, maintenance, and everyday services.",
    timelineBadge: "Built in 24 days",
    headline: "Built a production-ready home services marketplace",
    description:
    "HomeyFixIt is a home services platform with customer and provider apps, real-time booking, live tracking, secure payments, and an intuitive experience for homeowners and professionals.",
    metrics: [
      { label: "Platform", value: "Android / iOS" },
      { label: "Timeline", value: "24 days" },
      { label: "Scope", value: "Marketplace MVP" },
    ],
    features: [
      "Customer & Provider Apps",
      "Real-time Booking & Tracking",
      "Secure Online Payments",
      "Live Location & Notifications",
    ],
    mockup: "/mockups/mockup-01.webp",
    accentColor: "rgba(249, 115, 22, 0.18)",
    platforms: ["Android", "iOS", "Flutter", "Firebase", "Live"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.homeyfixit.customer",
  },

  {
    id: "makemyjodi",
    name: "MakeMyJodi",
    tagline:
      "Modern matrimony platform helping individuals and families find meaningful lifelong relationships through trusted matchmaking.",
    timelineBadge: "Built in 21 days",
    headline: "A modern matchmaking platform built for meaningful connections",
    description:
      "MakeMyJodi streamlines the matchmaking journey with verified profiles, intelligent search, personalized recommendations, secure messaging, and privacy-focused features. Built to modernize traditional matrimony with a clean, scalable mobile experience.",
    metrics: [
      { label: "Platform", value: "Android / iOS" },
      { label: "Timeline", value: "21 days" },
      { label: "Scope", value: "Matrimonial Platform" },
    ],
    features: [
      "Verified User Profiles",
      "Advanced Match Discovery",
      "Secure Chat & Interests",
      "Privacy-first Experience",
    ],
    mockup: "/mockups/mockup-02.webp",
    accentColor: "rgba(236, 72, 153, 0.18)",
    platforms: ["Android", "iOS", "Flutter", "Firebase", "Live"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.makemyjodi.app",
  },

  {
    id: "sailor-delivery",
    name: "Sailor Delivery",
    tagline:
      "Hyperlocal delivery platform connecting customers, riders, and businesses through fast and reliable last-mile logistics.",
    timelineBadge: "Built in 28 days",
    headline: "A scalable delivery ecosystem for modern businesses",
    description:
      "Sailor Delivery includes dedicated Customer, Rider, and Admin applications with live order tracking, rider earnings, wallet management, notifications, route optimization, and delivery management. Built to support high-volume logistics with a smooth user experience.",
    metrics: [
      { label: "Platform", value: "Android / iOS" },
      { label: "Timeline", value: "28 days" },
      { label: "Scope", value: "Delivery Platform" },
    ],
    features: [
      "Real-time Order Tracking",
      "Rider Earnings & Wallet",
      "Delivery Management",
      "Admin Dashboard",
    ],
    mockup: "/mockups/mockup-03.webp",
    accentColor: "rgba(59, 130, 246, 0.18)",
    platforms: ["Android", "iOS", "Flutter", "Firebase", "Live"],
    // Add the official Play Store URL once the app is published.
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sailor.customer",
  },
];