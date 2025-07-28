import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-header">
        <h1>📞 연락처 & 커뮤니티</h1>
        <p>궁금한 점이나 문의 사항이 있으시면 언제든지 연락 주세요!</p>
      </div>

      <div className="contact-content">
        <section className="contact-methods">
          <h2>🔗 연락 방법</h2>
          <div className="contact-grid">
            <div className="contact-card email">
              <div className="contact-icon">📧</div>
              <h3>이메일</h3>
              <p className="contact-info">easycoding2967@gmail.com</p>
              <p className="contact-desc">
                프로젝트 문의, 기술적 질문, 협업 제안 등 
                공식적인 연락은 이메일로 보내주세요.
              </p>
              <a 
                href="mailto:easycoding2967@gmail.com" 
                className="contact-button"
              >
                이메일 보내기
              </a>
            </div>

            <div className="contact-card discord">
              <div className="contact-icon">💬</div>
              <h3>Discord</h3>
              <p className="contact-info">dduddy_</p>
              <p className="contact-desc">
                실시간 채팅을 통한 빠른 질의응답이 가능합니다.
                개발 관련 팁이나 간단한 질문은 디스코드로!
              </p>
              <button className="contact-button" disabled>
                Discord 연결 (준비중)
              </button>
            </div>

            <div className="contact-card youtube">
              <div className="contact-icon">📺</div>
              <h3>YouTube</h3>
              <p className="contact-info">모크어 채널</p>
              <p className="contact-desc">
                영상 댓글이나 커뮤니티 탭을 통해 
                소통할 수 있습니다. 구독과 알림 설정도 잊지 마세요!
              </p>
              <a 
                href="https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-button"
              >
                채널 방문하기
              </a>
            </div>

            <div className="contact-card github">
              <div className="contact-icon">📦</div>
              <h3>GitHub</h3>
              <p className="contact-info">GitHub Issues</p>
              <p className="contact-desc">
                코드 관련 버그 리포트나 개선 제안은 
                GitHub Issues를 통해 남겨주세요.
              </p>
              <a 
                href="#" 
                className="contact-button"
              >
                Issues 보기
              </a>
            </div>
          </div>
        </section>

        <section className="faq-section">
          <h2>❓ 자주 묻는 질문</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>Q. 플러그인 개발을 어떻게 시작해야 하나요?</h4>
              <p>
                A. 먼저 자바 기초 문법을 익히신 후, 제 YouTube 채널의 "마인크래프트 플러그인 시작하기" 시리즈를 
                차례대로 따라해보세요. 개발 환경 설정부터 첫 번째 플러그인 제작까지 단계별로 설명되어 있습니다.
              </p>
            </div>

            <div className="faq-item">
              <h4>Q. 코드를 상업적으로 사용해도 되나요?</h4>
              <p>
                A. 전체 코드의 상업적 사용은 별도 문의가 필요합니다. 하지만 100줄 이하의 짧은 코드나 
                학습 목적의 사용은 자유롭게 가능합니다. 자세한 사항은 홈페이지의 라이선스 안내를 참고해주세요.
              </p>
            </div>

            <div className="faq-item">
              <h4>Q. 개인 맞춤 강의나 멘토링이 가능한가요?</h4>
              <p>
                A. 현재는 개인 맞춤 강의는 제공하지 않고 있습니다. 대신 YouTube 댓글이나 디스코드를 통해 
                구체적인 질문을 남겨주시면 최대한 도움을 드리겠습니다.
              </p>
            </div>

            <div className="faq-item">
              <h4>Q. 플러그인 제작 의뢰가 가능한가요?</h4>
              <p>
                A. 플러그인 제작 의뢰는 프로젝트 규모와 일정에 따라 선별적으로 받고 있습니다. 
                자세한 요구사항과 예산을 이메일로 보내주시면 검토 후 답변드리겠습니다.
              </p>
            </div>

            <div className="faq-item">
              <h4>Q. 영상에서 사용된 소스 코드는 어디서 받을 수 있나요?</h4>
              <p>
                A. 모든 영상의 소스 코드는 GitHub에 업로드되며, 영상 설명란에 링크를 첨부합니다. 
                GitHub 저장소에서 해당 프로젝트를 찾아 다운로드하실 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        <section className="response-time">
          <h2>⏰ 응답 시간 안내</h2>
          <div className="response-grid">
            <div className="response-item">
              <h4>📧 이메일</h4>
              <p>1-3일 이내 응답</p>
              <span className="response-note">공식적인 문의나 중요한 사안</span>
            </div>
            <div className="response-item">
              <h4>💬 Discord</h4>
              <p>실시간 - 24시간 이내</p>
              <span className="response-note">간단한 질문이나 실시간 채팅</span>
            </div>
            <div className="response-item">
              <h4>📺 YouTube</h4>
              <p>1-2일 이내 응답</p>
              <span className="response-note">영상 관련 질문이나 댓글</span>
            </div>
            <div className="response-item">
              <h4>📦 GitHub</h4>
              <p>2-5일 이내 응답</p>
              <span className="response-note">버그 리포트나 기능 제안</span>
            </div>
          </div>
        </section>

        <section className="collaboration">
          <h2>🤝 협업 및 제안</h2>
          <div className="collaboration-content">
            <div className="collaboration-types">
              <div className="collab-item">
                <h4>🎥 콘텐츠 협업</h4>
                <p>다른 크리에이터와의 콜라보 영상 제작에 관심이 있습니다. 마인크래프트나 프로그래밍 관련 콘텐츠라면 언제든 환영합니다!</p>
              </div>
              <div className="collab-item">
                <h4>💼 프로젝트 협업</h4>
                <p>오픈소스 프로젝트나 흥미로운 개발 프로젝트가 있다면 참여하고 싶습니다. GitHub나 이메일로 제안해주세요.</p>
              </div>
              <div className="collab-item">
                <h4>🎓 교육 파트너십</h4>
                <p>프로그래밍 교육이나 온라인 강의 플랫폼과의 파트너십도 고려하고 있습니다. 교육 관련 제안 환영합니다.</p>
              </div>
            </div>
            <div className="collaboration-notice">
              <p>
                <strong>📋 제안서 작성 시 포함해주세요:</strong><br />
                • 프로젝트 개요 및 목적<br />
                • 예상 기간 및 일정<br />
                • 역할 분담<br />
                • 연락처 정보
              </p>
            </div>
          </div>
        </section>

        <section className="community-notice">
          <div className="notice-content">
            <h3>🚀 커뮤니티 성장 중!</h3>
            <p>
              모크어의 개발자 커뮤니티가 빠르게 성장하고 있습니다. 
              Discord 서버 오픈을 준비 중이니 많은 관심과 참여 부탁드립니다!
            </p>
            <div className="community-stats">
              <div className="stat-item">
                <strong>YouTube</strong>
                <span>지속 성장 중</span>
              </div>
              <div className="stat-item">
                <strong>GitHub</strong>
                <span>활발한 기여</span>
              </div>
              <div className="stat-item">
                <strong>Discord</strong>
                <span>곧 오픈 예정</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;