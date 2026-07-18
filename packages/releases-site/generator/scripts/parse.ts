import { rcompare } from 'semver';
import type { Release } from '../types.js';

/**
 * Parse changelog content into individual releases
 */
function parseChangelog(changelog: string): Array<{ version: string; notes: string }> {
  // maybe json parse is escaping some characters

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
  const releases = parseChangelog(changelog);

  releases.sort((a, b) => {
    return rcompare(a.version, b.version);
  });
  return releases;
}
