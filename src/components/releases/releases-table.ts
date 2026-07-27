import { releaseDateFormat } from '../../../packages/releases-site/generator/dateFormat';
import type { TableData, TableMetadata } from '../../../packages/releases-site/generator/types';

interface ReleaseDataPayload {
  tableMetadata: TableMetadata;
  tableData: TableData[];
}

let releaseDataPromise: Promise<ReleaseDataPayload> | null = null;

function loadReleaseData(): Promise<ReleaseDataPayload> {
  if (!releaseDataPromise) {
    releaseDataPromise = fetch('/release/tableData.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load release data: ${response.statusText}`);
        }
        return response.json() as Promise<ReleaseDataPayload>;
      })
      .catch((error) => {
        releaseDataPromise = null;
        throw error;
      });
  }
  return releaseDataPromise;
}

const dateFormatter = new Intl.DateTimeFormat('en-US', releaseDateFormat);

function formatReleaseDate(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const time = Date.parse(value);
  return Number.isNaN(time) ? undefined : dateFormatter.format(time);
}

function getDateTime(value: string | undefined): number {
  if (!value) return Number.NEGATIVE_INFINITY;
  const time = Date.parse(value);
  return Number.isNaN(time) ? Number.NEGATIVE_INFINITY : time;
}

function sortReleasesByDateDesc(rows: TableData[]): TableData[] {
  return [...rows].sort((a, b) => getDateTime(b.date) - getDateTime(a.date));
}

function defaultSinceDate(): string {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date.toISOString().split('T')[0] ?? '';
}

class ReleasesTable extends HTMLElement {
  private data: TableData[] = [];
  private repoList: string[] = [];
  private packages: Record<string, string[]> = {};

  private selectedRepo = '';
  private selectedProjects = new Set<string>();
  private sinceDate = defaultSinceDate();
  private readonly defaultSince = defaultSinceDate();

  private refs!: {
    state: HTMLElement;
    toolbar: HTMLElement;
    count: HTMLElement;
    filterCount: HTMLElement;
    reset: HTMLButtonElement;
    resetEmpty: HTMLButtonElement;
    filters: HTMLElement;
    repo: HTMLSelectElement;
    projectsDropdown: HTMLDetailsElement;
    projectsSummary: HTMLElement;
    projects: HTMLElement;
    date: HTMLInputElement;
    empty: HTMLElement;
    tableWrap: HTMLElement;
    rows: HTMLElement;
    dialog: HTMLDialogElement;
    dialogClose: HTMLButtonElement;
    dialogTitle: HTMLElement;
    dialogContent: HTMLElement;
  };

  private changelogCache = new Map<string, string>();

  async connectedCallback() {
    const q = <T extends Element>(selector: string) => {
      const el = this.querySelector<T>(selector);
      if (!el) throw new Error(`releases-table: missing ${selector}`);
      return el;
    };

    this.refs = {
      state: q('[data-state]'),
      toolbar: q('[data-toolbar]'),
      count: q('[data-count]'),
      filterCount: q('[data-filter-count]'),
      reset: q('[data-reset]'),
      resetEmpty: q('[data-reset-empty]'),
      filters: q('[data-filters]'),
      repo: q('[data-repo]'),
      projectsDropdown: q('[data-projects-dropdown]'),
      projectsSummary: q('[data-projects-summary]'),
      projects: q('[data-projects]'),
      date: q('[data-date]'),
      empty: q('[data-empty]'),
      tableWrap: q('[data-table-wrap]'),
      rows: q('[data-rows]'),
      dialog: q('[data-dialog]'),
      dialogClose: q('[data-dialog-close]'),
      dialogTitle: q('[data-dialog-title]'),
      dialogContent: q('[data-dialog-content]'),
    };

    this.wireEvents();

    try {
      const payload = await loadReleaseData();
      this.repoList = payload.tableMetadata.repoList;
      this.packages = payload.tableMetadata.packages;
      this.data = sortReleasesByDateDesc(payload.tableData);
    } catch (error) {
      this.refs.state.textContent =
        error instanceof Error ? error.message : 'Failed to load release data.';
      this.refs.state.classList.add('table-state-error');
      return;
    }

    this.refs.state.hidden = true;
    this.refs.toolbar.hidden = false;
    this.refs.filters.hidden = false;

    for (const repo of this.repoList) {
      const option = document.createElement('option');
      option.value = repo;
      option.textContent = repo;
      this.refs.repo.append(option);
    }

    this.resetFilters();
  }

