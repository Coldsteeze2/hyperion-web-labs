class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.bgmAudio = null;
    this.bgmPlaying = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playHover() {
    if (!this.enabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(110, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {}
  }

  playBeep() {
    if (!this.enabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(587.33, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.12);
    } catch (e) {}
  }

  // Dışarıdan yüklenen MP3 oynatıcısı
  initBgm() {
    if (!this.bgmAudio) {
      this.bgmAudio = new Audio('./bgm.mp3');
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = 0.4;
      this.bgmAudio.preload = 'auto';

      this.bgmAudio.onerror = (e) => {
        console.error("Müzik dosyası yüklenemedi! public/bgm.mp3 dosyasını kontrol edin.", e);
      };
    }
  }

  toggleBgm() {
    this.init();
    this.initBgm();

    if (this.bgmPlaying) {
      this.bgmAudio.pause();
      this.bgmPlaying = false;
      return false;
    } else {
      const playPromise = this.bgmAudio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Müzik başarıyla çalıyor.");
          })
          .catch((err) => {
            console.error("Müzik oynatma hatası:", err);
          });
      }
      this.bgmPlaying = true;
      return true;
    }
  }
}

export const sound = new SoundEngine();
