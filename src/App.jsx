import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Globe2, 
  Mail, 
  Search, 
  MessageSquare, 
  UtensilsCrossed, 
  Shirt, 
  Building2,
  Cpu,
  Radio,
  Power,
  Activity
} from 'lucide-react';
import Navbar from './components/Navbar';
import DevConsole from './components/DevConsole';
import ProjectSandbox from './components/ProjectSandbox';
import MediaLab from './components/MediaLab';
import Comparison from './components/Comparison';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CyberCanvas from './components/CyberCanvas';
import { sound } from './utils/audio';
import { translations } from './locales/translations';
import bgmUrl from './music.mp3';

// Müzik nesnesi tekil başlatılır
const bgmTrack = new Audio(bgmUrl);
bgmTrack.loop = true;
bgmTrack.volume = 0.35;

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [lang, setLang] = useState('tr');
  const [activeMockupTab, setActiveMockupTab] = useState('ecommerce');
  const [isBgmPlaying, setIsBgmPlaying] = useState(false);
  
  // Fütüristik Giriş Durumları
  const [isEntered, setIsEntered] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);
  const [syncLog, setSyncLog] = useState("AĞ BEKLEMEDE // STANDBY");
  const [isExiting, setIsExiting] = useState(false);

  const email = "contact@hyperionlabs.dev";
  const t = translations[lang] || translations.tr;

  // AĞA BAĞLAN PROTOKOLÜ (Siber Tarama ve Ses Tetikleme)
  const handleEnterSystem = () => {
    if (connecting) return;
    sound.playClick();
    sound.playBeep();
    setConnecting(true);

    // Müziği çal
    bgmTrack.play()
      .then(() => setIsBgmPlaying(true))
      .catch((err) => console.log("Audio lock:", err));

    const logs = [
      { p: 20, msg: "INITIALIZING HYPERION KERNEL..." },
      { p: 48, msg: "SYNCHRONIZING EDGE AUDIO BUFFER..." },
      { p: 75, msg: "BYPASSING CLOUDFLARE NODE 14ms..." },
      { p: 92, msg: "ESTABLISHING NEURAL UI LINK..." },
      { p: 100, msg: "ACCESS GRANTED // WELCOME TO GRID" }
    ];

    let step = 0;
    const interval = setInterval(() => {
      if (step < logs.length) {
        setSyncProgress(logs[step].p);
        setSyncLog(logs[step].msg);
        sound.playHover();
        step++;
      } else {
        clearInterval(interval);
        sound.playBeep();
        setIsExiting(true);
        setTimeout(() => {
          setIsEntered(true);
        }, 500);
      }
    }, 240);
  };

  // Navbar'dan müzik kontrolü
  const toggleBgm = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    sound.playClick();

    if (!bgmTrack.paused) {
      bgmTrack.pause();
      setIsBgmPlaying(false);
    } else {
      bgmTrack.play()
        .then(() => setIsBgmPlaying(true))
        .catch((err) => console.error(err));
    }
  };

  const showcaseSites = {
    ecommerce: {
      tag: 'E-TİCARET & GİYİM MARKASI',
      domain: 'https://vogue-atelier.com',
      title: 'Aura Minimalist Moda & Koleksiyon Vitrini',
      desc: 'Lüks giyim markaları için özel sepet akışı, 60 FPS akıcı ürün filtreleme ve mobil odaklı sipariş arayüzü.',
      heroTitle: 'YENİ SEZON MONOCHROME KOLEKSİYONU',
      accent: '#38bdf8',
      accentBg: 'rgba(56, 189, 248, 0.1)',
      stats: ['0.18s Açılış', 'Mobil Ödeme Hazır', '3D Ürün Önizleme']
    },
    restaurant: {
      tag: 'RESTORAN & GASTRONOMİ',
      domain: 'https://lumina-bistro.com',
      title: 'Lumina Fine Dining & Dijital Rezervasyon',
      desc: 'Restoran ve kafeler için etkileyici dijital menü, tek tıkla WhatsApp masası ayırtma ve anlık yol tarifi.',
      heroTitle: 'MODERN MUTFAK SANATI & ÖZEL TATLAR',
      accent: '#eab308',
      accentBg: 'rgba(234, 179, 8, 0.1)',
      stats: ['Dinamik QR Menü', 'Anlık WhatsApp Rezervasyon', 'Google Harita Entegre']
    },
    corporate: {
      tag: 'KURUMSAL & DANIŞMANLIK',
      domain: 'https://vanguard-consulting.com',
      title: 'Vanguard Stratejik Yönetim & Hukuk Vitrini',
      desc: 'B2B şirketlerin kurumsal itibarını ve güvenilirliğini en üst seviyeye taşıyan prestijli kurumsal portal.',
      heroTitle: 'GELECEĞİN YATIRIM STRATEJİLERİ',
      accent: '#a855f7',
      accentBg: 'rgba(168, 85, 247, 0.1)',
      stats: ['Kurumsal E-Posta Dahil', 'Uluslararası Çoklu Dil', 'Entegre Teklif Formu']
    }
  };

  const currentMockup = showcaseSites[activeMockupTab];

  return (
    <div className="grid-overlay" style={{ minHeight: '100vh', position: 'relative' }}>
      
      {/* ----------------- MOBİL UYUMLU FÜTÜRİSTİK SİBER GİRİŞ KAPISI ----------------- */}
      {!isEntered && (
        <div 
          className={isExiting ? "cyber-exit" : ""}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#030712',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            backgroundImage: 'radial-gradient(circle at center, rgba(6, 182, 212, 0.14) 0%, #030712 80%)'
          }}
        >
          {/* Siber Arka Plan Parçacıkları */}
          <CyberCanvas />

          {/* Tarama Çizgisi */}
          <div className="scanline-bar" />

          <div 
            className="cyber-door-card"
            style={{
              position: 'relative',
              zIndex: 10,
              maxWidth: '520px',
              width: '100%',
              textAlign: 'center',
              background: 'rgba(5, 9, 20, 0.88)',
              border: connecting ? '1px solid #38bdf8' : '1px solid rgba(6, 182, 212, 0.35)',
              borderRadius: '24px',
              padding: '40px 30px',
              backdropFilter: 'blur(25px)',
              boxShadow: connecting 
                ? '0 0 70px rgba(6, 182, 212, 0.45)' 
                : '0 20px 60px rgba(0, 0, 0, 0.8)'
            }}
          >
            {/* Üst HUD Protokolü */}
            <div className="mono" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              background: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              borderRadius: '999px',
              color: '#38bdf8',
              fontSize: '0.72rem',
              marginBottom: '20px'
            }}>
              <Radio size={12} style={{ animation: 'spin 3s linear infinite' }} />
              <span>HYPERION OS // EDGE PROTOCOL</span>
            </div>

            {/* Logo */}
            <div style={{
              width: '60px',
              height: '60px',
              margin: '0 auto 18px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #06b6d4, #2563eb)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 28px rgba(6, 182, 212, 0.55)'
            }}>
              <Cpu size={30} color="#030712" strokeWidth={2.5} />
            </div>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.5px', marginBottom: '8px' }}>
              HYPERION WEB LABS
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '24px' }}>
              {connecting 
                ? 'Siber ağ tüneli senkronize ediliyor. Güvenlik anahtarları doğrulanıyor...' 
                : 'Yeni nesil dijital ajans motoru, Web Audio ses sentezleyici ve reaktif arayüz bileşenleri hazır.'}
            </p>

            {/* Canlı İlerleme Çubuğu */}
            {connecting && (
              <div style={{ marginBottom: '20px' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '6px'
                }}>
                  <span className="mono" style={{ fontSize: '0.68rem', color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Activity size={12} />
                    {syncLog}
                  </span>
                  <span className="mono" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#38bdf8' }}>
                    %{syncProgress}
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '5px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '999px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${syncProgress}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #06b6d4, #38bdf8)',
                    boxShadow: '0 0 10px #38bdf8',
                    transition: 'width 0.2s ease'
                  }} />
                </div>
              </div>
            )}

            {/* AĞA BAĞLAN BUTONU */}
            <button
              onClick={handleEnterSystem}
              onMouseEnter={() => sound.playHover()}
              disabled={connecting}
              style={{
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                background: connecting 
                  ? 'rgba(6, 182, 212, 0.15)' 
                  : 'linear-gradient(135deg, #06b6d4, #2563eb)',
                border: '1px solid #38bdf8',
                color: '#fff',
                fontSize: '0.9rem',
                fontWeight: 800,
                cursor: connecting ? 'wait' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                letterSpacing: '1px',
                boxShadow: connecting ? 'none' : '0 0 25px rgba(6, 182, 212, 0.45)',
                transition: 'all 0.2s ease'
              }}
            >
              <Power size={17} />
              <span>{connecting ? 'AŞIRI YÜKLEME...' : 'AĞA BAĞLAN // CONNECT TO GRID'}</span>
            </button>

            <div className="mono" style={{ color: '#64748b', fontSize: '0.68rem', marginTop: '14px' }}>
              {connecting ? '[GÜVENLİK DUVARI AŞILIYOR]' : '[SES MOTORU & MÜZİK AKTİF EDİLECEK]'}
            </div>
          </div>
        </div>
      )}

      {/* ----------------- ANA SİTE İÇERİĞİ ----------------- */}
      <div className="glow-ambient" style={{ top: '-100px', left: '20%', width: '600px', height: '400px', background: 'rgba(6, 182, 212, 0.15)' }} />
      <div className="glow-ambient" style={{ top: '40%', right: '5%', width: '500px', height: '500px', background: 'rgba(168, 85, 247, 0.12)' }} />

      {/* Navigasyon */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        onOpenContact={() => setIsContactOpen(true)}
        lang={lang}
        setLang={setLang}
        t={t}
        isBgmPlaying={isBgmPlaying}
        toggleBgm={toggleBgm}
      />

      {/* Ana Gövde */}
      <main style={{ maxWidth: '1180px', margin: '0 auto', padding: '30px 18px', position: 'relative', zIndex: 1 }}>
        
        {currentPage === 'home' && (
          <div>
            {/* HERO */}
            <section style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              padding: '65px 20px 50px',
              textAlign: 'center',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              background: 'rgba(4, 7, 17, 0.75)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
            }}>
              
              <CyberCanvas />

              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, transparent 30%, rgba(3, 7, 18, 0.85) 100%)',
                zIndex: 1,
                pointerEvents: 'none'
              }} />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <div className="mono" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '5px 14px',
                  borderRadius: '999px',
                  background: 'rgba(6, 182, 212, 0.1)',
                  border: '1px solid rgba(6, 182, 212, 0.35)',
                  color: '#38bdf8',
                  fontSize: '0.75rem',
                  marginBottom: '20px'
                }}>
                  <Sparkles size={13} />
                  {lang === 'tr' ? 'MARKANIZA ÖZEL SIFIRDAN WEB GELİŞTİRME' : 'BESPOKE WEB DESIGN & CODE STUDIO'}
                </div>

                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-1px', marginBottom: '18px' }}>
                  {lang === 'tr' ? 'Markanızı Sıradanlıktan Kurtarın.' : 'Ditch Generic Templates.'} <br/>
                  <span style={{ background: 'linear-gradient(90deg, #38bdf8, #818cf8, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {lang === 'tr' ? 'Sıfırdan Kodlanan Özel Siteler Kuruyoruz.' : 'We Build Custom Sites From Scratch.'}
                  </span>
                </h1>

                <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '700px', margin: '0 auto 30px', lineHeight: 1.6 }}>
                  {lang === 'tr' 
                    ? 'Hazır kalıplar ve kasan WordPress temaları yerine markanızın kimliğine özel, telefonlarda yağ gibi kayan, Google uyumlu ve anahtar teslim web siteleri inşa ediyoruz.'
                    : 'We engineer blazing-fast, custom-tailored websites for businesses that want to stand out from generic page builders.'}
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <button 
                    onClick={() => {
                      sound.playClick();
                      setIsContactOpen(true);
                    }} 
                    onMouseEnter={() => sound.playHover()}
                    className="btn-primary"
                    style={{ padding: '12px 28px', fontSize: '0.9rem' }}
                  >
                    <span>{lang === 'tr' ? 'Markanız İçin Teklif Alın' : 'Start Your Project'}</span>
                    <ArrowRight size={17} />
                  </button>
                  <button 
                    onClick={() => {
                      sound.playClick();
                      setCurrentPage('projects');
                    }} 
                    onMouseEnter={() => sound.playHover()}
                    className="btn-secondary"
                    style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                  >
                    <span>{lang === 'tr' ? 'Canlı Yazılım Laboratuvarı' : 'Interactive Sandbox'}</span>
                  </button>
                </div>
              </div>
            </section>

            {/* BROWSER SHOWCASE */}
            <section style={{ marginTop: '60px' }}>
              <div style={{ textAlign: 'center', marginBottom: '26px' }}>
                <div className="mono" style={{ color: '#06b6d4', fontSize: '0.75rem', letterSpacing: '2px' }}>
                  {lang === 'tr' ? 'CANLI PROJE MOCKUP VİTRİNİ' : 'INTERACTIVE PORTFOLIO'}
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '6px' }}>
                  {lang === 'tr' ? 'Hangi Sektöre Nasıl Bir Site Yapıyoruz?' : 'Explore What We Build'}
                </h2>
              </div>

              {/* Sektör Butonları */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => { sound.playClick(); setActiveMockupTab('ecommerce'); }}
                  onMouseEnter={() => sound.playHover()}
                  className="mono"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    background: activeMockupTab === 'ecommerce' ? 'rgba(56, 189, 248, 0.18)' : 'rgba(255,255,255,0.03)',
                    border: activeMockupTab === 'ecommerce' ? '1px solid #38bdf8' : '1px solid rgba(255,255,255,0.08)',
                    color: activeMockupTab === 'ecommerce' ? '#38bdf8' : '#94a3b8',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  <Shirt size={15} />
                  <span>E-Ticaret</span>
                </button>

                <button
                  onClick={() => { sound.playClick(); setActiveMockupTab('restaurant'); }}
                  onMouseEnter={() => sound.playHover()}
                  className="mono"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    background: activeMockupTab === 'restaurant' ? 'rgba(234, 179, 8, 0.18)' : 'rgba(255,255,255,0.03)',
                    border: activeMockupTab === 'restaurant' ? '1px solid #eab308' : '1px solid rgba(255,255,255,0.08)',
                    color: activeMockupTab === 'restaurant' ? '#eab308' : '#94a3b8',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  <UtensilsCrossed size={15} />
                  <span>Restoran / Menü</span>
                </button>

                <button
                  onClick={() => { sound.playClick(); setActiveMockupTab('corporate'); }}
                  onMouseEnter={() => sound.playHover()}
                  className="mono"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    background: activeMockupTab === 'corporate' ? 'rgba(168, 85, 247, 0.18)' : 'rgba(255,255,255,0.03)',
                    border: activeMockupTab === 'corporate' ? '1px solid #a855f7' : '1px solid rgba(255,255,255,0.08)',
                    color: activeMockupTab === 'corporate' ? '#a855f7' : '#94a3b8',
                    fontSize: '0.8rem',
                    fontWeight: 600
                  }}
                >
                  <Building2 size={15} />
                  <span>Kurumsal</span>
                </button>
              </div>

              {/* Tarayıcı Mockup Frame */}
              <div className="glass-card" style={{
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                overflow: 'hidden',
                backgroundColor: '#050811'
              }}>
                <div style={{
                  padding: '10px 14px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px'
                }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#eab308' }} />
                    <span style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
                  </div>

                  <div className="mono" style={{
                    flex: '1',
                    maxWidth: '420px',
                    background: 'rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    fontSize: '0.72rem',
                    color: '#94a3b8',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{ color: '#10b981' }}>🔒</span>
                    <span style={{ color: '#f8fafc', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{currentMockup.domain}</span>
                  </div>

                  <span className="mono" style={{ fontSize: '0.68rem', color: currentMockup.accent, fontWeight: 700 }}>
                    {currentMockup.tag}
                  </span>
                </div>

                <div style={{ padding: '32px 18px', textAlign: 'center' }}>
                  <div style={{ maxWidth: '740px', margin: '0 auto' }}>
                    <span className="mono" style={{
                      display: 'inline-block',
                      padding: '3px 10px',
                      borderRadius: '6px',
                      background: currentMockup.accentBg,
                      color: currentMockup.accent,
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      marginBottom: '12px'
                    }}>
                      {currentMockup.title}
                    </span>

                    <h3 style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', fontWeight: 800, marginBottom: '10px' }}>
                      {currentMockup.heroTitle}
                    </h3>

                    <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '22px' }}>
                      {currentMockup.desc}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '24px' }}>
                      {currentMockup.stats.map((s, idx) => (
                        <div key={idx} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#e2e8f0',
                          fontSize: '0.78rem',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '5px 12px',
                          borderRadius: '8px'
                        }}>
                          <CheckCircle2 size={14} color={currentMockup.accent} />
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        sound.playClick();
                        setIsContactOpen(true);
                      }}
                      onMouseEnter={() => sound.playHover()}
                      className="btn-primary"
                      style={{ padding: '10px 22px', fontSize: '0.85rem' }}
                    >
                      <span>Bu Kalitede Bir Site Yapın</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* GÜVEN KARTLARI */}
            <section style={{ marginTop: '65px' }}>
              <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <div className="mono" style={{ color: '#10b981', fontSize: '0.75rem', letterSpacing: '2px' }}>
                  {lang === 'tr' ? 'ANAHTAR TESLİM HİZMET KAPSAMI' : 'FULL TURNKEY SCOPE'}
                </div>
                <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '6px' }}>
                  {lang === 'tr' ? 'Siz Sadece İsteyin, Gerisini Bize Bırakın' : 'Everything Handled For Your Brand'}
                </h2>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '16px'
              }}>
                <div className="glass-card" style={{ padding: '22px' }}>
                  <Globe2 size={26} color="#06b6d4" style={{ marginBottom: '12px' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Alan Adı (.com) &amp; DNS</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    İstediğiniz alan adını seçiyoruz, küresel CDN sunucularına sıfır hatayla bağlıyoruz.
                  </p>
                </div>

                <div className="glass-card" style={{ padding: '22px' }}>
                  <ShieldCheck size={26} color="#10b981" style={{ marginBottom: '12px' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>256-Bit SSL Güvenliği</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    Sitenizin güvenliğini sağlayan yeşil kilit SSL sertifikası ömür boyu aktif kalır.
                  </p>
                </div>

                <div className="glass-card" style={{ padding: '22px' }}>
                  <Mail size={26} color="#a855f7" style={{ marginBottom: '12px' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Kurumsal E-Posta</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    Markanıza özel info@sirketiniz.com e-posta adreslerinizin kurulumu yapılır.
                  </p>
                </div>

                <div className="glass-card" style={{ padding: '22px' }}>
                  <Search size={26} color="#eab308" style={{ marginBottom: '12px' }} />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>Google SEO Kaydı</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    Arama motoru indeksleme ayarları yapılarak aramalarda bulunmanız sağlanır.
                  </p>
                </div>
              </div>
            </section>

            {/* WHATSAPP ÇAĞRISI */}
            <section style={{
              marginTop: '70px',
              padding: '38px 20px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.12), rgba(168, 85, 247, 0.12))',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '10px' }}>
                Aklınızdaki Web Sitesi Projesini Konuşalım
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', maxWidth: '560px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                İhtiyacınızı WhatsApp'tan yazın, markanız için en uygun site mimarisini ve yol haritasını anında çıkaralım.
              </p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <a 
                  href="https://wa.me/" 
                  target="_blank" 
                  rel="noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <MessageSquare size={17} />
                  <span>WhatsApp ile Fikir Danışın</span>
                </a>
                <button
                  onClick={() => {
                    sound.playClick();
                    setIsContactOpen(true);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className="btn-secondary"
                  style={{ padding: '12px 22px', fontSize: '0.88rem' }}
                >
                  <span>Teknik Formu Doldur</span>
                </button>
              </div>
            </section>

            {/* Konsol */}
            <DevConsole setCurrentPage={setCurrentPage} email={email} />
          </div>
        )}

        {currentPage === 'projects' && <ProjectSandbox t={t} />}
        {currentPage === 'media' && <MediaLab t={t} />}
        {currentPage === 'why-us' && <Comparison t={t} />}
        {currentPage === 'services' && <Services t={t} />}

      </main>

      {/* Alt Bilgi */}
      <Footer email={email} t={t} />

      {/* İletişim Modalı */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => {
          sound.playClick();
          setIsContactOpen(false);
        }} 
        email={email} 
        t={t}
      />

    </div>
  );
}
