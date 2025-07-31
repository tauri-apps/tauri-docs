import { fetchGitHubContributorsData } from './githubContributors';
import { fetchGitHubSponsors } from './githubSponsors';
import { fetchOpenCollectiveData } from './openCollective';

async function main() {
  await fetchOpenCollectiveData();
  await fetchGitHubSponsors();
  await fetchGitHubContributorsData();
}

main();
