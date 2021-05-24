const fs = require('fs')

// Using fs instead of require because of require's cache
const coreSidebar = JSON.parse(fs.readFileSync('./sidebars/core.json', 'utf-8'))
const rustdocsSidebar = require('./sidebars/rustdoc.json')
const typedocSidebar = require('./sidebars/typedoc.json')

coreSidebar[3].items[2].items = rustdocsSidebar
coreSidebar[3].items[3].items = typedocSidebar

module.exports = {
  docs: coreSidebar,
  about: [
    {
      label: 'About Tauri',
      type: 'category',
      items: [
        'about/intro',
        'about/security',
        'about/governance',
        'about/book',
      ],
    },
  ],
}
