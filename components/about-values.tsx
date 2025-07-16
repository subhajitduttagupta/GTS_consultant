"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Lightbulb, Users, Target, Zap } from "lucide-react"

const AboutValues = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from engineering design to project execution and client service.",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      image: "/images/6.jpeg",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical practices, building trust with our clients and partners.",
      gradient: "from-cyan-600 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50",
      image: "/images/5.jpeg",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace innovation and creative problem-solving to develop solutions that address complex engineering challenges.",
      gradient: "from-blue-600 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50",
      image: "/images/10.jpeg",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and collaboration, both within our organization and with our clients.",
      gradient: "from-purple-600 to-cyan-600",
      bgGradient: "from-purple-50 to-cyan-50",
      image: "/images/3.jpeg",
    },
    {
      icon: Target,
      title: "Client Focus",
      description:
        "We are dedicated to understanding and meeting our clients' needs, building long-term relationships based on trust and exceptional service.",
      gradient: "from-cyan-600 to-green-600",
      bgGradient: "from-cyan-50 to-green-50",
      image: "/images/9.jpeg",
    },
    {
      icon: Zap,
      title: "Safety",
      description:
        "We prioritize safety in all aspects of our work, ensuring that our designs and implementations meet the highest safety standards.",
      gradient: "from-green-600 to-blue-600",
      bgGradient: "from-green-50 to-blue-50",
      image: "/images/7.jpeg",
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
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium mb-4">
            Our Core Values
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            What Drives Us Forward
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our values are the foundation of everything we do. They guide our decisions, shape our culture, and define
            our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br ${value.bgGradient} transition-all duration-700 delay-${index * 100} hover:scale-105 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <img
                    src={value.image || "/placeholder.svg"}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60 group-hover:from-white/70 group-hover:to-white/50 transition-all duration-500"></div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>

                <CardContent className="relative z-10 p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${value.gradient} w-0 group-hover:w-full transition-all duration-500`}
                  ></div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutValues
