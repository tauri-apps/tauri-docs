import semver from 'semver';
import type { ReleaseWithDate } from './pageGenerator.ts';
import { mapProseLines, proseLines } from './utils.ts';

export type CoreEntry = {
  pkgLabel: string;
  version: string;
  notes: string;
  date?: string;
  dateLabel?: string;
};

type DatedEntry = CoreEntry & { date: string };

export type CoreRelease = {
  version: string;
  /** Earliest publish among the entries — when this version first existed */
  date?: string;
  dateLabel?: string;
  entries: CoreEntry[];
};

export type CoreGroup = { minor: string; date: string; releases: CoreRelease[] };

const CORE_PACKAGES = ['tauri', '@tauri-apps/api', 'tauri-cli', '@tauri-apps/cli'];

// Display order within a release; 'cli' is the merged tauri-cli/@tauri-apps/cli pair
const PACKAGE_ORDER = ['tauri', '@tauri-apps/api', 'cli', 'tauri-cli', '@tauri-apps/cli'];

/**
 * Group the core packages' 2.x releases by version, and file each version into
 * its minor-version section. One entry per package per version, so a version
 * names exactly one release and the page reads as a version history rather than
 * a publish log.
 */
export function buildCoreGroups(releasesByPackage: Map<string, ReleaseWithDate[]>): CoreGroup[] {
  const entries: CoreEntry[] = [];
  for (const pkgLabel of CORE_PACKAGES) {
    for (const { version, notes, date, dateLabel } of releasesByPackage.get(pkgLabel) ?? []) {
      if (semver.valid(version) && semver.major(version) === 2) {
        entries.push({ pkgLabel, version, notes, date, dateLabel });
      }
    }
  }

  mergeRepeatedVersions(entries);
  dedupeCliPair(entries);

  const byMinor = new Map<string, CoreRelease[]>();
  for (const release of toReleases(entries)) {
    const minor = `2.${semver.minor(release.version)}`;
    byMinor.set(minor, [...(byMinor.get(minor) ?? []), release]);
  }

  return [...byMinor.entries()]
    .sort(([a], [b]) => Number(b.split('.')[1]) - Number(a.split('.')[1]))
    .map(([minor, releases]) => ({
      minor,
      date: releaseDate(releases.flatMap((r) => r.entries)),
      // newest first, the same direction the minors run in
      releases: releases.sort((a, b) => semver.rcompare(a.version, b.version)),
    }));
}

/**
 * One release per version string: every core package that published that exact
 * version, whenever it got there. The packages run independent version lines and
 * can take weeks to converge — `@tauri-apps/api` reached 2.11.1 six weeks after
 * `tauri` did — so the first publish dates the release and the renderer dates
 * the stragglers individually.
 */
function toReleases(entries: CoreEntry[]): CoreRelease[] {
  const byVersion = new Map<string, CoreEntry[]>();
  for (const entry of entries) {
    byVersion.set(entry.version, [...(byVersion.get(entry.version) ?? []), entry]);
  }

  return [...byVersion].map(([version, list]) => {
    const earliest = list
      .filter(hasDate)
      .sort((a, b) => a.date.localeCompare(b.date))
      .at(0);
    return {
      version,
      date: earliest?.date,
      dateLabel: earliest?.dateLabel,
      entries: [...list].sort(
        (a, b) => PACKAGE_ORDER.indexOf(a.pkgLabel) - PACKAGE_ORDER.indexOf(b.pkgLabel)
      ),
    };
  });
}

// A changelog can list one version under two headings — tauri-cli's does for
// 2.0.0-rc.9, two covector sections describing the same release. Since they
// carry the same publish date, nothing downstream can tell them apart or name
// them separately, so fold the later notes into the first entry
function mergeRepeatedVersions(entries: CoreEntry[]): void {
  const first = new Map<string, CoreEntry>();
  for (let i = 0; i < entries.length; ) {
    const entry = entries[i];
    const key = `${entry.pkgLabel}@${entry.version}`;
    const kept = first.get(key);
    if (kept) {
      kept.notes = `${kept.notes}\n\n${entry.notes}`;
      entries.splice(i, 1);
    } else {
      first.set(key, entry);
      i++;
    }
  }
}

