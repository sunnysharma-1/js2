"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, ChevronDown, Cpu, Wrench, Cable, Pencil, Headphones, Grid3x3, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
     {href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
  ]

  const serviceLinks = [
    {
      href: "/services",
      label: "All Services",
      icon: Grid3x3,
      description: "View our complete service portfolio",
    },
    {
      href: "/services/pcb",
      label: "PCB Assembly",
      icon: Cpu,
      description: "SMT & Through-hole assembly",
    },
    {
      href: "/services/prototyping",
      label: "Prototype – Development & Support",
      icon: Wrench,
      description: "Rapid prototyping solutions",
    },
    {
      href: "/services/box-build",
      label: "Box Build",
      icon: Grid3x3,
      description: "Complete box assembly",
    },
    {
      href: "/services/wire-harness",
      label: "Wire Harness & Cable Harness",
      icon: Cable,
      description: "Custom cable assemblies",
    },
    {
      href: "/services/global-purchasing",
      label: "Global Purchase",
      icon: Lightbulb,
      description: "Parts sourcing & procurement",
    },
    {
      href: "/services/design",
      label: "Design Engineering",
      icon: Pencil,
      description: "PCB design & engineering",
    },
    {
      href: "/services/after-sales-support",
      label: "After Sales Support",
      icon: Headphones,
      description: "Warranty & technical support",
    },
  ]

  const isServicesActive = pathname.startsWith("/services")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm">
      {/* ↓↓↓ decreased header height here (h-28 -> h-20) ↓↓↓ */}
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          {/* ↓↓↓ increased logo container size here ↓↓↓ */}
          <div className="relative h-35 w-56 md:h-50 md:w-64">
            <Image
              src="/images/design-mode/Black_and_White_Circular_Art___Design_Logo__1_-removebg-preview.png"
              alt="Jayshree Instruments Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation - Center */}
        <nav className="hidden lg:flex lg:items-center lg:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-[#4A90E2] after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:bg-[#4A90E2] after:transition-all after:duration-300 ${
                  isActive ? "text-[#4A90E2] after:w-full" : "text-gray-700 after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            )
          })}

          <DropdownMenu>
            <DropdownMenuTrigger
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#4A90E2] focus:outline-none data-[state=open]:text-[#4A90E2] ${
                isServicesActive ? "text-[#4A90E2]" : "text-gray-700"
              }`}
            >
              Services
              <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-80 p-2">
              <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-1">
                Our Services
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {serviceLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      href={link.href}
                      className={`cursor-pointer flex items-start gap-3 p-3 rounded-lg transition-colors hover:bg-blue-50 ${
                        index === 0 ? "bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-100" : ""
                      }`}
                    >
                      <div className={`mt-0.5 ${index === 0 ? "text-[#4A90E2]" : "text-gray-500"}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium ${index === 0 ? "text-[#4A90E2]" : "text-gray-900"}`}>
                          {link.label}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{link.description}</div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Contact Info - Desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <a href="tel:+918866968821" className="text-gray-700 hover:text-[#4A90E2] transition-colors">
              +91 88669 68821
            </a>
          </div>
          <Button
            asChild
            className="bg-gradient-to-r from-[#00A896] to-[#008C7A] hover:from-[#008C7A] hover:to-[#00A896] text-white rounded-lg px-6 font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="hover:bg-gray-100">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <nav className="flex flex-col gap-4 mt-8">
              {/* Add mobile links/services here */}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
