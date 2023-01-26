import { visit } from 'unist-util-visit'
export function extractImageClass() {
    return (tree) => {
      visit(tree, "image", (node) => {
        let [url, ending] = node.url.split("#");

        if (!ending) {
          return;
        }

        // svg fragment identifiers should be left alone
        // until we're clearer what we want to match
        // https://css-tricks.com/svg-fragment-identifiers-work/
        if (url.endsWith(".svg")) {
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