import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Comparison({ t }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    sound.playClick();
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="mono" style={{ color: '#06b6d4', fontSize: '0.78rem', letterSpacing: '2px' }}>{t.comparison.tag}</div>
        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginTop: '4px' }}>{t.comparison.title}</h2>
        <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '600px', margin: '8px auto 0' }}>
          {t.comparison.subtitle}
        </p>
      </div>

      {/* Tablo */}
      <div className="glass-card" style={{ padding: '32px', overflowX: 'auto', marginBottom: '40px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '16px', color: '#64748b', fontSize: '0.85rem' }} className="mono">{t.comparison.colCrit}</th>
              <th style={{ padding: '16px', color: '#ef4444', fontSize: '0.9rem' }}>{t.comparison.colOld}</th>
              <th style={{ padding: '16px', color: '#06b6d4', fontSize: '1rem', fontWeight: 800 }}>{t.comparison.colHyper}</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: '0.92rem' }}>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '16px', fontWeight: 600 }}>{t.comparison.row1Label}</td>
              <td style={{ padding: '16px', color: '#f87171' }}>{t.comparison.row1Old}</td>
              <td style={{ padding: '16px', color: '#38bdf8', fontWeight: 700 }}>{t.comparison.row1Hyper}</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '16px', fontWeight: 600 }}>{t.comparison.row2Label}</td>
              <td style={{ padding: '16px', color: '#f87171' }}>{t.comparison.row2Old}</td>
              <td style={{ padding: '16px', color: '#38bdf8', fontWeight: 700 }}>{t.comparison.row2Hyper}</td>
            </tr>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <td style={{ padding: '16px', fontWeight: 600 }}>{t.comparison.row3Label}</td>
              <td style={{ padding: '16px', color: '#f87171' }}>{t.comparison.row3Old}</td>
              <td style={{ padding: '16px', color: '#38bdf8', fontWeight: 700 }}>{t.comparison.row3Hyper}</td>
            </tr>
            <tr>
              <td style={{ padding: '16px', fontWeight: 600 }}>{t.comparison.row4Label}</td>
              <td style={{ padding: '16px', color: '#f87171' }}>{t.comparison.row4Old}</td>
              <td style={{ padding: '16px', color: '#38bdf8', fontWeight: 700 }}>{t.comparison.row4Hyper}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* S.S.S. */}
      <div style={{ marginTop: '50px' }}>
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="mono" style={{ color: '#06b6d4', fontSize: '0.78rem', letterSpacing: '2px' }}>{t.comparison.faqTag}</div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4px' }}>{t.comparison.faqTitle}</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '800px', margin: '0 auto' }}>
          {t.comparison.faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="glass-card" 
              onClick={() => toggleFaq(idx)}
              onMouseEnter={() => sound.playHover()}
              style={{ padding: '20px 24px', cursor: 'pointer', transition: '0.2s' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <span style={{ fontWeight: 700, fontSize: '1rem', color: '#f1f5f9' }}>{faq.q}</span>
                {activeFaq === idx ? <ChevronUp size={18} color="#06b6d4" /> : <ChevronDown size={18} color="#64748b" />}
              </div>
              {activeFaq === idx && (
                <p style={{ marginTop: '14px', color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
