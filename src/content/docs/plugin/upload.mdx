---
title: Upload
description: File uploads through HTTP.
plugin: upload
i18nReady: true
---

import PluginLinks from '@components/PluginLinks.astro';
import Compatibility from '@components/plugins/Compatibility.astro';

import { Tabs, TabItem, Steps } from '@astrojs/starlight/components';
import CommandTabs from '@components/CommandTabs.astro';
import PluginPermissions from '@components/PluginPermissions.astro';

<PluginLinks plugin={frontmatter.plugin} />

Upload files from disk to a remote server over HTTP. Download files from a remote HTTP server to disk.

## Supported Platforms

<Compatibility plugin={frontmatter.plugin} />

## Setup

<Tabs>
	<TabItem label="Automatic">

    Use your project's package manager to add the dependency:

    <CommandTabs
    npm="npm run tauri add upload"
    yarn="yarn run tauri add upload"
    pnpm="pnpm tauri add upload"
    deno="deno task tauri add upload"
    bun="bun tauri add upload"
    cargo="cargo tauri add upload"
    />

    </TabItem>
    <TabItem label="Manual">

    	<Steps>

          1. Run the following command in the `src-tauri` folder to add the plugin to the project's dependencies in `Cargo.toml`:

              ```sh frame=none
              cargo add tauri-plugin-upload
              ```

          2. Modify `lib.rs` to initialize the plugin:

              ```rust title="src-tauri/src/lib.rs" ins={4}
              #[cfg_attr(mobile, tauri::mobile_entry_point)]
              pub fn run() {
                tauri::Builder::default()
                  .plugin(tauri_plugin_upload::init())
                    .run(tauri::generate_context!())
                    .expect("error while running tauri application");
              }
              ```

          3. Install the JavaScript Guest bindings using your preferred JavaScript package manager:

              <CommandTabs
                  npm="npm install @tauri-apps/plugin-upload"
                  yarn="yarn add @tauri-apps/plugin-upload"
                  pnpm="pnpm add @tauri-apps/plugin-upload"
                  deno="deno add npm:@tauri-apps/plugin-upload"
                  bun="bun add @tauri-apps/plugin-upload"
              />

    	</Steps>
    </TabItem>

</Tabs>

## Usage

Once you've completed the registration and setup process for the plugin, you can access all of its APIs through the JavaScript guest bindings.

### Upload

`upload` sends the file as the raw request body (not `multipart/form-data`) and returns the response body as text:

```javascript
import { upload } from '@tauri-apps/plugin-upload';
// when using `"withGlobalTauri": true`, you may use
// const { upload } = window.__TAURI__.upload;

const response = await upload(
  'https://example.com/file-upload',
  '/path/to/my/file.txt',
  ({ progressTotal, total }) =>
    console.log(`Uploaded ${progressTotal} of ${total} bytes`), // a callback that will be called with the upload progress
  { 'Content-Type': 'text/plain' } // optional headers to send with the request
);
```

It sends a `POST` request by default. To use `PUT` or `PATCH`, pass an `HttpMethod` as the fifth argument:

```javascript
import { upload, HttpMethod } from '@tauri-apps/plugin-upload';

await upload(
  'https://example.com/file-upload',
  '/path/to/my/file.txt',
  undefined, // no progress callback
  { 'Content-Type': 'text/plain' },
  HttpMethod.Put
);
```

### Download

`download` saves the response body to the given file path:

```javascript
import { download } from '@tauri-apps/plugin-upload';
// when using `"withGlobalTauri": true`, you may use
// const { download } = window.__TAURI__.upload;

await download(
  'https://example.com/file-download-link',
  '/path/to/save/my/file.txt',
  ({ progressTotal, total }) =>
    console.log(`Downloaded ${progressTotal} of ${total} bytes`), // a callback that will be called with the download progress
  { Authorization: 'Bearer <token>' } // optional headers to send with the request
);
```

It sends a `GET` request by default. If you pass a body as the fifth argument, it sends a `POST` request with that body instead:

```javascript
import { download } from '@tauri-apps/plugin-upload';

await download(
  'https://example.com/export',
  '/path/to/save/report.csv',
  undefined, // no progress callback
  { 'Content-Type': 'application/json' },
  JSON.stringify({ format: 'csv' })
);
```

### Progress

The progress callback runs for each chunk and receives:

- `progress`: bytes in the last chunk, not the running total
- `progressTotal`: bytes transferred so far
- `total`: total size in bytes. For downloads this comes from the `Content-Length` header and is `0` if the server doesn't send it.
- `transferSpeed`: approximate speed in bytes per second

### File paths

Relative paths are resolved against the app's working directory, which is different in `tauri dev` and in a bundled app. Use absolute paths instead, for example with the [path API](/reference/javascript/api/namespacepath/):

```javascript
import { appDataDir, join } from '@tauri-apps/api/path';

const filePath = await join(await appDataDir(), 'file.txt');
```

When downloading, the parent directory must already exist, and any existing file at that path is overwritten. If the download fails, the partial file is not removed.

### Errors

Both functions reject if the file can't be read or written, the request fails, or the server returns an error status.

## Permissions

By default all potentially dangerous plugin commands and scopes are blocked and cannot be accessed. You must modify the permissions in your `capabilities` configuration to enable these.

See the [Capabilities Overview](/security/capabilities/) for more information and the [step by step guide](/learn/security/using-plugin-permissions/) to use plugin permissions.

```json title="src-tauri/capabilities/default.json" ins={4}
{
  "permissions": [
    ...,
    "upload:default",
  ]
}
```

<PluginPermissions plugin={frontmatter.plugin} />
