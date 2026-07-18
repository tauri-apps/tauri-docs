import { appendFileSync } from 'node:fs';
import { join } from 'node:path';
import fetch from 'make-fetch-happen';

import { generatorDir } from './config.js';
import type { PackageData, Repository } from './types.js';

const fetchWithCache = async (url: string, cacheDir: string): Promise<string> => {
  const response = await fetch(url, {
    cachePath: join(generatorDir, '.cache', cacheDir),
    cache: 'no-cache',
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  return response.text();
};

function logError(message: string, error: unknown) {
  const logMessage = `${new Date().toISOString()} - ${message}: ${
    error instanceof Error ? error.stack : error
  }\n`;
  appendFileSync(join(generatorDir, 'error.log'), logMessage);
}

function logOk(message: string, url: string) {
  const logMessage = `${new Date().toISOString()} - ${message} (URL: ${url})\n`;
  appendFileSync(join(generatorDir, 'success.log'), logMessage);
}

interface CrateVersion {
  num: string;
  created_at: string;
}

function formatCrateVersion(versions: CrateVersion[]): Record<string, string> {
  return Object.fromEntries(versions.map((version) => [version.num, version.created_at]));
}

export async function fetchData(repositories: Repository[]): Promise<PackageData> {
  const data: PackageData = {};

  for (const repo of repositories) {
    for (const pkg of repo.packages) {
      let packageData = data[pkg.name];
      if (!packageData) {
        packageData = {
          group: repo.packages.length > 1 ? repo.name : '',
          changelogs: '',
          npmData: { id: '', name: '', versions: {} },
          cratesData: { id: '', name: '', versions: {} },
        };
        data[pkg.name] = packageData;
      }

      const { githubPath, npmPath, cratesPath } = pkg;
      console.log(`fetching ${pkg.name}...`);
      try {
        if (githubPath) {
          const path = githubPath === '__root__' ? '' : githubPath;
          const rawUrl = repo.repoUrl.replace('github.com', 'raw.githubusercontent.com');
          const branch = repo.branch || 'dev';
          const githubUrl = path
            ? `${rawUrl}/${branch}/${path}/CHANGELOG.md`
            : `${rawUrl}/${branch}/CHANGELOG.md`;

          try {
            packageData.changelogs = await fetchWithCache(githubUrl, `changelogs/${pkg.name}`);
            logOk(`fetched changelog for ${pkg.name}`, githubUrl);
          } catch (error) {
            logError(`failed ${pkg.name} - ${githubUrl}`, error);
          }
        }
        // todo: else warn missing

        if (npmPath) {
          const npmUrl = `https://registry.npmjs.org/${npmPath}`;
          try {
            const npmResponse = await fetchWithCache(npmUrl, `npm/${pkg.name}`);
            const rawData = JSON.parse(npmResponse);
            const versions = rawData.time;

            delete versions.created;
            delete versions.modified;

            packageData.npmData = {
              id: rawData._id,
              name: rawData.name,
              // object keyed by version - time
              versions: rawData.time,
            };
            logOk(`fetched npm data for ${pkg.name}`, npmUrl);
          } catch (error) {
            logError(`failed ${pkg.name} - ${npmUrl}`, error);
          }
        }

        if (cratesPath) {
          const cratesUrl = `https://crates.io/api/v1/crates/${cratesPath}`;
          try {
            const cratesResponse = await fetchWithCache(cratesUrl, `crates/${pkg.name}`);
            const rawData = JSON.parse(cratesResponse);
            packageData.cratesData = {
              id: rawData.crate.id,
              name: rawData.crate.name,
              versions: formatCrateVersion(rawData.versions || []),
            };
            logOk(`fetched crates data for ${pkg.name}`, cratesUrl);
          } catch (error) {
            logError(`failed ${pkg.name} - ${cratesUrl}`, error);
          }
        }
      } catch (error) {
        logError(`Failed to fetch data for ${pkg.name}`, error);
      }
    }
  }

  return data;
}
