---
id: cli
title: CLI
---

import Command from '@theme/Command'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## `info`

<Command name="info" />

{info}

It shows a concise list of information about the environment, Rust, Node.js and their versions as well as some relevant configurations.

:::info
This command is pretty helpful when you need to have a quick overview of your application. When requesting some help, it can be useful that you share this report with us.
:::

## `init`

<Command name="init" />

{init}

## `plugin init`

<Command name="plugin init" />

{plugin init}

## `dev`

<Command name="dev" />

{dev}

This command will open the WebView in development mode. It makes use of the `build.devPath` property from your `src-tauri/tauri.conf.json` file.

If you have entered a command to the `build.beforeDevCommand` property, this one will be executed before the `dev` command.

**[See more about the configuration.](./config.md#build)**

:::caution Troubleshooting
If you're not using `build.beforeDevCommand`, make sure your `build.devPath` is correct and, if using a development server, that it's started before using this command.
:::

## `build`

<Command name="build" />

{build}

This command will bundle your application, either in production mode or debug mode if you used the `--debug` flag. It makes use of the `build.distDir` property from your `src-tauri/tauri.conf.json` file.

If you have entered a command to the `build.beforeBuildCommand` property, this one will be executed before the `build` command.

**[See more about the configuration.](./config.md#build)**

## `icon`

<Command name="icon" />

{icon}

For more information, check out the complete [Tauri Icon Guide](../guides/features/icons.md).

## `completions`

<Command name="completions" />

{completions}

The Tauri CLI can generate shell completions for Bash, Zsh, PowerShell and Fish.

Here are some instructions to configure Bash, Zsh and PowerShell. If you face an issue, please follow your shell's instructions instead. Note that it is recommended to check the generated completions script before executing it for security reasons.

### Bash

Get the Bash completions and move to a known folder:

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm run tauri completions -- --shell bash > tauri.sh
mv tauri.sh /usr/local/etc/bash_completion.d/tauri.bash
```

  </TabItem>
  <TabItem value="Yarn">

```shell
yarn tauri completions --shell bash > tauri.sh
mv tauri.sh /usr/local/etc/bash_completion.d/tauri.bash
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm tauri completions --shell bash > tauri.sh
mv tauri.sh /usr/local/etc/bash_completion.d/tauri.bash
```

  </TabItem>
  <TabItem value="Bun">

```shell
bunx tauri completions --shell bash > tauri.sh
mv tauri.sh /usr/local/etc/bash_completion.d/tauri.bash
```

  </TabItem>
  <TabItem value="Cargo">

```shell
cargo tauri completions --shell bash > tauri.sh
mv tauri.sh /usr/local/etc/bash_completion.d/tauri.bash
```

  </TabItem>
</Tabs>

Load the completions script by adding the following to `.bashrc`:

```shell
source /usr/local/etc/bash_completion.d/tauri.bash
```

### Zsh

Get the Zsh completions and move to a known folder:

<Tabs groupId="package-manager">
  <TabItem value="npm">

```shell
npm run tauri completions -- --shell zsh > completions.zsh
mv completions.zsh $HOME/.completions/_tauri
```

  </TabItem>
  <TabItem value="Yarn">

```shell
yarn tauri completions --shell zsh > completions.zsh
mv completions.zsh $HOME/.completions/_tauri
```

  </TabItem>
  <TabItem value="pnpm">

```shell
pnpm tauri completions --shell zsh > completions.zsh
mv completions.zsh $HOME/.completions/_tauri
```

  </TabItem>
  <TabItem value="Bun">

```shell
bunx tauri completions -- --shell zsh > completions.zsh
mv completions.zsh $HOME/.completions/_tauri
```

  </TabItem>
  <TabItem value="Cargo">

```shell
cargo tauri completions --shell zsh > completions.zsh
mv completions.zsh $HOME/.completions/_tauri
```

  </TabItem>
</Tabs>

Load the completions folder using fpath adding the following to `.zshrc`:

```shell
fpath=(~/.completions $fpath)
autoload -U compinit
```

### PowerShell

Get the PowerShell completions and add it to the `$profile` file to execute it on all sessions:

<Tabs groupId="package-manager">
  <TabItem value="npm">

```powershell
npm run tauri completions -- --shell powershell > ((Split-Path -Path $profile)+"\_tauri.ps1")
Add-Content -Path $profile -Value '& "$PSScriptRoot\_tauri.ps1"'
```

  </TabItem>
  <TabItem value="Yarn">

```powershell
yarn tauri completions --shell powershell > ((Split-Path -Path $profile)+"\_tauri.ps1")
Add-Content -Path $profile -Value '& "$PSScriptRoot\_tauri.ps1"'
```

  </TabItem>
  <TabItem value="pnpm">

```powershell
pnpm tauri completions --shell powershell > ((Split-Path -Path $profile)+"\_tauri.ps1")
Add-Content -Path $profile -Value '& "$PSScriptRoot\_tauri.ps1"'
```

  </TabItem>
  <TabItem value="Bun">

```powershell
bunx tauri completions -- --shell powershell > ((Split-Path -Path $profile)+"\_tauri.ps1")
Add-Content -Path $profile -Value '& "$PSScriptRoot\_tauri.ps1"'
```

  </TabItem>
  <TabItem value="Cargo">

```powershell
cargo tauri completions --shell powershell > ((Split-Path -Path $profile)+"\_tauri.ps1")
Add-Content -Path $profile -Value '& "$PSScriptRoot\_tauri.ps1"'
```

  </TabItem>
</Tabs>

## `version`

<Command name="--version" />

```
  Description
    Returns the current version of tauri
```

This command will show the current version of Tauri.

## CLI usage

See more about the usage through this [complete guide](../guides/development/development-cycle.md).
