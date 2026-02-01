'use client'

import Link from 'next/link'
import { 
  HelpCircle, 
  AlertTriangle,
  RefreshCw,
  FolderOpen,
  Bug,
  CheckCircle,
  Pill,
  FileText,
  List,
  X,
  Mic,
  ArrowLeft,
  ChevronRight
} from 'lucide-react'

const PRESCRIPTION_SUGGESTIONS = [
  {
    icon: Pill,
    title: 'Amoxicillin 500mg',
    meta: 'Last renewed: Jan 15, 2026',
  },
  {
    icon: Pill,
    title: 'Lisinopril 10mg',
    meta: 'Last renewed: Dec 28, 2025',
  },
  {
    icon: List,
    title: 'List all active prescriptions',
    meta: 'Afficher toutes les ordonnances actives',
  },
]

export default function ErrorHelpScreen() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Portal Header */}
      <header className="bg-medical-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl">🏥</span>
          <span className="font-semibold">MedikaLLInk Portal</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm">Dr. Laurent Martin</span>
          <div className="w-8 h-8 bg-medical-500 rounded-full flex items-center justify-center text-sm font-semibold">
            LM
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Patient Dossier (Background) */}
        <div className="flex-1 bg-slate-50 p-6 hidden lg:block">
          <div className="bg-white rounded-lg p-12 text-center text-slate-400 h-full">
            <p className="text-lg">Patient dossier content</p>
          </div>
        </div>

        {/* Copilot Panel */}
        <div className="w-full lg:w-[420px] bg-white border-l border-slate-200 flex flex-col shadow-[-4px_0_20px_rgba(0,0,0,0.05)]">
          {/* Panel Header */}
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-gradient-to-br from-medical-500 to-medical-600 rounded-lg flex items-center justify-center text-white">
                <Mic className="w-4 h-4" />
              </div>
              <span className="font-semibold text-medical-800 text-sm">AI Copilot</span>
            </div>
            <Link 
              href="/"
              className="w-7 h-7 bg-slate-100 hover:bg-slate-200 rounded-md flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </Link>
          </div>

          {/* Error States */}
          <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50 space-y-4">
            {/* ERROR STATE 1: Missing Parameters */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-medical-50 to-medical-100 px-5 py-4 border-b border-medical-200">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <HelpCircle className="w-5 h-5 text-medical-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-medical-800">Missing Information</h3>
                    <p className="text-xs text-medical-600">Information manquante</p>
                  </div>
                </div>
              </div>

              {/* User Query Replay */}
              <div className="px-5 py-4 bg-slate-50 border-b border-slate-200">
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide mb-2">
                  You said / Vous avez dit
                </div>
                <div className="bg-white p-3 rounded-lg border-l-4 border-slate-300">
                  <p className="text-sm text-slate-600 italic">
                    "Renouvelle l'ordonnance" / "Renew prescription"
                  </p>
                </div>
              </div>

              {/* Clarifying Content */}
              <div className="p-5">
                <p className="text-sm text-slate-800 font-medium mb-4 leading-relaxed">
                  Which prescription would you like to renew?
                  <span className="block text-slate-500 font-normal mt-1">
                    Quelle ordonnance souhaitez-vous renouveler ?
                  </span>
                </p>

                {/* Suggestions */}
                <div className="space-y-2">
                  {PRESCRIPTION_SUGGESTIONS.map((suggestion, index) => {
                    const Icon = suggestion.icon
                    return (
                      <button
                        key={index}
                        className="w-full flex items-center gap-3 p-3 bg-slate-50 hover:bg-medical-50 rounded-xl border border-slate-200 hover:border-medical-300 transition-all group"
                      >
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-slate-200 group-hover:border-medical-200">
                          <Icon className="w-4 h-4 text-medical-500" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-sm font-medium text-slate-800">{suggestion.title}</div>
                          <div className="text-xs text-slate-500">{suggestion.meta}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-medical-500" />
                      </button>
                    )
                  })}
                </div>

                {/* Alternative Options */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <button className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-1">
                    <X className="w-3 h-3" />
                    Cancel / Annuler
                  </button>
                  <button className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-1">
                    <Mic className="w-3 h-3" />
                    Specify by voice
                  </button>
                </div>
              </div>
            </div>

            {/* ERROR STATE 2: Backend Failure */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-error-50 to-error-100 px-5 py-4 border-b border-error-200">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <AlertTriangle className="w-5 h-5 text-error-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-error-800">Could Not Complete</h3>
                    <p className="text-xs text-error-600">Action impossible</p>
                  </div>
                </div>
              </div>

              {/* Error Content */}
              <div className="p-5 text-center">
                <div className="w-20 h-20 bg-error-50 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                  🔌
                </div>
                <p className="text-base font-medium text-slate-800 mb-1">
                  Unable to fetch latest ECG
                </p>
                <p className="text-sm text-slate-500 mb-5">
                  Impossible de récupérer le dernier ECG
                </p>

                {/* Error Actions */}
                <div className="flex flex-wrap justify-center gap-2">
                  <button className="px-4 py-2 bg-medical-500 hover:bg-medical-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4" />
                    Retry / Réessayer
                  </button>
                  <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
                    <FolderOpen className="w-4 h-4" />
                    Open dossier
                  </button>
                  <button className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
                    <Bug className="w-4 h-4" />
                    Report issue
                  </button>
                </div>
              </div>

              {/* Reassurance Footer */}
              <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-center gap-2 text-xs text-slate-500">
                <CheckCircle className="w-4 h-4 text-success-500" />
                <span>Portal remains usable / Le portail reste utilisable</span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-slate-100">
            <button className="w-full py-3 bg-gradient-to-r from-medical-500 to-medical-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 mb-3 shadow-lg shadow-medical-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <Mic className="w-5 h-5" />
              Hold to speak / Appuyez pour parler
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Type a command... / Tapez une commande..."
                className="w-full pl-4 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm
                         placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-medical-500/20
                         focus:border-medical-500 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-100 to-transparent">
        <div className="flex justify-center gap-4">
          <Link 
            href="/disambiguate"
            className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium text-sm
                     bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Disambiguation
          </Link>
          <Link 
            href="/preview"
            className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium text-sm
                     bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
          >
            Next: Action Preview
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
