"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const Industry40Section = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div
            ref={imageRef}
            className={`transition-all duration-1000 ${
              imageInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-white p-8">
              <Image
                src="/images/industry-4-0.png"
                alt="Industry 4.0 Concept"
                width={800}
                height={450}
                layout="responsive"
                className="object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
            </div>
          </div>

          {/* Content Side */}
          <div
            ref={ref}
            className={`transition-all duration-1000 delay-300 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-medium mb-6">
              Embracing the Future
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Industry 4.0: The Next Industrial Revolution
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At Globe Tek Solution, we are at the forefront of this transformation, integrating IoT, AI, big data, and
              automation to enhance efficiency, productivity, and sustainability for our clients. We help businesses
              navigate this complex landscape, turning challenges into opportunities for growth and innovation.
            </p>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-center">
                <ArrowRight className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                <span>Smart Automation</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                <span>Internet of Things (IoT) Integration</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0" />
                <span>Data Analytics & AI-driven Insights</span>
              </li>
          
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg shadow-xl transform transition-all duration-200 hover:scale-105"
            >
              <Link href="/services" className="flex items-center">
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Industry40Section
