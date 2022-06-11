import CTANote from './\_cta-note.md'
import RustPart from './\_rust-part.md';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vite

This guide will walk you through creating your first Tauri app using the frontend build tool [Vite].

A Tauri app consists of two Parts: A Rust binary that creates the Windows and exposes native functionality to those Windows and a Frontend of your choice that produces the User Interface inside the Window. As you will notice, we will first set up the Rust project and general configuration and then create a very simple Frontend using one of the recipes supported by Vite.

<!-- TODO: Screenshot. Preview of what we're building -->

:::caution
Before we continue, make sure you have completed the [prerequisites] and installed the [Tauri CLI] to have a working development environment.
:::

<CTANote />

## Create the Rust project

<!-- TODO: Create a fragment for this, but I don't know how to do MDX with children and my airport wifi is too slow for docusaurus' website -->

The official package manager and general purpose build tool for Rust is called [Cargo] and then Tauri CLI uses

Open a terminal and run the following command to scaffold a minimal Rust project that is pre-configured to use Tauri:

```shell
tauri init
```

It will ask you a bunch of questions:

1. **_What is your app name?_** <br />
   This will be the name of your final bundle, and what the OS will call your app. You can use any name you want here.
2. **_What should the window title be?_** <br/>
   This will be the title of the default main window. You can use any title you want here.
3. **_Where are your web assets (HTML/CSS/JS) located, relative to the "<current dir\>/src-tauri/tauri.conf.json" file that will be created?_** <br />
   This is the path that Tauri will load your Frontend assets from when building **for production**. To be compatible with vite's default config we will answer this with `../dist`.
4. **_What is the url of your dev server?_** <br />
   This can be either a URL or a filepath that Tauri will load **during development**. Because vite's development server will listen on port 3000 by default we will answer this question with `http://localhost:3000`.

:::note
If you're familiar with Rust, you will notice that `tauri init` looks and works a lot like `cargo init`. You can in fact just use `cargo init` and add the necessary tauri dependencies if you prefer a fully manual setup.
:::

<RustPart />

## Create the Frontend

We will use vite's built-in scaffolding utility to set up our Frontend quickly.

<Tabs>
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

You can choose from various templates; we will select the `vanilla-ts` one for this guide.

Before we move on, let's quickly customize our `vite.config.ts` file, so you get the best compatibility with Tauri!

```typescript
import {defineConfig} from 'vite'

export default defineConfig({
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // tauri expects a fixed port, fail if that port is not available
  server: {
    port: 3000,
    strictPort: true,
  },
  // to make use of `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`, `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE` and `TAURI_DEBUG` env variables
  envPrefix: ['VITE_', 'TAURI_'],
  build: {
    // tauri supports es2021
    target: ['es2021', 'chrome97', 'safari13'],
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG && 'esbuild',
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
  },
})
```

And that's about it! Now you can run the following command in your terminal to start a development build of your app:

```shell
tauri dev
```

<!-- TODO: SCREENSHOT -->

## Invoke Commands

Tauri lets you enhance your Frontend with native capabilities. We call these _Commands_, essentially Rust functions that you can call from your Frontend JavaScript. This enables you to handle heavy processing or calls to the OS in much more performant Rust code.

Let's make a simple example. A Command is just like any regular Rust function, with the addition of the `#[tauri::command]` that allows your function to communicate with the JavaScript context.

```rust
#[tauri::command]
async fn greet(name: &str) -> Result<String, ()> {
   Ok(format!("Hello, {} !", name))
}
```

Lastly, we also need to tell Tauri about our newly created command so that it can route calls accordingly. This is done through the `.invoke_handler(tauri::generate_handler![greet])` call you can see below:

```rust
fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![greet])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
```

Now we're ready to call your Command from the JavaScript Frontend! We would normally be recommending the `@tauri-apps/api` package here, but since we're not using a bundler for this guide, please enable [`withGlobalTauri`] in your `tauri.conf.json` file.

```json
{
  "build": {
    "beforeBuildCommand": "",
    "beforeDevCommand": "",
    "devPath": "../ui",
    "distDir": "../ui",
    "withGlobalTauri": true
  },
```

This will inject a pre-bundled version of the API functions into your Frontend.

```javascript
// access the pre-bundled global API functions
const invoke = window.__TAURI__.invoke

// now we can call our Command!
invoke('greet', { name: 'World' })
```

If you want to know more, please read the [Development: Inter-Process Communication] guide.

## Recap

[Vite]: https://vitejs.dev
[prerequisites]: ../prerequisites.md
[tauri cli]: ../tauri-cli.md
[cargo]: https://doc.rust-lang.org/cargo/
