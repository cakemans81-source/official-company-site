import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import company from '../src/company.json' with { type: 'json' };

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');

const BASE = company.url.replace(/\/$/, '');
const TODAY = '2026-08-14';

const NAV = [
  { href: '/about', label: '회사 소개' },
  { href: '/process', label: '제작 공정' },
  { href: '/portfolio', label: '포트폴리오' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: '오시는 길' },
];

const PAGES = [
  {
    path: '/about',
    file: 'about.html',
    title: '회사 소개 | (주)이루 IRU',
    description: '(주)이루는 2022년 설립된 화성 소재 자동차 시트·내장재 목업 전문 제작사입니다. 대표 이광수. 디자인 목업, 워킹 목업, CMF를 설계부터 조립까지 제작합니다.',
    h1: '(주)이루는 자동차 시트 목업 전문 제작사입니다',
    kicker: 'About IRU',
    lead: '(주)이루(IRU)는 2022년 설립된 경기도 화성 소재 프리미엄 목업 스튜디오입니다. 자동차 시트와 내장재, 로봇 목업, 원단 봉제 샘플까지 실제 양산품에 가까운 형상과 질감으로 제작합니다.',
    crumbs: [{ href: '/', label: '홈' }, { label: '회사 소개' }],
    body: `
      <h2>어떤 회사를 찾으시나요?</h2>
      <p>자동차 시트의 형상·가죽 질감·스티치까지 양산 전에 확인하고 싶은 개발팀이 (주)이루를 찾습니다. 슬로건은 “LET'S MAKE IT HAPPEN”입니다.</p>
      <dl class="facts">
        <div class="fact"><dt>상호</dt><dd>주식회사 이루 (IRU)</dd></div>
        <div class="fact"><dt>설립</dt><dd>2022</dd></div>
        <div class="fact"><dt>대표</dt><dd>이광수</dd></div>
        <div class="fact"><dt>사업자등록번호</dt><dd>380-87-02545</dd></div>
        <div class="fact"><dt>본사 · 1공장</dt><dd>경기도 화성시 만세구 팔탄면 밤뒤길 9</dd></div>
        <div class="fact"><dt>2공장</dt><dd>경기도 화성시 만세구 팔탄면 원골길 51</dd></div>
      </dl>
      <h2>하는 일</h2>
      <ul>
        <li>자동차 시트 및 내장재 목업</li>
        <li>로봇 목업</li>
        <li>정교한 원단 봉제 샘플</li>
        <li>디자인 목업, 워킹 목업, 하이엔드 CMF·패턴</li>
      </ul>
      <h2>제작 방식</h2>
      <p>하나의 목업을 디자인·3D 설계 → 정밀 가공 → 후처리 → 디테일 조립 순으로 진행합니다. 공정 설명은 <a href="/process">제작 공정</a> 페이지에 있습니다.</p>
      <p><a class="cta" href="/contact">견적·방문 문의</a></p>
    `,
  },
  {
    path: '/process',
    file: 'process.html',
    title: '목업 제작 공정 | (주)이루 IRU',
    description: '(주)이루 목업 제작 공정 4단계. 디자인 및 3D 설계, 정밀 가공, 후처리, 디테일 조립. 자동차 시트·내장재 목업을 화성 공장에서 제작합니다.',
    h1: '목업은 설계부터 조립까지 네 단계로 제작합니다',
    kicker: 'Work Process',
    lead: '(주)이루의 기본 공정은 디자인 및 설계, 정밀 가공, 후처리, 디테일 조립입니다. 자동차 시트 목업의 형상과 질감을 이 순서로 맞춥니다.',
    crumbs: [{ href: '/', label: '홈' }, { label: '제작 공정' }],
    body: `
      <h2>01. 디자인 및 설계 — Design &amp; 3D Engineering</h2>
      <p>도면과 3D 데이터로 형상을 확정합니다. 시트·내장재·로봇 목업 모두 이 단계에서 치수와 분할 구조를 정합니다.</p>
      <h2>02. 정밀 가공 — Precision Machining</h2>
      <p>확정된 3D 데이터를 바탕으로 정밀 가공합니다. 특히 (주)이루만의 강점인 건식 정밀 가공 기술로 자동차 시트 스폰지(우레탄 폼)부터 엔지니어링 플라스틱, 금속 기구물까지 오차 없이 가공합니다.</p>
      <h2>03. 후처리 — Post-Processing</h2>
      <p>표면과 마감을 다듬습니다. CMF(컬러·소재·피니시)와 패턴이 드러나는 단계입니다.</p>
      <h2>04. 디테일 조립 — Detail Assembly</h2>
      <p>스티치, 트림, 작동부 등 디테일을 조립합니다. 워킹 목업은 이 단계에서 메커니즘까지 맞춥니다.</p>
      <p>각 공정의 이미지는 <a href="/">홈 갤러리</a>와 <a href="/portfolio">포트폴리오</a>에서 볼 수 있습니다.</p>
    `,
  },
  {
    path: '/portfolio',
    file: 'portfolio.html',
    title: '포트폴리오 | (주)이루 IRU 시트 목업',
    description: '(주)이루 포트폴리오. 디자인 목업, 워킹 목업, 하이엔드 CMF·패턴. 현대 MobED 외관 목업, 기아 PBV5 전용 시트 이미지가 사이트 갤러리에 있습니다.',
    h1: '디자인 목업, 워킹 목업, CMF 샘플을 제작합니다',
    kicker: 'Portfolio',
    lead: '갤러리는 네 카테고리입니다. 디자인 목업, 차량 시트 워킹 목업, 로봇 워킹 목업, 하이엔드 CMF &amp; 패턴. 홈에서 사진을 크게 볼 수 있습니다.',
    crumbs: [{ href: '/', label: '홈' }, { label: '포트폴리오' }],
    body: `
      <div class="card-list">
        <article class="card">
          <img src="/hyundai-wia-01.jpg" alt="(주)이루 현대 WIA 디자인 모델" />
          <div class="card-body">
            <h2>Design Mock-up — 디자인 목업</h2>
            <p>실물과 같은 시각 완성도의 외장·내장 디자인 목업입니다.</p>
            <p><a href="/services/design-mockup">디자인 목업 설명</a></p>
          </div>
        </article>
        <article class="card">
          <img src="/working-seat.jpg" alt="(주)이루 차량 시트 워킹 목업 — 구동 메커니즘 검증용" />
          <div class="card-body">
            <h2>Automotive Working Mock-up — 차량 시트 워킹 목업</h2>
            <p>작동 메커니즘이 있는 개발 검증용 차량 시트 목업입니다.</p>
            <p><a href="/services/working-mockup">워킹 목업 설명</a></p>
          </div>
        </article>
        <article class="card">
          <img src="/working-robot.jpg" alt="(주)이루 로봇 워킹 목업 — 휴머노이드 골격 및 액추에이터 검증" />
          <div class="card-body">
            <h2>Robotics Working Mock-up — 로봇 워킹 목업</h2>
            <p>정밀 로보틱스 및 휴머노이드 기구 구동 검증용 워킹 목업입니다.</p>
            <p><a href="/services/working-mockup">워킹 목업 설명</a></p>
          </div>
        </article>
        <article class="card">
          <img src="/Soft_trim__stitching_____4k_delpmaspu.png" alt="(주)이루 하이엔드 CMF 소프트 트림 스티칭" />
          <div class="card-body">
            <h2>High-end CMF &amp; Patterning</h2>
            <p>컬러·소재·마감과 정밀 스티칭·패턴 샘플입니다.</p>
            <p><a href="/services/cmf">CMF 설명</a></p>
          </div>
        </article>
      </div>
      <h2>갤러리에 있는 프로젝트 이미지</h2>
      <ul>
        <li>현대 WIA 디자인 모델</li>
        <li>현대자동차 MobED — 외관 목업</li>
        <li>기아 PBV5 전용 시트 (1·3열)</li>
        <li>로봇 워킹 목업 (휴머노이드)</li>
        <li>정밀 스티칭 디테일</li>
      </ul>
      <p>사진은 <a href="/#gallery">홈 포트폴리오</a>에서 확인하세요.</p>
    `,
  },
  {
    path: '/faq',
    file: 'faq.html',
    title: '자주 묻는 질문 | (주)이루 IRU 시트 목업',
    description: '(주)이루 FAQ. 자동차 시트 목업 업체, 디자인 목업과 워킹 목업 차이, 공장 위치, 견적 이메일 iru@iru.co.kr, 전화 010-3329-5729.',
    h1: '시트 목업, 견적, 위치 — 자주 묻는 질문',
    kicker: 'FAQ',
    lead: '검색과 문의에서 반복되는 질문만 모았습니다. 없는 수치(표준 납기, 최소 수량)는 적지 않았습니다. 프로젝트마다 다릅니다.',
    crumbs: [{ href: '/', label: '홈' }, { label: '자주 묻는 질문' }],
    faq: [
      {
        q: '(주)이루는 어떤 회사인가요?',
        a: '(주)이루(IRU)는 2022년 설립된 자동차 시트·내장재 목업 전문 제작사입니다. 본사는 경기도 화성시 팔탄면 밤뒤길 9이고, 대표는 이광수입니다.',
      },
      {
        q: '어떤 목업을 만드나요?',
        a: '디자인 목업, 워킹 목업, 하이엔드 CMF·패턴을 만듭니다. 자동차 시트와 내장재, 로봇 목업, 원단 봉제 샘플도 제작합니다.',
      },
      {
        q: '디자인 목업과 워킹 목업의 차이는 무엇인가요?',
        a: '디자인 목업은 실물과 같은 외관·질감을 보여주는 목업입니다. 워킹 목업은 작동 메커니즘까지 넣어 개발 검증에 쓰는 목업입니다.',
      },
      {
        q: '공장은 어디에 있나요?',
        a: '본사 및 1공장은 경기도 화성시 만세구 팔탄면 밤뒤길 9, 2공장은 같은 팔탄면 원골길 51입니다.',
      },
      {
        q: '견적은 어떻게 문의하나요?',
        a: '이메일 iru@iru.co.kr 또는 전화 010-3329-5729로 문의하면 됩니다.',
      },
      {
        q: '영문 사명은 무엇인가요?',
        a: '영문 사명은 IRU입니다. 슬로건은 LET\'S MAKE IT HAPPEN입니다.',
      },
    ],
    body: '',
  },
  {
    path: '/contact',
    file: 'contact.html',
    title: '오시는 길 · 견적 문의 | (주)이루 IRU',
    description: '(주)이루 본사 경기도 화성시 만세구 팔탄면 밤뒤길 9, 2공장 원골길 51. 견적 이메일 iru@iru.co.kr, 전화 010-3329-5729.',
    h1: '화성 팔탄면 본사로 방문·견적 문의하세요',
    kicker: 'Contact',
    lead: '견적과 프로젝트 문의는 이메일 또는 전화로 받습니다. 공장은 화성시 팔탄면에 두 곳입니다.',
    crumbs: [{ href: '/', label: '홈' }, { label: '오시는 길' }],
    body: `
      <dl class="facts">
        <div class="fact"><dt>이메일</dt><dd><a href="mailto:iru@iru.co.kr">iru@iru.co.kr</a></dd></div>
        <div class="fact"><dt>전화</dt><dd><a href="tel:+821033295729">010-3329-5729</a></dd></div>
        <div class="fact"><dt>본사 · 1공장</dt><dd>경기도 화성시 만세구 팔탄면 밤뒤길 9</dd></div>
        <div class="fact"><dt>2공장</dt><dd>경기도 화성시 만세구 팔탄면 원골길 51</dd></div>
      </dl>
      <p><a href="https://map.naver.com/p/search/${encodeURIComponent('경기도 화성시 만세구 팔탄면 밤뒤길 9')}" rel="noopener noreferrer">네이버 지도로 본사 길찾기</a></p>
      <h2>사업자 정보</h2>
      <ul>
        <li>상호: 주식회사 이루</li>
        <li>대표: 이광수</li>
        <li>사업자등록번호: 380-87-02545</li>
      </ul>
      <p><a class="cta" href="mailto:iru@iru.co.kr">이메일로 견적 문의</a></p>
    `,
  },
  {
    path: '/services/design-mockup',
    file: 'services/design-mockup.html',
    title: '디자인 목업 | (주)이루 IRU',
    description: '(주)이루 디자인 목업. 자동차 시트·내장 외관을 실물과 같은 시각 완성도로 제작합니다. 화성 목업 공장.',
    h1: '디자인 목업은 양산 전 외관·질감을 확인하는 실물입니다',
    kicker: 'Design Mock-up',
    lead: '디자인 목업은 작동보다 형과 마감이 목적인 목업입니다. (주)이루는 외장·내장 디자인 목업을 실제 제품에 가까운 완성도로 제작합니다.',
    crumbs: [{ href: '/', label: '홈' }, { href: '/portfolio', label: '포트폴리오' }, { label: '디자인 목업' }],
    body: `
      <h2>어디에 쓰이나요?</h2>
      <p>디자인 품평, 패키지 확인, 사내·협력사 리뷰처럼 “실물을 보고 결정해야 하는” 단계에 씁니다.</p>
      <h2>워킹 목업과의 차이</h2>
      <p>디자인 목업은 시각적 완성도가 중심입니다. 슬라이드·리클라이너 등 작동이 필요하면 <a href="/services/working-mockup">워킹 목업</a>입니다.</p>
      <p><a class="cta" href="mailto:iru@iru.co.kr?subject=${encodeURIComponent('디자인 목업 견적 문의')}">디자인 목업 견적 문의</a></p>
    `,
  },
  {
    path: '/services/working-mockup',
    file: 'services/working-mockup.html',
    title: '워킹 목업 | (주)이루 IRU',
    description: '(주)이루 워킹 목업. 작동 메커니즘이 있는 자동차 시트·개발 검증용 목업을 화성에서 제작합니다.',
    h1: '워킹 목업은 움직이며 검증하는 목업입니다',
    kicker: 'Working Mock-up',
    lead: '워킹 목업은 형상만 있는 모델이 아닙니다. 작동부가 들어가 개발 과정에서 기구와 사용감을 확인합니다.',
    crumbs: [{ href: '/', label: '홈' }, { href: '/portfolio', label: '포트폴리오' }, { label: '워킹 목업' }],
    body: `
      <h2>어디에 쓰이나요?</h2>
      <p>시트 작동, 내장 무빙 파트, 로봇 목업처럼 움직임이 의사결정에 필요한 개발 검증에 씁니다.</p>
      <h2>제작 순서</h2>
      <p>설계에서 메커니즘을 반영한 뒤 가공·후처리·조립로 이어집니다. 순서는 <a href="/process">제작 공정</a>과 같습니다.</p>
      <p><a class="cta" href="mailto:iru@iru.co.kr?subject=${encodeURIComponent('워킹 목업 견적 문의')}">워킹 목업 견적 문의</a></p>
    `,
  },
  {
    path: '/services/cmf',
    file: 'services/cmf.html',
    title: '하이엔드 CMF · 패턴 | (주)이루 IRU',
    description: '(주)이루 하이엔드 CMF와 패턴. 자동차 시트 소프트 트림, 정밀 스티칭, 컬러·소재·마감 샘플을 제작합니다.',
    h1: 'CMF 목업은 색·소재·스티치의 샘플입니다',
    kicker: 'High-end CMF & Patterning',
    lead: 'CMF는 Color, Material, Finish입니다. (주)이루는 하이엔드 컬러·소재·마감과 정밀 패턴, 소프트 트림 스티칭 샘플을 제작합니다.',
    crumbs: [{ href: '/', label: '홈' }, { href: '/portfolio', label: '포트폴리오' }, { label: 'CMF' }],
    body: `
      <h2>무엇을 보나요?</h2>
      <p>가죽·원단의 결, 스티치 간격과 텐션, 패턴, 표면 마감처럼 도면만으로는 부족한 감각 정보를 실물로 봅니다.</p>
      <h2>시트 목업과의 관계</h2>
      <p>전체 시트 목업에 붙이기도 하고, CMF·봉제 샘플만 따로 제작하기도 합니다.</p>
      <p><a class="cta" href="mailto:iru@iru.co.kr?subject=${encodeURIComponent('CMF 샘플 견적 문의')}">CMF 견적 문의</a></p>
    `,
  },
];

