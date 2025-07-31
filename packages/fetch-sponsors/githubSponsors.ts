import { GH_IMAGE_DIMENSION, GITHUB_SPONSORS_FILE } from './config';
import type { GitHubSponsor } from './types';
import { saveToFile, q, GITHUB_TOKEN } from './utils';

async function fetchData() {
  const token = await GITHUB_TOKEN();

  // https://docs.github.com/graphql
  const query = `query {
  organization(login:"tauri-apps") {
    sponsors(first: 100) {
      nodes {
        ... on Actor {
          login,
          avatarUrl(size: ${GH_IMAGE_DIMENSION})
        }
      }
    }
  }
}`;

  const data = await q(query, 'https://api.opencollective.com/graphql/v2', 'Open Collective', {
    Authorization: `bearer ${GITHUB_TOKEN}`,

  const data = await q(alternativeQuery, 'https://api.opencollective.com/graphql/v2', 'GitHub', {
    Authorization: `bearer ${token}`,
  });

  return data.organization.sponsors.nodes
    .map(
      (node: any): GitHubSponsor => ({
        name: node.login,
        avatarUrl: node.avatarUrl,
      })
    )
    .sort((a: GitHubSponsor, b: GitHubSponsor) => a.name.localeCompare(b.name));
}

export async function fetchGitHubSponsors() {
  await saveToFile(GITHUB_SPONSORS_FILE, fetchData);
}
