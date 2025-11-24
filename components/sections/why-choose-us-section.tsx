export function WhyChooseUsSection() {
  const stats = [
    {
      value: "95%+",
      description: "On-time delivery rate with zero compromise on quality standards.",
    },
    {
      value: "1,200+",
      description: "Successful projects delivered across multiple industries worldwide.",
    },
    {
      value: "30%+",
      description: "Average cost reduction achieved through our optimized processes.",
    },
    {
      value: "25%+",
      description: "Faster time-to-market compared to traditional manufacturing methods.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="max-w-6xl mx-auto">
          {/* Headings */}
          <div className="mb-16">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Why Choose Us</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0066CC]">Experience. Quality. Speed.</h2>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {stats.map((stat, index) => (
              <div key={index} className="flex">
                <div className="flex-1 text-center px-6">
                  <div className="text-5xl md:text-6xl font-bold text-[#0066CC] mb-4">{stat.value}</div>
                  <p className="text-gray-700 text-sm leading-relaxed">{stat.description}</p>
                </div>
                {/* Vertical divider - hidden on mobile, shown on larger screens, hidden after last item */}
                {index < stats.length - 1 && <div className="hidden lg:block w-px bg-gray-300 self-stretch" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
