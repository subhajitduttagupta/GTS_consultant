import QuoteForm from "@/components/quote-form"
import QuoteBanner from "@/components/quote-banner"

export const metadata = {
  title: "Get a Quote | Globe Tek Solution",
  description:
    "Request a quote for your electrical engineering and instrumentation project. Get expert consultation and competitive pricing.",
}

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <QuoteBanner />
      <QuoteForm />
    </div>
  )
}
