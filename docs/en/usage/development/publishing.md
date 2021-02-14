---
title: App Publishing
sidebar_label: 'App Publishing (4/4)'
---

import Alert from '@theme/Alert'
import Command from '@theme/Command'

### 1. Build Your Web App

Now that you are ready to package your project, you will need to run your framework's or bundler's build command (assuming you're using one, of course).

<Alert title="Note">
Every framework has its own publishing tooling. It is outside of the scope of this document to treat them all or keep them up to date.
</Alert>

### 2. Tauri Bundler

Make certain that you have installed that Tauri bundler:

```sh
cargo tauri-bundler -v
```

If you do not see a version number being reported, then you must install the bundler:

```sh
cargo install tauri-bundler
```

<Alert title="Note">
We chose to call this bundler "tauri-bundler" because in the near future we will be providing a <strong>Rust-only</strong> entry point to Tauri.
</Alert>


### 3. Bundle your application with Tauri

<Command name="build" />

Like the dev window, the first time you run this, it will take some time to collect the Rust crates and build everything - but on subsequent runs it will only need to rebuild the Tauri crates which is much quicker.

Because of the way that Cargo builds its targets, the final app is placed in the following folder:

`src-tauri/target/release/bundle`
