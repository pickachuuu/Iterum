import { Sparkles } from 'lucide-react'

export default function MascotShowcase() {
  return (
    <section id="mascot" className="relative py-20 bg-white overflow-hidden border-b border-slate-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mascot column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl bg-white border border-slate-200 p-4 shadow-sm hover:border-brand-500/40 hover:shadow-md transition-all duration-200">
              <div className="h-full w-full rounded-2xl bg-slate-50/50 overflow-hidden flex flex-col justify-end p-5 border border-slate-150 relative">
                
                {/* AI Generated Mascot resembling Logo */}
                <div className="absolute inset-0 flex items-center justify-center p-6 pb-20 animate-float">
                  <img
                    src="/chamy_mascot.png"
                    alt="Chamy the Chameleon Mascot"
                    className="w-full h-auto object-contain max-h-[220px] drop-shadow-[0_15px_30px_rgba(37,99,235,0.15)] select-none pointer-events-none"
                  />
                </div>

                {/* Clean detail banner */}
                <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 relative z-10 shadow-3xs">
                  <p className="text-[10px] font-bold text-brand-600 uppercase tracking-wider">Iterum Mascot</p>
                  <h4 className="font-display font-bold text-slate-900 text-base mt-0.5">Chamy the Chameleon</h4>
                  <p className="text-slate-500 text-xs mt-1 leading-relaxed font-sans">
                    An AI-generated mascot designed to match our circular infinity loop brand logo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-brand-500" /> Preparation Agile
              </span>
              <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight mt-2 sm:text-4xl">
                Practice interview adaptability with Chamy
              </h2>
              <p className="mt-4 text-base text-slate-605 leading-relaxed font-sans">
                Chameleons shift seamlessly to match their surroundings. In modern interviews, you must do the exact same: adjusting your answers to highlight relevant milestones, aligning with different team cultures, and solving variable technical constraints. Iterum acts as your training partner, building this critical flexibility before your actual panel.
              </p>
            </div>

            {/* Simple, high-contrast, honest vector bullet points matching the APP_SPEC */}
            <div className="space-y-4 pt-2">
              {[
                {
                  num: '01',
                  title: 'Resume Context Integration',
                  desc: 'Link your uploaded PDF resume to job profiles. The AI reads your experience, projects, and skills to generate personalized questions about technical decisions and leadership gaps.'
                },
                {
                  num: '02',
                  title: 'Tailored Practice Rounds',
                  desc: 'Select or create custom interview rounds (HR screen, behavioral, coding, system design, hiring manager, or team fit) with dynamic, round-specific AI feedback.'
                },
                {
                  num: '03',
                  title: 'Secure Supabase Architecture',
                  desc: 'Sign in securely using Supabase Auth (OAuth or email/password). All uploaded resumes and database records are private, using Row-Level Security policies.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3.5">
                  <div className="h-8 w-8 rounded-xl bg-brand-50 border border-brand-100 text-brand-600 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-slate-950 text-sm leading-tight">{item.title}</h4>
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
