import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Tutorials from './pages/Tutorials';
import Rules from './pages/Rules';
import Contact from './pages/Contact';

function LanguageDetector() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const browserLang = navigator.language || navigator.userLanguage;
      const isKorean = browserLang.startsWith('ko');
      
      if (isKorean) {
        navigate('/kr', { replace: true });
      } else {
        navigate('/en', { replace: true });
      }
    }
  }, [navigate, location]);

  return null;
}

function App() {
  return (
    <Router>
      <CssBaseline />
      <LanguageDetector />
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4, minHeight: 'calc(100vh - 200px)' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/kr" replace />} />
          <Route path="/kr" element={<Home lang="kr" />} />
          <Route path="/kr/projects" element={<Projects lang="kr" />} />
          <Route path="/kr/tutorials" element={<Tutorials lang="kr" />} />
          <Route path="/kr/rules" element={<Rules lang="kr" />} />
          <Route path="/kr/contact" element={<Contact lang="kr" />} />
          <Route path="/en" element={<Home lang="en" />} />
          <Route path="/en/projects" element={<Projects lang="en" />} />
          <Route path="/en/tutorials" element={<Tutorials lang="en" />} />
          <Route path="/en/rules" element={<Rules lang="en" />} />
          <Route path="/en/contact" element={<Contact lang="en" />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;