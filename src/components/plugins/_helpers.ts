export interface PluginSupport {
  platform: string;
  level: SupportLevel;
  // possible markdown
  notes?: string;
}

export type SupportLevel = 'full' | 'partial' | 'none';

export interface PluginData {
  rustVersion: string;
  support: PluginSupport[];
}
