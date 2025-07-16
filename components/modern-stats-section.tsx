"use client"

import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { TrendingUp, Users, Award, Zap } from "lucide-react"

const ModernStatsSection = () => {
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
      const duration = 2000
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
      icon: TrendingUp,
      value: counters.projects,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered across industries",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Users,
      value: counters.clients,
      suffix: "+",
      label: "Happy Clients",
      description: "Trusted partnerships worldwide",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      icon: Award,
      value: counters.experience,
      suffix: "+",
      label: "Years Experience",
      description: "Decades of engineering excellence",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
    },
    {
      icon: Zap,
      value: counters.engineers,
      suffix: "+",
      label: "Expert Engineers",
      description: "Skilled professionals driving innovation",
      gradient: "from-purple-500 to-cyan-500",
      bgGradient: "from-purple-50 to-cyan-50",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={ref}
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl lg:rounded-2xl bg-gradient-to-br ${stat.bgGradient} p-4 lg:p-8 shadow-xl border border-white/50 transition-all duration-700 delay-${index * 100} hover:scale-105`}
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 lg:w-24 lg:h-24 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full blur-xl"></div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center mb-3 lg:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 lg:mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <h3 className="text-sm lg:text-xl font-semibold text-gray-800 mb-1 lg:mb-2 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                    {stat.label}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ModernStatsSection
