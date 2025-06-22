export interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export interface FileUploadProps {
  onFileUpload: (content: string) => void
  uploadedContent: string
}

export interface ChatInterfaceProps {
  messages: Message[]
  onSendMessage: (message: string) => void
  isLoading: boolean
  isModelLoaded: boolean
  hasUploadedContent: boolean
}

export interface HeaderProps {
  darkMode: boolean
  onToggleDarkMode: () => void
} 