"use client";

import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { ChatMessage } from '@/types';

export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [eli10Mode, setEli10Mode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: "Hello! 👋 I'm your Election Assistant. Ask me anything about the voting process!",
        timestamp: Date.now(),
        suggestions: ['How do I vote?', 'Am I eligible?', 'What documents do I need?']
      }
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, eli10Mode })
      });
      const data = await res.json();

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: Date.now(),
        suggestions: data.suggestions
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '24px 16px', position: 'relative', zIndex: 1, maxWidth: '900px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', background: 'var(--bg-glass)', padding: '16px 24px', borderRadius: '16px', backdropFilter: 'blur(12px)', border: '1px solid var(--border)' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0 }} className="text-gradient">Chat Assistant</h1>
        <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', background: eli10Mode ? 'var(--primary-light)' : 'var(--bg-secondary)', padding: '8px 16px', borderRadius: '999px', transition: 'all 0.3s' }}>
          <input 
            type="checkbox" 
            checked={eli10Mode} 
            onChange={(e) => setEli10Mode(e.target.checked)} 
            style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
          />
          <span style={{ fontSize: '0.95rem', fontWeight: 600, color: eli10Mode ? 'var(--primary)' : 'var(--text-secondary)' }}>Explain Like I'm 10</span>
        </label>
      </div>

      <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0, border: '1px solid var(--border)', background: 'var(--bg-primary)' }}>
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {messages.map(msg => (
            <div key={msg.id} className="animate-slide-up" style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              display: 'flex',
              gap: '16px'
            }}>
              {msg.role === 'assistant' && (
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                  <Bot size={24} />
                </div>
              )}
              <div style={{
                background: msg.role === 'user' ? 'var(--primary-gradient)' : 'var(--bg-secondary)',
                color: msg.role === 'user' ? 'white' : 'var(--text-primary)',
                padding: '16px 20px',
                borderRadius: '16px',
                borderBottomRightRadius: msg.role === 'user' ? '4px' : '16px',
                borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '16px',
                whiteSpace: 'pre-wrap',
                boxShadow: msg.role === 'user' ? '0 4px 14px rgba(37, 99, 235, 0.2)' : 'none',
                lineHeight: 1.6,
                fontSize: '1.05rem'
              }}>
                {msg.content}
                
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                    {msg.suggestions.map(sug => (
                      <button 
                        key={sug}
                        onClick={() => sendMessage(sug)}
                        style={{
                          background: 'var(--bg-primary)',
                          color: 'var(--primary)',
                          border: '1px solid var(--primary)',
                          padding: '6px 14px',
                          borderRadius: '999px',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'white'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {msg.role === 'user' && (
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0, boxShadow: '0 4px 14px rgba(37, 99, 235, 0.2)' }}>
                  <User size={24} />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="animate-slide-up" style={{ alignSelf: 'flex-start', display: 'flex', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                <Bot size={24} />
              </div>
              <div style={{ background: 'var(--bg-secondary)', padding: '16px 20px', borderRadius: '16px', borderBottomLeftRadius: '4px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Loader2 className="animate-spin" size={20} color="var(--primary)" />
                <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div style={{ borderTop: '1px solid var(--border)', padding: '20px', background: 'var(--bg-glass)', backdropFilter: 'blur(12px)' }}>
          <form 
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            style={{ display: 'flex', gap: '12px' }}
          >
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about elections, voting, eligibility..."
              style={{
                flex: 1,
                padding: '16px 24px',
                borderRadius: '999px',
                border: '1px solid var(--border)',
                background: 'var(--bg-primary)',
                outline: 'none',
                fontFamily: 'inherit',
                fontSize: '1rem',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
              }}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="btn btn-primary"
              style={{ borderRadius: '999px', padding: '16px', width: '56px', height: '56px', flexShrink: 0 }}
            >
              <Send size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
