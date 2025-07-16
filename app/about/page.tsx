import AboutBanner from "@/components/about-banner"
import ModernAboutSection from "@/components/modern-about-section"
import TeamSection from "@/components/team-section"
import CompanyTimeline from "@/components/company-timeline"
import AboutStats from "@/components/about-stats"
import AboutValues from "@/components/about-values"
import AboutCTA from "@/components/about-cta"
import Industry40Section from "@/components/industry-40-section" // Import the new component

export const metadata = {
  title: "About Us | Globe Tek Solution",
  description: "Learn about Globe Tek Solution's history, mission, vision, and values.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <AboutBanner />
      <ModernAboutSection />
      <Industry40Section /> {/* Add the new section here */}
      <AboutStats />
      <AboutValues />
      <CompanyTimeline />
      <TeamSection />
      <AboutCTA />
    </div>
  )
}
