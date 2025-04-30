import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContactFormModal } from "@/components/ContactFormModal"

export default function Footer() {
  const productLinks = [
    { name: "Helios Robot", href: "#" },
    { name: "Software Platform", href: "#" },
    { name: "Maintenance Services", href: "#" },
    { name: "Training", href: "#" },
  ]

  const resourceLinks = [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Support Center", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-surface-dark text-text-muted py-16">
      <div className="container max-w-content-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and mission */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Terrawise Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-semibold text-white">Terrawise</span>
            </Link>
            <p className="mb-6">
              Revolutionizing solar farm maintenance with autonomous robotics and AI-powered solutions.
            </p>
          </div>

          {/* Column 2: Products */}
          <div>
            {/* <h3 className="text-white font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Column 3: Resources */}
          <div>
            {/* <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Column 4: Social & Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="text-text-muted hover:text-white transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <ContactFormModal
              trigger={
                <Button className="rounded-button bg-primary hover:bg-primary-hover text-white w-full">
                  Contact Us
                </Button>
              }
            />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Terrawise Robotics. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
