import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';
import CATEGORY_PORTFOLIO from './portfolio-data.json';
import PROCESS_DATA from './process-data.json';

const TRANSLATIONS = {
  ko: {
    'nav-about': 'About Us',
    'nav-portfolio': 'Portfolio',
    'nav-technology': 'Technology',
    'nav-tuning': '시트 튜닝',
    'nav-inquiry': '견적문의',
    'hero-tagline': "LET'S MAKE IT HAPPEN — SINCE 2022",
    'hero-h1-sr': '(주)이루 — 자동차 시트 목업 전문 제작',
    'hero-desc': '자동차 시트의 완벽한 형상과 질감을 구현합니다.<br />가죽의 결, 스티치의 정밀함까지 — 이루의 기술력입니다.',
    'hero-cta': '견적 문의하기',
    'hero-gallery': '갤러리 보기',
    'filter-all': '전체',
    'about-factory': '공장 / 작업 현장 이미지',
    'about-since': 'Since',
    'about-label': 'Who We Are',
    'about-heading': 'The Pinnacle of<br />Premium Mockup Studio',
    'about-desc': '(주)이루는 자동차 시트 및 내장재, 로봇 목업, 그리고 정교한 원단 봉제 샘플까지 아우르는 프리미엄 제작 스튜디오입니다. 실제 양산품과 구별할 수 없는 완벽한 질감과 오차 없는 정밀함으로 성공적인 개발 과정을 지원합니다.',
    'about-fact-founded': '설립',
    'about-fact-ceo': '대표',
    'about-fact-biz': '사업자등록번호',
    'about-fact-hq': '본사 · 1공장',
    'footer-seo-about': '회사 소개',
    'footer-seo-process': '제작 공정',
    'footer-seo-faq': '자주 묻는 질문',
    'footer-seo-contact': '오시는 길',
    'project-count': '장',
    'project-open': '슬라이드 보기',
    'about-stat1': '누적 프로젝트',
    'about-stat2': '납기 준수율',
    'portfolio-label': 'Our Portfolio',
    'portfolio-heading': '실제 제품보다 뛰어난 완성도, 시트 스티치의 정밀함,<br />모든 제품의 시각적 완성도를 담은 갤러리',
    'portfolio-item1-sub': '현대자동차 MobED — 외관 목업',
    'portfolio-item2-sub': '정밀 스티칭 디테일',
    'portfolio-item3-sub': '기아 PBV5 전용 시트 (1,3열)',
    'contact-label': 'Contact Us',
    'contact-heading': '프로젝트를 함께<br />시작하세요',
    'contact-email-btn': '시트 목업 견적 문의',
    'contact-tuning-btn': '자동차 시트 튜닝 문의',
    'inquiry-heading': '견적 및 프로젝트 문의',
    'inquiry-desc': '(주)이루는 대표님의 비즈니스를 위한 최상의 목업을 제안합니다.',
    'inquiry-tuning-title': '🚘 자동차 시트 튜닝 전용 상담',
    'inquiry-tuning-desc': '카니발·스타리아 VIP 의전 리무진 시트, 차박 평탄화, 나파가죽 커스텀',
    'inquiry-tuning-link': '시트 튜닝 전용 페이지 바로가기 →',
    'inquiry-click-info': '클릭 시 이메일 발송이 가능합니다.',
    'footer-tagline': "자동차 시트 목업의 새로운 기준.<br />Let's Make It Happen.",
    'footer-copyright': '© 2026 (주)이루 IRU. All rights reserved.',
    'location-label': 'Our Location',
    'location-heading': '찾아오시는 길',
    'location-tag1': '본사 · 1공장',
    'location-addr1': '경기도 화성시 만세구 팔탄면 밤뒤길 9',
    'location-naver1': '네이버 길찾기',
    'location-tag2': '2공장',
    'location-addr2': '경기도 화성시 만세구 팔탄면 원골길 51',
    'footer-addr1-label': '본사 및 1공장',
    'footer-addr1-value': '경기도 화성시 만세구 팔탄면 밤뒤길 9',
    'footer-addr2-label': '2공장',
    'footer-addr2-value': '경기도 화성시 만세구 팔탄면 원골길 51',
  },
  en: {
    'nav-about': 'About Us',
    'nav-portfolio': 'Portfolio',
    'nav-technology': 'Technology',
    'nav-tuning': 'Seat Tuning',
    'nav-inquiry': 'Inquiry',
    'hero-tagline': "LET'S MAKE IT HAPPEN — SINCE 2022",
    'hero-h1-sr': 'IRU — Automotive Seat Mockup Studio',
    'hero-desc': 'We craft the perfect shape and texture of automotive seats.<br />From leather grain to stitch precision — this is IRU.',
    'hero-cta': 'Get a Quote',
    'hero-gallery': 'View Gallery',
    'filter-all': 'All',
    'about-factory': 'Factory / Workshop Images',
    'about-since': 'Since',
    'about-label': 'Who We Are',
    'about-heading': 'The Pinnacle of<br />Premium Mockup Studio',
    'about-desc': 'IRU is a premium manufacturing studio specializing in automotive seat & interior mockups, robotic mockups, and precision fabric stitching samples. We support successful development with flawless texture and pinpoint accuracy indistinguishable from mass-produced products.',
    'about-fact-founded': 'Founded',
    'about-fact-ceo': 'CEO',
    'about-fact-biz': 'Business Registration No.',
    'about-fact-hq': 'HQ · Factory 1',
    'footer-seo-about': 'About',
    'footer-seo-process': 'Process',
    'footer-seo-faq': 'FAQ',
    'footer-seo-contact': 'Contact',
    'project-count': 'photos',
    'project-open': 'View slides',
    'about-stat1': 'Cumulative Projects',
    'about-stat2': 'On-Time Delivery Rate',
    'portfolio-label': 'Our Portfolio',
    'portfolio-heading': 'A gallery capturing leather grain,<br />stitch precision, and visual perfection',
    'portfolio-item1-sub': 'Hyundai MobED — Exterior Mockup',
    'portfolio-item2-sub': 'Precision Stitching Detail',
    'portfolio-item3-sub': 'Kia PBV5 Dedicated Seats (Row 1 & 3)',
    'contact-label': 'Contact Us',
    'contact-heading': "Let's start your<br />project together",
    'contact-email-btn': 'Seat Mockup Inquiry',
    'contact-tuning-btn': 'Seat Tuning Inquiry',
    'inquiry-heading': 'Project & Quote Inquiry',
    'inquiry-desc': 'IRU will propose the best mockup solution for your business.',
    'inquiry-tuning-title': '🚘 Seat Tuning Consultation',
    'inquiry-tuning-desc': 'Carnival & Staria VIP Limousine Seats, Camping Flat Beds, Nappa Custom',
    'inquiry-tuning-link': 'Go to Seat Tuning Page →',
    'inquiry-click-info': 'Click to send an email.',
    'footer-tagline': "A New Standard in Automotive Seat Mockups.<br />Let's Make It Happen.",
    'footer-copyright': '© 2026 IRU Co., Ltd. All rights reserved.',
    'location-label': 'Our Location',
    'location-heading': 'How to Find Us',
    'location-tag1': 'HQ · Factory 1',
    'location-addr1': '9 Bamdwi-gil, Paltan-myeon, Manse-gu, Hwaseong-si, Gyeonggi-do',
    'location-naver1': 'Get Directions',
    'location-tag2': 'Factory 2',
    'location-addr2': '51 Wongol-gil, Paltan-myeon, Manse-gu, Hwaseong-si, Gyeonggi-do',
    'footer-addr1-label': 'HQ & Factory 1',
    'footer-addr1-value': '9 Bamdwi-gil, Paltan-myeon, Manse-gu, Hwaseong-si',
    'footer-addr2-label': 'Factory 2',
    'footer-addr2-value': '51 Wongol-gil, Paltan-myeon, Manse-gu, Hwaseong-si',
  }
};

