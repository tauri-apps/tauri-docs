# Cross-Compiling Tauri Applications for ARM-based Devices

This guide explains how to cross-compile your Tauri application for ARM-based devices, such as the Raspberry Pi. Compiling directly on the device may not be feasible due to limited RAM, so we'll explore two methods: manual compilation using Linux or WSL on Windows and automatic cross-compilation using a GitHub Action.

## Manual Compilation

Manual compilation is suitable when you don't need to compile your application frequently and prefer a one-time setup. Follow the steps below:

### Prerequisites

:::warning Important Note

Ubuntu 20.04 WSL has issues with webkit dependencies. It's recommended to use Debian instead.

:::

- For Windows, install Debian on WSL using the [wsl setup guide].
- On Linux, ensure your machine has the same GLIBC version as the target device. Check the version using: `ldd --version`.
- Use a Linux distribution based on Debian/Ubuntu for this guide, as the commands shown use the `apt` package manager and have been tested on Debian 11.

### Initial Setup

Before cross-compiling your app, ensure all required tools for building your application are installed:

1. Update the distro: `sudo apt-get update && sudo apt-get upgrade -y`
2. Add Tauri [system requirements].
3. Install Rust and ensure it's up-to-date: `rustup update`.
4. Install [Tauri using Cargo]: `cargo install tauri-cli`.
5. Install necessary tools for your frontend framework, like npm and Next.js.

:::info OpenSSL Workaround for WSL on Windows

If using WSL on Windows and encountering OpenSSL-related errors, add the following line to `Cargo.toml` in `<project-root>/src-tauri/Cargo.toml` within the `[dependencies]` section:
```toml
openssl-sys = {version = "0.9.66", features = ["vendored"]}
```
:::

### Cross-Compiling

Now, let's cross-compile the Tauri application for ARM:

1. Install Rust target for ARM: `rustup target add armv7-unknown-linux-gnueabihf`.
2. Install the linker for ARM version: `sudo apt install gcc-arm-linux-gnueabihf`.
3. Open or create the file `<project-root>/.cargo/config.toml` and add the following:
   ```toml
   [target.armv7-unknown-linux-gnueabihf]
   linker = "arm-linux-gnueabihf-gcc"
   ```
4. Enable armhf in the package manager: `sudo dpkg --add-architecture armhf`.

:::info Adjusting Package Sources

On Debian, this step isn't necessary, but on other distributions, you might need to edit `/etc/apt/sources.list` to include the ARM architecture variant. For example, add these lines:
```bash
deb [arch=armhf] http://ports.ubuntu.com/ubuntu-ports jammy main restricted
deb [arch=armhf] http://ports.ubuntu.com/ubuntu-ports jammy-updates main restricted
deb [arch=armhf] http://ports.ubuntu.com/ubuntu-ports jammy universe
deb [arch=armhf] http://ports.ubuntu.com/ubuntu-ports jammy-updates universe
deb [arch=armhf] http://ports.ubuntu.com/ubuntu-ports jammy multiverse
deb [arch=armhf] http://ports.ubuntu.com/ubuntu-ports jammy-updates multiverse
deb [arch=armhf] http://ports.ubuntu.com/ubuntu-ports jammy-backports main restricted universe multiverse
deb [arch=armhf] http://ports.ubuntu.com/ubuntu-ports jammy-security main restricted
deb [arch=armhf] http://ports.ubuntu.com/ubuntu-ports jammy-security universe
deb [arch=armhf] http://ports.ubuntu.com/ubuntu-ports jammy-security multiverse
```
After making changes, verify if the armhf architecture is still enabled in the package manager by re-running the command from Step 4.

:::

5. Update the package info: `sudo apt-get update && sudo apt-get upgrade -y`.
6. Install webkitgtk for ARM: `sudo apt install libwebkit2gtk-4.0-dev:armhf`.
7. Set the PKG_CONFIG_SYSROOT_DIR for the appropriate arch: `export PKG_CONFIG_SYSROOT_DIR=/usr/arm-linux-gnueabihf/`.
8. Build the app by specifying the desired ARM version: `cargo tauri build --target armv7-unknown-linux-gnueabihf`.

### Final Notes

- The static website can be found in the `out` folder.
- Rust may try to run your app after compiling it, which will fail on non-ARM platforms. Ignore this error, as the .deb package will be correctly built.

## Automatic Cross-Compilation using a GitHub Action

For automated ARM executable builds on GitHub, we'll use the [arm-runner-action] created by [Paul Guyot].

### Setup

Follow the instructions in the [arm-runner-action repository] README to set up the GitHub Action. If you're new to GitHub Actions, read the [GitHub Actions guide] first.

Customize the last step in the GitHub Action YAML to generate a `.deb` file instead of an `.img` file:

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

Adjust the `path` variable to match your application's version and name:
`${{ github.workspace }}/target/release/bundle/deb/[name]_[version]_arm64.deb`.

### Final Notes

During the cross-compilation process, Rust might attempt to run your app at the end, but it will fail since the build is targeted for ARM architecture, and you are likely on a different platform. While this error is expected, it's important to note that if Rust encounters an error during the execution, the entire GitHub Action will also fail, resulting in no executable being generated.

To avoid this issue and ensure a smooth cross-compilation process, you can take the following steps:

1. Configure `tauri.conf.json`: Inside the `src-tauri` folder, you can customize the `tauri.conf.json` file to specify the target platforms. Remove `"appimage"` from the `"targets"` array and keep only the desired targets for your ARM-based device. For example:
   ```json
   "targets": ["deb", "nsis", "msi", "app", "dmg", "updater"],
   ```

By adjusting the `tauri.conf.json` file, you instruct Tauri to exclude the "appimage" target, which is irrelevant for ARM devices. This way, Rust won't attempt to execute the non-ARM-compatible "appimage" target during the cross-compilation process, preventing any failures and ensuring the successful creation of the `.deb` package for your ARM-based device.

With these modifications, you can confidently use the GitHub Action to automatically build an ARM-compatible `.deb` package for your Tauri application. Happy coding!

[wsl setup guide]: https://www.linuxfordevices.com/tutorials/linux/install-debian-on-windows-wsl
[system requirements]: https://tauri.app/v1/guides/getting-started/prerequisites#setting-up-linux
[Tauri using Cargo]: https://tauri.app/v1/guides/getting-started/setup/next-js/#create-the-rust-project
[arm-runner-action]: https://github.com/pguyot/arm-runner-action
[arm-runner-action repository]: https://github.com/pguyot/arm-runner-action
[Paul Guyot]: https://github.com/pguyot
[GitHub Actions guide]: https://docs.github.com/en/actions
