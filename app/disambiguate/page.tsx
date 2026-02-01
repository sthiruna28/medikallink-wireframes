'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  HelpCircle, 
  MapPin, 
  Calendar, 
  Clock,
  ChevronRight,
  ArrowLeft,
  Mic,
  X
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
  { text: '"La première"', lang: 'FR' },
  { text: '"Marie 1975"', lang: 'FR' },
]

export default function DisambiguationScreen() {
  const [selectedId, setSelectedId] = useState<string | null>('1')

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

          {/* Disambiguation Card */}
          <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-medical-50 to-medical-100 p-5 border-b border-medical-200">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm mb-3">
                  🤔
                </div>
                <h3 className="font-semibold text-medical-800">Multiple Matches — Which One?</h3>
                <p className="text-sm text-medical-600 mt-1">Plusieurs résultats trouvés</p>
                
                <div className="mt-3 bg-white p-3 rounded-lg border-l-4 border-medical-500">
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
                    className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 mb-3 text-left transition-all
                      ${selectedId === patient.id 
                        ? 'border-success-500 bg-success-50/50' 
                        : 'border-slate-200 hover:border-medical-300 hover:bg-slate-50'}`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0
                      ${selectedId === patient.id 
                        ? 'bg-success-500 text-white' 
                        : 'bg-slate-100 text-slate-500'}`}>
                      {index + 1}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-800 text-sm">{patient.name}</div>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full
                          ${selectedId === patient.id ? 'bg-success-100 text-success-700' : 'bg-slate-100 text-slate-600'}`}>
                          <Calendar className="w-3 h-3" />
                          DOB: {patient.dob}
                        </span>
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full
                          ${selectedId === patient.id ? 'bg-success-100 text-success-700' : 'bg-slate-100 text-slate-600'}`}>
                          <MapPin className="w-3 h-3" />
                          {patient.location}
                        </span>
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full
                          ${selectedId === patient.id ? 'bg-success-100 text-success-700' : 'bg-slate-100 text-slate-600'}`}>
                          <Clock className="w-3 h-3" />
                          {patient.lastVisit}
                        </span>
                      </div>
                    </div>
                    
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-colors
                      ${selectedId === patient.id ? 'text-success-500' : 'text-slate-300'}`} />
                  </button>
                ))}
              </div>

              {/* Voice Selection Hint */}
              <div className="mx-4 mb-4 p-4 bg-success-50 rounded-xl border border-success-200">
                <div className="flex items-start gap-3">
                  <Mic className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-success-800">
                      Select by voice / Sélectionner par voix
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {VOICE_EXAMPLES.map((example) => (
                        <span 
                          key={example.text}
                          className="text-xs bg-white text-success-700 px-2 py-1 rounded border border-success-200"
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
            href="/confirm"
            className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium text-sm
                     bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Confirmation
          </Link>
          <Link 
            href="/error"
            className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium text-sm
                     bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
          >
            Next: Error & Help
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
