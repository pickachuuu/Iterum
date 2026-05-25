import { Check } from 'lucide-react'

export default function BentoGridFeatures() {
  return (
    <section id="why" className="relative py-20 bg-gradient-to-b from-white via-blue-50/20 to-white overflow-hidden border-b border-slate-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">
            Platform Capabilities
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight mt-2 sm:text-4xl">
            Meet the world's most structured preparation tool
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-sans font-medium">
            Iterum is built around a rigorous preparation methodology, removing the friction from mock interview training.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Card 1: Wide top card (Core Simulation) */}
          <div className="md:col-span-6 bg-gradient-to-br from-blue-50/75 via-indigo-50/50 to-cyan-50/60 rounded-3xl p-6 md:p-8 border border-blue-200 text-slate-800 overflow-hidden relative transition-all duration-200 shadow-2xs hover:shadow-xs hover:border-blue-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-bold text-brand-600 uppercase tracking-wider font-mono">
                  01 / Core Simulation
                </span>
                <h3 className="font-display font-extrabold text-2xl text-slate-900 leading-snug">
                  Dynamic practice powered by personalized AI
                </h3>
                <p className="text-slate-655 text-sm leading-relaxed font-sans font-medium">
                  The simulator manages multi-turn dialogue context. It dynamically generates relevant questions, collects your response, and poses follow-up questions to replicate real-life conversation loops.
                </p>
                <div className="space-y-2 pt-2 text-xs text-slate-700 font-bold font-sans">
                  <div className="flex items-center gap-2.5">
                    <div className="h-4 w-4 rounded-full bg-slate-900 text-white flex items-center justify-center"><Check className="h-2.5 w-2.5" /></div>
                    <span>Personalized multi-turn dialogue</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-4 w-4 rounded-full bg-slate-900 text-white flex items-center justify-center"><Check className="h-2.5 w-2.5" /></div>
                    <span>Strictly role-specific simulation</span>
                  </div>
                </div>
              </div>

              {/* Textual simulation layout (Light mode) */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
                <div className="flex justify-between items-center pb-2.5 border-b border-slate-100 text-slate-400 text-xs">
                  <span className="font-mono">Google L5 Mock Session</span>
                  <span className="text-slate-450 font-medium">Session Active</span>
                </div>
                <div className="space-y-4 text-xs font-sans">
                  <div className="space-y-1">
                    <p className="font-bold text-slate-400 uppercase text-[9px]">AI Interviewer</p>
                    <p className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-700 leading-relaxed font-medium">
                      "Your resume mentions leading database migrations. How did you verify data integrity during the double-write phase?"
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-slate-400 uppercase text-[9px] text-right">You</p>
                    <p className="bg-white border border-slate-350 rounded-xl p-3 text-slate-750 leading-relaxed font-medium">
                      "We executed asynchronous parity checks comparing record hashes across both clusters, writing diff streams to a dead-letter queue..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Medium bottom left card (Resume Context) */}
          <div className="md:col-span-3 bg-gradient-to-br from-blue-600 to-indigo-650 border-transparent text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider font-mono">
                02 / Resume Context upload
              </span>
              <h3 className="font-display font-extrabold text-xl text-white leading-snug">
                Link experience & achievements
              </h3>
              <p className="text-white/85 text-sm leading-relaxed font-sans font-medium">
                Upload your resume securely in PDF format to Supabase Storage. Iterum parses your background milestones and technical stack, generating highly custom, relevant inquiries.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/80 font-bold">
              <span>Resume PDF upload</span>
              <span>Secure Storage</span>
            </div>
          </div>

          {/* Card 3: Medium bottom right card (Job Profiles) */}
          <div className="md:col-span-3 bg-gradient-to-br from-accent-orange to-accent-rose border-transparent text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg hover:scale-[1.01] transition-all duration-200">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider font-mono">
                03 / Job Profiles
              </span>
              <h3 className="font-display font-extrabold text-xl text-white leading-snug">
                Define your target opportunities
              </h3>
              <p className="text-white/85 text-sm leading-relaxed font-sans font-medium">
                Create structured profiles for every target job. Set company name, role, required qualifications, and post descriptions to anchor your custom mock practice rounds.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-white/10">
              {['Company name', 'Role title', 'Job description', 'Required skills'].map(t => (
                <span key={t} className="text-[10px] font-bold bg-white/10 text-white border border-white/20 px-2.5 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Wide bottom card (AI Feedback & Followups) */}
          <div className="md:col-span-6 bg-gradient-to-br from-emerald-50/75 via-teal-50/50 to-blue-50/60 border border-emerald-200 rounded-3xl p-6 md:p-8 transition-all duration-200 shadow-2xs hover:shadow-xs hover:border-emerald-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider font-mono">
                  04 / AI Coach Heuristics
                </span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900">
                  Constructive feedback & follow-ups
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-sans font-medium">
                  Review precise evaluations after every turn. Iterum analyzes response structure, technical depth, and highlights suggested answer improvements before asking targeted follow-up questions.
                </p>
              </div>

              {/* Simple metrics grid */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: 'AI FEEDBACK', val: 'Direct', sub: 'Constructive suggestions', color: 'text-blue-600' },
                  { label: 'FOLLOW-UPS', val: 'Active', sub: 'Multi-turn details', color: 'text-purple-600' },
                  { label: 'STORAGE', val: 'Private', sub: 'Row-Level Security', color: 'text-emerald-600' }
                ].map((s, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-2xs text-center hover:border-slate-350 transition-colors">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{s.label}</p>
                    <p className={`font-display text-lg font-extrabold mt-2.5 ${s.color}`}>{s.val}</p>
                    <p className="text-[10px] text-slate-500 mt-1 font-sans font-medium">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
