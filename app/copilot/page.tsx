'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { 
  Mic, 
  X, 
  ChevronDown, 
  Send,
  Sparkles,
  FileText,
  ArrowLeft,
  MoreHorizontal
} from 'lucide-react'

// Types
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

// Mock Data
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

// Components
function ListeningDots() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 bg-success-500 rounded-full animate-pulse-dot"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  )
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.type === 'user'
  
  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''} animate-fade-in`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0
        ${isUser ? 'bg-medical-500 text-white' : 'bg-slate-100 text-medical-500 border border-slate-200'}`}>
        {isUser ? 'LM' : '🤖'}
      </div>
      <div className={`max-w-[85%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`px-4 py-3 rounded-2xl text-sm leading-relaxed
          ${isUser 
            ? 'bg-medical-500 text-white rounded-br-md' 
            : 'bg-white border border-slate-200 text-slate-700 rounded-bl-md shadow-sm'}`}>
          {message.content}
        </div>
        
        {message.action && (
          <div className="mt-2 bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wide mb-2">
              <FileText className="w-3.5 h-3.5" />
              Document Preview
            </div>
            <div className="text-sm text-slate-800">
              <span className="font-semibold text-medical-600">{message.action.title}</span>
              <p className="text-slate-500 mt-1 whitespace-pre-line">{message.action.details}</p>
            </div>
          </div>
        )}
        
        <div className={`text-[10px] mt-1 ${isUser ? 'text-right text-slate-400' : 'text-slate-400'}`}>
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
    
    // Simulate system response
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
    <div className="min-h-screen bg-slate-100">
      {/* Portal Header */}
      <header className="bg-medical-800 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl">🏥</span>
          <span className="font-semibold">MedikaLLInk Portal</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <span className="text-white font-medium cursor-pointer">Patients</span>
          <span className="hover:text-white cursor-pointer transition-colors">Agenda</span>
          <span className="hover:text-white cursor-pointer transition-colors">Documents</span>
          <span className="hover:text-white cursor-pointer transition-colors">Messaging</span>
        </nav>
        <div className="flex items-center gap-3">
          <span className="text-sm">Dr. Laurent Martin</span>
          <div className="w-8 h-8 bg-medical-500 rounded-full flex items-center justify-center text-sm font-semibold">
            LM
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Patient Dossier (Background Context) */}
        <div className="flex-1 bg-slate-50 p-6 hidden lg:block">
          <div className="bg-white rounded-lg p-5 border-l-4 border-medical-500 shadow-sm mb-5">
            <h2 className="text-lg font-semibold text-slate-800">Marie Dupont</h2>
            <p className="text-sm text-slate-500">
              ID: P-2024-00891 • DOB: 15/03/1975 • Insurance: Mutuelle Générale
            </p>
          </div>
          
          <div className="flex gap-1 bg-slate-200 p-1 rounded-lg mb-5">
            {['Summary', 'History', 'Documents', 'Prescriptions', 'Lab Results'].map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm rounded-md transition-all
                  ${i === 0 
                    ? 'bg-white text-slate-800 font-medium shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="bg-white rounded-lg p-12 text-center text-slate-400">
            <p className="text-lg mb-2">Patient dossier content</p>
            <p className="text-sm">Focus on the Copilot Panel →</p>
          </div>
        </div>

        {/* Copilot Panel */}
        <div className="w-full lg:w-[420px] bg-white border-l border-slate-200 flex flex-col shadow-[-4px_0_20px_rgba(0,0,0,0.05)]">
          {/* Panel Header */}
          <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between
                         bg-gradient-to-r from-slate-50 to-white">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-gradient-to-br from-medical-500 to-medical-600 rounded-lg 
                            flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-semibold text-medical-800 text-sm">AI Copilot</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-success-600 font-medium">
                <ListeningDots />
                <span>Listening...</span>
              </div>
              
              <div className="flex bg-slate-100 rounded-md p-0.5 text-xs font-semibold">
                <button
                  onClick={() => setLanguage('FR')}
                  className={`px-2.5 py-1 rounded transition-all
                    ${language === 'FR' 
                      ? 'bg-white text-slate-800 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'}`}
                >
                  FR
                </button>
                <button
                  onClick={() => setLanguage('EN')}
                  className={`px-2.5 py-1 rounded transition-all
                    ${language === 'EN' 
                      ? 'bg-white text-slate-800 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'}`}
                >
                  EN
                </button>
              </div>
              
              <Link 
                href="/"
                className="w-7 h-7 bg-slate-100 hover:bg-slate-200 rounded-md flex items-center justify-center
                         text-slate-500 hover:text-slate-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50">
            <div className="flex flex-col gap-4">
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
              className={`w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2.5
                transition-all duration-200 mb-3
                ${isRecording 
                  ? 'bg-error-500 shadow-lg shadow-error-500/30 scale-[0.98]' 
                  : 'bg-gradient-to-r from-success-500 to-success-600 shadow-lg shadow-success-500/30 hover:shadow-xl hover:-translate-y-0.5'}`}
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
                className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm
                         placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-medical-500/20
                         focus:border-medical-500 transition-all"
              />
              <button
                onClick={handleSend}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-medical-500 hover:bg-medical-600
                         rounded-lg flex items-center justify-center text-white transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Voice Hints */}
            <div className="mt-4 p-3 bg-medical-50 rounded-lg border-l-3 border-medical-500">
              <div className="text-[10px] font-semibold text-medical-600 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Try saying / Essayez :
              </div>
              <div className="flex flex-wrap gap-2">
                {VOICE_HINTS.map((hint) => (
                  <span 
                    key={hint}
                    className="text-xs text-slate-600 bg-white px-2.5 py-1 rounded-full border border-medical-100"
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
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-100 to-transparent">
        <div className="flex justify-center gap-4">
          <Link 
            href="/"
            className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium text-sm
                     bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Wireframes
          </Link>
          <Link 
            href="/confirm"
            className="flex items-center gap-2 text-medical-600 hover:text-medical-700 font-medium text-sm
                     bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all"
          >
            Next: Confirmation
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}
