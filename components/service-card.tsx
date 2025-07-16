"use client"
import Link from 'next/link';
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Lightbulb, Gauge, Zap, ClipboardList, CheckCircle, Users, ShieldCheck, CircuitBoard, Building2  } from "lucide-react"

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const icons = {
    lightbulb: <Lightbulb className="h-10 w-10" />,
    gauge: <Gauge className="h-10 w-10" />,
    zap: <Zap className="h-10 w-10" />,
    "clipboard-list": <ClipboardList className="h-10 w-10" />,
    "check-circle": <CheckCircle className="h-10 w-10" />,
    users: <Users className="h-10 w-10" />,
  }

  return (
    <div
      ref={ref}
      className={`service-card-container relative transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="service-card-enhanced relative overflow-hidden h-full bg-white border border-gray-200 transition-all duration-500 hover:shadow-2xl group">
        {/* Corner Fold Effect */}
        <div className="absolute top-0 right-0 w-0 h-0 transition-all duration-500 ease-out group-hover:w-16 group-hover:h-16 z-10">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 transform rotate-45 translate-x-8 -translate-y-8 transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:translate-y-0"></div>
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-300 to-orange-400 transform rotate-45 translate-x-8 -translate-y-8 transition-all duration-500 ease-out delay-75 group-hover:translate-x-0 group-hover:translate-y-0 opacity-70"></div>
        </div>

        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 transform scale-0 transition-transform duration-700 ease-out group-hover:scale-100 origin-top-right"></div>

        {/* Card Content */}
        <div className="relative z-20 h-full flex flex-col">
          <CardHeader className="flex flex-col items-center text-center pb-4 transition-colors duration-500 group-hover:text-white">
            {/* Icon Container */}
            <div className="mb-4 p-4 rounded-full bg-blue-50 transition-all duration-500 group-hover:bg-white/20 group-hover:backdrop-blur-sm">
              <div className="text-blue-600 transition-colors duration-500 group-hover:text-white">
                {icons[service.icon]}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-500 group-hover:text-white">
              {service.title}
            </h3>
          </CardHeader>

          <CardContent className="flex-grow transition-colors duration-500 group-hover:text-white/90">
            <p className="text-gray-600 text-center transition-colors duration-500 group-hover:text-white/90">
              {service.description}
            </p>
          </CardContent>

          <CardFooter className="pt-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 group-hover:text-white group-hover:bg-white/20 group-hover:backdrop-blur-sm group-hover:border-white/30"
                >
                  Learn More →
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{service.title}</DialogTitle>
                  <DialogDescription>
                    Comprehensive electrical engineering and instrumentation services
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="rounded-lg object-cover w-full h-64"
                    />
                  </div>
                  <div>
                    <p className="mb-4">{service.details}</p>
                    <Link href="/quote" passHref>
                      <Button className="w-full">Request This Service</Button>
                    </Link>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardFooter>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
        </div>
      </Card>
    </div>
  )
}

export default ServiceCard
