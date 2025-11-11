---
title: App Size
sidebar:
  order: 0
i18nReady: true
---

import { Tabs, TabItem } from '@astrojs/starlight/components';

While Tauri by default provides very small binaries it doesn't hurt to push the limits a bit, so here are some tips and tricks for reaching optimal results.

## Cargo Configuration

One of the simplest frontend agnostic size improvements you can do to your project is adding a Cargo profile to it.

Dependent on whether you use the stable or nightly Rust toolchain the options available to you differ a bit. It's recommended you stick to the stable toolchain unless you're an advanced user.

<Tabs>
<TabItem label="Stable">

```toml
# src-tauri/Cargo.toml
[profile.dev]
incremental = true # Compile your binary in smaller steps.

[profile.release]
codegen-units = 1 # Allows LLVM to perform better optimization.
lto = true # Enables link-time-optimizations.
opt-level = "s" # Prioritizes small binary size. Use `3` if you prefer speed.
panic = "abort" # Higher performance by disabling panic handlers.
strip = true # Ensures debug symbols are removed.
```

</TabItem>

<TabItem label="Nightly">

```toml
# src-tauri/Cargo.toml
[profile.dev]
incremental = true # Compile your binary in smaller steps.
rustflags = ["-Zthreads=8"] # Better compile performance.

[profile.release]
codegen-units = 1 # Allows LLVM to perform better optimization.
lto = true # Enables link-time-optimizations.
opt-level = "s" # Prioritizes small binary size. Use `3` if you prefer speed.
panic = "abort" # Higher performance by disabling panic handlers.
strip = true # Ensures debug symbols are removed.
trim-paths = "all" # Removes potentially privileged information from your binaries.
rustflags = ["-Cdebuginfo=0", "-Zthreads=8"] # Better compile performance.
```

</TabItem>
</Tabs>

### References

:::note
This is not a complete reference over all available options, merely the ones that we'd like to draw extra attention to.
:::

- [incremental:](https://doc.rust-lang.org/cargo/reference/profiles.html#incremental) Compile your binary in smaller steps.
- [codegen-units:](https://doc.rust-lang.org/cargo/reference/profiles.html#codegen-units) Speeds up compile times at the cost of compile time optimizations.
- [lto:](https://doc.rust-lang.org/cargo/reference/profiles.html#lto) Enables link time optimizations.
- [opt-level:](https://doc.rust-lang.org/cargo/reference/profiles.html#opt-level) Determines the focus of the compiler. Use `3` to optimize performance, `z` to optimize for size, and `s` for something in-between.
- [panic:](https://doc.rust-lang.org/cargo/reference/profiles.html#panic) Reduce size by removing panic unwinding.
- [strip:](https://doc.rust-lang.org/cargo/reference/profiles.html#strip) Strip either symbols or debuginfo from a binary.
- [rpath:](https://doc.rust-lang.org/cargo/reference/profiles.html#rpath) Assists in finding the dynamic libraries the binary requires by hard coding information into the binary.
- [trim-paths:](https://rust-lang.github.io/rfcs/3127-trim-paths.html) Removes potentially privileged information from binaries.
- [rustflags:](https://doc.rust-lang.org/nightly/cargo/reference/unstable.html#profile-rustflags-option) Sets Rust compiler flags on a profile by profile basis.
  - `-Cdebuginfo=0`: Whether debuginfo symbols should be included in the build.
  - `-Zthreads=8`: Increases the number of threads used during compilation.

## Remove Unused Commands

In Pull Request [`feat: add a new option to remove unused commands`](https://github.com/tauri-apps/tauri/pull/12890), we added in a new option in the tauri config file

```json title=tauri.conf.json
{
  "build": {
    "removeUnusedCommands": true
  }
}
```

to remove commands that're never allowed in your capability files (ACL), so you don't have to pay for what you don't use

:::tip
To maximize the benefit of this, only include commands that you use in the ACL instead of using `defaults`s
:::

:::note
This feature requires `tauri@2.4`, `tauri-build@2.1`, `tauri-plugin@2.1` and `tauri-cli@2.4`
:::

:::note
This won't be accounting for dynamically added ACLs at runtime so make sure to check it when using this
:::

<details>
<summary>How does it work under the hood?</summary>

`tauri-cli` will communicate with `tauri-build` and the build script of `tauri`, `tauri-plugin` through an environment variable
and let them generate a list of allowed commands from the ACL,
this will then be used by the `generate_handler` macro to remove unused commands based on that

An internal detail is this environment variable is currently `REMOVE_UNUSED_COMMANDS`,
and it's set to project's directory, usually the `src-tauri` directory, this is used for the build scripts to find the capability files,
and although it's not encouraged, you can still set this environment variable yourself if you can't or don't want to use `tauri-cli` to get this to work
(**do note that as this is an implementation detail, we don't guarantee the stability of it**)

</details>
