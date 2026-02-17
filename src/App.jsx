import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('전체');

  const categories = ['전체', 'Full Seat', 'Stitching', 'Material', 'Prototype'];

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
    <div className={`app ${menuOpen ? 'menu-open' : ''}`}>
      {/* ═══════ NAV ═══════ */}
      <nav className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <img src="/logo.png" alt="(주)이루 IRU" style={{ height: scrolled ? '32px' : '38px', transition: 'all 0.3s' }} />
          </a>

          <div className="nav-links desktop-only">
            <a href="#about">About Us</a>
            <a href="#gallery">Portfolio</a>
            <a href="#technology">Technology</a>
            <a href="#inquiry" className="nav-cta">견적문의</a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us <ChevronRight size={18} /></a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Portfolio <ChevronRight size={18} /></a>
            <a href="#technology" onClick={() => setMenuOpen(false)}>Technology <ChevronRight size={18} /></a>
            <a href="#inquiry" className="mobile-cta" onClick={() => setMenuOpen(false)}>견적문의</a>
          </div>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <img src="/logo.png" alt="IRU" className="hero-logo-large" style={{ height: scrolled ? '60px' : '80px', marginBottom: '24px' }} />
          <h1>Precision Seat<br /><em className="accent-text">Mockup</em> Studio</h1>
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

      {/* ═══════ CATEGORY CHIPS ═══════ */}
      <div className="category-section">
        <div className="container">
          <div className="category-scroll">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-chip ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ ABOUT ═══════ */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="reveal">
              <div className="about-image-card">
                <div className="image-placeholder">
                  <span className="placeholder-text">공장 / 작업 현장 이미지</span>
                </div>
                <div className="since-badge">
                  <div className="year">22</div>
                  <div className="label">Since</div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2 about-text-side">
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">자동차 시트 목업을<br />브랜드화 하는 전문 스튜디오</h2>
              <p className="section-desc">
                (주)이루는 완성차 업체와 부품사를 위한 프리미엄 시트 목업 솔루션을 제공합니다.
                가죽의 질감, 스티치의 정밀함, 폼의 곡면까지 — 실제와 동일한 목업으로 고객의 개발 과정을 완성합니다.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-value">500<span className="plus">+</span></div>
                  <div className="stat-label">누적 프로젝트</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">99<span className="plus">%</span></div>
                  <div className="stat-label">납기 준수율</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY ═══════ */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery-header">
            <div className="reveal">
              <div className="section-label">Our Portfolio</div>
              <h2 className="section-title">가죽의 결과 스티치의 정밀함,<br />시각적 완성도를 담은 갤러리</h2>
            </div>
          </div>

          <div className="gallery-grid">
            <div className="gallery-card featured reveal">
              <div className="gallery-card-image focus-mask">
                <img src="/mobed.jpg" alt="Hyundai MobED Mockup" />
                <span className="image-label">ROBOTICS PLATFORM MOCKUP</span>
              </div>
              <div className="gallery-card-overlay">
                <span className="tag">Hyundai Motor Group · Robotics Lab</span>
                <span className="title">현대자동차 MobED — 외관 목업</span>
              </div>
            </div>
            <div className="gallery-card tall reveal reveal-delay-1">
              <div className="gallery-card-image focus-mask">
                <img src="/pbv5_seat.jpg" alt="Kia PBV5 Interior Seat" />
                <span className="image-label">FUTURE MOBILITY SEAT (1st ROW)</span>
              </div>
              <div className="gallery-card-overlay">
                <span className="tag">Kia Motors · PBV5 Project</span>
                <span className="title">기아 PBV5 전용 시트 (1열)</span>
              </div>
            </div>
            <div className="gallery-card reveal reveal-delay-2">
              <div className="gallery-card-image">
                <span className="icon">🪡</span>
                <span className="image-label">PRECISION STITCH</span>
              </div>
              <div className="gallery-card-overlay">
                <span className="tag">Craftsmanship · Detail</span>
                <span className="title">정밀 스티칭 디테일</span>
              </div>
            </div>
            <div className="gallery-card wide reveal reveal-delay-2">
              <div className="gallery-card-image focus-mask">
                <img src="/pbv5_seat.jpg" alt="Kia PBV5 Interior Seat" />
                <span className="image-label">FUTURE MOBILITY SEAT (3rd ROW)</span>
              </div>
              <div className="gallery-card-overlay">
                <span className="tag">Kia Motors · PBV5 Project</span>
                <span className="title">기아 PBV5 전용 시트 (3열)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CTA ═══════ */}
      <section className="cta" id="inquiry">
        <div className="container">
          <div className="section-label reveal">Contact Us</div>
          <h2 className="section-title reveal">프로젝트를 함께<br />시작하세요</h2>
          <div className="cta-buttons reveal">
            <a href="#" className="btn-fill">견적 요청하기 <ArrowRight size={16} /></a>
            <a href="tel:010-0000-0000" className="btn-ghost">📞 전화 문의</a>
          </div>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <img src="/logo.png" alt="IRU" style={{ height: '36px', opacity: 0.8, marginBottom: '20px' }} />
              <p className="footer-copy-text">자동차 시트 목업의 새로운 기준.<br />Let's Make It Happen.</p>
            </div>
            <div className="footer-contacts">
              <div className="social-links">
                <a href="#"><Mail size={18} /></a>
                <a href="#"><Phone size={18} /></a>
                <a href="#"><MapPin size={18} /></a>
              </div>
              <p className="copyright">© 2026 (주)이루 IRU. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
