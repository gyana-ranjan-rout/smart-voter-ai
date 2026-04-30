"use client";

import { useState } from 'react';
import { guideSteps } from '@/lib/election-data';
import { CheckCircle2, Circle, ChevronDown, ChevronUp } from 'lucide-react';

export default function GuidePage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(1);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({});

  const toggleChecklist = (id: string) => {
    setChecklistState(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const markStepCompleted = (id: number) => {
    setCompletedSteps(prev => ({ ...prev, [id]: true }));
    setExpandedStep(id === guideSteps.length ? null : id + 1);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 16px', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px' }} className="text-gradient">Your Voting Journey</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Follow these steps to cast your vote successfully.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {guideSteps.map((step) => {
          const isExpanded = expandedStep === step.id;
          const isCompleted = completedSteps[step.id];

          return (
            <div key={step.id} className={`card ${!isExpanded && 'hover-lift'}`} style={{ 
              padding: '0', 
              borderColor: isCompleted ? 'rgba(16, 185, 129, 0.3)' : 'var(--border)',
              transition: 'all 0.3s ease',
              overflow: 'hidden'
            }}>
              <div 
                style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px', cursor: 'pointer', background: isExpanded ? 'var(--bg-secondary)' : 'transparent' }}
                onClick={() => setExpandedStep(isExpanded ? null : step.id)}
              >
                <div style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', flexShrink: 0,
                  background: isCompleted ? 'var(--success)' : 'var(--primary-gradient)',
                  color: 'white',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold',
                  boxShadow: isCompleted ? '0 4px 14px rgba(16, 185, 129, 0.3)' : '0 4px 14px rgba(37, 99, 235, 0.3)'
                }}>
                  {isCompleted ? <CheckCircle2 size={24} /> : step.id}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0 0 4px 0', color: isCompleted ? 'var(--success)' : 'var(--text-primary)' }}>{step.title}</h3>
                  {!isExpanded && <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{step.description}</p>}
                </div>
                <div style={{ color: 'var(--text-secondary)' }}>
                  {isExpanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
              </div>

              {isExpanded && (
                <div className="animate-slide-up" style={{ padding: '0 24px 24px 84px' }}>
                  <p style={{ marginBottom: '24px', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>{step.description}</p>
                  
                  <div style={{ background: 'var(--bg-primary)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)', marginBottom: '24px' }}>
                    <h4 style={{ marginBottom: '16px', color: 'var(--primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Important Details</h4>
                    <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {step.details.map((detail, i) => <li key={i}>{detail}</li>)}
                    </ul>
                  </div>

                  <h4 style={{ marginBottom: '16px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Checklist</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                    {step.checklist.map(item => (
                      <label key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer', padding: '12px', borderRadius: '12px', background: checklistState[item.id] ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-secondary)', border: `1px solid ${checklistState[item.id] ? 'rgba(16, 185, 129, 0.2)' : 'transparent'}`, transition: 'all 0.2s' }}>
                        <div onClick={() => toggleChecklist(item.id)} style={{ color: checklistState[item.id] ? 'var(--success)' : 'var(--text-secondary)', transition: 'color 0.2s' }}>
                          {checklistState[item.id] ? <CheckCircle2 size={28} /> : <Circle size={28} />}
                        </div>
                        <span style={{ fontSize: '1.05rem', textDecoration: checklistState[item.id] ? 'line-through' : 'none', color: checklistState[item.id] ? 'var(--text-secondary)' : 'var(--text-primary)', transition: 'all 0.2s' }}>
                          {item.label}
                        </span>
                      </label>
                    ))}
                  </div>

                  {!isCompleted && (
                    <button onClick={() => markStepCompleted(step.id)} className="btn btn-primary" style={{ width: '100%' }}>
                      Mark Step as Completed
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
