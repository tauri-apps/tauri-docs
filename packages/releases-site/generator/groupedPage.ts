import semver from 'semver';
import type { ReleaseWithDate } from './pageGenerator.ts';
import { mapProseLines } from './utils.ts';

export type CoreEntry = {
  pkgLabel: string;
  version: string;
  notes: string;
  date?: string;
  dateLabel?: string;
};

export type CoreEvent = { dateLabel?: string; entries: CoreEntry[] };

export type CoreGroup = { minor: string; dateRange: string; events: CoreEvent[] };

const CORE_PACKAGES = ['tauri', '@tauri-apps/api', 'tauri-cli', '@tauri-apps/cli'];

const EVENT_ORDER = ['tauri', '@tauri-apps/api', 'cli', 'tauri-cli', '@tauri-apps/cli'];

// Max publish-time gap for two entries to count as the same release event
const EVENT_WINDOW_MS = 6 * 60 * 60 * 1000;

/**
 * Group the core packages' 2.x releases into minor-version sections, each
 * holding release events: entries clustered by registry publish-time
 * proximity. A cluster never holds two versions of the same package, so
 * close-together but distinct releases stay apart while true co-releases
 * (whose patch versions may diverge) merge.
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

  dedupeCliPair(entries);

  const byMinor = new Map<string, CoreEntry[]>();
  for (const entry of entries) {
    const minor = `2.${semver.minor(entry.version)}`;
    byMinor.set(minor, [...(byMinor.get(minor) ?? []), entry]);
  }

  return [...byMinor.entries()]
    .sort(([a], [b]) => Number(b.split('.')[1]) - Number(a.split('.')[1]))
    .map(([minor, list]) => ({
      minor,
      dateRange: dateRange(list),
      events: clusterEvents(list),
    }));
}

// The cli pair publishes the same changelog to crates.io and npm — collapse
// identical (version, notes) twins into one "cli" entry
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
    if (twin && twin.notes === entry.notes) {
      twin.pkgLabel = 'cli';
      if (entry.date && (!twin.date || entry.date < twin.date)) {
        twin.date = entry.date;
        twin.dateLabel = entry.dateLabel;
      }
      entries.splice(i, 1);
    }
  }
}

function clusterEvents(list: CoreEntry[]): CoreEvent[] {
  const dated = list
    .filter((e) => e.date)
    .sort((a, b) => (a.date as string).localeCompare(b.date as string));
  const events: CoreEvent[] = [];
  let current: CoreEntry[] = [];
  for (const entry of dated) {
    const last = current[current.length - 1];
    const gap = last ? Date.parse(entry.date as string) - Date.parse(last.date as string) : 0;
    const samePackage = current.some((e) => e.pkgLabel === entry.pkgLabel);
    if (!last || (gap <= EVENT_WINDOW_MS && !samePackage)) {
      current.push(entry);
    } else {
      events.push(toEvent(current));
      current = [entry];
    }
  }
  if (current.length) {
    events.push(toEvent(current));
  }
  for (const entry of list.filter((e) => !e.date)) {
    events.push(toEvent([entry]));
  }
  return events;
}

function toEvent(entries: CoreEntry[]): CoreEvent {
  return {
    dateLabel: entries[0].dateLabel,
    entries: [...entries].sort(
      (a, b) => EVENT_ORDER.indexOf(a.pkgLabel) - EVENT_ORDER.indexOf(b.pkgLabel)
    ),
  };
}

function dateRange(list: CoreEntry[]): string {
  const labels = list
    .filter((e) => e.date)
    .sort((a, b) => (a.date as string).localeCompare(b.date as string))
    .map((e) => e.dateLabel);
  if (labels.length === 0) {
    return '';
  }
  const first = labels[0];
  const last = labels[labels.length - 1];
  return first === last ? `${first}` : `${first} – ${last}`;
}

/**
 * Demote headings one level (capped at h6) so notes headings nest under the
 * page's per-event `###` headings. Skips fenced code blocks.
 */
export function demoteNotesHeadings(notes: string): string {
  return mapProseLines(notes, (line) =>
    line.replace(/^(#{1,6})(\s)/, (_, hashes, space) =>
      hashes.length < 6 ? `#${hashes}${space}` : `${hashes}${space}`
    )
  );
}
