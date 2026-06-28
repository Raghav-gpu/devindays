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
import {
  DeferredFocusFlowCaseStudy,
  DeferredProjectsSection,
} from "@/components/deferred-below-fold";

const PricingSection = dynamic(
  () => import("@/components/pricing-section").then((mod) => mod.PricingSection),
  { loading: () => <SectionPlaceholder minHeight="900px" /> }
);

const FocusFlowCaseStudy = DeferredFocusFlowCaseStudy;

const ProjectsSection = DeferredProjectsSection;

const FAQSection = dynamic(() => import("@/components/faq-section"), {
  loading: () => <SectionPlaceholder minHeight="700px" />,
});

const ContactSection = dynamic(
  () => import("@/components/contact-section").then((mod) => mod.ContactSection),
  { loading: () => <SectionPlaceholder minHeight="600px" /> }
);

const Footer = dynamic(
  () => import("@/components/footer").then((mod) => mod.Footer),
  { loading: () => <SectionPlaceholder minHeight="320px" /> }
);

function SectionPlaceholder({ minHeight }: { minHeight: string }) {
  return (
    <div
      aria-hidden="true"
      className="w-full"
      style={{ minHeight, contentVisibility: "auto", containIntrinsicSize: `auto ${minHeight}` }}
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
        <div className="content-auto">
          <ReassuranceSection />
          <WhoThisIsFor />
          <WhatWeDo />
        </div>
        <Suspense fallback={<SectionPlaceholder minHeight="900px" />}>
          <PricingSection />
        </Suspense>
        <HowItWorks />
        <RiskReversal />
        <Suspense fallback={<SectionPlaceholder minHeight="1200px" />}>
          <FocusFlowCaseStudy />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder minHeight="800px" />}>
          <ProjectsSection />
        </Suspense>
        <WhyWorkWithUs />
        <FounderMoment />
        <FounderMessage />
        <Suspense fallback={<SectionPlaceholder minHeight="700px" />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionPlaceholder minHeight="600px" />}>
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={<SectionPlaceholder minHeight="320px" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
