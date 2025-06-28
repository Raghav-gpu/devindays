import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhatWeDo } from "@/components/what-we-do"
import { PricingSection } from "@/components/pricing-section"
import { HowItWorks } from "@/components/how-it-works"
import { ProjectsSection } from "@/components/projects-section"
import { WhyWorkWithUs } from "@/components/why-work-with-us"
import { FinalCTA } from "@/components/final-cta"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <PricingSection />
      <HowItWorks />
      <ProjectsSection />
      <WhyWorkWithUs />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
