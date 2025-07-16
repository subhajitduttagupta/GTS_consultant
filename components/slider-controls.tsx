"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

interface SliderControlsProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
  onGoToSlide: (index: number) => void
  isAutoPlaying: boolean
  onToggleAutoPlay: () => void
}

const SliderControls = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
  isAutoPlaying,
  onToggleAutoPlay,
}: SliderControlsProps) => {
  return (
    <>
      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          className="nav-control pointer-events-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          className="nav-control pointer-events-auto bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full w-12 h-12 transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Dots */}
          <div className="flex space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => onGoToSlide(index)}
                className={`slide-indicator w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-125 active" : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleAutoPlay}
            className="nav-control bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 rounded-full w-8 h-8 ml-4"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div
          className="progress-bar h-full transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / totalSlides) * 100}%`,
          }}
        />
      </div>
    </>
  )
}

export default SliderControls
