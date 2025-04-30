"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled past the height of the navbar
      const isScrolled = window.scrollY > 72
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Technology", href: "#technology" },
  ]

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          "h-nav-desktop md:h-nav-desktop",
          scrolled ? "bg-white border-b border-border" : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="container h-full max-w-content-lg flex items-center justify-between">
          {/* Logo - switches between versions based on scroll state */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-36 h-10">
                {/* Original logo (white text) for transparent navbar */}
                <Image
                  src="/images/terrawise-logo.png"
                  alt="Terrawise Logo"
                  fill
                  className={cn(
                    "object-contain transition-opacity duration-300",
                    scrolled ? "opacity-0" : "opacity-100",
                  )}
                />

                {/* Black text logo for white navbar */}
                <Image
                  src="/images/terrawise-logo-black.png"
                  alt="Terrawise Logo"
                  fill
                  className={cn(
                    "object-contain transition-opacity duration-300",
                    scrolled ? "opacity-100" : "opacity-0",
                  )}
                />
              </div>
            </Link>
          </div>

          {/* Right side with nav links and CTA button */}
          <div className="flex items-center space-x-6">
            {/* Nav links - desktop only */}
            {!isMobile && (
              <nav className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn("text-base font-semibold relative group", scrolled ? "text-charcoal" : "text-white")}
                  >
                    {link.name}
                    <span
                      className={cn(
                        "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                        scrolled ? "bg-primary" : "bg-white",
                      )}
                    ></span>
                  </Link>
                ))}
              </nav>
            )}

            {/* Button with consistent styling - light black background with white text */}
            <Button className="rounded-button bg-charcoal/90 hover:bg-charcoal text-white text-sm font-semibold px-5 border-0">
              Get In Touch
            </Button>

            {isMobile && (
              <button
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className={cn("p-2 md:hidden", scrolled ? "text-charcoal" : "text-white")}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-nav-mobile">
          <div className="container py-6 flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xl font-semibold text-charcoal py-2 border-b border-border"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
