import { useState } from 'react'
import type { ReactNode } from 'react'
import ScrollReveal from './ScrollReveal'

type PersonaTabId = 'swe' | 'pm' | 'ds' | 'sales' | 'career'

type PersonaTab = {
  title: string
  tagline: string
  desc: string
  bullets: string[]
  mockupTitle: string
  mockupContent: ReactNode
}

export default function PersonaTabs() {
  const [activeTab, setActiveTab] = useState<PersonaTabId>('swe')

  const tabData: Record<PersonaTabId, PersonaTab> = {
    swe: {
      title: 'Software Engineers',
      tagline: 'Review distributed scaling, algorithms, and technical deep-dives.',
      desc: 'Set up profiles for Google, Amazon, or Stripe SWE roles. Link your engineering resume to practice system design scaling and dynamic competency panels tailored to your technical milestones.',
      bullets: [
        'Practice technical mock panels detailing operational scale constraints.',
        'Rehearse high-load system design architecture follow-ups.',
        'Link technical resume projects to dynamic AI questions.'
      ],
      mockupTitle: 'Generated Practice Rounds List',
      mockupContent: (
        <div className="space-y-3.5 text-zinc-300">
          <div className="flex justify-between items-center bg-zinc-900 border-b border-zinc-800 px-3 py-2 rounded-t-lg text-[10px] text-zinc-400 font-mono">
            <span>profile: google_swe_l5</span>
            <span className="text-white font-bold">5 Rounds Created</span>
          </div>
          <div className="border border-zinc-800 rounded-lg p-3 bg-zinc-900/30 space-y-2 text-[11px] font-sans text-zinc-300">
            <p className="font-bold text-zinc-500 uppercase text-[9px]">Created Practice Rounds:</p>
            <div className="space-y-1.5 font-medium text-xs">
              <div className="flex justify-between p-1.5 bg-zinc-950 border border-zinc-850 rounded"><span>01. Technical Screen</span><span className="text-zinc-500 text-[10px]">Active</span></div>
              <div className="flex justify-between p-1.5 bg-zinc-950 border border-zinc-850 rounded"><span>02. Strategic Competency</span><span className="text-zinc-500 text-[10px]">Active</span></div>
              <div className="flex justify-between p-1.5 bg-zinc-950 border border-zinc-850 rounded"><span>03. System Design</span><span className="text-zinc-500 text-[10px]">Active</span></div>
              <div className="flex justify-between p-1.5 bg-zinc-950 border border-zinc-850 rounded"><span>04. Hiring Manager Screen</span><span className="text-zinc-500 text-[10px]">Active</span></div>
            </div>
          </div>
        </div>
      )
    },
    pm: {
      title: 'Product Managers',
      tagline: 'Master product strategy, roadmap trade-offs, and metric execution.',
      desc: 'Prepare for product sense, execution logic, and strategic trade-off cases. Upload your PM resume to practice answering questions about launching features, regulatory blockers, and roadmap prioritizations.',
      bullets: [
        'Practice recruiter screens and behavioral leadership rounds.',
        'Rehearse product metrics tracking and prioritization logic.',
        'AI questions dynamically ask about past product launches.'
      ],
      mockupTitle: 'Profile Setup Checklist',
      mockupContent: (
        <div className="space-y-4 text-zinc-300">
          <div className="flex justify-between items-center bg-zinc-900 border-b border-zinc-800 px-3 py-2 rounded-t-lg text-[10px] text-zinc-400 font-mono">
            <span>Opportunity Workspace</span>
            <span className="text-white font-bold">Setup Active</span>
          </div>
          <div className="space-y-2.5 text-xs font-sans p-2">
            <div className="flex items-center gap-2 text-zinc-300">
              <div className="h-4.5 w-4.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 flex items-center justify-center text-[9px] font-bold">✓</div>
              <span>Create Stripe PM Job Profile</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <div className="h-4.5 w-4.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 flex items-center justify-center text-[9px] font-bold">✓</div>
              <span>Upload PM_Resume.pdf to Storage</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <div className="h-4.5 w-4.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 flex items-center justify-center text-[9px] font-bold">✓</div>
              <span>Generate 3 tailored practice rounds</span>
            </div>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-2.5 text-[10px] text-zinc-450 leading-relaxed font-sans font-medium">
            Next step: "Launch Round 1: Behavioral Interview to practice."
          </div>
        </div>
      )
    },
    ds: {
      title: 'Data Scientists',
      tagline: 'Review machine learning pipelines, diagnostics, and statistical modeling.',
      desc: 'Link your ML portfolio and quantitative resume to practice quantitative case studies, class imbalances strategies, A/B testing diagnostics, and retraining loops.',
      bullets: [
        'Practice metrics evaluation and significance checking.',
        'Address ML production pipelines and retraining prompts.',
        'Formulate stats answers using resume milestones.'
      ],
      mockupTitle: 'Active Data Science Session',
      mockupContent: (
        <div className="space-y-3.5 text-zinc-350">
          <div className="flex justify-between items-center bg-zinc-900 border-b border-zinc-800 px-3 py-2 rounded-t-lg text-[10px] text-zinc-400 font-mono">
            <span>Practice: technical_round_02</span>
            <span className="text-white font-bold">Question 3</span>
          </div>
          <div className="border border-zinc-800 rounded-lg p-3 bg-zinc-900/30 space-y-2 text-[11px] font-sans text-zinc-300">
            <p className="font-bold text-zinc-500 uppercase text-[9px]">AI Generated prompt:</p>
            <p className="italic text-xs font-semibold">"Your resume highlights optimizing booking predictions. How did you verify models statistical significance prior to model deployment?"</p>
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-2.5 text-[10px] text-zinc-450 leading-relaxed font-sans font-medium">
            AI feedback: "Strong metrics baseline. Suggest explaining the significance test details."
          </div>
        </div>
      )
    },
    sales: {
      title: 'Sales & Marketing',
      tagline: 'Practice lead campaigns, enterprise pipelines, and value presentations.',
      desc: 'Build profiles for B2B account executives or marketing managers. Practice pitching enterprise contracts, campaign prioritizations, and intro screens tailored to your client credentials.',
      bullets: [
        'Simulate mock contract reviews and pipeline cases.',
        'Structure verbal value-statements with dynamic feedback.',
        'Upload portfolio campaign notes to personalized sessions.'
      ],
      mockupTitle: 'Completed Job Profile Details',
      mockupContent: (
        <div className="space-y-4 text-zinc-300">
          <div className="flex items-center justify-between text-xs border-b border-zinc-800 bg-zinc-900 px-3 py-2 rounded-t-lg font-mono text-zinc-400">
            <span>profile: stripe_enterprise_ae</span>
            <span className="text-white font-bold">Profile Configured</span>
          </div>
          <div className="space-y-2 text-xs text-zinc-350 p-3.5 border border-zinc-800 rounded-b-lg font-sans">
            <p className="font-bold text-zinc-200">Company:</p> <p className="text-zinc-400">Stripe</p>
            <p className="font-bold text-zinc-200 mt-1.5">Job Title:</p> <p className="text-zinc-400">B2B Enterprise AE</p>
            <p className="font-bold text-zinc-200 mt-1.5">Qualifications:</p> <p className="text-zinc-400 leading-relaxed">5+ years B2B SaaS, handling $100k+ enterprise contracts.</p>
          </div>
        </div>
      )
    },
    career: {
      title: 'Career Switchers',
      tagline: 'Translate prior milestones and projects to target requirements.',
      desc: 'Practice bridging your existing portfolio, technical skills, and management achievements into dynamic STAR-format answers that align with new career descriptions.',
      bullets: [
        'Bridge adjacent project milestones into required skills.',
        'Address experience gaps with dynamic follow-up simulations.',
        'AI tailors questions to highlight relevant structural skills.'
      ],
      mockupTitle: 'Experience Bridge translation',
      mockupContent: (
        <div className="space-y-3.5 text-zinc-300">
          <div className="flex items-center justify-between text-[10px] font-bold text-zinc-500 uppercase bg-zinc-900 p-2 rounded-t-lg border-b border-zinc-800">
            <span>Prior Milestones</span>
            <span>Target Role Translation</span>
          </div>
          <div className="space-y-2 text-[11px] font-sans text-zinc-300">
            <div className="p-2.5 border border-zinc-800 bg-zinc-900/30 rounded-lg">
              <p className="text-zinc-200 font-bold">Prior Project Coordination:</p>
              <p className="mt-0.5 text-zinc-450">{"->"} Translated: Agile resource scoping & cross-functional prioritizing (Product Manager)</p>
            </div>
          </div>
        </div>
      )
    }
  }

  const currentTab = tabData[activeTab]
  const tabIds = Object.keys(tabData) as PersonaTabId[]

  return (
    <section id="who" className="relative py-20 bg-zinc-950 border-b border-zinc-900 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-3xl mb-14 text-left">
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mt-4 leading-none">
              Tailored preparation for your specific career path
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed font-sans font-medium">
              Iterum is custom-calibrated for engineers, managers, analysts, and transitioning professionals.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Buttons */}
        <ScrollReveal variant="fade-up" delay="delay-100">
          <div className="flex flex-wrap gap-2 mb-8">
            {tabIds.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                  activeTab === key
                    ? 'bg-white text-zinc-950 border-white shadow-md shadow-white/10'
                    : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:bg-zinc-850 hover:text-white'
                }`}
              >
                <span>{tabData[key].title}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Details Card */}
        <ScrollReveal variant="scale-up" delay="delay-200" className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side: Clean UI Preview representing actual spec items */}
            <div className="lg:col-span-6 bg-zinc-950 border border-zinc-850 rounded-2xl p-4 sm:p-5 shadow-lg relative">
              <p className="text-center text-[9px] text-zinc-500 font-mono mb-3 border-b border-zinc-850 pb-2.5">
                {currentTab.mockupTitle}
              </p>
              {currentTab.mockupContent}
            </div>

            {/* Right side: Detail List */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase">
                  Target Profile
                </span>
                <h3 className="font-display font-black text-white text-2xl mt-1.5 leading-tight">
                  {currentTab.title}
                </h3>
                <p className="text-zinc-300 font-sans font-bold text-xs sm:text-sm mt-1">
                  {currentTab.tagline}
                </p>
              </div>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans font-semibold">
                {currentTab.desc}
              </p>

              {/* Clean Numbered checklist matching APP_SPEC rounds */}
              <div className="space-y-2 pt-1">
                {currentTab.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-sans font-bold">
                    <div className="h-5 w-5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      {i + 1}
                    </div>
                    <span className="mt-0.5">{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button className="font-sans font-black text-xs text-zinc-950 bg-white hover:bg-slate-100 border border-white px-5 py-2.5 rounded-full transition-all cursor-pointer shadow-sm">
                  Practice {currentTab.title} Rounds
                </button>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
