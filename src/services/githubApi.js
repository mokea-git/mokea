const GITHUB_USERNAME = 'mokea-git'; // GitHub 사용자명을 여기에 입력하세요
const GITHUB_API_URL = 'https://api.github.com';

export const fetchUserRepositories = async () => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=20`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const repos = await response.json();
    
    // mokea 레포지토리 필터링 및 필요한 정보만 추출
    return repos
      .filter(repo => repo.name.toLowerCase() !== 'mokea') // mokea 레포지토리 제외
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        html_url: repo.html_url,
        topics: repo.topics || [],
        homepage: repo.homepage
      }))
      .slice(0, 10); // 최대 10개만 반환
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};

export const fetchFeaturedRepositories = async () => {
  try {
    const allRepos = await fetchUserRepositories();
    
    // 특별한 레포지토리들을 먼저 보여주기 (이름이나 토픽으로 필터링)
    const featuredRepos = allRepos.filter(repo => 
      repo.topics.includes('minecraft') || 
      repo.topics.includes('tutorial') || 
      repo.topics.includes('plugin') ||
      repo.name.toLowerCase().includes('minecraft') ||
      repo.name.toLowerCase().includes('plugin') ||
      repo.name.toLowerCase().includes('tutorial')
    );
    
    // 특별한 레포지토리가 없으면 최근 업데이트된 상위 6개 반환
    return featuredRepos.length > 0 ? featuredRepos.slice(0, 6) : allRepos.slice(0, 6);
  } catch (error) {
    console.error('Error fetching featured repositories:', error);
    return [];
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

export const getLanguageColor = (language) => {
  const languageColors = {
    JavaScript: '#f1e05a',
    Java: '#b07219',
    Python: '#3572A5',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#563d7c',
    PHP: '#4F5D95',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#239120',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#fa7343',
    Kotlin: '#A97BFF',
    Dart: '#00B4AB'
  };
  
  return languageColors[language] || '#808080';
};