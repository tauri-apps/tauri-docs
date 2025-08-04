import { fetchGitHubContributorsData } from './githubContributors.ts';
import { fetchGitHubSponsors } from './githubSponsors.ts';
import { fetchOpenCollectiveData } from './openCollective.ts';

async function main() {
  await fetchOpenCollectiveData();
  await fetchGitHubSponsors();
  await fetchGitHubContributorsData();
}

main();
