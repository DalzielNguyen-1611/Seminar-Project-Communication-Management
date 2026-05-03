import { SlideLayout } from '../SlideLayout';

const pmbok6Items = [
  {
    term: 'Vị trí độc lập',
    desc: 'Truyền thông là 1 trong 10 Lĩnh vực Kiến thức (Knowledge Areas) riêng biệt.'
  },
  {
    term: 'Đóng gói quy trình',
    desc: 'Bó hẹp trong 3 bước: Lên kế hoạch, Quản lý và Giám sát.'
  },
  {
    term: 'Định hướng Đầu ra (Output-focused)',
    desc: 'Giao tiếp mang tính "đẩy". Việc gửi xong một báo cáo/email được xem là hoàn thành trách nhiệm.'
  }
];

const pmbok7Items = [
  {
    term: 'Hòa tan vào Nguyên tắc',
    desc: 'Không còn chương riêng, được lồng ghép vào Miền Hiệu suất Các bên liên quan & Lập kế hoạch.'
  },
  {
    term: 'Định hướng Giá trị (Outcome-focused)',
    desc: 'Báo cáo vô nghĩa nếu không tạo ra sự thấu hiểu. Tập trung vào sự gắn kết thay vì quy trình.'
  },
  {
    term: 'Kỹ năng Quyền lực',
    desc: 'Đề cao EQ, lắng nghe tích cực và nhận thức văn hóa để thiết lập sự tin tưởng.'
  }
];

const pmbok8Items = [
  {
    term: 'Hợp nhất mạnh mẽ',
    desc: 'Truyền thông và Stakeholders hòa làm một bên trong Miền Hiệu suất Các bên liên quan.'
  },
  {
    term: 'Khôi phục Quy trình',
    desc: 'Mang 3 quy trình cũ trở lại nhưng nhúng trực tiếp vào Miền Stakeholders như một công cụ quản trị thực chiến.'
  },
  {
    term: 'Tích hợp AI & LLMs',
    desc: 'Sử dụng AI tự động hóa tạo tác truyền thông, đi kèm với kiểm soát rủi ro về đạo đức và bảo mật.'
  }
];

