import assert from 'node:assert/strict';
import { test } from 'node:test';
import { markCurrentByPrefix, type SidebarItem } from './sidebar-current.ts';

function link(href: string, isCurrent = false): SidebarItem {
  return { type: 'link', href, isCurrent };
}

function sidebar(): SidebarItem[] {
  return [
    link('/release/'),
    link('/release/table/'),
    { type: 'group', entries: [link('/release/tauri/'), link('/release/tauri-cli/')] },
  ];
}

test('marks the longest prefix-matching link current on version pages', () => {
  const items = sidebar();
  markCurrentByPrefix(items, '/release/tauri/v2.11.0/');
  const group = items[2] as Extract<SidebarItem, { type: 'group' }>;
  assert.equal(group.entries[0].type === 'link' && group.entries[0].isCurrent, true);
  // '/release/' also prefix-matches but is shorter —_- must stay unmarked
  assert.equal(items[0].type === 'link' && items[0].isCurrent, false);
});

test('does not double-mark when Starlight already found the current page', () => {
  const items = sidebar();
  (items[1] as Extract<SidebarItem, { type: 'link' }>).isCurrent = true;
  markCurrentByPrefix(items, '/release/table/');
  const marked = items.filter((i) => i.type === 'link' && i.isCurrent);
  assert.equal(marked.length, 1);
});
