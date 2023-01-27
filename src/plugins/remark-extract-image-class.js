import { visit } from 'unist-util-visit'

// when extending or modifying this plugin, consider
// svg fragment identifiers, which also use a # to demarcate the start
// of an identifier
// https://css-tricks.com/svg-fragment-identifiers-work/
export function extractImageClass() {
    return (tree) => {
      visit(tree, "image", (node) => {
        let [url, ending] = node.url.split("#");

        if (!ending) {
          return;
        }

        // see https://github.com/syntax-tree/mdast-util-to-hast/tree/main#fields-on-nodes
        node.url = url;
        node.data ??= {};
        node.data.hProperties ??= {};
        node.data.hProperties.className ??= [];
        node.data.hProperties.className.push(ending);
      })
    }
  }