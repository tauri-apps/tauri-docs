---
title: Embedding Additional Files
i18nReady: true
---

import { Tabs, TabItem } from '@astrojs/starlight/components';

You may need to include additional files in your application bundle that aren't part of your frontend (your `frontendDist`) directly or which are too big to be inlined into the binary. We call these files `resources`.

## Configuration

To bundle the files of your choice, add the `resources` property to the `bundle` object in your `tauri.conf.json` file.

To include a list of files:

<Tabs syncKey="explanation">
<TabItem label="Syntax">

```json title=tauri.conf.json
{
  "bundle": {
    "resources": [
      "./path/to/some-file.txt",
      "/absolute/path/to/textfile.txt",
      "../relative/path/to/jsonfile.json",
      "some-folder/",
      "resources/**/*.md"
    ]
  }
}
```

</TabItem>
<TabItem label="Explanation">

```json title=tauri.conf.json5
{
  "bundle": {
    "resources": [
      // Will be placed to `$RESOURCE/path/to/some-file.txt`
      "./path/to/some-file.txt",

      // The root in an abosolute path will be replaced by `_root_`,
      // so `textfile.txt` will be placed to `$RESOURCE/_root_/absolute/path/to/textfile.txt`
      "/absolute/path/to/textfile.txt",

      // `..` in a relative path will be replaced by `_up_`,
      // so `jsonfile.json` will be placed to `$RESOURCE/_up_/relative/path/to/textfile.txt`,
      "../relative/path/to/jsonfile.json",

      // If the path is a directory, the entire directory will be copied to the `$RESOURCE` directory,
      // preserving the original structures, for example:
      //   - `some-folder/file.txt`                   -> `$RESOURCE/some-folder/file.txt`
      //   - `some-folder/another-folder/config.json` -> `$RESOURCE/some-folder/another-folder/config.json`
      // This is the same as `some-folder/**/*`
      "some-folder/",

      // You can also include multiple files at once through glob patterns.
      // All the `.md` files inside `resources` will be placed to `$RESOURCE/resources/`,
      // preserving their original directory structures, for example:
      //   - `resources/index.md`      -> `$RESOURCE/resources/index.md`
      //   - `resources/docs/setup.md` -> `$RESOURCE/resources/docs/setup.md`
      "resources/**/*.md"
    ]
  }
}
```

</TabItem>
</Tabs>

The bundled files will be in `$RESOURCES/` with the original directory structure preserved,
for example: `./path/to/some-file.txt` -> `$RESOURCE/path/to/some-file.txt`

To fine control where the files will get copied to, use a map instead:

<Tabs syncKey="explanation">
<TabItem label="Syntax">

```json title=tauri.conf.json
{
  "bundle": {
    "resources": {
      "/absolute/path/to/textfile.txt": "resources/textfile.txt",
      "relative/path/to/jsonfile.json": "resources/jsonfile.json",
      "resources/": "",
      "docs/**/*md": "website-docs/"
    }
  }
}
```

</TabItem>
<TabItem label="Explanation">

```json title=tauri.conf.json5
{
  "bundle": {
    "resources": {
      // `textfile.txt` will be placed to `$RESOURCE/resources/textfile.txt`
      "/absolute/path/to/textfile.txt": "resources/textfile.txt",

      // `jsonfile.json` will be placed to `$RESOURCE/resources/jsonfile.json`
      "relative/path/to/jsonfile.json": "resources/jsonfile.json",

      // Copy the entire directory to `$RESOURCE`, preserving the original structures,
      // the target is "" which means it will be placed directly in the resource directory `$RESOURCE`, for example:
      //   - `resources/file.txt`                -> `$RESOURCE/file.txt`
      //   - `resources/some-folder/config.json` -> `$RESOURCE/some-folder/config.json`
      "resources/": "",

      // When using glob patterns, the behavior is different from the list one,
      // all the matching files will be placed to the target directory without preserving the original file structures
      // for example:
      //   - `docs/index.md`         -> `$RESOURCE/website-docs/index.md`
      //   - `docs/plugins/setup.md` -> `$RESOURCE/website-docs/setup.md`
      "docs/**/*md": "website-docs/"
    }
  }
}
```

</TabItem>
</Tabs>

To learn about where `$RESOURCE` resolves to on each platforms, see the documentation of [`resource_dir`]