// 🎨 IRU Logo - Using official public/logo.png
function App() {
  const videoRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState(localStorage.getItem('iru-lang') || 'ko');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [splashPhase, setSplashPhase] = useState('active');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeGallery = () => {
    setSelectedCategory(null);
    setSelectedProject(null);
    setLightboxIndex(null);
  };

  const openProject = (project) => {
    setSelectedProject(project);
    setLightboxIndex(0);
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    setLightboxIndex(null);
  };

  const projectSlides = selectedProject?.images || [];

  const t = (key) => TRANSLATIONS[lang][key] || key;

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
    if (lightboxIndex === null || !projectSlides.length) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % projectSlides.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + projectSlides.length) % projectSlides.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, projectSlides.length]);

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

  const toggleLang = () => {
    setLang(prev => prev === 'ko' ? 'en' : 'ko');
  };

  return (
    <div className={`app ${menuOpen ? 'menu-open' : ''}`}>
      {/* ═══════ SPLASH INTRO ═══════ */}
      {splashPhase !== 'done' && (
        <div className={`splash-screen ${splashPhase === 'exiting' ? 'splash-exit' : ''}`}>
          <div className="splash-content">
            <img src="/logo.png" alt="IRU (주)이루 로고" className="splash-logo" />
            <div className="splash-tagline">LET'S MAKE IT HAPPEN</div>
          </div>
        </div>
      )}

      {/* ═══════ NAV ═══════ */}
      <nav className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo">IRU</a>

          <div className="nav-links desktop-only">
            <a href="#about">{t('nav-about')}</a>
            <a href="#gallery">{t('nav-portfolio')}</a>
            <a href="/process">{t('nav-technology')}</a>
            <a href="/tuning" className="nav-tuning-link">{t('nav-tuning')}</a>
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
            <a href="/process" onClick={() => setMenuOpen(false)}>{t('nav-technology')} <ChevronRight size={18} /></a>
            <a href="/tuning" onClick={() => setMenuOpen(false)} style={{ color: '#d4af37' }}>{t('nav-tuning')} <ChevronRight size={18} /></a>
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
            aria-label="(주)이루 자동차 시트 목업 제작 현장 영상"
          >
            <source src="/video_2.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-brand">
            <h1 className="hero-title">
              IRU
              <span className="visually-hidden"> {t('hero-h1-sr')}</span>
            </h1>
            <p className="hero-subtitle">Precision Seat Mockup Studio</p>
          </div>
        </div>
      </section>

      {/* ═══════ GALLERY ═══════ */}
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="gallery-heading reveal">
            <h2>Beyond Design, Into Reality.</h2>
            <p>Perfectly realizing your ideas into tangible reality.<br />Delivering ultimate precision in everything from automotive interiors to cutting-edge robotics.</p>
          </div>
          <div className="gallery-categories">
            {CATEGORY_PORTFOLIO.map((cat, i) => (
              <div
                key={cat.id}
                className="category-card reveal"
                style={{ transitionDelay: `${i * 0.1}s`, cursor: 'pointer' }}
                onClick={() => { setSelectedCategory(cat); setSelectedProject(null); setLightboxIndex(null); }}
              >
                <img src={cat.cover} alt={`${cat.title} — ${cat.subtitle}`} />
                <div className="category-card-hover-overlay">
                  <span className="category-view-label">View Portfolio →</span>
                </div>
                <span className="category-card-label">{cat.title}<br /><small>{cat.subtitle}</small></span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════ CATEGORY GALLERY MODAL ═══════ */}
      {selectedCategory && (
        <div className="modal-overlay active cat-gallery-overlay" onClick={closeGallery}>
          <div className="cat-gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeGallery}><X size={24} /></button>
            <div className="cat-gallery-header">
              <div className="section-label">{selectedCategory.subtitle}</div>
              <h2 className="cat-gallery-title">{selectedCategory.title}</h2>
              <p className="cat-gallery-desc">{selectedCategory.description}</p>
            </div>
            <div className="cat-gallery-grid">
              {(selectedCategory.projects || []).map((project) => (
                <div
                  key={project.id}
                  className="cat-gallery-item project-card"
                  onClick={() => openProject(project)}
                >
                  <img src={project.cover} alt={project.title} />
                  <div className="cat-gallery-item-overlay">
                    <span>{project.title}</span>
                    <small>{project.images.length}{lang === 'ko' ? '장' : ' photos'} · {t('project-open')}</small>
                  </div>
                </div>
              ))}
            </div>
            <div className="cat-gallery-footer">
              <button onClick={() => { closeGallery(); setShowInquiryModal(true); }} className="btn-fill">
                이 카테고리로 견적 문의 <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════ LIGHTBOX ═══════ */}
      {selectedProject && lightboxIndex !== null && projectSlides[lightboxIndex] && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}><X size={28} /></button>
          {projectSlides.length > 1 && (
            <button className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + projectSlides.length) % projectSlides.length); }}>
              ‹
            </button>
          )}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <p className="lightbox-project">{selectedProject.title}</p>
            <img src={projectSlides[lightboxIndex].src} alt={projectSlides[lightboxIndex].alt || projectSlides[lightboxIndex].caption} />
            <p className="lightbox-caption">
              {projectSlides[lightboxIndex].caption}
              {projectSlides.length > 1 && (
                <span className="lightbox-index"> {lightboxIndex + 1} / {projectSlides.length}</span>
              )}
            </p>
          </div>
          {projectSlides.length > 1 && (
            <button className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % projectSlides.length); }}>
              ›
            </button>
          )}
        </div>
      )}

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
            <div className="reveal reveal-delay-2 about-text-side">
              <div className="section-label">{t('about-label')}</div>
              <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('about-heading') }}></h2>
              <p className="section-desc">{t('about-desc')}</p>
              <dl className="about-facts">
                <div>
                  <dt>{t('about-fact-founded')}</dt>
                  <dd>2022</dd>
                </div>
                <div>
                  <dt>{t('about-fact-ceo')}</dt>
                  <dd>이광수</dd>
                </div>
                <div>
                  <dt>{t('about-fact-biz')}</dt>
                  <dd>380-87-02545</dd>
                </div>
                <div>
                  <dt>{t('about-fact-hq')}</dt>
                  <dd>{t('location-addr1')}</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* ── Process Cards ── */}
          <div className="process-grid reveal">
            {PROCESS_DATA.map(({ id, num, en, ko, img }) => (
              <div className="process-card" key={id}>
                <img src={img} alt={`${en} (${ko}) — (주)이루`} className="process-card-bg" />
                <div className="process-card-overlay" />
                <div className="process-card-content">
                  <span className="process-num">{num}</span>
                  <div className="process-title">{en}</div>
                  <div className="process-sub">{ko}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════ CTA ═══════ */}
      <section className="cta" id="inquiry">
        <div className="container">
          <div className="section-label reveal">{t('contact-label')}</div>
          <h2 className="section-title reveal" dangerouslySetInnerHTML={{ __html: t('contact-heading') }}></h2>
          <div className="cta-buttons reveal" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setShowInquiryModal(true)} className="btn-fill" style={{ minWidth: '240px', justifyContent: 'center' }}>
              {t('contact-email-btn')} <ArrowRight size={16} />
            </button>
            <a href="/tuning" className="btn-fill btn-tuning-cta" style={{ minWidth: '240px', justifyContent: 'center' }}>
              {t('contact-tuning-btn')} <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════ LOCATION ═══════ */}
      <section className="location" id="location">
        <div className="container">
          <div className="section-label reveal">{t('location-label')}</div>
          <h2 className="section-title reveal">{t('location-heading')}</h2>
          <div className="location-inner reveal">
            <div className="location-map">
              <iframe
                src="https://maps.google.com/maps?q=(주)이루+경기도+화성시+만세구+팔탄면+밤뒤길+9&output=embed&hl=ko&z=16"
                title="IRU 본사 위치"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="location-cards">
              <div className="location-card">
                <div className="location-card-tag">{t('location-tag1')}</div>
                <p className="location-card-addr">{t('location-addr1')}</p>
                <a
                  href="https://map.naver.com/p/search/경기도 화성시 만세구 팔탄면 밤뒤길 9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-card-btn"
                >
                  {t('location-naver1')} <ArrowRight size={14} />
                </a>
              </div>
              <div className="location-card">
                <div className="location-card-tag">{t('location-tag2')}</div>
                <p className="location-card-addr">{t('location-addr2')}</p>
              </div>
            </div>
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
              <span className="modal-info-label">1. 시트 목업 / R&D 프로젝트 문의</span>
              <span className="modal-info-value">iru@iru.co.kr</span>
              <small style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '4px' }}>{t('inquiry-click-info')}</small>
            </a>

            <a href="/tuning" className="modal-info-item" style={{ border: '1px solid rgba(212, 175, 55, 0.4)', background: 'linear-gradient(145deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.02))' }}>
              <span className="modal-info-label" style={{ color: '#d4af37', fontWeight: 700 }}>2. {t('inquiry-tuning-title')}</span>
              <span className="modal-info-value" style={{ fontSize: '0.9rem', color: '#f3e5ab' }}>{t('inquiry-tuning-desc')}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#d4af37', fontWeight: 600, fontSize: '0.82rem', marginTop: '8px' }}>
                {t('inquiry-tuning-link')}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="footer-info-group">
                <address className="footer-address">
                  <span><strong>{t('footer-addr1-label')} :</strong> {t('footer-addr1-value')}</span>
                  <span className="divider pc-only"> | </span>
                  <span className="mobile-br">
                    <strong>{t('footer-addr2-label')} :</strong> {t('footer-addr2-value')}
                  </span>
                </address>
                <p className="footer-business-info">
                  <span>사업자번호 : 380-87-02545</span>
                  <span>대표자 : 이광수</span>
                  <span>E-mail : <a href="mailto:iru@iru.co.kr">iru@iru.co.kr</a></span>
                </p>
                <nav className="footer-seo-links" aria-label={lang === 'ko' ? '사이트 정보' : 'Site pages'}>
                  <a href="/about">{t('footer-seo-about')}</a>
                  <a href="/process">{t('footer-seo-process')}</a>
                  <a href="/portfolio">{lang === 'ko' ? '포트폴리오' : 'Portfolio'}</a>
                  <a href="/faq">{t('footer-seo-faq')}</a>
                  <a href="/contact">{t('footer-seo-contact')}</a>
                </nav>
              </div>
            </div>
            <div className="footer-bottom" style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'space-between', width: '100%', marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.08em' }}>IRU</span>
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

