"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"
import Link from "next/link"

const AboutCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="circuit-cta" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
              <circle cx="18" cy="18" r="1" fill="white" />
              <path d="M2,2 L18,2 L18,18" stroke="white" strokeWidth="0.5" fill="none" />
              <rect x="8" y="8" width="4" height="4" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-cta)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center text-white transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Transform Your Engineering Vision?
          </h2>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Join the ranks of satisfied clients who have experienced the Globe Tek Solution difference. Let's discuss
            how we can bring your electrical engineering projects to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              <Link href="/quote" className="flex items-center">
                Get Your Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg backdrop-blur-sm bg-white/10"
            >
              <Link href="/projects" className="flex items-center">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="h-6 w-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Call Us</div>
                <div className="opacity-90">+91 94336 63312</div>
                <div className="opacity-90">+91 98308 87070</div>
              </div>
            </div>

            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="h-6 w-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Email Us</div>
                <div className="opacity-90">info@gtsconsultant.in</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
    </section>
  )
}

export default AboutCTA
