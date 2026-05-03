import { SlideLayout } from '../SlideLayout';

const processes = [
  {
    step: '1', 
    phase: 'LẬP KẾ HOẠCH',
    title: 'Plan Communications', // Rút gọn tên cho vừa thẻ dọc
    color: '#0ea5e9', bg: 'rgba(14,165,233,0.06)', border: 'rgba(14,165,233,0.3)',
    vn: {
      objective: 'Xây dựng chiến lược tiếp cận phù hợp với nhu cầu thông tin.',
      activities: [
        'Phân tích nhu cầu thông tin.',
        'Xác định nguồn lực sẵn có.',
        'Lựa chọn công nghệ.'
      ],
      result: 'Quy định rõ tần suất báo cáo, người chịu trách nhiệm và các mẫu biểu mẫu sẽ sử dụng.'
    }
  },
  {
    step: '2', 
    phase: 'THỰC THI',
    title: 'Manage Communications',
    color: '#8b5cf6', bg: 'rgba(139,92,246,0.06)', border: 'rgba(139,92,246,0.3)',
    vn: {
      objective: 'Đảm bảo luồng thông tin dự án thông suốt, kịp thời và hiệu quả.',
      activities: [
        'Thu thập dữ liệu thực tế.',
        'Tạo lập thông báo dự án.',
        'Phân phối báo cáo hiệu suất.',
        'Lưu trữ hồ sơ dự án.'
      ],
      result: 'Duy trì sự kết nối và minh bạch thông tin giữa đội ngũ dự án và khách hàng/nhà đầu tư.'
    }
  },
  {
    step: '3', 
    phase: 'KIỂM SOÁT',
    title: 'Monitor Communications',
    color: '#06b6d4', bg: 'rgba(6,182,212,0.06)', border: 'rgba(6,182,212,0.3)',
    vn: {
      objective: 'Giám sát và đảm bảo nhu cầu thông tin luôn được đáp ứng.',
      activities: [
        'Đánh giá hiệu quả truyền thông.',
        'Thu thập phản hồi.',
        'Xử lý sai lệch (Change Requests).'
      ],
      result: 'Cập nhật lại kế hoạch quản lý dự án và các tài liệu liên quan để tối ưu hóa việc giao tiếp trong tương lai.'
    }
  },
];

export function Slide04ITTO() {
  return (
    <SlideLayout currentSlide={4} slideTitle="Quy Trình Truyền Thông">
      <div style={{ padding: '3% 4%', height: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2%, 24px)', boxSizing: 'border-box', position: 'relative' }}>

        {/* Glow */}
        <div style={{ position: 'absolute', width: '60%', height: '80%', top: '-10%', left: '20%', background: 'radial-gradient(ellipse,rgba(14,165,233,0.08) 0%,transparent 65%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

        {/* Heading */}
        <div style={{ flexShrink: 0, zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '24px', height: '3px', background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', borderRadius: '2px', boxShadow: '0 0 6px rgba(14,165,233,0.5)' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(8px, 0.8vw, 11px)', color: '#0ea5e9', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>QUẢN LÝ TRUYỀN THÔNG</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.15 }}>
            Quy Trình <span style={{ background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>3 Giai Đoạn</span>
          </h2>
        </div>

        {/* 3 Cột Dọc (Grid Layout) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2vw, 32px)', flex: 1, minHeight: 0, zIndex: 1 }}>
          {processes.map((p, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${p.border}`,
              borderTop: `4px solid ${p.color}`, // Chuyển viền màu lên trên đỉnh
              borderRadius: '16px',
              padding: 'clamp(16px, 2vw, 24px)',
              display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 20px)',
              boxShadow: `0 8px 24px ${p.bg}`,
              overflow: 'hidden'
            }}>
              
              {/* Header Giai đoạn */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: `1px solid ${p.border}`, paddingBottom: '12px' }}>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(10px, 1vw, 13px)', color: p.color, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '4px' }}>
                    {p.phase}
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(16px, 1.8vw, 24px)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                    {p.title}
                  </div>
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, color: p.color, opacity: 0.2, lineHeight: 0.9 }}>
                  {p.step}
                </div>
              </div>

              {/* Nội dung: Xếp chồng dọc */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.5vh, 16px)', flex: 1 }}>
                
                {/* Mục tiêu */}
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', borderLeft: `2px solid ${p.color}` }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: p.color, fontWeight: 700, letterSpacing: '0.05em', marginBottom: '6px' }}>
                    MỤC TIÊU
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>
                    {p.vn.objective}
                  </div>
                </div>

                {/* Hoạt động chính */}
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', borderLeft: `2px solid ${p.color}` }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: p.color, fontWeight: 700, letterSpacing: '0.05em', marginBottom: '6px' }}>
                    HOẠT ĐỘNG CHÍNH
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {p.vn.activities.map((act, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <span style={{ color: p.color, fontSize: 'clamp(12px, 1.1vw, 15px)', lineHeight: 1.45, opacity: 0.8 }}>•</span>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kết quả (Đẩy xuống cuối thẻ) */}
                <div style={{ background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', borderLeft: `2px solid ${p.color}`, marginTop: 'auto' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: p.color, fontWeight: 700, letterSpacing: '0.05em', marginBottom: '6px' }}>
                    KẾT QUẢ
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: '#fff', fontStyle: 'italic', lineHeight: 1.45, opacity: 0.9 }}>
                    {p.vn.result}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </SlideLayout>
  );
}