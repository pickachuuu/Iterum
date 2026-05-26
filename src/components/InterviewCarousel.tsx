import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  Layers,
  Shield,
  HeartHandshake,
  BookOpen
} from 'lucide-react'
import LogoSvg from './LogoSvg'

type RoundHighlight = {
  title: string
  desc: string
}

type InterviewRound = {
  num: string
  title: string
  vibe: string
  soulQuote: string
  icon: LucideIcon
  colorClass: string
  glowColor: string
  highlights: RoundHighlight[]
}

export default function InterviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(2) // Default to Behavioral Round

  const rounds: InterviewRound[] = [
    {
      num: '01',
      title: 'Discovery Screening',
      vibe: 'First impressions are structural.',
      soulQuote: 'The gateway of alignment. It is where your career trajectory collides with the organization\'s immediate operational velocity and compensation benchmarks.',
      icon: BookOpen,
      colorClass: 'from-zinc-800 to-zinc-950',
      glowColor: 'rgba(255, 255, 255, 0.08)',
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
      glowColor: 'rgba(255, 255, 255, 0.08)',
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
      glowColor: 'rgba(255, 255, 255, 0.08)',
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
      glowColor: 'rgba(255, 255, 255, 0.08)',
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
      glowColor: 'rgba(255, 255, 255, 0.08)',
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

  const activeRound = rounds[activeIndex] ?? rounds[2]

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
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-15 transition-all duration-1000"
          style={{ backgroundColor: activeRound.glowColor }}
        />
        <div 
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20 transition-all duration-1000"
          style={{ backgroundColor: activeRound.glowColor }}
        />
        {/* Subtle dark grid layout */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-4xl mb-20 text-left">

          <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight mt-4 leading-none">
            An interactive compass of <br />
            <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-500 bg-clip-text text-transparent">your career milestone rounds</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-zinc-300 leading-relaxed font-sans font-medium max-w-3xl">
            Prepare across the entire assessment loop. Iterum maps, structures, and elevates every interview conversation. Click on a node of the radial track below to explore the roadmap.
          </p>
        </div>

        {/* Artistic Radial Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: High-Contrast Orbit Compass Dial (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative py-8">
            
            {/* Ambient Background Aura behind Compass */}
            <div 
              className="absolute h-[380px] w-[380px] rounded-full blur-2xl transition-all duration-1000 animate-subtle-pulse"
              style={{ background: `radial-gradient(circle, ${activeRound.glowColor} 0%, transparent 70%)` }}
            />

            {/* Giant Radial Compass Outer Frame - Overhauled to Premium Metallic Obsidian Dial */}
            <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full border-4 border-zinc-600 bg-gradient-to-b from-zinc-800 via-zinc-900 to-black shadow-[0_25px_60px_rgba(0,0,0,0.85)] flex items-center justify-center overflow-hidden">
              
              {/* Fine Blueprint-Style Crosshairs for a detailed mechanical look */}
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-transparent via-zinc-700/60 to-transparent pointer-events-none" />
              <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent pointer-events-none" />

              {/* Physical Circle Track line on which nodes rotate */}
              <div className="absolute w-[calc(2*var(--radius))] h-[calc(2*var(--radius))] rounded-full border-2 border-zinc-700/60 pointer-events-none" />
              <div className="absolute w-[calc(2*var(--radius)-30px)] h-[calc(2*var(--radius)-30px)] rounded-full border border-dashed border-zinc-800 pointer-events-none" />

              {/* Rotating Dashed outer Ring - High-Contrast zinc-500 */}
              <div className="absolute inset-3 rounded-full border border-dashed border-zinc-500/40 animate-slow-spin pointer-events-none" />
              
              {/* Rotating Ring with delicate geometric ticks - Bright & Crisp */}
              <div className="absolute inset-8 rounded-full border border-zinc-700/45 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-3.5 bg-zinc-400" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-3.5 bg-zinc-400" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-1 bg-zinc-400" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-1 bg-zinc-400" />
              </div>

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
                            className="absolute -inset-3.5 rounded-full blur-md opacity-85 animate-ping transition-all"
                            style={{
                              background: `radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)`
                            }}
                          />
                        )}
                        
                        {/* High-Contrast segment button node (Solid gray active/inactive steel nodes!) */}
                        <div className={`h-13 w-13 md:h-15 md:w-15 rounded-full flex flex-col items-center justify-center border-2 font-sans font-bold transition-all duration-300 ${
                          isActive
                            ? 'bg-white text-zinc-950 shadow-[0_0_25px_rgba(255,255,255,0.75)] scale-120 border-zinc-900'
                            : 'bg-zinc-900 border-zinc-500 text-zinc-100 hover:border-white hover:bg-zinc-800 hover:text-white shadow-xl'
                        }`}>
                          <span className="text-[9px] uppercase font-mono tracking-wider opacity-70 leading-none">RND</span>
                          <span className="text-xs md:text-sm font-black mt-0.5 leading-none">{round.num}</span>
                        </div>

                        {/* Hover tooltips */}
                        <span className={`absolute top-15 md:top-17 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 bg-white text-zinc-950 rounded shadow-md transition-all duration-300 pointer-events-none ${
                          isActive 
                            ? 'opacity-100 translate-y-0 scale-100 font-black' 
                            : 'opacity-0 -translate-y-1 scale-90 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100'
                        }`}>
                          {round.title}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Central Fixed Branding Emblem - Overhauled to Stark Contrast Silver/Chalk luxury cap */}
              <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full bg-gradient-to-b from-white via-zinc-150 to-zinc-300 border-4 border-zinc-800 shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center z-10 select-none">
                <div className="h-8 w-8 text-zinc-950"><LogoSvg /></div>
                <span className="text-[8px] font-black text-zinc-950 uppercase tracking-widest mt-1.5 font-mono">ITERUM CORE</span>
              </div>

            </div>
          </div>

          {/* Right Column: High-Contrast Premium Executive Editorial Spread (7 cols) */}
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
                      {/* Big Editorial Header - High-Contrast Display watermark */}
                      <div className="relative">
                        <span className="absolute -top-16 -left-4 text-[100px] sm:text-[130px] font-black select-none pointer-events-none font-mono leading-none tracking-tight" style={{ color: 'rgba(255, 255, 255, 0.3)' }}>
                          {round.num}
                        </span>
                        
                        <div className="relative pt-4 space-y-2">
                          <span className="vibe-badge inline-block text-xs font-bold text-white bg-zinc-900 border border-zinc-700 px-3 py-1 rounded-full uppercase tracking-widest">
                            VIBE: {round.vibe}
                          </span>
                          
                          <h3 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight pt-1.5">
                            {round.title}
                          </h3>
                        </div>
                      </div>

                      {/* Literary Soul Quote - Bright White Contrast with explicit styles */}
                      <blockquote className="border-l-4 border-zinc-300 pl-5 py-1.5">
                        <p className="text-base sm:text-lg font-sans font-medium italic leading-relaxed text-white" style={{ color: '#ffffff' }}>
                          "{round.soulQuote}"
                        </p>
                      </blockquote>

                      {/* Key strategic focus points - Highly Readable White & Silver typography with robust fallback colors */}
                      <div className="space-y-5 pt-2">
                        
                        <div className="grid grid-cols-1 gap-5">
                          {round.highlights.map((h, i) => (
                            <div key={i} className="group flex items-start gap-4">
                              {/* High contrast bullet indexes */}
                              <span className="number-bullet h-6.5 w-6.5 rounded bg-zinc-900 border-2 border-zinc-500 text-white font-mono font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors group-hover:bg-white group-hover:text-zinc-950 group-hover:border-white">
                                0{i + 1}
                              </span>
                              <div className="space-y-1">
                                <p className="font-sans font-extrabold text-sm tracking-tight transition-colors group-hover:text-zinc-200" style={{ color: '#ffffff' }}>
                                  {h.title}
                                </p>
                                {/* CRITICAL: Applied explicit style overrides to ensure slate-chalk text-zinc-300 renders beautifully under all browser contexts */}
                                <p className="text-xs leading-relaxed font-sans font-normal" style={{ color: '#d4d4d8' }}>
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
