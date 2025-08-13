import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const currentLang = location.pathname.startsWith('/en') ? 'en' : 'kr';
  
  const texts = {
    kr: {
      title: "모크어",
      home: "홈",
      projects: "프로젝트",
      tutorials: "튜토리얼",
      rules: "규칙",
      contact: "연락처"
    },
    en: {
      title: "Mokea",
      home: "Home",
      projects: "Projects",
      tutorials: "Tutorials",
      rules: "Rules",
      contact: "Contact"
    }
  };

  const toggleLanguage = () => {
    const newLang = currentLang === 'kr' ? 'en' : 'kr';
    const currentPath = location.pathname.replace(/^\/(kr|en)/, '');
    return `/${newLang}${currentPath}`;
  };

  return (
    <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          {texts[currentLang].title}
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button color="inherit" component={Link} to={`/${currentLang}`} sx={{ fontWeight: 'bold' }}>
            {texts[currentLang].home}
          </Button>
          <Button color="inherit" component={Link} to={`/${currentLang}/projects`} sx={{ fontWeight: 'bold' }}>
            {texts[currentLang].projects}
          </Button>
          <Button color="inherit" component={Link} to={`/${currentLang}/tutorials`} sx={{ fontWeight: 'bold' }}>
            {texts[currentLang].tutorials}
          </Button>
          <Button color="inherit" component={Link} to={`/${currentLang}/rules`} sx={{ fontWeight: 'bold' }}>
            {texts[currentLang].rules}
          </Button>
          <Button color="inherit" component={Link} to={`/${currentLang}/contact`} sx={{ fontWeight: 'bold' }}>
            {texts[currentLang].contact}
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to={toggleLanguage()}
            sx={{ 
              ml: 2, 
              border: '1px solid rgba(255,255,255,0.5)', 
              borderRadius: '20px',
              px: 2 
            }}
          >
            {currentLang === 'kr' ? 'EN' : 'KR'}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
