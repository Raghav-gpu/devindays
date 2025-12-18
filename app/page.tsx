import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ReassuranceSection } from "@/components/reassurance-section";
import { WhoThisIsFor } from "@/components/who-this-is-for";
import { WhatWeDo } from "@/components/what-we-do";
import { PricingSection } from "@/components/pricing-section";
import { HowItWorks } from "@/components/how-it-works";
import { RiskReversal } from "@/components/risk-reversal";
import { FocusFlowCaseStudy } from "@/components/focusflow-case-study";
import { ProjectsSection } from "@/components/projects-section";
import { WhyWorkWithUs } from "@/components/why-work-with-us";
import { FounderMoment } from "@/components/founder-moment";
import { FounderMessage } from "@/components/founder-message";
import FAQSection from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <main>
        <HeroSection />
        <ReassuranceSection />
        <WhoThisIsFor />
        <WhatWeDo />
        <PricingSection />
        <HowItWorks />
        <RiskReversal />
        <FocusFlowCaseStudy />
        <ProjectsSection />
        <WhyWorkWithUs />
        <FounderMoment />
        <FounderMessage />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
