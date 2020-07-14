import React from 'react'
import CodeBlock from './CodeBlock'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const types = [
  { label: 'Yarn', value: 'yarn tauri ' },
  { label: 'npm', value: 'npm run tauri ' },
  { label: 'Global', value: 'tauri ' },
]

export default ({ name }) => {
  return (
    <Tabs groupId="installMode" defaultValue="yarn" values={types}>
      {types.map((type) => (
        <TabItem value={type.value}>
          <CodeBlock className="language-sh">
            {type.value + name}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  )
}
