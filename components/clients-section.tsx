"use client"
import { useInView } from "react-intersection-observer"

const ClientsSection = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [clientsRef, clientsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const clients = [
    {
      name: "Company 1",
      logo: "/placeholder.svg?height=100&width=200&query=modern company logo 1",
    },
    {
      name: "Company 2",
      logo: "/placeholder.svg?height=100&width=200&query=modern company logo 2",
    },
    {
      name: "Company 3",
      logo: "/placeholder.svg?height=100&width=200&query=modern company logo 3",
    },
    {
      name: "Company 4",
      logo: "/placeholder.svg?height=100&width=200&query=modern company logo 4",
    },
    {
      name: "Company 5",
      logo: "/placeholder.svg?height=100&width=200&query=modern company logo 5",
    },
    {
      name: "Company 6",
      logo: "/placeholder.svg?height=100&width=200&query=modern company logo 6",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4">Our Clients</h2>
          <p className="text-lg text-gray-600">
            We've had the privilege of working with some of the most respected companies across various industries.
          </p>
        </div>

        <div
          ref={clientsRef}
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center transition-all duration-700 ${
            clientsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img src={client.logo || "/placeholder.svg"} alt={client.name} className="client-logo h-12 md:h-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
