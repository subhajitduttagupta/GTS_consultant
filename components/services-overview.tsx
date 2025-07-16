"use client"
import { Button } from "@/components/ui/button"
import { Lightbulb, Gauge, Zap, ClipboardList, CheckCircle, Users, ShieldCheck, CircuitBoard, Building2 } from "lucide-react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"

const ServiceCard = ({ title, description, icon, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const icons = {
    Lightbulb: <Lightbulb className="h-10 w-10" />,
    Gauge: <Gauge className="h-10 w-10" />,
    Zap: <Zap className="h-10 w-10" />,
    ClipboardList: <ClipboardList className="h-10 w-10" />,
    CheckCircle: <CheckCircle className="h-10 w-10" />,
    Users: <Users className="h-10 w-10" />,
  }

  return (
    <div
      ref={ref}
      className={`service-card-overview relative transition-all duration-700 delay-${delay} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden group border border-gray-100">
        {/* Corner Fold Effect */}
        <div className="absolute top-0 right-0 w-0 h-0 transition-all duration-500 ease-out group-hover:w-12 group-hover:h-12 z-10">
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 transform rotate-45 translate-x-6 -translate-y-6 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 transform scale-0 transition-transform duration-700 ease-out group-hover:scale-100 origin-top-right"></div>

        {/* Content */}
        <div className="relative z-20">
          <div className="mb-6 p-3 rounded-full bg-blue-50 w-fit transition-all duration-500 group-hover:bg-white/20">
            <div className="text-blue-600 transition-colors duration-500 group-hover:text-white">{icons[icon]}</div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-800 transition-colors duration-500 group-hover:text-white">
            {title}
          </h3>
          <p className="text-gray-600 mb-6 transition-colors duration-500 group-hover:text-white/90">{description}</p>
          <Link
            href="/services"
            className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center transition-colors duration-300 group-hover:text-white"
          >
            Learn More <span className="ml-1">→</span>
          </Link>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </div>
      </div>
    </div>
  )
}

const ServicesOverview = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Electrical Engineering Design",
      description: "Comprehensive electrical system design for industrial and commercial applications",
      icon: "Lightbulb",
      delay: 0,
    },
    {
      title: "Instrumentation & Control Systems",
      description: "Advanced instrumentation and control systems for process automation",
      icon: "Gauge",
      delay: 100,
    },
    {
      title: "Power System Analysis",
      description: "Detailed power system analysis and optimization for maximum efficiency",
      icon: "Zap",
      delay: 200,
    },
    {
      title: "Project Management",
      description: "End-to-end project management for electrical and instrumentation projects",
      icon: "ClipboardList",
      delay: 300,
    },
    {
      title: "Commissioning & Testing",
      description: "Thorough commissioning and testing of electrical and instrumentation systems",
      icon: "CheckCircle",
      delay: 400,
    },
    {
      title: "Technical Consulting",
      description: "Expert technical consulting for complex engineering challenges",
      icon: "Users",
      delay: 500,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We provide comprehensive electrical engineering and instrumentation services tailored to meet your specific
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="animated-button">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
