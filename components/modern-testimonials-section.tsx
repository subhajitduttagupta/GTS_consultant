"use client"

import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const ModernTestimonialsSection = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Plant Manager",
      company: "JSW Steel Limited",
      image: "/images/5.jpeg",
      testimonial:
        "Globe Tek Solution delivered an exceptional power distribution system that exceeded our expectations. The reliability and efficiency improvements have been remarkable, with 99.99% uptime achieved.",
      rating: 5,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      name: "Priya Sharma",
      position: "Principal Engineer",
      company: "Adani Power Limited",
      image: "/images/3.jpeg",
      testimonial:
        "The control system implemented by Globe Tek Solution has transformed our operations. The improvement in product consistency and safety has been remarkable, reducing variability by 40%.",
      rating: 5,
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      name: "Suraj Rai",
      position: "Facilities Manager",
      company: "Shyam Steel Group",
      image: "/images/6.jpeg",
      testimonial:
        "The smart building solutions provided by Globe Tek Solution have exceeded our expectations in terms of energy savings and functionality. We achieved 30% energy reduction immediately.",
      rating: 5,
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm font-medium mb-6">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Discover how Globe Tek Solution has transformed businesses across industries with our innovative engineering
            solutions and exceptional service delivery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const TestimonialCard = ({ testimonial, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Card
      ref={ref}
      className={`group relative overflow-hidden border-0 shadow-xl bg-gradient-to-br ${testimonial.bgGradient} transition-all duration-700 delay-${index * 200} hover:scale-105 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>

      {/* Quote Icon */}
      <div className="absolute top-6 right-6">
        <div
          className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center shadow-lg`}
        >
          <Quote className="h-6 w-6 text-white" />
        </div>
      </div>

      <CardContent className="relative z-10 p-8">
        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
          "{testimonial.testimonial}"
        </blockquote>

        {/* Client Info */}
        <div className="flex items-center">
          <div className="relative">
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
            />
            <div
              className={`absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-r ${testimonial.gradient} rounded-full border-2 border-white`}
            ></div>
          </div>
          <div className="ml-4">
            <div className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
              {testimonial.name}
            </div>
            <div className="text-sm text-gray-600">{testimonial.position}</div>
            <div className="text-sm text-gray-500">{testimonial.company}</div>
          </div>
        </div>

        {/* Hover Effect Line */}
        <div
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${testimonial.gradient} w-0 group-hover:w-full transition-all duration-500`}
        ></div>
      </CardContent>
    </Card>
  )
}

export default ModernTestimonialsSection
