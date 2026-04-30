"use client";

import { useState } from 'react';
import { faqData } from '@/lib/election-data';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ['all', 'eligibility', 'registration', 'voting-day', 'results', 'general'];

  const filteredData = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 16px', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }} className="text-gradient">Frequently Asked Questions</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Find quick answers to common election questions</p>
      </div>

      <div style={{ position: 'relative', marginBottom: '32px' }}>
        <input 
          type="text" 
          placeholder="Search questions..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '20px 20px 20px 56px', borderRadius: '16px', border: '1px solid var(--border)', fontSize: '1.05rem', background: 'var(--bg-glass)', backdropFilter: 'blur(12px)', boxShadow: 'var(--shadow-sm)', outline: 'none' }}
        />
        <Search style={{ position: 'absolute', left: '20px', top: '22px', color: 'var(--primary)' }} size={24} />
      </div>

      <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '20px', marginBottom: '32px', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '10px 20px',
              borderRadius: '999px',
              border: activeCategory === cat ? 'none' : '1px solid var(--border)',
              background: activeCategory === cat ? 'var(--primary-gradient)' : 'var(--bg-primary)',
              color: activeCategory === cat ? 'white' : 'var(--text-secondary)',
              textTransform: 'capitalize',
              whiteSpace: 'nowrap',
              fontWeight: 600,
              boxShadow: activeCategory === cat ? '0 4px 14px rgba(37, 99, 235, 0.3)' : 'var(--shadow-sm)',
              transition: 'all 0.3s'
            }}
          >
            {cat.replace('-', ' ')}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredData.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '64px 24px', color: 'var(--text-secondary)', background: 'var(--bg-primary)', borderRadius: '16px', border: '1px dashed var(--border)' }}>
            No questions found matching your search.
          </div>
        ) : (
          filteredData.map((item) => (
            <div key={item.id} className={`card ${expandedId !== item.id && 'hover-lift'}`} style={{ padding: '0', overflow: 'hidden', width: '100%', borderColor: expandedId === item.id ? 'rgba(37, 99, 235, 0.3)' : 'var(--border)' }}>
              <button 
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', textAlign: 'left', fontWeight: 600, color: expandedId === item.id ? 'var(--primary)' : 'var(--text-primary)', gap: '20px', fontSize: '1.1rem', background: expandedId === item.id ? 'var(--bg-secondary)' : 'transparent', transition: 'all 0.3s' }}
              >
                <span style={{ flex: 1 }}>{item.question}</span>
                <span style={{ flexShrink: 0, marginTop: '2px', background: expandedId === item.id ? 'var(--primary-light)' : 'transparent', borderRadius: '50%', padding: '4px', color: expandedId === item.id ? 'var(--primary)' : 'var(--text-secondary)', transition: 'all 0.3s' }}>
                  {expandedId === item.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {expandedId === item.id && (
                <div className="animate-slide-up" style={{ padding: '0 24px 24px 24px', color: 'var(--text-secondary)', background: 'var(--bg-secondary)' }}>
                  <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.6 }}>{item.answer}</p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
