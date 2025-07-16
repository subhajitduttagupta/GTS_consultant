"use client"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight } from "lucide-react"

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`project-card rounded-lg overflow-hidden bg-white shadow-md transition-all duration-700 delay-${index * 100} ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative cursor-pointer">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="project-image object-cover w-full h-64"
              />
              <div className="project-overlay absolute inset-0 bg-blue-900/70 flex items-center justify-center">
                <span className="text-white font-medium">View Details</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <span className="text-sm text-gray-500">{project.year}</span>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>
              {project.category} | {project.location} | {project.year}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                <p className="text-sm">{project.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Solution</h4>
                <p className="text-sm">{project.solution}</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Results</h4>
                <p className="text-sm">{project.results}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const FeaturedProjects = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: "Industrial Power Distribution System",
      category: "Electrical Engineering",
      location: "Mumbai, India",
      year: "2023",
      description:
        "Design and implementation of a comprehensive power distribution system for a major manufacturing facility.",
      image: "/images/4.jpeg",
      challenge:
        "The client needed a reliable power distribution system capable of supporting their 24/7 manufacturing operations with minimal downtime.",
      solution:
        "We designed a redundant power distribution system with automatic transfer switches and backup generators to ensure continuous operation even during power outages.",
      results:
        "The implemented system has maintained 99.99% uptime over the past year, significantly improving production efficiency and reducing operational costs.",
    },
    {
      id: 2,
      title: "Automated Control System for Chemical Plant",
      category: "Instrumentation",
      location: "Pune, India",
      year: "2022",
      description: "Development and installation of an advanced control system for a chemical processing plant.",
      image: "/images/10.jpeg",
      challenge:
        "The client needed to upgrade their outdated control system to improve process efficiency, safety, and product quality.",
      solution:
        "We implemented a state-of-the-art distributed control system (DCS) with advanced analytics capabilities and safety interlocks.",
      results:
        "The new control system reduced process variability by 40%, improved product quality, and enhanced overall plant safety.",
    },
    {
      id: 3,
      title: "Smart Building Electrical Systems",
      category: "Electrical Engineering",
      location: "Bangalore, India",
      year: "2023",
      description: "Design and implementation of smart electrical systems for a commercial office building.",
      image: "/images/2.jpg",
      challenge: "The client wanted to create a sustainable, energy-efficient building with integrated smart systems.",
      solution:
        "We designed an intelligent electrical system with automated lighting, HVAC control, and power management integrated with a building management system.",
      results:
        "The smart systems reduced energy consumption by 30% compared to conventional buildings of similar size and function.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            Explore some of our recent projects where we've delivered innovative electrical engineering and
            instrumentation solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="animated-button inline-flex items-center">
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
