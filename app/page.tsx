'use client'

import Link from 'next/link'
import { 
  Mic, 
  ShieldAlert, 
  HelpCircle, 
  AlertCircle, 
  Eye,
  ArrowRight,
  Stethoscope
} from 'lucide-react'

const wireframes = [
  {
    number: '01',
    title: 'Copilot Panel',
    description: 'Main voice interface embedded in doctor portal. Voice + typed input, transcript area, language toggle, and system responses.',
    href: '/copilot',
    icon: Mic,
    color: 'bg-medical-500',
  },
  {
    number: '02',
    title: 'Confirmation Modal',
    description: 'Critical action preview before execution. Dual voice/UI confirmation for prescription renewals and sensitive operations.',
    href: '/confirm',
    icon: ShieldAlert,
    color: 'bg-warning-500',
  },
  {
    number: '03',
    title: 'Disambiguation Screen',
    description: 'Multiple results selection with patient/document details. Selection by voice command or click interaction.',
    href: '/disambiguate',
    icon: HelpCircle,
    color: 'bg-medical-400',
  },
  {
    number: '04',
    title: 'Error & Help State',
    description: 'Missing parameters clarification and backend failure recovery. Non-blocking, helpful error handling.',
    href: '/error',
    icon: AlertCircle,
    color: 'bg-error-500',
  },
  {
    number: '05',
    title: 'Action Preview',
    description: 'Preview before sending documents, creating reminders, or generating lab orders. Secure transmission confirmation.',
    href: '/preview',
    icon: Eye,
    color: 'bg-success-500',
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-medical-500 to-medical-800 p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <Stethoscope className="w-6 h-6 text-medical-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            MedikaLLInk Copilot
          </h1>
          <p className="text-medical-100 text-lg max-w-2xl mx-auto">
            Doctor Voice AI Copilot UI Wireframes & Mockups
          </p>
          <p className="text-medical-200 text-sm mt-2">
            Client Kickoff Meeting • February 2025
          </p>
        </div>

        {/* Wireframe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wireframes.map((wireframe) => {
            const Icon = wireframe.icon
            return (
              <Link
                key={wireframe.number}
                href={wireframe.href}
                className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl 
                         transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`${wireframe.color} w-12 h-12 rounded-xl flex items-center justify-center
                                text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="font-bold text-lg">{wireframe.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-slate-400" />
                      <h3 className="font-semibold text-slate-800">
                        {wireframe.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {wireframe.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-end">
                  <span className="text-medical-500 text-sm font-medium flex items-center gap-1 
                                 group-hover:gap-2 transition-all">
                    View <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-medical-200 text-sm">
            Next.js 14 • TypeScript • Tailwind CSS • Lucide Icons
          </p>
        </div>
      </div>
    </main>
  )
}
