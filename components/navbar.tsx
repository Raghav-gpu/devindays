"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-semibold text-gray-900">
            DevInDays
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <a 
              href="#what-we-do" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("what-we-do");
              }}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light" 
              aria-label="Navigate to What We Do section"
            >
              What We Do
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("pricing");
              }}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light" 
              aria-label="Navigate to Pricing section"
            >
              Pricing
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("how-it-works");
              }}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light" 
              aria-label="Navigate to How It Works section"
            >
              How It Works
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("projects");
              }}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light" 
              aria-label="Navigate to Projects section"
            >
              Projects
            </a>
            <a 
              href="#why-us" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("why-us");
              }}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light" 
              aria-label="Navigate to Why Us section"
            >
              Why Us
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("contact");
              }}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light" 
              aria-label="Navigate to Contact section"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center">
            <Button size="sm" className="bg-gray-900 text-white hover:bg-gray-800" asChild>
              <Link href="https://wa.me/919354120990" target="_blank">Build My MVP</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav id="mobile-menu" className="md:hidden py-4 space-y-4 border-t border-gray-100" aria-label="Mobile navigation">
            <a 
              href="#what-we-do" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("what-we-do");
                setIsOpen(false);
              }}
              className="block text-sm text-gray-600 hover:text-gray-900 font-light"
            >
              What We Do
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("pricing");
                setIsOpen(false);
              }}
              className="block text-sm text-gray-600 hover:text-gray-900 font-light"
            >
              Pricing
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("how-it-works");
                setIsOpen(false);
              }}
              className="block text-sm text-gray-600 hover:text-gray-900 font-light"
            >
              How It Works
            </a>
            <a 
              href="#projects" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("projects");
                setIsOpen(false);
              }}
              className="block text-sm text-gray-600 hover:text-gray-900 font-light"
            >
              Projects
            </a>
            <a 
              href="#why-us" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("why-us");
                setIsOpen(false);
              }}
              className="block text-sm text-gray-600 hover:text-gray-900 font-light"
            >
              Why Us
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo("contact");
                setIsOpen(false);
              }}
              className="block text-sm text-gray-600 hover:text-gray-900 font-light"
            >
              Contact
            </a>
            <div className="pt-4">
              <Button size="sm" className="w-full bg-gray-900 text-white hover:bg-gray-800" asChild>
                <Link href="https://wa.me/919354120990" target="_blank" aria-label="Open WhatsApp to build your MVP">Build My MVP</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </nav>
  );
}
