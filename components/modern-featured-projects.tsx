"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const ModernFeaturedProjects = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: "E&I Engineering for Uranium Drier Calciner System",
      category: "Electrical & Instrumentation Engineering",
      location: "DASA, Nigeria",
      year: "2025",
      description:
        "Complete electrical and instrumentation design for the Drier Calciner system in a uranium slug handling facility, featuring radiation-tolerant automation and high-reliability controls.",
      image: "/images/10.jpeg",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      stats: [
        { label: "Safety Compliance", value: "100%" },
        { label: "System Uptime", value: "100%" },
        { label: "Delivery Time", value: "10 Months" },
      ],
      technologies: ["PLC", "SCADA", "Radiation-Hardened Components"],
    },

    {
      id: 2,
      title: "Redial Collection Well E&I System with 11kV Substation",
      category: "Electrical & Instrumentation Engineering",
      location: "Khirasol, West Bengal, India",
      year: "2025",
      description:
        "Comprehensive E&I system for a PHED intake pump house, featuring 11kV substation, SCADA integration, and smart instrumentation for efficient water intake operations.",
      image: "/images/6.jpeg",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      stats: [
        { label: "Substation Voltage", value: "11 kV" },
        { label: "Project Duration", value: "10 months" },
        { label: "Automation Coverage", value: "100%" },
      ],
      technologies: ["SCADA", "PLC", "Smart Instrumentation"],
    },
    {
      id: 4,
      title: "Gas Cleaning Plant E&I Detail Engineering",
      category: "Electrical & Instrumentation Engineering",
      location: "Kolinganagar, Jajpur, Odisha, India",
      year: "2025",
      description:
        "Complete detail engineering of electrical, instrumentation, and automation systems for a gas cleaning plant in a major steel facility, including SCADA and PLC architecture.",
      image: "/images/7.jpeg",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
      stats: [
        { label: "Project Duration", value: "9 months" },
        { label: "Automation Scope", value: "Full Plant" },
        { label: "Cable Engineered", value: "18+ km" },
      ],
      technologies: ["SCADA", "PLC", "Industrial Instrumentation", "Cable Routing"],
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
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
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Engineering Excellence in Action
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover how we've transformed complex engineering challenges into innovative solutions that drive
            efficiency, safety, and sustainability across diverse industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg shadow-xl transform transition-all duration-200 hover:scale-105"
          >
            <Link href="/projects" className="flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Card
      ref={ref}
      className={`group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br ${project.bgGradient} transition-all duration-700 delay-${index * 200} hover:scale-105 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 bg-gradient-to-r ${project.gradient} text-white text-xs font-medium rounded-full shadow-lg`}
          >
            {project.category}
          </span>
        </div>

        {/* External Link Icon */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <ExternalLink className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>

      <CardContent className="relative z-10 p-4 lg:p-6">
        {/* Location and Year */}
        <div className="flex items-center justify-between mb-3 text-xs lg:text-sm text-gray-600">
          <div className="flex items-center">
            <MapPin className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
            <span className="truncate">{project.location}</span>
          </div>
          <div className="flex items-center flex-shrink-0">
            <Calendar className="h-3 w-3 lg:h-4 lg:w-4 mr-1" />
            {project.year}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg lg:text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
          {project.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.stats.map((stat, statIndex) => (
            <div key={statIndex} className="text-center">
              <div
                className={`text-sm lg:text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
              >
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1 lg:gap-2 mb-4">
          {project.technologies.slice(0, 2).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-white/60 text-gray-700 text-xs rounded-full border border-gray-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 2 && (
            <span className="px-2 py-1 bg-white/60 text-gray-700 text-xs rounded-full border border-gray-200">
              +{project.technologies.length - 2}
            </span>
          )}
        </div>

        {/* Learn More Link */}
        <Link
          href={`/projects/${project.id}`}
          className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300`}
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>

        {/* Hover Effect Line */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.gradient} w-0 group-hover:w-full transition-all duration-500`}
        ></div>
      </CardContent>
    </Card>
  )
}

export default ModernFeaturedProjects
