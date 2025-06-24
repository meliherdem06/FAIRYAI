import React, { useRef } from 'react'
import { FileUploadProps } from '../types'

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, uploadedContent }) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      onFileUpload(text)
    }
    reader.readAsText(file)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (!file) return
    if (file.type !== 'text/plain' && !file.name.endsWith('.txt')) {
      alert('Please upload a .txt file')
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      onFileUpload(content)
    }
    reader.readAsText(file)
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const clearFile = () => {
    onFileUpload('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="card p-6 flex flex-col gap-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
        Upload a file for context (optional)
      </label>
      <input
        ref={fileInputRef}
        type="file"
        accept=".txt,.md,.json,.csv,.log,.js,.ts,.py,.java,.c,.cpp,.html,.css,.xml,.yaml,.yml,.pdf"
        className="input-field"
        onChange={handleFileChange}
      />
      {uploadedContent && (
        <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 truncate">
          File loaded. Content length: {uploadedContent.length} characters.
        </div>
      )}
    </div>
  )
}

export default FileUpload 