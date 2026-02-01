'use client'

import Link from 'next/link'
import { 
  Eye, 
  Send, 
  Edit2, 
  X,
  FileText,
  User,
  Wifi,
  Shield,
  Lock,
  Mic,
  ArrowLeft
} from 'lucide-react'

export default function ActionPreviewScreen() {
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
        <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl animate-slide-up overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-medical-50 to-medical-100 px-6 py-5 border-b border-medical-200">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <Eye className="w-6 h-6 text-medical-600" />
              </div>
              <div>
                <h2 className="font-semibold text-medical-800 text-lg">Preview Before Sending</h2>
                <p className="text-sm text-medical-600">Aperçu avant envoi</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* Document Preview Card */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-5">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">
                Action Details / Détails de l'action
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center border border-slate-200 flex-shrink-0">
                    <FileText className="w-4 h-4 text-medical-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Document</div>
                    <div className="font-semibold text-medical-600">ECG Standard 12-derivations</div>
                    <div className="text-xs text-slate-500 mt-1">Date: 28 Jan 2026 • PDF • 1.2 MB</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center border border-slate-200 flex-shrink-0">
                    <User className="w-4 h-4 text-medical-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Recipient / Destinataire</div>
                    <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 mt-1">
                      <div className="w-5 h-5 bg-medical-500 rounded-full flex items-center justify-center text-white text-[10px] font-semibold">
                        PM
                      </div>
                      <span className="text-sm font-medium text-slate-700">Dr. Pierre Martin</span>
                      <span className="text-slate-300">|</span>
                      <span className="text-xs text-slate-500">Cardiology</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center border border-slate-200 flex-shrink-0">
                    <Wifi className="w-4 h-4 text-medical-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">Delivery Method</div>
                    <div className="inline-flex items-center gap-1.5 bg-success-50 text-success-700 px-3 py-1.5 rounded-lg text-sm font-medium mt-1">
                      <Lock className="w-3.5 h-3.5" />
                      Secure portal message
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Preview */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 mb-5">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">
                Attached Message / Message joint
              </div>
              <div className="bg-white rounded-lg p-4 border border-dashed border-slate-300">
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  "Voici l'ECG de Mme Dupont. Pourriez-vous me donner votre avis sur l'anomalie observée en V3 ? Merci d'avance."
                </p>
              </div>
            </div>

            {/* Info Notice */}
            <div className="bg-medical-50 border border-medical-200 rounded-lg p-4 flex items-start gap-3 mb-5">
              <span className="text-lg flex-shrink-0">ℹ️</span>
              <p className="text-sm text-medical-700 leading-relaxed">
                The recipient will receive a secure notification. Document access is logged for compliance.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-gradient-to-r from-success-500 to-success-600 text-white rounded-xl
                               font-semibold flex items-center justify-center gap-2 shadow-lg shadow-success-500/30
                               hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <Send className="w-4 h-4" />
                Send / Envoyer
              </button>
              <button className="flex-1 py-3 bg-slate-100 text-slate-600 rounded-xl font-semibold
                               flex items-center justify-center gap-2 border border-slate-200
                               hover:bg-slate-200 transition-colors">
                <Edit2 className="w-4 h-4" />
                Edit / Modifier
              </button>
              <button className="px-4 py-3 bg-white text-slate-500 rounded-xl font-medium
                               border border-slate-200 hover:bg-slate-50 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Voice Hints */}
            <div className="mt-5 bg-slate-50 rounded-lg p-4 border-l-4 border-medical-500">
              <div className="text-xs font-semibold text-medical-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                <Mic className="w-3.5 h-3.5" />
                Or say / Ou dites :
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { text: 'Send', lang: 'EN' },
                  { text: 'Envoyer', lang: 'FR' },
                  { text: 'Modify', lang: 'EN' },
                  { text: 'Annuler', lang: 'FR' },
                ].map((hint) => (
                  <span 
                    key={hint.text}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-700 bg-white px-3 py-1.5 rounded-md border border-slate-200"
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
              <span>Secure transmission • HIPAA compliant • Logged</span>
            </div>
            <div className="text-xs text-slate-400 font-mono">TXN-2026-00847</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-40">
        <div className="flex justify-center gap-4">
          <Link 
            href="/error"
            className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium text-sm
                     bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Error & Help
          </Link>
          <Link 
            href="/"
            className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium text-sm
                     bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow transition-all"
          >
            Back to Index
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
