# FAIRYAI - Client-Side AI Chatbot

A fully client-side AI chatbot web application powered by WebLLM and the Mistral-7B-Instruct model. FAIRYAI runs entirely in the browser using WebGPU with no server or external API required.

## ✨ Features

- 🤖 **Client-Side AI**: Runs completely in the browser using WebLLM
- 📁 **File Upload**: Upload .txt files for context-aware responses
- 🌙 **Dark Mode**: Beautiful dark/light theme toggle
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- ⚡ **Fast**: Powered by WebGPU for optimal performance
- 🔒 **Privacy-First**: No data leaves your device

## 🚀 Live Demo

Visit the live application: [FAIRYAI on GitHub Pages](https://yourusername.github.io/FAIRYAI/)

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS with dark mode
- **AI Engine**: @mlc-ai/web-llm
- **Model**: Mistral-7B-Instruct-q4f16_1
- **Deployment**: GitHub Pages

## 📋 Prerequisites

- Node.js 18+ 
- Modern browser with WebGPU support (Chrome 113+, Edge 113+, Firefox Nightly)
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/FAIRYAI.git
cd FAIRYAI
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📖 Usage

### Basic Chat
1. Wait for the AI model to load (Mistral-7B-Instruct)
2. Type your question in the chat input
3. Press Enter or click the send button
4. View the AI response

### Context-Aware Chat
1. Upload a .txt file using the file upload area
2. The file content will be loaded as context
3. Ask questions about the uploaded content
4. FAIRYAI will provide responses based on the file context

### Dark Mode
- Click the sun/moon icon in the header to toggle dark mode
- Your preference is automatically saved

## 🏗️ Project Structure

```
FAIRYAI/
├── src/
│   ├── components/
│   │   ├── ChatInterface.tsx    # Main chat component
│   │   ├── FileUpload.tsx       # File upload component
│   │   └── Header.tsx           # Header with dark mode toggle
│   ├── types.ts                 # TypeScript type definitions
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # React entry point
│   └── index.css                # Global styles with TailwindCSS
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # TailwindCSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🚀 Deployment

### GitHub Pages (Automatic)

The project is configured for automatic deployment to GitHub Pages:

1. Push your code to the main branch
2. Run the deployment script:
   ```bash
   npm run deploy
   ```
3. The app will be deployed to `https://yourusername.github.io/FAIRYAI/`

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to your web server

## 🔧 Configuration

### Vite Configuration
The `vite.config.ts` file is configured with:
- React plugin
- Base path for GitHub Pages (`/FAIRYAI/`)
- Development server settings

### TailwindCSS Configuration
The `tailwind.config.js` includes:
- Dark mode support
- Custom color palette
- Responsive design utilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [MLC-LLM](https://github.com/mlc-ai/mlc-llm) for the WebLLM framework
- [Mistral AI](https://mistral.ai/) for the Mistral-7B-Instruct model
- [Vite](https://vitejs.dev/) for the fast build tool
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework

## 🐛 Troubleshooting

### Model Loading Issues
- Ensure your browser supports WebGPU
- Check that you have sufficient memory (4GB+ recommended)
- Try refreshing the page if the model fails to load

### Performance Issues
- Close other browser tabs to free up memory
- Use a modern browser with WebGPU support
- Consider using a device with dedicated graphics

### File Upload Issues
- Ensure the file is a .txt format
- Check that the file size is reasonable (< 10MB recommended)
- Try refreshing the page if upload fails

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Search existing issues on GitHub
3. Create a new issue with detailed information

---

Made with ❤️ using React, TypeScript, and WebLLM 