<details>
<summary>Source path syntax</summary>

In the following explanations "target resource directory" is either the value after the colon in the object notation, or a reconstruction of the original file paths in the array notation.

- `"dir/file.txt"`: copies the `file.txt` file into the target resource directory.
- `"dir/"`: copies all files **and directories** _recursively_ into the target resource directory. Use this if you also want to preserve the file system structure of your files and directories.
- `"dir/*"`: copies all files in the `dir` directory _non-recursively_ (sub-directories will be ignored) into the target resource directory.
- `"dir/**`: throws an error because `**` only matches directories and therefore no files can be found.
- `"dir/**/*"`: copies all files in the `dir` directory _recursively_ (all files in `dir/` and all files in all sub-directories) into the target resource directory.
- `"dir/**/**`: throws an error because `**` only matches directories and therefore no files can be found.

</details>

## Resolve resource file paths

To resolve the path for a resource file, instead of manually calculating the path, use the following APIs

<Tabs syncKey="lang">
<TabItem label="Rust">

On the Rust side, you need an instance of the [`PathResolver`] which you can get from [`App`] and [`AppHandle`],
then call [`PathResolver::resolve`]:

```rust
tauri::Builder::default()
  .setup(|app| {
    let resource_path = app.path().resolve("lang/de.json", BaseDirectory::Resource)?;
    Ok(())
  })
```

To use it in a command:

```rust
#[tauri::command]
fn hello(handle: tauri::AppHandle) {
  let resource_path = handle.path().resolve("lang/de.json", BaseDirectory::Resource)?;
}
```

</TabItem>
<TabItem label="JavaScript">

To resolve the path in JavaScript, use [`resolveResource`]:

```javascript
import { resolveResource } from '@tauri-apps/api/path';
const resourcePath = await resolveResource('lang/de.json');
```

</TabItem>
</Tabs>

### Path syntax

The path in the API calls can be either a normal relative path like `folder/json_file.json` that resolves to `$RESOURCE/folder/json_file.json`,
or a paths like `../relative/folder/toml_file.toml` that resolves to `$RESOURCE/_up_/relative/folder/toml_file.toml`,
these APIs use the same rules as you write `tauri.conf.json > bundle > resources`, for example:

```json title=tauri.conf.json
{
  "bundle": {
    "resources": ["folder/json_file.json", "../relative/folder/toml_file.toml"]
  }
}
```

```rust
let json_path = app.path().resolve("folder/json_file.json", BaseDirectory::Resource)?;
let toml_path = app.path().resolve("../relative/folder/toml_file.toml", BaseDirectory::Resource)?;
```

### Android

Currently the resources are stored in the APK as assets so the return value of those APIs are not normal file system paths,
we use a special URI prefix `asset://localhost/` here that can be used with the [`fs` plugin],
with that, you can read the files through [`FsExt::fs`] like this:

```rust
let resource_path = app.path().resolve("lang/de.json", BaseDirectory::Resource).unwrap();
let json = app.fs().read_to_string(&resource_path);
```

If you want or must have the resource files to be on a real file system, copy the contents out manually through the [`fs` plugin]

## Reading resource files

In this example we want to bundle additional i18n json files like this:

```
.
├── src-tauri/
│   ├── tauri.conf.json
│   ├── lang/
│   │   ├── de.json
│   │   └── en.json
│   └── ...
└── ...
```

```json title=tauri.conf.json
{
  "bundle": {
    "resources": ["lang/*"]
  }
}
```

```json title=lang/de.json
{
  "hello": "Guten Tag!",
  "bye": "Auf Wiedersehen!"
}
```

### Rust

On the Rust side, you need an instance of the [`PathResolver`] which you can get from [`App`] and [`AppHandle`]:

```rust
tauri::Builder::default()
  .setup(|app| {
    // The path specified must follow the same syntax as defined in
    // `tauri.conf.json > bundle > resources`
    let resource_path = app.path().resolve("lang/de.json", BaseDirectory::Resource)?;

    let json = std::fs::read_to_string(&resource_path).unwrap();
    // Or when dealing with Android, use the file system plugin instead
    // let json = app.fs().read_to_string(&resource_path);

    let lang_de: serde_json::Value = serde_json::from_str(json).unwrap();

    // This will print 'Guten Tag!' to the terminal
    println!("{}", lang_de.get("hello").unwrap());

    Ok(())
  })
```

