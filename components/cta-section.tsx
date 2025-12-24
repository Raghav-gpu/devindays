import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-32 px-6 lg:px-8 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6">
          Ready to Build Your App?
        </h2>
        <p className="text-xl text-gray-600 font-light mb-12 max-w-xl mx-auto leading-relaxed">
          Get a clear quote within 24 hours. No surprises, no vendor lock-in.
        </p>
        <div className="flex flex-col items-center gap-6">
          <Button size="lg" className="px-16 py-7 text-lg bg-gray-900 text-white hover:bg-gray-800 shadow-2xl" asChild>
            <Link href="https://wa.link/lw7sw2" target="_blank">Build My MVP</Link>
          </Button>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600 font-light">
            <span>Response within 2–4 hours</span>
            <span className="hidden sm:inline">•</span>
            <span>Direct access to builder</span>
          </div>
        </div>
      </div>
    </section>
  );
}
