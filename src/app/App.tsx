import { useState, useEffect, useCallback } from 'react';
import { Slide01Title } from './components/slides/Slide01Title';
import { Slide02Team } from './components/slides/Slide02Team';
import { Slide03Challenge } from './components/slides/Slide03Challenge';
import { Slide04ITTO } from './components/slides/Slide04ITTO';
import { Slide04bITTO } from './components/slides/Slide05ITTO';
import { Slide05Channels } from './components/slides/Slide05Channels';
import { Slide06PMBOK78 } from './components/slides/Slide06PMBOK78';
import { Slide07Human } from './components/slides/Slide07Human';
import { Slide08Agile } from './components/slides/Slide08Agile';
import { Slide09AI } from './components/slides/Slide09AI';
import { Slide11Future } from './components/slides/Slide10Future';
import { Slide12Conclusion } from './components/slides/Slide11Conclusion';

const slideComponents = [
  <Slide01Title />,
  <Slide02Team />,
  <Slide03Challenge />,
  <Slide04ITTO />,
  <Slide04bITTO />,
  <Slide05Channels />,
  <Slide06PMBOK78 />,
  <Slide07Human />,
  <Slide08Agile />,
  <Slide09AI />,
  <Slide11Future />,
  <Slide12Conclusion />,
];

const TOTAL = slideComponents.length;

