import LogoSvg from './LogoSvg'

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-50/70 text-slate-500 pt-20 pb-12 border-t border-slate-200/85 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 space-y-16">
        
        {/* Crisp White CTA card */}
        <div className="bg-white border border-slate-200 hover:border-brand-500/30 rounded-3xl p-8 md:p-10 text-center space-y-5 max-w-4xl mx-auto shadow-2xs relative transition-colors duration-200">
          <h3 className="font-display font-extrabold text-slate-900 text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug">
            Ready to structure your interview practice?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed font-sans font-medium">
            Join candidates from top engineering and product teams who rehearse their career stories with Chamy’s adaptive mockup panels.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button className="w-full sm:w-auto font-sans font-black uppercase tracking-wider text-xs text-white bg-gradient-to-r from-accent-orange to-accent-rose hover:brightness-110 active:scale-98 px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-md shadow-orange-500/20">
              Start preparing free
            </button>
            <button className="w-full sm:w-auto font-sans font-bold text-xs text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 active:scale-98 px-8 py-3.5 rounded-full transition-all cursor-pointer shadow-3xs">
              View study metrics
            </button>
          </div>
        </div>

        {/* Directory grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-8 border-t border-slate-200/50">
          
          {/* Column 1: Rounds supported */}
          <div className="space-y-3.5">
            <h4 className="font-sans font-bold text-slate-900 text-xs tracking-wider uppercase">AI Practice Rounds</h4>
            <ul className="space-y-2 text-xs font-sans font-medium">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Behavioral Round</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Technical Screen</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Coding Panel</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">System Design</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Recruiter Sync</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">HR Screening</a></li>
            </ul>
          </div>

          {/* Column 2: Tech Stack planned */}
          <div className="space-y-3.5">
            <h4 className="font-sans font-bold text-slate-900 text-xs tracking-wider uppercase">Planned Tech Stack</h4>
            <ul className="space-y-2 text-xs font-sans font-medium">
              <li><a href="#" className="hover:text-slate-900 transition-colors">React 19 Frontend</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Tailwind CSS 4</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Supabase Auth Layer</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Supabase Edge Functions</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">TanStack Query Caching</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Zustand Client State</a></li>
            </ul>
          </div>

          {/* Column 3: Core Features */}
          <div className="space-y-3.5">
            <h4 className="font-sans font-bold text-slate-900 text-xs tracking-wider uppercase">Core Features</h4>
            <ul className="space-y-2 text-xs font-sans font-medium">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Opportunity Profiles</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">PDF Resume Upload</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">AI Question Generator</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Constructive Feedback</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Follow-up Questions</a></li>
            </ul>
          </div>

          {/* Column 4: Legitimate Company resources */}
          <div className="space-y-3.5">
            <h4 className="font-sans font-bold text-slate-900 text-xs tracking-wider uppercase">Company</h4>
            <ul className="space-y-2 text-xs font-sans font-medium">
              <li><a href="#" className="hover:text-slate-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Why Iterum</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Supabase Database</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Supabase Storage</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Row-Level Security</a></li>
            </ul>
          </div>

          {/* Column 5: Future Roadmap Ideas from spec */}
          <div className="space-y-3.5">
            <h4 className="font-sans font-bold text-slate-900 text-xs tracking-wider uppercase">Future Roadmap</h4>
            <ul className="space-y-2 text-xs font-sans font-medium">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Practice Streaks & Plans</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Voice Interview Simulator</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Scoring by Round metrics</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Company Templates</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Exportable PDF Reports</a></li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8 pt-10 border-t border-slate-200/50 text-slate-500">
          
          {/* Logo & corporate address */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white shadow-sm">
                <LogoSvg className="h-4.5 w-4.5" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-slate-900">
                Iterum<span className="text-slate-450 font-normal">.ai</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              Iterum Inc. • 100 Battery Street, Suite 100, San Francisco, CA 94111, USA.<br />
              Secure databases supported by Supabase. Email support at <a href="mailto:support@iterum.ai" className="text-slate-700 hover:text-slate-900 font-semibold transition-colors">support@iterum.ai</a>
            </p>
          </div>

          {/* Social connections & copyright */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#" className="hover:text-slate-800 transition-colors"><FacebookIcon className="h-4 w-4" /></a>
              <a href="#" className="hover:text-slate-800 transition-colors"><TwitterIcon className="h-4 w-4" /></a>
              <a href="#" className="hover:text-slate-800 transition-colors"><InstagramIcon className="h-4 w-4" /></a>
              <a href="#" className="hover:text-slate-800 transition-colors"><YoutubeIcon className="h-4.5 w-4.5" /></a>
              <a href="#" className="hover:text-slate-800 transition-colors"><LinkedinIcon className="h-4 w-4" /></a>
            </div>

            <div className="text-xs text-slate-450 font-sans md:text-right">
              <p>© {currentYear} Iterum.ai. All rights reserved. All mock records held in privacy configurations.</p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  )
}
