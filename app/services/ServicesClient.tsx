"use client"

import { useEffect, useRef } from "react"
import {
  Cpu,
  Zap,
  Box,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Package,
  Globe,
  TestTube,
  Shield,
  Thermometer,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    id: "pcb",
    icon: Cpu,
    title: "PCB Assembly",
    path: "/services/pcb-assembly",
    shortDesc: "High-quality PCB assembly with SMT & THT capabilities.",
    fullDesc:
      "Our PCB assembly services combine advanced technology with expert craftsmanship to deliver superior quality boards. We handle both surface mount (SMT) and through-hole assembly with precision.",
    features: [
      "Surface Mount Technology (SMT)",
      "Through-Hole Assembly",
      "Mixed Technology Assembly",
      "BGA and Micro-BGA Assembly",
      "Lead-Free and RoHS Compliant",
      "Automated Optical Inspection (AOI)",
    ],
    image:
      "https://ecelectronics.com/wp-content/uploads/2025/05/shutterstock_2137865295-1-scaled-1.jpg",
    category: "Core Manufacturing",
  },
  {
    id: "prototyping",
    icon: Zap,
    title: "Rapid Prototyping",
    path: "/services/prototyping",
    shortDesc: "Fast, iterative prototyping to validate your designs.",
    fullDesc:
      "Transform your ideas into working prototypes with our rapid prototyping services. We offer quick turnaround times without compromising on quality, helping you validate designs and accelerate time-to-market.",
    features: [
      "Quick-Turn Prototyping",
      "Design for Manufacturing (DFM) Review",
      "Functional Testing",
      "Iterative Design Support",
      "Low-Volume Production",
      "Engineering Consultation",
    ],
    image:
      "https://foxtronicsems.com/wp-content/uploads/2025/07/rapid-prototyping-img-2.jpg",
    category: "Engineering & NPI",
  },
  {
    id: "wire-harness",
    icon: Box,
    title: "Wire Harness & Cable Assembly",
    path: "/services/wire-harness",
    shortDesc: "Custom wire harness and cable assembly solutions.",
    fullDesc:
      "Our box build services provide complete turnkey solutions, from cable and wire harness assembly to final product integration. We handle the entire assembly process, including testing and packaging.",
    features: [
      "Custom Wire Harness Assembly",
      "Cable Assembly",
      "System Integration",
      "Final Product Assembly",
      "Functional Testing",
      "Packaging and Labeling",
    ],
    image:
      "https://www.nai-group.com/wp-content/uploads/2018/08/43.-Testing-board-1.jpg",
    category: "Core Manufacturing",
  },
  {
    id: "design",
    icon: Wrench,
    title: "Design Engineering",
    path: "/services/design-engineering",
    shortDesc: "DFM/DFT focused design support for reliable products.",
    fullDesc:
      "Our experienced engineering team provides comprehensive design services to ensure your products are optimized for manufacturability, reliability, and cost-effectiveness.",
    features: [
      "Circuit Design and Layout",
      "Design for Manufacturing (DFM)",
      "Design for Test (DFT)",
      "Component Selection",
      "Cost Optimization",
      "Technical Documentation",
    ],
    image:
      "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Engineering & NPI",
  },
  {
    id: "box-build",
    icon: Package,
    title: "Box Build & System Integration",
    path: "/services/box-build",
    shortDesc: "Complete product assembly, testing & packaging.",
    fullDesc:
      "From sub-assemblies to fully finished products, our box build services cover mechanical assembly, wiring, testing, and packaging for a turnkey solution.",
    features: [
      "Full System Integration",
      "Electro-Mechanical Assembly",
      "Burn-In & Functional Testing",
      "Labeling & Serialization",
      "Custom Packaging",
      "Logistics Support",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rUuP0nbmi1FthU_e9zVr83qyDHq2fcvGSg&s",
    category: "Core Manufacturing",
  },
  {
    id: "component-sourcing",
    icon: Globe,
    title: "Component Sourcing & Supply Chain",
    path: "/services/component-sourcing",
    shortDesc: "End-to-end component procurement & inventory management.",
    fullDesc:
      "We manage your entire component supply chain, from sourcing and vendor management to inventory optimization, ensuring cost-efficiency and reliability.",
    features: [
      "Global Sourcing Network",
      "Vendor Qualification",
      "Cost Optimization",
      "Inventory Management",
      "Obsolescence Management",
      "Traceability & Compliance",
    ],
    image:
      "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Supply Chain",
  },
  {
    id: "testing",
    icon: TestTube,
    title: "Testing & Quality Assurance",
    path: "/services/testing-qa",
    shortDesc: "Comprehensive functional & in-circuit testing services.",
    fullDesc:
      "Our testing and quality assurance services ensure that every product leaving our facility meets rigorous performance and reliability standards.",
    features: [
      "In-Circuit Testing (ICT)",
      "Functional Testing",
      "Boundary Scan",
      "Environmental & Thermal Testing",
      "Burn-In Testing",
      "Full Traceability Reporting",
    ],
    image:
      "https://maguselectronics.co.uk/wp-content/uploads/2025/08/Testing-Electroless-Nickel-unit.jpg",
    category: "Quality & Reliability",
  },
  {
    id: "after-sales",
    icon: Shield,
    title: "After-Sales Service & Support",
    path: "/services/after-sales-support",
    shortDesc: "Lifecycle support for repairs, upgrades & field returns.",
    fullDesc:
      "We provide ongoing after-sales support including repairs, refurbishments, and field returns management to extend the life of your products.",
    features: [
      "RMA Management",
      "Repair & Refurbishment",
      "Failure Analysis",
      "Product Upgrades",
      "Field Support Coordination",
      "Service Level Agreements (SLA)",
    ],
    image:
      "https://images.pexels.com/photos/8867439/pexels-photo-8867439.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Lifecycle Services",
  },
]

