"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'bot',
      content: "Welcome to CivicMind. How can I assist you with voter registration, polling stations, or the election timeline today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const MAX_CHARS = 500;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, eli10Mode: false })
      });
      const data = await res.json();

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: data.response,
      };

      setMessages(prev => [...prev, botMsg]);
    } catch {
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: "Error: Connection to CivicMind API failed. Retrying...",
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="chat-trigger"
            onClick={() => setIsOpen(true)}
            aria-label="Open CivicMind Assistant"
            id="chat-trigger-btn"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chat-panel flat-panel" 
            id="chat-panel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="chat-header">
              <div>
                <div className="chat-header-title">CivicMind Assistant</div>
                <div className="chat-header-status">
                  <span className="chat-status-dot" />
                  SYSTEM ONLINE
                </div>
              </div>
              <button
                className="chat-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                id="chat-close-btn"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages" id="chat-messages">
              {messages.map(msg => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={msg.id} 
                  className={`chat-message ${msg.role === 'user' ? 'user' : 'bot'}`}
                >
                  <div className="chat-message-author">
                    {msg.role === 'user' ? 'VOTER' : 'ASSISTANT'}
                  </div>
                  <div className="chat-message-bubble font-mono" style={{ whiteSpace: 'pre-wrap' }}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="chat-message bot"
                >
                  <div className="chat-message-author">ASSISTANT</div>
                  <div className="chat-message-bubble font-mono">
                    <BrainCircuit size={16} className="animate-pulse text-brand" style={{ display: 'inline', marginRight: '8px' }} /> 
                    Processing query...
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chat-input-area">
              <div className="chat-input-wrapper">
                <textarea
                  ref={inputRef}
                  className="chat-input font-mono"
                  value={input}
                  onChange={(e) => {
                    if (e.target.value.length <= MAX_CHARS) {
                      setInput(e.target.value);
                    }
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder="> Ask a question..."
                  rows={1}
                  id="chat-input-field"
                />
                <button
                  className={`chat-send-btn ${input.trim() ? 'active' : ''}`}
                  onClick={sendMessage}
                  disabled={!input.trim() || isTyping}
                  aria-label="Send message"
                  id="chat-send-btn"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
