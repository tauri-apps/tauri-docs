import { platformOptions } from 'src/types';

export const platformFilters = [
  {
    id: 'platform',
    label: 'Platform filter (official features)',
    options: platformOptions,
    cssClassPattern: '${value}-search',
  },
];
