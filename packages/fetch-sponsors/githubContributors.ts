import { Octokit } from '@octokit/core';
import { paginateGraphQL, type PageInfoForward } from '@octokit/plugin-paginate-graphql';
import { paginateRest } from '@octokit/plugin-paginate-rest';
import { retry } from '@octokit/plugin-retry';
import type { Endpoints } from '@octokit/types';
import { throttling } from '@octokit/plugin-throttling';

import { GITHUB_CONTRIBUTORS_FILE } from './config.ts';
import { GITHUB_TOKEN, saveToFile } from './utils.ts';

export interface Contributor {
  login: string;
  avatar_url: string;
  total_contributions: number;
}

type APIData<T extends keyof Endpoints> = Endpoints[T]['response']['data'];
type Repo = APIData<'GET /orgs/{org}/repos'>[number];
interface Review {
  login: string | undefined;
  avatarUrl: string | undefined;
  prNumber: number;
  labels: string[];
}
interface AugmentedRepo extends Repo {
  reviewComments: any[];
  issues: any[];
  reviews: Review[];
}

const OctokitWithPlugins = Octokit.plugin(paginateRest, paginateGraphQL, retry, throttling);

class StatsCollector {
  #org: string;
  #app: InstanceType<typeof OctokitWithPlugins>;
  #contributionThreshold: number;

