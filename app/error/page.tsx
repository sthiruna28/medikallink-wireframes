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
  List,
  X,
  Mic,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Activity,
  Zap
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
    <div className="min-h-screen bg-slate-50">
      {/* Portal Header */}
      <header className="bg-gradient-to-r from-slate-900 via-medical-900 to-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-medical-400 to-medical-600 rounded-lg flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold tracking-tight">MedikaLLInk Portal</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-300">Dr. Laurent Martin</span>
          <div className="w-9 h-9 bg-gradient-to-br from-medical-500 to-medical-600 rounded-full flex items-center justify-center text-sm font-semibold shadow-soft">
            LM
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Patient Dossier (Background) */}
        <div className="flex-1 bg-slate-100 p-6 hidden lg:block">
          <div className="bg-white rounded-xl p-12 text-center text-slate-400 h-full border border-slate-200/80 shadow-soft flex flex-col items-center justify-center">
            <p className="text-lg font-medium">Patient dossier content</p>
            <p className="text-sm mt-1">Portal remains accessible</p>
          </div>
        </div>

        {/* Copilot Panel */}
        <div className="w-full lg:w-[440px] bg-white border-l border-slate-200 flex flex-col shadow-soft-lg">
          {/* Panel Header */}
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-medical-500 rounded-xl blur-lg opacity-30" />
                <div className="relative w-9 h-9 bg-gradient-to-br from-medical-500 to-medical-600 rounded-xl flex items-center justify-center text-white shadow-soft">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
              <span className="font-semibold text-slate-800">AI Copilot</span>
            </div>
            <Link 
              href="/"
              className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </Link>
          </div>

          {/* Error States */}
          <div className="flex-1 overflow-y-auto p-5 bg-gradient-to-b from-slate-50/50 to-slate-100/50 space-y-4">
            {/* ERROR STATE 1: Missing Parameters */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-medical-50 via-medical-100/80 to-medical-50 px-5 py-4 border-b border-medical-200/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-soft">
                    <HelpCircle className="w-5 h-5 text-medical-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-medical-800">Missing Information</h3>
                    <p className="text-xs text-medical-600">Information manquante</p>
                  </div>
                </div>
              </div>

              {/* User Query Replay */}
              <div className="px-5 py-4 bg-slate-50/70 border-b border-slate-200/60">
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  You said / Vous avez dit
                </div>
                <div className="bg-white p-3 rounded-xl border-l-4 border-slate-300 shadow-sm">
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
                        className="w-full flex items-center gap-3 p-3.5 bg-slate-50 hover:bg-medical-50 rounded-xl border border-slate-200 hover:border-medical-300 transition-all duration-200 group"
                      >
                        <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-medical-200 shadow-sm transition-colors">
                          <Icon className="w-4 h-4 text-medical-500" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-sm font-medium text-slate-800 group-hover:text-medical-700 transition-colors">{suggestion.title}</div>
                          <div className="text-xs text-slate-500">{suggestion.meta}</div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-medical-500 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    )
                  })}
                </div>

                {/* Alternative Options */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <button className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-1.5">
                    <X className="w-3 h-3" />
                    Cancel / Annuler
                  </button>
                  <button className="text-xs text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center gap-1.5">
                    <Mic className="w-3 h-3" />
                    Specify by voice
                  </button>
                </div>
              </div>
            </div>

            {/* ERROR STATE 2: Backend Failure */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-error-50 via-error-100/80 to-error-50 px-5 py-4 border-b border-error-200/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-soft">
                    <AlertTriangle className="w-5 h-5 text-error-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-error-800">Could Not Complete</h3>
                    <p className="text-xs text-error-600">Action impossible</p>
                  </div>
                </div>
              </div>

              {/* Error Content */}
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-error-50 to-error-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-soft">
                  <Zap className="w-8 h-8 text-error-400" />
                </div>
                <p className="text-base font-semibold text-slate-800 mb-1">
                  Unable to fetch latest ECG
                </p>
                <p className="text-sm text-slate-500 mb-6">
                  Impossible de recuperer le dernier ECG
                </p>

                {/* Error Actions */}
                <div className="flex flex-wrap justify-center gap-2">
                  <button className="px-4 py-2.5 bg-gradient-to-r from-medical-500 to-medical-600 hover:shadow-glow text-white rounded-xl text-sm font-medium transition-all flex items-center gap-1.5 shadow-soft">
                    <RefreshCw className="w-4 h-4" />
                    Retry / Reessayer
                  </button>
                  <button className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5">
                    <FolderOpen className="w-4 h-4" />
                    Open dossier
                  </button>
                  <button className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-medium transition-colors flex items-center gap-1.5">
                    <Bug className="w-4 h-4" />
                    Report issue
                  </button>
                </div>
              </div>

              {/* Reassurance Footer */}
              <div className="bg-slate-50 px-5 py-3 border-t border-slate-200/60 flex items-center justify-center gap-2 text-xs text-slate-500">
                <CheckCircle className="w-4 h-4 text-success-500" />
                <span>Portal remains usable / Le portail reste utilisable</span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-slate-100">
            <button className="w-full py-3.5 bg-gradient-to-r from-medical-500 to-medical-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2.5 mb-3 shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all">
              <Mic className="w-5 h-5" />
              Hold to speak / Appuyez pour parler
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder="Type a command... / Tapez une commande..."
                className="w-full pl-4 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm
                         placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-medical-500/20
                         focus:border-medical-400 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-100 via-slate-100/95 to-transparent">
        <div className="flex justify-center gap-3">
          <Link 
            href="/disambiguate"
            className="flex items-center gap-2 text-slate-600 hover:text-medical-600 font-medium text-sm
                     bg-white px-4 py-2.5 rounded-xl shadow-soft hover:shadow-soft-lg transition-all border border-slate-200/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Disambiguation
          </Link>
          <Link 
            href="/preview"
            className="flex items-center gap-2 text-white font-medium text-sm
                     bg-gradient-to-r from-medical-500 to-medical-600 px-4 py-2.5 rounded-xl shadow-soft hover:shadow-glow transition-all"
          >
            Next: Action Preview
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
