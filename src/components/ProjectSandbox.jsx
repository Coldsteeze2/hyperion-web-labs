import React from 'react';
import { Maximize2 } from 'lucide-react';
import { sound } from '../utils/audio';

export default function ProjectSandbox({ t }) {
  return (
    <div>
      <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div className="mono" style={{ color: '#06b6d4', fontSize: '0.78rem', letterSpacing: '2px' }}>{t.sandbox.tag}</div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginTop: '4px' }}>{t.sandbox.title}</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '4px' }}>
            {t.sandbox.subtitle}
          </p>
        </div>
        <a 
          href="https://cyberpuk-t-rkiye.onrender.com" 
          target="_blank" 
          rel="noreferrer"
          onMouseEnter={() => sound.playHover()}
          onClick={() => sound.playClick()}
          className="btn-secondary"
          style={{ fontSize: '0.8rem', padding: '8px 16px' }}
        >
          <span>{t.sandbox.btnOpen}</span>
          <Maximize2 size={14} />
        </a>
      </div>

      <div className="glass-card" style={{ padding: '14px', marginBottom: '36px', border: '1px solid rgba(6, 182, 212, 0.4)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 6px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#eab308' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
          </div>
          <div className="mono" style={{ fontSize: '0.75rem', color: '#64748b' }}>
            https://cyberpuk-t-rkiye.onrender.com (CANLI SANDBOX)
          </div>
          <span className="mono" style={{ fontSize: '0.7rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            INTERACTIVE
          </span>
        </div>

        <div style={{
          height: '620px',
          borderRadius: '10px',
          overflow: 'hidden',
          marginTop: '12px',
          backgroundColor: '#000',
          border: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <iframe 
            src="https://cyberpuk-t-rkiye.onrender.com" 
            title="Cyberpunk Live Demo"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            loading="lazy"
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        <div className="glass-card" style={{ padding: '24px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#38bdf8' }}>{t.sandbox.card1Title}</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>{t.sandbox.card1Desc}</p>
        </div>

        <div className="glass-card" style={{ padding: '24px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', color: '#a855f7' }}>{t.sandbox.card2Title}</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>{t.sandbox.card2Desc}</p>
        </div>
      </div>
    </div>
  );
}
