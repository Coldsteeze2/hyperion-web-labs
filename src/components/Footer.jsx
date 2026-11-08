import React, { useState } from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Footer({ email, t }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    sound.playBeep();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="contact" style={{ maxWidth: '850px', margin: '60px auto 0', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="glass-card" style={{ padding: '50px 30px', border: '1px solid rgba(6, 182, 212, 0.35)' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, marginBottom: '14px' }}>
            {t.footer.ctaTitle}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 32px' }}>
            {t.footer.ctaSubtitle}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button 
              onClick={handleCopy} 
              onMouseEnter={() => sound.playHover()}
              className="btn-secondary mono" 
              style={{ fontSize: '0.88rem' }}
            >
              {copied ? <CheckCircle2 size={18} color="#10b981" /> : <Terminal size={18} />}
              <span>{copied ? t.footer.copyEmail : email}</span>
            </button>
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noreferrer" 
              onMouseEnter={() => sound.playHover()}
              onClick={() => sound.playClick()}
              className="btn-primary"
            >
              {t.footer.btnWa}
            </a>
          </div>
        </div>
      </section>

      <footer className="mono" style={{ textAlign: 'center', marginTop: '80px', paddingBottom: '30px', color: '#64748b', fontSize: '0.78rem' }}>
        © {new Date().getFullYear()} Hyperion Web Labs. {t.footer.rights}
      </footer>
    </>
  );
}
