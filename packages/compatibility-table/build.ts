import { readdir, readFile } from 'fs/promises';
import { writeFileSync } from 'node:fs';
import TOML from '@iarna/toml';
import path from 'path';

const desktopOnlySupport = [
  {
    platform: 'windows',
    level: 'full',
    notes: '',
  },
  {
    platform: 'linux',
    level: 'full',
    notes: '',
  },
  {
    platform: 'macos',
    level: 'full',
    notes: '',
  },
  {
    platform: 'android',
    level: 'none',
    notes: '',
  },
  {
    platform: 'ios',
    level: 'none',
    notes: '',
  },
];

// todo: resolve dir
const baseDir = '../plugins-workspace';
const pluginDir = '../plugins-workspace/plugins';

async function main() {
  const plugins = await readdir(pluginDir);

  const workspaceCargo = TOML.parse(await readFile(path.join(baseDir, 'Cargo.toml'), 'utf-8'));
  const baseRustVersion = workspaceCargo.workspace.package['rust-version'];

  const tables: Record<string, any> = {};
  for (const plugin of plugins) {
    // using Record<string, any> but it's not reaaaally safe, might as well use any
    const pluginPath = path.join(pluginDir, plugin, 'Cargo.toml');
    try {
      const data = TOML.parse(await readFile(pluginPath, 'utf-8'));
      const pkg = data.package as Record<string, any>;

      const hasSpecificRustVersion = pkg['rust-version'] && !pkg['rust-version'].workspace;
      const platformsSupport: Record<string, any> = pkg.metadata.platforms.support;

      //  todo: fix platforms case iOS, Windows...
      const support = Object.entries(platformsSupport).map(([platform, supportInfo]) => ({
        platform,
        ...supportInfo,
      }));

      tables[plugin] = {
        rustVersion: hasSpecificRustVersion ? pkg['rust-version'] : baseRustVersion,
        support,
      };
    } catch (error) {
      continue;
    }
  }

  tables['system-tray'] = {
    rustVersion: baseRustVersion,
    support: desktopOnlySupport,
  };

  tables['window-customization'] = {
    rustVersion: baseRustVersion,
    support: desktopOnlySupport,
  };

  writeFileSync('../../src/components/plugins/_tableContent.json', JSON.stringify(tables, null, 2));
}

main();
