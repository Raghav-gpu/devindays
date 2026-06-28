import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">DevInDays</h2>
            <p className="text-sm font-light text-gray-600">
              We build apps for founders. Fast, affordable, and without wasting time.
            </p>
            <p className="mt-4 text-sm font-light text-gray-600">
              Email:{" "}
              <a
                href="mailto:contact@devindays.com"
                className="underline hover:text-gray-900"
              >
                contact@devindays.com
              </a>
            </p>
            <p className="mt-2 text-sm font-light text-gray-600">
              WhatsApp:{" "}
              <a
                href="https://wa.me/919315735371"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-900"
              >
                +91 93157 35371
              </a>
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#what-we-do"
                  className="text-sm font-light text-gray-600 hover:text-gray-900"
                >
                  What We Do
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm font-light text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-sm font-light text-gray-600 hover:text-gray-900"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm font-light text-gray-600 hover:text-gray-900"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#why-us"
                  className="text-sm font-light text-gray-600 hover:text-gray-900"
                >
                  Why Work With Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm font-light text-gray-600 hover:text-gray-900"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919315735371"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-gray-600 hover:text-gray-900"
                  aria-label="Open WhatsApp to get a quote"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm font-light text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm font-light text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm font-light text-gray-600">© 2026 DevInDays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
