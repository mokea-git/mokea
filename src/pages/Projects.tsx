import React from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
  videoLink?: string;
  image?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "마인크래프트 PvP 플러그인",
      description: "실시간 PvP 매칭 시스템과 랭킹 시스템을 포함한 종합 PvP 플러그인입니다. 다양한 게임 모드와 통계 추적 기능을 제공합니다.",
      category: "Minecraft Plugin",
      tags: ["Java", "Spigot", "MySQL", "Redis"],
      githubLink: "#",
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      status: "completed"
    },
    {
      id: 2,
      title: "경제 시스템 플러그인",
      description: "상점 시스템, 경매장, 은행 시스템을 포함한 완전한 서버 경제 시스템입니다. GUI 기반의 직관적인 인터페이스를 제공합니다.",
      category: "Minecraft Plugin",
      tags: ["Java", "Paper", "SQLite", "GUI"],
      githubLink: "#",
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      status: "completed"
    },
    {
      id: 3,
      title: "미니게임 컬렉션",
      description: "숨바꼭질, 레이스, 퍼즐 게임 등 다양한 미니게임을 포함한 플러그인입니다. 각 게임마다 독특한 메카닉과 보상 시스템을 제공합니다.",
      category: "Minecraft Plugin",
      tags: ["Java", "Spigot", "MongoDB", "API"],
      githubLink: "#",
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      status: "in-progress"
    },
    {
      id: 4,
      title: "서버 관리 도구",
      description: "서버 모니터링, 자동 백업, 플레이어 관리 등을 위한 올인원 관리 도구입니다. 웹 대시보드와 연동되어 원격 관리가 가능합니다.",
      category: "Server Management",
      tags: ["Java", "Spring Boot", "React", "WebSocket"],
      githubLink: "#",
      demoLink: "#",
      status: "in-progress"
    },
    {
      id: 5,
      title: "Velocity 프록시 플러그인",
      description: "여러 서버 간 플레이어 데이터 동기화와 크로스 서버 채팅 시스템을 제공하는 프록시 플러그인입니다.",
      category: "Proxy Plugin",
      tags: ["Java", "Velocity", "Redis", "RabbitMQ"],
      githubLink: "#",
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      status: "planned"
    },
    {
      id: 6,
      title: "Discord 봇 통합",
      description: "마인크래프트 서버와 Discord 서버를 연결하는 봇입니다. 실시간 채팅, 서버 상태 확인, 플레이어 통계 등의 기능을 제공합니다.",
      category: "Integration",
      tags: ["Java", "Discord API", "JDA", "WebHook"],
      githubLink: "#",
      videoLink: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4",
      status: "completed"
    }
  ];

  const categories = ['All', 'Minecraft Plugin', 'Server Management', 'Proxy Plugin', 'Integration'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#2ecc71';
      case 'in-progress': return '#f39c12';
      case 'planned': return '#95a5a6';
      default: return '#95a5a6';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return '완료';
      case 'in-progress': return '진행중';
      case 'planned': return '계획됨';
      default: return '알 수 없음';
    }
  };

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>🚀 프로젝트 갤러리</h1>
        <p>제가 개발한 마인크래프트 플러그인과 다양한 프로젝트들을 소개합니다.</p>
      </div>

      <div className="category-filter">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <div 
                className="project-status"
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {getStatusText(project.status)}
              </div>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            
            <div className="project-links">
              {project.githubLink && (
                <a href={project.githubLink} className="project-link github">
                  <span>📦</span> GitHub
                </a>
              )}
              {project.demoLink && (
                <a href={project.demoLink} className="project-link demo">
                  <span>🔗</span> Demo
                </a>
              )}
              {project.videoLink && (
                <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="project-link video">
                  <span>📺</span> Video
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="projects-note">
        <div className="note-content">
          <h3>📋 프로젝트 이용 안내</h3>
          <div className="note-grid">
            <div className="note-item">
              <h4>🔍 코드 참고</h4>
              <p>모든 프로젝트의 코드는 학습 목적으로 자유롭게 참고하실 수 있습니다.</p>
            </div>
            <div className="note-item">
              <h4>⚡ 짧은 코드 활용</h4>
              <p>100줄 이하, 10파일 이하의 코드는 개인 용도로 수정 및 활용 가능합니다.</p>
            </div>
            <div className="note-item">
              <h4>🎓 교육 용도</h4>
              <p>교육, 학습, 개인 서버 테스트 용도로는 자유롭게 사용하실 수 있습니다.</p>
            </div>
            <div className="note-item">
              <h4>📞 문의 필요</h4>
              <p>전체 코드 수정이나 상업적 활용을 원하시면 연락처로 문의해주세요.</p>
            </div>
          </div>
          <div className="youtube-notice">
            <p>
              <strong>🎁 유튜브 시청자 특별 혜택:</strong> 
              <a href="https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4" target="_blank" rel="noopener noreferrer">
                모크어 YouTube
              </a> 채널을 통해 오신 분들은 출처 명시하에 자유롭게 수정 및 활용하실 수 있습니다!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;