import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import AchievementsSection from '@/components/AchievementsSection'
import BookingSection from '@/components/BookingSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AchievementsSection />
        <BookingSection />
      </main>
      
      <Footer />
    </div>
  )
}
