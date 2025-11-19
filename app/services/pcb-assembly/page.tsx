"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Cpu,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Award,
  Phone,
  Mail,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function PCBAssemblyPage() {
  const heroRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const heroSection = heroRef.current
    if (!heroSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(heroSection)
    return () => observer.unobserve(heroSection)
  }, [])

  const offerings = [
    {
      title: "Surface Mount Technology (SMT)",
      description: "High-precision automated SMT assembly for complex PCB designs.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%201-yNMX76IpPNFKbqaM0Gm8DDcluiwQuI.jpg",
    },
    {
      title: "Through-Hole Assembly",
      description: "Reliable through-hole component assembly for robust connections.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service-yywzjFnivLbwthBAkIVKi86etnnzIQ.jpg",
    },
    {
      title: "Mixed Technology Assembly",
      description: "Combined SMT and through-hole assembly for versatile designs.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
    },
    {
      title: "BGA & Micro-BGA Assembly",
      description: "Advanced ball grid array assembly with X-ray inspection.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%202-2YYQ5PDb7mMIThMaQssDFdHxQRP1nT.png",
    },
    {
      title: "Conformal Coating",
      description: "Protective coating services for harsh environment applications.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20-%20Plant%20Photo-Jz7vz9fkVonxheq1i1YsWivgJON7xV.jpg",
    },
    {
      title: "Automated Optical Inspection",
      description: "100% AOI inspection to ensure quality and reliability.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
    },
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO – wire-harness style */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 md:py-28"
      >
        {/* PCB pattern / grid background */}
        <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden>
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pcb-grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ccfbf1" stopOpacity="0.8" />
              </linearGradient>
              <pattern id="pcb-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="white" />
                <path d="M0 40 H80" stroke="#e2e8f0" strokeWidth="1" />
                <path d="M40 0 V80" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="20" cy="20" r="2" fill="#22d3ee" opacity="0.35" />
                <circle cx="60" cy="60" r="2" fill="#22d3ee" opacity="0.35" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pcb-grid)" />
            <rect width="100%" height="100%" fill="url(#pcb-grad)" opacity="0.18" />
          </svg>
        </div>

        {/* Soft glows */}
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/30 blur-3xl" />
        <div className="absolute left-[-40px] bottom-[-40px] h-72 w-72 rounded-full bg-teal-200/30 blur-3xl" />

        <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* LEFT CONTENT */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/85 backdrop-blur-md px-5 py-2 border border-cyan-100 shadow-sm">
                <Cpu className="h-5 w-5 text-cyan-600" />
                <span className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                  High-Reliability PCB Assembly
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Production-grade PCB assembly
                <br />
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                  from prototype to volume.
                </span>
              </h1>

              <p className="text-base md:text-lg text-slate-700 max-w-2xl mb-6">
                Automated SMT lines, through-hole capability, BGA rework and full AOI/X-ray — all under one roof.
                We build boards that pass the first time and keep passing in the field.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold px-7 py-5 text-sm md:text-base shadow-md shadow-cyan-500/30">
                    Request a PCB Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-cyan-600 text-cyan-700 hover:bg-cyan-600 hover:text-white bg-white font-semibold px-7 py-5 text-sm md:text-base"
                >
                  Download Capability Deck
                </Button>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl">
                {[
                  { label: "Assemblies delivered", value: "500+", icon: CheckCircle },
                  { label: "AOI coverage", value: "100%", icon: Cpu },
                  { label: "Production window", value: "24/7", icon: Zap },
                  { label: "Quality system", value: "ISO 9001", icon: Award },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl bg-white/85 border border-slate-100 px-3 py-3 shadow-sm"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50">
                        <Icon className="h-4 w-4 text-cyan-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{item.value}</div>
                        <div className="text-xs text-slate-500">{item.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* RIGHT VISUAL PANEL */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                {/* Main image card */}
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border border-sky-100 bg-white/90 backdrop-blur">
                  <Image
                    src="/images/design-mode/PCB%20Testing2.jpg"
                    alt="Automated PCB assembly line"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/10 via-transparent to-cyan-500/15" />
                  <div className="absolute left-4 bottom-4 rounded-full bg-slate-900/75 text-xs text-slate-50 px-3 py-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    SMT • THT • BGA • AOI • X-Ray
                  </div>
                </div>

                {/* Floating mini stat card */}
                <motion.div
                  className="absolute -bottom-6 left-4 w-56 rounded-2xl bg-white shadow-xl border border-slate-100 p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Recent batch
                    </span>
                    <span className="text-[10px] rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700">
                      0 defects shipped
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 mb-2">
                    Industrial controller PCBs: 2.5K boards / lot with full AOI and functional test.
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Yield</span>
                    <span className="font-semibold text-slate-800">&gt; 99.5%</span>
                  </div>
                </motion.div>

                {/* Secondary floating badge */}
                <motion.div
                  className="absolute -top-4 right-2 rounded-xl bg-white/95 shadow-md border border-sky-100 px-3 py-2 flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="h-6 w-6 rounded-full bg-cyan-50 flex items-center justify-center">
                    <Zap className="h-3 w-3 text-cyan-600" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-700">
                    Optimised for fast NPI to volume ramp.
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full mb-4 border border-cyan-100">
                <Cpu className="h-5 w-5 text-cyan-600" />
                <span className="text-sm font-medium text-cyan-700">End-to-end PCB Assembly</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                Our PCB assembly services combine advanced automation with skilled operators to deliver consistent,
                high-quality circuit boards. From quick-turn prototypes to production, we handle SMT, through-hole and
                mixed-technology builds.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                Automated optical inspection, X-ray for BGAs and comprehensive functional testing make sure every board
                that ships is ready for your system and your customer.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-[#0066CC] mb-1">100%</div>
                  <div className="text-sm text-gray-600 font-medium">AOI Inspection</div>
                </div>
                <div className="p-5 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-[#00A896] mb-1">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Production</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/design-mode/PCB%20Testing2.jpg"
                alt="PCB Assembly Process"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Assembly Process Showcase */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              Advanced Assembly & Testing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-base">
              From automated placement to functional testing and validation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/design-mode/PCB.webp"
                alt="Automated SMT assembly"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium">Automated SMT Assembly</p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src="/images/design-mode/PCB%20Testing2.jpg"
                alt="PCB testing and inspection"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium">Quality Inspection</p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/images/design-mode/PCB%20testing%203.jpg"
                alt="Manual PCB testing"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium">Functional Testing</p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-80 rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200 group md:col-span-2 lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/images/design-mode/Testing.jpg"
                alt="Comprehensive PCB testing"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium">Comprehensive Testing & Validation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty text-base">
              A full range of PCB assembly services for every stage of your product lifecycle.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={offering.image || "/placeholder.svg"}
                      alt={offering.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-gray-900 text-lg">{offering.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{offering.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance & Testing */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Quality Assurance & Testing Excellence</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-pretty">
              Testing protocols designed to catch issues early and ship only reliable boards.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Automated Optical Inspection (AOI)",
                description: "100% AOI coverage for component placement verification and solder joint quality.",
                icon: Shield,
              },
              {
                title: "X-Ray Inspection",
                description: "Advanced X-ray analysis for BGA and hidden solder joint inspection.",
                icon: Zap,
              },
              {
                title: "Functional Testing",
                description: "In-circuit and functional testing to validate board performance.",
                icon: CheckCircle,
              },
              {
                title: "Environmental Testing",
                description: "Temperature cycling and humidity testing for reliability validation.",
                icon: TrendingUp,
              },
              {
                title: "Electrical Testing",
                description: "Comprehensive electrical parameter verification and continuity testing.",
                icon: Cpu,
              },
              {
                title: "Documentation & Traceability",
                description: "Complete test reports and lot traceability for compliance and audits.",
                icon: Shield,
              },
            ].map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-400/60 transition-all hover:shadow-lg hover:shadow-cyan-400/20"
                >
                  <IconComponent className="h-8 w-8 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Certifications & Compliance */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-200"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/design-mode/Testing(1).jpg"
                alt="Quality testing"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-6 border border-blue-100">
                <Shield className="h-5 w-5 text-[#0066CC]" />
                <span className="text-sm font-medium text-[#0066CC]">Certifications & Compliance</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold mb-6 bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                Industry Certifications & Standards
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Our PCB assembly facility maintains recognised industry certifications and compliance standards to
                ensure your products meet demanding market and regulatory requirements.
              </p>

              <div className="space-y-4">
                {[
                  "ISO 9001:2015 — Quality Management System",
                  "IPC-A-610 — Acceptability of Electronic Assemblies",
                  "IPC-J-STD-001 — Requirements for Soldered Electrical and Electronic Assemblies",
                  "RoHS & REACH Compliance",
                  "AEC-Q200 — Automotive electronics qualification",
                  "ISO 13485 — Medical device manufacturing (where applicable)",
                ].map((cert) => (
                  <motion.div
                    key={cert}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle className="h-5 w-5 text-[#00A896] flex-shrink-0" />
                    <p className="text-gray-700 font-medium">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started CTA – aligned with other pages */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-[#0066CC] via-[#007FAF] to-[#00A896] text-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-6xl mx-auto">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)] items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/30 text-xs font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                Built for consistent, scalable PCB production.
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance drop-shadow-lg">
                Ready to move your PCB builds into production?
              </h2>

              <p className="text-sm md:text-base text-white/90 mb-6 max-w-xl leading-relaxed">
                Share your Gerbers, BOM and assembly drawings. Our team will respond with a clear quotation, lead times
                and any DFM recommendations to make your build smoother.
              </p>

              <div className="space-y-3">
                {[
                  "Full SMT, THT and mixed-technology support",
                  "AOI, X-ray and functional testing options",
                  "Flexible prototypes, NPI and volume production",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-white/95">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/25 p-6 shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Talk to our PCB team</h3>
              <p className="text-xs md:text-sm text-white/85 mb-5">
                Choose how you&apos;d like to start the conversation. We usually respond within one business day.
              </p>

              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/90">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </div>
                  <span className="font-medium">sales@jayshreeinstruments.com</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/90">
                    <Phone className="h-4 w-4" />
                    <span>Phone</span>
                  </div>
                  <span className="font-medium">+91 648 929 1400</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button className="bg-white text-[#0066CC] hover:bg-white/90 shadow-lg px-5 py-2 text-sm md:text-base">
                    Upload PCB Files
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/15 bg-transparent px-5 py-2 text-sm md:text-base"
                  >
                    Schedule a Call
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-[11px] md:text-xs text-white/70">
                Prefer NDA first? Mention it in your message and we&apos;ll share a standard template or review yours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
