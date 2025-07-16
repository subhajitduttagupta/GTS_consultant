"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail, Award, Briefcase } from "lucide-react"

const TeamMember = ({ member, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Card
      ref={ref}
      className={`group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-blue-50 transition-all duration-700 delay-${index * 100} hover:scale-105 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div className="aspect-w-1 aspect-h-1 relative">
          <img
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            className="object-cover w-full h-64 transition-all duration-500 group-hover:scale-110"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Floating Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <Award className="h-4 w-4 text-blue-600" />
        </div>
      </div>

      <CardContent className="relative z-10 p-6">
        {/* Name and Position */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {member.name}
          </h3>
          <div className="flex items-center mt-1">
            <Briefcase className="h-4 w-4 text-blue-600 mr-2" />
            <p className="text-blue-600 font-medium text-sm">{member.position}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/company/globe-tek-solution"
            className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <Linkedin size={16} />
            <span className="sr-only">LinkedIn</span>
          </a>

          <a
            href="mailto:contact@gtsconsultant.in"
            className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
          >
            <Mail size={16} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        {/* Hover Effect Line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 w-0 group-hover:w-full transition-all duration-500"></div>
      </CardContent>
    </Card>
  )
}

const TeamSection = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const team = [
    {
      name: "SOMA CHAKRABORTY",
      position: "Co-Founder",

      image: "/images/soma.jpeg",
    },
    {
      name: "ABHIRUP BHATTACHARYA",
      position: "Co-Founder",

      image: "/images/Abhirup.jpeg",
    },
    {
      name: "HEMANTA DAWN",
      position: "Chief Technical Officer",

      image: "/images/Hemanta.png",
    },
    {
      name: "S. S. GUPTA",
      position: "Engineering Manager",

      image: "/images/S S Gupta.png",
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
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium mb-4">
            Our Leadership Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Meet the Experts
          </h2>
          <p className="text-lg text-gray-600">
            Meet the visionary leaders who drive our mission to deliver exceptional electrical engineering and
            instrumentation solutions across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
