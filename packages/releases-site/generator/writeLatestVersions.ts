import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

import { generatorDir } from './config.ts';
import type { ReleasesByPackage } from './pageGenerator.ts';
import type { PackageData } from './types.ts';
import { buildLatestVersions, formatLatestVersionsModule } from './uiData.ts';

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
