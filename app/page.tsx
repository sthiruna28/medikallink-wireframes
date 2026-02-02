'use client'

import Link from 'next/link'
import { 
  Mic, 
  ShieldCheck, 
  HelpCircle, 
  AlertCircle, 
  Eye,
  ArrowRight,
  Stethoscope,
  Sparkles
} from 'lucide-react'

const wireframes = [
  {
    number: '01',
    title: 'Copilot Panel',
    description: 'Main voice interface embedded in doctor portal with voice and typed input, live transcription, and intelligent responses.',
    href: '/copilot',
    icon: Mic,
    gradient: 'from-medical-500 to-medical-600',
    bgGlow: 'group-hover:shadow-glow',
  },
  {
    number: '02',
    title: 'Confirmation Modal',
    description: 'Critical action preview before execution with dual voice and UI confirmation for sensitive operations.',
    href: '/confirm',
    icon: ShieldCheck,
    gradient: 'from-warning-500 to-warning-600',
    bgGlow: 'group-hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)]',
  },
  {
    number: '03',
    title: 'Disambiguation Screen',
    description: 'Multiple results selection with patient and document details. Select by voice command or click.',
    href: '/disambiguate',
    icon: HelpCircle,
    gradient: 'from-medical-400 to-medical-500',
    bgGlow: 'group-hover:shadow-glow',
  },
  {
    number: '04',
    title: 'Error & Help State',
    description: 'Missing parameters clarification and backend failure recovery with non-blocking, helpful guidance.',
    href: '/error',
    icon: AlertCircle,
    gradient: 'from-error-500 to-error-600',
    bgGlow: 'group-hover:shadow-[0_0_20px_-5px_rgba(239,68,68,0.4)]',
  },
  {
    number: '05',
    title: 'Action Preview',
    description: 'Preview before sending documents, creating reminders, or generating orders with secure confirmation.',
    href: '/preview',
    icon: Eye,
    gradient: 'from-success-500 to-success-600',
    bgGlow: 'group-hover:shadow-glow-success',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-medical-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-medical-500/10 blur-[120px]" />
        <div className="absolute -bottom-[30%] -left-[10%] w-[50%] h-[50%] rounded-full bg-medical-600/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
      </div>
      
      <div className="relative z-10 px-6 py-16 md:px-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-medical-500 rounded-2xl blur-xl opacity-40" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-white to-slate-100 rounded-2xl flex items-center justify-center shadow-soft-lg">
                  <Stethoscope className="w-7 h-7 text-medical-600" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight text-balance">
              MedikaLLInk <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-300 to-medical-500">Copilot</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Doctor Voice AI Copilot UI Wireframes & Mockups
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-medical-400 bg-medical-500/10 px-3 py-1.5 rounded-full border border-medical-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                Client Kickoff Meeting
              </span>
              <span className="text-xs text-slate-500">February 2025</span>
            </div>
          </div>

          {/* Wireframe Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {wireframes.map((wireframe, index) => {
              const Icon = wireframe.icon
              return (
                <Link
                  key={wireframe.number}
                  href={wireframe.href}
                  className={`group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 
                           hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 
                           ${wireframe.bgGlow}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${wireframe.gradient} rounded-xl flex items-center justify-center
                                  text-white shadow-soft group-hover:scale-105 transition-transform duration-300`}>
                      <span className="font-bold text-lg">{wireframe.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-slate-500 group-hover:text-white/70 transition-colors" />
                        <h3 className="font-semibold text-white group-hover:text-white transition-colors truncate">
                          {wireframe.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
                        {wireframe.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-end">
                    <span className="text-medical-400 text-sm font-medium flex items-center gap-1.5 
                                   group-hover:gap-2.5 transition-all duration-300">
                      View wireframe 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 text-slate-500 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-medical-500" />
              <span>Next.js 14</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>TypeScript</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>Tailwind CSS</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>Lucide Icons</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
