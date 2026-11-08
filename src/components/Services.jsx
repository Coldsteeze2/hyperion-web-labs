import React from 'react';
import { MonitorCheck, Cpu, Server } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Services({ t }) {
  const icons = [<MonitorCheck size={26} />, <Cpu size={26} />, <Server size={26} />];
  const colors = ["#06b6d4", "#a855f7", "#3b82f6"];
  const bgs = ["rgba(6, 182, 212, 0.1)", "rgba(168, 85, 247, 0.1)", "rgba(59, 130, 246, 0.1)"];

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="mono" style={{ color: '#06b6d4', fontSize: '0.78rem', letterSpacing: '2px' }}>{t.services.tag}</div>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginTop: '4px' }}>{t.services.title}</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
        {t.services.items.map((s, idx) => (
          <div 
            key={idx} 
            className="glass-card" 
            onMouseEnter={() => sound.playHover()}
            style={{ padding: '32px' }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: bgs[idx], display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: colors[idx] }}>
              {icons[idx]}
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '10px' }}>{s.title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '16px' }}>{s.desc}</p>
            <div className="mono" style={{ fontSize: '0.78rem', color: colors[idx] }}>{s.features}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
