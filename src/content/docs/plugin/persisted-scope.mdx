---
title: Persisted Scope
description: Persist runtime scope changes on the filesystem.
plugin: persisted-scope
i18nReady: true
---

import PluginLinks from '@components/PluginLinks.astro';
import Compatibility from '@components/plugins/Compatibility.astro';

import { Tabs, TabItem, Steps } from '@astrojs/starlight/components';
import CommandTabs from '@components/CommandTabs.astro';

<PluginLinks plugin={frontmatter.plugin} showJsLinks={false} />

Save filesystem and asset scopes and restore them when the app is reopened.

## Supported Platforms

<Compatibility plugin={frontmatter.plugin} />

## Setup

Install the persisted-scope plugin to get started.

<Tabs>
  <TabItem label="Automatic" >

    Use your project's package manager to add the dependency:

    { ' ' }

    <CommandTabs
      npm="npm run tauri add persisted-scope"
      yarn="yarn run tauri add persisted-scope"
      pnpm="pnpm tauri add persisted-scope"
      deno="deno task tauri add persisted-scope"
      bun="bun tauri add persisted-scope"
      cargo="cargo tauri add persisted-scope"
    />

  </TabItem>
  <TabItem label = "Manual">
    <Steps>

    1. Run the following command in the `src-tauri` folder to add the plugin to the project's dependencies in `Cargo.toml`:

        ```sh frame=none
        cargo add tauri-plugin-persisted-scope
        ```

    2.  Modify `lib.rs` to initialize the plugin:

        ```rust title="src-tauri/src/lib.rs" ins={4}
        #[cfg_attr(mobile, tauri::mobile_entry_point)]
        pub fn run() {
            tauri::Builder::default()
                .plugin(tauri_plugin_persisted_scope::init())
                .run(tauri::generate_context!())
                .expect("error while running tauri application");
        }
        ```

    </Steps>

  </TabItem>
</Tabs>

:::caution
The `persisted-scope` plugin _must_ be registered and initialized after the `fs` plugin, as illustrated by the example below:

```rs
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init()) // fs MUST BE before persisted scope!
        .plugin(tauri_plugin_persisted_scope::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

**Not doing so will result in the persisted scope not working!** You should also see a warning message upon launching your app in dev mode, similar to this:

```
Please make sure to register the `fs` plugin before the `persisted-scope` plugin!
```

:::

## Usage

After setup the plugin will automatically save and restore filesystem and asset scopes.
