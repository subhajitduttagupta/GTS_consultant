"use client"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const AboutStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    engineers: 0,
  })

  const finalValues = {
    projects: 25,
    clients: 15,
    experience: 4,
    engineers: 50,
  }

  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounters({
          projects: Math.floor(finalValues.projects * progress),
          clients: Math.floor(finalValues.clients * progress),
          experience: Math.floor(finalValues.experience * progress),
          engineers: Math.floor(finalValues.engineers * progress),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounters(finalValues)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [inView])

  const stats = [
    {
      value: counters.projects,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      value: counters.clients,
      suffix: "+",
      label: "Happy Clients",
      description: "Trusted partnerships built over the years",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      value: counters.experience,
      suffix: "+",
      label: "Years Experience",
      description: "Decades of engineering excellence",
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
    },
    {
      value: counters.engineers,
      suffix: "+",
      label: "Expert Engineers",
      description: "Skilled professionals driving innovation",
      gradient: "from-purple-600 to-cyan-600",
      bgGradient: "from-purple-50 to-cyan-50",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Numbers That Speak
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the trust our clients place in us and the impact we've made
            across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${stat.bgGradient} p-8 shadow-xl border border-white/50 transition-all duration-700 delay-${index * 100} ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                >
                  {stat.value}
                  {stat.suffix}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{stat.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStats
