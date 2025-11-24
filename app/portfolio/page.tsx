"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Award,
  Users,
  Sparkles,
  Cpu,
  Factory,
  Microscope,
  Globe,
  Quote
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Advanced PCB Prototype Development",
      category: "prototyping",
      description:
        "Complex multi-layer PCB prototype with integrated power management, multiple ribbon cable connections, and advanced testing protocols. Delivered rapid prototyping with full functional testing within 48 hours.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prototype%201-lW7RnR3FC9GA1M4VzePrxYhgAgJAGA.jpg",
      specs: ["Multi-layer PCB", "48-hour turnaround", "Full functional testing"],
      industry: "Industrial Automation",
    },
    {
      id: 2,
      title: "Automated PCB Assembly Line",
      category: "manufacturing",
      description:
        "State-of-the-art automated assembly line featuring robotic soldering, precision component placement, and real-time quality control. Capable of producing 10,000+ units per day with 99.9% accuracy.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB-lgCSelsub9Lfxylqe3lHChysLiUKQW.webp",
      specs: ["Robotic assembly", "10K+ units/day", "99.9% accuracy"],
      industry: "Consumer Electronics",
    },
    {
      id: 3,
      title: "Custom Wire Harness Solutions",
      category: "wire-harness",
      description:
        "Precision-engineered wire harness assemblies with custom connectors, color-coded wiring, and rigorous testing. Designed for harsh environments with IP67 protection and military-grade specifications.",
      image:
        "/assets/Wire Harness 2.jpg",
      specs: ["Custom connectors", "IP67 rated", "Military-grade"],
      industry: "Aerospace & Defense",
    },
    {
      id: 4,
      title: "Multi-Conductor Cable Assembly",
      category: "wire-harness",
      description:
        "High-performance multi-conductor cables with shielded construction, precision termination, and extensive testing. Suitable for high-frequency applications and industrial environments.",
      image:
        "/assets/Wire Harness 1.jpg",
      specs: ["Shielded construction", "High-frequency", "Precision termination"],
      industry: "Telecommunications",
    },
    {
      id: 5,
      title: "Complete Box Build Assembly",
      category: "box-build",
      description:
        "Full system integration including PCB assembly, mechanical housing, power supplies, and final testing. Complete turnkey solution from component sourcing to final product delivery.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Prototype-Q7ZiAHET4axkKd48srOWiJdcfhxaZ2.jpg",
      specs: ["Turnkey solution", "System integration", "Complete testing"],
      industry: "Medical Devices",
    },
    {
      id: 6,
      title: "Precision PCB Testing & QC",
      category: "manufacturing",
      description:
        "Comprehensive testing protocols including AOI, X-ray inspection, functional testing, and burn-in testing. ISO 9001 certified processes ensuring the highest quality standards.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Testing2-zuho0XuniXPHpC9ilOcON96hr8ZWAl.jpg",
      specs: ["AOI inspection", "X-ray testing", "ISO 9001 certified"],
      industry: "Automotive",
    },
  ]

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter(p => p.category === activeTab)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-linear-to-br from-[#0066CC]/20 via-transparent to-[#00A896]/20" />

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
                className="inline-flex items-auto gap-2 rounded-full bg-linear-to-r from-[#0066CC]/20 to-[#00A896]/20 px-6 py-3 backdrop-blur-sm border border-white/10"
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
                  className="bg-linear-to-r from-[#0066CC] to-[#0052A3] hover:from-[#0052A3] hover:to-[#003D7A] text-white font-semibold text-lg px-8 py-6 shadow-lg shadow-[#0066CC]/50"
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
                      src="https://cdn.prod.website-files.com/6624daae3f39ffabcd0c74a9/68146f9116395333148fe5c8_DSCN5980.JPG"
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

      {/* FILTERABLE GALLERY */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Discover how we solve complex manufacturing challenges with precision and speed.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white border border-slate-200 p-1 rounded-full shadow-sm">
                <TabsTrigger value="all" className="rounded-full px-6 data-[state=active]:bg-slate-900 data-[state=active]:text-white">All</TabsTrigger>
                <TabsTrigger value="prototyping" className="rounded-full px-6 data-[state=active]:bg-slate-900 data-[state=active]:text-white">Prototyping</TabsTrigger>
                <TabsTrigger value="manufacturing" className="rounded-full px-6 data-[state=active]:bg-slate-900 data-[state=active]:text-white">Manufacturing</TabsTrigger>
                <TabsTrigger value="wire-harness" className="rounded-full px-6 data-[state=active]:bg-slate-900 data-[state=active]:text-white">Wire Harness</TabsTrigger>
                <TabsTrigger value="box-build" className="rounded-full px-6 data-[state=active]:bg-slate-900 data-[state=active]:text-white">Box Build</TabsTrigger>
              </TabsList>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project) => (
                  <Card key={project.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <Button variant="secondary" size="sm" className="w-full font-semibold">
                          View Details
                        </Button>
                      </div>
                      <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 hover:bg-white">
                        {project.industry}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.specs.map((spec, i) => (
                          <span key={i} className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-lg opacity-30" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <Image
                  src="/assets/image1p.png"
                  alt="Featured Case Study"
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-8 -right-8 bg-white text-slate-900 p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500 font-semibold">Efficiency Boost</div>
                    <div className="text-2xl font-bold">40% Faster</div>
                  </div>
                </div>
                <p className="text-xs text-slate-600">Production time reduced significantly through automated testing.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" /> Featured Case Study
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical Device PCB Assembly</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  A breakthrough in rapid medical prototyping. We helped a leading MedTech startup move from concept to clinical trial units in under 3 weeks.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <span className="text-cyan-400 font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">The Challenge</h4>
                    <p className="text-slate-400 text-sm">Strict ISO 13485 compliance requirements combined with an extremely tight investor deadline.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <span className="text-cyan-400 font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">The Solution</h4>
                    <p className="text-slate-400 text-sm">Parallel processing of PCB fabrication and component sourcing, utilizing our in-house X-ray inspection for immediate QC.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                    <span className="text-cyan-400 font-bold">03</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">The Result</h4>
                    <p className="text-slate-400 text-sm">100% defect-free delivery of 50 prototype units, enabling the client to secure Series A funding.</p>
                  </div>
                </div>
              </div>

              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg rounded-full">
                Read Full Case Study <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SHOWCASE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Powered by Technology</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We invest in the latest manufacturing equipment to ensure precision and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SMT Lines",
                desc: "High-speed pick & place machines capable of 0201 components.",
                icon: Cpu,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB-lgCSelsub9Lfxylqe3lHChysLiUKQW.webp"
              },
              {
                title: "Automated Optical Inspection",
                desc: "100% visual inspection for component presence and polarity.",
                icon: Microscope,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Testing2-zuho0XuniXPHpC9ilOcON96hr8ZWAl.jpg"
              },
              {
                title: "Environmental Testing",
                desc: "Thermal cycling and burn-in chambers for reliability testing.",
                icon: Globe,
                image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg"
              }
            ].map((tech, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-4 p-3 bg-white/10 backdrop-blur-md w-fit rounded-xl text-white">
                    <tech.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tech.title}</h3>
                  <p className="text-slate-300 text-sm">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Innovators</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Jayshree Instruments delivered our prototypes in record time. Their engineering feedback actually improved our final design significantly.",
                author: "Sarah Chen",
                role: "CTO, NextGen Robotics",
                company: "Robotics"
              },
              {
                quote: "The quality consistency for our high-volume run has been impeccable. A true partner in our supply chain.",
                author: "Michael Ross",
                role: "Operations Director",
                company: "AutoSystems Inc."
              }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-white border-none shadow-lg p-8 relative">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100" />
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Sparkles key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-lg italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0066CC] to-[#00A896] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale Your Production?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            From prototype to mass production, we have the expertise and capacity to deliver.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#0066CC] hover:bg-slate-100 text-lg px-8 py-6 rounded-full font-bold shadow-xl">
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-[#0066CC] text-lg px-8 py-6 rounded-full font-bold">
              <Link href="/services">View Capabilities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function Clock(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}