  private wireEvents() {
    this.refs.repo.addEventListener('change', () => {
      this.selectedRepo = this.refs.repo.value;
      this.selectedProjects = new Set(this.packages[this.selectedRepo] ?? []);
      this.renderProjects();
      this.render();
    });

    this.refs.projects.addEventListener('change', (event) => {
      const checkbox = event.target;
      if (!(checkbox instanceof HTMLInputElement)) return;
      if (checkbox.checked) {
        this.selectedProjects.add(checkbox.value);
      } else {
        this.selectedProjects.delete(checkbox.value);
      }
      this.render();
    });

    // Close the projects dropdown when clicking elsewhere
    document.addEventListener('click', (event) => {
      if (
        this.refs.projectsDropdown.open &&
        event.target instanceof Node &&
        !this.refs.projectsDropdown.contains(event.target)
      ) {
        this.refs.projectsDropdown.open = false;
      }
    });

    this.refs.date.addEventListener('change', () => {
      this.sinceDate = this.refs.date.value;
      this.render();
    });

    const reset = () => this.resetFilters();
    this.refs.reset.addEventListener('click', reset);
    this.refs.resetEmpty.addEventListener('click', reset);

    // One delegated listener instead of a closure per rendered row
    this.refs.rows.addEventListener('click', (event) => {
      const anchor =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>('a[data-changelog]')
          : null;
      if (!anchor) return;
      event.preventDefault();
      void this.openChangelog(anchor);
    });

    this.refs.dialogClose.addEventListener('click', () => this.refs.dialog.close());
    this.refs.dialog.addEventListener('click', (event) => {
      // Click on the backdrop closes the dialog
      if (event.target === this.refs.dialog) {
        this.refs.dialog.close();
      }
    });
  }

  private resetFilters() {
    this.selectedRepo = this.repoList[0] ?? '';
    this.selectedProjects = new Set(this.packages[this.selectedRepo] ?? []);
    this.sinceDate = this.defaultSince;
    this.refs.repo.value = this.selectedRepo;
    this.refs.date.value = this.sinceDate;
    this.renderProjects();
    this.render();
  }

  private activeFilterCount(): number {
    let count = 0;
    if (this.selectedRepo && this.selectedRepo !== (this.repoList[0] ?? '')) {
      count += 1;
    }
    const all = this.packages[this.selectedRepo] ?? [];
    const allSelected =
      this.selectedProjects.size === all.length &&
      all.every((name) => this.selectedProjects.has(name));
    if (!allSelected) {
      count += 1;
    }
    if (this.sinceDate !== this.defaultSince) {
      count += 1;
    }
    return count;
  }

  private renderProjects() {
    const all = this.packages[this.selectedRepo] ?? [];
    const fragment = document.createDocumentFragment();
    for (const name of all) {
      const label = document.createElement('label');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = name;
      checkbox.checked = this.selectedProjects.has(name);
      label.append(checkbox, document.createTextNode(name));
      fragment.append(label);
    }
    this.refs.projects.replaceChildren(fragment);
  }

