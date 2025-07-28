import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            🎮 모크어의 GitHub에 오신 것을 환영합니다! 
          </h1>
          <p className="hero-subtitle">
            안녕하세요! 👋<br />
            저는 <span className="highlight">모크어(mokea)</span>라고 합니다.<br />
            <span className="highlight">마인크래프트 플러그인 개발</span>과 <span className="highlight">프로그래밍 교육/튜토리얼 영상</span>을 유튜브에서 제작하고 있는 크리에이터입니다.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">프로젝트 보기</Link>
            <Link to="/tutorials" className="btn btn-secondary">튜토리얼</Link>
            <a 
              href="https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-youtube"
            >
              📺 YouTube 채널
            </a>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2>📌 이 저장소의 주제들</h2>
          <div className="topics-grid">
            <div className="topic-card">
              <div className="topic-icon">🧩</div>
              <h3>마인크래프트 플러그인</h3>
              <p>Paper, Spigot, Velocity, BungeeCord 등</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">👨‍💻</div>
              <h3>자바 튜토리얼</h3>
              <p>자바(Java) 및 기타 언어 튜토리얼 코드</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">💡</div>
              <h3>실험적 게임 기능</h3>
              <p>실험적인 게임 기능 또는 미니게임 구현</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">📦</div>
              <h3>유틸리티 코드</h3>
              <p>유틸성 코드 및 템플릿</p>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🛠️</div>
              <h3>YouTube 연동</h3>
              <p>유튜브 콘텐츠 연동 예제</p>
            </div>
          </div>
        </div>
      </section>

      <section className="license-section">
        <div className="container">
          <h2>📜 라이선스 및 사용 규칙</h2>
          <div className="license-content">
            <div className="license-card restrictions">
              <h3>🔒 사용 제한</h3>
              <ul>
                <li>❌ 코드 전체/부분을 그대로 재배포하는 행위는 금지입니다. (공식 포크 포함)</li>
                <li>❌ 본인의 이름으로 수정하여 배포하는 것도 금지입니다.</li>
              </ul>
            </div>
            <div className="license-card allowed">
              <h3>✅ 허용되는 사용</h3>
              <ul>
                <li>✅ 코드 참고는 자유롭게 가능합니다.</li>
                <li>✅ 단, 짧은 코드(1~100줄, 10파일 이하)는 개인적인 용도에 한해 자유롭게 수정 및 활용 가능합니다.</li>
                <li>✅ 교육, 학습, 개인 서버 테스트 용도는 허용됩니다.</li>
              </ul>
            </div>
          </div>
          <div className="contact-notice">
            📩 만약 코드 전체를 수정하고 싶거나, 다른 프로젝트에 활용하고 싶다면 <Link to="/contact">연락처</Link>로 문의해주세요.
          </div>
        </div>
      </section>

      <section className="youtube-benefits">
        <div className="container">
          <h2>🎁 유튜브 시청자 특별 혜택</h2>
          <div className="benefits-content">
            <p>유튜브 채널 <a href="https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4" target="_blank" rel="noopener noreferrer"><strong>모크어 YouTube</strong></a>를 통해 오신 분이라면?</p>
            <div className="benefits-list">
              <div className="benefit-item">
                <span className="benefit-icon">🎉</span>
                <span>해당 GitHub 코드의 개조 및 수정 가능!</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">👍</span>
                <span>조건은 단 하나, 출처(Mokeo GitHub / 유튜브) 명시 필수</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">📌</span>
                <span>영상에서 사용된 코드는 영상 설명란에 링크가 함께 올라갑니다.</span>
              </div>
            </div>
            <p className="benefits-note">
              유튜브 댓글이나 디스코드로 사용 후기를 남겨주시면 영상에서 소개될 수도 있어요 😄
            </p>
          </div>
        </div>
      </section>

      <section className="final-message">
        <div className="container">
          <h2>🙏 마지막으로…</h2>
          <p>
            이 GitHub는 유튜브 활동의 연장선으로, 개발자 분들과의 소통을 위해 공개되었습니다.<br />
            제가 만든 코드가 여러분에게 <strong>영감과 도움이</strong> 되길 진심으로 바랍니다!
          </p>
          <p className="engagement-note">
            <strong>Star ⭐️, Fork 🍴, Issue 💬는 언제든 환영입니다!</strong>
          </p>
          <p className="signature">
            감사합니다 💙<br />
            — 모크어 드림
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;