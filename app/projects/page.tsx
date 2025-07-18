import ProjectsBanner from "@/components/projects-banner"
import ProjectGrid from "@/components/project-grid"

export const metadata = {
  title: "Projects | Globe Tek Solution",
  description: "Explore our portfolio of successful electrical engineering and instrumentation projects.",
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Electrical & Instrumentation Engineering for Uranium Drier Calciner System",
      category: "Electrical & Instrumentation Engineering",
      location: "DASA, Nigeria",
      locationKey: "dasa",
      year: "2025",
      description:
        "Complete electrical and instrumentation engineering for the Drier Calciner unit of a uranium slug handling system, executed on behalf of GEM Drytech Solution.",
      image: "/images/10.jpeg",
      sector: "nuclear",
      subSector: "uranium-processing",
      service: "electrical-instrumentation-design",
      challenge:
        "The client required a highly reliable and safe E&I system for uranium handling under strict nuclear standards, with integration into an existing complex infrastructure.",
      solution:
        "We provided a full electrical and instrumentation design with radiation-tolerant components, PLC and SCADA integration, and safety-compliant control systems tailored for nuclear applications.",
      results:
        "The system was delivered on time and has performed flawlessly since commissioning, with zero safety incidents and enhanced operational control.",
    },

    {
      id: 2,
      title: "Redial Collection Well E&I System for Intake Pump House",
      category: "Electrical & Instrumentation Engineering",
      location: "Khirasol, West Bengal, India",
      locationKey: "khirasol",
      year: "2025",
      description:
        "Complete electrical and instrumentation engineering of the redial collection well and intake pump house, including 11kV substation design under PHED West Bengal.",
      image: "/images/6.jpeg",
      sector: "water-supply",
      subSector: "public-infrastructure",
      service: "electrical-instrumentation-design",
      challenge:
        "The project required a reliable and integrated electrical and instrumentation system for continuous water intake operations in a remote area, while adhering to PHED technical standards.",
      solution:
        "We engineered a full 11kV substation with MCC, PLC, and SCADA systems, enabling centralized control, efficient load handling, and remote monitoring capabilities.",
      results:
        "The system enhanced operational reliability, ensured PHED compliance, and enabled efficient water intake with remote supervision, reducing manual intervention and downtime.",
    },
    {
      id: 3,
      title: "Electrical Engineering for G+5 Office Building at Sewri",
      category: "Electrical Engineering",
      location: "Sewri, Mumbai, India",
      locationKey: "sewri",
      year: "2025",
      description:
        "Engineering services for electrical systems including panels, UPS, DG set, EV charging, and earthing for a G+5 office building of Balmer Lawrie & Co. Ltd. at Sewri, Mumbai.",
      image: "/images/3.jpeg",
      sector: "infrastructure",
      subSector: "commercial-office",
      service: "electrical-system-design",
      challenge:
        "The project demanded a complete electrical engineering solution for a multi-story commercial office building, with coordination across multiple vendors and seamless integration of diverse electrical systems.",
      solution:
        "GTS provided detailed electrical engineering including layouts and specifications for panels, UPS, server room, DG set, lighting, EV charging panel, and earthing. Engineering was coordinated with procurement by PISPL and executed for optimal reliability and safety.",
      results:
        "The completed system ensured reliable power distribution, backup support, and energy efficiency across the facility, enabling smooth operations for the client from day one.",
    },
    {
      id: 4,
      title: "Detail Engineering for Gas Cleaning System",
      category: "Electrical & Instrumentation Engineering",
      location: "Kolinganagar, Jajpur, Odisha, India",
      locationKey: "kolinganagar",
      year: "2025",
      description:
        "Complete detail engineering of a gas cleaning plant including electrical and instrumentation systems, automation architecture, and SCADA development for a steel facility in Kolinganagar, Odisha.",
      image: "/images/5.jpeg",
      sector: "steel",
      subSector: "process-plant",
      service: "e&i-detail-engineering",
      challenge:
        "The gas cleaning system required comprehensive E&I engineering across multiple disciplines, ensuring process reliability, instrumentation accuracy, and integration of complex PLC-SCADA systems in a live steel plant environment.",
      solution:
        "GTS executed complete detail engineering including site survey, cable sizing, BOQ, cable tray routing, GTP for control and power cables, selection and specification of field instruments, junction box schedule, PLC IO list, automation architecture, control logic, and SCADA screen design.",
      results:
        "The project delivered a fully documented and ready-for-execution E&I design package, supporting seamless implementation, high automation reliability, and precise monitoring and control of gas cleaning processes.",
    }
  ]

  return (
    <div className="min-h-screen">
      <ProjectsBanner />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Projects</h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Explore our portfolio of successful electrical engineering and instrumentation projects across various industries.
        </p>

        <ProjectGrid projects={projects} />
      </div>
    </div>
  )
}
