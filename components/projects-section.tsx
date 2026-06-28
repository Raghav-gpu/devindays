import { ProjectsCarousel } from "@/components/projects-carousel";
import { ScrollTriggerRefresh } from "@/components/scroll-trigger-refresh";
import { projects } from "@/constants/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#FAFAFA] px-6 py-[clamp(80px,10vw,112px)] lg:px-8">
      <ScrollTriggerRefresh />
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-[clamp(40px,6vw,64px)] text-center">
          <h2 className="mb-4 font-light text-gray-900 text-[clamp(2.125rem,4vw,3rem)] leading-tight">
            Real Products We&apos;ve Shipped
          </h2>
          <p className="mx-auto max-w-2xl font-light text-gray-600 text-[clamp(1rem,1.5vw,1.125rem)] leading-relaxed">
            See what we&apos;ve built for founders like you. Real apps, real users, real success
            stories.
          </p>
        </div>

        <ProjectsCarousel projects={projects} />

        <div className="mt-[clamp(32px,5vw,48px)] text-center">
          <p className="text-sm italic font-light text-gray-600">
            Live demo of apps available on request
          </p>
        </div>
      </div>
    </section>
  );
}
