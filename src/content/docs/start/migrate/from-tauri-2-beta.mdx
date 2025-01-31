---
title: Upgrade from Tauri 2.0 Beta
i18nReady: false
sidebar:
  order: 16
---

import { Tabs, TabItem } from '@astrojs/starlight/components';
import CommandTabs from '@components/CommandTabs.astro';

This guide walks you through upgrading your Tauri 2.0 beta application to Tauri 2.0 release candidate.

## Automated Migration

The Tauri v2 CLI includes a `migrate` command that automates most of the process and helps you finish the migration:

<CommandTabs
  npm="npm install @tauri-apps/cli@latest
    npm run tauri migrate"
  yarn="yarn upgrade @tauri-apps/cli@latest
    yarn tauri migrate"
  pnpm="pnpm update @tauri-apps/cli@latest
    pnpm tauri migrate"
  cargo='cargo install tauri-cli --version "^2.0.0" --locked
    cargo tauri migrate'
/>

Learn more about the `migrate` command in the [Command Line Interface reference](/reference/cli/#migrate)

## Breaking Changes

We have had several breaking changes going from beta to release candidate. These can be either auto-migrated (see above) or manually performed.

### Tauri Core Plugins

We changed how Tauri built-in plugins are addressed in the capabilities [PR #10390](https://github.com/tauri-apps/tauri/pull/10390).

To migrate from the latest beta version you need to prepend all core permission identifiers in your capabilities with `core:` or switch to the `core:default` permission and remove old core plugin identifiers.

```json
...
"permissions": [
    "path:default",
    "event:default",
    "window:default",
    "app:default",
    "image:default",
    "resources:default",
    "menu:default",
    "tray:default",
]
...
```

```json
...
"permissions": [
    "core:path:default",
    "core:event:default",
    "core:window:default",
    "core:app:default",
    "core:image:default",
    "core:resources:default",
    "core:menu:default",
    "core:tray:default",
]
...
```

We also added a new special `core:default` permission set which will contain all default permissions of all core plugins, so you can simplify the permissions boilerplate in your capabilities config.

```json
...
"permissions": [
    "core:default"
]
...
```

### Built-In Development Server

We introduced changes to the network exposure of the built-in development server [PR #10437](https://github.com/tauri-apps/tauri/pull/10437) and [PR #10456](https://github.com/tauri-apps/tauri/pull/10456).

The built-in mobile development server no longer exposes network wide and tunnels traffic from the local machine directly to the device.

Currently this improvement does not automatically apply when running on iOS devices (either directly or from Xcode).
In this case we default to using the public network address for the development server,
but there's a way around it which involves opening Xcode to automatically start a connection between your macOS machine and your connected iOS device,
then running `tauri ios dev --force-ip-prompt` to select the iOS device's TUN address (ends with **::2**).

Your development server configuration needs to adapt to this change if running on a physical iOS device is intended.
Previously we recommended checking if the `TAURI_ENV_PLATFORM` environment variable matches either `android` or `ios`,
but since we can now connect to localhost unless using an iOS device, you should instead check the `TAURI_DEV_HOST` environment variable.
Here's an example of a Vite configuration migration:

- 2.0.0-beta:

```js
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { internalIpV4Sync } from 'internal-ip';

const mobile = !!/android|ios/.exec(process.env.TAURI_ENV_PLATFORM);

export default defineConfig({
  plugins: [svelte()],
  clearScreen: false,
  server: {
    host: mobile ? '0.0.0.0' : false,
    port: 1420,
    strictPort: true,
    hmr: mobile
      ? {
          protocol: 'ws',
          host: internalIpV4Sync(),
          port: 1421,
        }
      : undefined,
  },
});
```

- 2.0.0:

```js
import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const host = process.env.TAURI_DEV_HOST;

export default defineConfig({
  plugins: [svelte()],
  clearScreen: false,
  server: {
    host: host || false,
    port: 1420,
    strictPort: true,
    hmr: host
      ? {
          protocol: 'ws',
          host: host,
          port: 1430,
        }
      : undefined,
  },
});
```

:::note
The `internal-ip` NPM package is no longer required, you can directly use the TAURI_DEV_HOST value instead.
:::
