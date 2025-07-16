"use client"

import { useInView } from "react-intersection-observer"
import { Building, Users, Award } from "lucide-react"

const AboutBanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="relative min-h-[80vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110"
          style={{
            backgroundImage: `url('/images/4.jpeg')`,
          }}
        />
        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-cyan-600/60 to-blue-800/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/40" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 right-32 w-24 h-24 bg-cyan-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fillOpacity='0.3'%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='white' strokeWidth='0.5'/%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='80' r='2'/%3E%3Cpath d='M20 20h60v60' fill='none' stroke='white' strokeWidth='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`container mx-auto px-4 z-10 text-white relative transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium border border-white/30">
              Engineering Excellence Since 2010
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Globe Tek</span>{" "}
            Solution
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto opacity-90 leading-relaxed px-4">
            Pioneering electrical engineering and instrumentation solutions that power the future of industry. Discover
            our journey, values, and the passionate team behind our success.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-3 border border-white/20 w-full sm:w-auto">
              <Building className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-cyan-400 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-sm sm:text-base">25+ Projects</div>
                <div className="text-xs sm:text-sm opacity-80">Successfully Delivered</div>
              </div>
            </div>

            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-3 border border-white/20 w-full sm:w-auto">
              <Users className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-blue-400 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-sm sm:text-base">50+ Engineers</div>
                <div className="text-xs sm:text-sm opacity-80">Expert Team</div>
              </div>
            </div>

            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-3 border border-white/20 w-full sm:w-auto">
              <Award className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-cyan-400 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-sm sm:text-base">4+ Years</div>
                <div className="text-xs sm:text-sm opacity-80">Industry Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-20">
        <div className="text-white/80 text-xs sm:text-sm font-medium tracking-wider bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg border border-white/20">
          ABOUT / COMPANY OVERVIEW
        </div>
      </div>
    </div>
  )
}

export default AboutBanner
