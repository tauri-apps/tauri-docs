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
  // 'website'
  socialLinks?: Array<{ type: string; url: string }>;
  type: 'ORGANIZATION' | 'INDIVIDUAL';
};

export type Tier = 'platinum' | 'gold' | 'silver' | 'bronze';
