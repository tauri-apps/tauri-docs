---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocCardList from '@theme/DocCardList'
import { useCurrentSidebarCategory } from '@docusaurus/theme-common'

# Prerequisites

The first step is to install [Rust] and system dependencies. Keep in mind that this setup is only needed for _developing Tauri apps_. Your end-users are not required to do any of this.

Select the operating system on which you are installing Tauri:

<DocCardList items={
  [
    { id: "windows", label: "Windows" },
    { id: "macos",  label: "macOS" },
    { id: "linux", label: "Linux" }
  ].map(i => ({ docId: `guides/getting-started/${i.id}`, href: `/v1/guides/getting-started/${i.id}`, label: i.label, type: "link", customProps: { doc_card_image: `/img/guides/getting-started/setup/${i.id}.svg` } }))
}/>

## Managing The Rust Installation

You should keep your Rust version up to date whenever possible to always benefit from the latest improvements. To update Rust, open a terminal and run the following command:

```shell
rustup update
```

`rustup` can also be used to uninstall Rust from your machine fully:

```shell
rustup self uninstall
```

## Troubleshooting

To check whether you have Rust installed correctly, open a shell and enter this command:

```shell
rustc --version
```

You should see the version number, commit hash, and commit date for the latest stable version that has been released in the following format:

```text
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

If you don't see this information, your Rust installation might be broken. Please consult [Rust's Troubleshooting Section] on how to fix this. If your problems persist, you can get help from the official [Tauri Discord] and [GitHub Discussions].

[rust]: https://www.rust-lang.org
[install rust]: https://www.rust-lang.org/tools/install
[build tools for visual studio 2022]: https://visualstudio.microsoft.com/visual-cpp-build-tools/
[`cargo-edit`]: https://github.com/killercup/cargo-edit
[rust's troubleshooting section]: https://doc.rust-lang.org/book/ch01-01-installation.html#troubleshooting
[tauri discord]: https://discord.com/invite/tauri
[github discussions]: https://github.com/tauri-apps/tauri/discussions
[download webview2]: https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section
[rustup.sh]: https://sh.rustup.rs
[Nix Flakes]: https://nixos.wiki/wiki/Flakes
[direnv's Flakes integration]: https://nixos.wiki/wiki/Flakes#Direnv_integration
[Nix Shell]: https://nixos.wiki/wiki/Development_environment_with_nix-shell
[direnv's Shell integration]: https://nixos.wiki/wiki/Development_environment_with_nix-shell#direnv