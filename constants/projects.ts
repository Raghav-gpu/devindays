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
    id: "moms-into-fitness",
    title: "Moms Into Fitness",
    description:
      "Fitness app focused on postpartum workouts and structured health programs for new mothers.",
    badge: null,
    featured: false,
    playStoreUrl: null,
    appStoreUrl: null,
    images: ["/mom-into-fitness-01.webp", "/mom-into-fitness-02.webp"],
  },
  {
    id: "baby-monitor-3g",
    title: "Baby Monitor 3G",
    description:
      "Universal video and audio baby monitor for your phone, tablet, or computer. Hear every noise, stream live video, and soothe your child remotely.",
    badge: null,
    featured: false,
    playStoreUrl: null,
    appStoreUrl: null,
    images: ["/baby_01.webp", "/baby_02.webp"],
  },
  {
    id: "buddy-budget-planner",
    title: "Buddy – Money Budget Planner",
    description:
      "Simplifies monthly financial tracking and spending insights. Helps users stay on budget.",
    badge: null,
    featured: false,
    playStoreUrl: null,
    appStoreUrl: null,
    images: ["/buddy-01.webp", "/buddy-02.webp"],
  },
];
