"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const AboutSummary = () => {
  const [leftColRef, leftColInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [rightColRef, rightColInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            ref={leftColRef}
            className={`transition-all duration-700 ${
              leftColInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
            }`}
          >
            <h2 className="text-3xl font-bold mb-6">About Globe Tek Solution</h2>
            <p className="text-lg text-gray-600 mb-6">
              Globe Tek Solution is a leading provider of electrical engineering and instrumentation services, committed
              to delivering innovative solutions for complex engineering challenges.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With over a decade of experience in the industry, our team of skilled engineers and technicians brings
              expertise and dedication to every project we undertake.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to provide sustainable, efficient, and reliable solutions that help our clients optimize
              their operations and achieve their business objectives.
            </p>
            <Button asChild className="animated-button">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          <div
            ref={rightColRef}
            className={`grid grid-cols-2 gap-4 transition-all duration-700 ${
              rightColInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
            }`}
          >
            <div className="aspect-w-1 aspect-h-1">
              <img src="/images/3.jpeg" alt="Our team in action" className="object-cover rounded-lg h-full w-full" />
            </div>
            <div className="aspect-w-1 aspect-h-1 mt-8">
              <img src="/images/9.jpeg" alt="Planning and design" className="object-cover rounded-lg h-full w-full" />
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img src="/images/6.jpeg" alt="Installation work" className="object-cover rounded-lg h-full w-full" />
            </div>
            <div className="aspect-w-1 aspect-h-1 mt-8">
              <img
                src="/images/5.jpeg"
                alt="Collaboration and expertise"
                className="object-cover rounded-lg h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSummary
