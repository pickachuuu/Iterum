import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MascotShowcase from './components/MascotShowcase'
import InterviewCarousel from './components/InterviewCarousel'
import BentoGridFeatures from './components/BentoGridFeatures'
import Footer from './components/Footer'
import AuthModal from './components/AuthModal'
import Grainient from './components/Grainient'

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
    <div className="min-h-screen bg-zinc-950 text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
      {/* Global Animated Background - fixed behind everything */}
      <div className="fixed inset-0 z-0 opacity-60 pointer-events-none">
        <Grainient
          color1="#4b4b4b"
          color2="#000000"
          color3="#4e4c50"
          timeSpeed={0.6}
          colorBalance={-0.03}
          warpStrength={1.85}
          warpFrequency={5.0}
          warpSpeed={2.0}
          warpAmplitude={9}
          blendAngle={0.0}
          blendSoftness={0.05}
          rotationAmount={500.0}
          noiseScale={1.25}
          grainAmount={0.1}
          grainScale={2.0}
          grainAnimated={false}
          contrast={1.25}
          gamma={1.0}
          saturation={1.0}
          centerX={0.0}
          centerY={0.0}
          zoom={0.9}
        />
      </div>

      <div className="relative z-10">
      {/* Sticky Header */}
      <Navbar onLoginClick={openLogin} onRegisterClick={openRegister} />

      {/* Hero Section */}
      <Hero onStartFreeClick={openRegister} />

      {/* How Your Practice Works - 3-Step Walkthrough */}
      <MascotShowcase />

      {/* Structured Rounds Grid */}
      <InterviewCarousel />

      {/* Bento Grid Feature Showcase */}
      <BentoGridFeatures />

      {/* Clean Footer */}
      <Footer onStartFreeClick={openRegister} />

      {/* Authentication Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} initialMode={authMode} />
      </div>
    </div>
  )
}

export default App
