---
description: Build a Tauri app using Vite as the frontend build tool
---

import TauriInit from './\_tauri-init.mdx';
import Commands from './\_commands.mdx';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vite

This guide will walk you through creating your first Tauri app using the frontend build tool [Vite].

<TauriInit
  webAssets="To be compatible with Vite's default config we will answer this with `../dist`."
  devServer="Because Vite's development server will listen on port 3000 by default we will answer this question with `http://localhost:3000`."
/>

## Create the Frontend

We will use Vite's built-in scaffolding utility to set up our Frontend quickly.

<Tabs groupId="package-manager">
  <TabItem value="npm" label="npm" default>

```shell
npm create vite@latest
```

  </TabItem>
  <TabItem value="yarn" label="yarn">

```shell
yarn create vite
```

  </TabItem>
  <TabItem value="fedora" label="Fedora">

```console
pnpm create vite
```

  </TabItem>
</Tabs>

You can choose from various templates. We will select the `vanilla-ts` one for this guide.

Before we move on, let's quickly customize our `vite.config.ts` file, so you get the best compatibility with Tauri!

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // Tauri expects a fixed port, fail if that port is not available
  server: {
    port: 3000,
    strictPort: true,
  },
  // to make use of `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
  // `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE` and `TAURI_DEBUG`
  // env variables
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    // Tauri supports es2021
    target: ['es2021', 'chrome97', 'safari13'],
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG && 'esbuild',
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
})
```

And that's it! Now you can run the following command in your terminal to start a development build of your app:

```shell
tauri dev
```

<!-- TODO: SCREENSHOT -->

## Invoke Commands

<Commands />

<!-- TODO: Show how you can add this and screenshots of what it looks like -->

## Recap

[vite]: https://vitejs.dev
[cargo]: https://doc.rust-lang.org/cargo/
