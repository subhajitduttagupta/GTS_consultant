"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

const ModernAboutSummary = () => {
  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: Award,
      title: "Excellence",
      description: "Industry-leading quality standards",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Teamwork and partnership focus",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Accurate and reliable solutions",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge technology adoption",
      gradient: "from-purple-500 to-cyan-500",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div
            ref={leftRef}
            className={`transition-all duration-1000 ${
              leftInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium mb-6">
              About Globe Tek Solution
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Engineering the Future of Industry
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Globe Tek Solution stands at the forefront of electrical engineering and instrumentation innovation. Since
              2021, we've been transforming complex engineering challenges into elegant, sustainable solutions that
              power the future of industry.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our journey from a small team of dedicated engineers to a comprehensive solutions provider reflects our
              unwavering commitment to excellence, innovation, and client success across diverse industrial sectors.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${highlight.gradient} rounded-full flex items-center justify-center mr-3`}
                      >
                        <Icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-semibold text-gray-800">{highlight.title}</span>
                    </div>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </div>
                )
              })}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg shadow-xl transform transition-all duration-200 hover:scale-105"
            >
              <Link href="/about" className="flex items-center">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Visual Side */}
          <div
            ref={rightRef}
            className={`transition-all duration-1000 delay-300 ${
              rightInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/A6.jpeg"
                  alt="Engineer checking electrical panels"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>

              {/* Floating Achievement Cards */}
              <Card className="absolute -top-8 -left-8 bg-white/95 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">ISO 9001</div>
                      <div className="text-sm text-gray-600">Certified Quality</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-800">4+ Years</div>
                      <div className="text-sm text-gray-600">Industry Experience</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModernAboutSummary
