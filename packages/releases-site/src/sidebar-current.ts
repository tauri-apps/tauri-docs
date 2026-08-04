// Structural subset of Starlight's SidebarEntry, so node:test can import this
// without Astro
export type SidebarItem =
  { type: 'link'; href: string; isCurrent: boolean } | { type: 'group'; entries: SidebarItem[] };

function collectLinks(items: SidebarItem[]): Extract<SidebarItem, { type: 'link' }>[] {
  return items.flatMap((item) => (item.type === 'group' ? collectLinks(item.entries) : [item]));
}

/**
 * Mark the deepest sidebar link the path sits under. Generated version pages are
 * not sidebar entries, so Starlight highlights nothing on them; this points at
 * the package instead. A page it already matched is left alone
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
