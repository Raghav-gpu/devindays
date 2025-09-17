"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { label: "What We Do", id: "what-we-do" },
    { label: "Pricing", id: "pricing" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Projects", id: "projects" },
    { label: "Why Us", id: "why-us" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out">
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
        <div
          className={cn(
            "transition-all duration-500 ease-in-out",
            isScrolled
              ? "mt-2 sm:mt-3 mx-2 sm:mx-6 lg:mx-12 rounded-lg sm:rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
              : "mt-0 mx-0 rounded-none bg-transparent border-none shadow-none",
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between px-3 sm:px-4 lg:px-6",
              isScrolled ? "h-16 sm:h-14" : "h-20 sm:h-20",
            )}
          >
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/devindays-logo-header.png"
                alt="DevInDays"
                className={cn(
                  "transition-all duration-300 hover:scale-105",
                  isScrolled
                    ? "h-12 sm:h-10 md:h-12 w-auto" // Mobile: h-12, SM: h-10, MD+: h-12
                    : "h-16 sm:h-20 md:h-20 w-auto", // Mobile: h-16, SM+: h-20
                )}
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div
                className={cn(
                  "flex items-baseline transition-all duration-300",
                  isScrolled ? "ml-4 xl:ml-6 space-x-3 xl:space-x-4" : "ml-8 xl:ml-10 space-x-6 xl:space-x-8",
                )}
              >
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={cn(
                      "font-medium transition-all duration-300 rounded-lg hover:bg-white/10 whitespace-nowrap",
                      isScrolled
                        ? "px-2 xl:px-3 py-1.5 text-xs xl:text-sm text-gray-800 hover:text-brand-400"
                        : "px-3 py-2 text-sm xl:text-base text-gray-700 hover:text-brand-400",
                    )}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-3">
              <Button
                variant="outline"
                size={isScrolled ? "sm" : "default"}
                onClick={() => scrollToSection("contact")}
                className={cn(
                  "transition-all duration-300 backdrop-blur-sm whitespace-nowrap",
                  isScrolled
                    ? "border-brand-400/50 text-brand-400 hover:bg-brand-400/10 bg-white/20 text-xs xl:text-sm px-3 xl:px-4 py-1.5 xl:py-2"
                    : "border-brand-300 text-brand-400 hover:bg-brand-50 bg-white/80 text-sm xl:text-base",
                )}
              >
                Get a Quote
              </Button>
              <Button
                size={isScrolled ? "sm" : "default"}
                onClick={() => window.open("https://calendar.app.google/5cutyfLNdYiNdChj8", "_blank")}
                className={cn(
                  "bg-brand-400 hover:bg-brand-500 text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap",
                  isScrolled ? "text-xs xl:text-sm px-3 xl:px-4 py-1.5 xl:py-2" : "text-sm xl:text-base",
                )}
              >
                Book Free Call
              </Button>
            </div>

            {/* Mobile/Tablet CTA and Menu */}
            <div className="flex lg:hidden items-center space-x-2 sm:space-x-3">
              {/* Mobile CTA Buttons */}
              <div className="hidden sm:flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => scrollToSection("contact")}
                  className={cn(
                    "transition-all duration-300 backdrop-blur-sm",
                    isScrolled
                      ? "border-brand-400/50 text-brand-400 hover:bg-brand-400/10 bg-white/20 text-xs px-2 py-1"
                      : "border-brand-300 text-brand-400 hover:bg-brand-50 bg-white/80 text-xs px-3 py-1.5",
                  )}
                >
                  Quote
                </Button>
                <Button
                  size="sm"
                  onClick={() => window.open("https://calendly.com/raghavv-kaushik/30min", "_blank")}
                  className={cn(
                    "bg-brand-400 hover:bg-brand-500 text-white transition-all duration-300 hover:scale-105 shadow-lg",
                    isScrolled ? "text-xs px-2 py-1" : "text-xs px-3 py-1.5",
                  )}
                >
                  Call
                </Button>
              </div>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "transition-all duration-300 p-2",
                  isScrolled ? "hover:bg-white/10 h-8 w-8" : "hover:bg-gray-100 h-10 w-10",
                )}
              >
                {isMobileMenuOpen ? (
                  <X className={cn(isScrolled ? "h-4 w-4" : "h-5 w-5")} />
                ) : (
                  <Menu className={cn(isScrolled ? "h-4 w-4" : "h-5 w-5")} />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-white/20">
              <div
                className={cn(
                  "px-3 sm:px-4 pt-3 pb-4 space-y-2 bg-white/5 backdrop-blur-sm",
                  isScrolled ? "rounded-b-lg sm:rounded-b-xl mx-1 sm:mx-2" : "rounded-b-none",
                )}
              >
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-700 hover:text-brand-400 block px-4 py-3 text-base font-medium w-full text-left rounded-lg hover:bg-white/10 transition-all duration-300 touch-manipulation"
                  >
                    {link.label}
                  </button>
                ))}

                {/* Mobile CTA Buttons - Always visible in mobile menu */}
                <div className="pt-4 space-y-3 border-t border-white/20">
                  <Button
                    variant="outline"
                    className="w-full border-brand-400/50 text-brand-400 hover:bg-brand-400/10 bg-white/20 backdrop-blur-sm text-sm py-3 touch-manipulation"
                    onClick={() => scrollToSection("contact")}
                  >
                    Get a Quote
                  </Button>
                  <Button
                    className="w-full bg-brand-400 hover:bg-brand-500 text-white text-sm py-3 touch-manipulation"
                    onClick={() => window.open("https://calendly.com/raghavv-kaushik/30min", "_blank")}
                  >
                    Book Free Call
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
