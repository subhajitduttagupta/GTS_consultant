"use client"

import { useInView } from "react-intersection-observer"
import { Calendar, Rocket, Building, Award, Globe, Lightbulb } from "lucide-react"

const TimelineItem = ({ year, title, description, index, icon: Icon, isLast }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="mb-8 sm:mb-12 relative">
      {/* Mobile Timeline Layout */}
      <div className="block sm:hidden">
        <div className="flex items-start space-x-4">
          {/* Timeline Node */}
          <div className="flex-shrink-0 relative">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 shadow-xl rounded-full flex items-center justify-center border-4 border-white">
              <Icon className="h-6 w-6 text-white" />
            </div>
            {/* Connecting Line for mobile */}
            {!isLast && (
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-600 to-cyan-600"></div>
            )}
          </div>

          {/* Content Card for mobile */}
          <div
            className={`bg-white rounded-xl shadow-xl px-6 py-4 border border-blue-100 relative overflow-hidden transition-all duration-700 delay-${index * 100} flex-1 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>

            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="flex items-center mb-2">
                <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                <h3 className="font-bold text-blue-600 text-xl">{year}</h3>
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-800">{title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Timeline Layout */}
      <div className="hidden sm:flex items-center w-full">
        {/* Left Content Card Container */}
        <div
          className={`w-5/12 px-8 py-6 transition-all duration-700 delay-${index * 100} ${
            inView
              ? "opacity-100 translate-x-0"
              : index % 2 !== 0 // If odd, card is on left, so it slides in from left
                ? "opacity-0 -translate-x-20"
                : "opacity-0 translate-x-20" // If even, card is on right, so this empty container slides from right
          } ${index % 2 !== 0 ? "order-1" : "order-3"}`} // Order: 1 for left card, 3 for empty right space
        >
          {index % 2 !== 0 && ( // Render content if index is odd (card on left)
            <div className="bg-white rounded-xl shadow-xl border border-blue-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-bold text-blue-600 text-2xl">{year}</h3>
                </div>
                <h4 className="font-bold text-xl mb-3 text-gray-800">{title}</h4>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          )}
        </div>

        {/* Timeline Node (centered) */}
        <div className="w-2/12 flex justify-center relative z-20 order-2">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 shadow-xl rounded-full flex items-center justify-center border-4 border-white">
            <Icon className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Right Content Card Container */}
        <div
          className={`w-5/12 px-8 py-6 transition-all duration-700 delay-${index * 100} ${
            inView
              ? "opacity-100 translate-x-0"
              : index % 2 === 0 // If even, card is on right, so it slides in from right
                ? "opacity-0 translate-x-20"
                : "opacity-0 -translate-x-20" // If odd, card is on left, so this empty container slides from left
          } ${index % 2 === 0 ? "order-3" : "order-1"}`} // Order: 3 for right card, 1 for empty left space
        >
          {index % 2 === 0 && ( // Render content if index is even (card on right)
            <div className="bg-white rounded-xl shadow-xl border border-blue-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
              <div className="relative z-10 p-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-bold text-blue-600 text-2xl">{year}</h3>
                </div>
                <h4 className="font-bold text-xl mb-3 text-gray-800">{title}</h4>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const CompanyTimeline = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timeline = [
    {
      year: "2021",
      title: "Company Founded",
      description:
        "Globe Tek Solution was founded with a vision to provide innovative electrical engineering and instrumentation solutions.",
      icon: Rocket,
    },
    {
      year: "2022",
      title: "First Major Projects & Growth",
      description:
        "Successfully completed over 25 diverse projects, establishing a strong foundation and reputation for quality and reliability in the industry.",
      icon: Building,
    },
    {
      year: "2023",
      title: "Service Expansion & Automation",
      description:
        "Expanded our core offerings to include advanced automation and control systems, enhancing our comprehensive service portfolio and client capabilities.",
      icon: Lightbulb,
    },
    {
      year: "2024",
      title: "Client Growth & Sustainable Solutions",
      description:
        "Achieved significant client growth and launched new initiatives in sustainable engineering solutions, focusing on energy efficiency and environmental impact.",
      icon: Globe,
    },
    {
      year: "2025",
      title: "Future Vision & Innovation",
      description:
        "Looking ahead, we continue to innovate and deliver cutting-edge solutions, aiming for global leadership in electrical and instrumentation engineering with a focus on Industry 4.0.",
      icon: Award,
    },
  ]

  return (
    <section className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-1000 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Milestones of Excellence
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            The story of Globe Tek Solution's growth and evolution over the years, marked by innovation, expansion, and
            unwavering commitment to excellence.
          </p>
        </div>

        <div className="relative">
          {/* Main Timeline Line for Desktop */}
          <div className="hidden sm:block absolute border-opacity-20 border-gray-400 h-full border-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-blue-600 to-cyan-600"></div>

          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CompanyTimeline