function orgId() {
  return `${BASE}/#organization`;
}

function jsonLd(page) {
  const hq = company.locations[0];
  const graph = [
    {
      '@type': ['Organization', 'LocalBusiness'],
      '@id': orgId(),
      name: company.brandName,
      alternateName: [company.englishName, '이루', company.legalName],
      legalName: company.legalName,
      url: `${BASE}/`,
      email: company.email,
      telephone: company.telephone,
      foundingDate: company.foundingDate,
      taxID: company.taxID,
      founder: { '@type': 'Person', name: company.founder },
      description: company.description,
      address: {
        '@type': 'PostalAddress',
        streetAddress: hq.streetAddress,
        addressLocality: hq.addressLocality,
        addressRegion: hq.addressRegion,
        addressCountry: hq.addressCountry,
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${BASE}${page.path}#webpage`,
      url: `${BASE}${page.path}`,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${BASE}/#website` },
      about: { '@id': orgId() },
      inLanguage: 'ko',
      breadcrumb: { '@id': `${BASE}${page.path}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${BASE}${page.path}#breadcrumb`,
      itemListElement: page.crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.label,
        item: c.href ? `${BASE}${c.href === '/' ? '/' : c.href}` : `${BASE}${page.path}`,
      })),
    },
  ];

  if (page.faq) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: page.faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
}

