import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-hero">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-avatar">🎮</div>
            <h1>모크어 (Mokea)</h1>
            <p className="tagline">마인크래프트 플러그인 개발자 & 프로그래밍 튜터</p>
          </div>
        </div>
      </div>

      <div className="about-content">
        <section className="intro-section">
          <h2>👋 안녕하세요!</h2>
          <div className="intro-text">
            <p>
              저는 <strong>모크어</strong>라고 합니다. 마인크래프트 플러그인 개발과 프로그래밍 교육에 열정을 가지고 있는 개발자입니다.
              YouTube를 통해 다양한 개발 튜토리얼과 강의를 제작하며, 프로그래밍을 배우고 싶어하는 분들에게 도움을 드리고 있습니다.
            </p>
            <p>
              특히 마인크래프트 플러그인 개발 분야에서 다년간의 경험을 쌓아왔으며, 
              초보자도 쉽게 따라할 수 있는 실용적인 강의를 만들기 위해 노력하고 있습니다.
            </p>
          </div>
        </section>

        <section className="skills-section">
          <h2>🛠️ 기술 역량</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>프로그래밍 언어</h3>
              <div className="skills-list">
                <span className="skill-tag primary">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>마인크래프트 개발</h3>
              <div className="skills-list">
                <span className="skill-tag primary">Spigot/Paper</span>
                <span className="skill-tag primary">Velocity</span>
                <span className="skill-tag">BungeeCord</span>
                <span className="skill-tag">Fabric</span>
                <span className="skill-tag">Forge</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>데이터베이스</h3>
              <div className="skills-list">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">SQLite</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Redis</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>웹 개발</h3>
              <div className="skills-list">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Spring Boot</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">REST API</span>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <h2>💼 주요 경험</h2>
          <div className="experience-timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - 현재</div>
              <div className="timeline-content">
                <h4>YouTube 크리에이터</h4>
                <p>마인크래프트 플러그인 개발 및 프로그래밍 튜토리얼 제작</p>
                <ul>
                  <li>50개 이상의 튜토리얼 영상 제작</li>
                  <li>초보자 친화적인 강의 컨텐츠 기획</li>
                  <li>커뮤니티 운영 및 질의응답</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022 - 2023</div>
              <div className="timeline-content">
                <h4>플러그인 개발자</h4>
                <p>대형 마인크래프트 서버 플러그인 개발 및 유지보수</p>
                <ul>
                  <li>동시 접속자 1000명 이상 서버 플러그인 개발</li>
                  <li>경제 시스템, PvP 시스템, 미니게임 등 구현</li>
                  <li>성능 최적화 및 버그 수정</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2021 - 2022</div>
              <div className="timeline-content">
                <h4>프로그래밍 학습</h4>
                <p>자바 및 마인크래프트 플러그인 개발 기초 학습</p>
                <ul>
                  <li>자바 기초 문법 및 객체지향 프로그래밍</li>
                  <li>Spigot API 학습 및 첫 플러그인 개발</li>
                  <li>다양한 프로젝트를 통한 실력 향상</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="achievements-section">
          <h2>🏆 주요 성과</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">📺</div>
              <div className="achievement-content">
                <h4>YouTube 채널 운영</h4>
                <p>구독자 및 누적 조회수 지속 성장</p>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎮</div>
              <div className="achievement-content">
                <h4>플러그인 개발</h4>
                <p>20개 이상의 실용적인 플러그인 제작</p>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">👥</div>
              <div className="achievement-content">
                <h4>커뮤니티 기여</h4>
                <p>개발자 커뮤니티 활동 및 멘토링</p>
              </div>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🎓</div>
              <div className="achievement-content">
                <h4>교육 콘텐츠</h4>
                <p>초보자부터 고급자까지 다양한 레벨의 강의</p>
              </div>
            </div>
          </div>
        </section>

        <section className="philosophy-section">
          <h2>💭 개발 철학</h2>
          <div className="philosophy-content">
            <div className="philosophy-item">
              <h4>🎯 실용성 중심</h4>
              <p>실제로 사용할 수 있는 코드와 기능을 만드는 것을 최우선으로 합니다.</p>
            </div>
            <div className="philosophy-item">
              <h4>📚 지속적 학습</h4>
              <p>새로운 기술과 트렌드를 계속 학습하며 성장하는 개발자가 되고자 합니다.</p>
            </div>
            <div className="philosophy-item">
              <h4>🤝 지식 공유</h4>
              <p>배운 것을 다른 사람들과 공유하여 함께 성장하는 것을 중요하게 생각합니다.</p>
            </div>
            <div className="philosophy-item">
              <h4>🔍 코드 품질</h4>
              <p>깔끔하고 유지보수하기 쉬운 코드를 작성하기 위해 노력합니다.</p>
            </div>
          </div>
        </section>

        <section className="future-section">
          <h2>🚀 앞으로의 계획</h2>
          <div className="future-content">
            <div className="future-goals">
              <div className="goal-item">
                <h4>📈 콘텐츠 확장</h4>
                <p>더 다양한 주제의 프로그래밍 강의 제작</p>
              </div>
              <div className="goal-item">
                <h4>🌐 웹 개발</h4>
                <p>마인크래프트 서버 관리 웹 도구 개발</p>
              </div>
              <div className="goal-item">
                <h4>👨‍🏫 교육 플랫폼</h4>
                <p>체계적인 온라인 코딩 교육 플랫폼 구축</p>
              </div>
              <div className="goal-item">
                <h4>🤖 AI 활용</h4>
                <p>AI를 활용한 코딩 도구 및 플러그인 개발</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;