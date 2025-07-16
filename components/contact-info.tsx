"use client"

import { useInView } from "react-intersection-observer"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin } from "lucide-react"

const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactItems = [
    {
      icon: <MapPin className="h-10 w-10 text-blue-600" />,
      title: "Address",
      details: ["Globe Tek Solution", "41, Seth Colony, Sodepur, North 24 parganas", "Kolkata, 700110", "India"],
    },
    {
      icon: <Phone className="h-10 w-10 text-blue-600" />,
      title: "Phone",
      details: ["+91 94336 63312", "+91 98308 87070"],
    },
    {
      icon: <Mail className="h-10 w-10 text-blue-600" />,
      title: "Email",
      details: ["info@gtsconsultant.in", "support@gtsconsultant.in"],
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Working Hours",
      details: ["Monday to Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM", "Sunday: Closed"],
    },
  ]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
    >
      <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-8 shadow-xl border border-cyan-100">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>

        <div className="space-y-8">
          {contactItems.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-4">{item.icon}</div>
              <div>
                <h4 className="text-lg font-medium mb-2 text-gray-800">{item.title}</h4>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-medium mb-4 text-gray-800">Connect With Us</h4>
          <div className="flex space-x-4">
            
            <a
              href="https://www.linkedin.com/company/globe-tek-solution"
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <Linkedin size={16} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
