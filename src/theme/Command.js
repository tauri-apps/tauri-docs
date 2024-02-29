import React from 'react'
import CodeBlock from '@theme/CodeBlock'

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const types = [
  { value: 'npm', content: 'npm run tauri ' },
  { value: 'Yarn', content: 'yarn tauri ' },
  { value: 'pnpm', content: 'pnpm tauri ' },
  { value: 'bun', content: 'bunx tauri ' },
  { value: 'Cargo', content: 'cargo tauri ' },
]

function insertDashDashBeforeOption(value, name) {
  let idx = name.indexOf(' --')
  if (idx === -1) {
    idx = name.indexOf(' -')
  }
  if (idx === -1) {
    return value + name
  }
  return value + name.slice(0, idx + 1) + '--' + name.slice(idx)
}

export const CreateTauriApp = () => {
  return (
    <Tabs groupId="package-manager">
      <TabItem value="Bash">
        <CodeBlock className="language-shell" language="shell">
          {`sh <(curl https://create.tauri.app/sh)`}
        </CodeBlock>
      </TabItem>
      <TabItem value="PowerShell">
        <CodeBlock className="language-shell" language="powershell">
          irm https://create.tauri.app/ps | iex
        </CodeBlock>
      </TabItem>
      <TabItem value="Cargo">
        <CodeBlock className="language-shell" language="shell">
          {`cargo install create-tauri-app --locked
cargo create-tauri-app`}
        </CodeBlock>
      </TabItem>
      <TabItem value="npm">
        <CodeBlock className="language-shell" language="shell">
          npm create tauri-app@latest
        </CodeBlock>
      </TabItem>
      <TabItem value="Yarn">
        <CodeBlock className="language-shell" language="shell">
          yarn create tauri-app
        </CodeBlock>
      </TabItem>
      <TabItem value="pnpm">
        <CodeBlock className="language-shell" language="shell">
          pnpm create tauri-app
        </CodeBlock>
      </TabItem>
      <TabItem value="Bun">
        <CodeBlock className="language-shell" language="shell">
          bunx create-tauri-app
        </CodeBlock>
      </TabItem>
    </Tabs>
  )
}

export const InstallTauriCli = () => {
  return (
    <Tabs groupId="package-manager">
      <TabItem value="npm" default>
        <CodeBlock className="language-shell" language="shell">
          npm install --save-dev @tauri-apps/cli
        </CodeBlock>
        <div style={{ margin: 8 }}>
          For npm to detect Tauri correctly you need to add it to the "scripts"
          section in your package.json file:
        </div>
        <CodeBlock
          className="language-json"
          language="json"
          title="package.json"
        >
          {`"scripts": {
  "tauri": "tauri"
}`}
        </CodeBlock>
      </TabItem>
      <TabItem value="Yarn">
        <CodeBlock className="language-shell" language="shell">
          yarn add -D @tauri-apps/cli
        </CodeBlock>
      </TabItem>
      <TabItem value="pnpm">
        <CodeBlock className="language-shell" language="shell">
          pnpm add -D @tauri-apps/cli
        </CodeBlock>
      </TabItem>
      <TabItem value="Bun">
        <CodeBlock className="language-shell" language="shell">
          bun add -D @tauri-apps/cli
        </CodeBlock>
      </TabItem>
      <TabItem value="Cargo">
        <CodeBlock className="language-shell" language="shell">
          cargo install tauri-cli
        </CodeBlock>
      </TabItem>
    </Tabs>
  )
}

export const InstallTauriApi = () => {
  return (
    <Tabs groupId="package-manager">
      <TabItem value="npm" default>
        <CodeBlock className="language-shell" language="shell">
          npm install @tauri-apps/api
        </CodeBlock>
      </TabItem>
      <TabItem value="Yarn">
        <CodeBlock className="language-shell" language="shell">
          yarn add @tauri-apps/api
        </CodeBlock>
      </TabItem>
      <TabItem value="pnpm">
        <CodeBlock className="language-shell" language="shell">
          pnpm add @tauri-apps/api
        </CodeBlock>
      </TabItem>
      <TabItem value="Bun">
        <CodeBlock className="language-shell" language="shell">
          bun add @tauri-apps/api
        </CodeBlock>
      </TabItem>
    </Tabs>
  )
}

export default ({ name }) => {
  return (
    <Tabs groupId="package-manager" values={types}>
      {types.map((type) => (
        <TabItem value={type.value}>
          <CodeBlock className="language-shell" language="shell">
            {type.value !== 'npm'
              ? type.content + name
              : insertDashDashBeforeOption(type.content, name)}
          </CodeBlock>
        </TabItem>
      ))}
    </Tabs>
  )
}
