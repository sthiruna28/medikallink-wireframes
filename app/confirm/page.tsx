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
  Mic,
  Activity
} from 'lucide-react'

export default function ConfirmationModal() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Blurred Background Portal */}
      <div className="absolute inset-0 blur-sm opacity-60 pointer-events-none">
        <header className="bg-gradient-to-r from-slate-900 via-medical-900 to-slate-900 text-white px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-medical-400 to-medical-600 rounded-lg flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold">MedikaLLInk Portal</span>
          </div>
        </header>
        <div className="flex h-[calc(100vh-64px)]">
          <div className="flex-1 bg-slate-100 p-6" />
          <div className="w-[440px] bg-white border-l border-slate-200" />
        </div>
      </div>

      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl animate-slide-up overflow-hidden border border-slate-200/50">
          {/* Header */}
          <div className="bg-gradient-to-r from-warning-50 via-warning-100/80 to-warning-50 px-6 py-5 border-b border-warning-200/60">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-warning-400 rounded-xl blur-lg opacity-30" />
                <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-soft">
                  <AlertTriangle className="w-6 h-6 text-warning-600" />
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-warning-900 text-lg">
                  Confirm Action
                </h2>
                <p className="text-sm text-warning-700">
                  Critical action requires verification / Confirmer l'action
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* Action Preview */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 mb-5">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Action Preview
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm flex-shrink-0">
                    <Pill className="w-5 h-5 text-medical-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Prescription / Ordonnance</div>
                    <div className="font-semibold text-medical-600 mt-0.5">Amoxicillin 500mg (Clamoxyl)</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm flex-shrink-0">
                    <Calendar className="w-5 h-5 text-medical-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Duration / Duree</div>
                    <div className="font-medium text-slate-700 mt-0.5">2 months (60 days) / 2 mois</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm flex-shrink-0">
                    <User className="w-5 h-5 text-medical-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1.5">Patient</div>
                    <div className="inline-flex items-center gap-2.5 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
                      <div className="w-7 h-7 bg-gradient-to-br from-medical-500 to-medical-600 rounded-lg flex items-center justify-center text-white text-xs font-semibold">
                        MD
                      </div>
                      <div>
                        <span className="text-sm font-medium text-slate-800">Marie Dupont</span>
                        <span className="text-xs text-slate-400 ml-2">DOB: 15/03/1975</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Notice */}
            <div className="bg-gradient-to-r from-warning-50 to-warning-100/50 border border-warning-200/60 rounded-xl p-4 flex items-start gap-3 mb-6">
              <div className="w-6 h-6 bg-warning-200/80 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-3.5 h-3.5 text-warning-700" />
              </div>
              <p className="text-sm text-warning-800 leading-relaxed">
                This will create a new prescription and send it to the patient's portal. 
                The previous prescription will remain valid until expiration.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 py-3.5 bg-gradient-to-r from-success-500 to-success-600 text-white rounded-xl
                               font-semibold flex items-center justify-center gap-2.5 shadow-soft
                               hover:shadow-glow-success hover:-translate-y-0.5 transition-all duration-200">
                <Check className="w-5 h-5" />
                Confirm / Confirmer
              </button>
              <button className="flex-1 py-3.5 bg-slate-100 text-slate-600 rounded-xl font-semibold
                               flex items-center justify-center gap-2.5 border border-slate-200
                               hover:bg-slate-200 transition-colors">
                <X className="w-5 h-5" />
                Cancel / Annuler
              </button>
            </div>

            {/* Voice Hints */}
            <div className="bg-gradient-to-r from-medical-50 to-medical-100/50 rounded-xl p-4 border border-medical-200/50">
              <div className="text-xs font-semibold text-medical-600 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Mic className="w-3.5 h-3.5" />
                Or say / Ou dites
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
                    className="inline-flex items-center gap-1.5 text-sm text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-medical-100 shadow-sm"
                  >
                    {hint.text}
                    <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded font-medium">{hint.lang}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Shield className="w-4 h-4 text-success-500" />
              <span>Secure action &middot; Logged for audit</span>
            </div>
            <div className="text-xs text-slate-400 font-mono bg-white px-2 py-1 rounded border border-slate-200">PRE-2026-01984</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-40">
        <div className="flex justify-center gap-3">
          <Link 
            href="/copilot"
            className="flex items-center gap-2 text-slate-600 hover:text-medical-600 font-medium text-sm
                     bg-white px-4 py-2.5 rounded-xl shadow-soft hover:shadow-soft-lg transition-all border border-slate-200/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Copilot Panel
          </Link>
          <Link 
            href="/disambiguate"
            className="flex items-center gap-2 text-white font-medium text-sm
                     bg-gradient-to-r from-medical-500 to-medical-600 px-4 py-2.5 rounded-xl shadow-soft hover:shadow-glow transition-all"
          >
            Next: Disambiguation
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
