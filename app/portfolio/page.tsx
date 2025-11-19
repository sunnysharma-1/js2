"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight, Zap, Shield, Award, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PortfolioPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const projects = [
    {
      title: "Advanced PCB Prototype Development",
      category: "Prototyping & Testing",
      description:
        "Complex multi-layer PCB prototype with integrated power management, multiple ribbon cable connections, and advanced testing protocols. Delivered rapid prototyping with full functional testing within 48 hours.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prototype%201-lW7RnR3FC9GA1M4VzePrxYhgAgJAGA.jpg",
      specs: ["Multi-layer PCB", "48-hour turnaround", "Full functional testing", "Power management integration"],
      industry: "Industrial Automation",
    },
    {
      title: "Automated PCB Assembly Line",
      category: "High-Volume Manufacturing",
      description:
        "State-of-the-art automated assembly line featuring robotic soldering, precision component placement, and real-time quality control. Capable of producing 10,000+ units per day with 99.9% accuracy.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB-lgCSelsub9Lfxylqe3lHChysLiUKQW.webp",
      specs: ["Robotic assembly", "10K+ units/day", "99.9% accuracy", "Real-time QC"],
      industry: "Consumer Electronics",
    },
    {
      title: "Custom Wire Harness Solutions",
      category: "Wire Harness & Cable Assembly",
      description:
        "Precision-engineered wire harness assemblies with custom connectors, color-coded wiring, and rigorous testing. Designed for harsh environments with IP67 protection and military-grade specifications.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wire%20Harness%202-OStu7z2gP8CKXcBDSJIKUqbwmmIbLT.jpg",
      specs: ["Custom connectors", "IP67 rated", "Military-grade", "Color-coded"],
      industry: "Aerospace & Defense",
    },
    {
      title: "Multi-Conductor Cable Assembly",
      category: "Cable Manufacturing",
      description:
        "High-performance multi-conductor cables with shielded construction, precision termination, and extensive testing. Suitable for high-frequency applications and industrial environments.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wire%20Harness%201-ACjGaYPnUhjJenWNTydiTJ4k8545Ta.jpg",
      specs: ["Shielded construction", "High-frequency", "Precision termination", "Industrial grade"],
      industry: "Telecommunications",
    },
    {
      title: "Complete Box Build Assembly",
      category: "System Integration",
      description:
        "Full system integration including PCB assembly, mechanical housing, power supplies, and final testing. Complete turnkey solution from component sourcing to final product delivery.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prototype-Q7ZiAHET4axkKd48srOWiJdcfhxaZ2.jpg",
      specs: ["Turnkey solution", "System integration", "Final assembly", "Complete testing"],
      industry: "Medical Devices",
    },
    {
      title: "Precision PCB Testing & QC",
      category: "Quality Assurance",
      description:
        "Comprehensive testing protocols including AOI, X-ray inspection, functional testing, and burn-in testing. ISO 9001 certified processes ensuring the highest quality standards.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Testing2-zuho0XuniXPHpC9ilOcON96hr8ZWAl.jpg",
      specs: ["AOI inspection", "X-ray testing", "Functional testing", "ISO 9001 certified"],
      industry: "Automotive",
    },
  ]

  const capabilities = [
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "24-48 hour turnaround for prototype PCB assembly and testing",
      metric: "48hrs",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO 9001, ISO 14001, and RoHS compliant manufacturing processes",
      metric: "99.9%",
    },
    {
      icon: Award,
      title: "Industry Experience",
      description: "22+ years serving aerospace, medical, automotive, and industrial sectors",
      metric: "22+ yrs",
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      description: "Trusted by Fortune 500 companies and innovative startups worldwide",
      metric: "500+",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066CC]/20 via-transparent to-[#00A896]/20" />

        <div className="relative mx-auto max-auto px-4 sm:px-3 lg:px-8 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-auto gap-2 rounded-full bg-gradient-to-r from-[#0066CC]/20 to-[#00A896]/20 px-6 py-3 backdrop-blur-sm border border-white/10"
              >
                <Sparkles className="h-4 w-4 text-[#00A896]" />
                <span className="text-sm font-semibold text-white">Excellence in Every Project</span>
              </motion.div>

              <div className="space-y-4 max-w-2xl">
                <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
                  Transforming Ideas Into
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#00A896]">
                    Manufacturing Reality
                  </span>
                </h1>
                <p className="text-lg text-gray-300 md:text-xl leading-relaxed">
                  Explore our portfolio of cutting-edge electronics manufacturing projects. From rapid prototyping to
                  high-volume production, we deliver precision, quality, and innovation across every industry.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 max-w-xl">
                {[
                  { value: "10M+", label: "PCBs Manufactured" },
                  { value: "500+", label: "Active Clients" },
                  { value: "99.9%", label: "Quality Rate" },
                  { value: "22+", label: "Years Experience" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="space-y-1"
                  >
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-[#0066CC] to-[#0052A3] hover:from-[#0052A3] hover:to-[#003D7A] text-white font-semibold text-lg px-8 py-6 shadow-lg shadow-[#0066CC]/50"
                >
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 bg-white/5 backdrop-blur-sm"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <div className="relative h-48 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    <Image src="/images/design-mode/PCB.webp" alt="PCB Assembly" fill className="object-cover" />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    <Image src="/images/design-mode/Prototype201.jpg" alt="Prototype" fill className="object-cover" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-4 pt-8"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    <Image
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpY-dYb5sDrnyi68_6Zw3xb_9lYSdZe9rkdw&s"
                      alt="Testing"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    <Image src="/images/design-mode/Testing.jpg" alt="Wire Harness" fill className="object-cover" />
                  </div>
                </motion.div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#00A896] to-[#008C7A] text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/20"
              >
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm">Support Available</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="rgb(249, 250, 251)"
            />
          </svg>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-auto px-4 sm:px-3 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">Our Capabilities</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
              Industry-leading manufacturing capabilities backed by decades of experience and cutting-edge technology
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {capabilities.map((capability, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-2 hover:border-[#0066CC] transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0066CC]/10">
                      <capability.icon className="h-8 w-8 text-[#0066CC]" />
                    </div>
                    <div className="mb-2 text-3xl font-bold text-[#0066CC]">{capability.metric}</div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{capability.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-auto px-4 sm:px-3 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
              Real-world examples of our manufacturing excellence across diverse industries and applications
            </p>
          </motion.div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-2 hover:border-[#0066CC] transition-all duration-300 hover:shadow-2xl">
                  <div className={`grid gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block rounded-full bg-[#0066CC] px-4 py-2 text-sm font-semibold text-white">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-12">
                      <div className="mb-3 text-sm font-semibold text-[#00A896]">{project.industry}</div>
                      <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">{project.title}</h3>
                      <p className="mb-6 text-gray-600 leading-relaxed text-lg">{project.description}</p>
                      <div className="mb-6 grid grid-cols-2 gap-3">
                        {project.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-[#00A896] mt-0.5" />
                            <span className="text-sm text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-fit bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold" asChild>
                        <Link href="/contact">
                          Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-auto px-4 sm:px-3 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">Our Manufacturing Process</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
              From concept to delivery, we follow a proven process that ensures quality at every step
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Design & Engineering",
                description:
                  "Expert DFM analysis and design optimization to ensure manufacturability and cost-effectiveness",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prototype-rzBk9wKHwcuTq7115nVPyac40XuLqj.webp",
              },
              {
                step: "02",
                title: "Prototyping & Testing",
                description:
                  "Rapid prototyping with comprehensive testing protocols to validate design and functionality",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prototype%201-lW7RnR3FC9GA1M4VzePrxYhgAgJAGA.jpg",
              },
              {
                step: "03",
                title: "Production & Assembly",
                description:
                  "Automated assembly lines with real-time quality control for consistent, high-volume production",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB-lgCSelsub9Lfxylqe3lHChysLiUKQW.webp",
              },
              {
                step: "04",
                title: "Quality Inspection",
                description:
                  "Multi-stage inspection including AOI, X-ray, and functional testing to ensure zero defects",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20testing%203-2tuDpnLrCdPJYlwr1aEz1lZR6rCRcZ.jpg",
              },
              {
                step: "05",
                title: "Final Assembly",
                description: "Complete box build and system integration with meticulous attention to detail",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prototype-Q7ZiAHET4axkKd48srOWiJdcfhxaZ2.jpg",
              },
              {
                step: "06",
                title: "Delivery & Support",
                description: "On-time delivery with comprehensive documentation and ongoing technical support",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-WUbVBIclyUWnbIbEwZ8UHjosaYwrju.jpg",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-2 hover:border-[#0066CC] transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48">
                    <Image
                      src={process.image || "/placeholder.svg"}
                      alt={process.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#0066CC] text-xl font-bold text-white">
                      {process.step}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0066CC] to-[#003D7A]">
        <div className="mx-auto max-w-auto px-4 sm:px-3 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Ready to Start Your Next Project?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl leading-relaxed">
              Join hundreds of satisfied clients who trust us with their electronics manufacturing needs. Get a free
              quote today and experience the Jayshree Instruments difference.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#0066CC] hover:bg-gray-100 font-semibold text-lg px-8 py-6"
              >
                <Link href="/contact">
                  Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/10 text-white hover:bg-white/10 font-semibold text-lg px-8 py-6 bg-transparent"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
