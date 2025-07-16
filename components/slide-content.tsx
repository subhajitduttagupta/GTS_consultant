"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SlideContentProps {
  slide: {
    id: number
    title: string
    subtitle: string
    description: string
    primaryCTA: {
      text: string
      href: string
    }
    secondaryCTA: {
      text: string
      href: string
    }
  }
  isActive: boolean
}

const SlideContent = ({ slide, isActive }: SlideContentProps) => {
  return (
    <div
      className={`transition-all duration-700 ease-in-out ${
        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 absolute inset-0"
      }`}
    >
      <div className="mb-4">
        <span className="inline-block px-4 py-2 bg-blue-600/30 backdrop-blur-sm rounded-full text-sm font-medium border border-blue-400/30">
          {slide.subtitle}
        </span>
      </div>

      <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">{slide.title}</h1>

      <p className="hero-description text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
        {slide.description}
      </p>

      <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-4">
        <Button
          size="lg"
          asChild
          className="hero-button slider-button bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3"
        >
          <Link href={slide.primaryCTA.href}>{slide.primaryCTA.text}</Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          asChild
          className="hero-button slider-button text-white border-white hover:bg-blue-800 font-semibold px-8 py-3 backdrop-blur-sm"
        >
          <Link href={slide.secondaryCTA.href}>{slide.secondaryCTA.text}</Link>
        </Button>
      </div>
    </div>
  )
}

export default SlideContent
