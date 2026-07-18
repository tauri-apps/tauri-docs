import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { generatorDir, repositories } from './config.js';
import { fetchData } from './dataFetch.js';
import { generatePagesAndTableData } from './pageGenerator.js';
import type { PackageData } from './types.js';
import { writeOutput } from './utils.js';

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

  await generatePagesAndTableData(packageData);
}

buildSite().catch((error) => {
  console.error(error);
  process.exit(1);
});
