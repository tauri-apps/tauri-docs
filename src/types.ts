export type SidebarItem = {
  // If no title is specified then the first heading's text of a page should be used
  title?: string
  // The ID returned by `getCollection()` and `getEntry()`
  id?: string
  children?: [SidebarItem]
}
