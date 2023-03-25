---
sidebar_position: 2
pagination_next: guides/getting-started/setup/README
description: ''
---

import AndroidStudioSetup from './\_fragments/\_android-studio-setup.mdx'
import AndroidStandaloneSetup from './\_fragments/\_android-standalone-unix-setup.mdx'
import SetupManagingRust from './\_fragments/\_setup-managing-rust.mdx'
import SetupTroubleshooting from './\_fragments/\_setup-troubleshooting.mdx'

# Setting Up macOS

### 1. CLang and macOS Development Dependencies

You will need to install CLang and macOS development dependencies. To do this, run the following command in your terminal:

```shell
xcode-select --install
```

### 2. Rust

To install Rust on macOS, open a terminal and enter the following command:

```shell
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

:::note

We have audited this bash script, and it does what it says it is supposed to do. Nevertheless, before blindly curl-bashing a script, it is always wise to look at it first. Here is the file as a plain script: [rustup.sh]

:::

The command downloads a script and starts the installation of the `rustup` tool, which installs the latest stable version of Rust. You might be prompted for your password. If the installation was
successful, the following line will appear:

```text
Rust is installed now. Great!
```

Make sure to restart your terminal for the changes to take effect.

## Android

First, make sure to install the required rust android targets:

```sh
rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android
```

To set up your macOS machine for Android development you can then either install Android Studio or download the tools separately.

### Android Studio

<AndroidStudioSetup platform="macos" />

### Standalone Installation

#### 1. Installing JDK

Install the JDK using Homebrew:

```sh
brew install openjdk
```

- Link to system Java wrapper and set the `JAVA_HOME` env:

```sh
sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
export JAVA_HOME="/Library/Java/JavaVirtualMachines/openjdk.jdk/Contents/Home"
```

<AndroidStandaloneSetup platform="macos" />

## iOS

First, make sure Xcode is properly installed. <!-- TODO: explain what this means -->

Then install the required rust iOS targets:

```sh
rustup target add aarch64-apple-ios x86_64-apple-ios aarch64-apple-ios-sim
```

## Managing The Rust Installation

<SetupManagingRust />

## Troubleshooting

<SetupTroubleshooting />

[rustup.sh]: https://sh.rustup.rs
