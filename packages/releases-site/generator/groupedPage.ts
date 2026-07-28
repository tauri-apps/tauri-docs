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
  dateLabel?: string;
  entries: CoreEntry[];
};

export type CoreGroup = { minor: string; releases: CoreRelease[] };

const CORE_PACKAGES = ['tauri', '@tauri-apps/api', 'tauri-cli', '@tauri-apps/cli'];

// Display order within a release; 'cli' is the merged tauri-cli/@tauri-apps/cli pair
const PACKAGE_ORDER = ['tauri', '@tauri-apps/api', 'cli', 'tauri-cli', '@tauri-apps/cli'];

/**
 * Group the core packages' 2.x releases by version, then by minor. One entry per
 * package per version, so the page reads as a version history, not a publish log.
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
      // newest first, the same direction the minors run in
      releases: releases.sort((a, b) => semver.rcompare(a.version, b.version)),
    }));
}

/**
 * One release per version string, holding every package that reached it whenever
 * it got there — `@tauri-apps/api` took six weeks to catch `tauri` at 2.11.1. The
 * first publish dates the release; the renderer dates the stragglers separately.
 */
function toReleases(entries: CoreEntry[]): CoreRelease[] {
  const byVersion = new Map<string, CoreEntry[]>();
  for (const entry of entries) {
    byVersion.set(entry.version, [...(byVersion.get(entry.version) ?? []), entry]);
  }

  return [...byVersion].map(([version, list]) => ({
    version,
    dateLabel: earliestDateLabel(list),
    entries: [...list].sort(
      (a, b) => PACKAGE_ORDER.indexOf(a.pkgLabel) - PACKAGE_ORDER.indexOf(b.pkgLabel)
    ),
  }));
}

// tauri-cli's changelog lists 2.0.0-rc.9 under two headings. They share a publish
// date, so nothing downstream can tell them apart — fold the later into the first.
function mergeRepeatedVersions(entries: CoreEntry[]): void {
  const first = new Map<string, CoreEntry>();
  for (let i = 0; i < entries.length;) {
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

// The cli pair is one covector release on two registries, so same-version twins
// collapse into one "cli" entry however far apart they were published — gaps of
// days occur. An npm entry with no crate twin has nothing to merge into and stays.
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
    twin.pkgLabel = 'cli';
    twin.notes = mergeCliNotes(twin.notes, entry.notes, entry.version);
    if (entry.date && (!twin.date || entry.date < twin.date)) {
      twin.date = entry.date;
      twin.dateLabel = entry.dateLabel;
    }
    entries.splice(i, 1);
  }
}

type NotesSection = { heading: string; lines: string[] };

// The npm wrapper's whole contribution to its own changelog, and the crate version
// it wraps. Once merged, that dependency is the entry itself, so the line goes.
const CRATE_UPGRADE = /^-\s+Upgraded to `tauri-cli@([^`]+)`/;

/**
 * Fold the npm twin's notes into the crate's. Covector writes the wrapper the
 * crate's notes plus the upgrade line, so most pairs contribute nothing; a line
 * of the twin's own is kept, under the heading it came from.
 *
 * A wrapper naming a *different* crate version is a release behind — npm rc.10
 * shipped crate rc.9 — so its body belongs to that release, which has its own
 * entry. Carrying it would print the same fix under two consecutive versions.
 */
function mergeCliNotes(crateNotes: string, npmNotes: string, version: string): string {
  const npmSections = toSections(npmNotes);
  const wraps = npmSections
    .flatMap((section) => section.lines)
    .map((line) => line.trim().match(CRATE_UPGRADE)?.[1])
    .find(Boolean);
  if (wraps && wraps !== version) {
    return crateNotes;
  }

  const sections = toSections(crateNotes);
  const carried = new Set(
    sections.flatMap((section) => section.lines.map((line) => line.trim())).filter(Boolean)
  );

  let merged = false;
  for (const section of npmSections) {
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

// The leading section holds anything before the first heading — usually empty
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
 * Split stable releases from the prereleases leading to them. Every prerelease
 * belongs to the 2.0 run-up, and they are two thirds of the releases and most of
 * the page weight for a version line nobody runs — so they get a page of their own.
 */
export function splitPrereleases(groups: CoreGroup[]): {
  stable: CoreGroup[];
  prereleases: CoreGroup[];
} {
  const stable: CoreGroup[] = [];
  const prereleases: CoreGroup[] = [];
  for (const group of groups) {
    const early = group.releases.filter((r) => semver.prerelease(r.version));
    const released = group.releases.filter((r) => !semver.prerelease(r.version));
    if (released.length) {
      stable.push(regroup(group, released));
    }
    if (early.length) {
      prereleases.push(regroup(group, early));
    }
  }
  return { stable, prereleases };
}

function regroup(group: CoreGroup, releases: CoreRelease[]): CoreGroup {
  return { ...group, releases };
}

/** When the packages in `list` first reached the version they have in common. */
function earliestDateLabel(list: CoreEntry[]): string | undefined {
  return list
    .filter(hasDate)
    .sort((a, b) => a.date.localeCompare(b.date))
    .at(0)?.dateLabel;
}

/** Demote headings by `levels` (capped at h6) so notes nest under the page's own
 * headings. Skips fenced code blocks. */
export function demoteNotesHeadings(notes: string, levels = 1): string {
  return mapProseLines(notes, (line) =>
    line.replace(/^#{1,6}(?=\s)/, (hashes) => '#'.repeat(Math.min(6, hashes.length + levels)))
  );
}
