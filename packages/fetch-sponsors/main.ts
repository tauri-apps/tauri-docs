import { GITHUB_SPONSORS_FILE, OPEN_COLLECTIVE_FILE } from './config';
import { fetchGitHubSponsors } from './githubSponsors';
import { fetchOpenCollectiveData } from './openCollective';
import { checkAndWriteData } from './utils';

async function main() {
  await checkAndWriteData(OPEN_COLLECTIVE_FILE, fetchOpenCollectiveData);
  await checkAndWriteData(GITHUB_SPONSORS_FILE, fetchGitHubSponsors);
  //   todo: contributors
}

main();
