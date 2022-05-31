---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Install the Tauri CLI

The Tauri CLI is the heart of the developent process, it runs Cargo to compile the Rust Core, starts your Frontend development server, bundles all your assets, sidecars and resources when building for production and even takes care of code-signing!

The CLI is available from a number of sources, depending on your preference:

## Cargo

As the CLI is written in Rust, it is naturally available through _crates.io_ and installable with Cargo using the following command:

```shell
cargo install tauri-cli --version "1.0.0-rc.13"
```

After the installation has finished you can invoke it as a cargo subcommand:

```shell
cargo tauri --help
```

:::note
Even though installing the CLI through Cargo is the preferred option, it has to compile the whole binary from scratch when you install it. If you're in a CI environment or on a very slow machine you're better off choosing another installation method!
:::

## NPM

We also compile the CLI as a native Node.js addon and distribute it via NPM. This has a number of advantages compared to the *Cargo* installation method:
1. The CLI is pre-compiled, leading to much faster install times.
2. You can pin a specific version in your `package.json` file.
3. If you develop custom tooling around Tauri, you can import the CLI as a regular JavaScript module.

You can install the CLI using a JavaScript manager:

<Tabs>
<TabItem value="npm" label="npm" default>

```shell
npm install --save-dev @tauri-apps/cli
```

</TabItem>
<TabItem value="yarn" label="yarn">

```shell
yarn add -D @tauri-apps/cli
```

</TabItem>
<TabItem value="pnpm" label="pnpm">

```shell
pnpm add -D @tauri-apps/cli
```

</TabItem>
</Tabs>

After the installation has finished you can invoke the CLI using your package manager:

<Tabs>
<TabItem value="npm" label="npm" default>

When using npm, you first need to add `tauri` as a script to your `package.json`:

```json title=package.json
{
  // This content is just a sample
  "scripts": {
    "tauri": "tauri"
  }
}
```

then you can call the CLI like any regular script:

```shell
npm run tauri --help
```

</TabItem>
<TabItem value="yarn" label="yarn">

```shell
yarn tauri --help
```

</TabItem>
<TabItem value="pnpm" label="pnpm">

```shell
pnpm tauri --help
```

</TabItem>
</Tabs>