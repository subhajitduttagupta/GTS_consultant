"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Link from "next/link"

interface Project {
  id: number
  title: string
  category: string
  location: string
  year: string
  description: string
  image: string
  challenge: string
  solution: string
  results: string
  sector: string
  subSector: string
  service: string
  locationKey: string
}

interface AnimatedProjectCardProps {
  project: Project
  index: number
}

const AnimatedProjectCard = ({ project, index }: AnimatedProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`project-card-container relative transition-all duration-700 delay-${(index % 3) * 100} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/projects/${project.id}`}>
        <Card className="project-card-enhanced relative overflow-hidden h-full bg-white border border-gray-200 transition-all duration-500 hover:shadow-2xl group cursor-pointer">
          {/* Corner Fold Effect */}
          <div className="absolute top-0 right-0 w-0 h-0 transition-all duration-500 ease-out group-hover:w-16 group-hover:h-16 z-10">
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 transform rotate-45 translate-x-8 -translate-y-8 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-400 transform rotate-45 translate-x-8 -translate-y-8 transition-all duration-500 ease-out delay-75 group-hover:translate-x-0 group-hover:translate-y-0 opacity-70"></div>
          </div>

          {/* Animated Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 transform scale-0 transition-transform duration-700 ease-out group-hover:scale-100 origin-top-right"></div>

          {/* Project Image */}
          <div className="relative overflow-hidden h-48">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-blue-900/40"></div>
          </div>

          {/* Card Content */}
          <CardContent className="relative z-20 p-6">
            {/* Location */}
            <div className="flex items-center mb-3 transition-colors duration-500 group-hover:text-orange-300">
              <MapPin className="h-4 w-4 mr-2 text-orange-500 transition-colors duration-500 group-hover:text-orange-300" />
              <span className="text-orange-500 font-medium text-sm transition-colors duration-500 group-hover:text-orange-300">
                Location: {project.location}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-gray-800 transition-colors duration-500 group-hover:text-white line-clamp-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-500 group-hover:text-white/90 line-clamp-3">
              {project.description}
            </p>

            {/* Category and Year */}
            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 transition-colors duration-500 group-hover:border-white/20">
              <span className="text-blue-600 font-medium text-sm transition-colors duration-500 group-hover:text-white">
                {project.category}
              </span>
              <span className="text-gray-500 text-sm transition-colors duration-500 group-hover:text-white/70">
                {project.year}
              </span>
            </div>
          </CardContent>

          {/* Shimmer Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </div>

          {/* Hover Indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  )
}

export default AnimatedProjectCard
