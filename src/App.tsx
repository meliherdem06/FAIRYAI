import { useState, useEffect } from 'react'
import ChatInterface from './components/ChatInterface'
import FileUpload from './components/FileUpload'
import Header from './components/Header'
import { Message } from './types'

const AI_API_URL = process.env.AI_API_URL || 'https://your-cloudflare-api-endpoint.com/chat';

function App() {
  const [uploadedContent, setUploadedContent] = useState<string>('')
  const [messages, setMessages] = useState<Message[]>([])
  const [darkMode, setDarkMode] = useState(false)
  const [isModelLoaded, setIsModelLoaded] = useState(true) // Always true for API

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

  // Handle file upload
  const handleFileUpload = (content: string) => {
    setUploadedContent(content)
  }

  // Handle sending message
  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      role: 'user',
      timestamp: new Date()
    }

    setMessages((prev: Message[]) => [...prev, userMessage])

    try {
      // Create prompt with uploaded content if available
      let prompt = message
      if (uploadedContent) {
        prompt = `Context from uploaded file:\n${uploadedContent}\n\nUser question: ${message}\n\nPlease answer based on the provided context.`
      }

      // Call remote API
      const response = await fetch(AI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      })
      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.reply || 'No response received',
        role: 'assistant',
        timestamp: new Date()
      }

      setMessages((prev: Message[]) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Sorry, I encountered an error while processing your request.',
        role: 'assistant',
        timestamp: new Date()
      }
      setMessages((prev: Message[]) => [...prev, errorMessage])
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
            isModelLoaded={isModelLoaded}
            hasUploadedContent={!!uploadedContent}
          />
        </div>
      </main>
    </div>
  )
}

export default App 