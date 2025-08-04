export type GitHubSponsor = {
  name: string;
  avatarUrl: string;
  profileUrl?: string;
};

export type OpenCollectiveSponsor = {
  id: string;
  name: string;
  avatarUrl: string;
  profileUrl?: string;
  tier?: Tier;
  socialLinks?: {
    website?: string;
    twitter?: string;
    github?: string;
    [key: string]: string | undefined;
  };
  type: 'ORGANIZATION' | 'INDIVIDUAL';
};

export type Tier = 'platinum' | 'gold' | 'silver' | 'bronze';
