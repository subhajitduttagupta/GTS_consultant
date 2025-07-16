"use client"

import { useInView } from "react-intersection-observer"

const MapSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"} bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-xl border border-blue-100`}
    >
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        Our Location
      </h2>
      <div className="rounded-lg overflow-hidden shadow-md h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d274.46091631742263!2d88.37733096529946!3d22.69624491687904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89c71f5d4256f%3A0xff5416b7ba69e76b!2s42%2FA%2C%20Sethcolony%2C%20Sahid%20Colony%2C%20Panihati%2C%20Barrackpore%2C%20Khardaha%2C%20West%20Bengal%20700110!5e0!3m2!1sen!2sin!4v1749188939907!5m2!1sen!2sin"
          width="800"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default MapSection
