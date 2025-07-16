"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import Link from "next/link"

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      id: 1,
      image: "/images/4.jpeg",
      title: "Innovative Electrical Engineering Solutions",
      subtitle: "Powering the Future of Industry",
      description:
        "Globe Tek Solution delivers cutting-edge electrical engineering and instrumentation services to help your business thrive in the modern industrial landscape. Our expert team combines decades of experience with the latest technologies.",
      primaryCTA: {
        text: "Explore Our Services",
        href: "/services",
      },
      secondaryCTA: {
        text: "View Case Studies",
        href: "/projects",
      },
    },
    {
      id: 2,
      image: "/images/10.jpeg",
      title: "Advanced Instrumentation & Control Systems",
      subtitle: "Precision Engineering for Process Excellence",
      description:
        "Transform your operations with our state-of-the-art instrumentation and control systems. We design, implement, and optimize solutions that enhance efficiency, safety, and reliability across all industrial sectors.",
      primaryCTA: {
        text: "Learn About Instrumentation",
        href: "/services",
      },
      secondaryCTA: {
        text: "Contact Our Experts",
        href: "/contact",
      },
    },
    {
      id: 3,
      image: "/images/6.jpeg",
      title: "Comprehensive Power System Analysis",
      subtitle: "Optimizing Energy Distribution & Efficiency",
      description:
        "Maximize your power system's performance with our comprehensive analysis and optimization services. From load flow studies to protection coordination, we ensure your electrical infrastructure operates at peak efficiency.",
      primaryCTA: {
        text: "Power System Services",
        href: "/services",
      },
      secondaryCTA: {
        text: "Get a Quote",
        href: "/contact",
      },
    },
    {
      id: 4,
      image: "/images/9.jpeg",
      title: "End-to-End Project Management",
      subtitle: "From Concept to Commissioning",
      description:
        "Experience seamless project delivery with our comprehensive project management services. We handle every aspect of your electrical and instrumentation projects, ensuring on-time, on-budget completion with exceptional quality.",
      primaryCTA: {
        text: "Our Project Approach",
        href: "/about",
      },
      secondaryCTA: {
        text: "View Portfolio",
        href: "/projects",
      },
    },
    {
      id: 5,
      image: "/images/2.jpg",
      title: "Smart Building & Automation Solutions",
      subtitle: "Building Intelligence for Tomorrow",
      description:
        "Step into the future with our smart building solutions that integrate IoT, automation, and energy management systems. Create sustainable, efficient, and intelligent environments that adapt to your needs.",
      primaryCTA: {
        text: "Smart Solutions",
        href: "/services",
      },
      secondaryCTA: {
        text: "Schedule Consultation",
        href: "/contact",
      },
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Mouse event handlers for auto-play control
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 4000) // Change slide every 6 seconds
    return () => clearInterval(interval)
  }, [nextSlide, isAutoPlaying])

  // Pause auto-play on hover
  //  const handleMouseEnter = () => setIsAutoPlaying(false)
  //  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      //onMouseEnter={handleMouseEnter}
      //onMouseLeave={handleMouseLeave}
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-600/40 to-blue-500/30" />
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 text-white relative">
        <div className="max-w-4xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-700 ease-in-out ${
                index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 absolute inset-0"
              }`}
            >
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-400/30">
                  {slide.subtitle}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-blue-900">
                {slide.title}
              </h1>

              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-blue-900 opacity-90">
                {slide.description}
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-blue-900 to-blue-800 text-white hover:from-blue-800 hover:to-blue-700 animated-button font-semibold px-8 py-3"
                >
                  <Link href={slide.primaryCTA.href}>{slide.primaryCTA.text}</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-gradient-to-r from-blue-900 to-blue-800 text-white border-none hover:from-blue-800 hover:to-blue-700 animated-button font-semibold px-8 py-3"
                >
                  <Link href={slide.secondaryCTA.href}>{slide.secondaryCTA.text}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        {/* Previous Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer">
          <span className="text-sm mb-2 writing-mode-vertical-rl text-orientation-mixed">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>

      {/* Wave animation at the bottom */}
      <div className="wave absolute bottom-0 left-0 w-full"></div>
    </div>
  )
}

export default HeroSection
