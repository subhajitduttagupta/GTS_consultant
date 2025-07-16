"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div
        ref={ref}
        className={`container mx-auto px-4 text-center transition-all duration-700 ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Electrical Engineering Projects?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact Globe Tek Solution today to discuss how our expertise in electrical engineering and instrumentation
          can help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild className="bg-white text-blue-900 hover:bg-blue-50 animated-button">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-white border-white hover:bg-blue-800 animated-button"
          >
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTA
