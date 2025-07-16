import ModernHeroSection from "@/components/modern-hero-section"
import ModernServicesOverview from "@/components/modern-services-overview"
import ModernFeaturedProjects from "@/components/modern-featured-projects"
import ModernAboutSummary from "@/components/modern-about-summary"
import ModernClientsSection from "@/components/modern-clients-section"
import ModernStatsSection from "@/components/modern-stats-section"
import ModernTestimonialsSection from "@/components/modern-testimonials-section"
import ModernCTA from "@/components/modern-cta"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <ModernHeroSection />
      <ModernStatsSection />
      <ModernServicesOverview />
      <ModernFeaturedProjects />
      <ModernAboutSummary />
      <ModernTestimonialsSection />
      <ModernClientsSection />
      <ModernCTA />
    </div>
  )
}
