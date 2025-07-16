import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import CircuitBackground from "@/components/circuit-background"

const getProject = (id: string) => {
  const projects = [
    {
      id: 1,
      title: "Electrical & Instrumentation Engineering for Drier Calcinur - Uranium Slug Handling System",
      category: "Electrical & Instrumentation Engineering",
      location: "DASA, Nigeria",
      year: "2025",
      sectors: ["Nuclear", "Industrial", "Engineering Services"],
      services: ["Electrical Design", "Instrumentation Engineering", "System Integration"],
      description:
        "Complete electrical and instrumentation engineering for the Drier Calcinur unit within a uranium slug handling system at a nuclear facility in Nigeria. Delivered on behalf of GEM Drytech Solution.",
      fullDescription:
        "GEM Drytech Solution entrusted our team with the complete electrical and instrumentation (E&I) engineering of the Drier Calcinur system, a critical component of a uranium slug handling operation at the DASA site in Nigeria. The scope encompassed detailed design, specification, procurement assistance, and system integration of power and control systems tailored to stringent nuclear industry standards. Our work included control panel design, motor and sensor selection, loop diagrams, PLC integration, and compliance with international safety and radiation protection norms. Seamless coordination with process engineers and strict adherence to project timelines were instrumental in the successful delivery of this high-stakes project.",
      image: "/images/10.jpeg",
      challenge:
        "The client required a high-reliability E&I system capable of withstanding harsh operational environments and meeting rigorous nuclear safety standards. Integration with an existing partially-commissioned infrastructure presented added complexity.",
      solution:
        "We developed a comprehensive E&I design integrating specialized instrumentation for uranium processing, custom-built control panels, and redundant power systems. All components were engineered for radiation-hardened environments and supported by advanced diagnostics and monitoring capabilities.",
      results:
        "The E&I system was completed and integrated on schedule, passing all functional and safety compliance checks without revision. It has operated continuously with zero critical faults, setting a benchmark in safety and process efficiency for similar installations.",
      technologies: ["PLC Systems", "Radiation-Hardened Components", "Industrial Control Panels", "SCADA Integration"],
      duration: "10 months",
      teamSize: "15 engineers and specialists",
      clientTestimonial:
        "Their expertise in electrical and instrumentation systems was evident from start to finish. The project was delivered with precision and professionalism, and the system’s performance has exceeded expectations.",
      images: ["/images/dasa-1.png", "/images/dasa-2.png"],
    },

    {
      id: 2,
      title: "Redial Collection Well Electrical & Instrumentation System",
      category: "Electrical & Instrumentation Engineering",
      location: "Khirasol, West Bengal, India",
      year: "2025",
      sectors: ["Water Supply", "Public Infrastructure"],
      services: [
        "Electrical Engineering Design",
        "Instrumentation Engineering",
        "Substation Design",
        "Project Execution Support",
      ],
      description:
        "Complete electrical and instrumentation engineering for the redial collection well at the intake pump house under PHED West Bengal, including design and integration of an 11kV substation, executed through Punga Tek Consultancy Engineering.",
      fullDescription:
        "Punga Tek Consultancy Engineering was engaged for the complete electrical and instrumentation engineering of the redial collection well located at the intake pump house under PHED West Bengal in Khirasol. The project scope included design, layout, and implementation of an 11kV substation, motor control centers (MCC), field instrumentation, and SCADA integration. All systems were designed to ensure high reliability, operational efficiency, and remote monitoring capabilities for seamless operation of water intake and distribution processes.",
      image: "/images/6.jpeg",
      challenge:
        "The intake pump house required a fully integrated electrical and instrumentation system capable of supporting continuous water intake operations with minimal manual intervention. Site remoteness and synchronization with existing PHED systems posed additional engineering challenges.",
      solution:
        "We provided a detailed design of the 11kV substation and associated control systems, implemented smart field instrumentation, and integrated SCADA for centralized monitoring. Coordination with civil and mechanical teams ensured seamless integration of electrical and instrumentation components within the existing infrastructure.",
      results:
        "The project was delivered within timeline and budget, enabling efficient water intake operations with remote control and monitoring capabilities. The system met all PHED compliance requirements and significantly improved operational reliability.",
      technologies: ["11kV Substation", "SCADA", "Field Instruments", "MCC Panels", "PLC Systems"],
      duration: "10 months",
      teamSize: "9 engineers",
      clientTestimonial:
        "Punga Tek Consultancy provided robust engineering solutions tailored to our needs. Their expertise in electrical and instrumentation systems greatly enhanced the performance of our intake pump house operations.",
      images: ["/images/khairasol-1.png", "/images/khairasol-2.png"],
    },
    {
      id: 3,
      title: "Electrical Engineering for G+5 Office Building at Sewri",
      category: "Electrical Engineering",
      location: "Sewri, Mumbai, India",
      year: "2025",
      sectors: ["Commercial Infrastructure", "Corporate Facilities"],
      services: [
        "Electrical System Design",
        "Power Distribution Engineering",
        "Backup Power Integration",
        "EV Charging Infrastructure Design",
      ],
      description:
        "Electrical engineering for a G+5 office building of Balmer Lawrie & Co. Ltd. in Sewri, including design of panels, UPS, DG set, EV charging system, and earthing. Procurement was managed by PISPL and engineering executed by GTS.",
      fullDescription:
        "GTS was engaged to provide comprehensive electrical engineering services for Balmer Lawrie & Co. Ltd.'s G+5 storied corporate office building in Sewri, Mumbai. While procurement and supply responsibilities were handled by PISPL, GTS led the engineering aspect. The scope included design and commissioning support for electrical panels, UPS systems, server room power infrastructure, diesel generator backup, EV charging panels, energy-efficient lighting, and earthing systems. The project emphasized integration of modern power systems and sustainability-compliant solutions to support a high-performance commercial facility.",
      image: "/images/4.jpeg",
      challenge:
        "The client required a robust and scalable electrical solution within a tight schedule and with seamless coordination between separate procurement and engineering teams. Integration of diverse systems—such as UPS, DG sets, and EV charging—within a single facility added complexity to the design phase.",
      solution:
        "GTS developed detailed engineering documentation and supported supply, erection, testing, and commissioning of all systems. Design included load calculations, SLDs, panel layouts, cable routing, and safety systems, ensuring conformance with national standards and optimized power reliability.",
      results:
        "The building's electrical systems were successfully commissioned, providing reliable power, redundancy, and EV readiness. The client achieved full operational readiness on schedule with minimized post-installation issues and full compliance with electrical safety codes.",
      technologies: ["UPS Systems", "EV Charging Panel", "DG Set", "Low Voltage Panels", "Earthing Systems"],
      duration: "7 months",
      teamSize: "6 engineers",
      clientTestimonial:
        "The engineering contribution of GTS was key in ensuring seamless integration and commissioning of all power systems. Their design quality and coordination with the procurement team ensured smooth project execution with zero rework.",
      //images: ["/images/16.jpeg", "/images/17.jpeg"],
    },
    {
      id: 4,
      title: "Gas Cleaning Plant Electrical & Instrumentation Engineering",
      category: "Electrical & Instrumentation Engineering",
      location: "Kolinganagar, Jajpur, Odisha, India",
      year: "2025",
      sectors: ["Steel", "Process Industry"],
      services: [
        "Detail Electrical Engineering",
        "Instrumentation Engineering",
        "PLC & SCADA System Design",
        "Automation Architecture Design",
      ],
      description:
        "Complete detail engineering of the electrical, instrumentation, and automation systems for a gas cleaning plant in Kolinganagar, Odisha, supporting a high-capacity steel facility.",
      fullDescription:
        "GTS was entrusted with the end-to-end electrical and instrumentation detail engineering for a gas cleaning system at a steel plant in Kolinganagar, Jajpur, Odisha. The scope involved site survey, cable sizing, and preparation of a comprehensive BOQ. Detailed routing of cables and trays was designed, along with GTPs for power, control, and instrument cables. A complete instrument list was developed, including selection and datasheet preparation. The engineering package also included junction box schedules, a PLC IO list, technical specifications, automation architecture diagrams, control philosophy, and block logic diagrams. GTS also designed SCADA front-end screens for real-time visualization and control.",
      image: "/images/6.jpeg",
      challenge:
        "The gas cleaning system required seamless integration of complex instrumentation and automation components, precise documentation, and robust engineering to support high-temperature, high-dust process conditions typical in steel plants.",
      solution:
        "Our team performed detailed field surveys and executed a full-scale engineering plan including control system architecture, PLC IO mapping, and SCADA interface design. Emphasis was placed on precise cable and routing plans, specification-compliant instrumentation, and automation logic tailored to process safety and performance.",
      results:
        "The project delivered a high-precision and fully integrated E&I engineering package, reducing execution time and minimizing on-site clashes. The automation architecture supported reliable control and efficient monitoring of gas cleaning operations, contributing to plant sustainability and emission control goals.",
      technologies: ["PLC Systems", "SCADA", "Industrial Instrumentation", "Cable Tray Design", "Automation Logic"],
      duration: "9 months",
      teamSize: "8 engineers",
      clientTestimonial:
        "GTS demonstrated a deep understanding of process plant automation and delivered a well-documented engineering solution. Their attention to detail and coordination helped streamline the entire implementation phase.",
      //images: ["/images/25.jpeg", "/images/27.jpeg"],
    },
  ]

  return projects.find((p) => p.id === Number.parseInt(id))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = getProject(params.id)

  if (!project) {
    return {
      title: "Project Not Found | Globe Tek Solution",
    }
  }

  return {
    title: `${project.title} | Globe Tek Solution`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white relative">
      {/* Circuit Background */}
      <CircuitBackground className="absolute inset-0 pointer-events-none opacity-5" />

      <div className="container mx-auto px-4 pt-24">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold px-4 text-blue-600">{project.title}</h1>
          <Link href="/projects">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area - 2/3 width */}
          <div className="lg:col-span-2">
            {/* Project Image */}
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-800 leading-relaxed">{project.fullDescription}</p>
            </div>

            {/* Optional Images Section */}
            {project.images && project.images.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Visuals</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                  {project.images.map((imgSrc, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md">
                      <img
                        src={imgSrc || "/placeholder.svg"}
                        alt={`${project.title} image ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technologies Used */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Testimonial */}
            {project.clientTestimonial && (
              <div className="mb-8 border-l-4 border-blue-600 pl-6 py-2">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Client Testimonial</h2>
                <blockquote className="text-lg text-gray-700 italic">"{project.clientTestimonial}"</blockquote>
              </div>
            )}
          </div>

          {/* Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            <div className="bg-blue-600 text-white p-8 rounded-lg sticky top-8">
              {/* Sectors */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Sectors</h3>
                <div>
                  {project.sectors.map((sector, index) => (
                    <div key={index} className="text-lg">
                      {sector}
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Services</h3>
                <div>
                  {project.services.map((service, index) => (
                    <div key={index} className="text-lg">
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <div className="text-lg">{project.location}</div>
              </div>

              {/* Project Stats */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Project Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-medium">{project.duration}</span>
                  </div>
                  {/*
                  <div className="flex justify-between">
                    <span>Team Size:</span>
                    <span className="font-medium">{project.teamSize}</span>
                  </div>
                   */}
                  <div className="flex justify-between">
                    <span>Year:</span>
                    <span className="font-medium">{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Contact CTA */}
              <div>
                <h3 className="text-xl font-bold mb-4">Interested in Similar Solutions?</h3>
                <Button asChild className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
