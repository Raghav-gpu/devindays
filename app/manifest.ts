import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DevInDays - Build your MVP",
    short_name: "DevInDays",
    description:
      "Build your MVP in 2–3 weeks starting at ₹40,000. Fast, affordable app development for founders.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#000000",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
