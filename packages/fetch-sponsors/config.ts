import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const OPEN_COLLECTIVE_FILE = path.resolve(
  __dirname,
  '../../src/data/openCollectiveData.json'
);
export const GITHUB_SPONSORS_FILE = path.resolve(
  __dirname,
  '../../src/data/githubSponsorsData.json'
);
export const GITHUB_CONTRIBUTORS_FILE = path.resolve(
  __dirname,
  '../../src/data/githubContributorsData.json'
);

export const PLATINUM_THRESHOLD = 5_000;
export const GOLD_THRESHOLD = 500;
export const SILVER_THRESHOLD = 100;

export const GH_IMAGE_DIMENSION = 64;
export const OC_IMAGE_DIMENSION = 256;
