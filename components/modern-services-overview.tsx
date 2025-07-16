"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Gauge, Zap, ShieldCheck, CircuitBoard, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

const ModernServicesOverview = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Zap,
      title: "Medium Voltage Engineering",
      description:
        "Comprehensive MV power system solutions including transformer sizing, switchgear design, and system protection",
      image: "/images/6.jpeg",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      features: ["Transformer Sizing", "Short Circuit Studies", "MV Switchgear Design"],
    },
    {
      icon: Gauge,
      title: "Instrumentation & Control Systems",
      description: "Intelligent process control solutions with complete documentation and system integration",
      image: "/images/10.jpeg",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      features: ["Logic & Interlocks", "Control Block Diagrams", "System Integration"],
    },
    {
      icon: ShieldCheck,
      title: "Security & Communication Systems",
      description: "Integrated security infrastructure with CCTV, fire alarm, access control, and data systems",
      image: "/images/7.jpeg",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      features: ["CCTV & FDA", "Access Control", "Data & PA Systems"],
    },
    {
      icon: CircuitBoard,
      title: "Electrical Distribution Systems",
      description: "Complete electrical distribution and protection design with focus on safety and reliability",
      image: "/images/5.jpeg",
      gradient: "from-purple-500 to-cyan-500",
      bgGradient: "from-purple-50 to-cyan-50",
      features: ["Switchboards", "UPS Design", "Lightning Protection"],
    },
    {
      icon: Lightbulb,
      title: "Lighting & Environmental Engineering",
      description: "Efficient lighting solutions and HVAC support through detailed heat load analysis",
      image: "/images/2.jpg",
      gradient: "from-cyan-500 to-green-500",
      bgGradient: "from-cyan-50 to-green-50",
      features: ["Lighting Design", "Heat Load Calculation", "Energy Efficiency"],
    },
    {
      icon: Building2,
      title: "Process Plant Engineering",
      description: "End-to-end engineering for process plants with integrated electrical and control systems",
      image: "/images/1.jpg",
      gradient: "from-green-500 to-blue-500",
      bgGradient: "from-green-50 to-blue-50",
      features: ["E&I Integration", "Plant Optimization", "Complete Design"],
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
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
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Comprehensive Engineering Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We provide end-to-end electrical engineering and instrumentation services tailored to meet your specific
            industry needs, backed by cutting-edge technology and decades of expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return <ServiceCard key={index} service={service} icon={Icon} index={index} />
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg shadow-xl transform transition-all duration-200 hover:scale-105"
          >
            <Link href="/services" className="flex items-center">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service, icon: Icon, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Card
      ref={ref}
      className={`group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br ${service.bgGradient} transition-all duration-700 delay-${index * 100} hover:scale-105 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
        <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/30 group-hover:from-white/80 group-hover:to-white/30 transition-all duration-500"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

      <CardContent className="relative z-10 p-6 lg:p-8 h-full flex flex-col">
        {/* Icon */}
        <div
          className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-4 lg:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-4 lg:mb-6">
          {service.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center text-xs lg:text-sm text-gray-600">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 flex-shrink-0"></div>
              {feature}
            </div>
          ))}
        </div>

        {/* Learn More Link */}
        <Link
          href="/services"
          className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300`}
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>

        {/* Hover Effect Line */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-500`}
        ></div>
      </CardContent>
    </Card>
  )
}

export default ModernServicesOverview
