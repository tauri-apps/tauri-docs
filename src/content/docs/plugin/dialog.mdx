---
title: Dialog
description: Native system dialogs for opening and saving files along with message dialogs.
i18nReady: true
tableOfContents:
  maxHeadingLevel: 4
plugin: dialog
---

import PluginLinks from '@components/PluginLinks.astro';
import Compatibility from '@components/plugins/Compatibility.astro';

import { Tabs, TabItem, Steps } from '@astrojs/starlight/components';
import CommandTabs from '@components/CommandTabs.astro';
import PluginPermissions from '@components/PluginPermissions.astro';

<PluginLinks plugin={frontmatter.plugin} />

Native system dialogs for opening and saving files along with message dialogs.

## Supported Platforms

<Compatibility plugin={frontmatter.plugin} />

## Setup

Install the dialog plugin to get started.

<Tabs>
    <TabItem label="Automatic">

        Use your project's package manager to add the dependency:

        <CommandTabs npm="npm run tauri add dialog"
                    yarn="yarn run tauri add dialog"
                    pnpm="pnpm tauri add dialog"
                    deno="deno task tauri add dialog"
                    bun="bun tauri add dialog"
                    cargo="cargo tauri add dialog" />

    </TabItem>
    <TabItem label="Manual">
        <Steps>

            1. Run the following command in the `src-tauri` folder to add the plugin to the project's dependencies in `Cargo.toml`:

                ```sh frame=none
                cargo add tauri-plugin-dialog
                ```

            2.  Modify `lib.rs` to initialize the plugin:

                ```rust title="src-tauri/src/lib.rs" ins={4}
                #[cfg_attr(mobile, tauri::mobile_entry_point)]
                pub fn run() {
                    tauri::Builder::default()
                        .plugin(tauri_plugin_dialog::init())
                        .run(tauri::generate_context!())
                        .expect("error while running tauri application");
                }
                ```

            3.  If you'd like create dialogs in JavaScript, install the npm package as well:

                <CommandTabs
                    npm="npm install @tauri-apps/plugin-dialog"
                    yarn="yarn add @tauri-apps/plugin-dialog"
                    pnpm="pnpm add @tauri-apps/plugin-dialog"
                    deno="deno add npm:@tauri-apps/plugin-dialog"
                    bun="bun add @tauri-apps/plugin-dialog"
                />

        </Steps>
    </TabItem>

</Tabs>

## Usage

The dialog plugin is available in both JavaScript and Rust. Here's how you can use it:

in JavaScript:

