import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ChevronRight,
  ChevronUp,
  X,
  Menu
} from 'lucide-react';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isHeaderHovered, setIsHeaderHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    {
      title: '항공 시트 (Aviation Seats)',
      category: '항공',
      id: 1,
      img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80',
      desc: '항공기 비즈니스석 및 퍼스트 클래스 전용 디자인 시트 목업 제작'
    },
    {
      title: 'PBV5 디자인 커스텀 시트',
      category: '자동차',
      id: 2,
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80',
      desc: '미래형 목적 기반 모빌리티 전용 1열 디자인 및 기능 구현'
    },
    {
      title: 'CES 전시 컨셉 모델',
      category: '전시',
      id: 3,
      img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
      desc: '글로벌 테크 전시회용 고정밀 하우징 및 실감형 컨셉 모델'
    },
    {
      title: '모베드(Mobed) 로봇 목업',
      category: '로봇',
      id: 4,
      img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80',
      desc: '현대자동차 모베드 플랫폼의 정밀 외관 및 구동 메커니즘 시제작'
    },
    {
      title: '디지털 콕핏 실감 모델',
      category: '자동차',
      id: 5,
      img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80',
      desc: '실제 주행 환경을 구현한 디지털 콕핏 내장재 및 디스플레이 목업'
    },
    {
      title: '자동차 도어 트림 시제품',
      category: '부품',
      id: 6,
      img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80',
      desc: '복합 소재를 활용한 초경량 자동차 도어 트림 시제작'
    },
  ];

  const filteredPortfolio = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const menuData = {
    COMPANY: [
      { name: 'ABOUT', href: '#company' },
      { name: 'CAREERS', href: '#company' },
      { name: 'CONTACT', href: '#company' },
    ],
    PROJECTS: [
      { name: '자동차', href: '#projects' },
      { name: '항공', href: '#projects' },
      { name: '전시', href: '#projects' },
      { name: '부품', href: '#projects' },
    ]
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header
        className={`header ${scrolled ? 'scrolled' : ''} ${isHeaderHovered ? 'is-hovered' : ''}`}
        onMouseEnter={() => setIsHeaderHovered(true)}
        onMouseLeave={() => setIsHeaderHovered(false)}
      >
        <div className="nav-container">
          <a href="/" className="logo">
            <img src="/logo.png" alt="IRU Logo" style={{ height: '50px', width: 'auto', display: 'block' }} />
          </a>

          <nav className="nav-center">
            {Object.keys(menuData).map((key) => (
              <div key={key} className="nav-main-item">
                <span className="nav-main-link">{key}</span>
              </div>
            ))}
          </nav>

          <div className="nav-right">
            <a href="#join">JOIN US</a>
            <a href="#eng">ENG</a>
          </div>

          <div className="megamenu-bg">
            <div className="megamenu-content">
              {Object.entries(menuData).map(([title, links]) => (
                <div key={title} className="megamenu-column">
                  <h3 className="megamenu-title">{title}</h3>
                  <ul className="submenu-list">
                    {links.map((link, idx) => (
                      <li key={idx} className="submenu-item">
                        <a href={link.href} className="submenu-link">{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <span className="hero-tag">PREMIUM MOCKUP & SEAT SOLUTION 자동차 디자인모델 특화</span>
          <h1 style={{ whiteSpace: 'pre-line' }}>
            초대형 기술의 완성,{'\n'}
            <span style={{ color: 'var(--primary)' }}>실감형 Mockup 전문가</span>
          </h1>
          <p>
            우리는 상상을 현실로 만드는 가공의 한계를 넘습니다.{'\n'}
            (주)이루는 단순한 목업을 넘어, 실제 동작이 가능한 완성도 높은 시제품을 구현합니다.
          </p>

          <div className="category-container">
            {['All', '자동차', '항공', '전시', '부품'].map((cat) => (
              <button
                key={cat}
                className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="portfolio" id="projects">
        <div className="portfolio-grid">
          {filteredPortfolio.map((item) => (
            <div key={item.id} className="project-card">
              <img src={item.img} alt={item.title} />
            </div>
          ))}
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="footer" id="footer">
        <div className="footer-content">
          <div className="logo">
            <img src="/logo.png" alt="IRU Logo" style={{ height: '40px', width: 'auto', marginBottom: '1.5rem', display: 'block' }} />
          </div>
          <div style={{ color: '#888', fontSize: '0.85rem', textAlign: 'right' }}>
            <p>(주)이루 | 대표이사: 이광수</p>
            <p>본사: 경기도 화성시 팔탄면 밤뒤길 9 (A, B동)</p>
            <p style={{ marginTop: '10px' }}>© {new Date().getFullYear()} IRU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
