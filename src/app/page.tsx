"use client";

import { useState, useEffect } from 'react';
import { BrainCircuit, Check, ChevronRight, CheckCircle2, Clock, MapPin, UserCheck, CreditCard, Vote, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { ChatWidget } from '@/components/ui/ChatWidget';

export default function Home() {
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const markStepDone = (stepId: number) => {
    setCompletedSteps(prev => ({ ...prev, [stepId]: true }));
  };

  const stepsData = [
    {
      id: 1,
      title: "Verify Eligibility",
      description: "Ensure you're qualified to vote in your constituency.",
      action: "Check your age, citizenship, and residency status on the official voter portal.",
      tip: "You must be 18+ and a citizen to vote.",
      icon: <UserCheck size={24} />
    },
    {
      id: 2,
      title: "Register to Vote",
      description: "Get your name added to the electoral roll.",
      action: "Submit Form 6 online or offline with valid ID and address proof.",
      smartFeature: "AI auto-fills your form using uploaded documents.",
      icon: <CheckSquareIcon />
    },
    {
      id: 3,
      title: "Get Your Digital Voter ID",
      description: "Receive your verified voter identity (e-EPIC).",
      action: "Download your e-EPIC or track physical card delivery.",
      bonus: "Store it securely in your app wallet.",
      icon: <CreditCard size={24} />
    },
    {
      id: 4,
      title: "Locate Polling Station",
      description: "Find where you need to vote.",
      action: "Use live maps to locate your booth instantly.",
      feature: "GPS navigation + crowd prediction",
      icon: <MapPin size={24} />
    },
    {
      id: 5,
      title: "Cast Your Vote",
      description: "Make your voice count.",
      action: "Visit your polling booth with valid ID and vote using EVM.",
      reminder: "Get smart alerts on voting day.",
      icon: <Vote size={24} />
    },
    {
      id: 6,
      title: "Track Results",
      description: "Stay updated with real-time outcomes.",
      action: "View live counting and final results.",
      feature: "Visual dashboards & constituency insights",
      icon: <LineChart size={24} />
    }
  ];

  const nextStep = stepsData.find(s => !completedSteps[s.id]);
  const completedCount = Object.values(completedSteps).filter(Boolean).length;

  const timelineDisplay = [
    {
      title: 'Registration Deadline',
      description: 'Last chance to enroll as a voter.',
      date: 'October 15, 2025',
      status: 'completed' as const,
    },
    {
      title: 'Election Day',
      description: 'Vote at your assigned polling station.',
      date: 'November 5, 2025',
      status: 'upcoming' as const,
    },
    {
      title: 'Results Announcement',
      description: 'Official declaration of results.',
      date: 'November 8, 2025',
      status: 'upcoming' as const,
    },
  ];

  if (!mounted) return null;

  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <>
      {/* ─── Navbar ─────────────────────────────────── */}
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="navbar-logo">
            <BrainCircuit className="navbar-logo-icon" size={24} strokeWidth={2.5} />
            <span className="navbar-logo-text">CivicMind</span>
            <span className="navbar-badge">SMART VOTER</span>
          </div>
          <div className="navbar-links">
            <a href="#roadmap" className="navbar-link">Roadmap</a>
            <a href="#timeline" className="navbar-link">Timeline</a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ───────────────────────────────────── */}
      <section className="hero container" id="hero">
        <motion.div 
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="hero-label text-brand">
            YOUR PERSONAL GUIDE TO DEMOCRACY
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="hero-title">
            Smart Voter<br />
            <span className="text-brand">Companion.</span>
          </motion.h1>
          
          <motion.p variants={fadeIn} className="hero-subtitle">
            Cut through confusion. CivicMind transforms complex election processes into a simple, step-by-step journey tailored just for you. Stay informed, prepared, and confident—every step of the way.
          </motion.p>

          <motion.div variants={fadeIn} className="hero-actions">
            <a href="#roadmap" className="btn-primary" style={{ display: 'inline-block' }}>Start Your Journey</a>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── Metrics Bar (Current Guidance) ───────────── */}
      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item" style={{ gridColumn: 'span 2' }}>
              <div className="metric-value font-mono" style={{ fontSize: '1.5rem', color: 'var(--brand-primary)' }}>
                {nextStep ? 'NEXT STEP' : 'READY TO VOTE'}
              </div>
              <div className="metric-label">
                {nextStep ? nextStep.title : `All steps completed successfully.`}
              </div>
            </div>
            <div className="metric-item">
              <div className="metric-value">{completedCount} / {stepsData.length}</div>
              <div className="metric-label">Steps Completed</div>
            </div>
            <div className="metric-item">
              <div className="metric-value">Nov 5</div>
              <div className="metric-label">Upcoming Election</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Voter Roadmap ──────────────────── */}
      <section className="features-section container" id="roadmap">
        <div className="section-header">
          <h2 className="section-title">Your Voter Roadmap</h2>
        </div>

        <motion.div 
          className="features-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stepsData.map((step, index) => {
            const isDone = completedSteps[step.id];
            const isLocked = index > 0 && !completedSteps[stepsData[index - 1].id] && !isDone;
            const isActive = nextStep?.id === step.id;

            return (
              <motion.div
                variants={fadeIn}
                key={step.id}
                className={`feature-card flat-panel`}
                style={{
                  opacity: isLocked ? 0.5 : 1,
                  borderColor: isDone ? 'var(--brand-secondary)' : isActive ? 'var(--brand-primary)' : 'var(--border-light)',
                  pointerEvents: isLocked ? 'none' : 'auto'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div className="font-mono text-brand" style={{ fontSize: '1.5rem', fontWeight: 700, color: isDone ? 'var(--brand-secondary)' : 'var(--brand-primary)' }}>
                    {isDone ? <Check size={28} /> : `0${step.id}`}
                  </div>
                  {isLocked && <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>🔒 LOCKED</span>}
                  {isActive && <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--brand-primary)' }}>✅ ACTIVE</span>}
                </div>

                <h3 className="feature-title">{step.title}</h3>
                <p className="feature-desc" style={{ marginBottom: '24px', flexGrow: 1 }}>{step.description}</p>
                
                <div style={{ padding: '16px', background: 'var(--bg-accent)', borderRadius: 'var(--radius-sm)', marginBottom: '16px' }}>
                  <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-primary)', marginBottom: '8px' }}>🎯 ACTION</div>
                  <div style={{ fontSize: '0.85rem' }}>{step.action}</div>
                </div>

                {/* Dynamic Extra Field based on content */}
                {(step.tip || step.smartFeature || step.bonus || step.feature || step.reminder) && (
                  <div style={{ padding: '12px 16px', borderLeft: '2px solid var(--brand-secondary)', background: 'rgba(19, 136, 8, 0.05)', borderRadius: 'var(--radius-sm)', marginBottom: '24px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    {step.tip && <><span className="text-brand-alt">📌 Tip:</span> {step.tip}</>}
                    {step.smartFeature && <><span className="text-brand-alt">⚡ Smart Feature:</span> {step.smartFeature}</>}
                    {step.bonus && <><span className="text-brand-alt">📱 Bonus:</span> {step.bonus}</>}
                    {step.feature && <><span className="text-brand-alt">⚙️ Feature:</span> {step.feature}</>}
                    {step.reminder && <><span className="text-brand-alt">⏰ Reminder:</span> {step.reminder}</>}
                  </div>
                )}

                {!isDone && !isLocked && (
                  <button
                    className="btn-primary"
                    style={{ width: '100%', padding: '12px', marginTop: 'auto' }}
                    onClick={() => markStepDone(step.id)}
                  >
                    Mark as Done <ChevronRight size={16} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 4 }}/>
                  </button>
                )}

                {isDone && (
                  <button 
                    className="btn-secondary" 
                    style={{ width: '100%', padding: '12px', color: 'var(--brand-secondary)', borderColor: 'var(--brand-secondary)', cursor: 'default', marginTop: 'auto' }}
                    disabled
                  >
                    <CheckCircle2 size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }}/>
                    Completed
                  </button>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ─── Timeline ───────────────────────────────── */}
      <section className="features-section container" id="timeline" style={{ paddingTop: '40px' }}>
         <div className="section-header">
          <h2 className="section-title">Election Timeline</h2>
        </div>

        <motion.div 
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineDisplay.map((event, index) => (
            <motion.div
              variants={fadeIn}
              key={index}
              className="flat-panel"
              style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '24px' }}
            >
              <div style={{ color: event.status === 'completed' ? 'var(--brand-secondary)' : 'var(--text-muted)' }}>
                {event.status === 'completed' ? <CheckCircle2 size={32} /> : <Clock size={32} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{event.title}</h3>
                  <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{event.date}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ─── Footer ───────────────────────────────────────── */}
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div className="footer-logo">
                <BrainCircuit size={24} className="text-brand" />
                <span>CivicMind</span>
              </div>
              <p className="footer-desc" style={{ marginBottom: '16px' }}>
                Democracy, Decoded. Vote Smart. Vote Confident.
              </p>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <div style={{ marginBottom: '4px' }}>✔ AI-powered step guidance</div>
                <div style={{ marginBottom: '4px' }}>✔ Personalized voter journey</div>
                <div>✔ Smart reminders & alerts</div>
              </div>
            </div>

            {/* Resources */}
            <div>
              <div className="footer-title">Helpful Resources</div>
              <a href="#" className="footer-link">Voter Registration Portal</a>
              <a href="#" className="footer-link">Polling Booth Locator</a>
              <a href="#" className="footer-link">Voter Helpline</a>
              <a href="#" className="footer-link">Election FAQs</a>
            </div>

            {/* Company */}
            <div>
              <div className="footer-title">Legal</div>
              <a href="#" className="footer-link">Privacy & Data Protection</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 CivicMind.</span>
            <span>All systems fully operational.</span>
          </div>
        </div>
      </footer>

      {/* ─── Chat Widget ────────────────────────────── */}
      <ChatWidget />
    </>
  );
}

// Temporary icon to replace CheckSquare
function CheckSquareIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
  )
}
