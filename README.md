# Andie & Riley Wedding Website

A modern, responsive wedding website built with React and Astro, featuring an AI-powered wedding coordinator chatbot that can answer questions about the wedding using RAG (Retrieval Augmented Generation) technology.

## 🌟 Features

### Frontend
- **Modern Stack**: Built with React, Astro, and TailwindCSS
- **Responsive Design**: Mobile-first approach with fluid layouts
- **AI Wedding Coordinator**: Interactive chatbot for wedding information
- **Dynamic Components**: 
  - Hero section with background animations
  - AI Chat interface with expand/collapse functionality
  - Smooth transitions and animations
  - Mobile-optimized interactions

### Backend (RAG API)
- **FastAPI REST endpoints**:
  - Health check endpoint
  - RAG query endpoint for chat interactions
- **Security**:
  - API key authentication
  - Rate limiting (20 requests/minute)
  - CORS configuration
- **RAG System**:
  - Context-aware responses
  - Source attribution
  - Intelligent text processing

## 🛠 Tech Stack

### Frontend
- React 18
- Astro
- TailwindCSS
- TypeScript
- Vite

### Backend
- FastAPI
- OpenAI GPT-3.5
- Pinecone Vector DB
- Docker
- Fly.io

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Python 3.8+ (for backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/andie-riley-wedding.git
cd andie-riley-wedding
```

2. Install frontend dependencies:
```bash
npm install
```

3. Create a `.env` file:
```env
VITE_AI_API_URL=https://web-page-rag-api.fly.dev
VITE_AI_API_KEY=your_api_key
```

4. Start the development server:
```bash
npm run dev
```

## 🏗 Project Structure

```
andie-riley-wedding/
├── src/
│   ├── components/           # React components
│   │   ├── AIChatComponent/ # AI Chat interface
│   │   ├── Hero/            # Hero section
│   │   └── ...
│   ├── styles/              # Global styles
│   └── pages/              # Astro pages
├── public/                 # Static assets
└── package.json           # Project dependencies
```

## 🤖 AI Chat Component

The website features an AI-powered chat interface that can answer questions about the wedding. Key features:

- Dynamic height adjustment
- Mobile-responsive design
- Smooth animations
- Message history with timestamps
- Source attribution for answers
- Error handling and loading states
- Rate limiting protection

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interactions
- Optimized input handling
- Prevent unwanted scrolling behaviors
- Smooth animations and transitions

## 🔒 Security

- Environment variable management
- API key authentication
- Rate limiting
- CORS protection
- Secure data handling

## 🚀 Deployment

The website is deployed using Netlify with the following configuration:

1. Environment variables set in Netlify dashboard
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Node.js version: 18.x

## 📈 Project Progress

### Completed Features
- [x] Initial project setup
- [x] Core frontend components
- [x] AI Chat integration
- [x] Mobile responsiveness
- [x] API integration
- [x] Security implementation
- [x] Production deployment

### Upcoming Features
- [ ] Conversation history
- [ ] Enhanced error handling
- [ ] Analytics integration
- [ ] Performance optimizations
- [ ] Additional chat features
- [ ] Expanded wedding information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is private and not licensed for public use.

## 👥 Credits

Developed by [Your Team/Name]