const capabilities = [
  { title: "ISO 9001:2015 Certified", description: "Quality management system certification" },
  { title: "IPC-A-610 Standards", description: "Adherence to industry assembly standards" },
  { title: "RoHS Compliant", description: "Environmentally friendly manufacturing" },
  { title: "ESD Protected", description: "Electrostatic discharge safe environment" },
  { title: "Advanced Testing", description: "In-circuit and functional testing capabilities" },
  { title: "Supply Chain Management", description: "Comprehensive component sourcing and management" },
]

export default function ServicesClient() {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content
      gsap.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
      })

      gsap.from(".hero-heading", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.1,
        ease: "power3.out",
      })

      gsap.from(".hero-text", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
      })

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.7,
        delay: 0.5,
        ease: "power3.out",
      })

      gsap.from(".stat-card", {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      })

      gsap.from(".service-pill", {
        scrollTrigger: {
          trigger: ".services-strip",
          start: "top 85%",
        },
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.5,
        ease: "power3.out",
      })

      // core-card & capability-card animations removed

      gsap.from(".tabs-section", {
        scrollTrigger: {
          trigger: ".tabs-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={rootRef} className="min-h-screen bg-slate-950 text-slate-50">
      {/* HERO + LIVE EMS DASHBOARD */}
      <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-slate-950 via-sky-900 to-emerald-700">
        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-40 -right-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />

        <div className="container relative z-10 px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
            {/* Left side */}
            <div>
              <div className="hero-badge inline-flex items-center gap-2 mb-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>End-to-End Electronics Manufacturing Services</span>
              </div>

              <h1 className="hero-heading text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Live EMS{" "}
                <span className="bg-gradient-to-r from-sky-100 via-cyan-100 to-emerald-100 bg-clip-text text-transparent">
                  Production Dashboard
                </span>{" "}
                & Service Suite
              </h1>

              <p className="hero-text mt-5 max-w-2xl text-base md:text-lg text-slate-100/90">
                Monitor your builds in real-time while we handle everything from PCB assembly to box build, testing, and
                after-sales service—under one ISO-certified roof.
              </p>

              {/* Stats */}
              <div className="stats-grid mt-8 grid grid-cols-3 gap-4 max-w-md">
                {[
                  { value: "20+", label: "Years", sub: "EMS Experience" },
                  { value: "10M+", label: "Boards", sub: "Delivered" },
                  { value: "99.9%", label: "Yield", sub: "Quality Rate" },
                ].map((stat) => (
                  <Card
                    key={stat.label}
                    className="stat-card border-white/15 bg-white/10 text-center backdrop-blur-md"
                  >
                    <CardContent className="p-4">
                      <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                      <div className="text-xs font-semibold mt-1">{stat.label}</div>
                      <div className="text-[11px] text-slate-100/70 mt-0.5">{stat.sub}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="hero-cta bg-white text-sky-900 hover:bg-slate-100 shadow-xl shadow-sky-500/30 px-7 font-semibold"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link href="/portfolio" className="hero-cta">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/70 bg-transparent text-white hover:bg-white hover:text-sky-900"
                  >
                    View Case Studies
                  </Button>
                </Link>
              </div>

              {/* Certifications strip */}
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/15 pt-5 text-xs">
                <span className="text-slate-100/70">Certified:</span>
                {["ISO 9001", "IATF 16949", "RoHS", "IPC-A-610"].map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] font-semibold"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side: Live EMS Dashboard card */}
            <div className="relative">
              <Card className="border-white/15 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-sky-900/40">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div>
                    <p className="text-xs text-slate-400">Live EMS Dashboard</p>
                    <CardTitle className="text-lg">Production Overview</CardTitle>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-400">
                    REAL-TIME
                  </span>
                </CardHeader>
                <CardContent className="space-y-5">
                  {/* Top row metrics */}
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="rounded-xl border border-sky-500/40 bg-sky-950/40 p-3">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-300">In Production</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="mt-2 text-xl font-bold text-sky-100">36</div>
                      <p className="mt-1 text-[11px] text-slate-400">Work orders</p>
                    </div>
                    <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/40 p-3">
                      <p className="text-slate-300">On-Time Delivery</p>
                      <div className="mt-2 text-xl font-bold text-emerald-100">98.4%</div>
                      <p className="mt-1 text-[11px] text-slate-400">Last 90 days</p>
                    </div>
                    <div className="rounded-xl border border-amber-500/40 bg-amber-950/40 p-3">
                      <p className="text-slate-300">Defect Rate</p>
                      <div className="mt-2 text-xl font-bold text-amber-100">0.12%</div>
                      <p className="mt-1 text-[11px] text-slate-400">Outgoing QA</p>
                    </div>
                  </div>

                  {/* Service mix bar */}
                  <div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-200">Current Service Mix</span>
                      <span className="text-slate-400 text-[11px]">Last 30 days</span>
                    </div>
                    <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                      <div className="flex h-full w-full">
                        <div className="h-full bg-sky-500" style={{ width: "38%" }} />
                        <div className="h-full bg-emerald-500" style={{ width: "26%" }} />
                        <div className="h-full bg-cyan-400" style={{ width: "18%" }} />
                        <div className="h-full bg-amber-400" style={{ width: "18%" }} />
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-sky-500" />
                        <span>PCB Assembly – 38%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        <span>Box Build – 26%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                        <span>Prototyping – 18%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-amber-400" />
                        <span>Testing & QA – 18%</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom row: live jobs */}
                  <div className="space-y-3 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Next SMT Job</span>
                      <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[11px] text-sky-200">
                        Starts in 12 min
                      </span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] text-slate-400">WO #4821 · Automotive</p>
                          <p className="text-sm font-semibold text-slate-100">4-Layer Control Board</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-slate-300">Line 3 · SMT</p>
                          <p className="text-[11px] text-emerald-400">92% components ready</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Looking for something specific?{" "}
                      <span className="font-semibold text-sky-300">Talk to our engineering team →</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Decorative ring */}
              <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-80 w-80 rounded-full border border-dashed border-sky-500/20" />
              </div>
            </div>
          </div>

          {/* “Header-style” services strip */}
          <div className="services-strip mt-10 rounded-2xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Explore Our Service Suite
              </p>
              <span className="text-[11px] text-slate-400">
                Click a service to view its dedicated page
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <Link key={service.id} href={service.path} className="service-pill">
                  <button className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/70 px-3 py-1.5 text-xs text-slate-100 hover:border-sky-400 hover:bg-slate-800 transition-colors">
                    <service.icon className="h-3.5 w-3.5 text-sky-300" />
                    <span>{service.title}</span>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICE STACK (CLEAN DESIGN, NO SCROLL EFFECT) */}
      <section className="bg-white py-16 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="mb-2 inline-flex items-center rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
              Service Tiers
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Core Service Stack
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-slate-600 text-pretty">
              From idea to fully shipped product, choose the service tier that matches your current stage.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
            {/* Left: main cards */}
            <div className="grid gap-5 md:grid-cols-2">
              {services.slice(0, 4).map((service, index) => (
                <Link key={service.id} href={service.path}>
                  <Card className="group h-full cursor-pointer border-slate-200 hover:border-sky-400/70 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white shadow-md">
                            <service.icon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-[11px] font-semibold uppercase tracking-wide text-sky-600">
                              Tier {index + 1}
                            </p>
                            <h3 className="text-base font-semibold text-slate-900">
                              {service.title}
                            </h3>
                            <p className="text-[11px] uppercase tracking-wide text-slate-500">
                              {service.category}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.shortDesc}
                      </p>
                      <div className="mt-4 inline-flex items-center text-xs font-semibold text-sky-600 group-hover:underline">
                        View details
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Right: quick “at a glance” summary */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
              <h3 className="text-sm font-semibold text-slate-900">
                How customers use our stack
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Most OEMs start with <span className="font-semibold">Rapid Prototyping</span>,
                lock in the design with <span className="font-semibold">Design Engineering</span>,
                and then scale volumes with <span className="font-semibold">PCB Assembly</span> +
                <span className="font-semibold"> Box Build</span>.
              </p>

              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                  <span>Idea / EVT → Rapid Prototyping + Design Engineering</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>DVT / PVT → PCB Assembly + Testing & QA</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                  <span>Mass Production → Box Build & Supply Chain</span>
                </li>
              </ul>

              <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 text-xs text-slate-600">
                <p className="font-semibold text-slate-900 mb-1">
                  Not sure where to start?
                </p>
                <p>
                  Share your volumes, target markets, and current design maturity.
                  Our engineering team will map the right service stack for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW (IMAGE CARDS) */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Service Overview</h2>
            <p className="mt-3 max-w-3xl mx-auto text-slate-600 text-pretty">
              Visual overview of our key EMS offerings—click any card to deep dive into a dedicated service page.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.id} href={service.path}>
                <Card className="group h-full cursor-pointer overflow-hidden border-slate-200 bg-white hover:shadow-2xl transition-all">
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/95">
                        <service.icon className="h-5 w-5 text-sky-700" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{service.title}</p>
                        <p className="text-[11px] text-slate-100/80">{service.category}</p>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-slate-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 pb-4">
                    <p className="text-sm text-slate-600 line-clamp-3">{service.shortDesc}</p>
                    <div className="mt-3 inline-flex items-center text-sm font-medium text-sky-600 group-hover:underline">
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICE BREAKDOWN (TABS) */}
      <section className="tabs-section bg-white py-16 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Detailed Service Breakdown</h2>
            <p className="mt-3 max-w-3xl mx-auto text-slate-600 text-pretty">
              Switch between services to explore features, process coverage, and typical use-cases.
            </p>
          </div>

          <Tabs defaultValue="pcb" className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <TabsList className="flex lg:flex-col justify-start lg:justify-stretch overflow-x-auto lg:overflow-visible rounded-2xl bg-slate-50 border border-slate-200 p-1">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="flex items-center gap-2 rounded-xl px-3 py-2 text-xs md:text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-sky-700 w-full justify-start"
                >
                  <service.icon className="h-4 w-4 text-sky-500" />
                  <span className="truncate">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="space-y-6">
              {services.map((service) => (
                <TabsContent key={service.id} value={service.id} className="mt-0">
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 text-white">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {service.category}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-4">
                        {service.fullDesc}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Key Features</h4>
                        <ul className="grid gap-2 md:grid-cols-2 text-sm">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 shrink-0" />
                              <span className="text-slate-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link href={service.path}>
                          <Button size="sm" className="bg-sky-600 hover:bg-sky-700 text-white">
                            View Service Page
                          </Button>
                        </Link>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-slate-300 text-slate-800 hover:border-sky-500 hover:text-sky-700"
                        >
                          Request Quote for {service.title}
                        </Button>
                      </div>
                    </div>

                    <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </section>

      {/* OUR CAPABILITIES (CLEAN, STATIC) */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="text-center mb-10">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Quality & Compliance
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
              Our Capabilities
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-pretty">
              Certifications, standards, and in-house controls that keep your builds repeatable, auditable, and
              production-ready at scale.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
            {/* Left: capability cards */}
            <div className="grid gap-5 md:grid-cols-2">
              {capabilities.slice(0, 4).map((capability) => (
                <Card
                  key={capability.title}
                  className="border-slate-200 bg-white hover:border-sky-400/70 hover:shadow-md transition-all"
                >
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <h3 className="font-semibold text-slate-900">
                        {capability.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right: summary / reassurance panel */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-7">
              <h3 className="text-sm font-semibold text-slate-900">
                Built for audited, high-reliability programs
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Whether you&apos;re building for automotive, industrial, or IoT,
                our processes are aligned with <span className="font-semibold">IPC-A-610</span>,{" "}
                <span className="font-semibold">RoHS</span>, and ISO-based quality
                systems. That means fewer surprises in validation and field use.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {capabilities.slice(4).map((capability) => (
                  <li key={capability.title} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    <span>
                      <span className="font-semibold">{capability.title}:</span>{" "}
                      {capability.description}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-xs text-slate-600">
                <p className="font-semibold text-slate-900 mb-1">
                  Need to match a specific standard?
                </p>
                <p>
                  Share your target certifications or customer QA requirements.
                  We&apos;ll map exactly which processes and documentation sets we can align with for your program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ON CAPABILITIES */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Add-on Capabilities</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-200 text-pretty">
              Enhance reliability, environmental resilience, and mechanical robustness with specialized add-ons.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Conformal Coating",
                description: "Protective coating for harsh environments and moisture protection.",
              },
              {
                icon: Thermometer,
                title: "Thermal Testing",
                description: "Temperature cycling and thermal stress analysis.",
              },
              {
                icon: Box,
                title: "Custom Enclosures",
                description: "Design and fabrication of custom product enclosures.",
              },
            ].map((capability) => (
              <Card
                key={capability.title}
                className="border-slate-700 bg-slate-900/80 text-center hover:border-sky-500/70 hover:shadow-xl hover:shadow-sky-900/40 transition-all"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 text-white">
                    <capability.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{capability.title}</h3>
                  <p className="text-sm text-slate-200 leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-950 py-16 md:py-20">
        <div className="container px-4 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Process</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300 text-pretty">
              A proven workflow that keeps you informed and your production predictable.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We understand your requirements, volumes, and quality expectations.",
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Our engineering team optimizes designs for manufacturability & testability.",
              },
              {
                step: "03",
                title: "Production",
                description: "Automated lines, skilled operators, and robust process controls.",
              },
              {
                step: "04",
                title: "Testing & Delivery",
                description: "Multi-stage testing, secure packaging, and on-time dispatch.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="mb-4 text-5xl font-bold text-sky-500/25">{item.step}</div>
                <h3 className="mb-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-sky-600 to-emerald-500 py-16 md:py-20 text-white">
        <div className="container px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Get Started?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-pretty">
            Share your BOM, Gerbers, or design files and our team will come back with a tailored EMS proposal.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact?type=quote">
              <Button size="lg" className="bg-white text-sky-700 hover:bg-slate-100">
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-sky-700 bg-transparent"
              >
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
