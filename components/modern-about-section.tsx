"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, Lightbulb, Target } from "lucide-react"
import Link from "next/link"

const ModernAboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <div
            ref={ref}
            className={`transition-all duration-1000 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium">
                About Globe Tek Solution
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Engineering Excellence Since 2021
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Globe Tek Solution stands at the forefront of electrical engineering and instrumentation innovation. Our
              journey began with a simple vision: to transform complex engineering challenges into elegant, sustainable
              solutions that power the future of industry.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over 4 years of expertise, we've evolved rapidly from a small team of dedicated engineers into a
              comprehensive solutions provider, serving clients across manufacturing, oil & gas, pharmaceuticals, power
              generation, and commercial sectors.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center mb-2">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="font-semibold text-gray-800">Excellence</span>
                </div>
                <p className="text-sm text-gray-600">Industry-leading quality standards</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg border border-cyan-100">
                <div className="flex items-center mb-2">
                  <Lightbulb className="h-6 w-6 text-cyan-600 mr-2" />
                  <span className="font-semibold text-gray-800">Innovation</span>
                </div>
                <p className="text-sm text-gray-600">Cutting-edge technology solutions</p>
              </div>
            </div>

            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105"
            >
              <Link href="/projects">View Our Projects</Link>
            </Button>
          </div>

          {/* Image Side */}
          <div
            ref={imageRef}
            className={`transition-all duration-1000 delay-300 ${
              imageInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img src="/images/A1.jpeg" alt="Globe Tek Solution Team" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-blue-100">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">25+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-cyan-100">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mr-3">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">100%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-0 shadow-xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
            <CardContent className="p-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver innovative, sustainable, and reliable electrical engineering and instrumentation solutions
                that exceed client expectations and contribute to industrial advancement and efficiency. We strive to be
                the catalyst for technological progress in every project we undertake.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-0 shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
            <CardContent className="p-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as the premier provider of electrical engineering and instrumentation services, known
                for technical excellence, innovation, and unwavering commitment to client success. We envision a future
                where our solutions power sustainable industrial growth globally.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ModernAboutSection