function layout(page) {
  const crumbs = page.crumbs
    .map((c) => (c.href ? `<a href="${c.href}">${c.label}</a>` : `<span>${c.label}</span>`))
    .join(' / ');

  let body = page.body;
  if (page.faq) {
    body = page.faq
      .map(
        (item) => `
      <h2>${item.q}</h2>
      <p>${item.a}</p>`,
      )
      .join('\n');
  }

  const nav = NAV.map((n) => {
    const current = n.href === page.path ? ' aria-current="page"' : '';
    return `<a href="${n.href}"${current}>${n.label}</a>`;
  }).join('\n        ');

  return `<!doctype html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${page.title}</title>
  <meta name="description" content="${page.description}" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <link rel="canonical" href="${BASE}${page.path}" />
  <link rel="icon" type="image/png" href="/logo.png" />
  <link rel="stylesheet" href="/seo.css" />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="ko_KR" />
  <meta property="og:site_name" content="IRU (주)이루" />
  <meta property="og:title" content="${page.title}" />
  <meta property="og:description" content="${page.description}" />
  <meta property="og:url" content="${BASE}${page.path}" />
  <meta property="og:image" content="${BASE}/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <script type="application/ld+json">
${jsonLd(page)}
  </script>
</head>
<body>
  <header class="site-header">
    <div class="wrap">
      <a class="brand" href="/">IRU</a>
      <nav class="nav" aria-label="주요 메뉴">
        ${nav}
      </nav>
    </div>
  </header>
  <div class="hero-band">
    <div class="wrap">
      <p class="crumbs">${crumbs}</p>
      <p class="kicker">${page.kicker}</p>
      <h1>${page.h1}</h1>
      <p class="lead">${page.lead}</p>
    </div>
  </div>
  <article class="wrap">
    ${body}
  </article>
  <footer class="site-footer">
    <div class="wrap">
      <p><strong>${company.brandName} ${company.englishName}</strong> · ${company.tagline}</p>
      <p>대표 ${company.founder} · 사업자번호 ${company.taxID}</p>
      <p>본사 및 1공장: ${company.locations[0].full}</p>
      <p>2공장: ${company.locations[1].full}</p>
      <p><a href="mailto:${company.email}">${company.email}</a> · <a href="tel:${company.telephone}">${company.telephoneDisplay}</a></p>
    </div>
  </footer>
</body>
</html>
`;
}

