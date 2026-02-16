import React, { useState, useEffect } from 'react';
import {
  Settings,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Globe,
  Users,
  Zap,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Award,
  Factory,
  Layers,
  MousePointer2,
  Hammer,
  Palette,
  CheckSquare,
  Building2,
  Box,
  Truck,
  Pipette,
  Printer,
  Wrench,
  Car,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    { title: '항공 시트 (Aviation Seats)', category: '항공', id: 1 },
    { title: 'PBV5 1열, 3열 디자인 시트', category: '자동차', id: 2 },
    { title: 'CES 전시 컨셉 모델 시트', category: '전시', id: 3 },
    { title: '모베드(Mobed) 목업', category: '로봇', id: 4 },
    { title: '실제 동작 시제작품 (Real Prototype)', category: '자동차', id: 5 },
    { title: '전시용 프레임 (마스킹 2 Color)', category: '전시', id: 6 },
    { title: '컨셉 디자인 모델 (서울모터쇼)', category: '전시', id: 7 },
    { title: '특수소재(Wood/PVC) 감싸기', category: '부품', id: 8 },
    { title: '극장용 컨셉 시트', category: '기타', id: 9 },
  ];

  const filteredPortfolio = activeCategory === '전체'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={`app-container ${isMenuOpen ? 'menu-open' : ''}`}>
      {/* Mobile Top Quick Action Bar (K-Tech Styled) */}
      <div className="mobile-top-bar">
        <div className="top-item active">3D프린터 견적문의</div>
        <div className="top-item">시제품 견적문의</div>
        <div className="top-item">내게 맞는 서비스</div>
        <div className="top-item">기술 지원</div>
      </div>

      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav">
          <div className="logo" style={{ color: '#fff', fontSize: '1.5rem', fontWeight: '900' }}>
            IRU<span style={{ color: 'var(--primary)', marginLeft: '2px' }}>.</span>
          </div>

          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>회사소개</a>
            <a href="#tech" className="nav-link" onClick={() => setIsMenuOpen(false)}>핵심기술</a>
            <a href="#portfolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>실적현황</a>
            <a href="#infra" className="nav-link" onClick={() => setIsMenuOpen(false)}>제조 인프라</a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>문의하기</a>
            {isMenuOpen && (
              <a href="#contact" className="btn btn-primary mobile-only-btn" onClick={() => setIsMenuOpen(false)}>
                견적 문의 하기
              </a>
            )}
          </nav>

          <div className="header-actions">
            <a href="#contact" className="btn btn-primary desktop-only-btn" style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem' }}>
              견적 문의
            </a>
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-robotic-arm-moving-in-a-factory-31610-large.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>

        <div className="container" style={{ position: 'relative', zIndex: '1' }}>
          <span className="hero-tag">PREMIUM MOCKUP & SEAT SOLUTION</span>
          <h1>
            초대형 기술의 완성,<br />
            <span style={{ color: 'var(--primary)', background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              실감형 Mockup 전문가
            </span>
          </h1>
          <p>
            우리는 상상을 현실로 만드는 정밀 가공의 한계를 넘습니다.<br />
            (주)이루는 단순한 목업을 넘어, 실제 동작이 가능한 완성도 높은 시제품을 구현합니다.
          </p>
          <div className="btn-group">
            <a href="#portfolio" className="btn btn-primary" style={{ animation: 'pulse-glow 2s infinite' }}>
              포트폴리오 보기 <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#contact" className="btn btn-outline">상담 예약하기</a>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="container" id="services" style={{ padding: '60px 0 100px' }}>
        <div className="section-title">
          <span style={{ color: 'var(--primary)', fontWeight: '800', letterSpacing: '0.1em' }}>OUR CORE SERVICES</span>
          <h2 style={{ marginTop: '0.5rem', fontSize: '3rem' }}>차별화된 통합 솔루션</h2>
        </div>
        <div className="service-grid">
          <div className="service-card">
            <div className="service-icon"><Car size={32} /></div>
            <h3>Automotive</h3>
            <p>자동차 내/외장 정밀 목업 및 실제 동작이 가능한 컨셉 시트 구현</p>
            <ChevronRight className="card-arrow" />
          </div>
          <div className="service-card">
            <div className="service-icon"><Globe size={32} /></div>
            <h3>Aero & Defence</h3>
            <p>항공기 시트 및 특수 방산 Mockup 제작, 인공위성 내부 실물 목업</p>
            <ChevronRight className="card-arrow" />
          </div>
          <div className="service-card">
            <div className="service-icon"><Cpu size={32} /></div>
            <h3>R&D Prototype</h3>
            <p>신소재 테스트 및 시제품 제작, 데이터 기반 역설계 및 검사</p>
            <ChevronRight className="card-arrow" />
          </div>
          <div className="service-card">
            <div className="service-icon"><Factory size={32} /></div>
            <h3>Infrastructure</h3>
            <p>산업용 3D 프린팅 센터 및 5축 CNC 가공, 도장 부스 토탈 솔루션</p>
            <ChevronRight className="card-arrow" />
          </div>
        </div>
      </section >

      {/* Partners Section (Horizontal Scroll on Mobile) */}
      < section className="container" style={{ padding: '60px 0', borderTop: '1px solid var(--border)' }}>
        <div className="section-title" style={{ marginBottom: '3rem' }}>
          <span style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '800', letterSpacing: '0.1em' }}>TRUSTED BY</span>
          <h2 style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>글로벌 리딩 기업들의 기술 파트너</h2>
        </div>
        <div className="partner-slider">
          <div className="partner-grid">
            {['현대자동차그룹', '기아자동차', '현대트랜시스', '현대모비스', 'INOCEAN', '코오롱글로텍', '대원산업', '대유에이텍'].map((name, i) => (
              <div key={i} className="partner-item">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Vision Section */}
      < section id="about" className="container" style={{ padding: '100px 0' }}>
        <div className="vision-layout">
          <div className="vision-content">
            <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>ABOUT IRU</span>
            <h2 className="vision-title">고객의 Needs를 이해하고<br />최상의 제품을 만드는 것</h2>
            <p className="vision-desc">
              감성적인 디자인과 앞선 기술력을 갖춘 자동차 목업 및 시트 제조 전문 기업 (주)이루입니다.
              당사는 풍부한 경험과 노하우를 바탕으로 고객에게 최상의 가치를 전달하며,
              지속적인 R&D를 통해 멈추지 않고 발전하는 시장 선도 기업이 되겠습니다.
            </p>
            <div className="value-grid">
              <div className="value-item">
                <h4>품질 제일주의</h4>
                <p>미크론 단위의 오차도 허용치 않는 정밀함</p>
              </div>
              <div className="value-item accent">
                <h4>사용자 중심</h4>
                <p>실제 사용 환경을 고려한 인체공학적 설계</p>
              </div>
            </div>
          </div>
          <div className="location-card info-card">
            <h3><Building2 color="var(--primary)" /> 기업 일반 현황</h3>
            <div className="info-grid">
              <div className="info-item">
                <span className="label">대표이사</span>
                <p className="value">이광수</p>
              </div>
              <div className="info-item">
                <span className="label">소재지</span>
                <p className="value">본사: 화성시 팔탄면 밤뒤길 9 (A, B동)<br />2공장: 팔탄면 원골길 51</p>
              </div>
              <div className="info-item">
                <span className="label">주요 사업</span>
                <p className="value">자동차 목업 및 시트 제조, 전시용 목업, 컨셉 디자인 모델</p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Tech Process Section */}
      < section id="tech" className="features" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className="container">
          <div className="section-title">
            <h2>제조 혁신을 위한 핵심 공정</h2>
            <p>초기 DATA 기반 정밀 가공부터 숙련된 엔지니어의 수작업 마감까지, (주)이루의 기술은 특별합니다.</p>
          </div>

          <div className="process-flow">
            {[
              { label: '사양 접수', icon: <Mail size={18} /> },
              { label: 'DATA 설계', icon: <Layers size={18} /> },
              { label: '프레임 제작', icon: <Settings size={18} /> },
              { label: '맞춤작업', icon: <MousePointer2 size={18} /> },
              { label: '지형/패턴닝', icon: <Palette size={18} /> },
              { label: '재단 및 봉제', icon: <Hammer size={18} /> },
              { label: '도장 마감', icon: <Pipette size={18} /> },
              { label: '최종 조립', icon: <CheckSquare size={18} /> }
            ].map((step, i) => (
              <div key={i} className="process-step">
                <div className="step-circle">{step.icon}</div>
                <div className="step-label">{step.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Portfolio Section */}
      < section id="portfolio" className="container" style={{ padding: '80px 0' }}>
        <div className="section-title">
          <h2>프로젝트 실적</h2>
          <div className="portfolio-tabs">
            {['전체', '자동차', '항공', '전시', '부품'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid">
          {filteredPortfolio.map((item) => (
            <div key={item.id} className="portfolio-card">
              <div className="portfolio-img">
                <Box size={40} opacity={0.2} />
              </div>
              <div className="portfolio-overlay">
                <span className="portfolio-category">{item.category}</span>
                <h4 className="portfolio-title">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* Infra Section */}
      < section id="infra" style={{ background: 'rgba(255,255,255,0.02)', padding: '80px 0' }}>
        <div className="container">
          <div className="section-title">
            <h2>주요 제조 인프라</h2>
            <p>최첨단 설비 도입을 통해 압도적인 생산 품질을 유지합니다.</p>
          </div>

          <div className="equipment-grid">
            <div className="equipment-card">
              <div className="eq-icon"><Pipette size={32} /></div>
              <h4>도장 부스 (Painting Booth)</h4>
              <p>수용성/유용성 부스 운영으로 시트 사출물, 전시용 BUCK 및 전 부품 정밀 도장 시스템을 갖추고 있습니다.</p>
            </div>
            <div className="equipment-card">
              <div className="eq-icon"><Settings size={32} /></div>
              <h4>고성능 CNC (DNM750LII)</h4>
              <p>시트 폼 패드, 스티로폼, ABS, 아크릴 등 다양한 하드물 가공을 위한 고성능 밀링 센터를 운영합니다.</p>
            </div>
            <div className="equipment-card">
              <div className="eq-icon"><Printer size={32} /></div>
              <h4>정밀 3D 프린팅 센터</h4>
              <p>다종 재질의 레진 제품 제작을 위한 산업용 3D 프린터를 보유하여 시제품 제작 기간을 단축합니다.</p>
            </div>
            <div className="equipment-card">
              <div className="eq-icon"><Wrench size={32} /></div>
              <h4>공업용 미싱 & 용접 설비</h4>
              <p>임포스터/일반 미싱 5대 및 CO2/아르곤 용접기 완비로 시트 커버링부터 프레임 제작까지 완벽한 제작 인프라를 구축했습니다.</p>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Banner Section */}
      < section className="cta-banner" >
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="cta-title">압도적인 기술력을 지금 경험하세요</h2>
          <p className="cta-desc">
            (주)이루의 시제작 솔루션은 귀사의 비전을 현실로 만드는 가장 빠른 길입니다.
          </p>
          <a href="#contact" className="btn btn-cta">
            견격 및 비즈니스 문의하기
          </a>
        </div>
      </section >

      {/* Certification Section */}
      < section id="cert" className="container" style={{ padding: '80px 0' }}>
        <div className="section-title">
          <h2>품질 및 기술 인증</h2>
        </div>
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-icon-box"><ShieldCheck size={40} /></div>
            <h4>ISO 14001</h4>
            <p>환경경영시스템 국제 표준 인증</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon-box"><Award size={40} /></div>
            <h4>ISO 9001</h4>
            <p>품질경영시스템 국제 표준 인증</p>
          </div>
          <div className="cert-card">
            <div className="cert-icon-box"><Cpu size={40} /></div>
            <h4>기업부설연구소</h4>
            <p>과학기술정보통신부 정식 인가 연구소</p>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer id="contact" className="footer" >
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <div className="logo" style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.5rem', fontWeight: '900' }}>
                IRU<span style={{ color: 'var(--primary)' }}>.</span>
              </div>
              <p className="footer-text">
                (주)이루 | 대표이사: 이광수<br />
                본사: 경기도 화성시 팔탄면 밤뒤길 9 (A, B동)<br />
                상호 변경: 2022년 6월 (구)이루자동차
              </p>
            </div>

            <div className="footer-contact">
              <h4>Contact Info</h4>
              <div className="contact-item">
                <Phone size={16} /> 이사 성경욱 (영업팀)
              </div>
              <div className="contact-item highlight">
                <Phone size={16} /> 010-5042-8788
              </div>
              <div className="contact-item">
                <Mail size={16} /> irus@irus.co.kr
              </div>
            </div>

            <div className="footer-hours">
              <h4>Business Hours</h4>
              <span>평일 08:30 - 17:30</span>
              <span>토요일 08:30 - 12:00</span>
              <span>공휴일 및 일요일 휴무</span>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} (주)이루. All rights reserved. | SINCE 2022
          </div>
        </div>
      </footer >
    </div >
  );
}

export default App;
