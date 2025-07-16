"use client"

import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ServicesDetails = ({ services }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl border border-gray-200`}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>

      <Tabs defaultValue={services[0].id.toString()} className="w-full">
        <TabsList className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-1 rounded-full shadow-lg">
          {services.map((service) => (
            <TabsTrigger
              key={service.id}
              value={service.id.toString()}
              className="text-white data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-md data-[state=active]:rounded-full transition-all duration-300 ease-in-out"
            >
              {service.title.split(" ")[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        {services.map((service) => (
          <TabsContent key={service.id} value={service.id.toString()} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.details}</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Industry-leading expertise and innovative solutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Customized approach tailored to your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Comprehensive project management and delivery</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 bg-primary p-1 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Rigorous quality control and testing protocols</span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default ServicesDetails
