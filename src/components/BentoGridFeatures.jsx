import { Check } from 'lucide-react'

export default function BentoGridFeatures() {
  return (
    <section id="why" className="relative py-20 bg-[#f4f4f6] overflow-hidden border-b border-zinc-200/80">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-bold text-zinc-950 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full uppercase tracking-widest">
            Platform Capabilities
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight mt-4 leading-none">
            Meet the world's most structured preparation tool
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-550 leading-relaxed font-sans font-medium">
            Iterum is built around a rigorous preparation methodology, removing the friction from mock interview training.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Card 1: Wide top card (Core Simulation) */}
          <div className="md:col-span-6 bg-gradient-to-br from-zinc-50 via-slate-50 to-zinc-100 rounded-3xl p-6 md:p-8 border border-zinc-200 text-slate-800 overflow-hidden relative transition-all duration-300 shadow-2xs hover:shadow-xs hover:border-zinc-300 group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-mono">
                  01 / Core Simulation
                </span>
                <h3 className="font-display font-black text-2xl text-zinc-950 leading-snug">
                  Dynamic practice powered by personalized AI
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans font-semibold">
                  The simulator manages multi-turn dialogue context. It dynamically generates relevant questions, collects your response, and poses follow-up questions to replicate real-life conversation loops.
                </p>
                <div className="space-y-2 pt-2 text-xs text-zinc-800 font-bold font-sans">
                  <div className="flex items-center gap-2.5">
                    <div className="h-4.5 w-4.5 rounded-md bg-zinc-950 text-white flex items-center justify-center"><Check className="h-3 w-3 stroke-[3]" /></div>
                    <span>Personalized multi-turn dialogue</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="h-4.5 w-4.5 rounded-md bg-zinc-950 text-white flex items-center justify-center"><Check className="h-3 w-3 stroke-[3]" /></div>
                    <span>Strictly role-specific simulation</span>
                  </div>
                </div>
              </div>

              {/* Textual simulation layout (Premium dark dashboard frame inside light card!) */}
              <div className="lg:col-span-7 bg-zinc-950 border border-zinc-850 rounded-2xl p-5 space-y-4 shadow-lg">
                <div className="flex justify-between items-center pb-2.5 border-b border-zinc-900 text-zinc-500 text-xs">
                  <span className="font-mono text-[9px] uppercase tracking-wider">Iterum L5 active mock session</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active
                  </span>
                </div>
                <div className="space-y-4 text-xs font-sans">
                  <div className="space-y-1">
                    <p className="font-bold text-zinc-500 uppercase text-[9px]">AI Interviewer</p>
                    <p className="bg-zinc-900 border border-zinc-850 rounded-xl p-3 text-slate-200 leading-relaxed font-medium">
                      "Your resume mentions leading database migrations. How did you verify data integrity during the double-write phase?"
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-bold text-zinc-500 uppercase text-[9px] text-right">You</p>
                    <p className="bg-zinc-950 border border-zinc-850 rounded-xl p-3 text-slate-300 leading-relaxed font-medium">
                      "We executed asynchronous parity checks comparing record hashes across both clusters, writing diff streams to a dead-letter queue..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Medium bottom left card (Resume Context) */}
          <div className="md:col-span-3 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800/80 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                02 / Resume Context upload
              </span>
              <h3 className="font-display font-black text-xl text-white leading-snug">
                Link experience & achievements
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-sans font-semibold">
                Upload your resume securely in PDF format to Supabase Storage. Iterum parses your background milestones and technical stack, generating highly custom, relevant inquiries.
              </p>
            </div>
            
            <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-slate-400 font-bold">
              <span>Resume PDF upload</span>
              <span className="text-zinc-500">Secure Storage</span>
            </div>
          </div>

          {/* Card 3: Medium bottom right card (Job Profiles) */}
          <div className="md:col-span-3 bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/60 text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-lg hover:scale-[1.01] transition-all duration-300">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                03 / Job Profiles
              </span>
              <h3 className="font-display font-black text-xl text-white leading-snug">
                Define your target opportunities
              </h3>
              <p className="text-slate-350 text-sm leading-relaxed font-sans font-semibold">
                Create structured profiles for every target job. Set company name, role, required qualifications, and post descriptions to anchor your custom mock practice rounds.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 pt-4 border-t border-zinc-700">
              {['Company name', 'Role title', 'Job description', 'Required skills'].map(t => (
                <span key={t} className="text-[9px] font-bold bg-white/5 text-slate-300 border border-white/10 px-2 py-0.5 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Wide bottom card (AI Feedback & Followups) */}
          <div className="md:col-span-6 bg-gradient-to-br from-slate-50 via-zinc-50 to-slate-100 border border-zinc-200 rounded-3xl p-6 md:p-8 transition-all duration-300 shadow-2xs hover:shadow-xs hover:border-zinc-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider font-mono">
                  04 / AI Coach Heuristics
                </span>
                <h3 className="font-display font-black text-2xl text-zinc-950">
                  Constructive feedback & follow-ups
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans font-semibold">
                  Review precise evaluations after every turn. Iterum analyzes response structure, technical depth, and highlights suggested answer improvements before asking targeted follow-up questions.
                </p>
              </div>

              {/* Simple metrics grid */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: 'AI FEEDBACK', val: 'Direct', sub: 'Constructive suggestions', color: 'text-zinc-950' },
                  { label: 'FOLLOW-UPS', val: 'Active', sub: 'Multi-turn details', color: 'text-zinc-800' },
                  { label: 'STORAGE', val: 'Private', sub: 'Row-Level Security', color: 'text-zinc-900' }
                ].map((s, i) => (
                  <div key={i} className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-2xs text-center hover:border-zinc-400 transition-colors duration-200">
                    <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">{s.label}</p>
                    <p className={`font-display text-lg font-black mt-2.5 ${s.color}`}>{s.val}</p>
                    <p className="text-[10px] text-zinc-500 mt-1 font-sans font-semibold">{s.sub}</p>
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
