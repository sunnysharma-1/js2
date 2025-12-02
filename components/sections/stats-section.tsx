import { Shield, Award, Globe2, TrendingUp } from "lucide-react"

export function StatsSection() {
  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-3xl" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-teal-50/50 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-screen-2xl px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">Why Trust Us</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">
            Industry-leading expertise backed by proven results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <Shield className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">22+ Years</div>
                <div className="text-slate-900 font-semibold mb-2">EMS Experience</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Two decades of excellence in electronic manufacturing services
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300">
                <Award className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">ISO & IATF</div>
                <div className="text-slate-900 font-semibold mb-2">Certified Quality</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Internationally recognized quality management standards
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                <TrendingUp className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">10+ Industries</div>
                <div className="text-slate-900 font-semibold mb-2">Diverse Expertise</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Automotive, Medical, Consumer Electronics, and Industrial
                </p>
              </div>
            </div>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-300">
                <Globe2 className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">Global Reach</div>
                <div className="text-slate-900 font-semibold mb-2">Worldwide Service</div>
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
