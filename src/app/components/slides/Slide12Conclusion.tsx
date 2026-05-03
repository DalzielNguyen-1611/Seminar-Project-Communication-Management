import { SlideLayout } from '../SlideLayout';

const takeaways = [
  { num: '01', text: 'Truyền thông là kỹ năng có tác động cao nhất của PM — hãy đầu tư 90% nỗ lực của bạn vào đây.', color: '#0ea5e9' },
  { num: '02', text: 'PMBOK 6 cung cấp cấu trúc. PMBOK 7 & 8 cung cấp nguyên tắc. Hãy kết hợp linh hoạt cả hai.', color: '#8b5cf6' },
  { num: '03', text: 'Nghi thức Agile và Bức xạ thông tin tạo ra sự minh bạch mà không cần những cuộc họp kéo dài.', color: '#0ea5e9' },
  { num: '04', text: 'AI nhân bản phạm vi tiếp cận — hãy để AI xử lý tự động hóa, bạn tập trung vào việc xây dựng niềm tin.', color: '#8b5cf6' },
];

const badges = ['PMBOK 6', 'PMBOK 7 & 8', 'Agile', 'AI', 'EQ', 'Các bên liên quan'];

export function Slide12Conclusion() {
  return (
    // Đã đồng bộ currentSlide={12} để khớp với tổng số lượng 12 slide
    <SlideLayout currentSlide={12} slideTitle="Kết luận">
      <div style={{ padding: '3% 4%', height: '100%', display: 'flex', gap: 'clamp(16px, 2vw, 32px)', boxSizing: 'border-box', position: 'relative' }}>

        {/* Glow orbs */}
        <div style={{ position: 'absolute', width: '60%', height: '100%', top: '-10%', left: '-10%', background: 'radial-gradient(ellipse,rgba(14,165,233,0.18) 0%,transparent 65%)', filter: 'blur(45px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '50%', height: '100%', bottom: '-15%', right: '-5%', background: 'radial-gradient(ellipse,rgba(139,92,246,0.2) 0%,transparent 65%)', filter: 'blur(45px)', pointerEvents: 'none' }} />

        {/* Cột Trái: Hero CTA */}
        <div style={{
          flex: '0 0 45%',
          background: 'linear-gradient(135deg,rgba(14,165,233,0.1) 0%,rgba(139,92,246,0.08) 100%)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(14,165,233,0.2)',
          borderRadius: '24px',
          padding: 'clamp(24px, 3vh, 36px)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          position: 'relative', overflow: 'hidden',
          boxShadow: '0 0 50px rgba(14,165,233,0.1), 0 0 100px rgba(139,92,246,0.08), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}>
          {/* Top accent line */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', boxShadow: '0 0 12px rgba(14,165,233,0.5)' }} />

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <div style={{ padding: '4px 14px', background: 'rgba(14,165,233,0.12)', border: '1px solid rgba(14,165,233,0.3)', borderRadius: '100px' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: '#0ea5e9', fontWeight: 800, letterSpacing: '0.12em' }}>THÔNG ĐIỆP CUỐI</span>
              </div>
            </div>

            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
              Hãy trở thành một
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 800, lineHeight: 1.05,
              background: 'linear-gradient(135deg,#ffffff 20%,#0ea5e9 60%,#8b5cf6 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(14,165,233,0.3))',
            }}>
              "Kiến trúc sư<br/>Giá trị"
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginTop: '12px', fontWeight: 500 }}>
              cho dự án của bạn!
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, marginBottom: '20px' }}>
              Một Kiến trúc sư Giá trị không chỉ quản lý truyền thông — họ thiết kế nó một cách chủ động, xây dựng niềm tin có hệ thống và sử dụng mọi công cụ để đảm bảo thông tin đúng đến đúng người vào đúng thời điểm.
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {badges.map((b, i) => (
                <div key={i} style={{
                  padding: '4px 12px',
                  background: i % 2 === 0 ? 'rgba(14,165,233,0.1)' : 'rgba(139,92,246,0.1)',
                  border: `1px solid ${i % 2 === 0 ? 'rgba(14,165,233,0.28)' : 'rgba(139,92,246,0.28)'}`,
                  borderRadius: '100px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '10px', fontWeight: 700,
                  color: i % 2 === 0 ? '#0ea5e9' : '#8b5cf6',
                }}>{b}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Cột Phải: Takeaways + Thanks */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 20px)' }}>
          {/* Key Takeaways */}
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 800, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.06em' }}>ĐIỂM TIN CỐT LÕI</div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
            {takeaways.map((t, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                border: `1px solid ${t.color}20`,
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex', alignItems: 'center', gap: '16px',
                flex: 1,
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px', background: `linear-gradient(180deg,${t.color},${t.color}40)` }} />
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '28px', fontWeight: 800,
                  color: t.color, opacity: 0.3, lineHeight: 1, flexShrink: 0,
                }}>{t.num}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>{t.text}</div>
              </div>
            ))}
          </div>

          {/* Thank you card */}
          <div style={{
            background: 'linear-gradient(135deg,rgba(14,165,233,0.08) 0%,rgba(139,92,246,0.08) 100%)',
            backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px',
            padding: '20px 24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px',
          }}>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '24px', fontWeight: 800, background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Xin Cảm Ơn!</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>Chào đón mọi câu hỏi và thảo luận</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['Hỏi & Đáp', 'Thảo luận', 'Phản hồi'].map((l, i) => (
                <div key={i} style={{
                  padding: '6px 14px',
                  background: i === 0 ? 'rgba(14,165,233,0.15)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${i === 0 ? 'rgba(14,165,233,0.35)' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '10px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px', fontWeight: 700,
                  color: i === 0 ? '#0ea5e9' : 'rgba(255,255,255,0.5)',
                }}>{l}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}