  private render() {
    const sinceTime = this.sinceDate ? Date.parse(this.sinceDate) : undefined;
    const rows = this.data.filter((row) => {
      if (this.selectedRepo && row.repo !== this.selectedRepo) return false;
      if (!this.selectedProjects.has(row.name)) return false;
      if (sinceTime !== undefined) {
        const time = row.date ? Date.parse(row.date) : Number.NaN;
        if (Number.isNaN(time) || time < sinceTime) return false;
      }
      return true;
    });

    const fragment = document.createDocumentFragment();
    for (const row of rows) {
      fragment.append(this.renderRow(row));
    }
    this.refs.rows.replaceChildren(fragment);

    this.refs.count.textContent = `${rows.length} of ${this.data.length} releases`;
    const filterCount = this.activeFilterCount();
    this.refs.filterCount.textContent = `${filterCount} active filter${filterCount === 1 ? '' : 's'}`;
    this.refs.reset.hidden = filterCount === 0;

    const all = this.packages[this.selectedRepo] ?? [];
    this.refs.projectsSummary.textContent = `${this.selectedProjects.size} of ${all.length}`;

    const hasResults = rows.length > 0;
    this.refs.empty.hidden = hasResults;
    this.refs.tableWrap.hidden = !hasResults;
  }

  private renderRow(row: TableData): HTMLTableRowElement {
    const tr = document.createElement('tr');

    const repoTd = document.createElement('td');
    repoTd.textContent = row.repo;

    const nameTd = document.createElement('td');
    nameTd.textContent = row.name;

    const versionTd = document.createElement('td');
    const version = document.createElement('span');
    version.className = 'release-version';
    const versionNumber = document.createElement('span');
    versionNumber.className = 'release-version-number';
    versionNumber.textContent = `v${row.version}`;
    version.append(versionNumber);
    const date = formatReleaseDate(row.date);
    if (date) {
      const versionDate = document.createElement('span');
      versionDate.className = 'release-version-date';
      versionDate.textContent = date;
      version.append(versionDate);
    }
    versionTd.append(version);

    const pageUrl = `/release/${row.name}/v${row.version}/`;

    const changelogTd = document.createElement('td');
    const seeMore = document.createElement('a');
    seeMore.href = pageUrl;
    seeMore.dataset.changelog = '';
    seeMore.dataset.dialogTitle = `${row.name} v${row.version}`;
    seeMore.textContent = 'see more';
    changelogTd.append(seeMore);

    const linkTd = document.createElement('td');
    const link = document.createElement('a');
    link.href = pageUrl;
    link.textContent = 'Link';
    linkTd.append(link);

    tr.append(repoTd, nameTd, versionTd, changelogTd, linkTd);
    return tr;
  }

  private async openChangelog(anchor: HTMLAnchorElement) {
    this.refs.dialogTitle.textContent = anchor.dataset.dialogTitle ?? 'Changelog';
    this.refs.dialogContent.textContent = 'Loading…';
    this.refs.dialog.showModal();

    try {
      this.refs.dialogContent.innerHTML = await this.fetchChangelog(anchor.href);
    } catch {
      this.refs.dialogContent.textContent = '';
      const fallback = document.createElement('p');
      const link = document.createElement('a');
      link.href = anchor.href;
      link.textContent = 'open the release page';
      fallback.append('Could not load the changelog here — ', link, '.');
      this.refs.dialogContent.append(fallback);
    }
  }

  /**
   * The changelog HTML is not shipped in tableData.json (it would be ~3 MB for
   * a rarely used feature); it is fetched on demand from the release's own
   * page — same-origin content this site generated, safe to inject.
   */
  private async fetchChangelog(pageUrl: string): Promise<string> {
    const cached = this.changelogCache.get(pageUrl);
    if (cached) return cached;

    const response = await fetch(pageUrl);
    if (!response.ok) {
      throw new Error(`Failed to load ${pageUrl}: ${response.statusText}`);
    }
    const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
    const content = doc.querySelector('.sl-markdown-content');
    if (!content) {
      throw new Error(`Unexpected page markup at ${pageUrl}`);
    }
    // Drop the page's own nav/date header rows; keep just the notes
    for (const el of content.querySelectorAll('.release-links, .release-date-row')) {
      el.remove();
    }

    const html = content.innerHTML;
    this.changelogCache.set(pageUrl, html);
    return html;
  }
}

customElements.define('releases-table', ReleasesTable);
