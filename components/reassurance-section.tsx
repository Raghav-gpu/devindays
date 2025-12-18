export function ReassuranceSection() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-base text-gray-600 font-light">
          No technical background needed. We've worked with founders at every stage.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6 text-sm text-gray-500 font-light">
          <span className="px-3 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm">Response within 2–4 hours</span>
          <span className="px-3 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm">Limited projects per month</span>
          <span className="px-3 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm">Direct access to builder</span>
        </div>
      </div>
    </section>
  );
}
