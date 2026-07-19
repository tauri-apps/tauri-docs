import { rcompare, valid as semverValid } from 'semver';
import type { Release } from '../types.js';

/**
 * Parse changelog content into individual releases
 */
function parseChangelog(changelog: string): Array<{ version: string; notes: string }> {
  // Version headings appear as either "## [x.y.z]" or "## \[x.y.z]" depending
  // on the source changelog; split on whichever form this file actually uses.
  const nonEscaped = changelog.split('## [');
  const escaped = changelog.split('## \\[');
  let valid = escaped;
  if (nonEscaped.length > escaped.length) {
    valid = nonEscaped;
  }

  return valid
    .filter((item) => !item.includes('# Changelog'))
    .map((section) => {
      const [version, ...c] = section.split('\n');
      if (!version) {
        return null;
      }
      const contents = c.join('\n');
      return {
        version: version.replace('\\[', '').replace(']', ''),
        notes: contents,
      };
    })
    .filter((r): r is { version: string; notes: string } => r !== null)
    .filter(({ version }) => !version.includes('Not Published'));
}

export function parseAndSortChangelog(changelog: string): Release[] {
  // rcompare throws on anything that isn't valid semver (e.g. an upstream
  // "## [Unreleased]" heading), which would break every build until fixed.
  const releases = parseChangelog(changelog).filter(({ version }) => {
    if (!semverValid(version)) {
      console.warn(`skipping non-semver changelog heading: "${version}"`);
      return false;
    }
    return true;
  });

  releases.sort((a, b) => {
    return rcompare(a.version, b.version);
  });
  return releases;
}
