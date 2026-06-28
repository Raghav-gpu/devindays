"use client";

import { ScrollLink } from "@/components/scroll-link";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
        aria-label="Main navigation"
        className={cn(
          "transition-all duration-300 ease-in-out",
          isScrolled
            ? "mx-auto max-w-5xl rounded-2xl border border-gray-200/80 bg-white/55 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-md"
            : "w-full border-b border-gray-200 bg-[#FAFAFA]/90 backdrop-blur-md"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="inline-flex min-h-11 items-center text-xl font-semibold text-gray-900">
              DevInDays
            </Link>

            <div className="hidden items-center space-x-2 lg:flex">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.id}
                  targetId={link.id}
                  href={link.href}
                  className="inline-flex min-h-11 items-center px-2 text-sm font-light text-gray-600 transition-colors hover:text-gray-900"
                >
                  {link.label}
                </ScrollLink>
              ))}
            </div>

            <div className="hidden items-center lg:flex">
              <Button size="sm" className="bg-gray-900 text-white hover:bg-gray-800" asChild>
                <Link
                  href="https://wa.me/919315735371"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Build My MVP
                </Link>
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white p-2 text-gray-900 shadow-sm transition-colors hover:bg-gray-50 lg:hidden"
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
            <div
              id="mobile-menu"
              className="space-y-4 border-t border-gray-100 py-4 lg:hidden"
            >
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.id}
                  targetId={link.id}
                  href={link.href}
                  onNavigate={closeMenu}
                  className="block min-h-11 py-2 text-sm font-light text-gray-600 hover:text-gray-900"
                >
                  {link.label}
                </ScrollLink>
              ))}
              <div className="pt-4">
                <Button size="sm" className="w-full bg-gray-900 text-white hover:bg-gray-800" asChild>
                  <Link
                    href="https://wa.me/919315735371"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                  >
                    Build My MVP
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
