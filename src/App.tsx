import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MascotShowcase from './components/MascotShowcase'
import InterviewCarousel from './components/InterviewCarousel'
import BentoGridFeatures from './components/BentoGridFeatures'
import PersonaTabs from './components/PersonaTabs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Mascot Introduction */}
      <MascotShowcase />

      {/* Structured Rounds Grid */}
      <InterviewCarousel />

      {/* Bento Grid Feature Showcase */}
      <BentoGridFeatures />

      {/* Target Audiences Persona Tabs */}
      <PersonaTabs />

      {/* Clean Footer */}
      <Footer />
    </div>
  )
}

export default App
