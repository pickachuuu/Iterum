import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import LogoSvg from './LogoSvg'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo block with LogoSvg */}
          <div className="flex items-center gap-2.5">
            <div className={`flex h-9 w-9 items-center justify-center rounded-lg shadow-sm transition-all duration-300 ${
              isScrolled ? 'bg-slate-900 text-white' : 'bg-white/10 border border-white/20 text-white'
            }`}>
              <LogoSvg className="h-5 w-5" />
            </div>
            <span className={`font-display text-xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              Iterum<span className={isScrolled ? 'text-slate-500 font-normal' : 'text-white/70 font-normal'}>.ai</span>
            </span>
          </div>

          {/* Simple Navigation links */}
          <div className={`hidden md:flex items-center gap-8 text-sm font-semibold transition-colors duration-300 ${
            isScrolled ? 'text-slate-600' : 'text-white/80'
          }`}>
            <a href="#why" className={`transition-colors ${isScrolled ? 'hover:text-slate-900' : 'hover:text-white'}`}>
              Why Iterum
            </a>
            <a href="#rounds" className={`transition-colors ${isScrolled ? 'hover:text-slate-900' : 'hover:text-white'}`}>
              Interview Rounds
            </a>
            <a href="#who" className={`transition-colors ${isScrolled ? 'hover:text-slate-900' : 'hover:text-white'}`}>
              Who is it for
            </a>
          </div>

          {/* Clean Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button className={`text-sm font-bold transition-colors duration-300 py-2 px-3 cursor-pointer ${
              isScrolled ? 'text-slate-650 hover:text-slate-900' : 'text-white/90 hover:text-white'
            }`}>
              Login
            </button>
            <button className="text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-accent-orange to-accent-rose hover:brightness-110 active:scale-98 px-6 py-2.5 rounded-full transition-all cursor-pointer shadow-md shadow-orange-500/20">
              Start Free
            </button>
          </div>

          {/* Mobile hamburger menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 cursor-pointer transition-colors ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white hover:text-white/80'}`}
            >
              {mobileMenuOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 animate-fade-in">
          <div className="flex flex-col gap-3.5 text-base font-semibold text-slate-700">
            <a
              href="#why"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Why Iterum
            </a>
            <a
              href="#rounds"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Interview Rounds
            </a>
            <a
              href="#who"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Who is it for
            </a>
          </div>

          <hr className="border-slate-100" />

          <div className="flex flex-col gap-2.5">
            <button className="w-full text-center text-slate-750 border border-slate-250 py-2.5 rounded-full hover:bg-slate-50 text-sm font-semibold cursor-pointer">
              Login
            </button>
            <button className="w-full text-center text-white bg-gradient-to-r from-accent-orange to-accent-rose py-2.5 rounded-full hover:brightness-110 text-sm font-bold shadow-md shadow-orange-500/20 cursor-pointer">
              Start Free
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
