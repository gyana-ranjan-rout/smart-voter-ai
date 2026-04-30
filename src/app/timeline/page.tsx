"use client";

import { timelineEvents } from '@/lib/election-data';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

export default function TimelinePage() {
  return (
    <div className="container animate-fade-in" style={{ padding: '40px 16px', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
      <div style={{ marginBottom: '56px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }} className="text-gradient">Election Timeline</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Key dates and milestones for the election cycle</p>
      </div>

      <div style={{ position: 'relative', paddingLeft: '40px' }}>
        {/* Vertical Line */}
        <div style={{ position: 'absolute', left: '19px', top: '16px', bottom: '0', width: '2px', background: 'linear-gradient(to bottom, var(--success) 40%, var(--accent) 60%, var(--border) 100%)' }}></div>

        {timelineEvents.map((event, index) => {
          const isCompleted = event.status === 'completed';
          const isActive = event.status === 'active';
          const isUpcoming = event.status === 'upcoming';

          return (
            <div key={event.id} className="animate-slide-up" style={{ position: 'relative', marginBottom: '40px', animationDelay: `${index * 0.1}s` }}>
              {/* Timeline Dot */}
              <div style={{ 
                position: 'absolute', left: '-40px', top: '24px', 
                width: '40px', height: '40px', borderRadius: '50%', 
                backgroundColor: isCompleted ? 'var(--success)' : isActive ? 'var(--accent)' : 'var(--bg-primary)',
                border: `3px solid ${isCompleted ? 'var(--success)' : isActive ? 'var(--accent)' : 'var(--border)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: isCompleted || isActive ? 'white' : 'var(--text-secondary)',
                zIndex: 2,
                boxShadow: isActive ? '0 0 0 6px rgba(245, 158, 11, 0.2)' : 'none',
              }} className={isActive ? 'animate-pulse-glow' : ''}>
                {isCompleted ? <CheckCircle2 size={20} /> : isActive ? <Clock size={20} /> : <Circle size={20} />}
              </div>

              <div className="card hover-lift" style={{ padding: '24px', borderColor: isActive ? 'var(--accent)' : 'var(--border)', position: 'relative', overflow: 'hidden' }}>
                {isActive && (
                  <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px', background: 'var(--accent)' }}></div>
                )}
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: isCompleted ? 'var(--success)' : isActive ? 'var(--accent)' : 'var(--text-primary)', margin: 0 }}>
                    {event.title}
                  </h3>
                  <span style={{ 
                    fontSize: '0.85rem', padding: '6px 12px', borderRadius: '999px', fontWeight: 600,
                    backgroundColor: isCompleted ? 'rgba(16, 185, 129, 0.1)' : isActive ? 'rgba(245, 158, 11, 0.1)' : 'var(--bg-secondary)',
                    color: isCompleted ? 'var(--success)' : isActive ? 'var(--accent)' : 'var(--text-secondary)',
                    border: `1px solid ${isCompleted ? 'rgba(16, 185, 129, 0.2)' : isActive ? 'rgba(245, 158, 11, 0.2)' : 'var(--border)'}`
                  }}>
                    {event.date}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{event.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
