---
sidebar_position: 1
---

import Command from '@theme/Command'

# 应用发布

### 1. 构建你的 Web App

Now that you are ready to package your project, you need to run your framework's or bundler's build command (assuming you're using one, of course).

:::note

Every framework has its publishing tooling. It is outside of the scope of this document to treat them all or keep them up to date.

:::

### 2. 使用 Tauri 打包你的应用

<Command name="build" />

This command embeds your web assets into a single binary with your Rust code. The binary itself will be located in `src-tauri/target/release/[app name]`, and installers will be located in `src-tauri/target/release/bundle/`.

Like the `tauri dev` command, the first time you run this, it takes some time to collect the Rust crates and build everything - but on subsequent runs, it only needs to rebuild your app's code, which is much quicker.
