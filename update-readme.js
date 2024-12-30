const fs = require('fs');
const Ajv = require('ajv');

function updateReadme() {
  let stats;
  try {
    stats = JSON.parse(fs.readFileSync('stats.json', 'utf8'));
    console.log('stats.json read successfully');
  } catch (error) {
    console.error('Error reading stats.json:', error);
    return;
  }

  const ajv = new Ajv();
  const schema = JSON.parse(fs.readFileSync('schema.json', 'utf8'));
  const validate = ajv.compile(schema);

  if (!validate(stats)) {
    console.error('Validation error:', validate.errors);
    return;
  }

  const readmeContent = `
# avinesh

## Hello Message

\`\`\`sh
echo "Hello, world!"
\`\`\`

## GitHub Activity Stats

![GitHub Activity Heatmap](https://github-readme-stats.vercel.app/api?username=avifenesh&show_icons=true&theme=radical)

## Most Used Programming Languages

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=avifenesh&layout=compact&theme=radical)

## Most Used Tools

${stats.tools.map(tool => `- ![${tool}](https://img.shields.io/badge/${tool}-000000?style=flat&logo=${tool}&logoColor=white) ${tool} (${stats.tools[tool]} repositories)`).join('\n')}

## Social Media

- [![GitHub](https://img.shields.io/badge/GitHub-000000?style=flat&logo=github&logoColor=white)](https://github.com/avifenesh)
- [![LinkedIn](https://img.shields.io/badge/LinkedIn-000000?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/avi-fenesh/)
- [![Twitter](https://img.shields.io/badge/Twitter-000000?style=flat&logo=twitter&logoColor=white)](https://x.com/avi_fenesh)
- [![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-000000?style=flat&logo=stackoverflow&logoColor=white)](https://stackoverflow.com/users/12085223/avifen)

## Contributions to Other Repositories

${stats.contributions.map(contribution => `- ![${contribution.repo}](https://img.shields.io/badge/${contribution.repo}-000000?style=flat&logo=${contribution.repo}&logoColor=white) ${contribution.repo} (${contribution.count} contributions)`).join('\n')}

## Achievements and Milestones

${stats.achievements.map(achievement => `- ${achievement}`).join('\n')}

## Tags and Keywords

${stats.tags.map(tag => `- ${tag}`).join('\n')}

## Contact

You can reach me at: avifenesh [at] example [dot] com
`;

  fs.writeFileSync('README.md', readmeContent);
}

updateReadme();
