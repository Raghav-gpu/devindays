"use client";

import Link from "next/link";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              DevInDays
            </h3>
            <p className="text-sm text-gray-600 font-light">
              We build apps for founders. Fast, affordable, and without wasting time.
            </p>
            <p className="text-sm text-gray-600 font-light mt-4">
              Email:{" "}
              <a
                href="mailto:raghav@vaydenfoundry.com"
                className="hover:text-gray-900 underline"
              >
                raghav@vaydenfoundry.com
              </a>
            </p>
            <p className="text-sm text-gray-600 font-light mt-2">
              WhatsApp:{" "}
              <a
                href="https://wa.me/919354120990"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 underline"
              >
                +91 93541 20990
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#what-we-do" 
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo("what-we-do");
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 font-light"
                >
                  What We Do
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo("pricing");
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 font-light"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo("how-it-works");
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 font-light"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo("projects");
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 font-light"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#why-us" 
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo("why-us");
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 font-light"
                >
                  Why Work With Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo("contact");
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 font-light"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919354120990"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 font-light"
                  aria-label="Open WhatsApp to get a quote"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 font-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-gray-900 font-light">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600 font-light">
            © 2024 DevInDays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
