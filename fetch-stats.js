const fs = require('fs');
const axios = require('axios');

const GITHUB_API_URL = 'https://api.github.com';
const USERNAME = 'avifenesh';

async function fetchGitHubStats() {
  const headers = {
    'Authorization': `token ${process.env.GITHUB_TOKEN}`,
    'Accept': 'application/vnd.github.v3+json'
  };

  const [commits, pullRequests, issues, contributions, languages, tools] = await Promise.all([
    fetchCommits(headers),
    fetchPullRequests(headers),
    fetchIssues(headers),
    fetchContributions(headers),
    fetchLanguages(headers),
    fetchTools(headers)
  ]);

  const stats = {
    commits,
    pullRequests,
    issues,
    contributions,
    languages,
    tools
  };

  try {
    fs.writeFileSync('stats.json', JSON.stringify(stats, null, 2));
    console.log('stats.json created successfully');
  } catch (error) {
    console.error('Error creating stats.json:', error);
  }
}

async function fetchCommits(headers) {
  const response = await axios.get(`${GITHUB_API_URL}/repos/${USERNAME}/${USERNAME}/commits`, { headers });
  return response.data.length;
}

async function fetchPullRequests(headers) {
  const response = await axios.get(`${GITHUB_API_URL}/repos/${USERNAME}/${USERNAME}/pulls`, { headers });
  return response.data.length;
}

async function fetchIssues(headers) {
  const response = await axios.get(`${GITHUB_API_URL}/repos/${USERNAME}/${USERNAME}/issues`, { headers });
  return response.data.length;
}

async function fetchContributions(headers) {
  const response = await axios.get(`${GITHUB_API_URL}/repos/${USERNAME}/${USERNAME}/contributors`, { headers });
  return response.data.length;
}

async function fetchLanguages(headers) {
  const response = await axios.get(`${GITHUB_API_URL}/repos/${USERNAME}/${USERNAME}/languages`, { headers });
  return response.data;
}

async function fetchTools(headers) {
  const response = await axios.get(`${GITHUB_API_URL}/repos/${USERNAME}/${USERNAME}/topics`, { headers });
  return response.data.names;
}

fetchGitHubStats().catch(error => console.error(error));
