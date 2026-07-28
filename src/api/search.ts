import { platformOptions } from 'src/types';

export const platformFilters = [
  {
    id: 'platform',
    label: 'Platform filter (official features)',
    options: platformOptions,
    cssClassPattern: '${value}-search',
    // Emitted by `src/components/list/Features.astro`. Cards without it carry no
    // platform metadata (community resources) and stay visible.
    presenceClass: 'has-platform-data',
  },
];
