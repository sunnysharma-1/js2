"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(1)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  const slides = [
    {
      id: 0,
      title: "Development",
      video:
        "https://videos.pexels.com/video-files/3571936/3571936-sd_640_360_30fps.mp4",
      fallbackImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20Purchasing%201-Ya8hk3l3SlnaasOUk4Vlp7LZiRpDY0.webp",
    },
    {
      id: 1,
      title: "Design Research",
      video:
        "https://videos.pexels.com/video-files/3571937/3571937-sd_640_360_30fps.mp4",
      fallbackImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Testing-KDadL2g4iPPdYLLzkn6aSKKGfW8jJP.jpg",
    },
    {
      id: 2,
      title: "Design Engineering",
      video:
        "https://videos.pexels.com/video-files/3571938/3571938-sd_640_360_30fps.mp4",
      fallbackImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service%201-yNMX76IpPNFKbqaM0Gm8DDcluiwQuI.jpg",
    },
    {
      id: 3,
      title: "Product Design",
      video:
        "https://videos.pexels.com/video-files/3571939/3571939-sd_640_360_30fps.mp4",
      fallbackImage:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PCB%20Assembly%20Service-yywzjFnivLbwthBAkIVKi86etnnzIQ.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e5a8e] via-[#1a7a9e] to-[#00a8a8] min-h-[600px]">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 text-white space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
              Turning Ideas into Electronics.
            </h1>

            <p className="text-xl lg:text-2xl font-semibold">
              22+ Years of Expertise in Electronics Manufacturing Services
            </p>

            <p className="text-base lg:text-lg text-white/90 max-w-xl">
              End-to-End EMS Solutions including PCB Assembly, Prototyping, Wire
              Harness & Box
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {/* Updated Button to link to /contact */}
              <Button
                asChild
                size="lg"
                className="bg-white text-[#1e5a8e] hover:bg-white/90 font-semibold"
              >
                <a href="/contact">Get Started</a>
              </Button>
              {/* Updated Button to link to /services */}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-semibold bg-transparent"
              >
                <a href="/services">View Services</a>
              </Button>
            </div>
          </div>

          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-1/2">
            <div
              className="relative h-[400px] lg:h-full w-full overflow-hidden"
              style={{
                // Apply the clipPath only on large screens, removing it for mobile
                clipPath:
                  activeSlide !== -1
                    ? "none"
                    : "polygon(15% 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <div
                className="relative h-full w-full overflow-hidden"
                style={{
                  // Re-applied the clipPath specifically with a media query to fix mobile view
                  // In Tailwind CSS, you'd use lg:clip-path-[...] but since it's inline style
                  // we'll rely on the parent element's grid/absolute positioning, and use !important
                  // or a better Tailwind setup. For this change, we'll keep the inline style but rely on
                  // the `lg:` utility classes on the parent div's layout to handle the visual break.
                  // Removing the inline clipPath and relying on the `lg:absolute` fixes the mobile issue.
                  // Let's only apply the clip-path via a utility class that only runs on large screens.
                  // Since Tailwind doesn't support arbitrary values with responsive prefixes in clip-path
                  // in standard config, we'll use a wrapper with the style property for the clipping.

                  // Let's move the clip-path back, but make sure the parent's layout is correct.
                  // The issue on mobile is likely that the clip-path makes the video disappear.
                  // The simplest fix is to only apply the clip-path on the `lg` breakpoint.
                  // Since we can't use responsive prefixes for arbitrary style values, we'll
                  // conditionally apply the style property only on desktop.
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      activeSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div
                      className="h-full w-full"
                      // Re-applied the clipPath to a wrapper that only takes effect on desktop
                      // by relying on the media query baked into the Tailwind `lg:` prefix utilities
                      // on the parent element's geometry. The issue on mobile is that `clipPath` makes
                      // the video disappear when it's not absolutely positioned correctly.
                      // Applying the style below, but wrapped in a check for the current view, is complex
                      // in plain React. The better fix is to apply the style where it *can* be conditionally applied.
                      // The original code uses a clip-path that works poorly on mobile when the element isn't
                      // yet wide/positioned for desktop. We'll simplify the style property to only apply the clip
                      // when the component is wide enough (which is what `lg:` would imply)
                      style={{
                        clipPath:
                          isLargeScreen
                            ? "polygon(15% 0, 100% 0, 100% 100%, 0 100%)"
                            : "none",
                      }}
                    >
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                        poster={slide.fallbackImage}
                      >
                        <source src={slide.video} type="video/mp4" />
                        <img
                          src={slide.fallbackImage || "/placeholder.svg"}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      </video>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center lg:justify-end gap-8 lg:gap-12 text-sm lg:text-base">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                className={`transition-colors hover:text-[#1e5a8e] ${
                  activeSlide === index
                    ? "text-[#1e5a8e] font-bold"
                    : "text-gray-400"
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}