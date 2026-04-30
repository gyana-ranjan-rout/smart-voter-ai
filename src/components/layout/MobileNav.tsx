"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquare, Map, Clock, HelpCircle, Home, Languages } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export function MobileNav() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { href: '/', label: t('navHome'), icon: Home },
    { href: '/chat', label: t('navChat'), icon: MessageSquare },
    { href: '/guide', label: t('navGuide'), icon: Map },
    { href: '/timeline', label: t('navTimeline'), icon: Clock },
    { href: '/faq', label: t('navFAQ'), icon: HelpCircle },
  ];

  return (
    <div style={{ padding: '0 16px 24px 16px', pointerEvents: 'none' }}>
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        background: 'var(--bg-primary)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '12px 24px',
        borderRadius: 'var(--radius-full)',
        boxShadow: 'var(--shadow-lg)',
        border: '1px solid var(--border)',
        pointerEvents: 'auto'
      }}>
        {links.map(link => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
                color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                fontSize: '0.75rem',
                fontWeight: isActive ? 700 : 500,
                position: 'relative',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                padding: '8px',
                borderRadius: '50%',
                background: isActive ? 'var(--primary-light)' : 'transparent',
                transition: 'all 0.3s ease'
              }}>
                <Icon size={22} style={{ color: isActive ? 'var(--primary)' : 'inherit' }} />
              </div>
              {isActive && (
                <div style={{
                  position: 'absolute',
                  bottom: '-8px',
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  background: 'var(--primary)'
                }} />
              )}
            </Link>
          );
        })}
        <button
          onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--text-secondary)',
            fontSize: '0.75rem',
            fontWeight: 500,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <div style={{ padding: '8px', borderRadius: '50%' }}>
            <Languages size={22} color="var(--primary)" />
          </div>
          {language === 'en' ? 'HI' : 'EN'}
        </button>
      </nav>
    </div>
  );
}
