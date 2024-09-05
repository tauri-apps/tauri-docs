---
title: Announcing the Tauri v2 Beta Release
date: 2024-02-02
authors: [lucasfernog]
excerpt: Tauri v2 is ready to take the next step towards being stable! 2.0.0-beta.0 has been published.
banner:
  content: |
    You're reading the blog on the prerelease site for Tauri 2.0 -
    <a href="https://tauri.app">Go to the Tauri 1.0 site</a>
---

![Hero Image](./tauri_2_0_0_alpha_0/header.png)

Tauri v2 has been in progress for [over a year](/blog/tauri-mobile-alpha/) and it is now ready to take the next step towards being stable! We have just released [Tauri v2.0.0-beta.0](https://github.com/tauri-apps/tauri/releases/tag/tauri-v2.0.0-beta.0) which represents a major milestone from our [roadmap](/blog/roadmap-to-tauri-2-0/#beta).

The v2 release introduces mobile support to Tauri and also comes with several new features that have been requested by the community. Let's get a high level overview of the major changes:

## Mobile

Developing an application for desktop and mobile has never been easier. Tauri v2 is a huge statement on cross platform development now that we support Android and iOS. You can bring your existing desktop implementation and seamlessly port it to mobile, with access to native APIs and the great developer experience of the Tauri CLI.

## Permissions

The v1 allowlist is a good tool for securing your frontend from accessing unnecessary APIs, but its configuration is not fine grained and it lacks multiwindow support. The 2.0.0-beta.0 release includes a new approach for command access based on Access Control List. It is now possible to allow commands and define scopes for specific windows or even remote URLs.

## New Features

v2 includes many of the most requested features by the Tauri community:

### Revamped IPC

The v1 Inter-Process Communication (IPC) which is responsible for delivering messages between the Rust and JavaScript layers uses a very rudimentary webview interface which forces us to serialize all messages to strings and is super slow to deliver responses. The new v2 IPC uses custom protocols, which is more reminiscent in function and performance to how the webview handles regular HTTP based communication, see the [pull request](https://github.com/tauri-apps/tauri/pull/7170#issuecomment-1583279023) for more information.

Additionally, there is a new channel API so you can quickly send data from Rust to your frontend.

### Multiwebview

Tauri now supports adding multiple webviews to a single window. This is also a highly anticipated [feature request](https://github.com/tauri-apps/tauri/issues/2709).
Note this is still an unfinished feature that is hidden behind an `unstable` Cargo feature flag while we review the API design together with the community.

### Menu and tray icon JavaScript APIs

Previously you could only configure window menus and tray icons via Rust code. Now you can do so on the JavaScript side too, which is a lot easier! We also added APIs to manage the macOS application menu specifically.

### Context Menus

One of the most [requested features](https://github.com/tauri-apps/tauri/issues/4338) is native context menus. It is finally available with both Rust and JavaScript APIs powered by [muda](https://github.com/tauri-apps/muda).

### Window APIs

Several new window APIs have been implemented, making your app much more configurable.

### Mobile APIs

The v2 release comes with some mobile native API support by default. Currently there is support for notifications, dialogs, NFC, barcode reading, biometric authentication, clipboard and deep link. More APIs will be added soon after the stable release.

## Audit

We are currently being audited to ensure v2 is safe, similar to what we did for the v1 stable release.

## Stability

The API is not stable yet, but no major changes are expected. As soon as the audit is completed and the changes are done, we will promote to a Release Candidate and a v2 stable release soon after that. Stay tuned!
