import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Sparkles, X } from 'lucide-react';
import { sound } from '../utils/audio';
import './MediaLab.css';

const processes = [
  {
    id: 'code',
    video: 'https://assets.mixkit.co/videos/41652/41652-720.mp4',
    poster: 'https://assets.mixkit.co/videos/41652/41652-thumb-360-0.jpg',
    tags: ['React 19', 'Vite', 'VS Code'],
  },
  {
    id: 'design',
    video: 'https://assets.mixkit.co/videos/13231/13231-720.mp4',
    poster: 'https://assets.mixkit.co/videos/13231/13231-thumb-360-0.jpg',
    tags: ['UI/UX', 'Tailwind', 'Responsive'],
  },
  {
    id: 'speed',
    video: 'https://assets.mixkit.co/videos/9757/9757-720.mp4',
    poster: 'https://assets.mixkit.co/videos/9757/9757-thumb-360-0.jpg',
    tags: ['Edge', 'DNS', 'Lighthouse'],
  },
];

function ProcessVideo({ item, label, errorMessage, controls = false }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`media-lab-video${controls ? ' media-lab-video-modal' : ''}`}>
      {failed ? (
        <div className="media-lab-video-error" role="status">{errorMessage}</div>
      ) : (
        <video
          src={item.video}
          poster={item.poster}
          autoPlay
          loop
          muted
          playsInline
          controls={controls}
          preload="metadata"
          aria-label={label}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}

function ProcessModal({ item, content, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="media-lab-dialog glass-card"
      aria-labelledby="process-dialog-title"
      onCancel={onClose}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          event.preventDefault();
          onClose();
        }
      }}
    >
      <button className="media-lab-close" type="button" aria-label={content.close} onClick={onClose}>
        <X size={20} />
      </button>
      <ProcessVideo item={item} label={content.items[item.id].title} errorMessage={content.videoError} controls />
      <div className="media-lab-dialog-copy">
        <span className="media-lab-status mono">{content.live}</span>
        <h3 id="process-dialog-title">{content.items[item.id].title}</h3>
        <p>{content.items[item.id].description}</p>
      </div>
    </dialog>
  );
}

export default function MediaLab({ t }) {
  const [filter, setFilter] = useState('all');
  const [activeMedia, setActiveMedia] = useState(null);
  const content = t.mediaLab;
  const filters = ['all', 'code', 'design', 'speed'];
  const visibleProcesses = filter === 'all' ? processes : processes.filter((item) => item.id === filter);

  return (
    <section className="media-lab" aria-labelledby="media-lab-title">
      <div className="media-lab-heading">
        <div className="media-lab-eyebrow mono"><Sparkles size={14} /> {content.eyebrow}</div>
        <h2 id="media-lab-title">{content.title}</h2>
        <p>{content.subtitle}</p>
      </div>

      <div className="media-lab-filters" role="group" aria-label={content.filterLabel}>
        {filters.map((id) => (
          <button
            key={id}
            type="button"
            className={`media-lab-filter mono ${filter === id ? 'pill-active' : 'pill-inactive'}`}
            aria-pressed={filter === id}
            onMouseEnter={() => sound.playHover()}
            onClick={() => {
              sound.playClick();
              setFilter(id);
            }}
          >
            {content.filters[id]}
          </button>
        ))}
      </div>

      <div className="media-lab-grid">
        {visibleProcesses.map((item) => (
          <article className="media-lab-card glass-card" key={item.id}>
            <div className="media-lab-preview">
              <ProcessVideo item={item} label={content.items[item.id].title} errorMessage={content.videoError} />
              <span className="media-lab-step mono">0{processes.indexOf(item) + 1} / 03</span>
              <button
                type="button"
                className="media-lab-expand"
                aria-label={`${content.open}: ${content.items[item.id].title}`}
                onMouseEnter={() => sound.playHover()}
                onClick={() => {
                  sound.playClick();
                  setActiveMedia(item);
                }}
              >
                <ArrowUpRight size={19} aria-hidden="true" />
              </button>
            </div>
            <div className="media-lab-card-content">
              <div className="media-lab-status mono"><span />{content.live}</div>
              <h3>{content.items[item.id].title}</h3>
              <p>{content.items[item.id].description}</p>
              <div className="media-lab-tags" aria-label={content.technologyLabel}>
                {item.tags.map((tag) => <span className="mono" key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeMedia && (
        <ProcessModal
          item={activeMedia}
          content={content}
          onClose={() => {
            sound.playClick();
            setActiveMedia(null);
          }}
        />
      )}
    </section>
  );
}
