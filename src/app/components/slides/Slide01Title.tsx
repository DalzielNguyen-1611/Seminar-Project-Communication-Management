import { SlideLayout } from '../SlideLayout';

export function Slide01Title() {
  return (
    <SlideLayout currentSlide={1} slideTitle="Giới thiệu">
      <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {/* Glow orbs */}
        <div style={{ position: 'absolute', width: '50%', height: '100%', top: '-20%', right: '-5%', background: 'radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '45%', height: '100%', bottom: '-20%', left: '-5%', background: 'radial-gradient(ellipse, rgba(14,165,233,0.18) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '25%', height: '50%', top: '25%', left: '38%', background: 'radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 65%)', filter: 'blur(25px)', pointerEvents: 'none' }} />

        {/* Corner decorations */}
        <div style={{ position: 'absolute', top: '4%', left: '2.5%', width: 'clamp(36px,5vw,56px)', height: 'clamp(36px,5vw,56px)', borderTop: '1.5px solid rgba(14,165,233,0.3)', borderLeft: '1.5px solid rgba(14,165,233,0.3)', borderRadius: '4px 0 0 0' }} />
        <div style={{ position: 'absolute', bottom: '4%', right: '2.5%', width: 'clamp(36px,5vw,56px)', height: 'clamp(36px,5vw,56px)', borderBottom: '1.5px solid rgba(139,92,246,0.3)', borderRight: '1.5px solid rgba(139,92,246,0.3)', borderRadius: '0 0 4px 0' }} />

        {/* Left vertical accent */}
        <div style={{ position: 'absolute', left: '2.5%', top: '15%', bottom: '15%', width: '2px', background: 'linear-gradient(180deg, transparent, rgba(14,165,233,0.4), transparent)' }} />
        <div style={{ position: 'absolute', right: '2.5%', top: '15%', bottom: '15%', width: '2px', background: 'linear-gradient(180deg, transparent, rgba(139,92,246,0.4), transparent)' }} />

        {/* Central glass card */}
        <div style={{
          position: 'relative',
          width: 'clamp(320px,85%,1100px)', /* Tăng từ 68% lên 85%, max từ 820px lên 1100px */
          minHeight: '65%', /* Thêm chiều cao tối thiểu để khung nhìn cao ráo hơn */
          background: 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '24px', /* Bo góc tròn hơn một chút cho hợp với khung lớn */
          padding: 'clamp(30px,5%,60px) clamp(40px,6%,80px)', /* Tăng khoảng trống bên trong (padding) */
          boxShadow: '0 0 60px rgba(14,165,233,0.08), 0 0 120px rgba(139,92,246,0.06), inset 0 1px 0 rgba(255,255,255,0.1)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: 'clamp(16px,2.5%,32px)', /* Tăng khoảng cách giữa các đoạn text cho thoáng hơn */
        }}>
          {/* Top accent line */}
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '45%', height: '2px', background: 'linear-gradient(90deg, transparent, #0ea5e9, #8b5cf6, transparent)', borderRadius: '2px', boxShadow: '0 0 12px rgba(14,165,233,0.5)' }} />

          {/* Main Title Area (Seminar + Text liền mạch trên cùng 1 dòng) */}
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(24px, 3.5vw, 52px)', /* Kích thước chữ cho 'Quản Lý Truyền Thông Dự Án' */
            fontWeight: 700,
            lineHeight: 1.5, 
            color: '#ffffff',
            textShadow: '0 0 40px rgba(255,255,255,0.1)',
            textAlign: 'center',
            width: '100%',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            
            {/* Tag Seminar được thu nhỏ lại để viền ngoài cao bằng chữ Quản Lý */}
            <span style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', /* Giảm khoảng cách giữa chấm tròn và chữ */
              padding: 'clamp(2px, 0.2vw, 4px) clamp(12px, 1.5vw, 24px)', /* Giảm padding trên/dưới để khung bớt cao */
              background: 'rgba(139,92,246,0.12)', 
              border: '2px solid rgba(139,92,246,0.35)', 
              borderRadius: '100px',
              marginRight: 'clamp(12px, 1.5vw, 20px)', 
              /* Bỏ translateY vì đã dùng flex align-items: center ở thẻ cha */
            }}>
              <span style={{ width: 'clamp(8px, 1vw, 12px)', height: 'clamp(8px, 1vw, 12px)', borderRadius: '50%', background: '#8b5cf6', boxShadow: '0 0 10px #8b5cf6', display: 'inline-block' }} />
              <span style={{ 
                color: '#8b5cf6', 
                letterSpacing: '0.05em',
                fontSize: 'clamp(16px, 2vw, 32px)', /* Thu nhỏ chữ Seminar lại */
                lineHeight: 1.2
              }}>
                Seminar
              </span>
            </span>

            <span>
              Quản Lý{' '}
              <span style={{
                background: 'linear-gradient(90deg, #0ea5e9 0%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                filter: 'drop-shadow(0 0 20px rgba(14,165,233,0.6))',
              }}>
                Truyền Thông
              </span>{' '}
              Dự Án
            </span>
            
          </div>

          {/* Subtitle */}
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(11px,1.6vw,22px)', fontWeight: 500,
            color: 'rgba(255,255,255,0.55)', textAlign: 'center',
            letterSpacing: '0.02em',
          }}>
            Từ Bản Vẽ Nền Tảng Đến Tương Lai
          </div>

          {/* Divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '55%' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.4))' }} />
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0ea5e9', boxShadow: '0 0 8px #0ea5e9' }} />
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(14,165,233,0.4), transparent)' }} />
          </div>

          {/* Tech badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(6px,1%,12px)', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['PMBOK 6', 'PMBOK 7 & 8', 'Agile', 'Tích hợp AI'].map((tag, i) => (
              <div key={i} style={{
                padding: 'clamp(4px,0.5%,6px) clamp(10px,1.2%,16px)',
                background: i % 2 === 0 ? 'rgba(14,165,233,0.1)' : 'rgba(139,92,246,0.1)',
                border: `1px solid ${i % 2 === 0 ? 'rgba(14,165,233,0.3)' : 'rgba(139,92,246,0.3)'}`,
                borderRadius: '8px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(7px,0.85vw,11px)', fontWeight: 600,
                color: i % 2 === 0 ? '#0ea5e9' : '#8b5cf6',
                letterSpacing: '0.05em',
              }}>{tag}</div>
            ))}
          </div>

{/* Bottom info row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px,3vw,40px)', paddingTop: 'clamp(8px,1%,16px)', borderTop: '1px solid rgba(255,255,255,0.07)', width: '100%', justifyContent: 'center' }}>
            
            {/* Cụm thông tin Nhóm */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 'clamp(36px,4vw,48px)', height: 'clamp(36px,4vw,48px)', borderRadius: '50%', background: 'linear-gradient(135deg,rgba(14,165,233,0.3),rgba(139,92,246,0.3))', border: '1px solid rgba(14,165,233,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Đã tăng size SVG từ 10 lên 20 */}
                <svg width="20" height="20" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="4" r="2" stroke="rgba(255,255,255,0.7)" strokeWidth="1"/><path d="M2 11C2 9 3.8 7.5 6 7.5C8.2 7.5 10 9 10 11" stroke="rgba(255,255,255,0.7)" strokeWidth="1" strokeLinecap="round"/></svg>
              </div>
              <div>
                {/* Đã tăng fontSize cho chữ */}
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px,1.5vw,20px)', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>Nhóm 8 · IS208.Q23</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(10px,1vw,14px)', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>Seminar Quản lý Dự án</div>
              </div>
            </div>
            
            {/* Vạch kẻ đứng ngăn cách */}
            <div style={{ width: '1px', height: 'clamp(36px,4vw,50px)', background: 'rgba(255,255,255,0.1)' }} />
            
            {/* Cụm thông tin Thời gian/Địa điểm */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: 'clamp(36px,4vw,48px)', height: 'clamp(36px,4vw,48px)', borderRadius: '10px', background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Đã tăng size SVG từ 10 lên 20 */}
                <svg width="20" height="20" viewBox="0 0 12 12" fill="none"><rect x="1.5" y="2" width="9" height="8" rx="1.5" stroke="#0ea5e9" strokeWidth="1"/><line x1="1.5" y1="5" x2="10.5" y2="5" stroke="#0ea5e9" strokeWidth="1"/></svg>
              </div>
              <div>
                {/* Đã tăng fontSize cho chữ */}
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px,1.5vw,20px)', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>5 Tháng 5, 2026</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(10px,1vw,14px)', color: 'rgba(255,255,255,0.35)', marginTop: '2px' }}>Phòng B5.10 · 8:00 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}