export function Slide06PMBOK78() {
  return (
    <SlideLayout currentSlide={7} slideTitle="Sự Tiến Hóa Của Truyền Thông">
      <div style={{ padding: '3% 4%', height: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2%, 24px)', boxSizing: 'border-box', position: 'relative' }}>

        {/* Glow Effects */}
        <div style={{ position: 'absolute', width: '50%', height: '90%', top: '-10%', right: '-5%', background: 'radial-gradient(ellipse,rgba(139,92,246,0.15) 0%,transparent 65%)', filter: 'blur(45px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '40%', height: '60%', bottom: '-10%', left: '-5%', background: 'radial-gradient(ellipse,rgba(14,165,233,0.12) 0%,transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        {/* Heading */}
        <div style={{ flexShrink: 0, zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '24px', height: '3px', background: 'linear-gradient(90deg,#8b5cf6,#0ea5e9)', borderRadius: '2px', boxShadow: '0 0 6px rgba(139,92,246,0.5)' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(8px, 0.8vw, 11px)', color: '#8b5cf6', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>HÀNH TRÌNH CHUYỂN ĐỔI</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.15 }}>
            PMBOK 6 ➔ 7 ➔ 8: <span style={{ background: 'linear-gradient(90deg,#8b5cf6,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Sự Dịch Chuyển Của Truyền Thông</span>
          </h2>
        </div>

        {/* 3 Cột so sánh PMBOK */}
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 'clamp(16px, 2vw, 32px)', flex: 1, minHeight: 0, zIndex: 1 }}>
          
          {/* PMBOK 6: Đóng gói */}
          <div style={{
            flex: 1, background: 'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.01) 100%)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px',
            padding: 'clamp(16px, 2vh, 24px) clamp(20px, 2vw, 28px)',
            position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 20px)'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'rgba(255,255,255,0.3)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#fff', fontWeight: 700 }}>PMBOK 6</span>
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Kỷ nguyên "Đóng gói"</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
              {pmbok6Items.map((item, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#fff', fontWeight: 700 }}>• {item.term}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13.5px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.45, paddingLeft: '12px' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', flexShrink: 0 }}>
            <svg width="24" height="20" viewBox="0 0 30 20" fill="none"><path d="M2 10H28M20 2L28 10L20 18" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>

          {/* PMBOK 7: Hòa tan */}
          <div style={{
            flex: 1, background: 'linear-gradient(135deg,rgba(139,92,246,0.1) 0%,rgba(255,255,255,0.01) 100%)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(139,92,246,0.25)', borderRadius: '16px',
            padding: 'clamp(16px, 2vh, 24px) clamp(20px, 2vw, 28px)',
            position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 20px)', boxShadow: '0 0 20px rgba(139,92,246,0.05)'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,#8b5cf6,transparent)', boxShadow: '0 0 8px rgba(139,92,246,0.5)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ padding: '4px 12px', background: 'rgba(139,92,246,0.2)', border: '1px solid rgba(139,92,246,0.35)', borderRadius: '100px' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#a78bfa', fontWeight: 700 }}>PMBOK 7</span>
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px, 1.2vw, 15px)', color: 'rgba(167, 139, 250, 0.8)', fontWeight: 600 }}>Kỷ nguyên "Hòa tan"</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
              {pmbok7Items.map((item, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#a78bfa', fontWeight: 700 }}>• {item.term}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13.5px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.45, paddingLeft: '12px' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '6px', flexShrink: 0 }}>
             <svg width="24" height="20" viewBox="0 0 30 20" fill="none"><path d="M2 10H28M20 2L28 10L20 18" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>

          {/* PMBOK 8: Tích hợp Thực tiễn */}
          <div style={{
            flex: 1.1, background: 'linear-gradient(135deg,rgba(14,165,233,0.15) 0%,rgba(14,165,233,0.02) 100%)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(14,165,233,0.35)', borderRadius: '16px',
            padding: 'clamp(16px, 2vh, 24px) clamp(20px, 2vw, 28px)',
            position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 20px)', boxShadow: '0 8px 32px rgba(14,165,233,0.15)'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg,#0ea5e9,#06b6d4)', boxShadow: '0 0 12px rgba(14,165,233,0.8)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ padding: '4px 12px', background: 'rgba(14,165,233,0.25)', border: '1px solid rgba(14,165,233,0.5)', borderRadius: '100px' }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', color: '#38bdf8', fontWeight: 800 }}>PMBOK 8</span>
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(13px, 1.2vw, 15px)', color: '#0ea5e9', fontWeight: 700 }}>Tích hợp Thực tiễn</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
              {pmbok8Items.map((item, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#0ea5e9', fontWeight: 800 }}>✓ {item.term}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45, paddingLeft: '16px' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 3 Mũi tên chỉ từ trên xuống dưới (Căn lề chuẩn xác với 3 cột) */}
        <div style={{ display: 'flex', gap: 'clamp(16px, 2vw, 32px)', zIndex: 1 }}>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div style={{ width: '24px', flexShrink: 0 }}></div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div style={{ width: '24px', flexShrink: 0 }}></div>
          <div style={{ flex: 1.1, display: 'flex', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>

        {/* 3 Box Kết luận riêng biệt */}
        <div style={{ display: 'flex', alignItems: 'stretch', gap: 'clamp(16px, 2vw, 32px)', zIndex: 1 }}>
          <div style={{ 
            flex: 1, 
            background: 'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.01) 100%)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '16px', 
            padding: '16px 20px', 
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
          }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
              <strong style={{ color: '#fff' }}>PMBOK 6:</strong> Kẻ tuân thủ gửi báo cáo đúng hạn.
            </div>
          </div>
          
          <div style={{ width: '24px', flexShrink: 0 }}></div>
          
          <div style={{ 
            flex: 1, 
            background: 'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.01) 100%)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '16px', 
            padding: '16px 20px', 
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
          }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(167, 139, 250, 0.9)', lineHeight: 1.5 }}>
              <strong style={{ color: '#a78bfa' }}>PMBOK 7:</strong> Người tạo ra sự thấu hiểu.
            </div>
          </div>
          
          <div style={{ width: '24px', flexShrink: 0 }}></div>
          
          <div style={{ 
            flex: 1.1, 
            background: 'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,rgba(255,255,255,0.01) 100%)',
            backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '16px', 
            padding: '16px 20px', 
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'
          }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#38bdf8', lineHeight: 1.5, fontWeight: 500 }}>
              <strong style={{ color: '#0ea5e9' }}>PMBOK 8:</strong> Kiến trúc sư vận hành hệ sinh thái tương tác (Quy trình + Thấu cảm + AI).
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}