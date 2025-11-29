  import "./globals.css"
  import { HelmetProvider } from "react-helmet-async"

  import HeroSection from "@/components/hero-section"
  import AboutSection from "@/components/about-section"
  import GallerySection from "@/components/gallery-section"
  import VisitSection from "@/components/visit-section"
  import DonationSocialSection from "@/components/donation-social-section"

  function App() {
    return (
      <HelmetProvider>
        <main className="min-h-screen bg-gray-800 text-white">
          <HeroSection />
          <AboutSection />
          <GallerySection />
          <VisitSection />
          <DonationSocialSection />
        </main>
      </HelmetProvider>
    )
  }

  export default App
