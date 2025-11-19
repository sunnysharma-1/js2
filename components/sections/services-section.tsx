"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import React from "react"

export function ServicesSection() {
  const services = [
    {
      key: "pcb",
      title: "PCB Assembly",
      description:
        "Advanced PCB assembly services with automated pick-and-place technology, manual assembly expertise, and rigorous quality control for reliable electronic products.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%202-pfFT58scAf392uAYx98LXppMxjZnMW.png",
      span: "lg:row-span-2 lg:col-span-1",
    },
    {
      key: "design",
      title: "Design Engineering",
      description:
        "Technical design and engineering expertise combining CAD, CAE, and simulation to create manufacturable, reliable products that meet specifications.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
      span: "lg:col-span-2",
    },
    {
      key: "testing",
      title: "PCB Testing & Quality Control",
      description:
        "Comprehensive testing and inspection services using advanced equipment and techniques to ensure every board meets the highest quality standards.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Testing%201-0jbz8kQVkrc9xoGfCI8B2XpnQ09Vc4.jpg",
      span: "lg:col-span-1",
    },
    {
      key: "sourcing",
      title: "Global Component Sourcing",
      description:
        "Strategic procurement of electronic components from trusted global suppliers, ensuring quality parts, competitive pricing, and reliable supply chain management.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%201-2DfrGR74bngePYWCEn40HTe7dTjgFV.webp",
      span: "lg:col-span-2",
    },
    {
      key: "wire-harness",
      title: "Wire Harness & Cable Assembly",
      description:
        "Custom wire harness design and assembly services for complex electrical systems, ensuring reliable connections and optimal cable management.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Harness-DcMFYx4fME7FgHmKZz7zIIJVyVD8hO.avif",
      span: "lg:col-span-1",
    },
  ]

  /**
   * slugMap: maps service.key to the URL you want.
   * Update these to exactly match the routes in your Header or router.
   */
  const slugMap: Record<string, string> = {
    "pcb": "/services/pcb",
    "design": "/services/design",
    "testing": "/services/prototyping", // change to /services/pcb-testing or /services/quality if you prefer
    "sourcing": "/services/global-purchasing", // change to match your route
    "wire-harness": "/services/wire-harness",
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#0066CC]">Electronics Manufacturing Services</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            From PCB assembly to complete box build solutions—we deliver comprehensive electronics manufacturing with
            precision, quality, and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          {services.map((service, index) => {
            const href = slugMap[service.key] ?? "/services" // fallback
            return (
              <Link
                key={service.key}
                href={href}
                className={`relative group overflow-hidden rounded-lg ${service.span} block focus:outline-none focus:ring-4 focus:ring-[#00A896]/20`}
                aria-label={`Open ${service.title} page`}
              >
                {/* Image (parent must be position:relative for Image fill) */}
                <div className="absolute inset-0">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/70 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>

                  <p className="text-white/90 text-sm leading-relaxed mb-4 max-h-20 overflow-hidden">
                    {service.description}
                  </p>

                  <div className="flex justify-end">
                    <Button
                      variant="secondary"
                      className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6 shadow-sm"
                      // keep the link behavior (the card is already a Link), the button acts as visual affordance
                      onClick={(e) => {
                        /* prevent double navigation issues on nested clickable elements:
                           Link handles navigation; allow default. If you need client-side logic, implement here. */
                      }}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
