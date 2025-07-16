"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when pathname changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/30 backdrop-blur-md shadow-md py-1"
          : "bg-white/50 backdrop-blur-lg shadow-md border-b border-white/20 py-1"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <Link href="/" className="flex items-center">
            <img
              src="/logos/GTS-new-Logo.png"
              alt="Globe Tek Solution"
              className="!h-8 !w-auto mr-2 lg:mr-4 flex-shrink-0"
              style={{ height: "36px !important" }}
            />
            <span className="text-base lg:text-lg font-bold text-primary hidden sm:block">GLOBE TEK SOLUTION</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium transition-colors hover:text-primary py-1 px-1 ${
                  pathname === link.href ? "text-primary" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="animated-button bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4 py-1.5 text-sm"
            >
              <Link href="/quote">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden w-10 h-10">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <div className="flex items-center mb-6">
                  <img
                    src="/logos/GTS-new-Logo.png"
                    alt="Globe Tek Solution"
                    className="!h-10 !w-auto mr-3 flex-shrink-0"
                    style={{ height: "40px !important" }}
                  />
                  <span className="text-lg font-bold text-primary">Globe Tek Solution</span>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`text-lg font-medium transition-colors hover:text-primary py-3 px-2 border-b border-gray-100 ${
                      pathname === link.href ? "text-primary" : "text-gray-700"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-3"
                >
                  <Link href="/quote" onClick={handleLinkClick}>
                    Get a Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
