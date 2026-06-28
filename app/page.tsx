import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ReassuranceSection } from "@/components/reassurance-section";
import { WhoThisIsFor } from "@/components/who-this-is-for";
import { WhatWeDo } from "@/components/what-we-do";
import { HowItWorks } from "@/components/how-it-works";
import { RiskReversal } from "@/components/risk-reversal";
import { WhyWorkWithUs } from "@/components/why-work-with-us";
import { FounderMoment } from "@/components/founder-moment";
import { FounderMessage } from "@/components/founder-message";
import FAQSection from "@/components/faq-section";
import { FocusFlowCaseStudy } from "@/components/focusflow-case-study";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((mod) => mod.PricingSection),
  { loading: () => <SectionPlaceholder minHeight="900px" /> }
);

function SectionPlaceholder({ minHeight }: { minHeight: string }) {
  return (
    <div
      aria-hidden="true"
      className="w-full"
      style={{ minHeight }}
    />
  );
}

export const metadata: Metadata = {
  alternates: {
    canonical: "https://devindays.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ReassuranceSection />
        <WhoThisIsFor />
        <WhatWeDo />
        <Suspense fallback={<SectionPlaceholder minHeight="900px" />}>
          <PricingSection />
        </Suspense>
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
