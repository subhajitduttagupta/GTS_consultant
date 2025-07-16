"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause, ArrowDown } from "lucide-react"
import Link from "next/link"

const ModernHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const slides = [
    {
      id: 1,
      image: "/images/4.jpeg",
      heroImage: "/images/10.jpeg",
      title: "Engineering Tomorrow's Solutions Today",
      subtitle: "Innovative Electrical Engineering",
      description:
        "Transform your industrial vision into reality with Globe Tek Solution's cutting-edge electrical engineering and instrumentation services.",
      primaryCTA: {
        text: "Explore Our Services",
        href: "/services",
      },
      secondaryCTA: {
        text: "Get Your Quote",
        href: "/quote",
      },
      stats: [
        { value: "25+", label: "Projects Delivered" },
        { value: "100%", label: "Success Rate" },
        { value: "4+", label: "Years Experience" },
      ],
    },
    {
      id: 2,
      image: "/images/10.jpeg",
      heroImage: "/images/7.jpeg",
      title: "Smart Automation & Control Systems",
      subtitle: "Precision Engineering Excellence",
      description:
        "Revolutionize your operations with our state-of-the-art instrumentation and control systems. From SCADA to DCS, we design and implement solutions that enhance efficiency, safety, and reliability across all industrial sectors.",
      primaryCTA: {
        text: "View Technologies",
        href: "/services",
      },
      secondaryCTA: {
        text: "Contact Experts",
        href: "/contact",
      },
      stats: [
        { value: "15+", label: "Happy Clients" },
        { value: "50+", label: "Expert Engineers" },
        { value: "24/7", label: "Support Available" },
      ],
    },
    {
      id: 3,
      image: "/images/1.jpg",
      heroImage: "/images/2.jpg",
      title: "Sustainable Energy Solutions",
      subtitle: "Powering a Greener Future",
      description:
        "Lead the transition to sustainable energy with our comprehensive renewable energy solutions. From solar installations to smart grid integration, we help you achieve your environmental goals while maximizing efficiency and cost savings.",
      primaryCTA: {
        text: "Green Solutions",
        href: "/services",
      },
      secondaryCTA: {
        text: "Case Studies",
        href: "/projects",
      },
      stats: [
        { value: "60%", label: "Energy Savings" },
        { value: "6+", label: "Green Projects" },
        { value: "Zero", label: "Carbon Footprint" },
      ],
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

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide, isAutoPlaying])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-600/60 to-cyan-500/40" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/20 to-blue-900/60" />
          </div>
        ))}
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-32 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-48 h-48 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 z-10 text-white relative">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] lg:min-h-auto">
          {/* Content Side */}
          <div className="w-full max-w-2xl text-center lg:text-left order-2 lg:order-1">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10 absolute"
                }`}
              >
                {/* Badge */}
                <div className="mb-4 lg:mb-6">
                  <span className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-sm rounded-full text-xs lg:text-sm font-medium border border-cyan-400/30">
                    {slide.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed opacity-90 max-w-xl mx-auto lg:mx-0">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-lg shadow-xl transform transition-all duration-200 hover:scale-105 w-full sm:w-auto"
                  >
                    <Link href={slide.primaryCTA.href}>{slide.primaryCTA.text}</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-white/30 text-white hover:bg-white hover:text-blue-600 font-semibold px-6 lg:px-8 py-3 lg:py-4 rounded-lg backdrop-blur-sm bg-white/10 w-full sm:w-auto"
                  >
                    <Link href={slide.secondaryCTA.href}>{slide.secondaryCTA.text}</Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 lg:gap-6 text-center lg:text-left">
                  {slide.stats.map((stat, statIndex) => (
                    <div key={statIndex}>
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-xs sm:text-sm opacity-80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Visual Side - Hidden on mobile, shown on lg+ */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="relative">
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl z-20">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold">Certified Excellence</div>
                    <div className="text-sm opacity-80">ISO 9001:2015</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">24/7</span>
                  </div>
                  <div>
                    <div className="font-semibold">Support Available</div>
                    <div className="text-sm opacity-80">Round the Clock</div>
                  </div>
                </div>
              </div>

              {/* Central Image Placeholder */}
              <div className="w-96 h-96 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden relative">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      src={slide.heroImage || "/placeholder.svg"}
                      alt={`${slide.title} illustration`}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-2xl"></div>

                    {/* Overlay Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                          <span className="text-white text-2xl font-bold">GTS</span>
                        </div>
                        <div className="font-semibold text-lg drop-shadow-lg">Globe Tek Solution</div>
                        <div className="text-sm opacity-90 drop-shadow-lg">Engineering Excellence</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          className="pointer-events-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full w-14 h-14 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          className="pointer-events-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full w-14 h-14 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-6">
          {/* Dots */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-cyan-400 scale-125 shadow-lg" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleAutoPlay}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full w-10 h-10"
          >
            {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 ease-linear shadow-lg"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer animate-bounce">
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown className="h-5 w-5" />
        </div>
      </div>
    </div>
  )
}

export default ModernHeroSection
