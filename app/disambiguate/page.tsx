'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  MapPin, 
  Calendar, 
  Clock,
  ChevronRight,
  ArrowLeft,
  Mic,
  X,
  Sparkles,
  Activity,
  HelpCircle
} from 'lucide-react'

interface Patient {
  id: string
  name: string
  dob: string
  location: string
  lastVisit: string
}

const PATIENTS: Patient[] = [
  {
    id: '1',
    name: 'Marie Dupont',
    dob: '15/03/1975',
    location: 'Paris',
    lastVisit: '2 weeks ago',
  },
  {
    id: '2',
    name: 'Marie Dupont',
    dob: '22/07/1982',
    location: 'Lyon',
    lastVisit: '3 months ago',
  },
  {
    id: '3',
    name: 'Martin Dupont',
    dob: '03/11/1968',
    location: 'Marseille',
    lastVisit: '1 year ago',
  },
]

const VOICE_EXAMPLES = [
  { text: '"The first one"', lang: 'EN' },
  { text: '"Marie born 1975"', lang: 'EN' },
  { text: '"La premiere"', lang: 'FR' },
  { text: '"Marie 1975"', lang: 'FR' },
]

export default function DisambiguationScreen() {
  const [selectedId, setSelectedId] = useState<string | null>('1')

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
            <p className="text-sm mt-1">Select a patient to continue</p>
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

          {/* Disambiguation Card */}
          <div className="flex-1 overflow-y-auto p-5 bg-gradient-to-b from-slate-50/50 to-slate-100/50">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-soft overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-medical-50 via-medical-100/80 to-medical-50 p-5 border-b border-medical-200/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-soft">
                    <HelpCircle className="w-5 h-5 text-medical-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-medical-800">Multiple Matches</h3>
                    <p className="text-sm text-medical-600">Plusieurs resultats trouves</p>
                  </div>
                </div>
                
                <div className="bg-white p-3.5 rounded-xl border border-medical-200/50 shadow-sm">
                  <p className="text-sm text-slate-600 italic">
                    "Open patient Dupont" / "Ouvrir patient Dupont"
                  </p>
                </div>
              </div>

              {/* Patient List */}
              <div className="p-4">
                {PATIENTS.map((patient, index) => (
                  <button
                    key={patient.id}
                    onClick={() => setSelectedId(patient.id)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 mb-3 text-left transition-all duration-200
                      ${selectedId === patient.id 
                        ? 'border-success-500 bg-success-50/50 shadow-soft' 
                        : 'border-slate-200 hover:border-medical-300 hover:bg-slate-50'}`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all
                      ${selectedId === patient.id 
                        ? 'bg-gradient-to-br from-success-500 to-success-600 text-white shadow-soft' 
                        : 'bg-slate-100 text-slate-500'}`}>
                      {index + 1}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-800">{patient.name}</div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-colors
                          ${selectedId === patient.id ? 'bg-success-100 text-success-700' : 'bg-slate-100 text-slate-600'}`}>
                          <Calendar className="w-3 h-3" />
                          DOB: {patient.dob}
                        </span>
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-colors
                          ${selectedId === patient.id ? 'bg-success-100 text-success-700' : 'bg-slate-100 text-slate-600'}`}>
                          <MapPin className="w-3 h-3" />
                          {patient.location}
                        </span>
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-colors
                          ${selectedId === patient.id ? 'bg-success-100 text-success-700' : 'bg-slate-100 text-slate-600'}`}>
                          <Clock className="w-3 h-3" />
                          {patient.lastVisit}
                        </span>
                      </div>
                    </div>
                    
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-all
                      ${selectedId === patient.id ? 'text-success-500 translate-x-0.5' : 'text-slate-300'}`} />
                  </button>
                ))}
              </div>

              {/* Voice Selection Hint */}
              <div className="mx-4 mb-4 p-4 bg-gradient-to-r from-success-50 to-success-100/50 rounded-xl border border-success-200/60">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                    <Mic className="w-4 h-4 text-success-600" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-success-800">
                      Select by voice / Selectionner par voix
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2.5">
                      {VOICE_EXAMPLES.map((example) => (
                        <span 
                          key={example.text}
                          className="text-xs bg-white text-success-700 px-2.5 py-1 rounded-lg border border-success-200 shadow-sm"
                        >
                          {example.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Cancel Option */}
              <div className="px-4 pb-4 text-center">
                <button className="text-sm text-slate-500 hover:text-slate-700 flex items-center gap-1.5 mx-auto px-4 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                  <X className="w-4 h-4" />
                  Cancel / Annuler
                </button>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-slate-100">
            <div className="relative">
              <input
                type="text"
                placeholder="Or type your selection..."
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
            href="/confirm"
            className="flex items-center gap-2 text-slate-600 hover:text-medical-600 font-medium text-sm
                     bg-white px-4 py-2.5 rounded-xl shadow-soft hover:shadow-soft-lg transition-all border border-slate-200/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Confirmation
          </Link>
          <Link 
            href="/error"
            className="flex items-center gap-2 text-white font-medium text-sm
                     bg-gradient-to-r from-medical-500 to-medical-600 px-4 py-2.5 rounded-xl shadow-soft hover:shadow-glow transition-all"
          >
            Next: Error & Help
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
