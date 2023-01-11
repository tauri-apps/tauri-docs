import { defineConfig } from 'astro/config'
import prefetch from '@astrojs/prefetch'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { findAfter } from 'unist-util-find-after'
import { visit } from 'unist-util-visit'
import findAllBetween from 'unist-util-find-all-between'
import replaceAllBetween from 'unist-util-replace-all-between'
import { h } from 'hastscript'
import rehypeRaw from 'rehype-raw'

const TAB_GROUP_BEGINNING = /^- begin-tab-group -$/
const TAB_GROUP_ENDING = /^- end-tab-group -$/
const TAB_REGEX = /^- tab-title=(.+?) -$/
function isTabGroupBeginning(node) {
  return node.type === "comment" && TAB_GROUP_BEGINNING.test(node.value)
}
function isTabGroupEnding(node) {
  return node.type === "comment" && TAB_GROUP_ENDING.test(node.value)
}
function isTab(node) {
  return node.type === "comment" && TAB_REGEX.test(node.value)
}
function getTabTitle(node) {
  return node.value.match(TAB_REGEX)?.[1]
}

function createHastTab(tabInfo, suffix) {
  return h(
    'button',
    {
      id: createTabId(tabInfo, suffix),
      role: 'tab',
      'aria-selected': 'false',
      'aria-controls': createTabPanelId(tabInfo, suffix),
      tabindex: -1,
    },
    [tabInfo.title]
  )
}
function createHastTabPanel(tabInfo, suffix) {
  return h(
    'div',
    {
      id: tabInfo.title + '-' + 'panel' + '-' + suffix,
      role: 'tabpanel',
      'aria-labelledby': tabInfo.title + '-' + 'tab' + '-' + suffix,
    },
    tabInfo.contents
  )
}
function createTabId(tabInfo, suffix) {
  return `${tabInfo.title}-tab-${suffix}`
}
function createTabPanelId(tabInfo, suffix) {
  return `${tabInfo.title}-panel-${suffix}`
}

let ctr = 0
// https://astro.build/config
export default defineConfig({
  site: 'https://tauri.app',
  experimental: {
    contentCollections: true,
  },
  integrations: [prefetch(), tailwind(), sitemap()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      // rehype-raw parses the tree again to ensure that comments are recognized as such - otherwise they're raw nodes
      // raw nodes may contain some text content that's not part of a comment but content that should be displayed
      // using rehype-raw solves this partially, but a comment directly preceded with text still isn't recognized
      // so word<!--- begin-tab-group ---> will not be recognized as a comment but instead as plain text
      rehypeRaw,
      function rehypeComponents() {
        return (tree) => {
          let tab_beginnings = []
          visit(tree, (node, _, parent) => {
            if (isTabGroupBeginning(node)) {
              tab_beginnings.push({
                node,
                parent,
              })
            }
          })

          for (let { node, parent } of tab_beginnings) {
            let tabs = []
            let start = node
            let end = null
            let suffix = ctr++

            let searchFrom = start
            do {
              let nextNode = findAfter(parent, searchFrom, (node) => {
                return isTab(node) || isTabGroupEnding(node)
              })
              let tabTitle = getTabTitle(searchFrom)
              if (tabTitle) {
                tabs.push({
                  title: tabTitle,
                  contents: findAllBetween(parent, searchFrom, nextNode),
                })
              }

              if (isTabGroupEnding(nextNode)) {
                end = nextNode
                break
              } else {
                searchFrom = nextNode
              }
            } while (searchFrom && searchFrom.value?.match(TAB_REGEX))

            replaceAllBetween(parent, start, end, () => [
              h(
                'div',
                {
                  class: 'tab-container',
                },
                [
                  h(
                    'div',
                    {
                      role: 'tablist',
                      'data-docs-tablist': true
                    },
                    tabs.map((t, i) => createHastTab(t, suffix))
                  ),
                  h(
                    'div',
                    {
                      class: 'spacer',
                    },
                    tabs.map((t) => createHastTabPanel(t, suffix))
                  ),
                ]
              ),
            ])
          }

          return undefined
        }
      },
      // rehypeStringify,
    ],
  },
})
