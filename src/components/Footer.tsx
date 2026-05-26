import type { SVGProps } from 'react'
import LogoSvg from './LogoSvg'

type IconProps = SVGProps<SVGSVGElement>

const FacebookIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const TwitterIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const InstagramIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const YoutubeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)

const LinkedinIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

interface FooterProps {
  onStartFreeClick: () => void
}

export default function Footer({ onStartFreeClick }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative text-zinc-400 pt-20 pb-12 border-t border-zinc-900 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-12">
        
        {/* Premium Dark Glassmorphic CTA card */}
        <div className="bg-zinc-900/40 border border-zinc-800/85 hover:border-zinc-700/60 rounded-3xl p-8 md:p-10 text-center space-y-5 max-w-4xl mx-auto shadow-2xl backdrop-blur-md relative transition-all duration-300">
          <h3 className="font-display font-black text-white text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug">
            Ready to structure your interview practice?
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-sans font-semibold">
            Join candidates from top engineering and product teams who rehearse their career stories with Iterum's AI mock interviews.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button 
              onClick={onStartFreeClick}
              className="w-full sm:w-auto font-sans font-black uppercase tracking-wider text-xs text-zinc-950 bg-white hover:bg-zinc-100 active:scale-98 px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-md border border-white"
            >
              Start preparing free
            </button>
            <button className="w-full sm:w-auto font-sans font-bold text-xs text-white bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-850 active:scale-98 px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-sm">
              View study metrics
            </button>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8 pt-10 border-t border-zinc-900 text-zinc-500">
          
          {/* Logo & corporate address */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-zinc-950 shadow-sm border border-zinc-200">
                <LogoSvg className="h-4.5 w-4.5" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                Iterum<span className="text-zinc-500 font-normal">.ai</span>
              </span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed font-sans">
              Secure databases supported by Supabase. Email support at <a href="mailto:support@iterum.ai" className="text-zinc-300 hover:text-white font-semibold transition-colors">support@iterum.ai</a>
            </p>
          </div>

          {/* Social connections & copyright */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-4 text-zinc-500">
              <a href="#" className="hover:text-white transition-colors"><FacebookIcon className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><TwitterIcon className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><InstagramIcon className="h-4 w-4" /></a>
              <a href="#" className="hover:text-white transition-colors"><YoutubeIcon className="h-4.5 w-4.5" /></a>
              <a href="#" className="hover:text-white transition-colors"><LinkedinIcon className="h-4 w-4" /></a>
            </div>

            <div className="text-xs text-zinc-550 font-sans md:text-right">
              <p>© {currentYear} Iterum.ai. All rights reserved. All mock records held in privacy configurations.</p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
