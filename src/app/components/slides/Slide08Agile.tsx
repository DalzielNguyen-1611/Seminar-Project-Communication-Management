import React from 'react';
import { SlideLayout } from '../SlideLayout';

const agileArtifacts = [
  {
    icon: '📡',
    title: 'Bức xạ thông tin (Information Radiators)',
    desc: 'Bảng Kanban, biểu đồ Burnup/Burndown được dán công khai giúp minh bạch hóa tiến độ thời gian thực (Pull communication).'
  },
  {
    icon: '🤝',
    title: 'Đồng sáng tạo (Co-creation)',
    desc: 'Xóa bỏ khoảng cách giữa Quản lý - Đội ngũ - Khách hàng, biến truyền thông thành quá trình cộng tác thay vì báo cáo một chiều.'
  },
  {
    icon: '📍',
    title: 'Không gian tập trung (Colocation)',
    desc: 'Ưu tiên ngồi làm việc cùng nhau hoặc sử dụng nền tảng cộng tác chuyên dụng để loại bỏ độ trễ trong chia sẻ thông tin.'
  }
];

const agileCeremonies = [
  { title: 'Họp đứng hàng ngày (Daily Standups)', time: 'Check-point thường xuyên', desc: 'Đồng bộ thông tin, điều chỉnh nhanh và tháo gỡ rào cản ngay lập tức.' },
  { title: 'Đánh giá sản phẩm (Reviews)', time: 'Demo thường xuyên', desc: 'Gắn kết các bên liên quan chặt chẽ vào dự án để lấy phản hồi liên tục.' },
  { title: 'Họp rút kinh nghiệm (Retrospectives)', time: 'Sau mỗi vòng lặp', desc: 'Đội nhóm nhìn lại và trao đổi để cải tiến quy trình làm việc hiệu quả hơn.' },
  { title: 'Phản hồi liên tục (Feedback Loops)', time: 'Chu kỳ ngắn (Sprints)', desc: 'Căn chỉnh User Stories theo nhu cầu mới phát sinh của các bên liên quan.' }
];

export function Slide08Agile() {
  return (
    // Đồng bộ currentSlide={9} để khớp với thanh điều hướng mục Agile 
    <SlideLayout currentSlide={9} slideTitle="Truyền Thông Agile & Hybrid">
      {/* Cập nhật padding 3% 4% và gap đồng bộ với các slide trước  */}
      <div style={{ padding: '3% 4%', height: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2%, 24px)', boxSizing: 'border-box', position: 'relative' }}>

        {/* Glow Effects */}
        <div style={{ position: 'absolute', width: '40%', height: '60%', top: '10%', right: '5%', background: 'radial-gradient(ellipse,rgba(139,92,246,0.12) 0%,transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

        {/* Heading */}
        <div style={{ zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '24px', height: '2px', background: 'linear-gradient(90deg,#8b5cf6,#0ea5e9)', borderRadius: '2px' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(8px, 0.8vw, 11px)', color: '#8b5cf6', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>TIẾP CẬN THÍCH ỨNG & LINH HOẠT</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.15 }}>
            Truyền Thông <span style={{ background: 'linear-gradient(90deg,#8b5cf6,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Agile & Hybrid</span> 
          </h2>
        </div>

        {/* Phổ phương pháp & Đặc điểm cốt lõi  */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '16px 24px', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontFamily: "'Inter', sans-serif", fontSize: '10px', color: 'rgba(255,255,255,0.5)', fontWeight: 700, letterSpacing: '0.1em' }}>
            <span>DỰ ĐOÁN (PREDICTIVE) - Hình thức theo cột mốc</span>
            <span style={{ color: '#fff' }}>LAI (HYBRID) - Kết hợp báo cáo tổng thể & phản hồi linh hoạt</span>
            <span>LINH HOẠT (AGILE) - Minh bạch & Phản hồi liên tục</span>
          </div>
          <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #0ea5e9 0%, #8b5cf6 100%)', opacity: 0.8 }} />
          </div>
        </div>

        {/* Nội dung chính: Đồng bộ gap 32px giống slide Quy trình  */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(16px, 2vw, 32px)', flex: 1, minHeight: 0, zIndex: 1 }}>
          
          {/* Cột 1: Công cụ & Môi trường  */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '16px', padding: 'clamp(16px, 2vh, 24px) clamp(20px, 2vw, 28px)', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 20px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(14,165,233,0.2)', paddingBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', background: 'rgba(14,165,233,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📊</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 700, color: '#0ea5e9' }}>Công cụ & Môi trường</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
              {agileArtifacts.map((artifact, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', background: 'rgba(0,0,0,0.2)', padding: '14px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontSize: '22px' }}>{artifact.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', color: '#fff', fontWeight: 700, marginBottom: '3px' }}>{artifact.title}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.45 }}>{artifact.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cột 2: Nhịp độ & Nghi thức  */}
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '16px', padding: 'clamp(16px, 2vh, 24px) clamp(20px, 2vw, 28px)', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 20px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid rgba(139,92,246,0.2)', paddingBottom: '10px' }}>
              <div style={{ width: '36px', height: '36px', background: 'rgba(139,92,246,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>⏰</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 700, color: '#8b5cf6' }}>Nghi thức Giao tiếp</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flex: 1 }}>
              {agileCeremonies.map((c, idx) => (
                <div key={idx} style={{ background: 'rgba(139,92,246,0.04)', border: '1px solid rgba(139,92,246,0.15)', padding: '14px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#a78bfa', fontWeight: 800 }}>{c.title}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: 'rgba(167, 139, 250, 0.7)', fontWeight: 700, letterSpacing: '0.05em' }}>{c.time.toUpperCase()}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4, marginTop: '6px' }}>{c.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Mục tiêu cao nhất  */}
        <div style={{ background: 'rgba(139,92,246,0.05)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '12px', padding: '12px 20px', zIndex: 1, textAlign: 'center' }}>
          <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
            <strong>Mục tiêu cao nhất:</strong> Đẩy nhanh vòng lặp phản hồi và xóa bỏ khoảng cách giữa Quản lý - Đội ngũ - Khách hàng, biến truyền thông thành một quá trình <strong>"Đồng sáng tạo"</strong> thực thụ.
          </p>
        </div>

      </div>
    </SlideLayout>
  );
}