```rust
#[tauri::command]
fn hello(handle: tauri::AppHandle) -> String {
    let resource_path = handle.path().resolve("lang/de.json", BaseDirectory::Resource)?;

    let json = std::fs::read_to_string(&resource_path).unwrap();
    // Or when dealing with Android, use the file system plugin instead
    // let json = handle.fs().read_to_string(&resource_path);

    let lang_de: serde_json::Value = serde_json::from_str(json).unwrap();

    lang_de.get("hello").unwrap()
}
```

### JavaScript

For the JavaScript side, you can either use a command like the one above and call it through `await invoke('hello')` or access the files using the [`fs` plugin].

When using the [`fs` plugin], in addition to the [basic setup], you'll also need to configure the access control list to enable any plugin APIs you need as well as the permissions to access the `$RESOURCE` folder:

```json title=src-tauri/capabilities/default.json ins={8-9}
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "main-capability",
  "description": "Capability for the main window",
  "windows": ["main"],
  "permissions": [
    "core:default",
    "fs:allow-read-text-file",
    "fs:allow-resource-read-recursive"
  ]
}
```

:::note
Here we use `fs:allow-resource-read-recursive` to allow for full recursive read access to the complete `$RESOURCE` folder, files, and subdirectories.
For more information, read [Scope Permissions] for other options, or [Scopes] for more fine-grained control.
:::

```javascript
import { resolveResource } from '@tauri-apps/api/path';
import { readTextFile } from '@tauri-apps/plugin-fs';

const resourcePath = await resolveResource('lang/de.json');
const langDe = JSON.parse(await readTextFile(resourcePath));
console.log(langDe.hello); // This will print 'Guten Tag!' to the devtools console
```

## Permissions

Since we replace `../` to `_up_` in relative paths and the root to `_root_` in abosolute paths when using a list,
those files will be in sub folders inside the resource directory,
to allow those paths in Tauri's [permission system](/security/capabilities/),
use `$RESOURCE/**/*` to allow recursive access to those files

### Examples

With a file bundled like this:

```json title=tauri.conf.json
{
  "bundle": {
    "resources": ["../relative/path/to/jsonfile.json"]
  }
}
```

To use it with the [`fs` plugin]:

```json title=src-tauri/capabilities/default.json ins={8-15}
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "main-capability",
  "description": "Capability for the main window",
  "windows": ["main"],
  "permissions": [
    "core:default",
    "fs:allow-stat",
    "fs:allow-read-text-file",
    "fs:allow-resource-read-recursive",
    {
      "identifier": "fs:scope",
      "allow": ["$RESOURCE/**/*"],
      "deny": ["$RESOURCE/secret.txt"]
    }
  ]
}
```

To use it with the [`opener` plugin]:

```json title=src-tauri/capabilities/default.json ins={8-15}
{
  "$schema": "../gen/schemas/desktop-schema.json",
  "identifier": "main-capability",
  "description": "Capability for the main window",
  "windows": ["main"],
  "permissions": [
    "core:default",
    {
      "identifier": "opener:allow-open-path",
      "allow": [
        {
          "path": "$RESOURCE/**/*"
        }
      ]
    }
  ]
}
```

[`resource_dir`]: https://docs.rs/tauri/latest/tauri/path/struct.PathResolver.html#method.resource_dir
[`pathresolver`]: https://docs.rs/tauri/latest/tauri/path/struct.PathResolver.html
[`PathResolver::resolve`]: https://docs.rs/tauri/latest/tauri/path/struct.PathResolver.html#method.resolve
[`resolveResource`]: https://tauri.app/reference/javascript/api/namespacepath/#resolveresource
[`app`]: https://docs.rs/tauri/latest/tauri/struct.App.html
[`apphandle`]: https://docs.rs/tauri/latest/tauri/struct.AppHandle.html
[`fs` plugin]: /plugin/file-system/
[`FsExt::fs`]: https://docs.rs/tauri-plugin-fs/latest/tauri_plugin_fs/trait.FsExt.html#tymethod.fs
[basic setup]: /plugin/file-system/#setup
[Scope Permissions]: /plugin/file-system/#scopes
[scopes]: /plugin/file-system/#scopes
[`opener` plugin]: /plugin/opener/
