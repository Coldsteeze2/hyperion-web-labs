import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, email, t }) {
  const [name, setName] = useState('');
  const [projectType, setProjectType] = useState(t.modal.typeOpt1);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSend = () => {
    const text = `Hyperion Web Labs Consultation%0A%0AName / Org: ${name || 'N/A'}%0AProject Type: ${projectType}%0ANotes: ${notes || 'Ready to initiate discussion.'}`;
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(3, 5, 10, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="glass-card" style={{
        maxWidth: '520px',
        width: '100%',
        padding: '32px',
        border: '1px solid rgba(6, 182, 212, 0.4)',
        boxShadow: '0 25px 60px rgba(0,0,0,0.8)',
        position: 'relative'
      }}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        <div className="mono" style={{ color: '#06b6d4', fontSize: '0.75rem', letterSpacing: '2px', marginBottom: '6px' }}>
          {t.modal.tag}
        </div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '8px' }}>
          {t.modal.title}
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginBottom: '24px', lineHeight: 1.5 }}>
          {t.modal.subtitle}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
              {t.modal.nameLabel}
            </label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.modal.namePlaceholder}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '10px 14px',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            />
          </div>

          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
              {t.modal.typeLabel}
            </label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              style={{
                width: '100%',
                background: '#090e1a',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '10px 14px',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none'
              }}
            >
              <option value={t.modal.typeOpt1}>{t.modal.typeOpt1}</option>
              <option value={t.modal.typeOpt2}>{t.modal.typeOpt2}</option>
              <option value={t.modal.typeOpt3}>{t.modal.typeOpt3}</option>
              <option value={t.modal.typeOpt4}>{t.modal.typeOpt4}</option>
            </select>
          </div>

          <div>
            <label style={{ fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
              {t.modal.notesLabel}
            </label>
            <textarea 
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t.modal.notesPlaceholder}
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '8px',
                padding: '10px 14px',
                color: '#fff',
                fontSize: '0.9rem',
                outline: 'none',
                resize: 'none'
              }}
            />
          </div>

          <button 
            onClick={handleWhatsAppSend}
            className="btn-primary"
            style={{ width: '100%', padding: '12px', marginTop: '8px' }}
          >
            <Send size={16} />
            <span>{t.modal.btnSend}</span>
          </button>

          <div style={{ textAlign: 'center', marginTop: '6px' }}>
            <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{t.modal.emailOr} </span>
            <button 
              onClick={handleCopy}
              className="mono"
              style={{
                background: 'none',
                border: 'none',
                color: '#38bdf8',
                fontSize: '0.78rem',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              {copied ? 'Kopyalandı!' : email}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
