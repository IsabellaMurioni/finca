"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/historia", label: "Nuestra Historia" },
  { href: "/productos", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Finca La Caramela"
              width={180}
              height={180}
              className="h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44"
            />
            <span className="sr-only">Finca La Caramela</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-base font-medium text-[#5b3a29] transition-all duration-300 ease-in-out py-2 px-[14px] rounded-[20px] ${
                  pathname === link.href
                    ? isScrolled
                      ? "border border-foreground"
                      : "border border-[#5b3a29]/70"
                    : isScrolled
                    ? "hover:border-foreground/40 hover:opacity-95"
                    : "hover:border-[#5b3a29]/20 hover:opacity-95"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden p-2 hover:scale-105 transition-transform"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-lg font-medium text-[#5b3a29] py-2 px-[14px] rounded-[20px] transition-all duration-300 ease-in-out ${
                  pathname === link.href
                    ? isScrolled
                      ? "border border-foreground"
                      : "border border-[#5b3a29]/70"
                    : isScrolled
                    ? "hover:border-foreground/40 hover:opacity-95"
                    : "hover:border-[#5b3a29]/20 hover:opacity-95"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )} 
    </header>
  )
}
