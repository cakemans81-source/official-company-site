import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';

const TRANSLATIONS = {
  ko: {
    'nav-about': 'About Us',
    'nav-portfolio': 'Portfolio',
    'nav-technology': 'Technology',
    'nav-inquiry': '견적문의',
    'hero-tagline': "LET'S MAKE IT HAPPEN — SINCE 2022",
    'hero-desc': '자동차 시트의 완벽한 형상과 질감을 구현합니다.<br />가죽의 결, 스티치의 정밀함까지 — 이루의 기술력입니다.',
    'hero-cta': '견적 문의하기',
    'hero-gallery': '갤러리 보기',
    'filter-all': '전체',
    'about-factory': '공장 / 작업 현장 이미지',
    'about-since': 'Since',
    'about-label': 'Who We Are',
    'about-heading': '자동차 시트 목업을<br />브랜드화 하는 전문 스튜디오',
    'about-desc': '(주)이루는 완성차 업체와 부품사를 위한 프리미엄 시트 목업 솔루션을 제공합니다. 가죽의 질감, 스티치의 정밀함, 폼의 곡면까지 — 실제와 동일한 목업으로 고객의 개발 과정을 완성합니다.',
    'about-stat1': '누적 프로젝트',
    'about-stat2': '납기 준수율',
    'portfolio-label': 'Our Portfolio',
    'portfolio-heading': '실제 제품보다 뛰어난 완성도, 시트 스티치의 정밀함,<br />모든 제품의 시각적 완성도를 담은 갤러리',
    'portfolio-item1-sub': '현대자동차 MobED — 외관 목업',
    'portfolio-item2-sub': '정밀 스티칭 디테일',
    'portfolio-item3-sub': '기아 PBV5 전용 시트 (1,3열)',
    'contact-label': 'Contact Us',
    'contact-heading': '프로젝트를 함께<br />시작하세요',
    'contact-email-btn': '이메일 견적 문의',
    'contact-phone-btn': '📞 전화 문의',
    'inquiry-heading': '견적 및 프로젝트 문의',
    'inquiry-desc': '(주)이루는 대표님의 비즈니스를 위한 최상의 목업을 제안합니다.',
    'inquiry-click-info': '클릭 시 이메일 발송이 가능합니다.',
    'footer-tagline': "자동차 시트 목업의 새로운 기준.<br />Let's Make It Happen.",
    'footer-copyright': '© 2026 (주)이루 IRU. All rights reserved.',
  },
  en: {
    'nav-about': 'About Us',
    'nav-portfolio': 'Portfolio',
    'nav-technology': 'Technology',
    'nav-inquiry': 'Inquiry',
    'hero-tagline': "LET'S MAKE IT HAPPEN — SINCE 2022",
    'hero-desc': 'We craft the perfect shape and texture of automotive seats.<br />From leather grain to stitch precision — this is IRU.',
    'hero-cta': 'Get a Quote',
    'hero-gallery': 'View Gallery',
    'filter-all': 'All',
    'about-factory': 'Factory / Workshop Images',
    'about-since': 'Since',
    'about-label': 'Who We Are',
    'about-heading': 'A professional studio<br />branding automotive seat mockups',
    'about-desc': 'IRU provides premium seat mockup solutions for automakers and suppliers. From leather texture to stitch precision and foam curvature — we bring your development process to life with mockups identical to the real thing.',
    'about-stat1': 'Cumulative Projects',
    'about-stat2': 'On-Time Delivery Rate',
    'portfolio-label': 'Our Portfolio',
    'portfolio-heading': 'A gallery capturing leather grain,<br />stitch precision, and visual perfection',
    'portfolio-item1-sub': 'Hyundai MobED — Exterior Mockup',
    'portfolio-item2-sub': 'Precision Stitching Detail',
    'portfolio-item3-sub': 'Kia PBV5 Dedicated Seats (Row 1 & 3)',
    'contact-label': 'Contact Us',
    'contact-heading': "Let's start your<br />project together",
    'contact-email-btn': 'Email Inquiry',
    'contact-phone-btn': '📞 Call Us',
    'inquiry-heading': 'Project & Quote Inquiry',
    'inquiry-desc': 'IRU will propose the best mockup solution for your business.',
    'inquiry-click-info': 'Click to send an email.',
    'footer-tagline': "A New Standard in Automotive Seat Mockups.<br />Let's Make It Happen.",
    'footer-copyright': '© 2026 IRU Co., Ltd. All rights reserved.',
  }
};

