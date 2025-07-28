import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <Link to="/" className="brand-link">
              <h1>🎮 모크어</h1>
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/" className="nav-link">홈</Link>
            <Link to="/projects" className="nav-link">프로젝트</Link>
            <Link to="/tutorials" className="nav-link">튜토리얼</Link>
            <Link to="/about" className="nav-link">소개</Link>
            <Link to="/contact" className="nav-link">연락처</Link>
          </div>
        </nav>
      </header>
      
      <main className="main-content">
        <Outlet />
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>모크어</h3>
            <p>마인크래프트 플러그인 개발자 & 프로그래밍 튜터</p>
          </div>
          <div className="footer-section">
            <h4>연락처</h4>
            <p>📧 easycoding2967@gmail.com</p>
            <p>💬 Discord: dduddy_</p>
            <p>📺 <a href="https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4" target="_blank" rel="noopener noreferrer">YouTube</a></p>
          </div>
          <div className="footer-section">
            <h4>링크</h4>
            <p><a href="https://github.com/mokea" target="_blank" rel="noopener noreferrer">GitHub</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 모크어. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;