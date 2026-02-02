'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { 
  Mic, 
  X, 
  Send,
  Sparkles,
  FileText,
  ArrowLeft,
  Bot,
  Activity
} from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'system'
  content: string
  timestamp: Date
  action?: {
    type: string
    title: string
    details: string
  }
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    type: 'system',
    content: "Bonjour Dr. Martin. I'm ready to help. You can ask me to open patient records, show documents, renew prescriptions, or create reminders.",
    timestamp: new Date(Date.now() - 5 * 60000),
  },
  {
    id: '2',
    type: 'user',
    content: "Montre-moi le dernier ECG pour cette patiente",
    timestamp: new Date(Date.now() - 3 * 60000),
  },
  {
    id: '3',
    type: 'system',
    content: "Opening latest ECG for Marie Dupont...",
    timestamp: new Date(Date.now() - 2 * 60000),
    action: {
      type: 'document',
      title: 'ECG Standard 12-derivations',
      details: 'Date: 28 Jan 2026\nResult: Normal sinus rhythm',
    },
  },
  {
    id: '4',
    type: 'user',
    content: "Renouvelle l'ordonnance d'Amoxicilline pour deux mois",
    timestamp: new Date(Date.now() - 1 * 60000),
  },
  {
    id: '5',
    type: 'system',
    content: "I'll prepare that prescription renewal. Please confirm the details below.",
    timestamp: new Date(),
  },
]

const VOICE_HINTS = [
  '"Show latest lab results"',
  '"Open patient record"',
  '"Create reminder"',
  '"Send to colleague"',
]

