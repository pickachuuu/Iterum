import { useState } from 'react'

export default function PersonaTabs() {
  const [activeTab, setActiveTab] = useState('swe')

  const tabData = {
    swe: {
      title: 'Software Engineers',
      tagline: 'Review distributed scaling, algorithms, and technical deep-dives.',
      desc: 'Set up profiles for Google, Amazon, or Stripe SWE roles. Link your engineering resume to practice system design scaling and dynamic coding panel rounds tailored to your technical milestones.',
      bullets: [
        'Practice coding panel rounds detailing runtime complex constraints.',
        'Rehearse high-load system design architecture follow-ups.',
        'Link technical resume projects to dynamic AI questions.'
      ],
      mockupTitle: 'Generated Practice Rounds List',
      mockupContent: (
        <div className="space-y-3.5 text-slate-800">
          <div className="flex justify-between items-center bg-slate-50 border-b border-slate-200 px-3 py-2 rounded-t-lg text-[10px] text-slate-500 font-mono">
            <span>profile: google_swe_l5</span>
            <span className="text-blue-600 font-bold">5 Rounds Created</span>
          </div>
          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50/50 space-y-2 text-[11px] font-sans text-slate-700">
            <p className="font-bold text-slate-450 uppercase text-[9px]">Created Practice Rounds:</p>
            <div className="space-y-1.5 font-medium text-xs">
              <div className="flex justify-between p-1 bg-white border border-slate-150 rounded"><span>01. Technical Screen</span><span className="text-slate-400 text-[10px]">Active</span></div>
              <div className="flex justify-between p-1 bg-white border border-slate-150 rounded"><span>02. Coding Panel</span><span className="text-slate-400 text-[10px]">Active</span></div>
              <div className="flex justify-between p-1 bg-white border border-slate-150 rounded"><span>03. System Design</span><span className="text-slate-400 text-[10px]">Active</span></div>
              <div className="flex justify-between p-1 bg-white border border-slate-150 rounded"><span>04. Hiring Manager Screen</span><span className="text-slate-400 text-[10px]">Active</span></div>
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
        <div className="space-y-4 text-slate-800">
          <div className="flex justify-between items-center bg-slate-50 border-b border-slate-200 px-3 py-2 rounded-t-lg text-[10px] text-slate-500 font-mono">
            <span>Opportunity Workspace</span>
            <span className="text-blue-600 font-bold">Setup Active</span>
          </div>
          <div className="space-y-2 text-xs font-sans p-2">
            <div className="flex items-center gap-2 text-slate-655">
              <div className="h-4.5 w-4.5 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] font-bold">✓</div>
              <span>Create Stripe PM Job Profile</span>
            </div>
            <div className="flex items-center gap-2 text-slate-655">
              <div className="h-4.5 w-4.5 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] font-bold">✓</div>
              <span>Upload PM_Resume.pdf to Storage</span>
            </div>
            <div className="flex items-center gap-2 text-slate-655">
              <div className="h-4.5 w-4.5 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] font-bold">✓</div>
              <span>Generate 3 tailored practice rounds</span>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-[10px] text-slate-550 leading-relaxed font-sans font-medium">
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
        <div className="space-y-3.5 text-slate-800">
          <div className="flex justify-between items-center bg-slate-50 border-b border-slate-200 px-3 py-2 rounded-t-lg text-[10px] text-slate-500 font-mono">
            <span>Practice: technical_round_02</span>
            <span className="text-purple-600 font-bold">Question 3</span>
          </div>
          <div className="border border-slate-200 rounded-lg p-3 bg-slate-50/50 space-y-2 text-[11px] font-sans text-slate-700">
            <p className="font-bold text-slate-450 uppercase text-[9px]">AI Generated prompt:</p>
            <p className="italic text-xs font-medium">"Your resume highlights optimizing booking predictions. How did you verify models statistical significance prior to model deployment?"</p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-[10px] text-slate-500 leading-relaxed font-sans font-medium">
            AI feedback: "Strong metrics baseline. Suggest explaining the significance test details."
          </div>
        </div>
      )
    },
    sales: {
      title: 'Sales & Marketing',
      tagline: 'Practice lead campaigns, enterpise pipelines, and value presentations.',
      desc: 'Build profiles for B2B account executives or marketing managers. Practice pitching enterprise contracts, campaign prioritizations, and intro screens tailored to your client credentials.',
      bullets: [
        'Simulate mock contract reviews and pipeline cases.',
        'Structure verbal value-statements with dynamic feedback.',
        'Upload portfolio campaign notes to personalized sessions.'
      ],
      mockupTitle: 'Completed Job Profile Details',
      mockupContent: (
        <div className="space-y-4 text-slate-800">
          <div className="flex items-center justify-between text-xs border-b border-slate-200 bg-slate-50 px-3 py-2 rounded-t-lg font-mono text-slate-500">
            <span>profile: stripe_enterprise_ae</span>
            <span className="text-emerald-600 font-bold">Profile Configured</span>
          </div>
          <div className="space-y-2 text-xs text-slate-655 p-3.5 border border-slate-150 rounded-b-lg font-sans">
            <p className="font-bold text-slate-900">Company:</p> <p className="text-slate-600">Stripe</p>
            <p className="font-bold text-slate-900 mt-1.5">Job Title:</p> <p className="text-slate-600">B2B Enterprise AE</p>
            <p className="font-bold text-slate-900 mt-1.5">Qualifications:</p> <p className="text-slate-600 leading-relaxed">5+ years B2B SaaS, handling $100k+ enterprise contracts.</p>
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
        <div className="space-y-3.5 text-slate-800">
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase bg-slate-50 p-2 rounded-t-lg border-b border-slate-200">
            <span>Prior Milestones</span>
            <span>Target Role Translation</span>
          </div>
          <div className="space-y-2 text-[11px] font-sans text-slate-700">
            <div className="p-2.5 border border-slate-200 bg-slate-50/50 rounded-lg">
              <p className="text-slate-900 font-bold">Prior Project Coordination:</p>
              <p className="mt-0.5 text-slate-655">{"->"} Translated: Agile resource scoping & cross-functional prioritizing (Product Manager)</p>
            </div>
          </div>
        </div>
      )
    }
  }

  const currentTab = tabData[activeTab] || tabData['swe']

  return (
    <section id="who" className="relative py-20 bg-slate-50 border-b border-slate-200/60 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest">
            Audience Segments
          </span>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 tracking-tight mt-2 sm:text-4xl">
            Tailored preparation for your specific career path
          </h2>
          <p className="mt-3 text-base text-slate-655 leading-relaxed font-sans">
            Iterum is custom-calibrated for engineers, managers, analysts, and transitioning professionals.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(tabData).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                activeTab === key
                  ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white border-brand-600 shadow-md shadow-blue-500/15'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <span>{value.title}</span>
            </button>
          ))}
        </div>

        {/* Details Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left side: Clean UI Preview representing actual spec items */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs relative">
              <p className="text-center text-[9px] text-slate-400 font-mono mb-3 border-b border-slate-100 pb-2.5">
                {currentTab.mockupTitle}
              </p>
              {currentTab.mockupContent}
            </div>

            {/* Right side: Detail List */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-600 uppercase">
                  Target Profile
                </span>
                <h3 className="font-display font-black text-slate-900 text-2xl mt-1.5 leading-tight">
                  {currentTab.title}
                </h3>
                <p className="text-brand-600 font-sans font-bold text-xs sm:text-sm mt-1">
                  {currentTab.tagline}
                </p>
              </div>

              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans font-medium">
                {currentTab.desc}
              </p>

              {/* Clean Numbered checklist matching APP_SPEC rounds */}
              <div className="space-y-2 pt-1">
                {currentTab.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-sans font-bold">
                    <div className="h-5 w-5 rounded-lg bg-brand-50 border border-brand-100 text-brand-600 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="mt-0.5">{b}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button className="font-sans font-black text-xs text-white bg-slate-900 hover:bg-slate-800 px-5 py-2.5 rounded-full transition-all cursor-pointer shadow-sm">
                  Practice {currentTab.title} Rounds
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
