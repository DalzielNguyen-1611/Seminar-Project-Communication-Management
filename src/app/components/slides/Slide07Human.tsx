import React, { useState } from 'react';
import { SlideLayout } from '../SlideLayout';

const humanAspects = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="#0ea5e9" strokeWidth="1.6" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="#0ea5e9" strokeWidth="1.6"/><path d="M23 21V19C22.9993 17.2268 21.7044 15.6643 19.9985 15.31" stroke="#0ea5e9" strokeWidth="1.6" strokeLinecap="round"/><path d="M16 3.13C17.7071 3.48007 19.0023 5.04416 19.0023 6.82C19.0023 8.59584 17.7071 10.1599 16 10.51" stroke="#0ea5e9" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    label: 'KHÍA CẠNH 01',
    title: 'Quản trị & Dẫn dắt Đội nhóm',
    color: '#0ea5e9', border: 'rgba(14,165,233,0.3)', bg: 'rgba(14,165,233,0.08)',
    summary: ['• Từ "Nhân sự" đến "Nguồn lực"', '• Mô hình phát triển nhóm Tuckman', '• Lãnh đạo phục vụ (Servant Leadership)', '• Gán trách nhiệm qua ma trận RACI'],
    full: [
      { term: 'Chuyển dịch Nguồn lực', desc: 'Từ việc đếm số lượng (V6) sang tập trung dẫn dắt, huấn luyện và phản hồi (V8).' },
      { term: 'Lãnh đạo phục vụ', desc: 'Tập trung tháo gỡ rào cản, bảo vệ nhóm khỏi xao nhãng và tạo cơ hội tự tổ chức.' },
      { term: 'Dẫn dắt Đội nhóm', desc: 'Nhấn mạnh việc phân tán quyền lãnh đạo, coaching và mentoring thay vì chỉ đạo trực tiếp.' },
      { term: 'Ma trận RACI', desc: 'Công cụ gán trách nhiệm rõ ràng giúp đảm bảo sự minh bạch trong thực thi quy trình.' }
    ]
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 14C15.866 14 19 10.866 19 7C19 3.13401 15.866 0 12 0C8.13401 0 5 3.13401 5 7C5 10.866 8.13401 14 12 14Z" stroke="#8b5cf6" strokeWidth="1.6"/><path d="M2 21C2 17.134 5.13401 14 9 14H15C18.866 14 22 17.134 22 21V24H2V21Z" stroke="#8b5cf6" strokeWidth="1.6"/></svg>,
    label: 'KHÍA CẠNH 02',
    title: 'Kỹ năng Quyền lực (Power Skills)',
    color: '#8b5cf6', border: 'rgba(139,92,246,0.3)', bg: 'rgba(139,92,246,0.08)',
    summary: ['• Trí tuệ cảm xúc (EQ) chuyên sâu', '• Kỹ năng đối nhân xử thế', '• Khả năng thích ứng & Đồng cảm', '• Lắng nghe thấu cảm & Giải quyết xung đột'],
    full: [
      { term: 'Trí tuệ cảm xúc (EQ)', desc: 'Bao gồm tự nhận thức, tự quản lý, nhận thức xã hội và kỹ năng xã hội cốt lõi.' },
      { term: 'Kỹ năng Quyền lực', desc: 'Tên gọi mới cho "Kỹ năng mềm", là năng lực quan trọng nhất để gắn kết thành viên.' },
      { term: 'Hành vi con người', desc: 'Được xác định là nguồn gốc chính tạo ra tính phức tạp và mơ hồ trong mọi dự án.' },
      { term: 'Lắng nghe thấu cảm', desc: 'Năng lực giải quyết xung đột thông qua việc thấu hiểu động cơ cá nhân của các bên.' }
    ]
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#06b6d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 17L12 22L22 17" stroke="#06b6d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12L12 17L22 12" stroke="#06b6d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    label: 'KHÍA CẠNH 03',
    title: 'Văn hóa & Đạo đức Trao quyền',
    color: '#06b6d4', border: 'rgba(6,182,212,0.3)', bg: 'rgba(6,182,212,0.08)',
    summary: ['• Xây dựng văn hóa trao quyền', '• An toàn tâm lý (Psychological Safety)', '• Đạo đức & Minh bạch trong kỷ nguyên AI', '• Chính trực & Can đảm trong lãnh đạo'],
    full: [
      { term: 'Văn hóa Trao quyền', desc: 'Nuôi dưỡng môi trường tự chủ, khuyến khích đội ngũ tự chịu trách nhiệm với kết quả.' },
      { term: 'An toàn tâm lý', desc: 'Tạo không gian an toàn để thành viên dám nói lên rủi ro và sai lầm mà không sợ bị trừng phạt.' },
      { term: 'Tính Chính trực & Can đảm', desc: 'Nhà lãnh đạo phải làm gương về đạo đức và lòng can đảm để bảo vệ văn hóa nhóm.' },
      { term: 'Đạo đức trong kỷ nguyên AI', desc: 'Đảm bảo ứng dụng công nghệ minh bạch, không gây e ngại cho các bên liên quan.' }
    ]
  }
];

