import React, { useState } from 'react';
import { SlideLayout } from '../SlideLayout';

// Kiểu dữ liệu cho các mục chi tiết
type FullItem = {
  vi: string;
  en: string;
  desc: string;
};

const ittos = [
  {
    step: '1', 
    phase: 'LẬP KẾ HOẠCH',
    title: 'Plan Communications',
    color: '#0ea5e9', bg: 'rgba(14,165,233,0.06)', border: 'rgba(14,165,233,0.3)',
    inputs: {
      summary: ['1. Tuyên ngôn dự án', '2. Kế hoạch quản lý dự án', '3. Tài liệu dự án', '4. EEFs & OPAs'], 
      full: [
        { vi: 'Tuyên ngôn dự án', en: 'Project charter', desc: 'Tài liệu chính thức ủy quyền sự tồn tại của dự án và cấp quyền sử dụng nguồn lực.' },
        { vi: 'Kế hoạch quản lý dự án', en: 'Project management plan', desc: 'Tài liệu tích hợp các kế hoạch thành phần làm cơ sở cho kế hoạch truyền thông.' },
        { vi: 'Tài liệu dự án', en: 'Project documents', desc: 'Các tài liệu như Sổ đăng ký các bên liên quan giúp xác định ai cần thông tin gì.' },
        { vi: 'Yếu tố môi trường DN', en: 'Enterprise environmental factors', desc: 'Bao gồm văn hóa tổ chức, tiêu chuẩn ngành và điều kiện thị trường.' },
        { vi: 'Tài sản quy trình tổ chức', en: 'Organizational process assets', desc: 'Chính sách, quy trình, biểu mẫu báo cáo và bài học kinh nghiệm.' }
      ]
    },
    tools: {
      summary: ['1. Phân tích yêu cầu truyền thông', '2. Công nghệ, mô hình & phương pháp', '3. Họp & Đánh giá chuyên gia'], 
      full: [
        { vi: 'Đánh giá chuyên gia', en: 'Expert judgment', desc: 'Tham vấn cá nhân/nhóm có chuyên môn về quản lý thông tin và truyền thông.' },
        { vi: 'Phân tích yêu cầu', en: 'Communication requirements analysis', desc: 'Xác định nhu cầu thông tin thông qua phỏng vấn, khảo sát.' },
        { vi: 'Công nghệ truyền thông', en: 'Communication technology', desc: 'Công cụ, hệ thống sử dụng để chuyển giao thông tin (email, portal).' },
        { vi: 'Mô hình truyền thông', en: 'Communication models', desc: 'Mô tả quá trình gửi, nhận và phản hồi thông điệp.' },
        { vi: 'Phương pháp truyền thông', en: 'Communication methods', desc: 'Giao tiếp tương tác (Interactive), Đẩy (Push) hoặc Kéo (Pull) thông tin.' },
        { vi: 'Kỹ năng giao tiếp', en: 'Interpersonal and team skills', desc: 'Kỹ năng nhận thức chính trị, văn hóa và khả năng điều phối.' },
        { vi: 'Trình bày dữ liệu', en: 'Data representation', desc: 'Sử dụng biểu đồ, ma trận đánh giá mức độ tham gia của bên liên quan.' },
        { vi: 'Họp', en: 'Meetings', desc: 'Tổ chức các buổi thảo luận trực tiếp hoặc trực tuyến.' }
      ]
    },
    outputs: {
      summary: ['1. Kế hoạch quản lý truyền thông', '2. Cập nhật kế hoạch QLDA', '3. Cập nhật tài liệu dự án'],
      full: [
        { vi: 'Kế hoạch QL truyền thông', en: 'Communications management plan', desc: 'Mô tả cách thông tin dự án sẽ được quản lý, phân phối và lưu trữ.' },
        { vi: 'Cập nhật kế hoạch QLDA', en: 'Project management plan updates', desc: 'Điều chỉnh kế hoạch thành phần khác dựa trên chiến lược mới.' },
        { vi: 'Cập nhật tài liệu dự án', en: 'Project documents updates', desc: 'Cập nhật lịch trình, danh sách bên liên quan sau khi lập kế hoạch.' }
      ]
    },
  },
  {
    step: '2', 
    phase: 'THỰC THI',
    title: 'Manage Communications',
    color: '#8b5cf6', bg: 'rgba(139,92,246,0.06)', border: 'rgba(139,92,246,0.3)',
    inputs: {
      summary: ['1. Kế hoạch QLDA & tài liệu', '2. Báo cáo hiệu suất công việc', '3. EEFs & OPAs'],
      full: [
        { vi: 'Kế hoạch quản lý dự án', en: 'Project management plan', desc: 'Chứa Kế hoạch quản lý truyền thông hướng dẫn cách thực thi.' },
        { vi: 'Tài liệu dự án', en: 'Project documents', desc: 'Nhật ký vấn đề (Issue log), sổ đăng ký rủi ro cần được truyền đạt.' },
        { vi: 'Báo cáo hiệu suất CV', en: 'Work performance reports', desc: 'Các báo cáo tình trạng, tiến độ dự án đã được tổng hợp để phân phối.' },
        { vi: 'Yếu tố môi trường DN', en: 'Enterprise environmental factors', desc: 'Văn hóa, hạ tầng và các công cụ công nghệ sẵn có của tổ chức.' },
        { vi: 'Tài sản quy trình', en: 'Organizational process assets', desc: 'Quy trình liên lạc tiêu chuẩn và dữ liệu lịch sử dự án.' }
      ]
    },
    tools: {
      summary: ['1. Công nghệ & phương pháp', '2. Kỹ năng truyền thông', '3. Hệ thống PMIS & Báo cáo', '4. Kỹ năng nhóm & Họp'],
      full: [
        { vi: 'Công nghệ truyền thông', en: 'Communication technology', desc: 'Sử dụng nền tảng phù hợp để truyền tải thông điệp nhanh chóng.' },
        { vi: 'Phương pháp truyền thông', en: 'Communication methods', desc: 'Áp dụng linh hoạt các phương pháp tương tác, đẩy hoặc kéo thông tin.' },
        { vi: 'Kỹ năng truyền thông', en: 'Communication skills', desc: 'Kỹ năng thuyết trình, lắng nghe, phi ngôn ngữ và phản hồi.' },
        { vi: 'Hệ thống PMIS', en: 'Project management information system', desc: 'Phần mềm chia sẻ tài liệu, quản lý quy trình làm việc điện tử.' },
        { vi: 'Báo cáo dự án', en: 'Project reporting', desc: 'Hành động thu thập và phân phối thông tin dự án cho đúng đối tượng.' },
        { vi: 'Kỹ năng giao tiếp & nhóm', en: 'Interpersonal and team skills', desc: 'Xử lý xung đột, nhận thức văn hóa và điều phối.' },
        { vi: 'Họp', en: 'Meetings', desc: 'Các buổi họp báo cáo tiến độ, xử lý vấn đề hàng ngày.' }
      ]
    },
    outputs: {
      summary: ['1. Truyền thông dự án', '2. Cập nhật Kế hoạch & Tài liệu', '3. Cập nhật OPAs'],
      full: [
        { vi: 'Truyền thông dự án', en: 'Project communications', desc: 'Các email, thông báo, bản ghi nhớ, báo cáo thực tế đã được gửi đi.' },
        { vi: 'Cập nhật kế hoạch QLDA', en: 'Project management plan updates', desc: 'Điều chỉnh lịch trình hoặc kế hoạch giao tiếp nếu có thay đổi.' },
        { vi: 'Cập nhật tài liệu dự án', en: 'Project documents updates', desc: 'Cập nhật nhật ký vấn đề, bài học kinh nghiệm.' },
        { vi: 'Cập nhật OPAs', en: 'Organizational process assets updates', desc: 'Lưu trữ hồ sơ dự án, các biểu mẫu mới được tạo ra.' }
      ]
    },
  },
  {
    step: '3', 
    phase: 'KIỂM SOÁT',
    title: 'Monitor Communications',
    color: '#06b6d4', bg: 'rgba(6,182,212,0.06)', border: 'rgba(6,182,212,0.3)',
    inputs: {
      summary: ['1. Kế hoạch QLDA & tài liệu', '2. Dữ liệu hiệu suất công việc', '3. EEFs & OPAs'],
      full: [
        { vi: 'Kế hoạch quản lý dự án', en: 'Project management plan', desc: 'Cung cấp cơ sở (baseline) để so sánh hiệu quả truyền thông thực tế.' },
        { vi: 'Tài liệu dự án', en: 'Project documents', desc: 'Các bản log vấn đề, giao tiếp dự án dùng để đối chiếu.' },
        { vi: 'Dữ liệu hiệu suất CV', en: 'Work performance data', desc: 'Dữ liệu thô thu thập được từ quá trình thực thi dự án.' },
        { vi: 'Yếu tố môi trường DN', en: 'Enterprise environmental factors', desc: 'Khẩu vị rủi ro và các hệ thống phân tích dữ liệu của công ty.' },
        { vi: 'Tài sản quy trình', en: 'Organizational process assets', desc: 'Các quy trình giám sát và báo cáo tiêu chuẩn.' }
      ]
    },
    tools: {
      summary: ['1. Hệ thống PMIS & Trình bày DL', '2. Kỹ năng giao tiếp & nhóm', '3. Đánh giá chuyên gia & Họp'],
      full: [
        { vi: 'Đánh giá chuyên gia', en: 'Expert judgment', desc: 'Nhờ chuyên gia phân tích dữ liệu và tư vấn giải pháp khi có sự cố.' },
        { vi: 'Hệ thống PMIS', en: 'Project management information system', desc: 'Tự động hóa việc theo dõi và cảnh báo các chỉ số hiệu suất.' },
        { vi: 'Trình bày dữ liệu', en: 'Data representation', desc: 'Biểu diễn dữ liệu bằng biểu đồ để dễ dàng nhận diện xu hướng.' },
        { vi: 'Kỹ năng giao tiếp & nhóm', en: 'Interpersonal and team skills', desc: 'Đàm phán, giải quyết xung đột khi thông tin bị sai lệch.' },
        { vi: 'Họp', en: 'Meetings', desc: 'Các buổi họp kiểm điểm hiệu suất dự án định kỳ.' }
      ]
    },
    outputs: {
      summary: ['1. Thông tin hiệu suất công việc', '2. Yêu cầu thay đổi (Change requests)', '3. Cập nhật kế hoạch & tài liệu'],
      full: [
        { vi: 'Thông tin hiệu suất CV', en: 'Work performance information', desc: 'Dữ liệu đã phân tích, cho biết tình trạng thực tế của truyền thông.' },
        { vi: 'Yêu cầu thay đổi', en: 'Change requests', desc: 'Đề xuất chính thức để sửa đổi kế hoạch hoặc quy trình đang bị lỗi.' },
        { vi: 'Cập nhật kế hoạch QLDA', en: 'Project management plan updates', desc: 'Cập nhật lại kế hoạch truyền thông dựa trên các thay đổi được duyệt.' },
        { vi: 'Cập nhật tài liệu dự án', en: 'Project documents updates', desc: 'Cập nhật sổ đăng ký các bên liên quan, nhật ký vấn đề.' }
      ]
    },
  },
];

