import React, { useState } from 'react';
import { CornerDownLeft, Trash2 } from 'lucide-react';
import { sound } from '../utils/audio';

export default function DevConsole({ setCurrentPage, email }) {
  const [inputVal, setInputVal] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'system', text: 'Hyperion DevConsole v2.4 initialized.' },
    { type: 'system', text: 'Sayfalar arası geçiş için "goto projects" veya komutlar için "help" yazın.' }
  ]);

  const executeCommand = (cmdText) => {
    const cleanCmd = cmdText.trim().toLowerCase();
    if (!cleanCmd) return;

    sound.playBeep();
    const newLogs = [...terminalLogs, { type: 'user', text: `$ ${cleanCmd}` }];

    if (cleanCmd.startsWith('goto ')) {
      const target = cleanCmd.replace('goto ', '').trim();
      if (['home', 'projects', 'why-us', 'services'].includes(target)) {
        setCurrentPage(target);
        newLogs.push({ type: 'response', text: `Yönlendiriliyor: ${target.toUpperCase()}` });
      } else {
        newLogs.push({ type: 'error', text: `Geçersiz sayfa. Seçenekler: home, projects, why-us, services` });
      }
    } else {
      switch (cleanCmd) {
        case 'help':
          newLogs.push({ 
            type: 'response', 
            text: 'KOMUTLAR:\n- goto [home|projects|why-us|services]: Sayfayı değiştirir\n- projects: Canlı projeleri listeler\n- stack: Altyapı teknolojilerini gösterir\n- contact: İletişim adresini verir\n- clear: Terminali temizler' 
          });
          break;
        case 'projects':
          newLogs.push({ 
            type: 'response', 
            text: '1. Cyberpunk Night City HUD (Canlıda: cyberpuk-t-rkiye.onrender.com)\n2. Hyperion Web Labs Platform' 
          });
          break;
        case 'stack':
          newLogs.push({ 
            type: 'response', 
            text: 'CORE: React 19, Vite 6, Web Audio API, Global Edge CDN.' 
          });
          break;
        case 'contact':
          newLogs.push({ 
            type: 'response', 
            text: `E-Posta: ${email} | WhatsApp ile anında proje başlatabilirsiniz.` 
          });
          break;
        case 'clear':
          setTerminalLogs([]);
          setInputVal('');
          return;
        default:
          newLogs.push({ 
            type: 'error', 
            text: `'${cleanCmd}' komutu bulunamadı. Komutlar için 'help' yazın.` 
          });
          break;
      }
    }

    setTerminalLogs(newLogs);
    setInputVal('');
  };

  return (
    <div className="glass-card" style={{ marginTop: '40px', padding: '24px', background: '#040711' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <span className="mono" style={{ fontSize: '0.75rem', color: '#64748b' }}>INTERACTIVE CLI TERMINAL</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['help', 'projects', 'stack'].map(c => (
            <button 
              key={c}
              onClick={() => executeCommand(c)}
              onMouseEnter={() => sound.playHover()}
              className="mono"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#38bdf8',
                padding: '3px 8px',
                borderRadius: '5px',
                fontSize: '0.72rem',
                cursor: 'pointer'
              }}
            >
              {c}
            </button>
          ))}
          <button 
            onClick={() => executeCommand('clear')}
            onMouseEnter={() => sound.playHover()}
            className="mono"
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              color: '#ef4444',
              padding: '3px 8px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            <Trash2 size={12} />
          </button>
        </div>
      </div>

      <div className="mono" style={{ minHeight: '110px', maxHeight: '180px', overflowY: 'auto', fontSize: '0.85rem', color: '#38bdf8', lineHeight: 1.6 }}>
        {terminalLogs.map((log, i) => (
          <div key={i} style={{ 
            color: log.type === 'user' ? '#f8fafc' : log.type === 'error' ? '#ef4444' : log.type === 'response' ? '#38bdf8' : '#64748b',
            whiteSpace: 'pre-wrap',
            margin: '3px 0'
          }}>
            {log.text}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '10px', marginTop: '14px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '12px' }}>
        <input 
          type="text" 
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && executeCommand(inputVal)}
          placeholder="Komut yazın (örn: 'goto projects' veya 'help')..."
          className="mono"
          style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '8px', color: '#fff', outline: 'none' }}
        />
        <button 
          onClick={() => executeCommand(inputVal)} 
          onMouseEnter={() => sound.playHover()}
          className="btn-primary" 
          style={{ padding: '8px 16px' }}
        >
          <CornerDownLeft size={16} />
        </button>
      </div>
    </div>
  );
}

