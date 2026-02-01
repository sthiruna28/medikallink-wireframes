'use client'

import Link from 'next/link'
import { 
  AlertTriangle, 
  Check, 
  X, 
  Pill, 
  Calendar, 
  User,
  Shield,
  ArrowLeft,
  Mic
} from 'lucide-react'

export default function ConfirmationModal() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Blurred Background Portal */}
      <div className="absolute inset-0 blur-sm opacity-70 pointer-events-none">
        <header className="bg-medical-800 text-white px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="text-xl">🏥</span>
            <span className="font-semibold">MedikaLLInk Portal</span>
          </div>
        </header>
        <div className="flex h-[calc(100vh-64px)]">
          <div className="flex-1 bg-slate-50 p-6" />
          <div className="w-[420px] bg-white border-l border-slate-200" />
        </div>
      </div>

      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl animate-slide-up overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-warning-100 to-warning-200 px-6 py-5 border-b border-warning-400">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <AlertTriangle className="w-5 h-5 text-warning-600" />
              </div>
              <div>
                <h2 className="font-semibold text-warning-800">
                  Confirm Action / Confirmer l'action
                </h2>
                <p className="text-sm text-warning-700">
                  Critical action requires verification
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* Action Preview */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-5">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4">
                Action Preview
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center border border-slate-200 flex-shrink-0">
                    <Pill className="w-4 h-4 text-medical-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Prescription / Ordonnance</div>
                    <div className="font-semibold text-medical-600">Amoxicillin 500mg (Clamoxyl)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center border border-slate-200 flex-shrink-0">
                    <Calendar className="w-4 h-4 text-medical-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Duration / Durée</div>
                    <div className="font-medium text-slate-700">2 months (60 days) / 2 mois</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center border border-slate-200 flex-shrink-0">
                    <User className="w-4 h-4 text-medical-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Patient</div>
                    <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 mt-1">
                      <div className="w-5 h-5 bg-medical-500 rounded-full flex items-center justify-center text-white text-[10px] font-semibold">
                        MD
                      </div>
                      <span className="text-sm font-medium text-slate-700">Marie Dupont</span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-500">DOB: 15/03/1975</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Notice */}
            <div className="bg-warning-50 border border-warning-200 rounded-lg p-4 flex items-start gap-3 mb-5">
              <span className="text-lg flex-shrink-0">ℹ️</span>
              <p className="text-sm text-warning-800 leading-relaxed">
                This will create a new prescription and send it to the patient's portal. 
                The previous prescription will remain valid until expiration.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-5">
              <button className="flex-1 py-3.5 bg-gradient-to-r from-success-500 to-success-600 text-white rounded-xl
                               font-semibold flex items-center justify-center gap-2 shadow-lg shadow-success-500/30
                               hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <Check className="w-5 h-5" />
                Confirm / Confirmer
              </button>
              <button className="flex-1 py-3.5 bg-slate-100 text-slate-600 rounded-xl font-semibold
                               flex items-center justify-center gap-2 border border-slate-200
                               hover:bg-slate-200 transition-colors">
                <X className="w-5 h-5" />
                Cancel / Annuler
              </button>
            </div>

            {/* Voice Hints */}
            <div className="bg-medical-50 rounded-lg p-4 border-l-4 border-medical-500">
              <div className="text-xs font-semibold text-medical-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                <Mic className="w-3.5 h-3.5" />
                Or say / Ou dites :
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { text: 'Confirm', lang: 'EN' },
                  { text: 'Yes', lang: 'EN' },
                  { text: 'Confirmer', lang: 'FR' },
                  { text: 'Oui', lang: 'FR' },
                  { text: 'Annule', lang: 'FR' },
                  { text: 'Cancel', lang: 'EN' },
                ].map((hint) => (
                  <span 
                    key={hint.text}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-700 bg-white px-3 py-1.5 rounded-md border border-medical-100"
                  >
                    {hint.text}
                    <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">{hint.lang}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Shield className="w-3.5 h-3.5 text-success-500" />
              <span>Secure action • Logged for audit</span>
            </div>
            <div className="text-xs text-slate-400 font-mono">Action ID: PRE-2026-01984</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-40">
        <div className="flex justify-center gap-4">
          <Link 
            href="/copilot"
            className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium text-sm
                     bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Copilot Panel
          </Link>
          <Link 
            href="/disambiguate"
            className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium text-sm
                     bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow transition-all"
          >
            Next: Disambiguation
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
