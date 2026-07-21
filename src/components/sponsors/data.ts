import { existsSync, readFileSync } from 'node:fs';
import { GITHUB_SPONSORS_FILE, OPEN_COLLECTIVE_FILE } from 'packages/fetch-sponsors/config';
import type { GitHubSponsor, OpenCollectiveSponsor } from 'packages/fetch-sponsors/types';

function loadDataFile<T>(filePath: string, name: string): T {
  if (!existsSync(filePath)) {
    throw new Error(`${name} data file not found.`);
  }
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

// Avatar URLs point at third-party hosts and can go stale between data syncs.
async function validateAvatars(
  sponsors: Array<{ name: string; avatarUrl: string | null }>
): Promise<void> {
  const BATCH_SIZE = 50;
  const DEAD_STATUSES = [404, 410];
  for (let i = 0; i < sponsors.length; i += BATCH_SIZE) {
    await Promise.all(
      sponsors.slice(i, i + BATCH_SIZE).map(async (sponsor) => {
        if (!sponsor.avatarUrl) return;
        try {
          const res = await fetch(sponsor.avatarUrl, {
            method: 'HEAD',
            signal: AbortSignal.timeout(10_000),
          });
          if (DEAD_STATUSES.includes(res.status)) {
            console.warn(
              `Avatar gone for "${sponsor.name}" (${sponsor.avatarUrl}): ${res.status} ${res.statusText} — using fallback`
            );
            sponsor.avatarUrl = null;
          } else if (!res.ok) {
            console.warn(
              `Avatar probe inconclusive for "${sponsor.name}" (${sponsor.avatarUrl}): ${res.status} ${res.statusText} — keeping URL`
            );
          }
        } catch (error) {
          const reason = error instanceof Error ? error.message : String(error);
          console.warn(
            `Avatar probe failed for "${sponsor.name}" (${sponsor.avatarUrl}): ${reason} — keeping URL`
          );
        }
      })
    );
  }
}

async function loadOpenCollectiveSponsors(): Promise<OpenCollectiveSponsor[]> {
  const sponsors = loadDataFile<OpenCollectiveSponsor[]>(OPEN_COLLECTIVE_FILE, 'Open Collective');
  await validateAvatars(sponsors.filter((sponsor) => sponsor.tier !== 'bronze'));
  return sponsors;
}

async function loadGitHubSponsors(): Promise<GitHubSponsor[]> {
  const sponsors = loadDataFile<GitHubSponsor[]>(GITHUB_SPONSORS_FILE, 'GitHub sponsors');
  await validateAvatars(sponsors);
  return sponsors;
}

let openCollectiveSponsors: Promise<OpenCollectiveSponsor[]> | undefined;
export async function getOpenCollectiveSponsors(): Promise<OpenCollectiveSponsor[]> {
  openCollectiveSponsors ??= loadOpenCollectiveSponsors();
  try {
    return await openCollectiveSponsors;
  } catch (error) {
    openCollectiveSponsors = undefined;
    throw error;
  }
}

let gitHubSponsors: Promise<GitHubSponsor[]> | undefined;
export async function getGitHubSponsors(): Promise<GitHubSponsor[]> {
  gitHubSponsors ??= loadGitHubSponsors();
  try {
    return await gitHubSponsors;
  } catch (error) {
    gitHubSponsors = undefined;
    throw error;
  }
}
