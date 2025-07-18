
import HeroSection from './components/sections/HeroSection'
import ServicesSection from './components/sections/ServicesSection'
import ProjectsSection from './components/sections/ProjectsSection'
import AboutSection from './components/sections/AboutSection'
import TeamSection from './components/sections/TeamSection'
import TestimonialsSection from './components/sections/Testimonials'
import ContactSection from './components/sections/ContactForm'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import MarqueeElements from './components/3d/MarqueeElements'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <HeroSection />
        <MarqueeElements />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}