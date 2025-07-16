"use client"

import { useState, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import AnimatedProjectCard from "@/components/animated-project-card"
import ProjectFilter from "@/components/project-filter"

interface FilterState {
  sector: string
  subSector: string
  service: string
  location: string
}

const ProjectGrid = ({ projects }) => {
  const [filters, setFilters] = useState<FilterState>({
    sector: "all",
    subSector: "all",
    service: "all",
    location: "all",
  })

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      return (
        (filters.sector === "all" || project.sector === filters.sector) &&
        (filters.subSector === "all" || project.subSector === filters.subSector) &&
        (filters.service === "all" || project.service === filters.service) &&
        (filters.location === "all" || project.locationKey === filters.location)
      )
    })
  }, [projects, filters])

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters)
  }

  return (
    <div>
      {/* Filter Section */}
      <ProjectFilter onFilterChange={handleFilterChange} />

      {/* Results Count */}
      <div
        ref={headerRef}
        className={`mb-8 transition-all duration-700 ${
          headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-gray-600">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <AnimatedProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* No Results */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
          <p className="text-gray-500">Try adjusting your filters to see more results.</p>
        </div>
      )}
    </div>
  )
}

export default ProjectGrid
