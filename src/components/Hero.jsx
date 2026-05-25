import { useState } from 'react'
import { FileText, Briefcase, MessageSquare, Check, HelpCircle } from 'lucide-react'

export default function Hero() {
  const [activeProfile, setActiveProfile] = useState('swe')

  const profiles = [
    { id: 'swe', role: 'Software Engineer', company: 'Google', location: 'Mountain View' },
    { id: 'pm', role: 'Product Manager', company: 'Stripe', location: 'San Francisco' },
    { id: 'ds', role: 'Data Scientist', company: 'Airbnb', location: 'Remote' }
  ]

  const qaData = {
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

  const activeQA = qaData[activeProfile] || qaData['swe']

  return (
    <header className="relative bg-gradient-to-b from-blue-600 via-indigo-655 to-purple-700 pt-36 pb-36 overflow-hidden flex flex-col justify-center text-center">
      {/* Saturated visual decorative blur mesh */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-400/20 blur-[130px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-rose-500/10 blur-[120px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* Headline */}
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-4xl mx-auto leading-[1.12] drop-shadow-sm">
          AI-powered job interview practice.
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-2xl text-lg text-white/85 mx-auto leading-relaxed font-sans font-medium">
          Create role-specific job profiles, upload your resume, and conduct realistic practice rounds with dynamic AI questions and feedback tailored to your background.
        </p>

        {/* Action Buttons (Animaker Style) */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4.5">
          <button className="w-full sm:w-auto font-sans font-black uppercase tracking-wider text-xs text-white bg-gradient-to-r from-accent-orange to-accent-rose hover:brightness-110 active:scale-98 px-8 py-4.5 rounded-full shadow-lg shadow-orange-500/20 transition-all cursor-pointer">
            Start practicing free
          </button>
          <button className="w-full sm:w-auto font-sans font-bold text-xs text-white bg-white/10 border border-white/20 hover:bg-white/20 active:scale-98 px-8 py-4.5 rounded-full transition-all cursor-pointer backdrop-blur-md shadow-sm">
            See how it works
          </button>
        </div>

        {/* Brand reference row */}
        <p className="mt-14 text-[10px] font-black text-white/60 uppercase tracking-widest">
          Prepare for target roles at
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-display font-bold text-white/70 text-xs tracking-wide">
          <span className="hover:text-white transition-colors duration-200 cursor-default">Google</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
          <span className="hover:text-white transition-colors duration-200 cursor-default">Stripe</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
          <span className="hover:text-white transition-colors duration-200 cursor-default">Airbnb</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
          <span className="hover:text-white transition-colors duration-200 cursor-default">Amazon</span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/20"></span>
          <span className="hover:text-white transition-colors duration-200 cursor-default">Netflix</span>
        </div>

        {/* 100% Legit Light-Mode App Mockup representing actual spec logic */}
        <div className="mt-16 relative mx-auto w-full max-w-4xl rounded-xl border border-white/10 bg-white p-2.5 shadow-2xl shadow-slate-900/30 z-20">
          
          {/* Header bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100 bg-slate-50/50 rounded-t-lg text-xs text-slate-400">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-slate-200"></span>
            <span className="ml-4 font-mono text-[10px] text-slate-400">app.iterum.ai/practice-session</span>
          </div>

          {/* Clean Dashboard matching spec structure */}
          <div className="grid grid-cols-1 md:grid-cols-4 border border-slate-150 rounded-b-lg overflow-hidden bg-white text-left text-slate-800 min-h-[440px]">
            
            {/* Sidebar: Job Profiles & Linked Resume */}
            <div className="bg-slate-50 border-r border-slate-200 p-4 space-y-6">
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5 text-slate-450" /> Active Profile
                </p>
                <div className="space-y-1.5">
                  {profiles.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setActiveProfile(p.id)}
                      className={`w-full text-left p-2.5 rounded-lg border transition-all text-xs cursor-pointer ${
                        activeProfile === p.id
                          ? 'bg-white border-slate-350 text-slate-950 font-semibold shadow-2xs'
                          : 'bg-transparent border-transparent text-slate-550 hover:bg-slate-200/50 hover:text-slate-850'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-slate-850">{p.company}</span>
                        <span className="text-[9px] text-slate-400 font-medium">{p.location}</span>
                      </div>
                      <p className="text-slate-500 font-medium mt-0.5">{p.role}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <FileText className="h-3.5 w-3.5 text-slate-450" /> Associated Resume
                </p>
                <div className="bg-white border border-slate-200 rounded-lg p-2.5 flex items-center justify-between text-xs shadow-3xs">
                  <div className="flex items-center gap-2.5 text-slate-700 min-w-0">
                    <div className="h-7 w-7 rounded bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-[9px]">PDF</div>
                    <div className="truncate">
                      <p className="font-semibold truncate text-slate-800">Resume.pdf</p>
                      <p className="text-[9px] text-slate-400"> linked context</p>
                    </div>
                  </div>
                  <div className="h-4.5 w-4.5 rounded-full bg-slate-900 flex items-center justify-center text-white flex-shrink-0">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* AI Practice Workspace: dynamic questions, responses, feedback */}
            <div className="md:col-span-3 p-5 md:p-6 flex flex-col justify-between gap-5 bg-white">
              
              {/* Generated Question */}
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle className="h-3.5 w-3.5 text-slate-400" /> AI Generated Question
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-slate-800 text-xs sm:text-sm leading-relaxed font-semibold">
                  "{activeQA.question}"
                </div>
              </div>

              {/* User Answer */}
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-slate-400" /> Your Response
                </p>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 text-slate-700 text-xs sm:text-sm leading-relaxed min-h-[80px]">
                  {activeQA.answer}
                </div>
              </div>

              {/* Legit feedback and follow-ups based on APP_SPEC */}
              <div className="border-t border-slate-150 pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-slate-450 uppercase tracking-wider">AI feedback & suggestions</p>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-655 font-sans leading-relaxed">
                    {activeQA.feedback}
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] font-bold text-slate-450 uppercase tracking-wider">AI follow-up question</p>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-655 font-sans leading-relaxed italic">
                    "{activeQA.followUp}"
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Sweeping organic White Curve separator (Vibes of Animaker) */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-white rounded-t-[48px] pointer-events-none z-10"></div>
    </header>
  )
}
