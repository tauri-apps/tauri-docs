---
sidebar_position: 4
---

import TauriBuild from './\_tauri-build.md'

# Linux 捆绑包

Tauri的Linux应用程序可以通过Debian捆绑包（`.deb`文件）或AppImage（`.AppImage`文件）进行分发。Tauri CLI默认会自动将你的应用程序代码捆绑到这些格式中。请注意，`.deb` 和 `.AppImage` 捆绑包**只能在Linux上创建**，因为跨编译尚未实现。

:::note

在 macOS 和 Linux 上的 GUI 应用程序不能继承你的 shell 配置文件的 `$PATH` (`.bashrc`, `.bash_profile`, `.zshrc`, 等等)。请查看 Tauri 的 [fix-path-env-rs][] crate 来解决这个问题。

:::

<TauriBuild />

## 限制

核心库如glibc经常与旧系统的兼容性出现问题。因此，你必须使用你打算支持的最旧的基础系统来构建你的Tauri应用程序。相对较旧的系统，如Ubuntu 18.04，比Ubuntu 22.04更适合，因为在Ubuntu 22.04上编译的二进制文件对glibc版本的要求更高，所以在旧系统上运行时，你会遇到运行时错误，如 `/usr/lib/libc.so.6: version 'GLIBC_2.33' not found` 。我们建议使用Docker容器或GitHub Actions来为Linux构建你的Tauri应用程序。

