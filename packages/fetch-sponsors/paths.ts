import path from 'node:path';

// CLI-only module: these paths resolve relative to this file, which holds only while
// the package runs unbundled (`node ./main.ts` via the sync scripts). The site never
// imports this. src/components/sponsors/data.ts imports the JSON statically instead.
const workspaceRoot = path.resolve(import.meta.dirname, '../..');

export const OPEN_COLLECTIVE_FILE = path.resolve(workspaceRoot, 'src/data/openCollectiveData.json');
export const GITHUB_SPONSORS_FILE = path.resolve(workspaceRoot, 'src/data/githubSponsorsData.json');
export const GITHUB_CONTRIBUTORS_FILE = path.resolve(
  workspaceRoot,
  'src/data/githubContributorsData.json'
);
