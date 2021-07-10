import React from 'react'
import CodeBlock from './CodeBlock'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const types = [
  { label: 'import', value: 'import', format: (items, mod) => `import { ${items} } from '@tauri-apps/api/${mod}'` },
  { label: 'require', value: 'require', format: (items, mod) => `const { ${items} } = require('@tauri-apps/api/${mod}')` },
  { label: '__TAURI__', value: '__TAURI__', format: (items, mod) => `const { ${items} } = window.__TAURI__.${mod}` },
]

export default ({ items, mod }) => {
  return (
    <Tabs groupId="importMode" defaultValue={types[0].value} values={types}>
      {types.map((type) => (
        <TabItem value={type.value}>
          { type.value === '__TAURI__' && <>
            If <a href="/en/docs/api/config#build.withGlobalTauri"><code>withGlobalTauri</code></a> is enabled:
          </>}
          <CodeBlock className="language-ts">
            {type.format(items, mod)}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  )
}
