import { fetchGitHubContributorsData } from './githubContributors.ts';
import { fetchGitHubSponsors } from './githubSponsors.ts';
import { fetchOpenCollectiveData } from './openCollective.ts';

export async function fetchContributors() {
  await fetchGitHubContributorsData();
}

export async function fetchSponsors() {
  await fetchOpenCollectiveData();
  await fetchGitHubSponsors();
}

const target = process.argv[2];

if (target === 'contributors') {
  await fetchContributors();
} else if (target === 'sponsors') {
  await fetchSponsors();
} else {
  process.exit(1);
}
