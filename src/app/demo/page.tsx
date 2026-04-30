"use client";

import { useState, useEffect } from 'react';
import { candidates } from '@/lib/election-data';
import { Shield, RotateCcw } from 'lucide-react';

export default function DemoPage() {
  const [selectedCandidate, setSelectedCandidate] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [showVVPAT, setShowVVPAT] = useState(false);

  const handleVote = (id: number) => {
    if (hasVoted) return;
    
    setSelectedCandidate(id);
    
    // Simulate beep and VVPAT
    const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU'); // Very short dummy beep
    audio.play().catch(() => {});
    
    setTimeout(() => {
      setShowVVPAT(true);
      setTimeout(() => {
        setHasVoted(true);
      }, 7000); // VVPAT shows for 7 seconds
    }, 500);
  };

  const resetDemo = () => {
    setSelectedCandidate(null);
    setHasVoted(false);
    setShowVVPAT(false);
  };

  const votedCandidate = candidates.find(c => c.id === selectedCandidate);

  return (
    <div className="container animate-fade-in" style={{ padding: '24px 16px', maxWidth: '800px' }}>
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--primary-dark)', marginBottom: '8px' }}>Mock Voting Demo</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Practice the voting process safely with our EVM Simulator</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }}>
        {/* EVM Ballot Unit */}
        <div style={{ backgroundColor: '#e2e8f0', padding: '24px', borderRadius: '16px', border: '4px solid #cbd5e1' }}>
          <div style={{ backgroundColor: '#f8fafc', borderRadius: '8px', padding: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
              {candidates.map((candidate) => (
                <div key={candidate.id} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', border: '1px solid var(--border)', borderRadius: '8px', backgroundColor: 'white' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: candidate.color, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                    {candidate.symbol}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 'bold' }}>{candidate.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{candidate.party}</div>
                  </div>
                  <button
                    onClick={() => handleVote(candidate.id)}
                    disabled={hasVoted || showVVPAT}
                    style={{
                      width: '40px', height: '40px', borderRadius: '50%',
                      backgroundColor: '#3b82f6', border: '4px solid #1d4ed8',
                      cursor: hasVoted || showVVPAT ? 'not-allowed' : 'pointer',
                      opacity: hasVoted || showVVPAT ? 0.5 : 1,
                      boxShadow: selectedCandidate === candidate.id ? '0 0 10px #ef4444' : 'none'
                    }}
                  />
                  {/* Red light indicator */}
                  <div style={{ 
                    width: '16px', height: '16px', borderRadius: '50%', 
                    backgroundColor: selectedCandidate === candidate.id ? '#ef4444' : '#fee2e2',
                    boxShadow: selectedCandidate === candidate.id ? '0 0 8px #ef4444' : 'none',
                    transition: 'all 0.2s'
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VVPAT Unit */}
        {showVVPAT && !hasVoted && (
          <div className="animate-slide-up" style={{ textAlign: 'center', padding: '24px', backgroundColor: '#334155', borderRadius: '16px', color: 'white' }}>
            <h3 style={{ marginBottom: '16px' }}>VVPAT Verification</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '16px', color: '#94a3b8' }}>This slip is visible for 7 seconds before falling into the box.</p>
            <div style={{ display: 'inline-block', backgroundColor: 'white', color: 'black', padding: '24px', borderRadius: '4px', width: '200px', border: '2px dashed #cbd5e1' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>{votedCandidate?.symbol}</div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{votedCandidate?.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>{votedCandidate?.party}</div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {hasVoted && (
          <div className="animate-slide-up" style={{ textAlign: 'center', padding: '32px', backgroundColor: 'var(--success)', borderRadius: '16px', color: 'white' }}>
            <Shield size={48} style={{ margin: '0 auto 16px' }} />
            <h2 style={{ marginBottom: '8px' }}>Vote Successfully Recorded!</h2>
            <p style={{ marginBottom: '24px' }}>In a real election, you would now receive ink on your finger and leave the booth.</p>
            <button onClick={resetDemo} className="btn" style={{ backgroundColor: 'white', color: 'var(--success)', fontWeight: 'bold' }}>
              <RotateCcw size={20} style={{ marginRight: '8px' }} />
              Restart Demo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
