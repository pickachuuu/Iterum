import ScrollReveal from './ScrollReveal'

type MascotFeature = {
  num: string
  title: string
  desc: string
}

const mascotFeatures: MascotFeature[] = [
  {
    num: '01',
    title: 'Resume Context Integration',
    desc: 'Link your uploaded PDF resume to job profiles. The AI reads your experience, projects, and skills to generate personalized questions about technical decisions and leadership gaps.'
  },
  {
    num: '02',
    title: 'Tailored Practice Rounds',
    desc: 'Select or create custom interview rounds (HR screen, behavioral, domain panels, hiring manager, or team fit) with dynamic, round-specific AI feedback.'
  },
  {
    num: '03',
    title: 'Secure Supabase Architecture',
    desc: 'Sign in securely using Supabase Auth (OAuth or email/password). All uploaded resumes and database records are private, using Row-Level Security policies.'
  }
]

export default function MascotShowcase() {
  return (
    <section id="mascot" className="relative py-20 bg-zinc-950 overflow-hidden">
      {/* Rounded light transition overlay */}
      <div className="absolute inset-0 bg-[#f4f4f6] rounded-t-[48px] z-0 border-b border-zinc-200/80" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mascot column (5 cols) - Serious Noir Dossier Badge */}
          <ScrollReveal variant="scale-up" duration="duration-700" className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl bg-zinc-950 border border-zinc-800 p-4.5 shadow-2xl hover:border-zinc-700 transition-all duration-300 group overflow-hidden">
              
              {/* Subtle light leak shine */}
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/[0.01] blur-2xl rounded-full pointer-events-none" />

              <div className="h-full w-full rounded-2xl bg-gradient-to-t from-zinc-900 to-zinc-950 overflow-hidden flex flex-col justify-end p-5 border border-zinc-800/80 relative">
                
                {/* AI Generated Mascot: Front facing chameleon in suit with Noir vibes */}
                <div className="absolute inset-0 flex items-center justify-center p-5 pb-20 animate-float group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/chamy_mascot.png"
                    alt="Vance - Special Counsel"
                    className="w-full h-auto object-contain max-h-[230px] drop-shadow-[0_15px_25px_rgba(0,0,0,0.65)] select-none pointer-events-none rounded-xl"
                  />
                </div>

                {/* Stark, Serious Noir Dossier Identifier (No description text!) */}
                <div className="bg-zinc-950/80 backdrop-blur-xs border border-zinc-850 rounded-xl p-3.5 relative z-10 shadow-lg text-left">
                  <p className="text-[8px] font-black text-zinc-500 uppercase tracking-widest">Iterum Executive Advisor</p>
                  <h4 className="font-display font-black text-white text-lg tracking-tight mt-0.5 uppercase tracking-wide">Vance</h4>
                  <div className="h-0.5 w-6 bg-zinc-700 mt-2 rounded"></div>
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* Info column (7 cols) - Original Text Layout */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fade-up">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight mt-4 leading-none">
                  Adapt seamlessly to any boardroom panel
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-550 leading-relaxed font-sans font-medium">
                  Chameleons shift seamlessly to match their surroundings. In high-stakes interviews, you must do the exact same: adjusting your answers to highlight relevant milestones, aligning with different team dynamics, and navigating diverse boardroom cultures. Iterum acts as your premier training partner, establishing this adaptability before you step in.
                </p>
              </div>
            </ScrollReveal>
 
            {/* Simple, high-contrast vector bullet points matching the APP_SPEC */}
            <div className="space-y-4 pt-2">
              {mascotFeatures.map((item, idx) => (
                <ScrollReveal 
                  key={idx}
                  variant="fade-up" 
                  delay={idx === 0 ? 'delay-75' : idx === 1 ? 'delay-150' : 'delay-225'}
                >
                  <div className="flex gap-4">
                    <div className="h-8.5 w-8.5 rounded-xl bg-zinc-900 border border-zinc-950 text-white font-mono font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-sans font-extrabold text-zinc-950 text-sm leading-tight">{item.title}</h4>
                      <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-sans font-semibold">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
