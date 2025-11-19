"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Award, Users, Zap } from 'lucide-react'

export default function VideoIntroductionSection() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // lock body scroll when modal open
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const youtubeId = 'dalCFsZGDGI' // YouTube video id (keeps code clean)
  const poster = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=675&fit=crop"

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#0066CC]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-[#00A896]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">

          {/* Left: poster + modal YouTube player */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100">
              {/* Clickable poster that opens a modal with the iframe */}
              <div
                role="button"
                tabIndex={0}
                aria-label="Play company introduction video"
                onClick={() => setOpen(true)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(true) }}
                className="w-full h-full cursor-pointer select-none"
              >
                <img src={poster} alt="Jayshree Instruments video poster" className="w-full h-auto block" />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                    className="h-20 w-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#0066CC] to-[#00A896] flex items-center justify-center shadow-2xl">
                      <svg className="h-8 w-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 h-24 w-24 bg-gradient-to-br from-[#0066CC] to-[#00A896] rounded-2xl opacity-20 blur-xl" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-gradient-to-br from-[#00A896] to-[#0066CC] rounded-2xl opacity-20 blur-xl" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="inline-block px-4 py-2 bg-[#0066CC]/10 rounded-full">
              <span className="text-sm font-semibold text-[#0066CC] uppercase tracking-wide">
                Welcome to Jayshree Instruments
              </span>
            </div>

            {/* Avoid pure-black text as requested by your team; use dark gray */}
            <h2 className="text-3xl font-bold text-gray-800 md:text-4xl lg:text-5xl leading-tight text-balance">
              Your Trusted Partner in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066CC] to-[#00A896]">
                Electronics Manufacturing
              </span>
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-gray-600 text-pretty">
              With over 25+ years of experience in EMS, we specialize in PCB Assembly, Wire Harnessing, Box Build, and
              Prototyping. Watch our video to discover how we transform innovative ideas into market-ready products with
              precision, quality, and reliability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#0066CC]/5 to-transparent rounded-xl"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#00A896] flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">ISO Certified</div>
                  <div className="text-sm text-gray-600">Quality Excellence</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#00A896]/5 to-transparent rounded-xl"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-[#00A896] to-[#0066CC] flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Expert Team</div>
                  <div className="text-sm text-gray-600">22+ Years Experience</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#0066CC]/5 to-transparent rounded-xl"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-[#0066CC] to-[#00A896] flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">500+ Projects</div>
                  <div className="text-sm text-gray-600">Successfully Delivered</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#00A896]/5 to-transparent rounded-xl"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gradient-to-br from-[#00A896] to-[#0066CC] flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Fast Turnaround</div>
                  <div className="text-sm text-gray-600">Rapid Prototyping</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal: YouTube iframe */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-4xl mx-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 p-2 rounded focus:outline-none focus:ring"
              aria-label="Close video"
            >
              ✕
            </button>

            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                title="Jayshree Instruments — Introduction"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                width="560"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
