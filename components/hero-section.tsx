"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function HeroSection() {
  return (
    <section className="pt-32 pb-24 px-6 lg:px-8 bg-[#FAFAFA] relative overflow-hidden">
      {/* Dotted grid background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0',
        }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-6 leading-tight">
          Build Your MVP in 2–3 Weeks
          <br />
          <span className="font-normal">Without Hiring a Tech Team</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto mb-8 leading-relaxed">
          We help founders turn ideas into production-ready mobile apps fast. 
          Clear scope, fixed timelines, full code ownership.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button size="lg" className="px-12 bg-gray-900 text-white hover:bg-gray-800 shadow-xl" asChild>
            <Link href="https://wa.link/lw7sw2" target="_blank" rel="noopener noreferrer" aria-label="Open WhatsApp to build your MVP">Build My MVP</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="px-12 text-gray-900 border-gray-300 hover:bg-gray-50"
            onClick={(e) => {
              e.preventDefault();
              smoothScrollTo("how-it-works");
            }}
            aria-label="Scroll to How It Works section"
          >
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}
