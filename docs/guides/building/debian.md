---
sidebar_position: 4
---

import TauriBuild from './\_tauri-build.md'

# Debian Package

Tauri allows your app to be packaged as a `.deb` (Debian package) file. The Tauri CLI bundles your application binary and additional resources in this format if you build on Linux. Please note that `.deb` packages can **only be created on Linux** as cross-compilation doesn't work yet.

:::note
GUI apps on macOS and Linux do not inherit the `$PATH` from your shell dotfiles (`.bashrc`, `.bash_profile`, `.zshrc`, etc). Check out Tauri's [fix-path-env-rs](https://github.com/tauri-apps/fix-path-env-rs) crate to fix this issue.
:::

<TauriBuild />

## Custom Files

To include custom files to the debian package, you can configure a mapping on `tauri.conf.json > tauri > bundle > deb > files` as follows:

```json
{
  "tauri": {
    "bundle": {
      "deb": {
        "files": {
          "/usr/lib/README.md": "../README.md", // copies the README.md file to /usr/lib/README.md
          "usr/lib/assets": "../public/" // copies the entire public directory to /usr/lib/assets
        }
      }
    }
  }
}
```

:::note
Each `files` object key is the path on the Debian package, and the value is a path to a file or directory relative to the `tauri.conf.json` file.
:::

[`usebootstrapper`]: ../../api/config.md#tauri.bundle.deb.useBootstrapper
