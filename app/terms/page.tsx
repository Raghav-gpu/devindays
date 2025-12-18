import Link from "next/link";

export const metadata = {
  title: "Terms of Service | DevInDays",
  description: "Terms of Service for DevInDays - Fast App Development for Founders",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            DevInDays
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                By accessing or using DevInDays ("we," "our," or "us") services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">2. Services</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-3">
                DevInDays provides mobile app development services, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 font-light ml-4">
                <li>MVP development</li>
                <li>Full app development</li>
                <li>Product strategy and consulting</li>
                <li>Post-launch support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">3. Project Scope and Deliverables</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                The scope of work, deliverables, timeline, and pricing for each project will be defined in a separate project agreement or quote. All work will be performed according to the specifications agreed upon in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">4. Payment Terms</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-3">
                Payment terms will be specified in the project agreement. Generally:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 font-light ml-4">
                <li>Payment schedules will be agreed upon before project commencement</li>
                <li>All prices are in INR (Indian Rupees) unless otherwise specified</li>
                <li>Late payments may result in project delays</li>
                <li>Refunds are subject to the terms outlined in the project agreement</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Upon full payment, you will receive full ownership of the code and deliverables created specifically for your project. We retain the right to use general knowledge, techniques, and methodologies developed during the project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">6. Client Responsibilities</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-3">
                You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 font-light ml-4">
                <li>Provide accurate and complete project requirements</li>
                <li>Respond to requests for feedback and approvals in a timely manner</li>
                <li>Provide necessary access to systems, APIs, or resources required for development</li>
                <li>Make payments according to the agreed schedule</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">7. Timeline and Delays</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We will make reasonable efforts to meet agreed timelines. However, delays may occur due to factors beyond our control, including but not limited to client feedback delays, third-party dependencies, or scope changes. Timeline adjustments will be communicated promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">8. Revisions and Changes</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Minor revisions are included in the project scope. Significant changes or additions to the scope may result in additional charges and timeline adjustments, which will be discussed and agreed upon before implementation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">9. Warranty and Support</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We provide post-launch support as specified in the project agreement. We will fix bugs and issues that arise from our development work. Support for new features, third-party integrations, or changes outside the original scope may incur additional charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                To the maximum extent permitted by law, DevInDays shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">11. Confidentiality</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We will maintain the confidentiality of your project information and will not disclose it to third parties without your consent, except as required by law or as necessary to perform our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">12. Termination</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Either party may terminate a project agreement with written notice. Upon termination, you will be responsible for payment for all work completed up to the termination date. We will deliver all completed work and materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">13. Dispute Resolution</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Any disputes arising from these terms or our services will be resolved through good faith negotiation. If a resolution cannot be reached, disputes will be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">14. Changes to Terms</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">15. Contact Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-gray-600 font-light leading-relaxed mt-2">
                Email: <a href="mailto:raghav@vaydenfoundry.com" className="text-gray-900 hover:underline">raghav@vaydenfoundry.com</a>
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 font-light"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
