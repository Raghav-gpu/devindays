"use client";

import dynamic from "next/dynamic";

function SectionPlaceholder({ minHeight }: { minHeight: string }) {
  return (
    <div
      aria-hidden="true"
      className="w-full"
      style={{ minHeight }}
    />
  );
}

export const DeferredFocusFlowCaseStudy = dynamic(
  () => import("@/components/focusflow-case-study").then((mod) => mod.FocusFlowCaseStudy),
  { loading: () => <SectionPlaceholder minHeight="1200px" />, ssr: false }
);
