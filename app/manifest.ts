import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DevInDays - Fast App Development for Founders",
    short_name: "DevInDays",
    description: "Build your MVP in 2–3 weeks starting at ₹40,000. Fast, affordable app development for founders.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

