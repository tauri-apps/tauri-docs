import React from 'react'
import CodeBlock from '@theme/CodeBlock'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const types = [
  { label: 'npm', value: 'npm run tauri ' },
  { label: 'Yarn', value: 'yarn tauri ' },
  { label: 'pnpm', value: 'pnpm tauri ' },
  { label: 'Cargo', value: 'cargo tauri ' },
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
    <Tabs className="">
      <TabItem value="Bash">
        <CodeBlock className={`language-shell`}>
          {`sh <(curl https://create.tauri.app/sh)`}
        </CodeBlock>
      </TabItem>
      <TabItem value="PowerShell">
        <CodeBlock className={`language-powershell`}>
          iwr https://create.tauri.app/ps | iex
        </CodeBlock>
      </TabItem>
      <TabItem value="Cargo">
        <CodeBlock className={`language-shell`}>
          {`cargo install create-tauri-app
cargo create-tauri-app`}
        </CodeBlock>
      </TabItem>
      <TabItem value="npm">
        <CodeBlock className={`language-shell`}>npm create tauri-app</CodeBlock>
      </TabItem>
      <TabItem value="Yarn">
        <CodeBlock className={`language-shell`}>
          yarn create tauri-app
        </CodeBlock>
      </TabItem>
      <TabItem value="pnpm">
        <CodeBlock className={`language-shell`}>
          pnpm create tauri-app
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