function ListeningIndicator() {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex gap-0.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1 h-3 bg-success-500 rounded-full animate-pulse-dot"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-success-600">Listening...</span>
    </div>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.type === 'user'
  
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''} animate-fade-in`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 shadow-soft
        ${isUser 
          ? 'bg-gradient-to-br from-medical-500 to-medical-600 text-white' 
          : 'bg-white text-medical-600 border border-slate-200'}`}>
        {isUser ? 'LM' : <Bot className="w-4 h-4" />}
      </div>
      <div className={`max-w-[80%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed
          ${isUser 
            ? 'bg-gradient-to-br from-medical-500 to-medical-600 text-white rounded-br-lg shadow-soft' 
            : 'bg-white border border-slate-200/80 text-slate-700 rounded-bl-lg shadow-soft'}`}>
          {message.content}
        </div>
        
        {message.action && (
          <div className="mt-3 bg-white border border-slate-200/80 rounded-xl p-4 shadow-soft overflow-hidden">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wider mb-3">
              <FileText className="w-3.5 h-3.5" />
              Document Preview
            </div>
            <div className="text-sm">
              <span className="font-semibold text-medical-600">{message.action.title}</span>
              <p className="text-slate-500 mt-1.5 whitespace-pre-line leading-relaxed">{message.action.details}</p>
            </div>
          </div>
        )}
        
        <div className={`text-[11px] mt-1.5 text-slate-400 ${isUser ? 'text-right' : ''}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  )
}

export default function CopilotPanel() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [inputValue, setInputValue] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [language, setLanguage] = useState<'FR' | 'EN'>('FR')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return
    
    const newMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    }
    
    setMessages(prev => [...prev, newMessage])
    setInputValue('')
    
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        type: 'system',
        content: 'Processing your request...',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, response])
    }, 1000)
  }

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
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <span className="text-white font-medium cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-medical-400">Patients</span>
          <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Agenda</span>
          <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Documents</span>
          <span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Messaging</span>
        </nav>
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-300">Dr. Laurent Martin</span>
          <div className="w-9 h-9 bg-gradient-to-br from-medical-500 to-medical-600 rounded-full flex items-center justify-center text-sm font-semibold shadow-soft">
            LM
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Patient Dossier (Background Context) */}
        <div className="flex-1 bg-slate-100 p-6 hidden lg:block">
          <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-soft mb-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-medical-100 to-medical-200 rounded-xl flex items-center justify-center text-medical-600 font-bold text-lg">
                MD
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-slate-800">Marie Dupont</h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  ID: P-2024-00891 &middot; DOB: 15/03/1975 &middot; Mutuelle Generale
                </p>
              </div>
              <div className="px-2.5 py-1 bg-success-50 text-success-700 rounded-full text-xs font-medium">
                Active Patient
              </div>
            </div>
          </div>
          
          <div className="flex gap-1 bg-white p-1.5 rounded-xl border border-slate-200/80 shadow-soft mb-5">
            {['Summary', 'History', 'Documents', 'Prescriptions', 'Lab Results'].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm rounded-lg transition-all font-medium
                  ${i === 0 
                    ? 'bg-medical-500 text-white shadow-soft' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-xl p-12 text-center text-slate-400 border border-slate-200/80 shadow-soft h-[calc(100%-180px)]">
            <p className="text-lg mb-2 font-medium">Patient dossier content</p>
            <p className="text-sm">Focus on the Copilot Panel</p>
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
            
            <div className="flex items-center gap-3">
              <ListeningIndicator />
              
              <div className="flex bg-slate-100 rounded-lg p-1 text-xs font-semibold">
                <button
                  onClick={() => setLanguage('FR')}
                  className={`px-3 py-1.5 rounded-md transition-all
                    ${language === 'FR' 
                      ? 'bg-white text-slate-800 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('EN')}
                  className={`px-3 py-1.5 rounded-md transition-all
                    ${language === 'EN' 
                      ? 'bg-white text-slate-800 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'}`}
                >
                  EN
                </button>
              </div>
              
              <Link 
                href="/"
                className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 bg-gradient-to-b from-slate-50/50 to-slate-100/50">
            <div className="flex flex-col gap-5">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Area */}
          <div className="p-5 bg-white border-t border-slate-100">
            <button
              onMouseDown={() => setIsRecording(true)}
              onMouseUp={() => setIsRecording(false)}
              onMouseLeave={() => setIsRecording(false)}
              className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2.5
                transition-all duration-200 mb-4
                ${isRecording 
                  ? 'bg-error-500 shadow-lg scale-[0.98]' 
                  : 'bg-gradient-to-r from-success-500 to-success-600 shadow-soft hover:shadow-glow-success hover:-translate-y-0.5'}`}
            >
              <Mic className={`w-5 h-5 ${isRecording ? 'animate-pulse' : ''}`} />
              {isRecording ? 'Recording... / Enregistrement...' : 'Hold to speak / Appuyez pour parler'}
            </button>

            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a command... / Tapez une commande..."
                className="w-full pl-4 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm
                         placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-medical-500/20
                         focus:border-medical-400 transition-all"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-medical-500 hover:bg-medical-600
                         rounded-lg flex items-center justify-center text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-soft"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Voice Hints */}
            <div className="mt-4 p-4 bg-gradient-to-r from-medical-50 to-medical-100/50 rounded-xl border border-medical-200/50">
              <div className="text-[11px] font-semibold text-medical-600 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Try saying / Essayez
              </div>
              <div className="flex flex-wrap gap-2">
                {VOICE_HINTS.map((hint) => (
                  <span 
                    key={hint}
                    className="text-xs text-slate-600 bg-white px-3 py-1.5 rounded-full border border-medical-100 shadow-sm"
                  >
                    {hint}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-100 via-slate-100/95 to-transparent">
        <div className="flex justify-center gap-3">
          <Link 
            href="/"
            className="flex items-center gap-2 text-slate-600 hover:text-medical-600 font-medium text-sm
                     bg-white px-4 py-2.5 rounded-xl shadow-soft hover:shadow-soft-lg transition-all border border-slate-200/80"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Wireframes
          </Link>
          <Link 
            href="/confirm"
            className="flex items-center gap-2 text-white font-medium text-sm
                     bg-gradient-to-r from-medical-500 to-medical-600 px-4 py-2.5 rounded-xl shadow-soft hover:shadow-glow transition-all"
          >
            Next: Confirmation
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
