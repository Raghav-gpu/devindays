"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#what-we-do", label: "What We Do", id: "what-we-do" },
  { href: "#pricing", label: "Pricing", id: "pricing" },
  { href: "#how-it-works", label: "How It Works", id: "how-it-works" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#why-us", label: "Why Us", id: "why-us" },
  { href: "#contact", label: "Contact", id: "contact" },
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        "fixed z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled ? "top-3 px-4 md:top-4 md:px-8" : "top-0 px-0"
      )}
    >
      <nav
        className={cn(
          "transition-all duration-300 ease-in-out",
          isScrolled
            ? "mx-auto max-w-5xl rounded-2xl border border-gray-200/80 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
            : "w-full border-b border-gray-200 bg-[#FAFAFA]/90 backdrop-blur-md"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              DevInDays
            </Link>

            <nav className="hidden lg:flex items-center space-x-8" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(link.id);
                  }}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-light"
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <Button size="sm" className="bg-gray-900 text-white hover:bg-gray-800" asChild>
                <Link href="https://wa.me/919315735371" target="_blank">Build My MVP</Link>
              </Button>
            </div>

            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2 text-gray-900 shadow-sm hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-gray-900" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 text-gray-900" aria-hidden="true" />
              )}
            </button>
          </div>

          {isOpen && (
            <nav
              id="mobile-menu"
              className="lg:hidden py-4 space-y-4 border-t border-gray-100"
              aria-label="Mobile and tablet navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    smoothScrollTo(link.id);
                    closeMenu();
                  }}
                  className="block text-sm text-gray-600 hover:text-gray-900 font-light"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <Button size="sm" className="w-full bg-gray-900 text-white hover:bg-gray-800" asChild>
                  <Link
                    href="https://wa.me/919315735371"
                    target="_blank"
                    onClick={closeMenu}
                    aria-label="Open WhatsApp to build your MVP"
                  >
                    Build My MVP
                  </Link>
                </Button>
              </div>
            </nav>
          )}
        </div>
      </nav>
    </header>
  );
}
