import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Card, CardContent, Alert } from '@mui/material';

function Rules({ lang }) {
  const texts = {
    kr: {
      title: "콘텐츠 이용 규칙",
      intro: "제가 제공하는 자료와 콘텐츠는 학습 목적으로 자유롭게 이용하실 수 있지만, 다음의 규칙을 꼭 지켜주세요!",
      restrictions: {
        title: "사용 제한",
        items: [
          "코드 전체/부분을 그대로 재배포하는 행위는 금지입니다. (공식 포크 포함)",
          "본인의 이름으로 수정하여 배포하는 것도 금지입니다."
        ]
      },
      allowed: {
        title: "허용되는 사용",
        items: [
          "코드 참고는 자유롭게 가능합니다.",
          "단, 짧은 코드(1~100줄, 10파일 이하)는 개인적인 용도에 한해 자유롭게 수정 및 활용 가능합니다.",
          "교육, 학습, 개인 서버 테스트 용도는 허용됩니다."
        ]
      },
      contact: "만약 코드 전체를 수정하고 싶거나, 다른 프로젝트에 활용하고 싶다면 반드시 아래 연락처로 문의해주세요.",
      youtubeSection: {
        title: "유튜브 시청자 특별 혜택",
        intro: "유튜브 채널 [모크어 YouTube]를 구독하고 계신다면?",
        benefits: [
          "제공되는 모든 자료의 자유로운 학습 및 개인 프로젝트 활용 가능!",
          "조건은 단 하나, 출처(모크어 / 유튜브 채널) 명시 필수",
          "영상에서 사용된 예제 코드와 자료는 영상 설명란에서 확인할 수 있습니다."
        ],
        feedback: "유튜브 댓글이나 디스코드로 학습 후기를 남겨주시면 영상에서 소개될 수도 있어요 :)"
      }
    },
    en: {
      title: "Content Usage Rules",
      intro: "The materials and content I provide can be freely used for learning purposes, but please follow these rules!",
      restrictions: {
        title: "Usage Restrictions",
        items: [
          "Redistributing code in whole or in part as-is is prohibited. (Including official forks)",
          "Modifying and distributing under your own name is also prohibited."
        ]
      },
      allowed: {
        title: "Allowed Usage",
        items: [
          "Code reference is freely allowed.",
          "However, short code (1~100 lines, under 10 files) can be freely modified and used for personal purposes only.",
          "Educational, learning, and personal server testing purposes are allowed."
        ]
      },
      contact: "For commercial use or large-scale projects, please contact me through the contact information below.",
      youtubeSection: {
        title: "YouTube Subscriber Special Benefits",
        intro: "If you're subscribed to the YouTube channel [Mokea YouTube]?",
        benefits: [
          "Free learning and personal project use of all provided materials!",
          "Only one condition: source attribution (Mokea / YouTube Channel) is required",
          "Example codes and materials used in videos can be found in the video descriptions."
        ],
        feedback: "If you leave learning feedback on YouTube comments or Discord, it might be featured in the videos :)"
      }
    }
  };

  const content = texts[lang] || texts.kr;

  return (
    <Box sx={{ my: 4 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{ 
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#1976d2',
          mb: 4
        }}
      >
        {content.title}
      </Typography>
      
      <Alert severity="info" sx={{ mb: 4 }}>
        <Typography variant="body1">
          {content.intro}
        </Typography>
      </Alert>

      <Card sx={{ mb: 4, boxShadow: 3, border: '2px solid #ffeb3b' }}>
        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#d32f2f', fontWeight: 'bold' }}>
            ❌ {content.restrictions.title}
          </Typography>
          <List>
            {content.restrictions.items.map((item, index) => (
              <ListItem key={index} sx={{ py: 1 }}>
                <ListItemText 
                  primary={`❌ ${item}`}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: 500
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mb: 4, boxShadow: 3, border: '2px solid #4caf50' }}>
        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom sx={{ color: '#388e3c', fontWeight: 'bold' }}>
            ✅ {content.allowed.title}
          </Typography>
          <List>
            {content.allowed.items.map((item, index) => (
              <ListItem key={index} sx={{ py: 1 }}>
                <ListItemText 
                  primary={`✅ ${item}`}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: 500
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>

      <Alert severity="warning" sx={{ mb: 4 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {content.contact}
        </Typography>
      </Alert>

      <Card sx={{ boxShadow: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            🎉 {content.youtubeSection.title}
          </Typography>
          <Typography variant="body1" paragraph sx={{ textAlign: 'center', fontWeight: 'bold' }}>
            {content.youtubeSection.intro}
          </Typography>
          <List>
            {content.youtubeSection.benefits.map((benefit, index) => (
              <ListItem key={index}>
                <ListItemText 
                  primary={`⭐ ${benefit}`}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontWeight: 500,
                      color: 'white'
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="body1" sx={{ textAlign: 'center', fontStyle: 'italic', mt: 2 }}>
            {content.youtubeSection.feedback}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Rules;