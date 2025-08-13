import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Link, 
  Card, 
  CardContent, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  CircularProgress,
  Divider,
  Chip
} from '@mui/material';
import { YouTube, Code, School, Star, Schedule, OpenInNew, GitHub } from '@mui/icons-material';
import { fetchUserRepositories, formatDate, getLanguageColor } from '../services/githubApi';

function Tutorials({ lang }) {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  const texts = {
    kr: {
      title: "유튜브 튜토리얼",
      description: "저는 유튜브에서 마인크래프트 플러그인 개발 및 프로그래밍 교육/튜토리얼 영상을 제작하고 있습니다. 다양한 예제와 실습을 통해 여러분의 개발 실력 향상에 도움을 드리고자 합니다.",
      moreInfo: "더 많은 튜토리얼 영상은 제 유튜브 채널에서 확인하실 수 있습니다:",
      linkText: "모크어 YouTube 채널 바로가기",
      codeInfo: "유튜브에서 다룬 예제 코드는 제 GitHub 저장소에서 확인하실 수 있습니다.",
      repoTable: "튜토리얼 관련 레포지토리",
      name: "이름",
      description: "설명",
      language: "언어",
      stars: "스타",
      updated: "업데이트",
      loading: "레포지토리를 불러오는 중...",
      noRepos: "튜토리얼 관련 레포지토리를 찾을 수 없습니다."
    },
    en: {
      title: "YouTube Tutorials",
      description: "I create Minecraft plugin development and programming education/tutorial videos on YouTube. I aim to help improve your development skills through various examples and practice.",
      moreInfo: "You can find more tutorial videos on my YouTube channel:",
      linkText: "Visit Mokea's YouTube Channel",
      codeInfo: "Example codes covered on YouTube can be found in my GitHub repository.",
      repoTable: "Tutorial Related Repositories",
      name: "Name",
      description: "Description",
      language: "Language",
      stars: "Stars",
      updated: "Updated",
      loading: "Loading repositories...",
      noRepos: "No tutorial related repositories found."
    }
  };

  const content = texts[lang] || texts.kr;

  useEffect(() => {
    const loadRepositories = async () => {
      try {
        const repos = await fetchUserRepositories();
        // 튜토리얼, 교육, 예제 관련 레포지토리 우선 표시
        const tutorialRepos = repos.filter(repo => 
          repo.name.toLowerCase().includes('tutorial') ||
          repo.name.toLowerCase().includes('example') ||
          repo.name.toLowerCase().includes('learn') ||
          repo.name.toLowerCase().includes('education') ||
          repo.topics.includes('tutorial') ||
          repo.topics.includes('education') ||
          repo.topics.includes('learning') ||
          repo.description?.toLowerCase().includes('tutorial') ||
          repo.description?.toLowerCase().includes('example')
        );
        
        // 튜토리얼 관련 레포지토리가 없으면 모든 레포지토리 표시
        setRepositories(tutorialRepos.length > 0 ? tutorialRepos : repos);
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
          background: 'linear-gradient(45deg, #FF0000, #FF6B6B)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 4
        }}
      >
        <YouTube sx={{ mr: 2, verticalAlign: 'middle', color: '#FF0000' }} />
        {content.title}
      </Typography>
      
      <Card sx={{ mb: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            {content.description}
          </Typography>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, boxShadow: 3, background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="h6" paragraph sx={{ fontWeight: 'bold' }}>
            {content.moreInfo}
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<YouTube />}
            sx={{
              background: 'linear-gradient(45deg, #FF0000 30%, #FF6B6B 90%)',
              color: 'white',
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
              '&:hover': {
                background: 'linear-gradient(45deg, #E60000 30%, #FF5252 90%)'
              }
            }}
          >
            {content.linkText}
          </Button>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, boxShadow: 3, background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)' }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Code sx={{ fontSize: 30, color: '#1976d2', mr: 2 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
              {content.codeInfo}
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
            {lang === 'kr' 
              ? '아래 표에서 튜토리얼과 관련된 GitHub 레포지토리들을 확인하실 수 있습니다:'
              : 'You can check tutorial-related GitHub repositories in the table below:'
            }
          </Typography>
        </CardContent>
      </Card>

      <Divider sx={{ my: 4 }} />

      {/* GitHub 레포지토리 테이블 */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ 
          fontWeight: 'bold', 
          color: '#1976d2', 
          mb: 2,
          textAlign: 'center'
        }}>
          <School sx={{ mr: 2, verticalAlign: 'middle', fontSize: '2rem' }} />
          {content.repoTable}
        </Typography>
        <Typography variant="body1" sx={{ 
          textAlign: 'center', 
          color: '#666', 
          mb: 4,
          fontStyle: 'italic'
        }}>
          {lang === 'kr' 
            ? '📚 유튜브 튜토리얼에서 다룬 실제 코드들을 확인해보세요!'
            : '📚 Check out the actual codes covered in YouTube tutorials!'
          }
        </Typography>
      </Box>

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
        <TableContainer component={Paper} sx={{ 
          boxShadow: 4, 
          borderRadius: 3,
          overflow: 'hidden',
          border: '2px solid #e3f2fd'
        }}>
          <Table>
            <TableHead>
              <TableRow sx={{ 
                background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)',
                '& .MuiTableCell-head': { color: 'white' }
              }}>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                  <Code sx={{ mr: 1, verticalAlign: 'middle' }} />
                  {content.name}
                </TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{content.description}</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} align="center">{content.language}</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} align="center">{content.stars}</TableCell>
                <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem' }} align="center">{content.updated}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repositories.map((repo, index) => (
                <TableRow 
                  key={repo.id} 
                  sx={{ 
                    '&:hover': { 
                      backgroundColor: '#e3f2fd',
                      transform: 'scale(1.01)',
                      transition: 'all 0.2s ease-in-out'
                    },
                    backgroundColor: index % 2 === 0 ? '#fafafa' : 'white',
                    '&:hover .repo-link': {
                      color: '#FF0000'
                    }
                  }}
                >
                  <TableCell sx={{ py: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <GitHub sx={{ mr: 1, color: '#1976d2', fontSize: 20 }} />
                      <Link
                        className="repo-link"
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          textDecoration: 'none', 
                          color: '#1976d2', 
                          fontWeight: 'bold',
                          fontSize: '1.1rem',
                          transition: 'color 0.2s ease',
                          '&:hover': { textDecoration: 'underline' }
                        }}
                      >
                        {repo.name}
                      </Link>
                      <OpenInNew sx={{ ml: 1, fontSize: 16, color: '#666' }} />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ py: 2 }}>
                    <Typography variant="body2" sx={{ 
                      maxWidth: 300, 
                      lineHeight: 1.4,
                      color: '#555'
                    }}>
                      {repo.description || (
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#999', fontStyle: 'italic' }}>
                          <Code sx={{ fontSize: 14, mr: 0.5 }} />
                          {lang === 'kr' ? '설명 없음' : 'No description'}
                        </Box>
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell align="center" sx={{ py: 2 }}>
                    {repo.language ? (
                      <Chip
                        icon={<Code />}
                        label={repo.language}
                        size="small"
                        sx={{
                          backgroundColor: getLanguageColor(repo.language),
                          color: 'white',
                          fontWeight: 'bold',
                          boxShadow: 2,
                          '&:hover': {
                            boxShadow: 4,
                            transform: 'scale(1.05)'
                          }
                        }}
                      />
                    ) : (
                      <Typography variant="caption" sx={{ color: '#999', fontStyle: 'italic' }}>
                        -
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="center" sx={{ py: 2 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)',
                      borderRadius: '20px',
                      px: 2,
                      py: 0.5,
                      minWidth: 60
                    }}>
                      <Star sx={{ fontSize: 18, color: '#ffd700', mr: 0.5 }} />
                      <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#f57c00' }}>
                        {repo.stargazers_count}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="center" sx={{ py: 2 }}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)',
                      borderRadius: '15px',
                      px: 2,
                      py: 0.5
                    }}>
                      <Schedule sx={{ fontSize: 16, color: '#8e24aa', mr: 0.5 }} />
                      <Typography variant="body2" sx={{ color: '#8e24aa', fontWeight: 'medium' }}>
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

export default Tutorials;