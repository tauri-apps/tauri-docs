import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { generatorDir, repositories, shouldBuildReleases } from './config.ts';
import { fetchData } from './dataFetch.ts';
import { generatePagesAndTableData } from './pageGenerator.ts';
import type { PackageData } from './types.ts';
import { writeOutput } from './utils.ts';

async function buildSite() {
  const dataFilePath = join(generatorDir, 'data.json');
  let packageData: PackageData;

  if (process.argv.includes('--refresh')) {
    packageData = await fetchData(repositories);
    writeOutput(packageData, 'data.json');
  } else {
    packageData = JSON.parse(readFileSync(dataFilePath, 'utf-8'));
    console.log('Skipping versions fetch - using committed data.json');
  }

  // The refresh workflow only updates data.json; pages are a build-time concern
  if (process.argv.includes('--no-pages')) {
    return;
  }

  const buildReleases = shouldBuildReleases();
  if (!buildReleases) {
    console.log('Skipping release pages - set BUILD_RELEASES=1 to build them');
  }

  await generatePagesAndTableData(packageData, { pages: buildReleases });
}

buildSite().catch((error) => {
  console.error(error);
  process.exit(1);
});
