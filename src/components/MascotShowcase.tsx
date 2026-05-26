import { useMemo, useState } from 'react'
import ScrollReveal from './ScrollReveal'

type ShowcaseFeature = {
  num: string
  title: string
  desc: string
}

type InterviewerRole = {
  key: 'hr' | 'tech' | 'executive'
  label: string
  eyebrow: string
  title: string
  image: string
  accent: string
  focus: string
  question: string
  desc: string
}

const showcaseFeatures: ShowcaseFeature[] = [
  {
    num: '01',
    title: 'Different Interviewer Styles',
    desc: 'The AI changes its style in real-time, letting you practice with different interviewers—from friendly HR recruiters to strict technical leads.'
  },
  {
    num: '02',
    title: 'Questions Built for You',
    desc: 'It reads your resume and job description to ask specific questions about your real projects, rather than using generic templates.'
  },
  {
    num: '03',
    title: 'Clear, Helpful Feedback',
    desc: 'Once you finish your practice session, the AI gives you a helpful review of your answers and suggests exactly how to improve.'
  }
]

const interviewerRoles: InterviewerRole[] = [
  {
    key: 'hr',
    label: 'HR Recruiter',
    eyebrow: 'General screening',
    title: 'Warm introduction',
    image: '/interviewer_hr.png',
    accent: 'text-amber-500',
    focus: 'Culture fit, career milestones, and expectations',
    question: '"Walk me through your career highlights. What makes you stand out for this role, and how do your salary expectations align?"',
    desc: 'A friendly HR talent manager designed to check your soft skills, background, and cultural fit.'
  },
  {
    key: 'tech',
    label: 'Technical Lead',
    eyebrow: 'Systems review',
    title: 'Engineering deep-dive',
    image: '/interviewer_tech.png',
    accent: 'text-sky-500',
    focus: 'System scaling, database design, and technical decisions',
    question: '"Your resume mentions leading database migrations. How did you handle schema alterations under heavy double-write production loads without locking reads?"',
    desc: 'An analytical principal engineer focused on deep systems design, performance trade-offs, and your technical choices.'
  },
  {
    key: 'executive',
    label: 'Executive Sponsor',
    eyebrow: 'Leadership loop',
    title: 'Hiring manager sync',
    image: '/interviewer_executive.png',
    accent: 'text-zinc-500',
    focus: '90-Day onboarding roadmap, team collaboration, and strategy',
    question: '"What high-leverage outputs will you prioritize in your first 30, 60, and 90 days to scale department velocity safely without generating cross-team friction?"',
    desc: 'A senior business leader evaluating your roadmaps, team leadership style, and high-level strategy.'
  }
]

export default function MascotShowcase() {
  const [activeRole, setActiveRole] = useState<InterviewerRole['key']>('hr')
  
  const activeInterviewer = useMemo(
    () => interviewerRoles.find((role) => role.key === activeRole) ?? interviewerRoles[0],
    [activeRole]
  )

  return (
    <section id="mascot" className="relative py-20 overflow-hidden">
      {/* Rounded light transition overlay */}
      <div className="absolute inset-0 bg-[#f4f4f6] rounded-t-[48px] z-0 border-b border-zinc-200/80" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Interviewer role card and switcher (5 cols) */}
          <ScrollReveal variant="scale-up" duration="duration-700" className="lg:col-span-5">
            <div className="space-y-4">
              
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-zinc-950">
                  
                  {/* Image Layer */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950">
                    {interviewerRoles.map((role) => {
                      const isActive = role.key === activeRole
                      return (
                        <img
                          key={role.key}
                          src={role.image}
                          alt={`${role.label} interviewer profile`}
                          className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 ease-out ${
                            isActive
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-[1.03]'
                          }`}
                        />
                      )
                    })}
                  </div>

                  {/* Clean bottom name tag - extremely clean, minimal, no status badges */}
                  <div className="relative border-t border-zinc-900 bg-zinc-950 px-4 py-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-mono">
                          AI Interviewer
                        </span>
                        <h4 className="font-display text-lg font-black tracking-tight text-white uppercase">
                          {activeInterviewer.label}
                        </h4>
                      </div>
                      <span className="text-[9px] font-bold text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded uppercase font-mono">
                        {activeInterviewer.eyebrow}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Switcher Buttons Grid */}
              <div className="grid grid-cols-3 gap-3">
                {interviewerRoles.map((role) => {
                  const isActive = role.key === activeRole
                  return (
                    <button
                      key={role.key}
                      type="button"
                      onClick={() => setActiveRole(role.key)}
                      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-zinc-500 cursor-pointer ${
                        isActive
                          ? 'border-zinc-500 bg-white shadow-md'
                          : 'border-slate-200 bg-white hover:border-slate-350 shadow-xs'
                      }`}
                    >
                      <div className="aspect-[3/4] overflow-hidden bg-zinc-950">
                        <img
                          src={role.image}
                          alt={`${role.label} switcher thumbnail`}
                          className={`h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] ${
                            isActive ? 'opacity-100' : 'opacity-85'
                          }`}
                        />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 px-2 py-1.5 backdrop-blur-xs text-center">
                        <p className="text-[9px] font-black text-slate-800 tracking-wide uppercase">
                          {role.label.split(' ')[0]}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>

            </div>
          </ScrollReveal>

          {/* Info column (7 cols) - simplified typography and copy */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fade-up">
              <div className="text-left">
                <h2 className="font-display text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-none">
                  AI interviewers who shift to test your limits
                </h2>
                <p className="mt-4 text-base sm:text-lg text-slate-650 leading-relaxed font-sans font-medium">
                  High-stakes interviews are not one-size-fits-all. Meet your AI interviewer. It plays the role of different interviewers—from friendly HR recruiters to strict technical leads and executive managers. It adjusts its tone and questioning style to help you practice under real pressure before the actual meeting.
                </p>
              </div>
            </ScrollReveal>

            {/* Live Question Display */}
            <ScrollReveal variant="scale-up" delay="delay-100" className="relative">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-5 md:p-6 shadow-md relative overflow-hidden transition-all duration-300 text-slate-800 text-left min-h-[320px]">
                
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="font-bold text-slate-400 uppercase text-[9px] font-mono tracking-wider">
                      Active Interviewer Focus:
                    </p>
                    <p className="text-slate-900 text-sm font-sans font-bold">
                      {activeInterviewer.focus}
                    </p>
                  </div>
                  
                  <div className="space-y-1.5 pt-1.5 border-t border-slate-100">
                    <p className="font-bold text-slate-400 uppercase text-[9px] font-mono tracking-wider">
                      Simulated Practice Question:
                    </p>
                    <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 text-slate-900 text-xs sm:text-sm font-medium leading-relaxed shadow-2xs italic transition-all duration-500 min-h-[90px] flex items-center">
                      {activeInterviewer.question}
                    </div>
                  </div>

                  <div className="space-y-1 pt-3 border-t border-slate-100">
                    <p className="font-bold text-slate-400 uppercase text-[9px] font-mono tracking-wider">
                      Interviewer Profile:
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                      {activeInterviewer.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Core Capabilities - simplified copy */}
            <div className="space-y-4 pt-2">
              {showcaseFeatures.map((item, idx) => (
                <ScrollReveal 
                  key={idx}
                  variant="fade-up" 
                  delay={idx === 0 ? 'delay-75' : idx === 1 ? 'delay-150' : 'delay-225'}
                >
                  <div className="flex gap-4 text-left">
                    <div className="h-8.5 w-8.5 rounded-xl bg-zinc-950 border border-zinc-900 text-white font-mono font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
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
