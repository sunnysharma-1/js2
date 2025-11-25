import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#020617]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1e293b_0%,_#020617_100%)] opacity-50" />
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Glowing Orbs */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066CC] rounded-full blur-[120px] opacity-20"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00A896] rounded-full blur-[120px] opacity-20"
        />
      </div>

      <div className="container mx-auto max-w-screen-2xl px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/50"
        >
          {/* Glass Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-10 p-8 md:p-12 lg:p-16 items-center">
            <div className="space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#0066CC]/20 to-[#00A896]/20 border border-white/10 backdrop-blur-sm mx-auto md:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-300 tracking-wide uppercase">Ready to Start?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Bring Your Electronics <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4CC2FF] to-[#00A896]">
                  Project to Life
                </span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                Partner with Jayshree Instruments for world-class EMS solutions. From rapid prototyping to mass production, we deliver excellence.
              </p>
            </div>

            <div className="relative flex flex-col items-center justify-center gap-6">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066CC] to-[#00A896] rounded-full opacity-10 blur-3xl" />

              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-lg bg-gradient-to-r from-[#0066CC] to-[#00A896] hover:from-[#005bb5] hover:to-[#008c7d] text-white font-semibold rounded-2xl shadow-lg shadow-blue-900/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  Response in 24h
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                  ISO Certified
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
