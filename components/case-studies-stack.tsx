"use client";

import { CaseStudyCard } from "@/components/case-study-card";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/constants/case-studies";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const HOLD_RATIO = 0.3;
const TRANSITION_RATIO = 1 - HOLD_RATIO;
const SCRUB_AMOUNT = 0.9;
const PIN_VIEWPORT_RATIO = 1.3;
const MOCKUP_ANIM_DURATION = 0.7;

let gsapRegistered = false;

function getCardMockup(card: HTMLElement | null | undefined) {
  return card?.querySelector<HTMLElement>("[data-case-mockup]") ?? null;
}

function CaseStudiesHeader() {
  return (
    <div className="mb-[clamp(40px,6vw,64px)] text-center">
      <Badge variant="outline" className="mb-4 border-gray-300 font-light text-gray-900">
        Case Studies
      </Badge>
      <h2 className="mb-4 text-[clamp(2.125rem,4vw,3.5rem)] leading-tight font-light text-gray-900">
        Apps we shipped fast
      </h2>
      <p className="mx-auto max-w-2xl text-[clamp(1rem,1.5vw,1.25rem)] leading-relaxed font-light text-gray-600">
        Real products built for founders — from MVP to live users.
      </p>
    </div>
  );
}

function CaseStudiesStaticList() {
  return (
    <section className="bg-white px-6 py-[clamp(80px,10vw,120px)] md:px-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <CaseStudiesHeader />
        <div className="flex flex-col gap-[clamp(32px,5vw,48px)]">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              shouldLoadImage={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function shouldLoadCaseStudyImage(index: number, activeIndex: number, sectionVisible: boolean) {
  if (!sectionVisible) {
    return false;
  }

  return Math.abs(index - activeIndex) <= 1;
}

function restoreScrollPosition(scrollY: number) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (Math.abs(window.scrollY - scrollY) > 4) {
        window.scrollTo(0, scrollY);
      }
    });
  });
}

function CaseStudiesStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const desktopPinRef = useRef<HTMLDivElement>(null);
  const desktopCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting);
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    if (!mediaQuery.matches) {
      return;
    }

    const cards = mobileCardRefs.current.filter(Boolean) as HTMLDivElement[];
    const observers = cards.map((card, index) => {
      const cardObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        { threshold: 0.35, rootMargin: "0px 0px -10% 0px" }
      );

      cardObserver.observe(card);
      return cardObserver;
    });

    return () => {
      observers.forEach((cardObserver) => cardObserver.disconnect());
    };
  }, []);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    let cancelled = false;
    const initialScrollY = window.scrollY;

    async function setupAnimations() {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (cancelled || !sectionRef.current) {
        return;
      }

      if (!gsapRegistered) {
        gsap.registerPlugin(ScrollTrigger);
        gsapRegistered = true;
      }

      const setMockupState = (mockup: HTMLElement | null, active: boolean) => {
        if (!mockup) {
          return;
        }

        gsap.set(mockup, {
          y: active ? 0 : 40,
          opacity: active ? 1 : 0,
          scale: active ? 1 : 0.96,
          transformOrigin: "center center",
          force3D: true,
        });
      };

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
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

        cards.forEach((card, index) => {
          gsap.set(card, {
            yPercent: index === 0 ? 0 : 120,
            scale: index === 0 ? 1 : 0.98,
            opacity: index === 0 ? 1 : 0.95,
            transformOrigin: "center center",
            force3D: true,
          });

          setMockupState(getCardMockup(card), index === 0);
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: desktopTrackRef.current,
            start: "top top",
            end: `+=${endDistance}`,
            pin: desktopPinRef.current,
            pinSpacing: true,
            scrub: SCRUB_AMOUNT,
            anticipatePin: 0,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const nextIndex = Math.min(
                caseStudies.length - 1,
                Math.max(0, Math.round(self.progress * (caseStudies.length - 1)))
              );
              setActiveIndex(nextIndex);
            },
          },
        });

        for (let index = 1; index < cards.length; index += 1) {
          const segmentStart = index - 1;
          const transitionStart = segmentStart + HOLD_RATIO;
          const mockup = getCardMockup(cards[index]);

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

          if (mockup) {
            timeline.to(
              mockup,
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: MOCKUP_ANIM_DURATION,
                ease: "power2.out",
              },
              transitionStart
            );
          }
        }
      });

      mm.add("(max-width: 1023px)", () => {
        // Keep mobile scrolling native — no scrub triggers that can fight page scroll.
      });

      const handleResize = () => {
        const scrollY = window.scrollY;
        ScrollTrigger.refresh(true);
        restoreScrollPosition(scrollY);
      };

      window.addEventListener("resize", handleResize);

      if (!cancelled) {
        restoreScrollPosition(initialScrollY);
      }

      return () => {
        window.removeEventListener("resize", handleResize);
        mm.revert();
      };
    }

    const cleanupPromise = setupAnimations();

    return () => {
      cancelled = true;
      cleanupPromise.then((cleanup) => cleanup?.());
    };
  }, []);

  return (
    <section ref={sectionRef} className="overflow-x-clip bg-white">
      <div className="hidden lg:block">
        <div className="px-6 pt-[clamp(80px,10vw,120px)] pb-[clamp(24px,4vw,40px)] md:px-8">
          <div className="mx-auto w-full max-w-[1400px]">
            <CaseStudiesHeader />
          </div>
        </div>

        <div ref={desktopTrackRef} className="relative">
          <div ref={desktopPinRef} className="relative h-svh w-full overflow-hidden">
            <div className="flex h-full w-full items-center justify-center px-[clamp(16px,4vw,48px)] pt-[clamp(72px,9vh,96px)] pb-[clamp(16px,3vh,32px)]">
              <div className="relative h-[min(72vh,780px)] min-h-[480px] w-full max-w-[1080px] min-[1400px]:max-w-[1240px] xl:min-h-[520px] min-[1400px]:min-h-[560px]">
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
                      className="h-full w-full max-w-none"
                      pinned
                      shouldLoadImage={shouldLoadCaseStudyImage(index, activeIndex, sectionVisible)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-[clamp(48px,6vw,96px)]" aria-hidden="true" />
      </div>

      <div className="px-6 py-[clamp(80px,10vw,120px)] md:px-8 lg:hidden">
        <div className="mx-auto w-full max-w-[900px]">
          <CaseStudiesHeader />
          <div className="flex flex-col gap-[clamp(32px,5vw,48px)]">
            {caseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                ref={(element) => {
                  mobileCardRefs.current[index] = element;
                }}
                className="will-change-transform"
              >
                <CaseStudyCard
                  caseStudy={caseStudy}
                  shouldLoadImage={shouldLoadCaseStudyImage(index, activeIndex, sectionVisible)}
                />
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
