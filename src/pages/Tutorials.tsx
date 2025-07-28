import React from 'react';
import './Tutorials.css';

interface Tutorial {
  id: number;
  title: string;
  description: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  tags: string[];
  videoLink?: string;
  codeLink?: string;
  duration?: string;
  thumbnail?: string;
  publishDate: string;
}

const Tutorials = () => {
  const tutorials: Tutorial[] = [
    {
      id: 1,
      title: "마인크래프트 플러그인 시작하기",
      description: "처음으로 마인크래프트 플러그인을 만들어보는 기초 강의입니다. 개발 환경 설정부터 첫 번째 플러그인 제작까지 단계별로 설명합니다.",
      category: "Plugin Basics",
      level: "beginner",
      tags: ["Java", "Spigot", "IntelliJ", "기초"],
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      codeLink: "#",
      duration: "25분",
      publishDate: "2024-01-15"
    },
    {
      id: 2,
      title: "이벤트 시스템 완전 정복",
      description: "마인크래프트 플러그인의 핵심인 이벤트 시스템을 깊이 있게 다룹니다. 다양한 이벤트 종류와 활용법을 실습을 통해 배워봅시다.",
      category: "Advanced Programming",
      level: "intermediate",
      tags: ["Java", "Events", "Listeners", "실습"],
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      codeLink: "#",
      duration: "35분",
      publishDate: "2024-01-22"
    },
    {
      id: 3,
      title: "데이터베이스 연동하기",
      description: "MySQL과 SQLite를 활용하여 플러그인에 데이터베이스를 연동하는 방법을 배웁니다. 플레이어 데이터 저장과 관리 방법을 다룹니다.",
      category: "Database",
      level: "intermediate",
      tags: ["Java", "MySQL", "SQLite", "HikariCP"],
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      codeLink: "#",
      duration: "42분",
      publishDate: "2024-02-01"
    },
    {
      id: 4,
      title: "GUI 메뉴 시스템 구현",
      description: "사용자 친화적인 GUI 메뉴를 만드는 방법을 배웁니다. 인벤토리 기반 메뉴 시스템과 페이지네이션까지 완전히 마스터해봅시다.",
      category: "UI/UX",
      level: "intermediate",
      tags: ["Java", "GUI", "Inventory", "Menu"],
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      codeLink: "#",
      duration: "38분",
      publishDate: "2024-02-10"
    },
    {
      id: 5,
      title: "경제 시스템 플러그인 만들기",
      description: "완전한 서버 경제 시스템을 처음부터 끝까지 만들어보는 프로젝트 강의입니다. 상점, 은행, 경매장까지 모든 기능을 구현합니다.",
      category: "Project Tutorial",
      level: "advanced",
      tags: ["Java", "Economy", "Shop", "Bank", "프로젝트"],
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      codeLink: "#",
      duration: "1시간 15분",
      publishDate: "2024-02-20"
    },
    {
      id: 6,
      title: "API 활용과 외부 연동",
      description: "Discord API, 웹 API 등 외부 서비스와 플러그인을 연동하는 방법을 배웁니다. 비동기 처리와 HTTP 통신까지 다룹니다.",
      category: "Integration",
      level: "advanced",
      tags: ["Java", "API", "Discord", "HTTP", "Async"],
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      codeLink: "#",
      duration: "48분",
      publishDate: "2024-03-01"
    },
    {
      id: 7,
      title: "플러그인 최적화 기법",
      description: "플러그인의 성능을 최적화하는 다양한 기법들을 배웁니다. 메모리 관리, 비동기 처리, 캐싱 등 실무에서 필요한 최적화 방법들을 다룹니다.",
      category: "Performance",
      level: "advanced",
      tags: ["Java", "Optimization", "Performance", "Cache"],
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      codeLink: "#",
      duration: "52분",
      publishDate: "2024-03-10"
    },
    {
      id: 8,
      title: "자바 기초 문법 완주",
      description: "프로그래밍을 처음 시작하는 분들을 위한 자바 기초 문법 강의입니다. 변수, 조건문, 반복문부터 객체지향까지 체계적으로 학습합니다.",
      category: "Java Basics",
      level: "beginner",
      tags: ["Java", "기초", "문법", "OOP"],
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      codeLink: "#",
      duration: "1시간 30분",
      publishDate: "2024-01-01"
    }
  ];

  const categories = ['All', 'Plugin Basics', 'Advanced Programming', 'Database', 'UI/UX', 'Project Tutorial', 'Integration', 'Performance', 'Java Basics'];
  const levels = ['All', 'beginner', 'intermediate', 'advanced'];

  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [selectedLevel, setSelectedLevel] = React.useState('All');

  const filteredTutorials = tutorials.filter(tutorial => {
    const categoryMatch = selectedCategory === 'All' || tutorial.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || tutorial.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return '#2ecc71';
      case 'intermediate': return '#f39c12';
      case 'advanced': return '#e74c3c';
      default: return '#95a5a6';
    }
  };

  const getLevelText = (level: string) => {
    switch (level) {
      case 'beginner': return '초급';
      case 'intermediate': return '중급';
      case 'advanced': return '고급';
      default: return level;
    }
  };

  return (
    <div className="tutorials">
      <div className="tutorials-header">
        <h1>📚 튜토리얼 & 강의</h1>
        <p>마인크래프트 플러그인 개발과 자바 프로그래밍을 배울 수 있는 다양한 강의들을 제공합니다.</p>
      </div>

      <div className="filters">
        <div className="filter-group">
          <label>카테고리</label>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'All' ? '전체' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <label>난이도</label>
          <div className="filter-buttons">
            {levels.map(level => (
              <button
                key={level}
                className={`filter-btn ${selectedLevel === level ? 'active' : ''}`}
                onClick={() => setSelectedLevel(level)}
              >
                {level === 'All' ? '전체' : getLevelText(level)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="tutorials-grid">
        {filteredTutorials.map(tutorial => (
          <div key={tutorial.id} className="tutorial-card">
            <div className="tutorial-header">
              <div className="tutorial-meta">
                <span 
                  className="level-badge"
                  style={{ backgroundColor: getLevelColor(tutorial.level) }}
                >
                  {getLevelText(tutorial.level)}
                </span>
                <span className="duration">{tutorial.duration}</span>
              </div>
              <span className="publish-date">{tutorial.publishDate}</span>
            </div>

            <h3 className="tutorial-title">{tutorial.title}</h3>
            <p className="tutorial-description">{tutorial.description}</p>

            <div className="tutorial-tags">
              {tutorial.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>

            <div className="tutorial-links">
              {tutorial.videoLink && (
                <a 
                  href={tutorial.videoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="tutorial-link video"
                >
                  <span>📺</span> 영상 보기
                </a>
              )}
              {tutorial.codeLink && (
                <a href={tutorial.codeLink} className="tutorial-link code">
                  <span>💻</span> 소스 코드
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="learning-path">
        <div className="path-content">
          <h2>🎯 추천 학습 경로</h2>
          <div className="path-steps">
            <div className="path-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>자바 기초 다지기</h4>
                <p>프로그래밍이 처음이라면 자바 기초 문법부터 시작하세요.</p>
              </div>
            </div>
            <div className="path-arrow">→</div>
            <div className="path-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>플러그인 개발 입문</h4>
                <p>마인크래프트 플러그인 기초를 배우고 첫 번째 플러그인을 만들어보세요.</p>
              </div>
            </div>
            <div className="path-arrow">→</div>
            <div className="path-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>심화 기능 구현</h4>
                <p>이벤트 시스템, GUI, 데이터베이스 등 고급 기능들을 배워보세요.</p>
              </div>
            </div>
            <div className="path-arrow">→</div>
            <div className="path-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>프로젝트 완성</h4>
                <p>배운 내용을 종합하여 완전한 플러그인 프로젝트를 완성해보세요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tutorial-notice">
        <div className="notice-content">
          <h3>📖 학습 안내</h3>
          <div className="notice-grid">
            <div className="notice-item">
              <h4>🎥 YouTube 연동</h4>
              <p>모든 튜토리얼은 YouTube 영상과 연동되어 있습니다. 영상을 보면서 따라해보세요!</p>
            </div>
            <div className="notice-item">
              <h4>💻 소스 코드 제공</h4>
              <p>각 강의마다 완성된 소스 코드를 제공하여 복습과 참고가 가능합니다.</p>
            </div>
            <div className="notice-item">
              <h4>💬 질문과 답변</h4>
              <p>궁금한 점이 있으시면 YouTube 댓글이나 Discord로 언제든 질문해주세요!</p>
            </div>
            <div className="notice-item">
              <h4>🔄 정기 업데이트</h4>
              <p>새로운 강의가 정기적으로 업데이트되니 구독 알림을 켜두세요!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;