export function Slide07Human() {
  const [activeModal, setActiveModal] = useState<{ title: string, items: {term: string, desc: string}[], color: string } | null>(null);

  return (
    <SlideLayout currentSlide={8} slideTitle="Yếu Tố Con Người">
      {/* Đồng bộ padding 3% 4% và gap giống slide ITTO và PMBOK Evolution */}
      <div style={{ padding: '3% 4%', height: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2%, 24px)', boxSizing: 'border-box', position: 'relative' }}>
        
        {/* Glow Effects */}
        <div style={{ position: 'absolute', width: '50%', height: '80%', top: '-10%', left: '-5%', background: 'radial-gradient(ellipse,rgba(14,165,233,0.1) 0%,transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '40%', height: '70%', bottom: '-10%', right: '-5%', background: 'radial-gradient(ellipse,rgba(139,92,246,0.1) 0%,transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        {/* Heading */}
        <div style={{ flexShrink: 0, zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '24px', height: '3px', background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', borderRadius: '2px', boxShadow: '0 0 6px rgba(14,165,233,0.5)' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(8px, 0.8vw, 11px)', color: '#0ea5e9', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>TIẾN HÓA TRONG CÁC PHIÊN BẢN PMBOK</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.15 }}>
            <span style={{ background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Tâm Điểm Con Người</span>: Từ Nguồn lực đến Quyền lực
          </h2>
        </div>

        {/* Main Content: 3 Aspect Cards (Đồng bộ gap 32px giống slide quy trình) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2vw, 32px)', flex: 1, minHeight: 0, zIndex: 1 }}>
          {humanAspects.map((aspect, i) => (
            <div 
              key={i} 
              onClick={() => setActiveModal({ title: aspect.title, items: aspect.full, color: aspect.color })}
              style={{
                background: 'linear-gradient(135deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0.01) 100%)',
                backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
                border: `1px solid ${aspect.border}`,
                borderTop: `4px solid ${aspect.color}`,
                borderRadius: '16px',
                padding: 'clamp(16px, 2vh, 24px) clamp(20px, 2vw, 28px)',
                display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 20px)',
                cursor: 'pointer', transition: 'transform 0.2s, background 0.2s',
                boxShadow: `0 8px 32px ${aspect.bg}`,
              }} 
              className="aspect-card"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: aspect.bg, border: `1px solid ${aspect.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {aspect.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: aspect.color, fontWeight: 700, letterSpacing: '0.1em' }}>{aspect.label}</div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.4vw, 18px)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{aspect.title}</div>
                </div>
              </div>

              <div style={{ height: '1px', background: `linear-gradient(90deg, ${aspect.color}40, transparent)` }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                {aspect.summary.map((point, pi) => (
                  <div key={pi} style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
                    {point}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', textAlign: 'right', fontSize: '11px', color: aspect.color, fontWeight: 600, fontStyle: 'italic', opacity: 0.8 }}>
                Click xem chi tiết ⤢
              </div>
            </div>
          ))}
        </div>

        {/* Summary Footer */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px 20px', zIndex: 1 }}>
          <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5, textAlign: 'center' }}>
            <strong>Tóm lại:</strong> Nếu PMBOK 6 dạy cách làm đúng quy trình, PMBOK 7 dạy tư duy tạo giá trị, thì <strong>PMBOK 8 hướng dẫn cách áp dụng quy trình vào thực tiễn</strong> để thực thi tư duy giá trị hiệu quả nhất.
          </p>
        </div>

        {/* Modal Pop-up */}
        {activeModal && (
          <div 
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setActiveModal(null)}
          >
            <div 
              style={{ background: '#0f172a', border: `1px solid ${activeModal.color}`, borderTop: `6px solid ${activeModal.color}`, borderRadius: '16px', padding: '32px', width: '90%', maxWidth: '850px', maxHeight: '75vh', display: 'flex', flexDirection: 'column', position: 'relative' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setActiveModal(null)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>✕</button>
              
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '14px', color: activeModal.color, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Chi tiết khía cạnh</div>
                <div style={{ fontSize: '28px', color: '#fff', fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>{activeModal.title}</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', overflowY: 'auto', paddingRight: '10px' }} className="custom-scrollbar">
                {activeModal.items.map((item, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px', borderLeft: `3px solid ${activeModal.color}` }}>
                    <div style={{ fontWeight: 800, color: activeModal.color, marginBottom: '6px', fontSize: '15px' }}>{item.term}</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <style dangerouslySetInnerHTML={{__html: `
          .aspect-card:hover { transform: translateY(-4px); background: rgba(255,255,255,0.08) !important; }
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 6px; }
        `}} />
      </div>
    </SlideLayout>
  );
}