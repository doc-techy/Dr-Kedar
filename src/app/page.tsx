import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import VideoPublicationsSection from '@/components/VideoPublicationsSection'
import AchievementsSection from '@/components/AchievementsSection'
import BookingSection from '@/components/BookingSection'
import Footer from '@/components/Footer'
import SectionBackground from '@/components/SectionBackground'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Uniform background for entire webpage */}
      <SectionBackground variant="gradient" />
      
      <Header />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <VideoPublicationsSection />
        <AchievementsSection />
        {/* <BookingSection /> */}
      </main>
      
      <Footer />
    </div>
  )
}
