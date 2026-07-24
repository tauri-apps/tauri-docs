// Structural subset of Starlight's SidebarEntry — enough for the walk below,
// and keeps this module importable from plain node:test without Astro.
export type SidebarItem =
  { type: 'link'; href: string; isCurrent: boolean } | { type: 'group'; entries: SidebarItem[] };

function collectLinks(items: SidebarItem[]): Extract<SidebarItem, { type: 'link' }>[] {
  return items.flatMap((item) => (item.type === 'group' ? collectLinks(item.entries) : [item]));
}

/**
 * will highlight the closest ancestor
 */
export function markCurrentByPrefix(items: SidebarItem[], pathname: string): void {
  const links = collectLinks(items);
  if (links.some((link) => link.isCurrent)) {
    return;
  }
  const best = links
    .filter((link) => pathname.startsWith(link.href))
    .sort((a, b) => b.href.length - a.href.length)[0];
  if (best) {
    best.isCurrent = true;
  }
}
