export interface PluginSupport {
  platform: string;
  level: string;
  // possible markdown
  notes?: string;
}

export interface PluginData {
  rustVersion: string;
  support: PluginSupport[];
}

export function getSupportIcon(supportLevel: string) {
  // todo: icons + hover tooltip
  switch (supportLevel) {
    case 'full':
      return '⏺︎';
    case 'partial':
      return '◐︎';
    case 'none':
      return '⨯';
    default:
      return '';
  }
}
