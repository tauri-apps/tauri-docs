import { rcompare, valid as semverValid } from 'semver';
import type { Release } from '../types.ts';

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
      const [heading, ...c] = section.split('\n');
      // Skip unreleased entries, e.g. "## \[0.6.1] - (Not Published)"
      if (!heading || heading.includes('Not Published')) {
        return null;
      }
      return {
        // The heading still carries the closing bracket (and a leading escape
        // in the "## \[x.y.z]" form) — the version is what comes before it
        version: heading.replaceAll('\\[', '').split(']')[0] ?? '',
        notes: c.join('\n'),
      };
    })
    .filter((r): r is { version: string; notes: string } => r !== null);
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
