import React from 'react';
import { SlideLayout } from '../SlideLayout';

const aiPillars = [
  {
    icon: '🤖',
    title: 'Tự động hóa Hành chính',
    tag: 'AUTOMATION',
    color: '#0ea5e9',
    // Đã đắp thêm thịt nội dung để lấp khoảng trống[cite: 4, 13]
    desc: 'Sử dụng trợ lý ảo để xử lý câu hỏi thường gặp (FAQs) và cập nhật thông tin dự án tự động. AI hỗ trợ chuyển giọng nói thành văn bản, nhận diện quyết định quan trọng và tạo biên bản họp chi tiết ngay tức thì.'
  },
  {
    icon: '🧠',
    title: 'Phân tích Cảm xúc',
    tag: 'SENTIMENT',
    color: '#8b5cf6',
    desc: 'Ứng dụng NLP để "đọc vị" cảm xúc của các bên liên quan qua email, tin nhắn và mạng xã hội. Giúp người quản lý dự án thấu hiểu những bận tâm tiềm ẩn để chủ động giải quyết vấn đề và cải thiện sự gắn kết.'
  },
  {
    icon: '👤',
    title: 'Cá nhân hóa Chiến lược',
    tag: 'PERSONALIZED',
    color: '#06b6d4',
    desc: 'Hệ thống tự động điều tra sở thích và lịch sử tương tác để tùy chỉnh phương thức giao tiếp. AI xác định chính xác kênh (Zalo, Email, Gọi điện) và tần suất tối ưu nhất cho từng cá nhân để mang lại sự hài lòng cao nhất.'
  },
  {
    icon: '📝',
    title: 'Tạo lập Tạo tác (Artifacts)',
    tag: 'GENERATIVE',
    color: '#6366f1',
    desc: 'Tận dụng LLMs hỗ trợ soạn thảo báo cáo cho nhà tài trợ, khách hàng và đội ngũ. Kỹ năng giao tiếp điện tử hiện đại nay đã bao gồm cả việc viết câu lệnh (Prompts) để trích xuất thông tin thông minh từ máy móc.'
  }
];

export function Slide09AI() {
  return (
    <SlideLayout currentSlide={10} slideTitle="AI - Cấp số nhân Truyền thông">
      <div style={{ padding: '3% 4%', height: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2%, 24px)', boxSizing: 'border-box', position: 'relative' }}>

        {/* Glow Effects */}
        <div style={{ position: 'absolute', width: '55%', height: '90%', top: '-10%', right: '-5%', background: 'radial-gradient(ellipse,rgba(139,92,246,0.18) 0%,transparent 65%)', filter: 'blur(45px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '35%', height: '60%', bottom: '-10%', left: '-5%', background: 'radial-gradient(ellipse,rgba(14,165,233,0.12) 0%,transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        {/* Heading */}
        <div style={{ zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '24px', height: '2px', background: 'linear-gradient(90deg,#8b5cf6,#0ea5e9)', borderRadius: '2px', boxShadow: '0 0 6px rgba(139,92,246,0.5)' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(8px, 0.8vw, 11px)', color: '#8b5cf6', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>LỚP CÔNG NGHỆ MỚI NỔI</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.15 }}>
            AI: <span style={{ background: 'linear-gradient(90deg,#8b5cf6,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Cấp số nhân Truyền thông</span> (PMI Trends)
          </h2>
        </div>

        {/* 4 Trụ cột chính - Đã được điều chỉnh khoảng cách và nội dung để lấp đầy ô */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(16px, 2vw, 32px)', flex: 1, minHeight: 0, zIndex: 1 }}>
          {aiPillars.map((p, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0.02) 100%)',
              backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
              border: `1px solid ${p.color}30`,
              borderRadius: '16px',
              padding: 'clamp(20px, 2.5vh, 32px) clamp(24px, 2.5vw, 36px)', // Tăng padding để ô đầy đặn hơn
              display: 'flex', gap: '20px',
              position: 'relative', overflow: 'hidden',
              boxShadow: `0 4px 20px ${p.color}15`,
            }}>
              <div style={{ fontSize: '40px', flexShrink: 0 }}>{p.icon}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(15px, 1.4vw, 19px)', fontWeight: 800, color: '#fff' }}>{p.title}</span>
                  <span style={{ padding: '3px 10px', background: `${p.color}20`, border: `1px solid ${p.color}40`, borderRadius: '100px', fontSize: '10px', color: p.color, fontWeight: 900 }}>{p.tag}</span>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 14.5px)', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quản trị Rủi ro & Đạo đức - PHẦN ĐIỂM NHẤN */}
        <div style={{ 
          background: 'linear-gradient(90deg, rgba(239,68,68,0.12) 0%, rgba(0,0,0,0.4) 100%)', 
          border: '1px solid rgba(239,68,68,0.3)', 
          borderRadius: '14px', 
          padding: '20px 24px', 
          zIndex: 1 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <span style={{ fontSize: '20px' }}>🛡️</span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', fontWeight: 800, color: '#ef4444', letterSpacing: '0.06em' }}>QUẢN TRỊ RỦI RO & ĐẠO ĐỨC AI</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
              <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Bảo mật & Riêng tư:</strong> Kiểm soát rò rỉ dữ liệu mật dự án thông qua chính sách an ninh mạng và sự phê duyệt chuyên biệt.
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
              <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Thiên kiến & Ảo giác:</strong> Luôn cần con người kiểm tra và xác thực để tránh các thông tin sai lệch hoặc không có thật từ AI.
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
              <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>Trách nhiệm giải trình:</strong> Con người phải là chủ thể chịu trách nhiệm cuối cùng cho mọi quyết định và thông điệp phát đi.
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
}