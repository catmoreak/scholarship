"use client"

import React, { useState, useRef, useEffect } from 'react'
import { 
  MessageCircle, 
  X, 
  Send, 
  Minimize2,
  Volume2,
  VolumeX,
  RotateCcw
} from 'lucide-react'

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi there! 👋 I\'m Scholly, your scholarship assistant! How can I help you find the perfect scholarship today?',
      timestamp: new Date()
    }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [petAnimation, setPetAnimation] = useState<'idle' | 'wave' | 'thinking' | 'excited'>('idle')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Cute pet animations
  const triggerPetAnimation = (animation: 'idle' | 'wave' | 'thinking' | 'excited') => {
    setPetAnimation(animation)
    setTimeout(() => setPetAnimation('idle'), 2000)
  }

  const handleSendMessage = async () => {
    if (!message.trim()) return

    const userMessage = {
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setMessage('')
    setIsTyping(true)
    triggerPetAnimation('thinking')

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "That's a great question! Let me help you find scholarships that match your profile. 🎓",
        "I'd be happy to assist you with that! Can you tell me more about your field of study? 📚",
        "Wonderful! I can help you discover amazing scholarship opportunities. What's your GPA range? ⭐",
        "Excellent question! Let me search our database for the best matches for you. 🔍",
        "I'm here to help! What type of scholarship are you most interested in? Academic, athletic, or need-based? 💡"
      ]
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]
      
      setMessages(prev => [...prev, {
        type: 'bot',
        content: randomResponse,
        timestamp: new Date()
      }])
      setIsTyping(false)
      triggerPetAnimation('excited')
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Cute pet component
  const CutePet = () => (
    <div className="relative">
      <div 
        className={`w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center shadow-lg transition-all duration-500 ${
          petAnimation === 'wave' ? 'animate-bounce' : 
          petAnimation === 'thinking' ? 'animate-pulse' : 
          petAnimation === 'excited' ? 'animate-spin' : 
          'hover:scale-110'
        }`}
        onClick={() => triggerPetAnimation('wave')}
      >
        <div className="text-2xl">
          {petAnimation === 'thinking' ? '🤔' : 
           petAnimation === 'excited' ? '🎉' : 
           '🐰'}
        </div>
      </div>
      
      {/* Waving hand animation */}
      {(petAnimation === 'wave' || (!isOpen && petAnimation === 'idle')) && (
        <div className="absolute -top-2 -right-2 animate-bounce">
          <div className="text-lg animate-pulse">👋</div>
        </div>
      )}
      
      {/* Speech bubble when closed */}
      {!isOpen && (
        <div className="absolute -top-12 -left-16 bg-white rounded-lg px-3 py-1 shadow-lg border-2 border-purple-200 animate-bounce">
          <div className="text-xs text-purple-600 font-medium whitespace-nowrap">
            Need help? Click me! 💬
          </div>
          <div className="absolute bottom-0 left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white transform translate-y-full"></div>
        </div>
      )}
    </div>
  )

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className={`mb-4 bg-white rounded-2xl shadow-2xl border border-purple-200 transition-all duration-300 ${
          isMinimized ? 'h-16' : 'h-96 w-80'
        }`}>
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="text-lg">🐰</div>
              <div>
                <h3 className="font-semibold">Scholly</h3>
                <p className="text-xs text-purple-100">Your Scholarship Assistant</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-purple-100 hover:text-white transition-colors duration-200 p-1 rounded-lg hover:bg-purple-700"
              >
                <Minimize2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-purple-100 hover:text-white transition-colors duration-200 p-1 rounded-lg hover:bg-purple-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          {!isMinimized && (
            <>
              <div className="h-64 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-purple-50 to-indigo-50">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-2xl shadow-sm ${
                        msg.type === 'user'
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                          : 'bg-white text-gray-800 border border-purple-200'
                      }`}
                    >
                      {msg.type === 'bot' && (
                        <div className="flex items-start space-x-2">
                          <div className="text-sm mt-1">🐰</div>
                          <div className="text-sm">{msg.content}</div>
                        </div>
                      )}
                      {msg.type === 'user' && (
                        <div className="text-sm">{msg.content}</div>
                      )}
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 border border-purple-200 px-3 py-2 rounded-2xl shadow-sm">
                      <div className="flex items-center space-x-2">
                        <div className="text-sm">🐰</div>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-purple-200 bg-white rounded-b-2xl">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about scholarships..."
                    className="flex-1 border border-purple-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-2 rounded-xl hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex justify-center mt-2">
                  <button
                    onClick={() => {
                      setMessages([{
                        type: 'bot',
                        content: 'Hi there! 👋 I\'m Scholly, your scholarship assistant! How can I help you find the perfect scholarship today?',
                        timestamp: new Date()
                      }])
                      triggerPetAnimation('excited')
                    }}
                    className="text-xs text-purple-500 hover:text-purple-700 flex items-center space-x-1 transition-colors duration-200"
                  >
                    <RotateCcw className="h-3 w-3" />
                    <span>Start Over</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {/* Chat Button / Pet */}
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          triggerPetAnimation('wave')
        }}
        className="transition-all duration-300 transform hover:scale-105 focus:outline-none"
      >
        {isOpen ? (
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
        ) : (
          <CutePet />
        )}
      </button>
    </div>
  )
}

export default ChatBot
