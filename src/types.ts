export type Platform = 'windows' | 'linux' | 'ios' | 'macos' | 'android';

export const platformOptions: { value: Platform; label: string }[] = [
  { value: 'windows', label: 'Windows' },
  { value: 'linux', label: 'Linux' },
  { value: 'macos', label: 'macOS' },
  { value: 'ios', label: 'iOS' },
  { value: 'android', label: 'Android' },
];
