import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

// 🎨 IRU Premium SVG Logo Component
const Logo = ({ className = "", height = 42 }) => (
  <svg
    height={height}
    viewBox="0 0 320 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'block' }}
  >
    <rect x="10" y="10" width="85" height="100" rx="42.5" stroke="white" strokeWidth="2.8" />
    <rect x="13" y="13" width="79" height="94" rx="39.5" stroke="#8b6ce7" strokeWidth="1.2" opacity="0.6" />
    <g transform="translate(28, 30)">
      <circle cx="6" cy="6" r="4.5" fill="#8b6ce7" />
      <path d="M6 18V55" stroke="#8b6ce7" strokeWidth="8.5" strokeLinecap="round" />
      <path d="M25 18V55" stroke="#8b6ce7" strokeWidth="8.5" strokeLinecap="round" />
      <path d="M25 18C25 18 52 14 52 32C52 46 32 48 24 40" stroke="#8b6ce7" strokeWidth="8.5" strokeLinecap="round" fill="none" />
      <path d="M38 42L54 55" stroke="#8b6ce7" strokeWidth="8.5" strokeLinecap="round" />
      <path d="M12 55C12 55 15 65 40 65C62 65 65 55 65 35V18" stroke="#8b6ce7" strokeWidth="7.5" strokeLinecap="round" fill="none" />
    </g>
    <text x="115" y="86" fontFamily="Inter, sans-serif" fontSize="82" fontWeight="950" fill="white" letterSpacing="-5">IRU</text>
    <text x="117" y="26" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="800" fill="white" opacity="1" letterSpacing="0.2">LET'S MAKE IT HAPPEN</text>
    <text x="117" y="110" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#999" letterSpacing="1.2">SINCE 2022</text>
  </svg>
);

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app">
      {/* ═══════ NAV ═══════ */}
      <nav className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <Logo height={scrolled ? 32 : 40} />
          </a>
          <div className="nav-links">
            <a href="#about">About Us</a>
            <a href="#gallery">Portfolio</a>
            <a href="#technology">Technology</a>
            <a href="#inquiry" className="nav-cta">견적문의</a>
          </div>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <Logo height={100} className="hero-logo-large" style={{ marginBottom: '24px' }} />
          <h1>Precision Seat<br /><em>Mockup</em> Studio</h1>
          <div className="hero-tagline">LET'S MAKE IT HAPPEN — SINCE 2022</div>
          <p className="hero-desc">
            자동차 시트의 완벽한 형상과 질감을 구현합니다.<br />
            가죽의 결, 스티치의 정밀함까지 — 이루의 기술력입니다.
          </p>
          <div className="hero-buttons">
            <a href="#inquiry" className="btn-fill">
              견적 문의하기
              <ArrowRight size={16} />
            </a>
            <a href="#gallery" className="btn-ghost">갤러리 보기</a>
          </div>
        </div>
      </section>

      {/* ═══════ MARQUEE ═══════ */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[1, 2].map((i) => (
            <div key={i} className="marquee-text">
              IRU MOCKUP STUDIO <span className="dot">◆</span> SEAT DESIGN <span className="dot">◆</span> PROTOTYPE <span className="dot">◆</span> PRECISION CRAFT <span className="dot">◆</span>
              IRU MOCKUP STUDIO <span className="dot">◆</span> SEAT DESIGN <span className="dot">◆</span> PROTOTYPE <span className="dot">◆</span> PRECISION CRAFT <span className="dot">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ═══════ ABOUT ═══════ */}
      <section className="about" id="about" style={{ padding: '140px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <div className="reveal">
              <div style={{ aspectRatio: '3/4', background: 'var(--bg-card)', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', background: 'linear-gradient(160deg, #1a1a1a, #111)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>공장 / 작업 현장 이미지</span>
                </div>
                <div style={{ position: 'absolute', bottom: '-24px', right: '-24px', width: '120px', height: '120px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, color: '#fff' }}>22</div>
                  <div style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>Since</div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">자동차 시트 목업을<br />브랜드화 하는 전문 스튜디오</h2>
              <p className="section-desc">
                (주)이루는 완성차 업체와 부품사를 위한 프리미엄 시트 목업 솔루션을 제공합니다.
                가죽의 질감, 스티치의 정밀함, 폼의 곡면까지 — 실제와 동일한 목업으로 고객의 개발 과정을 완성합니다.
              </p>
              <div style={{ display: 'flex', gap: '48px', marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
                <div className="stat-item">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 600, color: 'var(--text-primary)' }}>500<span style={{ color: 'var(--accent-light)' }}>+</span></div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>누적 프로젝트</div>
                </div>
                <div className="stat-item">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 600, color: 'var(--text-primary)' }}>99<span style={{ color: 'var(--accent-light)' }}>%</span></div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>납기 준수율</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY ═══════ */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery-header" style={{ marginBottom: '64px' }}>
            <div className="reveal">
              <div className="section-label">Our Portfolio</div>
              <h2 className="section-title">가죽의 결과 스티치의 정밀함,<br />시각적 완성도를 담은 갤러리</h2>
            </div>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card featured reveal">
              <div className="gallery-card-image">
                <span style={{ fontSize: '3rem', opacity: 0.1 }}>💺</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>FULL SEAT MOCKUP</span>
              </div>
              <div className="gallery-card-overlay">
                <span className="tag">Seat Mockup · Full Set</span>
                <span className="title">프리미엄 시트 목업 — 풀 세트</span>
              </div>
            </div>
            <div className="gallery-card tall reveal reveal-delay-1">
              <div className="gallery-card-image">
                <span style={{ fontSize: '3rem', opacity: 0.1 }}>🪡</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>STITCH DETAIL</span>
              </div>
              <div className="gallery-card-overlay">
                <span className="tag">Detail · Stitching</span>
                <span className="title">더블 스티치 클로즈업</span>
              </div>
            </div>
            <div className="gallery-card reveal reveal-delay-2">
              <div className="gallery-card-image">
                <span style={{ fontSize: '3rem', opacity: 0.1 }}>🔲</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>LEATHER GRAIN</span>
              </div>
              <div className="gallery-card-overlay">
                <span className="tag">Material · Leather</span>
                <span className="title">천연가죽 텍스처</span>
              </div>
            </div>
            <div className="gallery-card wide reveal reveal-delay-2">
              <div className="gallery-card-image">
                <span style={{ fontSize: '3rem', opacity: 0.1 }}>⚙️</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '1px' }}>MECHANISM</span>
              </div>
              <div className="gallery-card-overlay">
                <span className="tag">Functional · Prototype</span>
                <span className="title">가변 메커니즘 시제품</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="cta" id="inquiry" style={{ padding: '120px 0', textAlign: 'center', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-label reveal">Contact Us</div>
          <h2 className="section-title reveal">프로젝트를 함께<br />시작하세요</h2>
          <div className="cta-buttons reveal" style={{ marginTop: '48px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="#" className="btn-fill">견적 요청하기 <ArrowRight size={16} /></a>
            <a href="tel:010-0000-0000" className="btn-ghost">📞 전화 문의</a>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="footer">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '40px' }}>
            <div>
              <Logo height={40} className="footer-logo" style={{ opacity: 0.6, marginBottom: '20px' }} />
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>자동차 시트 목업의 새로운 기준.<br />Let's Make It Happen.</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '10px', color: 'var(--text-secondary)' }}>
                <a href="#"><Mail size={18} /></a>
                <a href="#"><Phone size={18} /></a>
                <a href="#"><MapPin size={18} /></a>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>© 2026 (주)이루 IRU. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
