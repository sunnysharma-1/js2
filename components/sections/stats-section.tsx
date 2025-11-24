import { Shield, Award, Globe2, TrendingUp } from "lucide-react"

export function StatsSection() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto max-w-screen-2xl px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">Why Trust Us</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            Industry-leading expertise backed by proven results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-slate-900 mb-2">22+ Years</div>
                <div className="text-slate-900 font-semibold mb-1">EMS Experience</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Two decades of excellence in electronic manufacturing services
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center">
                <Award className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-slate-900 mb-2">ISO & IATF</div>
                <div className="text-slate-900 font-semibold mb-1">Certified Quality</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Internationally recognized quality management standards
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-slate-900 mb-2">10+ Industries</div>
                <div className="text-slate-900 font-semibold mb-1">Diverse Expertise</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Automotive, Medical, Consumer Electronics, and Industrial
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center">
                <Globe2 className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="text-3xl font-bold text-slate-900 mb-2">Global Reach</div>
                <div className="text-slate-900 font-semibold mb-1">Worldwide Service</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Serving clients across international markets with excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
