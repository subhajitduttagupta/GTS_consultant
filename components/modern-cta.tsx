"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, PhoneCall } from "lucide-react"
import Link from "next/link"

const ModernCTA = () => {
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
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 right-32 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="white" />
              <circle cx="18" cy="18" r="1" fill="white" />
              <path d="M2,2 L18,2 L18,18" stroke="white" strokeWidth="0.5" fill="none" />
              <rect x="8" y="8" width="4" height="4" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center text-white transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge */}
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
              Ready to Get Started?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your Engineering Vision Into Reality
          </h2>

          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
            Join the ranks of industry leaders who trust Globe Tek Solution for their electrical engineering and
            instrumentation needs. Let's discuss how we can power your success.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-6 mb-12 lg:mb-16">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 lg:px-10 py-3 lg:py-4 rounded-lg shadow-xl transform transition-all duration-200 hover:scale-105 w-full sm:w-auto"
            >
              <Link href="/quote" className="flex items-center justify-center">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 lg:px-10 py-3 lg:py-4 rounded-lg backdrop-blur-sm bg-white/10 w-full sm:w-auto"
            >
              <Link href="/projects" className="flex items-center justify-center">
                View Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Phone className="h-6 w-6 lg:h-8 lg:w-8 mb-3 lg:mb-4 text-cyan-400" />
              <div className="font-semibold text-base lg:text-lg mb-2">Call Us</div>
              <div className="opacity-90 text-center text-sm lg:text-base">
                <div>+91 94336 63312</div>
                <div>+91 98308 87070</div>
                <div className="text-xs lg:text-sm mt-1">Mon-Fri 9AM-6PM IST</div>
              </div>
            </div>

            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Mail className="h-6 w-6 lg:h-8 lg:w-8 mb-3 lg:mb-4 text-cyan-400" />
              <div className="font-semibold text-base lg:text-lg mb-2">Email Us</div>
              <div className="opacity-90 text-center text-sm lg:text-base">
                <div className="break-all">info@gtsconsultant.in</div>
                <div className="text-xs lg:text-sm mt-1">24-hour response time</div>
              </div>
            </div>

            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 sm:col-span-3 lg:col-span-1">
              <PhoneCall className="h-6 w-6 lg:h-8 lg:w-8 mb-3 lg:mb-4 text-cyan-400" />
              <div className="font-semibold text-base lg:text-lg mb-2">Request a Callback</div>
              <div className="opacity-90 text-center text-sm lg:text-base">
                <div>Leave your number, we'll call you back</div>
                <div className="text-xs lg:text-sm mt-1">Within 24 business hours</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-center">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <div className="font-semibold">Free Consultation</div>
                <div className="text-sm opacity-80">No obligation assessment</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">⚡</span>
              </div>
              <div>
                <div className="font-semibold">Quick Response</div>
                <div className="text-sm opacity-80">Within 24 hours</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold">🏆</span>
              </div>
              <div>
                <div className="font-semibold">Proven Results</div>
                <div className="text-sm opacity-80">25+ successful projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
    </section>
  )
}

export default ModernCTA
