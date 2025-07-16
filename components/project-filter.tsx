"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProjectFilterProps {
  onFilterChange: (filters: FilterState) => void
}

interface FilterState {
  sector: string
  subSector: string
  service: string
  location: string
}

const ProjectFilter = ({ onFilterChange }: ProjectFilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    sector: "all",
    subSector: "all",
    service: "all",
    location: "all",
  })

  const sectors = [
    { value: "all", label: "All Sectors" },
    { value: "manufacturing", label: "Manufacturing" },
    { value: "oil-gas", label: "Oil & Gas" },
    { value: "power", label: "Power Generation" },
    { value: "pharmaceuticals", label: "Pharmaceuticals" },
    { value: "commercial", label: "Commercial Buildings" },
    { value: "renewable", label: "Renewable Energy" },
  ]

  const subSectors = [
    { value: "all", label: "All Sub Sectors" },
    { value: "steel", label: "Steel Manufacturing" },
    { value: "chemical", label: "Chemical Processing" },
    { value: "refinery", label: "Oil Refinery" },
    { value: "solar", label: "Solar Power" },
    { value: "wind", label: "Wind Power" },
    { value: "office", label: "Office Buildings" },
  ]

  const services = [
    { value: "all", label: "All Services" },
    { value: "electrical-design", label: "Electrical Engineering Design" },
    { value: "instrumentation", label: "Instrumentation & Control" },
    { value: "power-analysis", label: "Power System Analysis" },
    { value: "project-management", label: "Project Management" },
    { value: "commissioning", label: "Commissioning & Testing" },
    { value: "consulting", label: "Technical Consulting" },
  ]

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "mumbai", label: "Mumbai, India" },
    { value: "pune", label: "Pune, India" },
    { value: "bangalore", label: "Bangalore, India" },
    { value: "gujarat", label: "Gujarat, India" },
    { value: "rajasthan", label: "Rajasthan, India" },
    { value: "hyderabad", label: "Hyderabad, India" },
    { value: "uk", label: "United Kingdom" },
    { value: "tamil-nadu", label: "Tamil Nadu, India" },
    { value: "maharashtra", label: "Maharashtra, India" },
  ]

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleReset = () => {
    const resetFilters = {
      sector: "all",
      subSector: "all",
      service: "all",
      location: "all",
    }
    setFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 lg:p-6 rounded-lg mb-6 lg:mb-8">
      <div className="flex flex-col gap-4">
        <div className="text-white font-semibold text-base lg:text-lg">Filter By</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          <Select value={filters.sector} onValueChange={(value) => handleFilterChange("sector", value)}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12">
              <SelectValue placeholder="All Sectors" />
            </SelectTrigger>
            <SelectContent>
              {sectors.map((sector) => (
                <SelectItem key={sector.value} value={sector.value}>
                  {sector.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.subSector} onValueChange={(value) => handleFilterChange("subSector", value)}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12">
              <SelectValue placeholder="All Sub Sectors" />
            </SelectTrigger>
            <SelectContent>
              {subSectors.map((subSector) => (
                <SelectItem key={subSector.value} value={subSector.value}>
                  {subSector.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.service} onValueChange={(value) => handleFilterChange("service", value)}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12">
              <SelectValue placeholder="All Services" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.value} value={service.value}>
                  {service.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filters.location} onValueChange={(value) => handleFilterChange("location", value)}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/70 h-12">
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((location) => (
                <SelectItem key={location.value} value={location.value}>
                  {location.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex justify-center sm:justify-end">
          <Button
            onClick={handleReset}
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 lg:px-8 py-2 lg:py-3 h-12 w-full sm:w-auto"
          >
            RESET FILTERS
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectFilter
