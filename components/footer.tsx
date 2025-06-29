"use client"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const quickLinks = [
    { label: "What We Do", id: "what-we-do" },
    { label: "Pricing", id: "pricing" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <footer className="bg-brand-700 text-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="mb-6 lg:mb-8">
              <img
                src="/devindays-logo-footer.png"
                alt="DevInDays"
                className="h-20 sm:h-24 lg:h-28 w-auto hover:scale-105 transition-transform duration-300 filter drop-shadow-lg"
              />
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl leading-relaxed max-w-md">
              We build apps for founders. Fast, affordable, and without wasting time.
            </p>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
              <strong>Email:</strong> raghavv.kaushik@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base lg:text-lg hover:translate-x-1 transform duration-300 text-left w-full touch-manipulation"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="sm:col-span-1">
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6">Legal</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base lg:text-lg hover:translate-x-1 transform duration-300 touch-manipulation"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base lg:text-lg hover:translate-x-1 transform duration-300 touch-manipulation"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-600 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg">© 2024 DevInDays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
