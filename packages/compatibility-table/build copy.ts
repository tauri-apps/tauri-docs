import { readdir, readFile } from 'fs/promises';
import TOML from '@iarna/toml';

import path from 'path';
import { writeFileSync } from 'node:fs';

// read Cargo.toml, parse, append, write final file

// plugins/autostart/Cargo.toml

// todo -> resolve dir
const baseDir = '../plugins-workspace/plugins';

async function main() {
  const plugins = await readdir(baseDir);

  // todo: fetch from repo file
  const baseRustVersion = '1.75';

  const tables = [];

  for (const plugin of plugins) {
    const pluginPath = path.join(baseDir, plugin, 'Cargo.toml');
    try {
      const data = TOML.parse(await readFile(pluginPath, 'utf-8'));
      const hasSpecificRustVersion =
        data.package['rust-version'] && !data.package['rust-version'].workspace;
      const newData = {
        [plugin]: {
          rustVersion: hasSpecificRustVersion ? data.package['rust-version'] : baseRustVersion,
          ...data.package.metadata.platforms,
        },
      };
      tables.push(newData);
    } catch (error) {
      continue;
    }
  }

  writeFileSync(
    '../../src/components/plugins/_tableContent.json',
    JSON.stringify(tables).replace('[', '').replace(']', '')
  );
}

main();
