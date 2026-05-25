import { useState } from 'react'
import {
  Compass,
  Sparkles,
  Activity,
  Layers,
  Shield,
  HeartHandshake,
  BookOpen
} from 'lucide-react'
import LogoSvg from './LogoSvg'

export default function InterviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(2) // Default to Behavioral Round

  const rounds = [
    {
      num: '01',
      title: 'Discovery Screening',
      vibe: 'First impressions are structural.',
      soulQuote: 'The gateway of alignment. It is where your career trajectory collides with the organization\'s immediate operational velocity and compensation benchmarks.',
      icon: BookOpen,
      colorClass: 'from-zinc-800 to-zinc-950',
      glowColor: 'rgba(255, 255, 255, 0.05)',
      highlights: [
        {
          title: 'Trajectory Calibration',
          desc: 'Highlighting key career pivot points, past structural growth milestones, and future professional directions.'
        },
        {
          title: 'Expectation Alignment',
          desc: 'Establishing shared parameters around salary structures, notice periods, and onboarding timelines.'
        },
        {
          title: 'Clarity of Purpose',
          desc: 'Formulating a safe, highly engaging elevator summary free of technical jargon or corporate noise.'
        }
      ]
    },
    {
      num: '02',
      title: 'Strategic Auditing',
      vibe: 'Execution is in the methodology.',
      soulQuote: 'A deep-dive into your tactical engine. This is where your capacity to diagnose workflow bottlenecks, prioritize resources, and deploy operational frameworks is verified.',
      icon: Layers,
      colorClass: 'from-zinc-700 to-zinc-900',
      glowColor: 'rgba(255, 255, 255, 0.05)',
      highlights: [
        {
          title: 'Diagnostic Foresight',
          desc: 'Identifying latent blockers, evaluating workflow constraints, and establishing strict operational risk mitigation.'
        },
        {
          title: 'Prioritization Matrices',
          desc: 'Demonstrating a systematic, highly quantitative approach to task backlogs, scheduling, and competing milestones.'
        },
        {
          title: 'Quality Baselines',
          desc: 'Setting uncompromising standards of excellence that guard deliverables against rapid scaling friction.'
        }
      ]
    },
    {
      num: '03',
      title: 'Behavioral Chemistry',
      vibe: 'The art of storytelling under pressure.',
      soulQuote: 'A showcase of execution leadership. We study not just the success you achieved, but the friction, escalation pathways, and stakeholder diplomacy you navigated to secure it.',
      icon: Activity,
      colorClass: 'from-slate-800 to-slate-950',
      glowColor: 'rgba(255, 255, 255, 0.05)',
      highlights: [
        {
          title: 'STAR Synthesis',
          desc: 'Crafting highly compelling, structured narratives with exact partitions: Situation, Task, Action, and Result.'
        },
        {
          title: 'Diplomatic Mediation',
          desc: 'Balancing opposing organizational demands and renegotiating milestones without generating team friction.'
        },
        {
          title: 'Quantified Impact',
          desc: 'Linking strategic decisions directly to measurable business outcomes, percentages, or resource efficiency.'
        }
      ]
    },
    {
      num: '04',
      title: 'Collaborative Consensus',
      vibe: 'Alignment without friction.',
      soulQuote: 'Evaluating active synergy. This is where we measure your capacity to absorb critical perspectives, align cross-functional dependencies, and champion workplace integrity.',
      icon: HeartHandshake,
      colorClass: 'from-neutral-700 to-neutral-900',
      glowColor: 'rgba(255, 255, 255, 0.05)',
      highlights: [
        {
          title: 'Active Assimilation',
          desc: 'Welcoming and integrating complex cross-department feedback loops without defensive barriers.'
        },
        {
          title: 'Dependency Mapping',
          desc: 'Aligning competitive incentives across commercial, product, and operational lines to establish win-win bridges.'
        },
        {
          title: 'Cultural Acceleration',
          desc: 'Acting as a professional multiplier, actively enriching team chemistry and shared values.'
        }
      ]
    },
    {
      num: '05',
      title: 'Executive Vision Sync',
      vibe: 'Building the 90-day roadmap.',
      soulQuote: 'The final strategic alignment. You sit with organizational leadership to map your immediate onboarding trajectory directly against the multi-year business roadmap.',
      icon: Shield,
      colorClass: 'from-slate-700 to-zinc-900',
      glowColor: 'rgba(255, 255, 255, 0.05)',
      highlights: [
        {
          title: 'Roadmap Architecture',
          desc: 'Designing a realistic, crawl-walk-run sequence outlining high-leverage outputs for your first 30, 60, and 90 days.'
        },
        {
          title: 'Scale Integrity',
          desc: 'Expanding departmental velocity and scope safely without causing structural team strain.'
        },
        {
          title: 'Commercial Calibration',
          desc: 'Translating daily operational outputs directly into target business margins and customer value.'
        }
      ]
    }
  ]

  const activeRound = rounds[activeIndex] || rounds[2]

  return (
    <section id="rounds" className="relative py-28 bg-zinc-950 overflow-hidden border-y border-zinc-900">
      
      {/* Dynamic styles for responsive orbital radius and rotation elements */}
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --radius: 125px;
        }
        @media (min-width: 768px) {
          :root {
            --radius: 160px;
          }
        }
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.08); opacity: 0.25; }
        }
        .animate-subtle-pulse {
          animation: subtlePulse 5s ease-in-out infinite;
        }
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slow-spin {
          animation: slowSpin 50s linear infinite;
        }
      `}} />

      {/* Decorative ambient background visual washes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div 
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 transition-all duration-1000"
          style={{ backgroundColor: activeRound.glowColor }}
        />
        <div 
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-15 transition-all duration-1000"
          style={{ backgroundColor: activeRound.glowColor }}
        />
        {/* Subtle dark grid layout */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:32px_32px] opacity-25 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-4xl mb-20 text-left">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-white bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full uppercase tracking-widest">
            <Compass className="h-4.5 w-4.5 text-zinc-300 animate-spin" style={{ animationDuration: '6s' }} /> Segmented Practice Pathways
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight mt-4 leading-none">
            An interactive compass of <br />
            <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-500 bg-clip-text text-transparent">your career milestone rounds</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-zinc-400 leading-relaxed font-sans font-medium max-w-3xl">
            Prepare across the entire assessment loop. Iterum maps, structures, and elevates every interview conversation. Click on a node of the radial track below to explore the roadmap.
          </p>
        </div>

        {/* Artistic Radial Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: The Astrolabe / Orbit Compass Dial (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative py-8">
            
            {/* Ambient Background Aura behind Compass */}
            <div 
              className="absolute h-[380px] w-[380px] rounded-full blur-2xl transition-all duration-1000 animate-subtle-pulse"
              style={{ background: `radial-gradient(circle, ${activeRound.glowColor} 0%, transparent 70%)` }}
            />

            {/* Giant Radial Compass Outer Frame */}
            <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full border border-zinc-800/80 bg-zinc-900/40 shadow-2xl flex items-center justify-center overflow-hidden">
              
              {/* Decorative slow-spinning dashed background ring */}
              <div className="absolute inset-2.5 rounded-full border border-dashed border-zinc-800 animate-slow-spin pointer-events-none opacity-60" />
              
              {/* Rotating Node Tracker Wrapper */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{ 
                  transform: `rotate(${-activeIndex * 72}deg)`,
                  transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Render nodes placed relative to the rotating compass system */}
                {rounds.map((round, idx) => {
                  const isActive = activeIndex === idx
                  const nodeAngle = idx * 72
                  
                  return (
                    <button
                      key={round.num}
                      onClick={() => setActiveIndex(idx)}
                      className="absolute top-1/2 left-1/2 cursor-pointer group z-20 focus:outline-none"
                      style={{
                        /* Position precisely on the radial track using CSS coordinates */
                        transform: `translate(-50%, -50%) rotate(${nodeAngle}deg) translateY(calc(-1 * var(--radius))) rotate(${-nodeAngle}deg)`
                      }}
                    >
                      {/* Counter-rotation block to keep active buttons completely upright as wheel spins! */}
                      <div 
                        style={{ 
                          transform: `rotate(${activeIndex * 72}deg)`,
                          transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        className="relative"
                      >
                        {/* Active glowing ring pulses */}
                        {isActive && (
                          <div 
                            className="absolute -inset-2 rounded-full blur-md opacity-70 animate-ping transition-all"
                            style={{
                              background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)`
                            }}
                          />
                        )}
                        
                        {/* Beautiful high-end segment button */}
                        <div className={`h-13 w-13 md:h-15 md:w-15 rounded-full flex flex-col items-center justify-center border font-sans font-bold transition-all duration-300 ${
                          isActive
                            ? 'bg-white text-zinc-950 shadow-lg shadow-white/10 scale-110 border-transparent'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-450 hover:border-zinc-600 hover:text-white shadow-sm hover:scale-105'
                        }`}>
                          <span className="text-[9px] uppercase font-mono tracking-wider opacity-60 leading-none">RND</span>
                          <span className="text-xs md:text-sm font-black mt-0.5 leading-none">{round.num}</span>
                        </div>

                        {/* Hover tooltips */}
                        <span className={`absolute top-15 md:top-17 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 bg-white text-zinc-950 rounded shadow-xs transition-all duration-300 pointer-events-none ${
                          isActive 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 -translate-y-1 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100'
                        }`}>
                          {round.title}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Central Fixed Branding Emblem */}
              <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full bg-zinc-900 border border-zinc-800 shadow-md flex flex-col items-center justify-center z-10 select-none">
                <div className="h-8 w-8 text-white"><LogoSvg /></div>
                <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mt-1.5">ITERUM CORE</span>
              </div>

            </div>
          </div>

          {/* Right Column: Premium Executive Editorial Spread (7 cols) */}
          <div className="lg:col-span-7 lg:pl-6">
            <div className="grid grid-cols-1 grid-rows-1 w-full">
              
              {rounds.map((round, idx) => {
                const isActive = activeIndex === idx
                
                return (
                  <div
                    key={round.num}
                    className={`col-start-1 row-start-1 flex flex-col justify-between transition-all duration-500 ease-out ${
                      isActive
                        ? 'opacity-100 translate-y-0 pointer-events-auto scale-100 z-10'
                        : 'opacity-0 translate-y-4 pointer-events-none scale-[0.97] z-0'
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Big Editorial Header */}
                      <div className="relative">
                        <span className="absolute -top-16 -left-4 text-[100px] sm:text-[130px] font-black text-zinc-800/20 select-none pointer-events-none font-mono leading-none tracking-tight">
                          {round.num}
                        </span>
                        
                        <div className="relative pt-4 space-y-2">
                          <span className="inline-block text-xs font-bold text-white bg-zinc-900 border border-zinc-800/80 px-3 py-1 rounded-full uppercase tracking-widest">
                            VIBE: {round.vibe}
                          </span>
                          
                          <h3 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight pt-1.5">
                            {round.title}
                          </h3>
                        </div>
                      </div>

                      {/* Literary Soul Quote */}
                      <blockquote className="border-l-4 border-zinc-700 pl-5 py-1.5">
                        <p className="text-base sm:text-lg text-zinc-300 font-sans font-medium italic leading-relaxed">
                          "{round.soulQuote}"
                        </p>
                      </blockquote>

                      {/* Key strategic focus points */}
                      <div className="space-y-5">
                        <h4 className="text-[10px] font-black text-zinc-550 uppercase tracking-widest flex items-center gap-2 border-b border-zinc-900 pb-2">
                          <Sparkles className="h-3.5 w-3.5 text-zinc-400" /> Key Strategic Focus Objectives
                        </h4>
                        
                        <div className="grid grid-cols-1 gap-5">
                          {round.highlights.map((h, i) => (
                            <div key={i} className="group flex items-start gap-4">
                              <span className="h-6.5 w-6.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-mono font-bold flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors group-hover:bg-white group-hover:text-zinc-950 group-hover:border-white">
                                0{i + 1}
                              </span>
                              <div className="space-y-0.5">
                                <p className="font-sans font-extrabold text-sm text-white tracking-tight group-hover:text-zinc-300 transition-colors">
                                  {h.title}
                                </p>
                                <p className="text-xs text-zinc-450 leading-relaxed font-sans font-semibold">
                                  {h.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sleek separation spacing */}
                    <div className="mt-8" />

                  </div>
                )
              })}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
