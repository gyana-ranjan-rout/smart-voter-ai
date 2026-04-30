"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MessageSquare, Map, Clock, HelpCircle, LayoutDashboard, Settings, Vote } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

export function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const links = [
    { href: '/', label: t('navHome'), icon: LayoutDashboard },
    { href: '/chat', label: t('navChat'), icon: MessageSquare },
    { href: '/guide', label: t('navGuide'), icon: Map },
    { href: '/timeline', label: t('navTimeline'), icon: Clock },
    { href: '/faq', label: t('navFAQ'), icon: HelpCircle },
    { href: '/demo', label: t('navDemo'), icon: Settings },
  ];

  return (
    <aside style={{ 
      height: '100vh', 
      borderRight: '1px solid var(--border)', 
      padding: '32px 24px', 
      display: 'flex', 
      flexDirection: 'column',
      background: 'var(--bg-glass)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
    }}>
      <div style={{ marginBottom: '48px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ 
          background: 'var(--primary-gradient)', 
          width: '40px', 
          height: '40px', 
          borderRadius: '12px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: 'white',
          boxShadow: 'var(--shadow-glow)'
        }}>
          <Vote size={24} />
        </div>
        <div style={{ fontWeight: 800, fontSize: '1.25rem', lineHeight: 1.2 }}>
          <span className="text-gradient">Election</span><br/>
          <span style={{ color: 'var(--text-secondary)' }}>Assistant</span>
        </div>
      </div>
      
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
        {links.map(link => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 16px',
                borderRadius: '12px',
                backgroundColor: isActive ? 'white' : 'transparent',
                color: isActive ? 'var(--primary)' : 'var(--text-secondary)',
                fontWeight: isActive ? 600 : 500,
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isActive ? 'var(--shadow-md)' : 'none',
                border: isActive ? '1px solid var(--border)' : '1px solid transparent',
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                  e.currentTarget.style.transform = 'translateX(4px)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateX(0)';
                }
              }}
            >
              <Icon size={20} style={{ color: isActive ? 'var(--primary)' : 'inherit' }} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
        <LanguageToggle />
      </div>
    </aside>
  );
}
