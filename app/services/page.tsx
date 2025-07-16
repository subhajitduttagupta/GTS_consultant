import ServicesBanner from "@/components/services-banner"
import ServiceCard from "@/components/service-card"
import { Separator } from "@/components/ui/separator"
import ServicesDetails from "@/components/services-details"

export const metadata = {
  title: "Services | Globe Tek Solution",
  description: "Explore our comprehensive range of electrical engineering and instrumentation services.",
}

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Medium Voltage Engineering & Power Systems",
      description:
        "Transformer sizing, switchgear design, short circuit and earthing system (calculation, layout, BOQ) for safe, efficient power distribution.",
      icon: "zap", // Make sure this is a string
      image: "/images/6.jpeg",
      details:
        "Our MV engineering services encompass transformer sizing and selection, short circuit calculations, MV switchgear schematic design with detailed specification sheets, earthing system (calculation, layout, BOQ), and complete power distribution system design. We ensure optimal performance and safety for industrial and commercial power systems.",
    },
    {
      id: 2,
      title: "Process Instrumentation & Control",
      description: "Advanced instrumentation design with intelligent control systems and comprehensive documentation",
      icon: "gauge", // Make sure this is a string
      image: "/images/10.jpeg",
      details:
        "We provide complete instrumentation solutions including instrument location drawings, lookup drawings, logic & interlock design (Cause & Effect Schedule), control block logic diagrams, and intelligent to conventional system integration. Our expertise covers process automation and control system optimization.",
    },
    {
      id: 3,
      title: "Security & Communication Systems",
      description: "Integrated security solutions with CCTV, access control, fire detection, and networking systems",
      icon: "check-circle",
      image: "/images/7.jpeg",
      details:
        "Our comprehensive security and communication services include CCTV system design, fire detection and alarm (FDA) systems, access control systems, data networking infrastructure, and public address systems. We ensure seamless integration and reliable operation of all communication and security components.",
    },
    {
      id: 4,
      title: "Electrical Distribution & Protection",
      description:
        "Complete electrical distribution design including switchboards, UPS systems, and lightning protection",
      icon: "check-circle",
      image: "/images/5.jpeg",
      details:
        "We design comprehensive electrical distribution systems including switchboard layouts, DC distribution systems, UPS system design, junction box scheduling, cable block diagrams, and lightning protection systems. Our solutions ensure reliable power distribution and equipment protection.",
    },
    {
      id: 5,
      title: "Illumination & Environmental Engineering",
      description: "Professional lighting design and heat load calculations for optimal environmental conditions",
      icon: "lightbulb", // Make sure this is a string
      image: "/images/2.jpg",
      details:
        "Our illumination engineering services provide optimal lighting solutions for various applications, combined with accurate heat load calculations to ensure proper HVAC sizing and energy efficiency. We focus on creating comfortable and energy-efficient environments.",
    },
    {
      id: 6,
      title: "Complete Process Plant Engineering",
      description: "End-to-end design and detailed engineering services for complete process plants",
      icon: "users",
      image: "/images/1.jpg",
      details:
        "We offer comprehensive design and detailed engineering services for complete process plants, integrating all electrical, instrumentation, and control systems. Our holistic approach ensures seamless integration of all plant systems for optimal performance and efficiency.",
    },
    {
      id: 7,
      title: "Mini Substations for Plant Engineering",
      description: "Reliable 33kV/11kV mini substations tailored for industrial applications",
      icon: "zap", 
      image: "/images/6.jpeg",
      details:
        "We deliver complete mini substation solutions for 33kV and 11kV systems, including layout design, equipment specification, protection coordination, and integration with plant power networks. Our substations are engineered for performance, safety, and space efficiency in industrial environments.",
    },
  ]

  return (
    <div className="min-h-screen">
      <ServicesBanner />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Globe Tek Solution offers comprehensive electrical engineering and instrumentation services to meet your
          project needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <Separator className="my-16" />

        <ServicesDetails services={services} />
      </div>
    </div>
  )
}
