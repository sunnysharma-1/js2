"use client"

import { useState } from "react"
import { motion, Variants } from "framer-motion"
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    company: "IoT Solutions, Industrial Automation",
    text: "We were struggling with consistent quality from overseas vendors. Jinst provided end-to-end EMS support locally, reducing our defect rate by 25%.",
    role: "CEO",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Medical Devices, Healthcare Technology",
    text: "Jinst's expertise in medical device manufacturing helped us achieve FDA compliance faster than expected. Their attention to detail is unmatched.",
    role: "Product Director",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "Automotive Electronics, EV Solutions",
    text: "The team at Jinst delivered our automotive electronics project on time and within budget. Their scalability allowed us to ramp up production seamlessly.",
    role: "Engineering Lead",
    rating: 5,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function TestimonialsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-teal-100/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-blue-700">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-balance">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover how leading companies across industries have transformed their manufacturing with Jinst EMS Solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <motion.div
                animate={{
                  y: hoveredCard === index ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="relative h-full bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Card background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-teal-50/0 group-hover:from-blue-50 group-hover:to-teal-50 rounded-2xl transition-all duration-300" />

                <div className="relative space-y-6">
                  {/* Quote and Rating */}
                  <div className="flex items-start justify-between">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-blue-600"
                    >
                      <Quote className="h-8 w-8" />
                    </motion.div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 leading-relaxed italic font-medium">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="space-y-2 pt-6 border-t border-slate-200">
                    <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
                    <p className="text-sm font-semibold text-blue-600">{testimonial.role}</p>
                    <p className="text-xs text-slate-600">{testimonial.company}</p>
                  </div>

                  {/* Accent line that appears on hover */}
                  <motion.div
                    animate={{
                      width: hoveredCard === index ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-600 font-medium">
            Trusted by <span className="text-blue-600 font-bold">50+</span> industry leaders worldwide
          </p>
        </motion.div>
      </div>
    </section>
  )
}