- [Create Yes/No Dialog](#create-yesno-dialog)
- [Create Ok/Cancel Dialog](#create-okcancel-dialog)
- [Create Message Dialog](#create-message-dialog)
- [Open a File Selector Dialog](#open-a-file-selector-dialog)
- [Save to File Dialog](#save-to-file-dialog)

in Rust:

- [Build an Ask Dialog](#build-an-ask-dialog)
- [Build a Message Dialog](#build-a-message-dialog)
- [Build a File Selector Dialog](#build-a-file-selector-dialog)

:::note
The file dialog APIs returns file system paths on Linux, Windows and macOS.

On iOS, a `file://<path>` URIs are returned.

On Android, [content URIs] are returned.

The [filesystem plugin] works with any path format out of the box.
:::

### JavaScript

See all [Dialog Options](/reference/javascript/dialog/) at the JavaScript API reference.

#### Create Yes/No Dialog

Shows a question dialog with `Yes` and `No` buttons.

```javascript
import { ask } from '@tauri-apps/plugin-dialog';
// when using `"withGlobalTauri": true`, you may use
// const { ask } = window.__TAURI__.dialog;

// Create a Yes/No dialog
const answer = await ask('This action cannot be reverted. Are you sure?', {
  title: 'Tauri',
  kind: 'warning',
});

console.log(answer);
// Prints boolean to the console
```

#### Create Ok/Cancel Dialog

Shows a question dialog with `Ok` and `Cancel` buttons.

```javascript
import { confirm } from '@tauri-apps/plugin-dialog';
// when using `"withGlobalTauri": true`, you may use
// const { confirm } = window.__TAURI__.dialog;

// Creates a confirmation Ok/Cancel dialog
const confirmation = await confirm(
  'This action cannot be reverted. Are you sure?',
  { title: 'Tauri', kind: 'warning' }
);

console.log(confirmation);
// Prints boolean to the console
```

#### Create Message Dialog

Shows a message dialog with an `Ok` button. Keep in mind that if the user closes the dialog it will return `false`.

```javascript
import { message } from '@tauri-apps/plugin-dialog';
// when using `"withGlobalTauri": true`, you may use
// const { message } = window.__TAURI__.dialog;

// Shows message
await message('File not found', { title: 'Tauri', kind: 'error' });
```

#### Open a File Selector Dialog

Open a file/directory selection dialog.

The `multiple` option controls whether the dialog allows multiple selection or not, while the `directory`, whether is a directory selection or not.

```javascript
import { open } from '@tauri-apps/plugin-dialog';
// when using `"withGlobalTauri": true`, you may use
// const { open } = window.__TAURI__.dialog;

// Open a dialog
const file = await open({
  multiple: false,
  directory: false,
});
console.log(file);
// Prints file path or URI
```

#### Save to File Dialog

Open a file/directory save dialog.

```javascript
import { save } from '@tauri-apps/plugin-dialog';
// when using `"withGlobalTauri": true`, you may use
// const { save } = window.__TAURI__.dialog;

// Prompt to save a 'My Filter' with extension .png or .jpeg
const path = await save({
  filters: [
    {
      name: 'My Filter',
      extensions: ['png', 'jpeg'],
    },
  ],
});
console.log(path);
// Prints the chosen path
```

---

### Rust

Refer to the [Rust API reference](https://docs.rs/tauri-plugin-dialog/) to see all available options.

#### Build an Ask Dialog

Shows a question dialog with `Absolutely` and `Totally` buttons.

```rust
use tauri_plugin_dialog::{DialogExt, MessageDialogButtons};

let answer = app.dialog()
        .message("Tauri is Awesome")
        .title("Tauri is Awesome")
        .buttons(MessageDialogButtons::OkCancelCustom("Absolutely", "Totally"))
        .blocking_show();
```

If you need a non blocking operation you can use `show()` instead:

```rust
use tauri_plugin_dialog::{DialogExt, MessageDialogButtons};

app.dialog()
    .message("Tauri is Awesome")
    .title("Tauri is Awesome")
   .buttons(MessageDialogButtons::OkCancelCustom("Absolutely", "Totally"))
    .show(|result| match result {
        true => // do something,
        false =>// do something,
    });
```

#### Build a Message Dialog

Shows a message dialog with an `Ok` button. Keep in mind that if the user closes the dialog it will return `false`.

```rust
use tauri_plugin_dialog::{DialogExt, MessageDialogKind};

let ans = app.dialog()
    .message("File not found")
    .kind(MessageDialogKind::Error)
    .title("Warning")
    .blocking_show();
```

If you need a non blocking operation you can use `show()` instead:

```rust
use tauri_plugin_dialog::{DialogExt, MessageDialogButtons, MessageDialogKind};

app.dialog()
    .message("Tauri is Awesome")
    .kind(MessageDialogKind::Info)
    .title("Information")
    .buttons(MessageDialogButtons::OkCustom("Absolutely"))
    .show(|result| match result {
        true => // do something,
        false => // do something,
    });
```

#### Build a File Selector Dialog

#### Pick Files

```rust
use tauri_plugin_dialog::DialogExt;

let file_path = app.dialog().file().blocking_pick_file();
// return a file_path `Option`, or `None` if the user closes the dialog
```

If you need a non blocking operation you can use `pick_file()` instead:

```rust
use tauri_plugin_dialog::DialogExt;

app.dialog().file().pick_file(|file_path| {
    // return a file_path `Option`, or `None` if the user closes the dialog
    })
```

#### Save Files

```rust
use tauri_plugin_dialog::DialogExt;

let file_path = app
    .dialog()
    .file()
    .add_filter("My Filter", &["png", "jpeg"])
    .blocking_save_file();
    // do something with the optional file path here
    // the file path is `None` if the user closed the dialog
```

or, alternatively:

```rust
use tauri_plugin_dialog::DialogExt;

app.dialog()
    .file()
    .add_filter("My Filter", &["png", "jpeg"])
    .pick_file(|file_path| {
        // return a file_path `Option`, or `None` if the user closes the dialog
    });
```

<PluginPermissions plugin={frontmatter.plugin} />

[content URIs]: https://developer.android.com/guide/topics/providers/content-provider-basics
[filesystem plugin]: /plugin/file-system/
