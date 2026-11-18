// Writes the translation status dashboard into the Astro output, so it runs after `astro build`
// Adapted from https://github.com/withastro/docs/blob/main/scripts/lunaria.mts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { createLunaria, generateDashboard } from '@lunariajs/core';

if (process.env.CONTEXT === 'deploy-preview') {
  console.log('Skipping the translation status dashboard on deploy previews');
  process.exit(0);
}

const lunaria = await createLunaria();
const status = await lunaria.getFullStatus();

const outDir = lunaria.config.outDir;
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'index.html'), generateDashboard(lunaria.config, status));
