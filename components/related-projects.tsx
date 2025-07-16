"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
}

interface RelatedProjectsProps {
  currentProjectId: number
  projects: Project[]
}

const RelatedProjects = ({ currentProjectId, projects }: RelatedProjectsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Filter out current project and get up to 3 related projects
  const relatedProjects = projects.filter((project) => project.id !== currentProjectId).slice(0, 3)

  if (relatedProjects.length === 0) return null

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
    >
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Related Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RelatedProjects
