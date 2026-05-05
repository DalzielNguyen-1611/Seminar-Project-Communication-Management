import React from 'react';
import { SlideLayout } from '../SlideLayout';

const pillars = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><rect x="4" y="8" width="24" height="18" rx="3" stroke="#0ea5e9" strokeWidth="1.6"/><path d="M10 14H22M10 18H18" stroke="#0ea5e9" strokeWidth="1.4" strokeLinecap="round"/><path d="M16 4V8" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round"/><circle cx="24" cy="8" r="4" fill="#8b5cf6"/><path d="M22.5 8L23.5 9L25.5 7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    tag: 'TRỤ CỘT 01',
    title: 'Hỗ trợ bởi AI',
    subtitle: 'Công nghệ là Đòn bẩy',
    color: '#0ea5e9', border: 'rgba(14,165,233,0.3)', bg: 'rgba(14,165,233,0.08)',
    desc: 'AI mở khóa tốc độ qua 3 cấp độ: Tự động hóa tác vụ lặp lại, Hỗ trợ cảnh báo sớm và Tăng cường phân tích cảm xúc (NLP).',
    traits: ['Tự động hóa báo cáo & Dashboards', 'Tín hiệu cảnh báo sớm rủi ro', 'Phân tích cảm xúc (Sentiment)', 'Cá nhân hóa chiến lược giao tiếp'],
    quote: '"AI không thay thế PM, AI nâng tầm PM thành cố vấn chiến lược."',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="10" r="5" stroke="#8b5cf6" strokeWidth="1.6"/><path d="M6 26C6 21.6 10.5 18 16 18C21.5 18 26 21.6 26 26" stroke="#8b5cf6" strokeWidth="1.6" strokeLinecap="round"/><path d="M10 12C10 12 8 15 8 18" stroke="#8b5cf6" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/><path d="M22 12C22 12 24 15 24 18" stroke="#8b5cf6" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/></svg>,
    tag: 'TRỤ CỘT 02',
    title: 'Con người dẫn dắt',
    subtitle: 'Thấu cảm là Cốt lõi',
    color: '#8b5cf6', border: 'rgba(139,92,246,0.35)', bg: 'rgba(139,92,246,0.1)',
    desc: 'AI xử lý Dữ liệu, con người tập trung vào Trí tuệ và sự Thấu cảm. Các "Kỹ năng quyền lực" là yếu tố không thể tự động hóa.',
    traits: ['Trí tuệ cảm xúc & Thấu cảm', 'Lãnh đạo phục vụ (Servant)', 'Đàm phán & Giải quyết xung đột', 'Xây dựng niềm tin & Gắn kết'],
    quote: '"Công nghệ là công cụ. Thấu cảm là chiến lược."',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M16 4L28 10V22L16 28L4 22V10L16 4Z" stroke="#06b6d4" strokeWidth="1.6"/><path d="M16 10L22 13V19L16 22L10 19V13L16 10Z" stroke="#06b6d4" strokeWidth="1.3"/><circle cx="16" cy="16" r="2" fill="#06b6d4"/></svg>,
    tag: 'TRỤ CỘT 03',
    title: 'Linh hoạt & Đồng sáng tạo',
    subtitle: 'Thích ứng & Minh bạch',
    color: '#06b6d4', border: 'rgba(6,182,212,0.3)', bg: 'rgba(6,182,212,0.08)',
    desc: 'Xóa bỏ khoảng cách giữa Quản lý - Khách hàng. Ưu tiên sự minh bạch quyết liệt và phản hồi liên tục qua các chu kỳ ngắn.',
    traits: ['Đồng sáng tạo (Co-creation)', 'Minh bạch quyết liệt (Transparency)', 'Bức xạ thông tin thời gian thực', 'Giao tiếp đa diện & Đa văn hóa'],
    quote: '"Kế hoạch linh hoạt thắng quy trình cứng nhắc."',
  },
];