  constructor(opts: { org: string; token: string | undefined; contributionThreshold: number }) {
    this.#org = opts.org;
    if (!opts.token) {
      throw new Error('GITHUB_TOKEN is required');
    }
    this.#app = new OctokitWithPlugins({
      auth: opts.token,
      throttle: {
        onRateLimit: (retryAfter, options, octokit, retryCount) => {
          octokit.log.warn(`Request quota exhausted for request ${options.method} ${options.url}`);

          if (retryCount < 1) {
            // only retries once
            octokit.log.info(`Retrying after ${retryAfter} seconds!`);
            return true;
          }
        },
        onSecondaryRateLimit: (retryAfter, options, octokit) => {
          // does not retry, only logs a warning
          octokit.log.warn(
            `SecondaryRateLimit detected for request ${options.method} ${options.url}`
          );
        },
      },
    });
    this.#contributionThreshold = opts.contributionThreshold;
  }

  async run(): Promise<Contributor[]> {
    const repos = await this.#getReposWithExtraStats();

    const contributors: Record<string, Contributor> = {};

    for (const repo of repos) {
      for (const issue of repo.issues) {
        const { user, pull_request } = issue;
        if (!user) {
          continue;
        }
        const { avatar_url, login } = user;
        const contributor = (contributors[login] =
          contributors[login] || this.#newContributor({ avatar_url, login }));
        if (pull_request) {
          contributor.total_contributions++;
          if (pull_request.merged_at) {
            contributor.total_contributions++;
          }
        } else {
          // is issue?
          contributor.total_contributions++;
        }
      }

      /** Temporary store for deduplicating multiple reviews on the same PR. */
      const reviewedPRs: Record<string, Set<number>> = {};

      for (const review of repo.reviewComments) {
        const { user, pull_request_url } = review;
        const prNumber = parseInt(pull_request_url.split('/').pop()!);
        if (!user) {
          continue;
        }
        const { avatar_url, login } = user;
        const contributor = (contributors[login] =
          contributors[login] || this.#newContributor({ avatar_url, login }));
        const contributorReviews = (reviewedPRs[login] = reviewedPRs[login] || new Set());
        if (!contributorReviews.has(prNumber)) {
          contributor.total_contributions++;
          contributorReviews.add(prNumber);
        }
      }

      for (const review of repo.reviews) {
        const { login, avatarUrl, prNumber } = review;
        if (!login || !avatarUrl) {
          continue;
        }
        const contributor = (contributors[login] =
          contributors[login] || this.#newContributor({ avatar_url: avatarUrl, login }));
        const contributorReviews = (reviewedPRs[login] = reviewedPRs[login] || new Set());
        if (!contributorReviews.has(prNumber)) {
          contributor.total_contributions++;
          contributorReviews.add(prNumber);
        }
      }
    }

    // Filter contributors based on threshold
    const topContributors = Object.values(contributors)
      .filter((contributor) => contributor.total_contributions >= this.#contributionThreshold)
      .filter((contributor) => !contributor.login.includes('[bot]'))
      .filter((contributor) => !contributor.login.includes('tauri-bot'))
      .sort((a, b) => b.total_contributions - a.total_contributions);

    console.log(`output ${topContributors.length}/${Object.values(contributors).length}`);
    return topContributors;
  }

  #newContributor({ avatar_url, login }: { avatar_url: string; login: string }): Contributor {
    return {
      login,
      avatar_url,
      total_contributions: 0,
    };
  }

  async #getRepos() {
    return (
      await this.#app.request(`GET /orgs/{org}/repos`, {
        org: this.#org,
        type: 'sources',
      })
    ).data.filter((repo) => !repo.private);
  }

  async #getAllIssuesAndPRs(repo: string) {
    console.log(`fetching issues and PRs for ${this.#org}/${repo}`);
    const issues = await this.#app.paginate('GET /repos/{owner}/{repo}/issues', {
      owner: this.#org,
      repo,
      per_page: 100,
      state: 'all',
    });
    console.log(`found ${issues.length} issues and PRs for ${this.#org}/${repo}`);
    return issues;
  }

  async #getAllReviewComments(repo: string) {
    console.log(`fetching PR review comments for ${this.#org}/${repo}`);
    const reviews = await this.#app.paginate('GET /repos/{owner}/{repo}/pulls/comments', {
      owner: this.#org,
      repo,
      per_page: 100,
    });
    console.log(`found ${reviews.length} PR review comments for ${this.#org}/${repo}`);
    return reviews;
  }

  async #getAllReviews(repo: string) {
    console.log(`fetching PR reviews for ${this.#org}/${repo}`);
    const {
      repository: {
        pullRequests: { nodes: pullRequests },
      },
    } = await this.#app.graphql.paginate<{
      repository: {
        pullRequests: {
          pageInfo: PageInfoForward;
          nodes: Array<{
            number: number;
            labels: { nodes: Array<{ name: string }> };
            latestReviews: {
              nodes: Array<{ author: null | { login: string; avatarUrl: string } }>;
            };
          }>;
        };
      };
    }>(
      `
      query ($org: String!, $repo: String!, $cursor: String) {
        repository(owner: $org, name: $repo) {
          pullRequests(first: 100, after: $cursor) {
            nodes {
              number
              labels(first: 10) {
                nodes {
                  name
                }
              }
              latestReviews(first: 15) {
                nodes {
                  author {
                    login
                    avatarUrl
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
            }
          }
        }
      }
`,
      { org: this.#org, repo }
    );
    const reviews: Review[] = [];
    for (const { number, labels, latestReviews } of pullRequests) {
      for (const { author } of latestReviews.nodes) {
        reviews.push({
          prNumber: number,
          labels: labels.nodes.map(({ name }) => name),
          login: author?.login,
          avatarUrl: author?.avatarUrl,
        });
      }
    }
    console.log(`found ${reviews.length} PR reviews for ${this.#org}/${repo}`);
    return reviews;
  }

  async #getReposWithExtraStats() {
    const repos = await this.#getRepos();
    console.log(`found ${repos.length} repos`);
    const reposWithStats: AugmentedRepo[] = [];
    for (const repo of repos) {
      reposWithStats.push({
        ...repo,
        issues: await this.#getAllIssuesAndPRs(repo.name),
        reviewComments: await this.#getAllReviewComments(repo.name),
        reviews: await this.#getAllReviews(repo.name),
      });
    }
    return reposWithStats;
  }
}

export async function fetchGitHubContributorsData() {
  const contributionThreshold = 5;
  const token = await GITHUB_TOKEN();
  try {
    const statsCollector = new StatsCollector({
      org: 'tauri-apps',
      token,
      contributionThreshold,
    });
    await saveToFile(GITHUB_CONTRIBUTORS_FILE, () => statsCollector.run());
  } catch (error) {
    console.error('Failed to collect contributors data:', error);
  }
}
