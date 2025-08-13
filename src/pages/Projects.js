import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Chip, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Link, 
  CircularProgress,
  Grid,
  Divider
} from '@mui/material';
import { Star, Code, Schedule, OpenInNew } from '@mui/icons-material';
import { fetchUserRepositories, formatDate, getLanguageColor } from '../services/githubApi';

function Projects({ lang }) {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  const texts = {
    kr: {
      title: "GitHub 레포지토리",
      overview: "주요 프로젝트 분야",
      repoTable: "전체 레포지토리 목록",
      name: "이름",
      description: "설명",
      language: "언어",
      stars: "스타",
      updated: "업데이트",
      loading: "레포지토리를 불러오는 중...",
      noRepos: "레포지토리를 찾을 수 없습니다.",
      items: [
        "마인크래프트 플러그인 (Paper, Spigot, Velocity, BungeeCord 등)",
        "자바(Java) 및 기타 언어 튜토리얼 코드",
        "실험적인 게임 기능 또는 미니게임 구현",
        "유틸성 코드 및 템플릿",
        "유튜브 콘텐츠 연동 예제"
      ]
    },
    en: {
      title: "GitHub Repositories",
      overview: "Main Project Areas",
      repoTable: "All Repositories",
      name: "Name",
      description: "Description",
      language: "Language",
      stars: "Stars",
      updated: "Updated",
      loading: "Loading repositories...",
      noRepos: "No repositories found.",
      items: [
        "Minecraft Plugins (Paper, Spigot, Velocity, BungeeCord, etc.)",
        "Java and other programming language tutorial codes",
        "Experimental game features or mini-game implementations",
        "Utility codes and templates",
        "YouTube content integration examples"
      ]
    }
  };

  const content = texts[lang] || texts.kr;

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const repos = await fetchUserRepositories();
        setRepositories(repos);
      } catch (error) {
        console.error('Failed to load repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    loadRepositories();
  }, []);

  return (
    <Box sx={{ my: 4 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom
        sx={{ 
          textAlign: 'center',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 4
        }}
      >
        {content.title}
      </Typography>

      {/* 프로젝트 분야 개요 */}
      <Card sx={{ mb: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            {content.overview}
          </Typography>
          <Grid container spacing={2}>
            {content.items.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', py: 1 }}>
                  <Chip 
                    label={`0${index + 1}`} 
                    color="primary" 
                    size="small" 
                    sx={{ mr: 2, minWidth: '35px' }}
                  />
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Divider sx={{ my: 4 }} />

      {/* GitHub 레포지토리 테이블 */}
      <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2', mb: 3 }}>
        {content.repoTable}
      </Typography>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
          <Typography sx={{ ml: 2 }}>{content.loading}</Typography>
        </Box>
      ) : repositories.length === 0 ? (
        <Card sx={{ boxShadow: 2 }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="body1" color="textSecondary">
              {content.noRepos}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>{content.name}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>{content.description}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">{content.language}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">{content.stars}</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }} align="center">{content.updated}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repositories.map((repo) => (
                <TableRow key={repo.id} sx={{ '&:hover': { backgroundColor: '#f9f9f9' } }}>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Link
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          textDecoration: 'none', 
                          color: '#1976d2', 
                          fontWeight: 'bold',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        {repo.name}
                      </Link>
                      <OpenInNew sx={{ ml: 1, fontSize: 16, color: '#666' }} />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ maxWidth: 300 }}>
                      {repo.description || (lang === 'kr' ? '설명 없음' : 'No description')}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    {repo.language && (
                      <Chip
                        icon={<Code />}
                        label={repo.language}
                        size="small"
                        sx={{
                          backgroundColor: getLanguageColor(repo.language),
                          color: 'white',
                          fontWeight: 'bold'
                        }}
                      />
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Star sx={{ fontSize: 16, color: '#ffd700', mr: 0.5 }} />
                      <Typography variant="body2">{repo.stargazers_count}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Schedule sx={{ fontSize: 16, color: '#666', mr: 0.5 }} />
                      <Typography variant="body2" color="textSecondary">
                        {formatDate(repo.updated_at)}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}

export default Projects;