// Component hiển thị từng khối I, T, O
function ITOBlock({ label, items, color, onClick }: { label: string; items: string[]; color: string, onClick: () => void }) {
  return (
    <div 
      className="itto-block"
      onClick={onClick}
      style={{ display: 'flex', flexDirection: 'column', gap: '6px', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '8px', borderTop: `2px solid ${color}` }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(11px, 1vw, 14px)', color: color, fontWeight: 700, letterSpacing: '0.05em' }}>
          {label}
        </div>
        <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)' }} className="click-hint">Click xem chi tiết ⤢</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {items.map((item, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
            <span style={{ color: color, fontSize: 'clamp(10px, 0.9vw, 13px)', lineHeight: 1.4, opacity: 0.8 }}>›</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(11px, 1vw, 14px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.4 }}>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Slide04bITTO() {
  const [activeModal, setActiveModal] = useState<{ phase: string, type: string, fullItems: FullItem[], color: string } | null>(null);

  return (
    <SlideLayout currentSlide={5} slideTitle="ITTOs Truyền Thông">
      <div style={{ padding: '3% 4%', height: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2%, 24px)', boxSizing: 'border-box', position: 'relative' }}>

        {/* Glow */}
        <div style={{ position: 'absolute', width: '60%', height: '80%', top: '-10%', left: '20%', background: 'radial-gradient(ellipse,rgba(139,92,246,0.08) 0%,transparent 65%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

        {/* Heading */}
        <div style={{ flexShrink: 0, zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '24px', height: '3px', background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', borderRadius: '2px', boxShadow: '0 0 6px rgba(139,92,246,0.5)' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(8px, 0.8vw, 11px)', color: '#8b5cf6', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>CÔNG CỤ & KỸ THUẬT</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.15 }}>
            Tóm tắt <span style={{ background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>ITTOs (PMBOK 6)</span>
          </h2>
        </div>

        {/* 3 Cột Dọc */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2vw, 32px)', flex: 1, minHeight: 0, zIndex: 1 }}>
          {ittos.map((p, i) => (
            <div key={i} style={{
              background: 'linear-gradient(135deg,rgba(255,255,255,0.06) 0%,rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${p.border}`,
              borderTop: `4px solid ${p.color}`,
              borderRadius: '16px',
              padding: 'clamp(16px, 2vw, 24px)',
              display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 20px)',
              boxShadow: `0 8px 24px ${p.bg}`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: `1px solid ${p.border}`, paddingBottom: '12px', flexShrink: 0 }}>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(10px, 1vw, 13px)', color: p.color, fontWeight: 700, letterSpacing: '0.1em', marginBottom: '4px', textTransform: 'uppercase' }}>
                    {p.phase}
                  </div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(16px, 1.8vw, 22px)', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                    {p.title}
                  </div>
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: p.color, opacity: 0.2, lineHeight: 0.9 }}>
                  {p.step}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 1.5vh, 16px)', flex: 1 }}>
                <ITOBlock label="ĐẦU VÀO (INPUTS)" items={p.inputs.summary} color={p.color} onClick={() => setActiveModal({ phase: p.title, type: 'ĐẦU VÀO (INPUTS)', fullItems: p.inputs.full, color: p.color })} />
                <ITOBlock label="CÔNG CỤ & KỸ THUẬT" items={p.tools.summary} color={p.color} onClick={() => setActiveModal({ phase: p.title, type: 'CÔNG CỤ & KỸ THUẬT', fullItems: p.tools.full, color: p.color })} />
                <ITOBlock label="ĐẦU RA (OUTPUTS)" items={p.outputs.summary} color={p.color} onClick={() => setActiveModal({ phase: p.title, type: 'ĐẦU RA (OUTPUTS)', fullItems: p.outputs.full, color: p.color })} />
              </div>
            </div>
          ))}
        </div>

        {/* ================= MODAL / POP-UP CHI TIẾT TỐI ƯU 2 CỘT ================= */}
        {activeModal && (
          <div 
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setActiveModal(null)}
          >
            {/* Modal Container: Giới hạn chiều cao 75vh, mở rộng chiều ngang */}
            <div 
              style={{ 
                background: '#0f172a', 
                border: `1px solid ${activeModal.color}`, 
                borderTop: `6px solid ${activeModal.color}`, 
                borderRadius: '16px', 
                padding: '24px 32px', 
                width: '90%', 
                maxWidth: '900px', // Đủ rộng cho 2 cột
                maxHeight: '75vh', // Giữ an toàn khỏi thanh nav trên/dưới
                display: 'flex',
                flexDirection: 'column',
                boxShadow: `0 20px 60px ${activeModal.color}40`, 
                position: 'relative' 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveModal(null)}
                style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '24px', cursor: 'pointer', zIndex: 10 }}
              >
                ✕
              </button>

              {/* Modal Header (Cố định) */}
              <div style={{ flexShrink: 0, paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '16px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '6px' }}>
                  CHI TIẾT {activeModal.type}
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', color: activeModal.color, fontWeight: 800 }}>
                  {activeModal.phase}
                </div>
              </div>

              {/* Danh sách Full: Chia 2 cột, Tự động cuộn */}
              <div 
                className="custom-scrollbar"
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', // 2 cột ngang
                  gap: '16px', 
                  overflowY: 'auto', // Cuộn chuột nếu dài quá 5 dòng
                  paddingRight: '8px',
                  flex: 1
                }}
              >
                {activeModal.fullItems.map((item, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '14px', borderRadius: '10px', borderLeft: `3px solid ${activeModal.color}`, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: '#fff', lineHeight: 1.4 }}>
                      <span style={{ fontWeight: 700 }}>{item.vi}</span> <span style={{ color: activeModal.color, opacity: 0.9 }}>- {item.en}</span>
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.45, fontStyle: 'italic' }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* CSS cho hiệu ứng Hover và Scrollbar */}
        <style dangerouslySetInnerHTML={{__html: `
          .itto-block {
            transition: all 0.2s ease;
            cursor: pointer;
          }
          .itto-block:hover {
            background: rgba(255, 255, 255, 0.08) !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          }
          .click-hint {
            opacity: 0;
            transition: opacity 0.2s ease;
          }
          .itto-block:hover .click-hint {
            opacity: 1;
          }
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); border-radius: 6px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 6px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.3); }
        `}} />
      </div>
    </SlideLayout>
  );
}