const SLIDE_TITLES = [
  'Giới thiệu', 'Thành viên', 'Thách thức', 'PMBOK 6', 'ITTOs',
  'Kênh & 5C', 'PMBOK 7 & 8', 'Yếu tố con người', 'Agile & Hybrid',
  'Trợ lực AI', 'Tương lai', 'Tổng kết',
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent(c => Math.min(TOTAL - 1, c + 1)), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
      if (e.key === 'Escape') setIsFullscreen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev]);

  return (
    <div style={{
      minHeight: '100vh', width: '100%',
      background: '#010410',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Inter', sans-serif",
      padding: isFullscreen ? '0' : 'clamp(12px,2vw,24px)',
      boxSizing: 'border-box',
      transition: 'padding 0.3s ease',
    }}>

      {!isFullscreen && (
        /* Top Control Bar */
        <div style={{
          width: '100%', maxWidth: '1280px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 'clamp(8px,1.2%,14px)',
          padding: '0 4px',
        }}>
          {/* Left: Branding */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '28px', height: '28px',
              background: 'linear-gradient(135deg,#0ea5e9,#8b5cf6)',
              borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 12px rgba(14,165,233,0.4)',
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white"/>
                <circle cx="7" cy="7" r="2" fill="rgba(255,255,255,0.5)"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '13px', fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.04em' }}>
                PCM <span style={{ color: '#0ea5e9' }}>·</span> Project Communication Management
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.3)' }}>
                12-Slide Deck · {SLIDE_TITLES[current]}
              </div>
            </div>
          </div>

          {/* Right: Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Slide picker toggle */}
            <button
              onClick={() => setShowPicker(s => !s)}
              style={{
                padding: '6px 12px', borderRadius: '8px',
                background: showPicker ? 'rgba(14,165,233,0.15)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${showPicker ? 'rgba(14,165,233,0.35)' : 'rgba(255,255,255,0.1)'}`,
                color: showPicker ? '#0ea5e9' : 'rgba(255,255,255,0.5)',
                fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px',
                transition: 'all 0.2s',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1" y="1" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="7" y="1" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="1" y="7" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/><rect x="7" y="7" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.2"/></svg>
              All Slides
            </button>

            <button
              onClick={() => setIsFullscreen(true)}
              style={{
                padding: '6px 12px', borderRadius: '8px',
                background: 'rgba(139,92,246,0.12)',
                border: '1px solid rgba(139,92,246,0.3)',
                color: '#8b5cf6',
                fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px',
                transition: 'all 0.2s',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 4V1H4M8 1H11V4M11 8V11H8M4 11H1V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
              Present
            </button>
          </div>
        </div>
      )}

      {/* Slide Picker Dropdown */}
      {showPicker && !isFullscreen && (
        <div style={{
          width: '100%', maxWidth: '1280px',
          background: 'rgba(2,6,23,0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(14,165,233,0.15)',
          borderRadius: '14px',
          padding: 'clamp(10px,1.5%,16px)',
          marginBottom: 'clamp(8px,1.2%,14px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(6,1fr)',
          gap: '6px',
        }}>
          {SLIDE_TITLES.map((title, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); setShowPicker(false); }}
              style={{
                padding: '8px 10px',
                background: current === i
                  ? 'linear-gradient(135deg,rgba(14,165,233,0.2),rgba(139,92,246,0.2))'
                  : 'rgba(255,255,255,0.03)',
                border: `1px solid ${current === i ? 'rgba(14,165,233,0.4)' : 'rgba(255,255,255,0.07)'}`,
                borderRadius: '10px',
                cursor: 'pointer', textAlign: 'left',
                boxShadow: current === i ? '0 0 12px rgba(14,165,233,0.15)' : 'none',
                transition: 'all 0.2s',
              }}
            >
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '10px', fontWeight: 700, color: current === i ? '#0ea5e9' : 'rgba(255,255,255,0.3)', letterSpacing: '0.06em', marginBottom: '2px' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: current === i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)', lineHeight: 1.3 }}>{title}</div>
            </button>
          ))}
        </div>
      )}

      {/* Slide Viewport */}
      <div style={{
        width: isFullscreen ? '100vw' : '100%',
        maxWidth: isFullscreen ? '100vw' : '1280px',
        borderRadius: isFullscreen ? '0' : '16px',
        overflow: 'hidden',
        boxShadow: isFullscreen ? 'none' : '0 0 0 1px rgba(14,165,233,0.12), 0 0 40px rgba(14,165,233,0.07), 0 0 80px rgba(139,92,246,0.05), 0 32px 80px rgba(0,0,0,0.7)',
        position: 'relative',
        flex: isFullscreen ? 1 : 'none',
      }}>
        {slideComponents[current]}
        
      </div>

      {/* Navigation Controls */}
      {!isFullscreen && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          marginTop: 'clamp(10px,1.4%,16px)',
        }}>
          {/* Prev */}
          <button
            onClick={prev} disabled={current === 0}
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '8px 16px', borderRadius: '9px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.09)',
              color: current === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.6)',
              fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 500,
              cursor: current === 0 ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Previous
          </button>

          {/* Slide dots */}
          <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            {Array.from({ length: TOTAL }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: current === i ? '22px' : '7px',
                  height: '7px', borderRadius: '100px',
                  background: current === i
                    ? 'linear-gradient(90deg,#0ea5e9,#8b5cf6)'
                    : i < current
                    ? 'rgba(14,165,233,0.4)'
                    : 'rgba(255,255,255,0.15)',
                  border: 'none', cursor: 'pointer',
                  boxShadow: current === i ? '0 0 8px rgba(14,165,233,0.5)' : 'none',
                  transition: 'all 0.3s ease', padding: 0,
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '12px', color: 'rgba(255,255,255,0.3)', minWidth: '44px', textAlign: 'center',
          }}>
            <span style={{ color: '#0ea5e9', fontWeight: 700 }}>{current + 1}</span> / {TOTAL}
          </div>

          {/* Next */}
          <button
            onClick={next} disabled={current === TOTAL - 1}
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '8px 16px', borderRadius: '9px',
              background: current < TOTAL - 1 ? 'rgba(14,165,233,0.1)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${current < TOTAL - 1 ? 'rgba(14,165,233,0.3)' : 'rgba(255,255,255,0.09)'}`,
              color: current === TOTAL - 1 ? 'rgba(255,255,255,0.2)' : '#0ea5e9',
              fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600,
              cursor: current === TOTAL - 1 ? 'not-allowed' : 'pointer',
              boxShadow: current < TOTAL - 1 ? '0 0 12px rgba(14,165,233,0.12)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            Next
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      )}

      {/* Keyboard hint */}
      {!isFullscreen && (
        <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          {['←', '→'].map((k, i) => (
            <span key={i} style={{
              padding: '2px 6px', background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px',
              fontFamily: "'Inter', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.25)',
            }}>{k}</span>
          ))}
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.2)' }}>Navigate with keyboard</span>
        </div>
      )}
    </div>
  );
}
