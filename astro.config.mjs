import { defineConfig } from 'astro/config'
import prefetch from '@astrojs/prefetch'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { visit } from 'unist-util-visit'
import { h } from 'hastscript'
import rehypeRaw from 'rehype-raw'

const TAB_GROUP_BEGINNING = /^- begin-tab-group -$/
const TAB_GROUP_ENDING = /^- end-tab-group -$/
const TAB_REGEX = /^- tab-title=(.+?) -$/
function isTabGroupBeginning(node) {
  return node.type === 'comment' && TAB_GROUP_BEGINNING.test(node.value)
}
function isTabGroupEnding(node) {
  return node.type === 'comment' && TAB_GROUP_ENDING.test(node.value)
}
function isTab(node) {
  return node.type === 'comment' && TAB_REGEX.test(node.value)
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
          visit(tree, (maybeStartNode, maybeStartIndex, parent) => {
            if (isTabGroupBeginning(maybeStartNode)) {
              let tabs = []
              let startIndex = maybeStartIndex
              let endIndex = -1
              let suffix = ctr++

              let tabTitle = null
              let contents = []
              for (let i = startIndex + 1; i < parent.children.length; i++) {
                let node = parent.children[i]
                if (isTab(node)) {
                  if (tabTitle) {
                    tabs.push({
                      title: tabTitle,
                      contents,
                    })
                  }
                  tabTitle = getTabTitle(node)
                  contents = []
                } else if (isTabGroupEnding(node)) {
                  tabs.push({
                    title: tabTitle,
                    contents,
                  })
                  endIndex = i
                  break
                } else if (isTabGroupBeginning(node)) {
                  throw new Error('Unclosed tab group detected')
                } else {
                  contents.push(node)
                }
              }

              if (endIndex === -1) {
                throw new Error('Unclosed tab group detected')
              }

              parent.children.splice(
                startIndex,
                endIndex - startIndex + 1,
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
                        'data-docs-tablist': true,
                      },
                      tabs.map((t) => createHastTab(t, suffix))
                    ),
                    h(
                      'div',
                      {
                        class: 'spacer',
                      },
                      tabs.map((t) => createHastTabPanel(t, suffix))
                    ),
                  ]
                )
              )
            }
          })

          return undefined
        }
      },
    ],
  },
})
