"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, Award, Users, Zap } from "lucide-react"

export default function VideoIntroductionSection() {
  const [playing, setPlaying] = useState(false)

  const youtubeId = "dalCFsZGDGI"
  const poster =
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&h=675&fit=crop"

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 md:py-20 lg:py-24">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#0066CC]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#00A896]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0066CC]/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#00A896]" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0066CC]">
                Welcome to Jayshree Instruments
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-balance text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
                Building{" "}
                <span className="bg-gradient-to-r from-[#0066CC] to-[#00A896] bg-clip-text text-transparent">
                  reliable electronics
                </span>{" "}
                for tomorrow&apos;s products.
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-600 text-pretty">
                With 25+ years in Electronics Manufacturing Services, Jayshree Instruments
                delivers PCB Assembly, Wire Harnessing, Box Build and Prototyping with
                uncompromised quality and on-time delivery. Watch our short introduction to see
                how we convert concepts into production-ready solutions.
              </p>
            </div>

            {/* CTA Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0066CC] to-[#00A896] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0066CC]/20 transition hover:translate-y-0.5 hover:shadow-xl"
              >
                ▶ Watch Company Introduction
              </button>
              <span className="text-sm text-gray-500">
                ~2 minute overview of our capabilities
              </span>
            </div>

            {/* Stats / Highlights */}
            <div className="grid gap-4 pt-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0066CC] to-[#00A896]">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">ISO Certified Processes</div>
                  <div className="text-sm text-gray-600">
                    Robust QMS for every build and batch.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#00A896] to-[#0066CC]">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Expert EMS Team</div>
                  <div className="text-sm text-gray-600">22+ years of domain experience.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#0066CC] to-[#00A896]">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">500+ Projects Delivered</div>
                  <div className="text-sm text-gray-600">
                    From prototypes to volume production.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-slate-100">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#00A896] to-[#0066CC]">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Fast Turnaround</div>
                  <div className="text-sm text-gray-600">
                    Agile prototyping and NPI support.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Inline video / poster */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative order-first lg:order-last"
          >
            <div className="relative rounded-3xl border border-slate-100 bg-white/80 p-3 shadow-2xl shadow-slate-900/5">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-72 lg:h-80">
                {playing ? (
                  <iframe
                    title="Jayshree Instruments — Introduction"
                    src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                    width="560"
                    height="315"
                    className="h-full w-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    aria-label="Play company introduction video"
                    onClick={() => setPlaying(true)}
                    className="relative h-full w-full cursor-pointer select-none"
                  >
                    <Image
                      src={poster}
                      alt="Jayshree Instruments video poster"
                      fill
                      className="object-cover"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                    {/* Play button + label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                      <motion.div
                        animate={{ scale: [1, 1.06, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#0066CC] to-[#00A896] shadow-xl shadow-[#0066CC]/40">
                          <svg
                            className="ml-1 h-8 w-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </motion.div>
                      <p className="text-sm font-medium text-white/90">
                        Play Introduction Video
                      </p>
                    </div>

                    {/* Corner badge */}
                    <div className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      EMS • PCB Assembly • Box Build
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* decorative glow */}
            <div className="pointer-events-none absolute -bottom-10 left-1/2 h-32 w-72 -translate-x-1/2 rounded-full bg-[#0066CC]/15 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