请参阅问题[tauri-apps/tauri#1355][]和[rust-lang/rust#57497][]，以及[AppImage 指南][]以获取更多信息。

## Debian

Tauri打包器生成的标准Debian包含有你需要将你的应用程序发布到基于Debian的Linux发行版的所有内容，定义你的应用程序的图标，生成一个Desktop文件，并指定依赖项 `libwebkit2gtk-4.0-37` 和 `libgtk-3-0` ，如果你的应用程序使用系统托盘，还有 `libappindicator3-1` 。

### 自定义文件

如果你需要更多的控制，Tauri为Debian包提供了一些配置。

如果你的应用程序依赖于额外的系统依赖项，你可以在 `tauri.conf.json > tauri > bundle > deb > depends` 中指定它们。

要在Debian包中包含自定义文件，你可以在 `tauri.conf.json > tauri > bundle > deb > files` 中提供文件或文件夹的列表。配置对象将Debian包中的路径映射到相对于 `tauri.conf.json` 文件的文件系统上的文件路径。以下是一个示例配置：


```json
{
  "tauri": {
    "bundle": {
      "deb": {
        "files": {
          "/usr/share/README.md": "../README.md", // 将 README.md 文件复制到 /usr/share/README.md
          "usr/share/assets": "../assets/" // 将整个 assets 目录复制到 /usr/share/assets
        }
      }
    }
  }
}
```

如果需要跨平台捆绑文件，请查看 Tauri 的 [resource][] 和 [sidecar][] 机制。

## AppImage

AppImage是一种分发格式，它不依赖于系统安装的包，而是捆绑了应用程序所需的所有依赖项和文件。因此，输出文件更大，但更容易分发，因为它在许多Linux发行版上都受支持，并且可以在无需安装的情况下执行。用户只需要使文件可执行（`chmod a+x MyProject.AppImage`），然后就可以运行它（`./MyProject.AppImage`）。

如果你不能制作针对发行版的包管理器的包，AppImages会方便地简化分发过程。然而，你应该谨慎使用它，因为文件大小会从2-6MB的范围增长到70+MB。

:::caution

如果你的应用程序需要播放音频/视频，你需要启用 `tauri.conf.json > tauri > bundle > appimage > bundleMediaFramework`。这将增加AppImage捆绑包的大小，以包含播放媒体所需的额外的 `gstreamer` 文件。目前，这个标志只在Ubuntu构建系统上受支持。

:::

## 为基于 ARM 的设备交叉编译 Tauri 应用程序

本指南介绍如何为基于 ARM 的设备（如 Raspberry Pi）交叉编译 Tauri 应用程序。由于 RAM 有限，直接在设备上编译可能不可行，因此我们将探讨两种方法：使用 Linux 或 Windows 上的 WSL 手动编译，以及使用 GitHub Action 自动交叉编译。

### 手动编译

手动编译适用于不需要经常编译应用程序，只需一次性设置的情况。请按照以下步骤操作：

#### 先决条件

:::warning

AppImages只能在ARM设备上构建。为了避免Tauri构建它，你可以在src-tauri文件夹中自定义tauri.conf.json。调整"targets"数组，只包含你的基于ARM的设备所需的平台。例如：

"targets": ["deb", "nsis", "msi", "app", "dmg", "updater"],

或者，你可以在调用`tauri build`时使用`--bundles`标志。

:::

- 对于Windows，使用[WSL 设置指南]安装WSL上的Debian。
- 在Linux上，构建机器需要的GLIBC版本必须等于或旧于目标设备。检查方法：`ldd --version`。
- 对于本指南，使用基于Debian/Ubuntu的Linux发行版，因为所示命令使用`apt`包管理器，并已在Debian 11上进行了测试。

#### 跨平台编译

现在，让我们为ARM进行Tauri应用程序的跨平台编译：

1. 安装你所需架构的Rust目标：

   - 对于ARMv7（32位）：`rustup target add armv7-unknown-linux-gnueabihf`
   - 对于ARMv8（ARM64，64位）：`rustup target add aarch64-unknown-linux-gnu`

2. 安装你选择的架构对应的链接器：

   - 对于ARMv7：`sudo apt install gcc-arm-linux-gnueabihf`
   - 对于ARMv8（ARM64）：`sudo apt install gcc-aarch64-linux-gnu`

3. 打开或创建文件`<project-root>/.cargo/config.toml`，并相应地添加以下配置：

   ```toml
   [target.armv7-unknown-linux-gnueabihf]
   linker = "arm-linux-gnueabihf-gcc"

   [target.aarch64-unknown-linux-gnu]
   linker = "aarch64-linux-gnu-gcc"
   ```

4. 在包管理器中启用相应的架构：

   - 对于ARMv7：`sudo dpkg --add-architecture armhf`
   - 对于ARMv8（ARM64）：`sudo dpkg --add-architecture arm64`

5. 调整软件源

在Debian上，这一步应该不是必要的，但在其他发行版上，你可能需要编辑 `/etc/apt/sources.list` 以包含ARM架构的变体。例如，在Ubuntu 22.04上，将这些行添加到文件的底部（记得用你的Ubuntu版本的代号替换掉 `jammy` ）：

```bash
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy main restricted
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-updates main restricted
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy universe
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-updates universe
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy multiverse
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-updates multiverse
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-backports main restricted universe multiverse
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-security main restricted
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-security universe
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-security multiverse
```

然后，为了防止主包出现问题，你需要在文件之前包含的所有其他行中添加正确的主架构。对于标准的64位系统，你需要添加`[arch=amd64]`，那么Ubuntu 22.04上的完整文件看起来类似于这样：

<details><summary>点击查看 Ubuntu 22.04 的完整示例文件</summary>

```bash
# 参见 http://help.ubuntu.com/community/UpgradeNotes 了解如何升级到
# 发行版的新版本。
deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ jammy main restricted
# deb-src http://archive.ubuntu.com/ubuntu/ jammy main restricted

## 发行版最终发布后产生的主要错误修复更新。
deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ jammy-updates main restricted
# deb-src http://archive.ubuntu.com/ubuntu/ jammy-updates main restricted

## 注意，此仓库中的软件完全不受 Ubuntu
## 团队的支持。另外，请注意，宇宙中的软件不会收到 Ubuntu 安全团队的任何
## 审查或更新。
deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ jammy universe
# deb-src http://archive.ubuntu.com/ubuntu/ jammy universe
deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ jammy-updates universe
# deb-src http://archive.ubuntu.com/ubuntu/ jammy-updates universe

## 注意，此仓库中的软件完全不受 Ubuntu
## 团队的支持，可能不在免费许可证下。请自行确认
## 使用软件的权利。另外，请注意，多元宇宙中的软件不会收到 Ubuntu 安全团队的任何审查或更新。
deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ jammy multiverse
# deb-src http://archive.ubuntu.com/ubuntu/ jammy multiverse
deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ jammy-updates multiverse

## 注意，此仓库中的软件可能没有经过
## 与主要发布中包含的软件一样广泛的测试，尽管它包括
## 一些应用程序的新版本，这些应用程序可能提供有用的功能。
## 另外，请注意，后端软件不会收到 Ubuntu 安全团队的任何审查或更新。
deb [arch=amd64] http://archive.ubuntu.com/ubuntu/ jammy-backports main restricted universe multiverse
# deb-src http://archive.ubuntu.com/ubuntu/ jammy-backports main restricted universe multiverse

deb [arch=amd64] http://security.ubuntu.com/ubuntu/ jammy-security main restricted
# deb-src http://security.ubuntu.com/ubuntu/ jammy-security main restricted
deb [arch=amd64] http://security.ubuntu.com/ubuntu/ jammy-security universe
# deb-src http://security.ubuntu.com/ubuntu/ jammy-security universe
deb [arch=amd64] http://security.ubuntu.com/ubuntu/ jammy-security multiverse
# deb-src http://security.ubuntu.com/ubuntu/ jammy-security multiverse

deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy main restricted
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-updates main restricted
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy universe
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-updates universe
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy multiverse
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-updates multiverse
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-backports main restricted universe multiverse
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-security main restricted
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-security universe
deb [arch=armhf,arm64] http://ports.ubuntu.com/ubuntu-ports jammy-security multiverse
```

</details>

在做出这些更改后，通过重新运行第4步的命令，验证armhf/arm64架构是否仍在包管理器中启用。

6. 更新包信息：`sudo apt-get update && sudo apt-get upgrade -y`。

7. 安装你选择的架构所需的webkitgtk库：

   - 对于ARMv7：`sudo apt install libwebkit2gtk-4.0-dev:armhf`
   - 对于ARMv8（ARM64）：`sudo apt install libwebkit2gtk-4.0-dev:arm64`

8. 安装OpenSSL或使用供应商版本：

这并不总是必需的，所以你可能想先进行，看看你是否看到像`Failed to find OpenSSL development headers`这样的错误。

- 或者在系统范围内安装开发头文件：
  - 对于ARMv7：`sudo apt install libssl-dev:armhf`
  - 对于ARMv8（ARM64）：`sudo apt install libssl-dev:arm64`
- 或者启用OpenSSL Rust crate的`vendor`特性，这将影响使用相同次版本的所有其他Rust依赖项。你可以通过在`Cargo.toml`文件的依赖项部分添加以下内容来实现：

```toml
openssl-sys = {version = "0.9", features = ["vendored"]}
```

9. 根据你选择的架构，设置 `PKG_CONFIG_SYSROOT_DIR` 到适当的目录：

   - 对于ARMv7：`export PKG_CONFIG_SYSROOT_DIR=/usr/arm-linux-gnueabihf/`
   - 对于ARMv8（ARM64）：`export PKG_CONFIG_SYSROOT_DIR=/usr/aarch64-linux-gnu/`

10. 为你所需的ARM版本构建应用程序：

- 对于ARMv7：`cargo tauri build --target armv7-unknown-linux-gnueabihf`
- 对于ARMv8（ARM64）：`cargo tauri build --target aarch64-unknown-linux-gnu`

根据你是否想要为ARMv7或ARMv8（ARM64）跨编译你的Tauri应用程序，选择适当的指令集。请注意，具体步骤可能会根据你的Linux发行版和设置有所不同。

### 实验性功能：使用GitHub Action进行自动跨平台编译

对于在GitHub上进行自动ARM可执行文件构建，我们将使用由[Paul Guyot]创建的[arm-runner-action]。

:::warning

AppImages只能在ARM设备上构建。为了避免Tauri构建它，你可以在src-tauri文件夹中自定义tauri.conf.json。调整"targets"数组，只包含你的基于ARM的设备所需的平台。例如：

"targets": ["deb", "nsis", "msi", "app", "dmg", "updater"],

或者，你可以在调用`tauri build`时使用`--bundles`标志。

:::

#### 设置

按照[arm-runner-action 仓库]README中的指示设置GitHub Action。如果你对GitHub Actions不熟悉，首先阅读[GitHub Actions 指南]。

在GitHub Action YAML中自定义最后一步，生成`.deb`文件而不是`.img`文件：

```yaml
name: Raspberry Pi compile
on:
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pguyot/arm-runner-action@v2.5.2
        with:
          base_image: https://dietpi.com/downloads/images/DietPi_RPi-ARMv8-Bullseye.7z
          cpu: cortex-a53
          bind_mount_repository: true
          image_additional_mb: 10240
          optimize_image: false
          commands: |
            # Rust complains (rightly) that $HOME doesn't match eid home
            export HOME=/root
            # Workaround to CI worker being stuck on Updating crates.io index
            export CARGO_REGISTRIES_CRATES_IO_PROTOCOL=sparse
            # Install setup prerequisites
            apt-get update -y --allow-releaseinfo-change
            apt-get upgrade -y
            apt-get autoremove -y
            apt-get install curl
            curl https://sh.rustup.rs -sSf | sh -s -- -y
            . "$HOME/.cargo/env"
            curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash
            # Install framework specific packages
            apt-get install -y nodejs
            npm install next@latest react@latest react-dom@latest eslint-config-next@latest
            # Install build tools and tauri-cli requirements
            apt-get install -y libwebkit2gtk-4.0-dev build-essential wget libssl-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev
            cargo install tauri-cli
            # Install frontend dependencies
            npm install
            # Build the application
            cargo tauri build
      - name: Upload deb bundle
        uses: actions/upload-artifact@v3
        with:
          name: Debian Bundle
          path: ${{ github.workspace }}/target/release/bundle/deb/tauri_1.4_arm64.deb
```

调整 `path` 变量，使其与应用程序的版本和名称相匹配：
`${{ github.workspace }}/target/release/bundle/deb/[name]_[version]_arm64.deb`.

[resource]: resources.md
[sidecar]: sidecar.md
[Debian 软件包]: https://wiki.debian.org/Packaging
[tauri-apps/tauri#1355]: https://github.com/tauri-apps/tauri/issues/1355
[rust-lang/rust#57497]: https://github.com/rust-lang/rust/issues/57497
[AppImage 指南]: https://docs.appimage.org/reference/best-practices.html#binaries-compiled-on-old-enough-base-system
[fix-path-env-rs]: https://github.com/tauri-apps/fix-path-env-rs
[WSL 设置指南]: https://www.linuxfordevices.com/tutorials/linux/install-debian-on-windows-wsl
[系统要求]: https://tauri.app/v1/guides/getting-started/prerequisites#setting-up-linux
[Tauri using Cargo]: https://tauri.app/v1/guides/getting-started/setup/next-js/#create-the-rust-project
[arm-runner-action]: https://github.com/pguyot/arm-runner-action
[arm-runner-action 仓库]: https://github.com/pguyot/arm-runner-action
[Paul Guyot]: https://github.com/pguyot
[GitHub Actions 指南]: https://docs.github.com/en/actions
