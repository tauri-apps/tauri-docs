export type Sponsor = {
  id: string;
  name: string;
  avatarUrl: string;
  profileUrl?: string;
  tier?: Tier;
  type: 'ORGANIZATION' | 'INDIVIDUAL';
};

export type Tier = 'platinum' | 'gold' | 'silver' | 'bronze';
export const IMAGE_DIMENSION = 256;
