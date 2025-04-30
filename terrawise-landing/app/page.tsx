import NavBar from "@/components/nav-bar"
import HeroSection from "@/components/hero-section"
import FeatureSectionA from "@/components/feature-section-a"
import FeatureSectionB from "@/components/feature-section-b"
import SolutionsGrid from "@/components/solutions-grid"
import InnovationStrip from "@/components/innovation-strip"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <HeroSection />
      <FeatureSectionA />
      <FeatureSectionB />
      <InnovationStrip />
      {/* <SolutionsGrid /> */}
      <Footer />
    </main>
  )
}
