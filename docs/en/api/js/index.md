---
sidebar_label: "Table of contents"
custom_edit_url: null
hide_title: true
---

# @tauri-apps/api

The `@tauri-apps/api` package is a JavaScript interface to the Tauri API.
It is written in TypeScript and allows you to call core APIs and your own commands.
Note that some APIs must be enabled under `tauri.conf.json > tauri > allowlist`, and each module explains the configuration.

If you are not using a module bundler, you can use this API as a `window.__TAURI__` object by enabling it on `tauri.conf.json > build > withGlobalTauri`.

## Table of contents

### Modules

- [app](modules/app.md)
- [cli](modules/cli.md)
- [dialog](modules/dialog.md)
- [event](modules/event.md)
- [fs](modules/fs.md)
- [globalShortcut](modules/globalshortcut.md)
- [http](modules/http.md)
- [index](modules/index.md)
- [notification](modules/notification.md)
- [path](modules/path.md)
- [process](modules/process.md)
- [shell](modules/shell.md)
- [tauri](modules/tauri.md)
- [updater](modules/updater.md)
- [window](modules/window.md)
