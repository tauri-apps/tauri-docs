import { visit } from 'unist-util-visit'
import type { RemarkPlugin } from '@astrojs/markdown-remark'

function removeIndexFromEnd(link: string) {
  return link.replace(/(\/|^)index$/, '')
}

function removeExplicitCurrentDir(link: string) {
  return link.replace(/^.\//, '')
}

// Content collection slug manipulation could affect this
function transformLink(link: string, currentFileIsIndex: boolean) {
  link = link.trim()
  if (
    /^\/\//.test(link) ||
    /^http(s)?:\/\//.test(link) ||
    !/\.md(#[^/]+)?$/.test(link)
  ) {
    return link
  }

  let [pathToMdFile, afterPoundSign] = link.split(/(?<=\.md)#/)
  let fragment = afterPoundSign ? `#${afterPoundSign}` : ''
  let pathToPage = pathToMdFile.replace(/\.md$/, '')

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
    visit(tree, 'link', (node, _index, _parent) => {
      node.url = transformLink(node.url, file.basename === 'index.md')
    })
  }
}

export { rewriteMarkdownLinks }
