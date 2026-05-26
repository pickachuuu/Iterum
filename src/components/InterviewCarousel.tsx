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
import ScrollReveal from './ScrollReveal'

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
  const [activeIndex, setActiveIndex] = useState(0)

  const rounds: InterviewRound[] = [
    {
      num: '01',
      title: 'HR Screening',
      vibe: 'First impressions matter.',
      soulQuote: 'This is the first gate. The recruiter wants to know who you are, what you\'ve done, and whether the basics line up — salary, timeline, and motivation.',
      icon: BookOpen,
      colorClass: 'from-zinc-800 to-zinc-950',
      glowColor: 'rgba(255, 255, 255, 0.08)',
      highlights: [
        {
          title: 'Career Story',
          desc: 'Walk through your career path clearly — key roles, why you moved, and where you\'re heading next.'
        },
        {
          title: 'Expectations Check',
          desc: 'Get comfortable talking about salary, start dates, and what you\'re actually looking for.'
        },
        {
          title: 'Your Elevator Pitch',
          desc: 'Nail a short, engaging summary of who you are and why you\'re right for this role.'
        }
      ]
    },
    {
      num: '02',
      title: 'Technical Deep-Dive',
      vibe: 'Show what you know.',
      soulQuote: 'This is where they test your skills. Expect questions about how you solve problems, build systems, and make decisions under real constraints.',
      icon: Layers,
      colorClass: 'from-zinc-700 to-zinc-900',
      glowColor: 'rgba(255, 255, 255, 0.08)',
      highlights: [
        {
          title: 'Problem Spotting',
          desc: 'Show how you identify issues early and figure out the right fix before things break.'
        },
        {
          title: 'Prioritization',
          desc: 'Explain how you decide what to work on first when everything feels urgent.'
        },
        {
          title: 'Quality Standards',
          desc: 'Demonstrate how you keep work reliable and high-quality even when moving fast.'
        }
      ]
    },
    {
      num: '03',
      title: 'Behavioral Round',
      vibe: 'Tell real stories.',
      soulQuote: 'They want to hear about real situations — not just what you achieved, but how you handled conflict, pressure, and difficult teammates along the way.',
      icon: Activity,
      colorClass: 'from-slate-800 to-slate-950',
      glowColor: 'rgba(255, 255, 255, 0.08)',
      highlights: [
        {
          title: 'STAR Method',
          desc: 'Structure your stories using Situation, Task, Action, and Result to keep answers clear and focused.'
        },
        {
          title: 'Handling Conflict',
          desc: 'Show how you\'ve dealt with disagreements and tough situations without burning bridges.'
        },
        {
          title: 'Showing Results',
          desc: 'Back up your stories with real numbers — revenue saved, time reduced, users impacted.'
        }
      ]
    },
    {
      num: '04',
      title: 'Cross-Team Panel',
      vibe: 'Working with others.',
      soulQuote: 'This round tests how well you play with other teams. Can you take feedback, collaborate across departments, and fit into the culture without friction?',
      icon: HeartHandshake,
      colorClass: 'from-neutral-700 to-neutral-900',
      glowColor: 'rgba(255, 255, 255, 0.08)',
      highlights: [
        {
          title: 'Taking Feedback',
          desc: 'Show that you can listen to people from different teams and use their input constructively.'
        },
        {
          title: 'Working Across Teams',
          desc: 'Explain how you\'ve collaborated with people outside your immediate team to get things done.'
        },
        {
          title: 'Culture Fit',
          desc: 'Demonstrate that you make the people around you better and bring positive energy to the team.'
        }
      ]
    },
    {
      num: '05',
      title: 'Hiring Manager Final',
      vibe: 'Your 90-day plan.',
      soulQuote: 'The last conversation. The hiring manager wants to know what you\'ll actually do in your first 30, 60, and 90 days — and whether you can think long-term.',
      icon: Shield,
      colorClass: 'from-slate-700 to-zinc-900',
      glowColor: 'rgba(255, 255, 255, 0.08)',
      highlights: [
        {
          title: '30-60-90 Day Plan',
          desc: 'Map out what you\'d focus on in your first three months — learning, contributing, and leading.'
        },
        {
          title: 'Growing Without Breaking Things',
          desc: 'Show how you\'d scale your team or projects without creating chaos or burning people out.'
        },
        {
          title: 'Connecting Work to Business Goals',
          desc: 'Explain how your day-to-day work would directly help the company hit its targets.'
        }
      ]
    }
  ]

  const activeRound = rounds[activeIndex] ?? rounds[2]

  return (
    <section id="rounds" className="relative py-28 overflow-hidden border-y border-zinc-900">
      
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
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Editorial Section Header */}
        <ScrollReveal variant="fade-up">
          <div className="max-w-4xl mb-20 text-left">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight mt-4 leading-none">
              Every round of <br />
              <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-500 bg-clip-text text-transparent">your interview, covered</span>
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-zinc-300 leading-relaxed font-sans font-medium max-w-3xl">
              Most interviews have 5 stages — from the first recruiter call to the final hiring manager conversation. Click on each round below to see what to expect and how to prepare.
            </p>
          </div>
        </ScrollReveal>

        {/* Artistic Radial Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: High-Contrast Orbit Compass Dial (5 cols) */}
          <ScrollReveal variant="scale-up" className="lg:col-span-5 flex items-center justify-center relative py-8">
            <div className="relative">
              
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
                <div className="relative h-28 w-28 md:h-32 md:w-32 rounded-full bg-gradient-to-b from-white via-zinc-150 to-zinc-300 border-4 border-zinc-800 shadow-[0_8px_30px_rgba(0,0,0,0.6)] flex items-center justify-center z-10 select-none">
                  <LogoSvg className="block h-16 w-16 md:h-[4.5rem] md:w-[4.5rem] text-zinc-950" />
                </div>

              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: High-Contrast Premium Executive Editorial Spread (7 cols) */}
          <ScrollReveal variant="fade-in" delay="delay-150" className="lg:col-span-7 lg:pl-6">
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
          </ScrollReveal>

        </div>

      </div>
    </section>
  )
}
