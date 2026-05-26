import { useState } from 'react'
import { FileText, Briefcase, MessageSquare, Check, HelpCircle } from 'lucide-react'

import ScrollReveal from './ScrollReveal'

type ProfileId = 'swe' | 'pm' | 'ds'

type Profile = {
  id: ProfileId
  role: string
  company: string
  location: string
}

type PracticeQA = {
  question: string
  answer: string
  feedback: string
  followUp: string
}

interface HeroProps {
  onStartFreeClick: () => void
}

export default function Hero({ onStartFreeClick }: HeroProps) {
  const [activeProfile, setActiveProfile] = useState<ProfileId>('swe')

  const profiles: Profile[] = [
    { id: 'swe', role: 'Software Engineer', company: 'Google', location: 'Mountain View' },
    { id: 'pm', role: 'Product Manager', company: 'Stripe', location: 'San Francisco' },
    { id: 'ds', role: 'Data Scientist', company: 'Airbnb', location: 'Remote' }
  ]

  const qaData: Record<ProfileId, PracticeQA> = {
    swe: {
      question: "Your resume mentions leading a legacy database migration at Google. How did you handle schema migration without database read-write locks?",
      answer: "We implemented a dual-write process. First, we wrote data to both the legacy SQL database and the new search cluster, while continuing to read from the SQL base. After synchronizing historical data using a background worker, we verified data parity and shifted read operations to the new cluster before decommissioning the legacy writes.",
      feedback: "Your answer clearly outlines the sequence of migration steps. To improve, mention the approximate volume of records migrated to give the interviewer immediate scale context.",
      followUp: "How did you monitor data parity and handle failed write attempts during the dual-write phase?"
    },
    pm: {
      question: "Your resume highlights launching localization features at Stripe. How did you prioritize required Japanese invoicing details against user adoption metrics?",
      answer: "I mapped out localization compliance requirements as strict launching blockers, then prioritized remaining UX improvements by merchant adoption rates using a prioritization score, launching basic Japanese layouts first before adding custom reporting portals.",
      feedback: "Great focus on compliance vs growth trade-offs. To improve, explain how you aligned engineering resources to handle the strict localization blockers.",
      followUp: "How did you validate that the localized invoicing layout met Japan's regulatory tax standards prior to general launch?"
    },
    ds: {
      question: "Based on your experience tracking booking predictions at Airbnb, how did you verify model accuracy and detect data drift in production?",
      answer: "I set up daily statistical test loops running on the target features inside production logs, comparing request frames against the baseline training distribution to detect feature drift and schedule automated retraining cycles.",
      feedback: "Excellent methodology. To improve, explain the compute trade-offs of executing daily statistical telemetry tests on massive production log streams.",
      followUp: "What specific statistical threshold did you set to trigger the model retraining, and how did you prevent retraining loops?"
    }
  }

  const activeQA = qaData[activeProfile]

  return (
    <header className="relative min-h-screen pt-28 pb-20 overflow-hidden flex flex-col justify-center items-center text-center">
      


      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Headline */}
        <ScrollReveal variant="fade-up" duration="duration-700">
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-[1.12] drop-shadow-lg">
            AI-powered job interview practice.
          </h1>
        </ScrollReveal>
        
        {/* Subtext */}
        <ScrollReveal variant="fade-up" delay="delay-100" duration="duration-700">
          <p className="mt-6 max-w-2xl text-lg text-slate-400 mx-auto leading-relaxed font-sans font-medium">
            Create role-specific job profiles, upload your resume, and conduct realistic practice rounds with dynamic AI questions and feedback tailored to your background.
          </p>
        </ScrollReveal>
        
        {/* Noir Premium Action Buttons */}
        <ScrollReveal variant="fade-up" delay="delay-200" duration="duration-700">
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4.5">
            <button 
              onClick={onStartFreeClick}
              className="w-full sm:w-auto font-sans font-black uppercase tracking-wider text-xs text-zinc-950 bg-white hover:bg-slate-100 active:scale-98 px-8 py-4.5 rounded-full shadow-lg shadow-white/5 transition-all cursor-pointer border border-white/10"
            >
              Start practicing free
            </button>
            <button className="w-full sm:w-auto font-sans font-bold text-xs text-white bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-850 active:scale-98 px-8 py-4.5 rounded-full transition-all cursor-pointer backdrop-blur-md shadow-sm">
              See how it works
            </button>
          </div>
        </ScrollReveal>
        
        {/* Brand reference row */}
        <ScrollReveal variant="fade-in" delay="delay-300" duration="duration-1000">
          <div>
            <p className="mt-14 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Prepare for target roles at
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-display font-bold text-slate-400 text-xs tracking-wide">
              <span className="hover:text-white transition-colors duration-200 cursor-default">Google</span>
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-800"></span>
              <span className="hover:text-white transition-colors duration-200 cursor-default">Stripe</span>
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-800"></span>
              <span className="hover:text-white transition-colors duration-200 cursor-default">Airbnb</span>
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-800"></span>
              <span className="hover:text-white transition-colors duration-200 cursor-default">Amazon</span>
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-800"></span>
              <span className="hover:text-white transition-colors duration-200 cursor-default">Netflix</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Premium Noir App Mockup representing actual spec logic */}
        <ScrollReveal variant="scale-up" delay="delay-400" className="mt-16 relative mx-auto w-full max-w-4xl rounded-xl border border-zinc-800 bg-zinc-900 p-2 shadow-2xl shadow-black/80 z-20">
          
          {/* Header bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-zinc-800 bg-zinc-950/60 rounded-t-lg text-xs text-zinc-500">
            <span className="h-2 w-2 rounded-full bg-zinc-800"></span>
            <span className="h-2 w-2 rounded-full bg-zinc-800"></span>
            <span className="h-2 w-2 rounded-full bg-zinc-800"></span>
            <span className="ml-4 font-mono text-[9px] text-zinc-500">app.iterum.ai/practice-session</span>
          </div>

          {/* High-Contrast Noir Dashboard matching spec structure */}
          <div className="grid grid-cols-1 md:grid-cols-4 border border-zinc-800/80 rounded-b-lg overflow-hidden bg-zinc-950 text-left text-slate-200 min-h-[440px]">
            
            {/* Sidebar: Job Profiles & Linked Resume */}
            <div className="bg-zinc-900/40 border-r border-zinc-800/60 p-4 space-y-6">
              <div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5 text-zinc-600" /> Active Profile
                </p>
                <div className="space-y-1.5">
                  {profiles.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setActiveProfile(p.id)}
                      className={`w-full text-left p-2.5 rounded-lg border transition-all text-xs cursor-pointer ${
                        activeProfile === p.id
                          ? 'bg-zinc-900 border-zinc-700 text-white font-semibold shadow-xs'
                          : 'bg-transparent border-transparent text-zinc-400 hover:bg-zinc-900/50 hover:text-white'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-zinc-100">{p.company}</span>
                        <span className="text-[9px] text-zinc-500 font-medium">{p.location}</span>
                      </div>
                      <p className="text-zinc-400 font-medium mt-0.5">{p.role}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-zinc-600" /> Linked Resume
                </p>
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-lg p-2.5 flex items-center justify-between text-xs shadow-inner">
                  <div className="flex items-center gap-2.5 text-zinc-300 min-w-0">
                    <div className="h-7 w-7 rounded bg-zinc-800 text-zinc-400 flex items-center justify-center font-bold text-[9px]">PDF</div>
                    <div className="truncate">
                      <p className="font-semibold truncate text-zinc-200">Resume.pdf</p>
                      <p className="text-[9px] text-zinc-500"> parsed context</p>
                    </div>
                  </div>
                  <div className="h-4.5 w-4.5 rounded-full bg-white text-zinc-950 flex items-center justify-center flex-shrink-0">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                </div>
              </div>
            </div>

            {/* AI Practice Workspace: dynamic questions, responses, feedback */}
            <div className="md:col-span-3 p-5 md:p-6 flex flex-col justify-between gap-5 bg-zinc-950">
              
              {/* Generated Question */}
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle className="h-3.5 w-3.5 text-zinc-650" /> AI Generated Question
                </p>
                <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-3.5 text-white text-xs sm:text-sm leading-relaxed font-medium">
                  "{activeQA.question}"
                </div>
              </div>

              {/* User Answer */}
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-zinc-650" /> Your Response
                </p>
                <div className="bg-zinc-900/20 border border-zinc-800/80 rounded-xl p-3.5 text-zinc-300 text-xs sm:text-sm leading-relaxed min-h-[80px]">
                  {activeQA.answer}
                </div>
              </div>

              {/* Legit feedback and follow-ups based on APP_SPEC */}
              <div className="border-t border-zinc-800/80 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">AI feedback & suggestions</p>
                  <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-3 text-xs text-zinc-400 font-sans leading-relaxed">
                    {activeQA.feedback}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">AI follow-up question</p>
                  <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-xl p-3 text-xs text-zinc-400 font-sans leading-relaxed italic">
                    "{activeQA.followUp}"
                  </div>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>

    </header>
  )
}
