import { platformOptions } from 'src/types';

export const platformFilters = [
  {
    id: 'platform',
    label: 'Platform filter (filters official features, community resources stay visible)',
    options: platformOptions,
    cssClassPattern: '${value}-search',
  },
];
