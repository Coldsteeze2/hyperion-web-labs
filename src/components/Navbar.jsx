import React, { useState } from 'react';
import { Terminal, Volume2, VolumeX, Globe, Radio, Play, Pause } from 'lucide-react';
import { sound } from '../utils/audio';

export default function Navbar({ 
  currentPage, 
  setCurrentPage, 
  onOpenContact, 
  lang, 
  setLang, 
  t, 
  isBgmPlaying, 
  toggleBgm 
}) {
  const [audioActive, setAudioActive] = useState(true);

  const tabs = [
    { id: 'home', label: t.nav.home },
    { id: 'projects', label: t.nav.projects },
    { id: 'media', label: lang === 'tr' ? 'Medya Lab' : 'Media Lab' },
    { id: 'why-us', label: t.nav.whyUs },
    { id: 'services', label: t.nav.services }
  ];

  const toggleSound = () => {
    const newState = !audioActive;
    setAudioActive(newState);
    sound.enabled = newState;
    if (newState) sound.playClick();
  };

  const toggleLang = () => {
    sound.playClick();
    setLang(lang === 'tr' ? 'en' : 'tr');
  };

  const handleTabClick = (tabId) => {
    sound.playClick();
    setCurrentPage(tabId);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'rgba(5, 7, 12, 0.92)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div style={{
        maxWidth: '1240px',
        margin: '0 auto',
        padding: '10px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {/* Logo */}
        <div 
          onClick={() => handleTabClick('home')}
          onMouseEnter={() => sound.playHover()}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #06b6d4, #0284c7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 16px rgba(6, 182, 212, 0.35)'
          }}>
            <Terminal size={18} color="#030712" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.5px' }}>HYPERION</div>
            <div className="mono" style={{ fontSize: '0.58rem', color: '#06b6d4', letterSpacing: '2px', marginTop: '-3px' }}>WEB LABS</div>
          </div>
        </div>

        {/* Sağ Taraf: Müzik, HUD, Dil ve İletişim */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          
          {/* Müzik Butonu */}
          <button
            onClick={(e) => toggleBgm(e)}
            onMouseEnter={() => sound.playHover()}
            title={isBgmPlaying ? "Müziği Durdur" : "Müziği Başlat"}
            className="mono"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              background: isBgmPlaying ? 'rgba(168, 85, 247, 0.22)' : 'rgba(255, 255, 255, 0.05)',
              border: isBgmPlaying ? '1px solid #c084fc' : '1px solid rgba(255, 255, 255, 0.12)',
              color: isBgmPlaying ? '#c084fc' : '#94a3b8',
              padding: '6px 10px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.72rem',
              fontWeight: 700
            }}
          >
            {isBgmPlaying ? <Pause size={13} fill="#c084fc" /> : <Play size={13} fill="#94a3b8" />}
            <span>{isBgmPlaying ? 'SES: AÇIK' : 'SES: KAPALI'}</span>
          </button>

          {/* HUD Ping */}
          <div className="mono" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            color: '#10b981',
            padding: '6px 8px',
            borderRadius: '8px',
            fontSize: '0.68rem',
            fontWeight: 700
          }}>
            <Radio size={11} />
            <span>14ms</span>
          </div>

          {/* Dil */}
          <button
            onClick={toggleLang}
            onMouseEnter={() => sound.playHover()}
            className="mono"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(6, 182, 212, 0.35)',
              color: '#38bdf8',
              padding: '6px 8px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.72rem',
              fontWeight: 700
            }}
          >
            {lang.toUpperCase()}
          </button>

          {/* Bip Ses Efekti */}
          <button
            onClick={toggleSound}
            title={audioActive ? "Efekt Seslerini Kapat" : "Efekt Seslerini Aç"}
            className="mono"
            style={{
              background: audioActive ? 'rgba(6, 182, 212, 0.12)' : 'rgba(255, 255, 255, 0.04)',
              border: audioActive ? '1px solid rgba(6, 182, 212, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
              color: audioActive ? '#38bdf8' : '#64748b',
              padding: '6px 8px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            {audioActive ? <Volume2 size={14} /> : <VolumeX size={14} />}
          </button>

          {/* İletişim */}
          <button 
            onClick={() => {
              sound.playClick();
              onOpenContact();
            }}
            onMouseEnter={() => sound.playHover()}
            className="btn-primary" 
            style={{ padding: '6px 14px', fontSize: '0.78rem' }}
          >
            {t.nav.contact}
          </button>
        </div>

        {/* Sekmeler (Mobilde yatay akıcı kaydırma) */}
        <nav style={{
          width: '100%',
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '2px',
          scrollbarWidth: 'none'
        }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              onMouseEnter={() => sound.playHover()}
              className="mono"
              style={{
                flexShrink: 0,
                background: currentPage === tab.id ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                color: currentPage === tab.id ? '#38bdf8' : '#94a3b8',
                border: currentPage === tab.id ? '1px solid rgba(6, 182, 212, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
