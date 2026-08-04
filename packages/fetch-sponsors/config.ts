import process from 'node:process';
import path from 'node:path';
import { existsSync } from 'node:fs';

function findWorkspaceRoot(from: string) {
  for (let dir = from; ; dir = path.dirname(dir)) {
    if (existsSync(path.join(dir, 'pnpm-workspace.yaml'))) return dir;
    if (path.dirname(dir) === dir) throw new Error(`no workspace root above ${from}`);
  }
}

// FIXME: This is used by both this package and the starlight build environment,
// so we can't use `import ProjectContext from 'virtual:starlight/project-context'` here
// (starlight seems to copy all the dependency files out so dynamic relative paths don't work)
const workspaceRoot = findWorkspaceRoot(process.cwd());

export const OPEN_COLLECTIVE_FILE = path.resolve(workspaceRoot, 'src/data/openCollectiveData.json');
export const GITHUB_SPONSORS_FILE = path.resolve(workspaceRoot, 'src/data/githubSponsorsData.json');
export const GITHUB_CONTRIBUTORS_FILE = path.resolve(
  workspaceRoot,
  'src/data/githubContributorsData.json'
);

export const PLATINUM_THRESHOLD = 5_000;
export const GOLD_THRESHOLD = 500;
export const SILVER_THRESHOLD = 100;

export const GH_IMAGE_DIMENSION = 64;
export const OC_IMAGE_DIMENSION = 256;
