"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        borderRadius: '999px',
        background: 'var(--bg-primary)',
        border: '1px solid var(--border)',
        color: 'var(--text-primary)',
        fontSize: '0.85rem',
        fontWeight: 600,
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.3s'
      }}
      className="hover-lift"
    >
      <Languages size={16} color="var(--primary)" />
      {language === 'en' ? 'हिंदी (Hindi)' : 'English'}
    </button>
  );
}
