import { visit } from 'unist-util-visit'
import type { Node } from 'unist'
import type { RemarkPlugin } from '@astrojs/markdown-remark';

interface WithClassNames {
  /**
   * Types for properties used by https://github.com/syntax-tree/mdast-util-to-hast
   * are not very clearly defined so we define our own.
   *
   * Creator mentions that className is an array of strings
   * https://github.com/syntax-tree/hast/issues/1#issuecomment-143417460
   */
  hProperties?: { className?: string[] }
}

// Some considerations when modifying this plugin:
//
// 1. SVG fragment identifiers also use a # to demarcate the start of an identifier
//    https://css-tricks.com/svg-fragment-identifiers-work/
// 2. Validity of HTML if this plugin is removed - try running an image with an unmodified src
//    through the validator (https://validator.w3.org/nu/#textarea). For example, the HTML below will fail
//    because there are 2 #s in the img's src.
//
//    ```
//    <!DOCTYPE html>
//    <html lang="en">
//      <head>
//        <meta charset="UTF-8">
//        <meta name="viewport" content="width=device-width, initial-scale=1.0">
//        <meta http-equiv="X-UA-Compatible" content="ie=edge">
//        <title>HTML 5 Boilerplate</title>
//        <link rel="stylesheet" href="style.css">
//      </head>
//      <body>
//        <img src="/invalid#two#hashes" alt="bad image with invalid uri">
//      </body>
//    </html>
//    ```
//

/**
 * Plugin to extract classes from the end of an image url
 * 
 * `![alt](/path/to/image#someclass)` => `<img src="/path/to/image" class="someclass" alt="alt">`
 */
let extractImageClass: RemarkPlugin = function extractImageClass() {
  return (tree) => {
    visit(tree, 'image', (node: Node<WithClassNames> & { url: string }) => {
      let [url, ending] = node.url.split(/#(?=[^#]+$)/)

      if (!ending) {
        return
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

export { extractImageClass }
