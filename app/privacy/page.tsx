import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | DevInDays",
  description: "Privacy Policy for DevInDays - Fast App Development for Founders",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          
          <p className="text-sm text-gray-500 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                DevInDays ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-3">
                We may collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 font-light ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Project details and requirements</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 font-light ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you quotes, updates, and project-related communications</li>
                <li>Analyze usage patterns and improve our website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 font-light ml-4 mt-3">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or respond to legal requests</li>
                <li>To protect our rights, privacy, safety, or property</li>
                <li>In connection with a business transfer or merger</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 font-light ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">7. Cookies and Tracking</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We may use cookies and similar tracking technologies to collect information about your browsing behavior. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">8. Third-Party Services</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-normal text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
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
