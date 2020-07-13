import React from 'react'
import CodeBlock from './CodeBlock'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const types = [
  { label: 'Yarn', value: 'yarn' },
  // { label: 'npm', value: 'npx' },
  { label: 'Global', value: '' },
]

export default ({ name }) => {
  return (
    <Tabs groupId="installMode" defaultValue="yarn" values={types}>
      {types.map((type) => (
        <TabItem value={type.value}>
          <CodeBlock className="language-sh">
            {type.value + (type.value ? ' ' : '') + 'tauri ' + name}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  )
}
