import { visit } from 'unist-util-visit'
import type { RemarkPlugin } from '@astrojs/markdown-remark'

function removeIndexFromEnd(link: string) {
  return link.replace(/(\/|^)index$/, '')
}

function removeExplicitCurrentDir(link: string) {
  return link.replace(/^.\//, '')
}

// Content collection slug manipulation could affect this
export function transformLink(link: string, currentFileIsIndex: boolean) {
  link = link.trim()
  if (
    /^\/\//.test(link) ||
    /^http(s)?:\/\//.test(link) ||
    !/\.mdx?(#[^/]+)?$/.test(link)
  ) {
    return link
  }

  let [pathToMdFile, afterPoundSign] = link.split(/(?<=\.mdx?)#/)
  let fragment = afterPoundSign ? `#${afterPoundSign}` : ''
  let pathToPage = pathToMdFile.replace(/\.mdx?$/, '')

  let urlPath = removeIndexFromEnd(removeExplicitCurrentDir(pathToPage))
  if (!currentFileIsIndex) {
    // Because of the trailing slashes in urls, we always want to move one level up if we aren't on an index page
    urlPath = '..' + (urlPath ? `/${urlPath}` : '')
  }

  if (urlPath === '') {
    return fragment || '#'
  } else {
    // Add the trailing slash at the end, then the fragment if necessary
    return urlPath + '/' + fragment
  }
}

let rewriteMarkdownLinks: RemarkPlugin = function rewriteMarkdownLinks() {
  return (tree, file) => {
    visit(tree, ['link', 'definition'], (node, _index, _parent) => {
      // node is actually a link or a definition given the filter above, but there doesn't appear to be sufficient type narrowing
      (node as any).url = transformLink((node as any).url, file.basename === 'index.md' || file.basename === 'index.mdx')
    })
  }
}

export { rewriteMarkdownLinks }
