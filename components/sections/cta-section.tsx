import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-[#1e5a8e] to-[#00a8a8] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Bring Your Electronics Project to Life?
          </h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Get in touch with our team today to discuss your project requirements and receive a custom quote.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-white text-[#1e5a8e] hover:bg-white/90 font-semibold text-lg px-8"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
