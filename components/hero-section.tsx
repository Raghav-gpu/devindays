import { Button } from "@/components/ui/button";
import { ScrollToButton } from "@/components/scroll-to-button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#FAFAFA] px-6 pt-32 pb-24 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1
          id="hero-heading"
          className="mb-6 text-5xl leading-tight font-light tracking-tight text-gray-900 md:text-6xl lg:text-7xl"
        >
          Build Your MVP in 2–3 Weeks
          <br />
          <span className="font-normal">Without Hiring a Tech Team</span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed font-light text-gray-600 md:text-2xl">
          We help founders turn ideas into production-ready mobile apps fast.
          Clear scope, fixed timelines, full code ownership.
        </p>

        <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-gray-900 px-12 text-white shadow-xl hover:bg-gray-800"
            asChild
          >
            <Link
              href="https://wa.me/919315735371"
              target="_blank"
              rel="noopener noreferrer"
              data-umami-event="CTA Click - Hero"
            >
              Build My MVP
            </Link>
          </Button>
          <ScrollToButton
            size="lg"
            variant="outline"
            className="border-gray-300 px-12 text-gray-900 hover:bg-gray-50"
            targetId="how-it-works"
            data-umami-event="CTA Click - Hero Secondary"
          >
            See How It Works
          </ScrollToButton>
        </div> 
      </div>
    </section>
  );
}
