import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MascotShowcase from './components/MascotShowcase'
import InterviewCarousel from './components/InterviewCarousel'
import BentoGridFeatures from './components/BentoGridFeatures'
import PersonaTabs from './components/PersonaTabs'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')

  const openLogin = () => {
    setAuthMode('login')
    setIsAuthOpen(true)
  }

  const openRegister = () => {
    setAuthMode('register')
    setIsAuthOpen(true)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Sticky Header */}
      <Navbar onLoginClick={openLogin} onRegisterClick={openRegister} />

      {/* Hero Section */}
      <Hero onStartFreeClick={openRegister} />

      {/* Mascot Introduction */}
      <MascotShowcase />

      {/* Structured Rounds Grid */}
      <InterviewCarousel />

      {/* Bento Grid Feature Showcase */}
      <BentoGridFeatures />

      {/* Target Audiences Persona Tabs */}
      <PersonaTabs />

      {/* Clean Footer */}
      <Footer onStartFreeClick={openRegister} />

      {/* Authentication Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} initialMode={authMode} />
    </div>
  )
}

export default App
