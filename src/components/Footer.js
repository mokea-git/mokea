import { Box, Typography, Container, Grid, Link, IconButton, CircularProgress } from '@mui/material';
import { GitHub, YouTube, Email } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchFeaturedRepositories } from '../services/githubApi';

function Footer() {
  const location = useLocation();
  const currentLang = location.pathname.startsWith('/en') ? 'en' : 'kr';
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  const texts = {
    kr: {
      copyright: "© 2024 모크어(Mokea). 모든 권리 보유.",
      description: "마인크래프트 플러그인 개발자 & 프로그래밍 교육 크리에이터",
      contact: "연락처",
      repositories: "주요 GitHub 레포지토리",
      viewAll: "모든 레포지토리 보기"
    },
    en: {
      copyright: "© 2024 Mokea. All rights reserved.",
      description: "Minecraft Plugin Developer & Programming Education Creator",
      contact: "Contact",
      repositories: "Featured GitHub Repositories",
      viewAll: "View All Repositories"
    }
  };

  const content = texts[currentLang] || texts.kr;

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const repos = await fetchFeaturedRepositories();
        setRepositories(repos.slice(0, 4)); // Footer에는 최대 4개만 표시
      } catch (error) {
        console.error('Failed to load repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRepositories();
  }, []);

  return (
    <Box 
      sx={{ 
        bgcolor: '#1976d2', 
        color: 'white', 
        py: 4, 
        mt: 8,
        background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              모크어 (Mokea)
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              {content.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                color="inherit" 
                href="https://github.com/mokea-git" 
                target="_blank"
                rel="noopener noreferrer"
                sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                <GitHub />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4" 
                target="_blank"
                rel="noopener noreferrer"
                sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                <YouTube />
              </IconButton>
              <IconButton 
                color="inherit" 
                href="mailto:easycoding2967@gmail.com"
                sx={{ '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                <Email />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              {content.repositories}
            </Typography>
            {loading ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <CircularProgress size={16} color="inherit" />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Loading...
                </Typography>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {repositories.map((repo) => (
                  <Link 
                    key={repo.id}
                    href={repo.html_url}
                    color="inherit" 
                    underline="hover"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ 
                      opacity: 0.9, 
                      '&:hover': { opacity: 1 },
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <GitHub sx={{ fontSize: 16, mr: 1 }} />
                    {repo.name}
                    {repo.language && (
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          ml: 1, 
                          opacity: 0.7,
                          fontSize: '0.7rem'
                        }}
                      >
                        ({repo.language})
                      </Typography>
                    )}
                  </Link>
                ))}
                {repositories.length > 0 && (
                  <Link 
                    href={`/${currentLang}/projects`}
                    color="inherit" 
                    underline="hover"
                    sx={{ 
                      opacity: 0.7, 
                      '&:hover': { opacity: 1 },
                      fontSize: '0.9rem',
                      mt: 1,
                      fontStyle: 'italic'
                    }}
                  >
                    → {content.viewAll}
                  </Link>
                )}
              </Box>
            )}
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 3, pt: 3 }}>
          <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
            {content.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;