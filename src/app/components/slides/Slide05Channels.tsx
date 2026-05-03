import React, { useState } from 'react';
import { SlideLayout } from '../SlideLayout';

const channels = [
  {
    type: 'INTERACTIVE',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 10H16M8 14H13" stroke="#8b5cf6" strokeWidth="1.6" strokeLinecap="round"/><path d="M4 6C4 4.9 4.9 4 6 4H18C19.1 4 20 4.9 20 6V14C20 15.1 19.1 16 18 16H14L10 20V16H6C4.9 16 4 15.1 4 14V6Z" stroke="#8b5cf6" strokeWidth="1.6"/></svg>,
    title: 'Giao Tiếp Tương Tác',
    subtitle: '(Interactive communication)',
    desc: 'Trao đổi thông tin đa chiều theo thời gian thực giữa hai hoặc nhiều bên. Là phương pháp cốt lõi để đảm bảo mọi người hiểu chung một vấn đề.',
    examples: ['Họp trực tiếp', 'Gọi điện thoại', 'Nhắn tin tức thời', 'Hội nghị trực tuyến', 'Mạng xã hội'],
    color: '#8b5cf6', border: 'rgba(139,92,246,0.3)', bg: 'rgba(139,92,246,0.1)',
    highlight: true,
  },
  {
    type: 'PUSH',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 4H20V16H4V4Z" stroke="#0ea5e9" strokeWidth="1.6" rx="2"/><path d="M4 8L12 13L20 8" stroke="#0ea5e9" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    title: 'Giao Tiếp Đẩy',
    subtitle: '(Push communication)',
    desc: 'Thông tin được gửi trực tiếp đến người nhận cụ thể. Đảm bảo thông tin đã được phân phối nhưng không đảm bảo nó được thấu hiểu.',
    examples: ['Email', 'Báo cáo', 'Bản ghi nhớ (Memos)', 'Thư thoại', 'Thông cáo báo chí'],
    color: '#0ea5e9', border: 'rgba(14,165,233,0.25)', bg: 'rgba(14,165,233,0.08)',
  },
  {
    type: 'PULL',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#06b6d4" strokeWidth="1.6"/><path d="M12 8V16M8 12H16" stroke="#06b6d4" strokeWidth="1.6" strokeLinecap="round"/></svg>,
    title: 'Giao Tiếp Kéo',
    subtitle: '(Pull communication)',
    desc: 'Dùng cho lượng thông tin lớn, phức tạp hoặc khán giả đông đảo. Yêu cầu người nhận phải tự chủ động truy cập nội dung khi có nhu cầu.',
    examples: ['Cổng thông tin web', 'Trang mạng nội bộ', 'E-learning', 'Cơ sở dữ liệu', 'Kho kiến thức'],
    color: '#06b6d4', border: 'rgba(6,182,212,0.25)', bg: 'rgba(6,182,212,0.08)',
  },
];

const otherMethodsFull = [
  { vi: 'Giao tiếp giữa các cá nhân', en: 'Interpersonal communication', desc: 'Thông tin được trao đổi trực tiếp giữa các cá nhân với nhau (thường là mặt đối mặt).' },
  { vi: 'Giao tiếp nhóm nhỏ', en: 'Small group communication', desc: 'Diễn ra trong các nhóm có quy mô khoảng ba đến sáu người.' },
  { vi: 'Giao tiếp công chúng', en: 'Public communication', desc: 'Một diễn giả duy nhất trình bày trước một nhóm đông người.' },
  { vi: 'Giao tiếp đại chúng', en: 'Mass communication', desc: 'Có sự kết nối tối thiểu giữa người hoặc nhóm gửi thông điệp với các nhóm lớn (đôi khi là ẩn danh) là những người được nhắm đến để nhận thông tin.' },
  { vi: 'Mạng lưới & Máy tính xã hội', en: 'Networks and social computing', desc: 'Hỗ trợ các xu hướng giao tiếp mới nổi "nhiều-người-với-nhiều-người" (many-to-many) được hỗ trợ bởi công nghệ và các phương tiện truyền thông xã hội.' }
];

