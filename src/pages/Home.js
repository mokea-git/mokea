import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';

function Home({ lang }) {
  const texts = {
    kr: {
      welcome: "모크어에게 오신 것을 환영합니다!",
      intro: "안녕하세요! 저는 모크어(mokea)라고 합니다. 마인크래프트 플러그인 개발과 프로그래밍 교육/튜토리얼 영상을 유튜브에서 제작하고 있는 크리에이터입니다.",
      description: "이곳은 저에 대해 소개하고, 제가 진행하는 다양한 프로젝트와 활동들을 공유하는 공간입니다. 마인크래프트 플러그인 개발부터 프로그래밍 교육까지, 여러분과 함께 성장하고 싶습니다!",
      features: {
        title: "주요 활동",
        plugin: "마인크래프트 플러그인",
        tutorial: "프로그래밍 튜토리얼",
        project: "창작 프로젝트"
      }
    },
    en: {
      welcome: "Welcome to Mokea!",
      intro: "Hello! I'm mokea. I'm a creator who develops Minecraft plugins and creates programming education/tutorial videos on YouTube.",
      description: "This is a space where I introduce myself and share various projects and activities I'm working on. From Minecraft plugin development to programming education, I want to grow together with you!",
      features: {
        title: "Main Activities",
        plugin: "Minecraft Plugins",
        tutorial: "Programming Tutorials", 
        project: "Creative Projects"
      }
    }
  };

  const content = texts[lang] || texts.kr;

  return (
    <Box sx={{ my: 4 }}>
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{ 
          textAlign: 'center',
          background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
          mb: 4
        }}
      >
        {content.welcome}
      </Typography>
      
      <Card sx={{ mb: 4, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" paragraph sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            {content.intro}
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            {content.description}
          </Typography>
        </CardContent>
      </Card>

      <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 3, fontWeight: 'bold' }}>
        {content.features.title}
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', boxShadow: 2, '&:hover': { boxShadow: 4 } }}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 2 }}>
                🎮 {content.features.plugin}
              </Typography>
              <Typography variant="body2">
                {lang === 'kr' ? '다양한 마인크래프트 플러그인 소스코드와 예제들을 제공합니다.' : 'Various Minecraft plugin source codes and examples are provided.'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', boxShadow: 2, '&:hover': { boxShadow: 4 } }}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 2 }}>
                📚 {content.features.tutorial}
              </Typography>
              <Typography variant="body2">
                {lang === 'kr' ? '프로그래밍 학습을 위한 단계별 튜토리얼과 실습 자료를 제공합니다.' : 'Step-by-step tutorials and practice materials for programming learning are provided.'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%', boxShadow: 2, '&:hover': { boxShadow: 4 } }}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', color: '#1976d2', mb: 2 }}>
                🔬 {content.features.project}
              </Typography>
              <Typography variant="body2">
                {lang === 'kr' ? '새로운 기술과 아이디어를 실험하는 다양한 프로젝트들을 공유합니다.' : 'Various projects experimenting with new technologies and ideas are shared.'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;