"use client"

import { useInView } from "react-intersection-observer"

const ContactBanner = () => {
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
            backgroundImage: `url('/images/20.jpeg')`,
          }}
        />
        {/* Blue overlay for industrial feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-600/50 to-blue-400/40" />
      </div>

      {/* Technical Drawing Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-contain bg-left bg-no-repeat opacity-50"
          style={{
            backgroundImage: `url('/images/A4.jpeg')`,
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-2xl opacity-90 leading-relaxed">
            Get in touch with our team to discuss your electrical engineering and instrumentation needs
          </p>
        </div>
      </div>

      {/* Breadcrumb 
      
      <div className="absolute bottom-8 right-8 z-20">
        <div className="text-white/80 text-sm font-medium tracking-wider">CONTACT / GET IN TOUCH</div>
      </div>

      */}

      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-20">
        <div className="text-white/80 text-xs sm:text-sm font-medium tracking-wider bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg border border-white/20">
          CONTACT / GET IN TOUCH
        </div>
      </div>

      {/* Decorative Elements */}
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

export default ContactBanner
