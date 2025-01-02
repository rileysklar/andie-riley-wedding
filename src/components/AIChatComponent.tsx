import { useState } from 'react';

interface Source {
  url: string;
  title: string;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
  timestamp?: Date;
}

interface ChatProps {
  apiKey?: string;
  maxMessages?: number;
  className?: string;
}

export const AIChatComponent: React.FC<ChatProps> = ({ 
  apiKey, 
  maxMessages = 50,
  className = ''
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_URL = import.meta.env.VITE_AI_API_URL;
  const API_KEY = apiKey || import.meta.env.VITE_AI_API_KEY;

  const sendMessage = async (message: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // Add user message with timestamp
      const userMessage: ChatMessage = {
        role: 'user',
        content: message,
        timestamp: new Date()
      };
      
      setMessages(prev => {
        const newMessages = [...prev, userMessage];
        // Maintain message limit
        return newMessages.slice(-maxMessages);
      });
      
      const response = await fetch(`${API_URL}/api/rag/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': API_KEY,
        },
        body: JSON.stringify({ message }),
      });
      
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      
      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.answer,
        sources: data.sources,
        timestamp: new Date()
      };

      setMessages(prev => {
        const newMessages = [...prev, assistantMessage];
        return newMessages.slice(-maxMessages);
      });
      
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error processing your request.',
        timestamp: new Date()
      }]);
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <div className={`flex flex-col h-[400px] w-full max-w-2xl mx-auto rounded-lg ${className}`}
         style={{
           background: "rgba(0, 0, 0, 0.25)",
           boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.17)",
           backdropFilter: "blur(4px)",
           WebkitBackdropFilter: "blur(4px)",
         }}>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              message.role === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div className="flex items-center gap-2">
              {message.timestamp && (
                <span className="text-xs text-gray-400">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              )}
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.content}
              </div>
            </div>
            
            {message.sources && (
              <div className="mt-2 text-sm text-gray-500">
                <details className="cursor-pointer">
                  <summary className="font-medium hover:text-blue-500">View Sources</summary>
                  <ul className="mt-1 list-disc list-inside pl-2">
                    {message.sources.map((source, idx) => (
                      <li key={idx}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {source.title || source.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
            )}
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-center">
            <div className="animate-pulse text-gray-500">Thinking...</div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center p-2 bg-red-50 rounded">
            {error}
          </div>
        )}
      </div>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input.trim() && !loading) {
            sendMessage(input.trim());
          }
        }}
        className="p-4 border-t border-gray-200"
      >
        <div className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 hover:bg-blue-600 transition-colors"
            aria-label={loading ? 'Sending message...' : 'Send message'}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}; 