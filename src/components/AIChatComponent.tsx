import { useState, useEffect, useRef } from 'react';

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
  preventScroll?: boolean;
}

export const AIChatComponent: React.FC<ChatProps> = ({ 
  apiKey, 
  maxMessages = 50,
  className = '',
  preventScroll = false
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [openSourceIndex, setOpenSourceIndex] = useState<number | null>(null);

  // Fixed API configuration
  const BASE_API_URL = 'https://web-page-rag-api.fly.dev';
  const TEST_API_KEY = 'test123';

  const sendMessage = async (message: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const userMessage: ChatMessage = {
        role: 'user',
        content: message,
        timestamp: new Date()
      };
      
      setMessages(prev => {
        const newMessages = [...prev, userMessage];
        return newMessages.slice(-maxMessages);
      });

      const endpoint = `${BASE_API_URL}/api/rag/query`;
      
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': TEST_API_KEY,
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

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages]);

  useEffect(() => {
    setMessages([{
      role: 'assistant',
      content: 'Hi! I am Riley and Andie\'s AI Wedding coordinator. Ask me anything about the wedding!',
      timestamp: new Date()
    }]);
    setIsExpanded(false);
  }, []);

  return (
    <div 
      className={`flex flex-col w-full rounded-lg transition-all duration-300 ease-in-out ${className}`}
      style={{
        height: 'auto',
        minHeight: isExpanded ? 'auto' : 'auto',
        maxHeight: isExpanded ? '400px' : 'fit-content',
        background: "rgba(0, 0, 0, 0.4)",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.17)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {messages.length > 0 && (
        <button
          onClick={toggleExpanded}
          className="absolute left-4 top-2 text-white/80 hover:text-white p-1 rounded transition-colors z-10"
          aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
        >
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </button>
      )}

      <div className={`flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 ${!isExpanded ? 'max-h-[100px]' : ''}`} style={{ scrollBehavior: 'smooth' }}>
        {messages.length === 0 && (
          <div className="text-center text-gray-300 italic text-sm sm:text-base">
            I am your AI wedding coordinator. Ask me anything about the wedding!
          </div>
        )}
        
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              message.role === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div className={`flex items-center gap-2 ${
              message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
            }`}>
              {message.timestamp && (
                <span className="text-[10px] sm:text-xs text-gray-400">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              )}
              <div
                className={`p-2 sm:p-3 rounded-lg max-w-[85%] text-sm sm:text-base ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-400 text-white'
                }`}
              >
                {message.content}
              </div>
            </div>
            
            {message.sources && (
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-300">
                <div 
                  className="group cursor-pointer"
                  onClick={() => setOpenSourceIndex(openSourceIndex === index ? null : index)}
                >
                  <div className="flex items-center gap-1 font-medium hover:text-blue-400 transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transition-transform ${openSourceIndex === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                    View Sources ({message.sources.length})
                  </div>
                  {openSourceIndex === index && (
                    <div className="mt-2 pl-4 border-l-2 border-gray-600">
                      <ul className="space-y-1">
                        {message.sources.map((source, idx) => (
                          <li key={idx} className="hover:text-blue-400">
                            <a
                              href={source.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 hover:underline"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-3 w-3" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path 
                                  strokeLinecap="round" 
                                  strokeLinejoin="round" 
                                  strokeWidth={2} 
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                                />
                              </svg>
                              {source.title || source.url}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-center">
            <div className="animate-pulse text-gray-500">Checking my notes...</div>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center p-2 bg-red-50 rounded">
            {error}
          </div>
        )}

        <div 
          ref={messagesEndRef} 
          className="h-[1px] w-full"
        />
      </div>
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          if (input.trim() && !loading) {
            // Prevent scroll on submit
            setTimeout(() => {
              window.scrollTo({
                top: 0,
                behavior: 'auto'
              });
            }, 0);
            sendMessage(input.trim());
          }
        }}
        className="sticky bottom-0 p-3 sm:p-4 border-t border-gray-200/20 bg-black/40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <input
            type="text"
            value={input}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (!isExpanded) {
                setIsExpanded(true);
              }
            }}
            onFocus={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/20 text-white placeholder-gray-300"
            disabled={loading}
            placeholder={isExpanded ? "Ask me anything about the wedding..." : "Ask me anything about the wedding..."}
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 text-sm sm:text-base bg-blue-500/80 text-white rounded-lg disabled:opacity-100 hover:bg-blue-600/80 transition-colors"
            aria-label={loading ? 'Sending message...' : 'Send message'}
            onClick={(e) => e.stopPropagation()}
          >
            {loading ? 'Thinking...' : '✨ Send'}
          </button>
        </div>
      </form>
    </div>
  );
}; 