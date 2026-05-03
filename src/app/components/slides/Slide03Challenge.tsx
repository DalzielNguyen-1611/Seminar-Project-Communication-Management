import { SlideLayout } from '../SlideLayout';

const cards = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
    tag: 'BỐI CẢNH',
    title: 'Biến động & Phức tạp',
    body: 'Môi trường dự án hiện đại đối mặt với thách thức toàn cầu: bất ổn địa chính trị, hạn chế nguồn lực và sự bùng nổ của AI (PMBOK 8).',
    accent: '#0ea5e9', border: 'rgba(14,165,233,0.25)', bg: 'rgba(14,165,233,0.08)',
    items: ['Môi trường VUCA đặc thù', 'Thay đổi công nghệ đột phá', 'Sự tương tác hệ thống phức tạp'],
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
    tag: 'RỦI RO',
    title: 'Hệ quả Truyền thông kém',
    body: 'Thiếu quản lý truyền thông dẫn đến lãng phí nguồn lực, xung đột lợi ích và thất bại trong việc đạt mục tiêu chiến lược (PMBOK 6).',
    accent: '#f59e0b', border: 'rgba(245,158,11,0.25)', bg: 'rgba(245,158,11,0.08)',
    items: ['Vượt ngân sách & chậm tiến độ', 'Kỳ vọng Stakeholders sai lệch', 'Mất uy tín tổ chức'],
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>,
    tag: 'GIẢI PHÁP',
    title: 'Hệ thống Chuyển giao Giá trị',
    body: 'Xây dựng mạng lưới liên kết giữa chiến lược và thực thi, tập trung vào kết quả thực tế thay vì chỉ bàn giao sản phẩm (PMBOK 7).',
    accent: '#8b5cf6', border: 'rgba(139,92,246,0.25)', bg: 'rgba(139,92,246,0.08)',
    items: ['Tối ưu hóa luồng thông tin', 'Quản trị dựa trên nguyên tắc', 'Chuyển đổi trạng thái tương lai'],
  },
];

export function Slide03Challenge() {
  return (
    <SlideLayout currentSlide={3} slideTitle="Thách thức & Bối cảnh">
      <div style={{ padding: '3% 4%', height: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3%, 32px)', boxSizing: 'border-box', position: 'relative' }}>

        {/* Glow orbs */}
        <div style={{ position: 'absolute', width: '40%', height: '70%', top: '-10%', left: '-5%', background: 'radial-gradient(ellipse,rgba(14,165,233,0.14) 0%,transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        {/* Heading row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', zIndex: 1 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{ width: '32px', height: '3px', background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', borderRadius: '2px' }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#0ea5e9', fontWeight: 700, letterSpacing: '0.15em' }}>THE CHALLENGE</span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 3.5vw, 48px)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.1 }}>
              Tại sao Quản lý Truyền thông <br />
              <span style={{ background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Lại là Yếu tố Sống còn?</span>
            </h2>
          </div>

          {/* Big stat - Phóng to */}
          <div style={{
            background: 'linear-gradient(135deg,rgba(14,165,233,0.1),rgba(139,92,246,0.1))',
            border: '1px solid rgba(14,165,233,0.3)',
            borderRadius: '20px',
            padding: '24px 40px',
            backdropFilter: 'blur(12px)',
            textAlign: 'center', flexShrink: 0,
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
          }}>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '84px', fontWeight: 800,
              background: 'linear-gradient(135deg,#0ea5e9,#8b5cf6)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              lineHeight: 1, filter: 'drop-shadow(0 0 20px rgba(14,165,233,0.5))',
            }}>90%</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginTop: '8px', letterSpacing: '0.08em', fontWeight: 600 }}>THỜI GIAN CỦA PM</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', fontWeight: 600 }}>DÀNH CHO GIAO TIẾP</div>
          </div>
        </div>

        {/* 3 Cards - Chữ to & đầy đặn hơn */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px', flex: 1 }}>
          {cards.map((c, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg,rgba(255,255,255,0.08) 0%,rgba(255,255,255,0.03) 100%)',
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              border: `1px solid ${c.border}`,
              borderRadius: '24px',
              padding: '32px',
              display: 'flex', flexDirection: 'column', gap: '20px',
              position: 'relative', overflow: 'hidden',
              boxShadow: `0 10px 30px rgba(0,0,0,0.2)`,
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg,${c.accent},transparent)` }} />

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: c.bg, border: `1px solid ${c.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{c.icon}</div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: c.accent, fontWeight: 800, letterSpacing: '0.1em', background: c.bg, border: `1px solid ${c.border}`, padding: '6px 14px', borderRadius: '100px' }}>{c.tag}</span>
              </div>

              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{c.title}</div>

              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{c.body}</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {c.items.map((item, ii) => (
                  <div key={ii} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.accent, boxShadow: `0 0 10px ${c.accent}` }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}