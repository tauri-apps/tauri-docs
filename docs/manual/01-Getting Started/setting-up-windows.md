---
pagination_next: manual/Getting Started/README
---

import Icon from '@theme/Icon'
import { Intro } from '@theme/SetupDocs'

# Setting Up Windows

:::note
For those using the Windows Subsystem for Linux (WSL), please refer to our [Linux specific instructions] instead.
:::

<Intro />

## 1. System Dependencies&nbsp;<Icon title="alert" color="danger"/>

You'll need to install Microsoft Visual Studio C++ build tools. [Download the installer here][Microsoft Visual Studio C++ build tools], and then run it. When it asks you what packages you would like to install, select C++ Build Tools and make sure the Windows SDK is selected.

:::note
This is a big download (over 1GB) and takes the most time, so grab a snack or coffee.
:::

:::caution
You may need to uninstall the 2017 version of the build tools if you have them. There are reports of Tauri not working with both the 2017 and 2019 versions installed.
:::

## 2. Node.js Runtime and Package Manager&nbsp;<Icon title="control-skip-forward" color="warning"/>

### Node.js (npm included)

We recommend using [nvm-windows] to manage your Node.js runtime. It allows you to switch versions and update Node.js easily.

Then run the following from an Administrative PowerShell and press Y when prompted:

```powershell
# BE SURE YOU ARE IN AN ADMINISTRATIVE PowerShell!
nvm install latest
nvm use {{latest}} # Replace with your latest downloaded version
```

This installs the most recent version of Node.js with npm.

### Optional Node.js Package Manager

You may want to use an alternative to npm:

- [pnpm]
- [Yarn]

## 3. Rustc and Cargo Package Manager&nbsp;<Icon title="control-skip-forward" color="warning"/>

Now you need to install [Rust]. The easiest way to do this is to use [rustup], the official installer.

- [64-bit download link][rustup x86_64]
- [32-bit download link][rustup i686]

Download and install the proper variant for your computer's architecture.


## 4. Install WebView2

:::tip
WebView2 is pre-installed in Windows 11.
:::

Finally, you need to install WebView2. The best way to do this is to download and run the Evergreen Bootstrapper from [this page](https://developer.microsoft.com/en-us/microsoft-edge/webview2/#download-section).

:::note
If you have problems of any kind after following these instructions, we recommend that you reboot your computer before developing a Tauri project to ensure that everything works as expected.
:::

## Continue

Now that you have set up the Windows-specific dependencies for Tauri learn how to [add Tauri to your project][Beginning Tutorial].

[nvm-windows]: https://github.com/coreybutler/nvm-windows#installation--upgrades
[Beginning Tutorial]: ./README.md
[Yarn]: https://yarnpkg.com/getting-started"
[pnpm]: https://pnpm.js.org/en/installation
[rustup x86_64]: https://win.rustup.rs/x86_64
[rustup i686]: https://win.rustup.rs/i686
[Rust]: https://www.rust-lang.org/
[rustup]: https://rustup.rs/
[Microsoft Visual Studio C++ build tools]: https://visualstudio.microsoft.com/visual-cpp-build-tools/
[Linux specific instructions]: /docs/manual/01-Getting Started/setting-up-linux