const fiveCs = [
  { c: 'Clear', desc: 'Thông điệp rõ ràng', color: '#0ea5e9' },
  { c: 'Concise', desc: 'Ngắn gọn, súc tích', color: '#38bdf8' },
  { c: 'Courteous', desc: 'Thái độ lịch sự', color: '#8b5cf6' },
  { c: 'Coherent', desc: 'Mạch lạc, logic', color: '#a78bfa' },
  { c: 'Complete', desc: 'Đầy đủ thông tin', color: '#06b6d4' },
];

export function Slide05Channels() {
  const [showMethodsModal, setShowMethodsModal] = useState(false);

  return (
    <SlideLayout currentSlide={6} slideTitle="Các Phương Pháp Giao Tiếp">
      {/* padding đã được chỉnh lại thành 3% 4% để khớp slide 4[cite: 5, 6] */}
      <div style={{ padding: '3% 4%', height: '100%', display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2%, 24px)', boxSizing: 'border-box', position: 'relative' }}>

        {/* Glow */}
        <div style={{ position: 'absolute', width: '45%', height: '80%', top: '-10%', right: '-5%', background: 'radial-gradient(ellipse,rgba(139,92,246,0.12) 0%,transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        {/* Heading */}
        <div style={{ flexShrink: 0, zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <div style={{ width: '24px', height: '3px', background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', borderRadius: '2px', boxShadow: '0 0 6px rgba(14,165,233,0.5)' }} />
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(8px, 0.8vw, 11px)', color: '#0ea5e9', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>PHƯƠNG PHÁP & CÁCH TIẾP CẬN</span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(20px, 2.5vw, 36px)', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.15 }}>
            3 Phương Pháp <span style={{ background: 'linear-gradient(90deg,#0ea5e9,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Giao Tiếp Cốt Lõi</span>
          </h2>
        </div>

        {/* 3 Channel Cards (Grid gap đồng bộ slide 4)[cite: 5, 6] */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(16px, 2vw, 32px)', flex: 1, minHeight: 0, zIndex: 1 }}>
          {channels.map((ch, i) => (
            <div key={i} style={{
              background: ch.highlight
                ? 'linear-gradient(135deg,rgba(139,92,246,0.12) 0%,rgba(139,92,246,0.02) 100%)'
                : 'linear-gradient(135deg,rgba(255,255,255,0.05) 0%,rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
              border: `1px solid ${ch.border}`,
              borderRadius: '16px',
              padding: 'clamp(16px, 2vh, 24px) clamp(20px, 2vw, 28px)',
              display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vh, 20px)',
              position: 'relative', overflow: 'hidden',
              boxShadow: ch.highlight
                ? '0 8px 32px rgba(139,92,246,0.15)'
                : '0 6px 20px rgba(0,0,0,0.2)',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg,${ch.color},transparent)`, boxShadow: ch.highlight ? `0 0 12px ${ch.color}` : 'none' }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div style={{ width: 'clamp(40px, 4vw, 50px)', height: 'clamp(40px, 4vw, 50px)', borderRadius: '12px', background: ch.bg, border: `1px solid ${ch.color}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 16px ${ch.bg}`, flexShrink: 0 }}>
                  {ch.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(16px, 1.8vw, 22px)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{ch.title}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(11px, 1vw, 14px)', color: ch.color, fontWeight: 600, marginTop: '2px' }}>{ch.subtitle}</div>
                </div>
              </div>

              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                {ch.desc}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'auto', background: 'rgba(0,0,0,0.2)', padding: '12px', borderRadius: '10px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(10px, 0.9vw, 12px)', color: ch.color, fontWeight: 700, letterSpacing: '0.05em' }}>CÁC TẠO TÁC TRUYỀN THÔNG:</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {ch.examples.map((ex, ei) => (
                    <div key={ei} style={{ padding: '4px 10px', background: 'rgba(255,255,255,0.05)', border: `1px solid ${ch.color}40`, borderRadius: '6px', fontFamily: "'Inter', sans-serif", fontSize: 'clamp(11px, 1vw, 14px)', color: 'rgba(255,255,255,0.9)' }}>
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="methods-block"
          onClick={() => setShowMethodsModal(true)}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '12px 16px', overflow: 'hidden', cursor: 'pointer', position: 'relative' }}
        >
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(11px, 1vw, 14px)', color: '#0ea5e9', fontWeight: 700, letterSpacing: '0.05em', whiteSpace: 'nowrap', borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '12px' }}>
            CÁC CÁCH TIẾP CẬN KHÁC:
          </div>
          <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '4px', flex: 1 }} className="hide-scroll">
            {otherMethodsFull.map((method, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
                <span style={{ color: '#8b5cf6', fontSize: '14px' }}>•</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(12px, 1.1vw, 15px)', color: 'rgba(255,255,255,0.7)' }}>{method.vi}</span>
              </div>
            ))}
          </div>
          <div style={{ position: 'absolute', right: '16px', background: 'linear-gradient(90deg, transparent, #0f172a 50%)', paddingLeft: '40px', height: '100%', display: 'flex', alignItems: 'center' }}>
            <span className="click-hint-text" style={{ fontSize: '12px', color: '#0ea5e9', fontWeight: 600, fontStyle: 'italic' }}>Click xem chi tiết ⤢</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 1vw, 16px)', background: 'linear-gradient(90deg, rgba(14,165,233,0.05) 0%, rgba(139,92,246,0.05) 100%)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: '14px', padding: '14px 20px' }}>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(14px, 1.3vw, 18px)', color: '#fff', fontWeight: 800, letterSpacing: '0.05em', flexShrink: 0, paddingRight: '16px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>QUY TẮC 5C:</span>
          {fiveCs.map((c, i) => (
            <div key={i} style={{ display: 'flex', flex: 1, alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', padding: '8px', background: `${c.color}15`, border: `1px solid ${c.color}40`, borderRadius: '10px', boxShadow: `0 4px 12px ${c.color}10`, transition: 'transform 0.2s', cursor: 'default' }} className="hover-scale">
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(15px, 1.4vw, 20px)', fontWeight: 800, color: c.color }}>{c.c}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(11px, 1vw, 14px)', color: 'rgba(255,255,255,0.8)', marginTop: '2px', textAlign: 'center' }}>{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {showMethodsModal && (
          <div 
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setShowMethodsModal(false)}
          >
            <div 
              style={{ 
                background: '#0f172a', 
                border: `1px solid #0ea5e9`, 
                borderTop: `6px solid #0ea5e9`, 
                borderRadius: '16px', 
                padding: '24px 32px', 
                width: '90%', 
                maxWidth: '750px', 
                maxHeight: '80vh', 
                display: 'flex',
                flexDirection: 'column',
                boxShadow: `0 20px 60px rgba(14,165,233,0.4)`, 
                position: 'relative' 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowMethodsModal(false)}
                style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'rgba(255,255,255,0.5)', fontSize: '24px', cursor: 'pointer', zIndex: 10 }}
              >
                ✕
              </button>

              <div style={{ flexShrink: 0, paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '16px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '6px' }}>
                  CHI TIẾT PHƯƠNG PHÁP
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', color: '#0ea5e9', fontWeight: 800 }}>
                  Các Cách Tiếp Cận Khác
                </div>
              </div>

              <div 
                className="custom-scrollbar"
                style={{ display: 'flex', flexDirection: 'column', gap: '14px', overflowY: 'auto', paddingRight: '8px', flex: 1 }}
              >
                {otherMethodsFull.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'rgba(255,255,255,0.03)', padding: '14px 16px', borderRadius: '10px', borderLeft: `3px solid #8b5cf6` }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', color: '#fff', lineHeight: 1.4, marginBottom: '4px' }}>
                        <span style={{ fontWeight: 700 }}>{item.vi}</span> <span style={{ color: '#0ea5e9', opacity: 0.9 }}>- {item.en}</span>
                      </div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, fontStyle: 'italic' }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <style dangerouslySetInnerHTML={{__html: `
          .hide-scroll::-webkit-scrollbar { display: none; }
          .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
          .hover-scale { transition: transform 0.2s; }
          .hover-scale:hover { transform: translateY(-3px); }
          .methods-block { transition: all 0.2s ease; }
          .methods-block:hover { 
            background: rgba(255, 255, 255, 0.08) !important; 
            border-color: rgba(14,165,233,0.4) !important;
            box-shadow: 0 4px 15px rgba(14,165,233,0.15);
          }
          .click-hint-text { opacity: 0; transition: opacity 0.2s ease; }
          .methods-block:hover .click-hint-text { opacity: 1; }
          .custom-scrollbar::-webkit-scrollbar { width: 6px; }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); border-radius: 6px; }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 6px; }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.3); }
        `}} />
      </div>
    </SlideLayout>
  );
}