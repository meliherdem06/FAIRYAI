import React, { useState, useEffect } from 'react'
import { ChatEngine } from '@mlc-ai/web-llm'
import ChatInterface from './components/ChatInterface'
import FileUpload from './components/FileUpload'
import Header from './components/Header'
import { Message } from './types'

function App() {
  const [chatEngine, setChatEngine] = useState<ChatEngine | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isModelLoaded, setIsModelLoaded] = useState(false)
  const [uploadedContent, setUploadedContent] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>([])
  const [darkMode, setDarkMode] = useState(false)

  // Initialize dark mode
  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', newDarkMode.toString())
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  // Initialize WebLLM
  useEffect(() => {
    const initChatEngine = async () => {
      try {
        setIsLoading(true)
        const engine = new ChatEngine()
        
        // Initialize with Mistral-7B-Instruct model
        await engine.reload("Mistral-7B-Instruct-q4f16_1")
        
        setChatEngine(engine)
        setIsModelLoaded(true)
        setIsLoading(false)
      } catch (error) {
        console.error('Failed to initialize chat engine:', error)
        setIsLoading(false)
      }
    }

    initChatEngine()
  }, [])

  // Handle file upload
  const handleFileUpload = (content: string) => {
    setUploadedContent(content)
  }

  // Handle sending message
  const handleSendMessage = async (message: string) => {
    if (!chatEngine || !message.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      role: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])

    try {
      // Create prompt with uploaded content if available
      let prompt = message
      if (uploadedContent) {
        prompt = `Context from uploaded file:\n${uploadedContent}\n\nUser question: ${message}\n\nPlease answer based on the provided context.`
      }

      const response = await chatEngine.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 1000,
      })

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.choices[0]?.message?.content || 'No response received',
        role: 'assistant',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error while processing your request.',
        role: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Header darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {/* File Upload Section */}
          <FileUpload onFileUpload={handleFileUpload} uploadedContent={uploadedContent} />
          
          {/* Chat Interface */}
          <ChatInterface
            messages={messages}
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            isModelLoaded={isModelLoaded}
            hasUploadedContent={!!uploadedContent}
          />
        </div>
      </main>
    </div>
  )
}

export default App 