// The cli pair is one covector release published to both crates.io and npm, so
// collapse same-version twins into one "cli" entry however far apart the two
// registries got — gaps of days occur in the wild. The earlier publish dates the
// result. An npm entry with no crate twin has nothing to merge into and stays.
function dedupeCliPair(entries: CoreEntry[]): void {
  const crate = new Map(
    entries.filter((e) => e.pkgLabel === 'tauri-cli').map((e) => [e.version, e])
  );
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i];
    if (entry.pkgLabel !== '@tauri-apps/cli') {
      continue;
    }
    const twin = crate.get(entry.version);
    if (!twin) {
      continue;
    }
    const earlier = entry.date && (!twin.date || entry.date < twin.date) ? entry : twin;
    twin.pkgLabel = 'cli';
    twin.notes = mergeCliNotes(twin.notes, entry.notes);
    twin.date = earlier.date;
    twin.dateLabel = earlier.dateLabel;
    entries.splice(i, 1);
  }
}

type NotesSection = { heading: string; lines: string[] };

// The npm wrapper's whole contribution to its own changelog. Once the pair is
// one entry that dependency is the entry itself, so it goes whatever version it
// names — four rc entries record a bump to the crate version below their own.
const CRATE_UPGRADE = /^-\s+Upgraded to `tauri-cli@/;

/**
 * Fold the npm twin's notes into the crate's. Covector writes the wrapper the
 * crate's notes plus that upgrade line, so for the large majority of pairs
 * nothing survives the filter and the crate notes are returned untouched. The
 * handful that do carry a line of their own keep it, under the heading it came
 * from, rather than losing it to the merge.
 */
function mergeCliNotes(crateNotes: string, npmNotes: string): string {
  const sections = toSections(crateNotes);
  const carried = new Set(
    sections.flatMap((section) => section.lines.map((line) => line.trim())).filter(Boolean)
  );

  let merged = false;
  for (const section of toSections(npmNotes)) {
    const extra = section.lines
      .map((line) => line.trim())
      .filter((line) => line && !CRATE_UPGRADE.test(line) && !carried.has(line));
    if (!extra.length) {
      continue;
    }
    merged = true;
    extra.forEach((line) => carried.add(line));

    const target = sections.find((s) => s.heading === section.heading);
    if (target) {
      // after the section's last real line, so the list doesn't gain a blank
      target.lines.splice(target.lines.findLastIndex((line) => line.trim()) + 1, 0, ...extra);
      continue;
    }
    const last = sections[sections.length - 1];
    if (last.lines.at(-1)?.trim()) {
      last.lines.push('');
    }
    sections.push({ heading: section.heading, lines: ['', ...extra] });
  }

  return merged ? render(sections) : crateNotes;
}

// The leading section holds anything before the first heading, and is empty for
// the usual notes, which open with one
function toSections(notes: string): NotesSection[] {
  const sections: NotesSection[] = [{ heading: '', lines: [] }];
  for (const { line, inFence } of proseLines(notes)) {
    if (!inFence && /^#{1,6}\s/.test(line)) {
      sections.push({ heading: line.trim(), lines: [] });
    } else {
      sections[sections.length - 1].lines.push(line);
    }
  }
  return sections;
}

function render(sections: NotesSection[]): string {
  return sections
    .flatMap((section) => (section.heading ? [section.heading, ...section.lines] : section.lines))
    .join('\n');
}

function hasDate(e: CoreEntry): e is DatedEntry {
  return Boolean(e.date);
}

/**
 * The minor's own release date — its earliest publish. The later entries are
 * that minor's patches, each already dated on its own release row.
 */
function releaseDate(list: CoreEntry[]): string {
  const earliest = list
    .filter(hasDate)
    .sort((a, b) => a.date.localeCompare(b.date))
    .at(0);
  return earliest?.dateLabel ?? '';
}

/**
 * Demote headings by `levels` (capped at h6) so notes headings nest under the
 * headings the page wraps them in. Skips fenced code blocks.
 */
export function demoteNotesHeadings(notes: string, levels = 1): string {
  return mapProseLines(notes, (line) =>
    line.replace(/^#{1,6}(?=\s)/, (hashes) => '#'.repeat(Math.min(6, hashes.length + levels)))
  );
}