export function Slide11Future() {
  return (
    // ĐÃ ĐIỀU CHỈNH LẠI THÀNH 11 ĐỂ KHỚP VỚI MẢNG 12 SLIDE
    <SlideLayout currentSlide={11} slideTitle="Tầm Nhìn Tương Lai">
      <div style={{ padding: '3% 4%', height: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2%, 24px)', boxSizing: 'border-box', position: 'relative' }}>

        {/* Glow Effects */}
        <div style={{ position: 'absolute', width: '55%', height: '80%', top: '-10%', right: '-5%', background: 'radial-gradient(ellipse,rgba(139,92,246,0.18) 0%,transparent 65%)', filter: 'blur(45px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '45%', height: '70%', bottom: '-15%', left: '-5%', background: 'radial-gradient(ellipse,rgba(14,165,233,0.14) 0%,transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        {/* Heading */}
        <div style={{ zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '24px', height: '3px', background: 'linear-gradient(90deg,#8b5cf6,#0ea5e9)', borderRadius: '2px', boxShadow: '0 0 6px rgba(139,92,246,0.5)' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(8px, 0.8vw, 11px)', color: '#8b5cf6', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>HƯỚNG TỚI NGÀY MAI</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.15 }}>
            Tương Lai Của <span style={{ background: 'linear-gradient(90deg,#8b5cf6,#0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Truyền Thông Dự Án</span>
          </h2>
        </div>

        {/* 3 Pillar Cards - Đồng bộ gap 32px giống slide Quy trình và Con người */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'clamp(16px, 2vw, 32px)', flex: 1, zIndex: 1 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              background: i === 1
                ? 'linear-gradient(135deg,rgba(139,92,246,0.12) 0%,rgba(255,255,255,0.02) 100%)'
                : 'linear-gradient(135deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.02) 100%)',
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${p.border}`,
              borderRadius: '20px',
              padding: 'clamp(20px, 2.5vh, 32px) clamp(24px, 2.5vw, 36px)',
              display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 20px)',
              position: 'relative', overflow: 'hidden',
              boxShadow: i === 1
                ? '0 0 40px rgba(139,92,246,0.15), inset 0 1px 0 rgba(139,92,246,0.15)'
                : `0 0 24px ${p.bg}`,
              transition: 'transform 0.2s ease',
            }} className="future-card">
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg,${p.color},transparent)`, boxShadow: `0 0 8px ${p.color}50` }} />

              {/* Icon + Tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: `linear-gradient(135deg,${p.bg},rgba(2,6,23,0.4))`, border: `1px solid ${p.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 14px ${p.bg}` }}>{p.icon}</div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: p.color, fontWeight: 800, letterSpacing: '0.1em', background: p.bg, border: `1px solid ${p.color}40`, padding: '4px 10px', borderRadius: '100px' }}>{p.tag}</span>
              </div>

              {/* Title */}
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(18px, 1.8vw, 24px)', fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>{p.title}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: p.color, fontWeight: 700, marginTop: '4px' }}>{p.subtitle}</div>
              </div>

              <div style={{ height: '1px', background: `linear-gradient(90deg,${p.border},transparent)` }} />

              {/* Description */}
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13.5px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{p.desc}</div>

              {/* Traits */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                {p.traits.map((t, ti) => (
                  <div key={ti} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: p.color, boxShadow: `0 0 6px ${p.color}` }} />
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', borderLeft: `3px solid ${p.color}` }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12.5px', color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', lineHeight: 1.5 }}>{p.quote}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Summary */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '14px 20px', zIndex: 1, textAlign: 'center' }}>
          <p style={{ margin: 0, fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
            <strong>Tổng kết:</strong> Quản lý truyền thông tương lai là thiết kế và vận hành một <strong>hệ sinh thái giao tiếp đồng bộ</strong>, nơi sức mạnh phân tích của AI kết hợp hoàn hảo với trí tuệ cảm xúc của con người.
          </p>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .future-card:hover { transform: translateY(-6px); border-color: rgba(255,255,255,0.2) !important; }
        `}} />
      </div>
    </SlideLayout>
  );
}