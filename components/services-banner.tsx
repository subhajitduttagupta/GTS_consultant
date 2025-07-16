"use client"

import { useInView } from "react-intersection-observer"

const ServicesBanner = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/4.jpeg')`, // Replace with your service image
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 via-indigo-600/60 to-blue-500/50" />
      </div>

      {/* Technical Drawing Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-contain bg-left bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url('/images/OurServicesTitle.jpeg')`, // Updated to the new image
            backgroundSize: "50% auto",
          }}
        />
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`container mx-auto px-4 z-10 text-white relative transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-2xl opacity-90 leading-relaxed">
            Comprehensive electrical and instrumentation solutions tailored for industrial success.
          </p>
        </div>
      </div>

      {/* Breadcrumb 
      <div className="absolute bottom-8 right-8 z-20">
        <div className="text-white/80 text-sm font-medium tracking-wider">SERVICES / EXPERTISE</div>
      </div>
      */}

      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-20">
        <div className="text-white/80 text-xs sm:text-sm font-medium tracking-wider bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg border border-white/20">
          SERVICES / EXPERTISE
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
        <div className="flex space-x-8 opacity-30">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default ServicesBanner
