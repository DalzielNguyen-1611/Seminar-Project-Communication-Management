import { SlideLayout } from '../SlideLayout';

const members = [
  { initials: 'TG', name: 'Nguyễn Nữ\nTrà Giang\n24520418', role: 'Thành viên', color1: '#0ea5e9', color2: '#8b5cf6', avatarUrl: '/images/team/giang.jpg' },
  { initials: 'TK', name: 'Phan\nTrung Kiên\n23520805', role: 'Thành viên', color1: '#8b5cf6', color2: '#a78bfa', avatarUrl: '/images/team/kien.jpg' },
  { initials: 'ĐH', name: 'Nguyễn Đoàn\nĐức Hiếu\n24520500', role: 'Nhóm trưởng', color1: '#0ea5e9', color2: '#38bdf8', avatarUrl: '/images/team/hieu.jpg' },
  { initials: 'BD', name: 'Lê Thị\nBích Duyên\n24520406', role: 'Thành viên', color1: '#8b5cf6', color2: '#ec4899', avatarUrl: '/images/team/duyen.jpg' },
  { initials: 'TD', name: 'Hồ Thị\nThùy Dung\n24520805', role: 'Thành viên', color1: '#06b6d4', color2: '#0ea5e9', avatarUrl: '/images/team/dung.jpg' },
];

export function Slide02Team() {
  return (
    <SlideLayout currentSlide={2} slideTitle="Meet the Team">
      <div style={{ padding: '3% 4%', height: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(8px,1.5%,18px)', boxSizing: 'border-box', position: 'relative' }}>

        {/* Glow */}
        <div style={{ position: 'absolute', width: '60%', height: '80%', top: '-10%', right: '-10%', background: 'radial-gradient(ellipse, rgba(139,92,246,0.14) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '40%', height: '80%', bottom: '-15%', left: '-5%', background: 'radial-gradient(ellipse, rgba(14,165,233,0.12) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        {/* Heading */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'clamp(4px,0.5%,6px)' }}>
            <div style={{ width: 'clamp(16px,2.2vw,24px)', height: '2px', background: 'linear-gradient(90deg,#8b5cf6,#0ea5e9)', borderRadius: '2px', boxShadow: '0 0 6px rgba(139,92,246,0.5)' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(6px,0.7vw,9px)', color: '#8b5cf6', fontWeight: 700, letterSpacing: '0.14em' }}>NHÓM DỰ ÁN</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px,2.3vw,30px)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.15 }}>
            Thành Viên <span style={{ background: 'linear-gradient(90deg,#8b5cf6,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Của Chúng Tôi</span>
          </h2>
        </div>

        {/* Cards row */}
        <div style={{ display: 'flex', gap: 'clamp(8px,1.5%,18px)', flex: 1, alignItems: 'stretch' }}>
          {members.map((m, i) => (
            <div key={i} style={{
              flex: 1,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${i % 2 === 0 ? 'rgba(14,165,233,0.2)' : 'rgba(139,92,246,0.2)'}`,
              borderRadius: '16px',
              padding: 'clamp(20px, 3%, 40px) clamp(12px, 2%, 24px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(12px, 2%, 24px)',
              position: 'relative', overflow: 'hidden',
              boxShadow: `0 0 24px ${i % 2 === 0 ? 'rgba(14,165,233,0.07)' : 'rgba(139,92,246,0.07)'}, inset 0 1px 0 rgba(255,255,255,0.07)`,
            }}>
              {/* Top accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(90deg, ${m.color1}, ${m.color2})` }} />

              {/* Number watermark */}
              <div style={{ position: 'absolute', bottom: '-5%', right: '-2%', fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(80px, 12vw, 140px)', fontWeight: 800, color: m.color1, opacity: 0.04, lineHeight: 1, userSelect: 'none' }}>{String(i + 1).padStart(2, '0')}</div>

              {/* Avatar */}
              <div style={{
                width: 'clamp(80px, 10vw, 120px)',
                height: 'clamp(80px, 10vw, 120px)',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${m.color1}40, ${m.color2}40)`,
                border: `3px solid ${m.color1}80`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 0 24px ${m.color1}40`,
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden'
              }}>
                 <img src={m.avatarUrl} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
              </div>

              {/* Name & Role Container */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 1 }}>
                  <div style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(14px, 1.8vw, 22px)',
                    fontWeight: 700,
                    color: '#fff', textAlign: 'center', lineHeight: 1.25,
                    whiteSpace: 'pre-line',
                  }}>{m.name}</div>

                  <div style={{
                    padding: '6px 16px',
                    background: `${m.color1}25`,
                    border: `1px solid ${m.color1}50`,
                    borderRadius: '100px',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 'clamp(10px, 1vw, 14px)',
                    fontWeight: 600,
                    color: m.color1, letterSpacing: '0.06em', textAlign: 'center',
                    whiteSpace: 'nowrap',
                    boxShadow: `0 4px 12px ${m.color1}20`
                  }}>{m.role}</div>
              </div>

              {/* Decorative dots */}
              <div style={{ display: 'flex', gap: '6px', position: 'absolute', bottom: 'clamp(12px, 2%, 24px)' }}>
                {[m.color1, m.color2, 'rgba(255,255,255,0.2)'].map((c, ci) => (
                  <div key={ci} style={{ width: '6px', height: '6px', borderRadius: '50%', background: c, boxShadow: ci < 2 ? `0 0 6px ${c}` : 'none' }} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: 'clamp(8px, 1%, 12px) clamp(16px, 2%, 24px)', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px' }}>
          <div style={{ width: '4px', height: 'clamp(24px, 3vw, 36px)', background: 'linear-gradient(180deg,#0ea5e9,#8b5cf6)', borderRadius: '2px', flexShrink: 0, boxShadow: '0 0 8px rgba(14,165,233,0.5)' }} />
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(10px, 1.2vw, 14px)', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic', letterSpacing: '0.02em' }}>
            "Đơn độc chúng ta làm được rất ít; cùng nhau chúng ta có thể làm được rất nhiều." — Helen Keller
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}