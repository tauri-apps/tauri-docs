---
description: ""
---

import AndroidStudioSetup from './_fragments/_android-studio-setup.mdx'
import AndroidStandaloneSetup from './_fragments/_android-standalone-unix-setup.mdx'

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

To setup your Linux machine for Android development you can either install Android Studio or download the tools separetely.

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
