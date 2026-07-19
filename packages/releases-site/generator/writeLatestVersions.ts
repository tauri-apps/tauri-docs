import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { generatorDir } from './config.js';
import type { ReleasesByPackage } from './pageGenerator.js';
import type { PackageData } from './types.js';
import { buildLatestVersions, formatLatestVersionsModule } from './uiData.js';

export function writeLatestVersions(
  packageData: PackageData,
  releasesByPackage: ReleasesByPackage
): void {
  const latestVersions = buildLatestVersions(packageData, releasesByPackage);
  const generatedDir = join(generatorDir, 'generated');
  mkdirSync(generatedDir, { recursive: true });
  writeFileSync(
    join(generatedDir, 'latestVersions.ts'),
    formatLatestVersionsModule(latestVersions),
    'utf-8'
  );
}
