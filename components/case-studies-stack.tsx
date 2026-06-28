"use client";

import { CaseStudyCard } from "@/components/case-study-card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/constants/case-studies";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const HOLD_RATIO = 0.3;
const TRANSITION_RATIO = 1 - HOLD_RATIO;
const SCRUB_AMOUNT = 0.9;
const PIN_VIEWPORT_RATIO = 1.3;

function CaseStudiesHeader() {
  return (
    <div className="text-center mb-12 md:mb-16">
      <Badge variant="outline" className="mb-4 font-light text-gray-900 border-gray-300">
        Case Studies
      </Badge>
      <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
        Apps we shipped fast
      </h2>
      <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
        Real products built for founders — from MVP to live users.
      </p>
    </div>
  );
}

function CaseStudiesStaticList() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <CaseStudiesHeader />
        <div className="space-y-10">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} variant="mobile" />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const desktopPinRef = useRef<HTMLDivElement>(null);
  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (
        !desktopTrackRef.current ||
        !desktopPinRef.current ||
        caseStudies.length <= 1
      ) {
        return;
      }

      const cards = desktopCardRefs.current.filter(Boolean) as HTMLDivElement[];

      if (cards.length <= 1) {
        return;
      }

      const segmentScroll = window.innerHeight * PIN_VIEWPORT_RATIO;
      const endDistance = (cards.length - 1) * segmentScroll;

      gsap.set(cards[0], {
        yPercent: 0,
        scale: 1,
        opacity: 1,
        transformOrigin: "center center",
        force3D: true,
      });

      cards.slice(1).forEach((card) => {
        gsap.set(card, {
          yPercent: 120,
          scale: 0.98,
          opacity: 0.95,
          transformOrigin: "center center",
          force3D: true,
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: desktopTrackRef.current,
          start: "top top",
          end: `+=${endDistance}`,
          pin: desktopPinRef.current,
          scrub: SCRUB_AMOUNT,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let index = 1; index < cards.length; index += 1) {
        const segmentStart = index - 1;
        const transitionStart = segmentStart + HOLD_RATIO;

        timeline.to(
          cards[index],
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            duration: TRANSITION_RATIO,
            ease: "power2.out",
          },
          transitionStart
        );

        timeline.to(
          cards[index - 1],
          {
            scale: 0.97,
            opacity: 0.9,
            duration: TRANSITION_RATIO,
            ease: "power2.out",
          },
          transitionStart
        );
      }
    });

    mm.add("(max-width: 767px)", () => {
      const cards = mobileCardRefs.current.filter(Boolean) as HTMLDivElement[];

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            y: 40,
            opacity: 0,
            force3D: true,
          },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 55%",
              scrub: SCRUB_AMOUNT,
            },
          }
        );
      });
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mm.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-white">
      <div className="hidden md:block">
        <div className="px-6 lg:px-8 pt-24 pb-10">
          <div className="max-w-[1400px] mx-auto">
            <CaseStudiesHeader />
          </div>
        </div>

        <div ref={desktopTrackRef} className="relative">
          <div ref={desktopPinRef} className="relative h-svh w-full overflow-hidden">
            <div className="flex h-full w-full items-center justify-center px-[4vw]">
              <div className="relative h-[78vh] min-h-[650px] w-[90vw] max-w-[1400px]">
                {caseStudies.map((caseStudy, index) => (
                  <div
                    key={caseStudy.id}
                    ref={(element) => {
                      desktopCardRefs.current[index] = element;
                    }}
                    className="absolute inset-0 will-change-transform"
                    style={{ zIndex: index + 1 }}
                  >
                    <CaseStudyCard
                      caseStudy={caseStudy}
                      variant="hero"
                      className="h-full w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-24" aria-hidden="true" />
      </div>

      <div className="md:hidden py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <CaseStudiesHeader />
          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                ref={(element) => {
                  mobileCardRefs.current[index] = element;
                }}
                className="will-change-transform"
              >
                <CaseStudyCard caseStudy={caseStudy} variant="mobile" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CaseStudiesStack() {
  return (
    <>
      <div className="hidden motion-reduce:block">
        <CaseStudiesStaticList />
      </div>
      <div className="motion-reduce:hidden">
        <CaseStudiesStory />
      </div>
    </>
  );
}
