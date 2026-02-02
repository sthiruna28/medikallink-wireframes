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
  ArrowLeft,
  Activity
} from 'lucide-react'

export default function ActionPreviewScreen() {
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
        <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl animate-slide-up overflow-hidden border border-slate-200/50">
          {/* Header */}
          <div className="bg-gradient-to-r from-medical-50 via-medical-100/80 to-medical-50 px-6 py-5 border-b border-medical-200/60">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-medical-400 rounded-xl blur-lg opacity-30" />
                <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-soft">
                  <Eye className="w-6 h-6 text-medical-600" />
                </div>
              </div>
              <div>
                <h2 className="font-semibold text-medical-800 text-lg">Preview Before Sending</h2>
                <p className="text-sm text-medical-600">Apercu avant envoi</p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6">
            {/* Document Preview Card */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 mb-5">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                Action Details / Details de l'action
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm flex-shrink-0">
                    <FileText className="w-5 h-5 text-medical-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Document</div>
                    <div className="font-semibold text-medical-600 mt-0.5">ECG Standard 12-derivations</div>
                    <div className="text-xs text-slate-500 mt-1">Date: 28 Jan 2026 &middot; PDF &middot; 1.2 MB</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm flex-shrink-0">
                    <User className="w-5 h-5 text-medical-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1.5">Recipient / Destinataire</div>
                    <div className="inline-flex items-center gap-2.5 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-sm">
                      <div className="w-7 h-7 bg-gradient-to-br from-medical-500 to-medical-600 rounded-lg flex items-center justify-center text-white text-xs font-semibold">
                        PM
                      </div>
                      <div>
                        <span className="text-sm font-medium text-slate-800">Dr. Pierre Martin</span>
                        <span className="text-xs text-slate-400 ml-2">Cardiology</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm flex-shrink-0">
                    <Wifi className="w-5 h-5 text-medical-500" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-medium mb-1.5">Delivery Method</div>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-success-50 to-success-100/50 text-success-700 px-3 py-2 rounded-lg text-sm font-medium border border-success-200/50">
                      <Lock className="w-4 h-4" />
                      Secure portal message
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Preview */}
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 mb-5">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Attached Message / Message joint
              </div>
              <div className="bg-white rounded-xl p-4 border border-dashed border-slate-300/80">
                <p className="text-sm text-slate-600 italic leading-relaxed">
                  "Voici l'ECG de Mme Dupont. Pourriez-vous me donner votre avis sur l'anomalie observee en V3 ? Merci d'avance."
                </p>
              </div>
            </div>

            {/* Info Notice */}
            <div className="bg-gradient-to-r from-medical-50 to-medical-100/50 border border-medical-200/50 rounded-xl p-4 flex items-start gap-3 mb-6">
              <div className="w-6 h-6 bg-medical-200/80 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Shield className="w-3.5 h-3.5 text-medical-700" />
              </div>
              <p className="text-sm text-medical-700 leading-relaxed">
                The recipient will receive a secure notification. Document access is logged for compliance.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 py-3.5 bg-gradient-to-r from-success-500 to-success-600 text-white rounded-xl
                               font-semibold flex items-center justify-center gap-2.5 shadow-soft
                               hover:shadow-glow-success hover:-translate-y-0.5 transition-all duration-200">
                <Send className="w-4 h-4" />
                Send / Envoyer
              </button>
              <button className="flex-1 py-3.5 bg-slate-100 text-slate-600 rounded-xl font-semibold
                               flex items-center justify-center gap-2.5 border border-slate-200
                               hover:bg-slate-200 transition-colors">
                <Edit2 className="w-4 h-4" />
                Edit / Modifier
              </button>
              <button className="px-4 py-3.5 bg-white text-slate-500 rounded-xl font-medium
                               border border-slate-200 hover:bg-slate-50 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Voice Hints */}
            <div className="mt-5 bg-slate-50 rounded-xl p-4 border border-slate-200/80">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Mic className="w-3.5 h-3.5" />
                Or say / Ou dites
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
                    className="inline-flex items-center gap-1.5 text-sm text-slate-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm"
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
              <span>Secure transmission &middot; HIPAA compliant &middot; Logged</span>
            </div>
            <div className="text-xs text-slate-400 font-mono bg-white px-2 py-1 rounded border border-slate-200">TXN-2026-00847</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 z-40">
        <div className="flex justify-center gap-3">
          <Link 
            href="/error"
            className="flex items-center gap-2 text-slate-600 hover:text-medical-600 font-medium text-sm
                     bg-white px-4 py-2.5 rounded-xl shadow-soft hover:shadow-soft-lg transition-all border border-slate-200/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous: Error & Help
          </Link>
          <Link 
            href="/"
            className="flex items-center gap-2 text-white font-medium text-sm
                     bg-gradient-to-r from-medical-500 to-medical-600 px-4 py-2.5 rounded-xl shadow-soft hover:shadow-glow transition-all"
          >
            Back to Index
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
