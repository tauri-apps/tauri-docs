---
date: 2022-11-08
title: Announcing Tauri 1.2.0
summary: The Tauri team is happy to announce the 1.2.0 release.
imageSrc: /img/blog/tauri_1_2/header.png
authors: [lucasfernog]
---

Tauri 1.2.0 includes a security fix, so we encourage new and existing users to update to one of the fixed versions. Other changes were internally audited and no security issues were found.

Make sure to update both NPM and Cargo dependencies to the 1.2.0 release. You can update the NPM dependencies with:

**npm**

```shell
npm install @tauri-apps/cli@latest @tauri-apps/api@latest
```

**Yarn Classic**

```shell
yarn upgrade @tauri-apps/cli @tauri-apps/api --latest
```

**Yarn Berry**

```shell
yarn up @tauri-apps/cli @tauri-apps/api
```

**pnpm**

```shell
pnpm update @tauri-apps/cli @tauri-apps/api --latest
```

To update the Cargo dependencies, run the following in the `src-tauri` folder:

```shell
cargo update
```

## What's in 1.2.0

### Security patch

This release includes a patch for a security vulnerability reported by [MessyComposer](https://github.com/MessyComposer).
Due to incorrect escaping of special characters in paths selected via the file dialog and drag and drop functionality, it was possible to partially bypass the `fs` scope definition.
It was not possible to traverse into arbitrary paths, as the issue was limited to neighboring files and sub folders of already allowed paths.
A successful bypass requires the user to select a pre-existing malicious file or directory during the file picker dialog and an adversary controlled logic to access these files. This means the issue by itself can not be abused and requires further intentional or unintentional privileges.
The patch is also available in 1.0.7 and 1.1.2. See [the advisory](https://github.com/tauri-apps/tauri/security/advisories/GHSA-q9wv-22m9-vhqh) for more details.

### Rust version update

This release includes a minimum supported Rust version bump. Tauri now requires at least Rust 1.59 to compile. This was necessary due to several dependency updates that demanded this change.

### Custom protocol headers on Linux

The Linux webview binding has been updated and it now has support to custom protocol headers when running on webkit2gtk version 2.36 or above. This fixes CORS issues on production when manually fetching a build asset.

### Enhanced titlebar configuration on macOS

We finally merged one of the most awaited pull requests, introducing the titlebar style configuration. Your application can now define a transparent or overlay titlebar, hide the window title text and define the window to accept first mouse events so it can be focused immediately after receiving a click event to be dragged.

![](https://i.imgur.com/si99QwD.png)
_Window with overlay titlebar style_

![](https://i.imgur.com/uFZzVaM.png)
_Window with transparent titlebar style (uses the window background color)_

# Other changes

There are a lot of smaller changes and bug fixes in this release. You can see a summary of the release notes in the following sections. The complete changelog can be found on the [releases page](https://tauri.app/releases).

## New

- Allow configuring the user agent when creating a window ([#5317](https://github.com/tauri-apps/tauri/pull/5317))
- Reimplemented the option to create unfocused windows ([#5338](https://github.com/tauri-apps/tauri/pull/5338))
- Added the acceptFirstMouse window option (macOS) ([#5374](https://github.com/tauri-apps/tauri/pull/5374))
- Added the tabbingIdentifier window option (macOS) ([#5399](https://github.com/tauri-apps/tauri/pull/5399))
- Enhanced the app-specific directory APIs ([#5272](https://www.github.com/tauri-apps/tauri/pull/5272))
- Added show and hide methods on the app module (macOS) ([#3689](https://www.github.com/tauri-apps/tauri/pull/3689))
- Expose set_title for MacOS tray ([#5182](https://github.com/tauri-apps/tauri/pull/5182))
- hotreload support for frontend static files ([#5256](https://github.com/tauri-apps/tauri/pull/5256))
- Add a configuration option for the bundle publisher ([#5283](https://github.com/tauri-apps/tauri/pull/5283))

## Enhancements

- Validate the package name ([#5262](https://github.com/tauri-apps/tauri/pull/5262))
- Drop the WebContext on WebView drop ([#5240](https://github.com/tauri-apps/tauri/pull/5240))
- Set the correct mimetype when streaming files through asset: protocol ([#5210](https://github.com/tauri-apps/tauri/pull/5210))

## Fixes

- Fix HTML template tags in custom protocol ([#5247](https://github.com/tauri-apps/tauri/pull/5247))
- Fix scope check when reading resource files on macOS ([#5218](https://github.com/tauri-apps/tauri/pull/5218))
- Fix incorrect return type on fs/exists ([#5252](https://github.com/tauri-apps/tauri/pull/5252))
- Initialize Monitor instances with the correct classes for position and size fields instead of plain object ([#5313](https://github.com/tauri-apps/tauri/pull/5314))
- Fix dialog.save return type ([#5373](https://www.github.com/tauri-apps/tauri/pull/5373))
- Use correct code ja-JP for japanese instead of jp-JP ([#5346](https://github.com/tauri-apps/tauri/pull/5346))
- Clear environment variables on the WiX light.exe and candle.exe commands to avoid "Windows Installer Service could not be accessed" error. Variables prefixed with TAURI are propagated. ([#4819](https://github.com/tauri-apps/tauri/pull/4819))
- Fix regression in SystemTray::with_menu_on_left_click ([#5235](https://github.com/tauri-apps/tauri/pull/5235))
- Fix regression introduce in tauri@1.1 which prevented removing tray icon when the app exits on Windows ([#5245](https://www.github.com/tauri-apps/tauri/pull/5245))
- Fix access to the WebviewWindow.getByLabel function in a tauri://window-created event listener ([#5458](https://github.com/tauri-apps/tauri/pull/5458))
- Fix a deadlock when modifying the menu in the on_menu_event closure. ([#5257](https://www.github.com/tauri-apps/tauri/pull/5257))
- Fixes `__TAURI_PATTERN__` object freeze ([#5307](https://github.com/tauri-apps/tauri/pull/5407))
