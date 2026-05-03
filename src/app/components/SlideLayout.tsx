import React from 'react';

// Đã cập nhật thành mảng tiếng Việt ngắn gọn để không bị tràn
const SLIDE_LABELS = [
  'Giới thiệu', 'Nhóm', 'Thách thức', 'PMBOK 6', 'ITTOs',
  'Các kênh', 'PMBOK 7-8', 'Con người', 'Agile',
  'AI', 'Tương lai', 'Kết luận',
];

interface SlideLayoutProps {
  currentSlide: number;
  slideTitle: string;
  children: React.ReactNode;
}

export function SlideLayout({ currentSlide, slideTitle, children }: SlideLayoutProps) {
  const isEven = currentSlide % 2 === 0;
  const accentColor = isEven ? '#8b5cf6' : '#0ea5e9';
  const accentBg = isEven ? 'rgba(139,92,246,0.12)' : 'rgba(14,165,233,0.12)';
  const accentBorder = isEven ? 'rgba(139,92,246,0.3)' : 'rgba(14,165,233,0.3)';

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      aspectRatio: '16/9',
      background: '#020617',
      overflow: 'hidden',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(14,165,233,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(14,165,233,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '4.167% 7.41%',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Top fade */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '35%',
        background: 'linear-gradient(180deg, rgba(14,165,233,0.035) 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* HEADER */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '9%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 3%',
        borderBottom: '1px solid rgba(14,165,233,0.12)',
        background: 'linear-gradient(90deg, rgba(2,6,23,0.97) 0%, rgba(14,165,233,0.025) 50%, rgba(2,6,23,0.97) 100%)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        zIndex: 30,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', flexShrink: 0 }}>
          <div style={{
            width: 'clamp(16px,1.9vw,22px)', height: 'clamp(16px,1.9vw,22px)',
            background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
            borderRadius: '5px', flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 10px rgba(14,165,233,0.45)',
          }}>
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
              <path d="M6 1L11 3.5V8.5L6 11L1 8.5V3.5L6 1Z" fill="white" />
              <circle cx="6" cy="6" r="1.6" fill="rgba(255,255,255,0.5)" />
            </svg>
          </div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(7px,0.9vw,12px)', fontWeight: 700,
            color: 'rgba(255,255,255,0.75)', letterSpacing: '0.05em', whiteSpace: 'nowrap',
          }}>PCM <span style={{ color: '#0ea5e9' }}>·</span></span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(5px,0.7vw,9px)', color: 'rgba(255,255,255,0.3)',
            whiteSpace: 'nowrap',
          }}>Project Communication Management</span>
        </div>

        {/* Center */}
        <div style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(7px,0.95vw,13px)', fontWeight: 600,
          color: 'rgba(255,255,255,0.85)', textAlign: 'center',
          flex: '0 1 auto', maxWidth: '38%',
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{slideTitle}</div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(6px,0.85vw,11px)', color: 'rgba(255,255,255,0.3)',
          }}>
            <span style={{ color: '#0ea5e9', fontWeight: 700 }}>
              {String(currentSlide).padStart(2, '0')}
            </span>
            {' / 12'}
          </div>
          <div style={{
            padding: '2px 7px',
            background: accentBg, border: `1px solid ${accentBorder}`,
            borderRadius: '100px',
            fontSize: 'clamp(5px,0.55vw,7px)',
            color: accentColor,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700, letterSpacing: '0.1em',
          }}>
            {SLIDE_LABELS[currentSlide - 1].toUpperCase()}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{
        position: 'absolute', top: '9%', bottom: '11%', left: 0, right: 0,
        overflow: 'hidden', zIndex: 10,
      }}>
        {children}
      </div>

      {/* FOOTER */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '11%',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', 
        gap: '8px', /* Tăng khoảng cách giữa thanh bar và chữ cho thoáng */
        padding: '0 4%',
        paddingBottom: '2%', /* Đẩy toàn bộ nội dung (cột + chữ) lên trên so với mép dưới */
        borderTop: '1px solid rgba(14,165,233,0.08)',
        background: 'rgba(2,6,23,0.9)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        zIndex: 30,
      }}>
        <div style={{ display: 'flex', gap: '6px', width: '100%', alignItems: 'center' }}>
          {SLIDE_LABELS.map((_, i) => {
            const isActive = i + 1 === currentSlide;
            const isPast = i + 1 < currentSlide;
            return (
              <div key={i} style={{
                flex: 1, 
                height: isActive ? '6px' : '4px', /* Làm thanh bar nhỉnh hơn xíu cho cân đối với chữ to */
                borderRadius: '100px',
                background: isActive
                  ? 'linear-gradient(90deg,#0ea5e9,#8b5cf6)'
                  : isPast
                  ? 'rgba(14,165,233,0.4)'
                  : 'rgba(255,255,255,0.1)',
                boxShadow: isActive ? '0 0 8px rgba(14,165,233,0.65)' : 'none',
                transition: 'all 0.3s ease',
              }} />
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: '6px', width: '100%' }}>
          {SLIDE_LABELS.map((label, i) => {
            const isActive = i + 1 === currentSlide;
            const isPast = i + 1 < currentSlide;
            return (
              <div key={i} style={{
                flex: 1, textAlign: 'center',
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(9px, 1vw, 14px)', /* Chữ to lên gấp đôi */
                color: isActive ? '#0ea5e9' : isPast ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.25)', /* Làm sáng màu chữ lên một chút cho dễ đọc */
                fontWeight: isActive ? 700 : 500,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>{label}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}