function writeRobots() {
  const text = `User-agent: *
Allow: /
Disallow: /0601
Disallow: /0601.html
Disallow: /briefing
Disallow: /briefing.html
Disallow: /briefing/

User-agent: Googlebot
Allow: /
Disallow: /0601
Disallow: /0601.html
Disallow: /briefing
Disallow: /briefing.html
Disallow: /briefing/

User-agent: Yeti
Allow: /
Disallow: /0601
Disallow: /0601.html
Disallow: /briefing
Disallow: /briefing.html
Disallow: /briefing/

User-agent: Bingbot
Allow: /
Disallow: /0601
Disallow: /0601.html
Disallow: /briefing
Disallow: /briefing.html
Disallow: /briefing/

User-agent: GPTBot
Allow: /
Disallow: /0601
Disallow: /0601.html
Disallow: /briefing
Disallow: /briefing.html
Disallow: /briefing/

User-agent: ChatGPT-User
Allow: /
Disallow: /0601
Disallow: /0601.html
Disallow: /briefing
Disallow: /briefing.html
Disallow: /briefing/

User-agent: Google-Extended
Allow: /
Disallow: /0601
Disallow: /0601.html
Disallow: /briefing
Disallow: /briefing.html
Disallow: /briefing/

User-agent: PerplexityBot
Allow: /
Disallow: /0601
Disallow: /0601.html
Disallow: /briefing
Disallow: /briefing.html
Disallow: /briefing/

User-agent: ClaudeBot
Allow: /
Disallow: /0601
Disallow: /0601.html
Disallow: /briefing
Disallow: /briefing.html
Disallow: /briefing/

User-agent: Applebot
Allow: /
Disallow: /0601
Disallow: /0601.html
Disallow: /briefing
Disallow: /briefing.html
Disallow: /briefing/

Sitemap: ${BASE}/sitemap.xml
`;
  fs.writeFileSync(path.join(PUBLIC, 'robots.txt'), text, 'utf8');
}

function writeSitemap() {
  const urls = [
    { loc: `${BASE}/`, priority: '1.0' },
    ...PAGES.map((p) => ({ loc: `${BASE}${p.path}`, priority: p.path.split('/').length > 2 ? '0.7' : '0.8' })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(PUBLIC, 'sitemap.xml'), xml, 'utf8');
}

fs.mkdirSync(path.join(PUBLIC, 'services'), { recursive: true });
for (const page of PAGES) {
  const dest = path.join(PUBLIC, page.file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, layout(page), 'utf8');
}
writeRobots();
writeSitemap();

console.log(`SEO pages written: ${PAGES.length + 2} files (pages + robots + sitemap)`);
