import { Box, Typography, Link, Card, CardContent, Grid, Chip } from '@mui/material';
import { Email, Chat, YouTube, GitHub, Star } from '@mui/icons-material';

function Contact({ lang }) {
  const texts = {
    kr: {
      title: "연락 및 커뮤니티",
      intro: "궁금한 점이나 문의 사항이 있다면 언제든지 연락 주세요!",
      contacts: [
        { icon: <Email />, label: "이메일", value: "easycoding2967@gmail.com" },
        { icon: <Chat />, label: "디스코드", value: "dduddy_" },
        { icon: <YouTube />, label: "유튜브", value: "모크어 채널 바로가기", link: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4" },
        { icon: <Chat />, label: "커뮤니티 채널(예정)", value: "디스코드 서버 오픈 준비 중입니다!" }
      ],
      closing: {
        title: "마지막으로…",
        description: "저와 함께 프로그래밍을 배우고 성장해나가는 여정에 동참해주셔서 감사합니다. 앞으로도 더 좋은 콘텐츠와 유용한 정보를 제공하기 위해 노력하겠습니다!",
        starMessage: "구독, 좋아요, 그리고 여러분의 응원이 큰 힘이 됩니다! 💪",
        signature: "감사합니다\n— 모크어 드림"
      }
    },
    en: {
      title: "Contact & Community",
      intro: "If you have any questions or inquiries, feel free to contact me anytime!",
      contacts: [
        { icon: <Email />, label: "Email", value: "easycoding2967@gmail.com" },
        { icon: <Chat />, label: "Discord", value: "dduddy_" },
        { icon: <YouTube />, label: "YouTube", value: "Visit Mokea's Channel", link: "https://www.youtube.com/@%EB%AA%A8%ED%81%AC%EC%96%B4" },
        { icon: <Chat />, label: "Community Channel (Planned)", value: "Discord server opening in preparation!" }
      ],
      closing: {
        title: "Finally...",
        description: "Thank you for joining me on this journey of learning and growing in programming together. I will continue to strive to provide better content and useful information!",
        starMessage: "Subscriptions, likes, and your support give me great strength! 💪",
        signature: "Thank you\n— Mokea"
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
      
      <Typography variant="body1" paragraph sx={{ textAlign: 'center', fontSize: '1.1rem', mb: 4 }}>
        {content.intro}
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {content.contacts.map((contact, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%', boxShadow: 3, '&:hover': { boxShadow: 5 } }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                <Box sx={{ color: '#1976d2', mr: 2 }}>
                  {contact.icon}
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {contact.label}
                  </Typography>
                  {contact.link ? (
                    <Link 
                      href={contact.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      sx={{ 
                        textDecoration: 'none',
                        color: '#1976d2',
                        fontWeight: 'bold',
                        '&:hover': {
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {contact.value}
                    </Link>
                  ) : (
                    <Typography variant="body1" sx={{ color: '#666' }}>
                      {contact.value}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Card sx={{ boxShadow: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <CardContent sx={{ textAlign: 'center', p: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
            {content.closing.title}
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
            {content.closing.description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
            <Chip icon={<YouTube />} label={lang === 'kr' ? '구독' : 'Subscribe'} sx={{ color: 'white', borderColor: 'white' }} variant="outlined" />
            <Chip icon={<Star />} label={lang === 'kr' ? '좋아요' : 'Like'} sx={{ color: 'white', borderColor: 'white' }} variant="outlined" />
            <Chip label={lang === 'kr' ? '댓글' : 'Comment'} sx={{ color: 'white', borderColor: 'white' }} variant="outlined" />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            {content.closing.starMessage}
          </Typography>
          <Typography variant="body1" sx={{ fontStyle: 'italic', whiteSpace: 'pre-line' }}>
            {content.closing.signature}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Contact;