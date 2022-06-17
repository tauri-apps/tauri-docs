import React from 'react'
import CodeBlock from '@theme/CodeBlock'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const types = [
  { label: 'npm', value: 'npm run tauri ' },
  { label: 'yarn', value: 'yarn tauri ' },
  { label: 'pnpm', value: 'pnpm tauri ' },
  { label: 'cargo', value: 'cargo tauri ' },
]

function insertDashDashBeforeOption(value, name) {
  const idx = name.indexOf('--')
  if (idx === -1) {
    return value + name
  }
  return value + name.slice(0, idx) + '-- ' + name.slice(idx)
}

export const CreateTauriApp = () => {
  return (
    <Tabs>
      <TabItem value="npm">
        <CodeBlock className={`language-shell`}>
          npm x create-tauri-app
        </CodeBlock>
      </TabItem>
      <TabItem value="yarn">
        <CodeBlock className={`language-shell`}>
          yarn create tauri-app
        </CodeBlock>
      </TabItem>
      <TabItem value="npmx">
        <CodeBlock className={`language-shell`}>npx create-tauri-app</CodeBlock>
      </TabItem>
      <TabItem value="pnpm">
        <CodeBlock className={`language-shell`}>
          pnpm create-tauri-app
        </CodeBlock>
      </TabItem>
    </Tabs>
  )
}

export default ({ name, shell = 'shell' }) => {
  return (
    <Tabs groupId="installMode" defaultValue="yarn tauri " values={types}>
      {types.map((type) => (
        <TabItem value={type.value}>
          <CodeBlock className={`language-${shell}`}>
            {type.label !== 'npm'
              ? type.value + name
              : insertDashDashBeforeOption(type.value, name)}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  )
}
