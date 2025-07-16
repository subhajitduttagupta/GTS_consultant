"use client"

import { useInView } from "react-intersection-observer"

const ModernClientsSection = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [clientsRef, clientsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const clients = [
    {
      name: "Tata Steel",
      logo: "/logos/tata-steel.png",
      category: "Steel & Manufacturing",
    },
    {
      name: "L&T",
      logo: "/logos/lt.png",
      category: "Engineering & Construction",
    },
    {
      name: "Adani Power",
      logo: "/logos/adani-power.png",
      category: "Power Generation",
    },
    {
      name: "JSW",
      logo: "/logos/jsw.png",
      category: "Steel & Infrastructure",
    },
    {
      name: "JSL",
      logo: "/logos/jsl.png",
      category: "Steel & Manufacturing",
    },
    {
      name: "Berger Paint",
      logo: "/logos/berger-paint.png",
      category: "Paints & Coatings",
    },
    {
      name: "Indian Oil",
      logo: "/logos/indian-oil.png",
      category: "Oil & Gas",
    },
    {
      name: "Aditya Birla Group",
      logo: "/logos/aditya-birla.png",
      category: "Diversified Conglomerate",
    },
    {
      name: "Balmer Lawrie",
      logo: "/logos/balmer-lawrie.png",
      category: "Industrial Services",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium mb-6">
            Trusted Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Industry Leaders Trust Us
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We've had the privilege of partnering with some of the most respected companies across various industries,
            delivering solutions that drive their success.
          </p>
        </div>

        {/* Clients Grid */}
        <div
          ref={clientsRef}
          className={`transition-all duration-1000 ${
            clientsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 delay-${index * 100} hover:scale-105`}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                {/* Client Logo */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="h-16 md:h-20 w-full flex items-center justify-center mb-3">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-800 text-sm">{client.name}</div>
                    <div className="text-xs text-gray-500">{client.category}</div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">150+</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Trusted Clients</h3>
              <p className="text-gray-600 text-sm">Companies across diverse industries</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">99%</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Client Retention</h3>
              <p className="text-gray-600 text-sm">Long-term partnerships built on trust</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">24/7</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Support Available</h3>
              <p className="text-gray-600 text-sm">Round-the-clock assistance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModernClientsSection
