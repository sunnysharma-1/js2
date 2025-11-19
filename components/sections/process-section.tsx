"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ProcessSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  const steps = [
    {
      number: 1,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%201-Ya8hk3l3SlnaasOUk4Vlp7LZiRpDY0.webp",
      title: "Consultation",
      description: "Understanding your requirements",
      details:
        "We begin by thoroughly understanding your project requirements, technical specifications, and business objectives. Our team works closely with you to identify the best approach for your EMS needs.",
    },
    {
      number: 2,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%201-yNMX76IpPNFKbqaM0Gm8DDcluiwQuI.jpg",
      title: "Design & Engineering",
      description: "Technical support & feasibility analysis",
      details:
        "Our experienced engineers provide comprehensive design support, DFM analysis, and feasibility studies to ensure your product is optimized for manufacturing efficiency and cost-effectiveness.",
    },
    {
      number: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
      title: "Prototyping",
      description: "Rapid PCB iterations & testing",
      details:
        "We create functional prototypes quickly, allowing for rapid iterations and testing. This phase ensures all design elements work perfectly before moving to full-scale production.",
    },
    {
      number: 4,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%202-7FHY3dWqix92oGFzI5wjCrPrlII6i6.jpg",
      title: "Procurement",
      description: "Reliable component sourcing",
      details:
        "Our global supply chain network ensures reliable sourcing of high-quality components at competitive prices. We handle all procurement logistics, including inventory management and quality verification.",
    },
    {
      number: 5,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20-%20Plant%20Photo-Jz7vz9fkVonxheq1i1YsWivgJON7xV.jpg",
      title: "Manufacturing",
      description: "Full-scale EMS production",
      details:
        "State-of-the-art manufacturing facilities with advanced SMT lines, automated assembly equipment, and skilled technicians ensure consistent, high-quality production at scale.",
    },
    {
      number: 6,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%202-2YYQ5PDb7mMIThMaQssDFdHxQRP1nT.png",
      title: "Quality Testing",
      description: "Rigorous quality assurance",
      details:
        "Every product undergoes comprehensive testing including AOI, X-ray inspection, functional testing, and environmental stress testing to ensure it meets the highest quality standards.",
    },
    {
      number: 7,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Build%20Box-aiyxQtzdWBTgljQYq0nr9qcvSOfmOE.jpg",
      title: "Packaging & Delivery",
      description: "Secure packaging & logistics",
      details:
        "Professional packaging and efficient logistics ensure your products arrive safely and on time. We provide complete tracking and documentation for every shipment.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0047AB] to-[#06b6d4]">7-Step</span>{" "}
            EMS Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From consultation to delivery, our streamlined process ensures quality, speed, and cost-efficiency at every
            stage.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0047AB] via-[#06b6d4] to-[#0047AB] opacity-20" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const isExpanded = expandedStep === step.number
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#0047AB] to-[#06b6d4] ring-4 ring-white shadow-lg" />
                  </div>

                  <div className={`lg:w-[calc(50%-2rem)] ${isEven ? "lg:mr-auto lg:pr-12" : "lg:ml-auto lg:pl-12"}`}>
                    <div
                      onClick={() => setExpandedStep(isExpanded ? null : step.number)}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
                    >
                      {/* Card content */}
                      <div className="flex flex-col sm:flex-row items-stretch">
                        {/* Image section */}
                        <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                          <Image
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-110"
                          />
                          {/* Step number badge */}
                          <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r from-[#0047AB] to-[#06b6d4] flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                            {step.number}
                          </div>
                        </div>

                        {/* Content section */}
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                              <p className="text-gray-600 text-sm mb-4">{step.description}</p>

                              {/* Expanded details */}
                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pt-4 border-t border-gray-100">
                                      <p className="text-gray-700 leading-relaxed">{step.details}</p>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>

                            {/* Expand button */}
                            <motion.button
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                            >
                              <ChevronDown className="w-5 h-5 text-gray-600" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Ready to start your project with our proven process?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#0047AB] to-[#06b6d4] text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
