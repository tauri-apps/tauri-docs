import React from 'react'
import CodeBlock from './CodeBlock'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const types = [
  { label: 'Yarn', value: 'yarn tauri ' },
  { label: 'npm', value: 'npm run tauri ' },
  { label: 'cargo', value: 'cargo tauri ' },
  { label: 'Global', value: 'tauri ' },
]

function insertDashDashBeforeOption (value, name) {
  const idx = name.indexOf('--')
  if (idx === -1) {
    return value + name
  }
  return value + name.slice(0, idx) + '-- ' + name.slice(idx)
}

export default ({ name }) => {
  return (
    <Tabs groupId="installMode" defaultValue="Yarn" values={types}>
      {types.map((type) => (
        <TabItem value={type.value}>
          <CodeBlock className="language-sh">
            {type.label !== 'npm' ? type.value + name : insertDashDashBeforeOption(type.value, name)}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  )
}
