import { readdir, readFile } from 'fs/promises';
import TOML from '@iarna/toml';

import path from 'path';
import { writeFileSync } from 'node:fs';

// plugins/autostart/Cargo.toml

// todo: resolve dir
const baseDir = '../plugins-workspace/plugins';

async function main() {
  const plugins = await readdir(baseDir);

  // todo: fetch from repo file
  const baseRustVersion = '1.75';

  const tables: Record<string, any> = {};
  for (const plugin of plugins) {
    // using Record<string, any> but it's not reaaaally safe, might as well use any
    const pluginPath = path.join(baseDir, plugin, 'Cargo.toml');
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

  writeFileSync('../../src/components/plugins/_tableContent.json', JSON.stringify(tables, null, 2));
}

main();
