export type Project = {
  id: string;
  title: string;
  description: string;
  badge?: string | null;
  featured?: boolean;
  playStoreUrl?: string | null;
  appStoreUrl?: string | null;
  images: string[];
};

export const projects: Project[] = [
  {
    id: "krexhe",
    title: "Krexhe",
    description:
      "Workforce intelligence platform connecting companies, HR teams, and students through AI-powered hiring and career insights.",
    badge: "Workforce Intelligence",
    featured: true,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.krexhe.app",
    appStoreUrl: null,
    images: ["/mockups/mockup-04.png"],
  },

  {
    id: "homeyfixit-pro",
    title: "HomeyFixIt Professional",
    description:
      "Dedicated provider app for managing bookings, earnings, schedules, and customer requests.",
    badge: "Home Services Marketplace",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.homeyfixit.vendor",
    appStoreUrl: null,
    images: ["/mockups/mockup-05.png"],
  },

  {
    id: "sailor-rider",
    title: "Sailor Rider",
    description:
      "Delivery partner app with live navigation, order management, rider wallet, and earnings.",
    badge: "Hyperlocal Delivery",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.sailor.rider",
    appStoreUrl: null,
    images: ["/mockups/mockup-06.png"],
  },

  {
    id: "homingo",
    title: "Homingo",
    description:
      "Home services marketplace for booking trusted local professionals with real-time updates.",
    badge: "Home Services Marketplace",
    featured: false,
    playStoreUrl: null,
    appStoreUrl: null,
    images: ["/mockups/mockup-07.png"],
  },

  {
    id: "navnirvana",
    title: "NavNirvana",
    description:
      "Investment and wealth management platform with live market insights and portfolio tracking.",
    badge: "Investment & Wealth Management",
    featured: false,
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.navnirvana.app",
    appStoreUrl: null,
    images: ["/mockups/mockup-08.png"],
  },

  {
    id: "trustai",
    title: "TrustAI",
    description:
      "AI-powered document verification and fraud detection platform built for modern businesses.",
    badge: "AI-powered Wellness",
    featured: false,
    playStoreUrl: null,
    appStoreUrl: null,
    images: ["/mockups/mockup-09.png"],
  },

  {
    id: "dater",
    title: "Dater",
    description:
      "Modern dating platform focused on meaningful connections with a privacy-first experience.",
    badge: "Dating & Matching",
    featured: false,
    playStoreUrl: null,
    appStoreUrl: null,
    images: ["/mockups/mockup-10.png"],
  },
];