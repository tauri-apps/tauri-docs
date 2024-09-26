export interface PluginSupport {
  level: string;
  notes: string;
}

export interface PluginData {
  rustVersion: string;
  support: PluginSupport[];
}
