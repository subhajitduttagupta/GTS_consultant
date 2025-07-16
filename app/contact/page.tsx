import ContactBanner from "@/components/contact-banner"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
//import MapSection from "@/components/map-section" // Import MapSection

export const metadata = {
  title: "Contact Us | Globe Tek Solution",
  description: "Get in touch with Globe Tek Solution for your electrical engineering and instrumentation needs.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <ContactBanner />
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-600">
          Have a project in mind or questions about our services? Get in touch with our team.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <ContactForm />
          <ContactInfo />
        </div>
         {/* <MapSection /> */}
      </div>
    </div>
  )
}