const PORTFOLIO_DATA = [
  {
    id: 1,
    category: '인테리어',
    company: 'Kia Motors · PBV5 Project',
    titleKey: 'KIA PBV5 전용 시트 (1, 3열)',
    image: '/pbv5_seat.jpg',
    detailImages: ['/pbv5_seat.jpg', '/pbv5_seat.jpg'], // 실제 다른 각도 이미지가 있다면 추가 가능
    label: 'FUTURE MOBILITY SEAT',
    featured: true
  },
  {
    id: 2,
    category: '익스테리어',
    company: 'Hyundai Motor Group · Robotics Lab',
    titleKey: '현대자동차 MobED — 외관 목업',
    image: '/mobed.jpg',
    detailImages: ['/mobed.jpg', '/mobed.jpg'],
    label: 'ROBOTICS PLATFORM MOCKUP',
    wide: true
  },
  {
    id: 3,
    category: '인테리어',
    company: 'Craftsmanship · Detail',
    titleKey: '정밀 스티칭 인테리어 디테일',
    image: null,
    icon: '🪡',
    detailImages: null,
    label: 'PRECISION STITCH'
  }
];

// 🎨 IRU Logo - Using official public/logo.png
function App() {
  const videoRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem('iru-lang') || 'ko');
  const [activeTab, setActiveTab] = useState('전체');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [splashPhase, setSplashPhase] = useState('active');

  const t = (key) => TRANSLATIONS[lang][key] || key;
  const categories = ['전체', '익스테리어', '인테리어'];

  const filteredPortfolio = activeTab === '전체'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category === activeTab);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  useEffect(() => {
    if (splashPhase !== 'active') return;
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setSplashPhase('exiting'), 3800);
    return () => { clearTimeout(timer); document.body.style.overflow = ''; };
  }, [splashPhase]);

  useEffect(() => {
    if (splashPhase !== 'exiting') return;
    const timer = setTimeout(() => {
      setSplashPhase('done');
      document.body.style.overflow = '';
    }, 800);
    return () => clearTimeout(timer);
  }, [splashPhase]);

  useEffect(() => {
    localStorage.setItem('iru-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

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
  }, [filteredPortfolio]); // Re-observe when items change

  const toggleLang = () => {
    setLang(prev => prev === 'ko' ? 'en' : 'ko');
  };

  return (
    <div className={`app ${menuOpen ? 'menu-open' : ''}`}>
      {/* ═══════ SPLASH INTRO ═══════ */}
      {splashPhase !== 'done' && (
        <div className={`splash-screen ${splashPhase === 'exiting' ? 'splash-exit' : ''}`}>
          <div className="splash-content">
            <img src="/logo.png" alt="IRU" className="splash-logo" />
            <div className="splash-tagline">LET'S MAKE IT HAPPEN</div>
          </div>
        </div>
      )}

      {/* ═══════ NAV ═══════ */}
      <nav className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            <img src="/logo.png" alt="(주)이루 IRU" style={{ height: scrolled ? '34px' : '42px', transition: 'all 0.3s' }} />
          </a>

          <div className="nav-links desktop-only">
            <a href="#about">{t('nav-about')}</a>
            <a href="#gallery">{t('nav-portfolio')}</a>
            <a href="#technology">{t('nav-technology')}</a>
            <button
              className="lang-toggle-btn"
              onClick={toggleLang}
              aria-label="Language toggle"
            >
              <span className={`lang-option ${lang === 'ko' ? 'active' : ''}`}>KO</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', padding: '0 2px' }}>|</span>
              <span className={`lang-option ${lang === 'en' ? 'active' : ''}`}>EN</span>
            </button>
            <button onClick={() => setShowInquiryModal(true)} className="nav-cta">{t('nav-inquiry')}</button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-only">
            <button
              className="lang-toggle-btn"
              onClick={toggleLang}
              aria-label="Language toggle"
            >
              <span className={`lang-option ${lang === 'ko' ? 'active' : ''}`}>KO</span>
              <span style={{ color: 'rgba(255,255,255,0.2)', padding: '0 2px' }}>|</span>
              <span className={`lang-option ${lang === 'en' ? 'active' : ''}`}>EN</span>
            </button>
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-nav ${menuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-links">
            <a href="#about" onClick={() => setMenuOpen(false)}>{t('nav-about')} <ChevronRight size={18} /></a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>{t('nav-portfolio')} <ChevronRight size={18} /></a>
            <a href="#technology" onClick={() => setMenuOpen(false)}>{t('nav-technology')} <ChevronRight size={18} /></a>
            <button className="mobile-cta" onClick={() => { setMenuOpen(false); setShowInquiryModal(true); }}>{t('nav-inquiry')}</button>
          </div>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <section className="hero">
        <div className="hero-video-container">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source src="/video_1.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-brand">
            <h1 className="hero-title">IRU</h1>
            <p className="hero-subtitle">Precision Seat Mockup Studio</p>
          </div>
          <div className="hero-bottom">
            <p className="hero-desc" dangerouslySetInnerHTML={{ __html: t('hero-desc') }}></p>
            <div className="hero-buttons">
              <button
                onClick={() => setShowInquiryModal(true)}
                className="btn-fill"
              >
                {t('hero-cta')}
                <ArrowRight size={16} />
              </button>
              <a href="#gallery" className="btn-ghost">{t('hero-gallery')}</a>
            </div>
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
                className={`category-chip ${activeTab === (cat === t('filter-all') ? '전체' : cat) ? 'active' : ''}`}
                onClick={() => setActiveTab(cat === t('filter-all') ? '전체' : cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════ GALLERY ═══════ */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery-header">
            <div className="reveal">
              <div className="section-label">{t('portfolio-label')}</div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('portfolio-heading') }}></h2>
            </div>
          </div>

          <div className="gallery-grid">
            {filteredPortfolio.map((item, idx) => (
              <div
                key={item.id}
                className={`gallery-card ${item.featured ? 'featured' : ''} ${item.wide ? 'wide' : ''} reveal`}
                style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}
                onClick={() => setSelectedProduct(item)}
              >
                <div className={`gallery-card-image ${item.image ? 'focus-mask' : ''}`}>
                  {item.image ? (
                    <img src={item.image} alt={item.titleKey} />
                  ) : (
                    <span className="icon">{item.icon}</span>
                  )}
                  <span className="image-label">{item.label}</span>
                </div>
                <div className="gallery-card-overlay">
                  <span className="tag">{item.company}</span>
                  <span className="title">{item.titleKey}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PRODUCT DETAIL MODAL ═══════ */}
      {selectedProduct && (
        <div className="modal-overlay active" onClick={() => setSelectedProduct(null)}>
          <div className="modal-content product-detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProduct(null)}><X size={24} /></button>
            <div className="product-detail-header">
              <span className="detail-category">{selectedProduct.category}</span>
              <h3 className="modal-title">{selectedProduct.titleKey}</h3>
              <p className="modal-desc">{selectedProduct.company}</p>
            </div>
            <div className="product-detail-body">
              {selectedProduct.image ? (
                <div className="detail-main-image">
                  <img src={selectedProduct.image} alt={selectedProduct.titleKey} />
                </div>
              ) : (
                <div className="detail-placeholder">
                  <span className="icon">{selectedProduct.icon}</span>
                  <p>{selectedProduct.label}</p>
                </div>
              )}
              {selectedProduct.detailImages && (
                <div className="detail-grid">
                  {selectedProduct.detailImages.map((img, i) => (
                    <img key={i} src={img} alt={`${selectedProduct.titleKey} detail ${i}`} />
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => { setSelectedProduct(null); setShowInquiryModal(true); }} className="btn-fill" style={{ marginTop: '32px', width: '100%' }}>
              관련 제품 견적 문의하기
            </button>
          </div>
        </div>
      )}

      {/* ═══════ ABOUT ═══════ */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="reveal">
              <div className="about-image-card">
                <div className="image-placeholder">
                  <span className="placeholder-text">{t('about-factory')}</span>
                </div>
                <div className="since-badge">
                  <div className="year">22</div>
                  <div className="label">{t('about-since')}</div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2 about-text-side">
              <div className="section-label">{t('about-label')}</div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('about-heading') }}></h2>
              <p className="section-desc">{t('about-desc')}</p>
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-value">500<span className="plus">+</span></div>
                  <div className="stat-label">{t('about-stat1')}</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">99<span className="plus">%</span></div>
                  <div className="stat-label">{t('about-stat2')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════ CTA ═══════ */}
      <section className="cta" id="inquiry">
        <div className="container">
          <div className="section-label reveal">{t('contact-label')}</div>
          <h2 className="section-title reveal" dangerouslySetInnerHTML={{ __html: t('contact-heading') }}></h2>
          <div className="cta-buttons reveal">
            <button onClick={() => setShowInquiryModal(true)} className="btn-fill" style={{ width: '100%', maxWidth: '300px', justifyContent: 'center' }}>{t('contact-email-btn')} <ArrowRight size={16} /></button>
          </div>
        </div>
      </section>

      {/* ═══════ INQUIRY MODAL ═══════ */}
      <div className={`modal-overlay ${showInquiryModal ? 'active' : ''}`} onClick={() => setShowInquiryModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setShowInquiryModal(false)}><X size={24} /></button>
          <div className="modal-header">
            <div className="modal-icon"><Mail size={32} /></div>
            <h3 className="modal-title">{t('inquiry-heading')}</h3>
            <p className="modal-desc">{t('inquiry-desc')}</p>
          </div>
          <div className="modal-info-list">
            <a href="mailto:iru@iru.co.kr" className="modal-info-item">
              <span className="modal-info-label">E-MAIL ADDRESS</span>
              <span className="modal-info-value">iru@iru.co.kr</span>
            </a>
          </div>
          <p className="modal-copy-hint">{t('inquiry-click-info')}</p>
        </div>
      </div>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-info-group">
                <div className="footer-address">
                  <span><strong>본사 및 1공장 :</strong> 경기도 화성시 팔탄면 밤뒤길 9</span>
                  <span className="divider pc-only"> | </span>
                  <span className="mobile-br">
                    <strong> 2공장 :</strong> 경기도 화성시 팔탄면 원골길 51
                  </span>
                </div>
                <p className="footer-business-info">
                  <span>사업자번호 : 380-87-02545</span>
                  <span>대표자 : 이 광 수</span>
                  <span>E-mail : <a href="mailto:iru@iru.co.kr">iru@iru.co.kr</a></span>
                </p>
              </div>
            </div>
            <div className="footer-bottom" style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'space-between', width: '100%', marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src="/logo.png" alt="IRU" style={{ height: '24px', width: 'auto' }} />
                <p className="footer-tagline pc-only" style={{ marginBottom: 0 }} dangerouslySetInnerHTML={{ __html: t('footer-tagline') }}></p>
              </div>
              <div className="footer-meta">
                <div className="social-links">
                  <a href="mailto:iru@iru.co.kr" title="Email"><Mail size={18} /></a>
                  <a href="tel:821033295729" title="Call"><Phone size={18} /></a>
                  <a href="#about" title="Location"><MapPin size={18} /></a>
                </div>
                <p className="copyright">{t('footer-copyright')}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

