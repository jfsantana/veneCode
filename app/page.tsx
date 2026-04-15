import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { EssenceSection } from "@/components/essence-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <EssenceSection />
      <TechStackSection />
      <Footer />
    </main>
  )
}
