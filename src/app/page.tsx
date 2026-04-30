"use client";

import Link from 'next/link';
import { Bot, Map, Clock, Settings, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="container animate-fade-in" style={{ paddingTop: '80px', paddingBottom: '80px', position: 'relative', zIndex: 1 }}>
      <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto 80px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--bg-primary)', borderRadius: '999px', border: '1px solid var(--border)', marginBottom: '24px', boxShadow: 'var(--shadow-sm)' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)', display: 'inline-block' }} className="animate-pulse-glow"></span>
          <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>Your 2024 Election Guide is Ready</span>
        </div>
        
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
          {t('heroTitle').split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{t('heroTitle').split(' ').slice(-1)[0]}</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
          {t('heroSubtitle')}
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/guide" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            {t('exploreGuide')}
            <ArrowRight size={20} />
          </Link>
          <Link href="/chat" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
            {t('navChat')}
          </Link>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
        <FeatureCard 
          icon={Bot}
          title={t('featureChat')} 
          description={t('featureChatDesc')}
          href="/chat"
        />
        <FeatureCard 
          icon={Map}
          title={t('featureGuide')} 
          description={t('featureGuideDesc')}
          href="/guide"
        />
        <FeatureCard 
          icon={Clock}
          title={t('featureTimeline')} 
          description={t('featureTimelineDesc')}
          href="/timeline"
        />
        <FeatureCard 
          icon={Settings}
          title={t('featureDemo')} 
          description={t('featureDemoDesc')}
          href="/demo"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, href, icon: Icon }: { title: string, description: string, href: string, icon: any }) {
  return (
    <Link href={href} className="card hover-lift" style={{ display: 'block', textDecoration: 'none' }}>
      <div style={{ 
        width: '48px', height: '48px', 
        borderRadius: '16px', 
        background: 'var(--primary-light)', 
        color: 'var(--primary)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <Icon size={24} />
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{description}</p>
    </Link>
  );
}

