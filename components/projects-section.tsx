import { ProjectsCarousel } from "@/components/projects-carousel";
import { projects } from "@/constants/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Real Products We&apos;ve Shipped
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            See what we&apos;ve built for founders like you. Real apps, real users, real success
            stories.
          </p>
        </div>

        <ProjectsCarousel projects={projects} />

        <div className="text-center mt-12">
          <p className="text-sm text-gray-600 italic font-light">
            Live demo of apps available on request
          </p>
        </div>
      </div>
    </section>
  );
}
