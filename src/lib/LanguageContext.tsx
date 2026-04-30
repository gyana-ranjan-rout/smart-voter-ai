"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKey } from './translations';
import { Language } from '@/types';
import { getLanguage, setLanguage as setStorageLanguage } from './storage';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLangState] = useState<Language>('en');

  useEffect(() => {
    // Load from local storage on mount
    setLangState(getLanguage());
  }, []);

  const setLanguage = (lang: Language) => {
    setLangState(lang);
    setStorageLanguage(lang);
  };

  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
