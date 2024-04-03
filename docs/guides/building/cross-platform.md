---
sidebar_position: 5
---

import Command from '@theme/Command'

# Cross-Platform Compilation

Tauri relies heavily on native libraries and toolchains, so meaningful cross-compilation is **not possible** at the current moment. The next best option is to compile utilizing a CI/CD pipeline hosted on something like [GitHub Actions], Azure Pipelines, GitLab, or other options. The pipeline can run the compilation for each platform simultaneously making the compilation and release process much easier.

For an easy setup, we currently provide [Tauri Action], a GitHub Action that runs on all the supported platforms, compiles your software, generates the necessary artifacts, and uploads them to a new GitHub release.

## Tauri GitHub Action

Tauri Action leverages GitHub Actions to simultaneously build your application as a Tauri native binary for macOS, Linux, and Windows, and automates creating a GitHub release.

This GitHub Action may also be used as a testing pipeline for your Tauri app, guaranteeing compilation runs fine on all platforms for each pull request sent, even if you don't wish to create a new release.

:::info Code Signing

To setup code signing for both Windows and macOS on your workflow, follow the specific guide for each platform:

- [Windows Code Signing with GitHub Actions]
- [macOS Code Signing with GitHub Actions]

:::

### Getting Started

To set up Tauri Action you must first set up a GitHub repository. You can use this action on a repo that doesn't have Tauri configured since it automatically initializes Tauri before building and configuring it to use your artifacts.

Go to the Actions tab on your GitHub project and choose "New workflow", then choose "Set up a workflow yourself". Replace the file with the [Tauri Action production build workflow example]. Alternatively, you may set up the workflow based on the [example at the bottom of this page](#example-workflow)

### Configuration

You can configure Tauri with the `configPath`, `distPath` and `iconPath` options. See the actions Readme for details.

<!-- FIXME: tauriScript is currently broken.
  Custom Tauri CLI scripts can be run with the `tauriScript` option. So instead of running `yarn tauri build` or `npx tauri build`, `${tauriScript}` will be executed. This can be useful when you need custom build functionality such as when creating Tauri apps e.g. a `desktop:build` script.
-->

When your app isn't on the root of the repo, use the `projectPath` input.

You may modify the workflow name, change the triggers, and add more steps such as `npm run lint` or `npm run test`. The important part is that you keep the below line at the end of the workflow, since this runs the build script and releases the artifacts:

```yaml
- uses: tauri-apps/tauri-action@v0
```

### How to Trigger

The release workflow in the README examples linked above is triggered by pushes on the "release" branch. The action automatically creates a tag and title for the GitHub release using the application version specified in `tauri.config.json`.

You can also trigger the workflow on the push of a version tag such as "app-v0.7.0". For this you can change the start of the release workflow:

```yaml
name: publish
on:
  push:
    tags:
      - 'app-v*'
  workflow_dispatch:
```

### Example Workflow

Below is an example workflow that has been setup to run every time you push to the `release` branch.

This workflow will build and release your app for Linux x64, Windows x64, macOS x64 and macOS Arm64 (M1 and above).

The steps this workflow takes are:

1. Checkout the repository using `actions/checkout@v4`
2. Install Linux system dependencies required to build the app.
3. Set up Node LTS and a cache for global npm/yarn/pnpm package data using `actions/setup-node@v4`.
4. Set up Rust and a cache for the `target/` folder using `dtolnay/rust-toolchain@stable` and `swatinem/rust-cache@v2`.
5. Install the frontend dependencies and, if not configured as `beforeBuildCommand`, run the web app's build script.
6. Finally, it uses `tauri-apps/tauri-action@v0` to run `tauri build`, generate the artifacts, and create the GitHub release.

```yaml
name: 'publish'

on:
  push:
    branches:
      - release

jobs:
  publish-tauri:
    permissions:
      contents: write
    strategy:
      fail-fast: false
      matrix:
        settings:
          - platform: 'macos-latest' # for Arm based macs (M1 and above).
            args: '--target aarch64-apple-darwin'
          - platform: 'macos-latest' # for Intel based macs.
            args: '--target x86_64-apple-darwin'
          - platform: 'ubuntu-22.04' # for Tauri v1 you could replace this with ubuntu-20.04.
            args: ''
          - platform: 'windows-latest'
            args: ''

    runs-on: ${{ matrix.settings.platform }}
    steps:
      - uses: actions/checkout@v4

      - name: install dependencies (ubuntu only)
        if: matrix.settings.platform == 'ubuntu-22.04' # This must match the platform value defined above.
        run: |
          sudo apt-get update
          sudo apt-get install -y libwebkit2gtk-4.0-dev libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev patchelf
        # webkitgtk 4.0 is for Tauri v1 - webkitgtk 4.1 is for Tauri v2.
        # You can remove the one that doesn't apply to your app to speed up the workflow a bit.

      - name: setup node
        uses: actions/setup-node@v4
        with:
          node-version: lts/*
          cache: 'yarn' # Set this to npm, yarn or pnpm.

      - name: install Rust stable
        uses: dtolnay/rust-toolchain@stable
        with:
          # Those targets are only used on macos runners so it's in an `if` to slightly speed up windows and linux builds.
          targets: ${{ matrix.settings.platform == 'macos-latest' && 'aarch64-apple-darwin,x86_64-apple-darwin' || '' }}

      - name: Rust cache
        uses: swatinem/rust-cache@v2
        with:
          workspaces: './src-tauri -> target'

      - name: install frontend dependencies
        # If you don't have `beforeBuildCommand` configured you may want to build your frontend here too.
        run: yarn install # change this to npm or pnpm depending on which one you use.

      - uses: tauri-apps/tauri-action@v0
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tagName: app-v__VERSION__ # the action automatically replaces \_\_VERSION\_\_ with the app version.
          releaseName: 'App v__VERSION__'
          releaseBody: 'See the assets to download this version and install.'
          releaseDraft: true
          prerelease: false
          args: ${{ matrix.settings.args }}
```

### GitHub Environment Token

The GitHub Token is automatically issued by GitHub for each workflow run without further configuration, which means there is no risk of secret leakage. This token however only has read permissions by default and you may get a "Resource not accessible by integration" error when running the workflow. If this happens, you may need to add write permissions to this token. To do this go to your GitHub Project Settings, and then select Actions, scroll down to "Workflow permissions" and check "Read and write permissions".

You can see the GitHub Token being passed to the workflow below:

```yaml
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Usage Notes

Make sure to check the [documentation for GitHub Actions][github actions] to understand better how this workflow works. Take care to read the [Usage limits, billing, and administration][usage limits billing and administration] documentation for GitHub Actions. Some project templates may already implement this GitHub action workflow, such as [tauri-svelte-template]. You can use this action on a repo that doesn't have Tauri configured. Tauri automatically initializes before building and configuring it to use your web artifacts.

## Experimental: Build Windows apps on Linux and macOS

Tauri v1.3 added a new Windows installer type based on the [NSIS] installer framework. In contrast to WiX, NSIS itself can also work on Linux and macOS which makes it possible to build many Tauri apps on non-Windows hosts. Note that this is currently considered highly experimental and may not work on every system or for every project. Therefore it should only be used as a last resort if local VMs or CI solutions like GitHub Actions don't work for you. **Note that, at this time, signing cross-platform builds is currently unsupported.**

Since Tauri officially only supports the MSVC Windows target, the setup is a bit more involved.

First, make sure all your Tauri dependencies are at least version 1.3, check out the [dependency update guide] if you're not sure how.

#### Install NSIS

Some Linux distributions have NSIS available in their repositories, for example on Ubuntu you can install NSIS by running this command:

```sh title=Ubuntu
sudo apt install nsis
```

But on many other distributions you have to compile NSIS yourself or download Stubs and Plugins manually that weren't included in the distro's binary package. Fedora for example only provides the binary but not the Stubs and Plugins:

```sh title=Fedora
sudo dnf in mingw64-nsis
wget https://github.com/tauri-apps/binary-releases/releases/download/nsis-3/nsis-3.zip
unzip nsis-3.zip
sudo cp nsis-3.08/Stubs/* /usr/share/nsis/Stubs/
sudo cp -r nsis-3.08/Plugins/** /usr/share/nsis/Plugins/
```

On macOS you will need [Homebrew] to install NSIS:

```sh title=macOS
brew install nsis
```

#### Install LLVM and the LLD Linker

Since the default Microsoft linker only works on Windows we will also need to install a new linker. To compile the Windows Resource file which is used for setting the app icon among other things we will also need the `llvm-rc` binary which is part of the LLVM project.

```sh title="Ubuntu"
sudo apt install lld llvm
```

On Linux you also need to install the `clang` package if you added dependencies that compile C/C++ dependencies as part of their build scripts. Default Tauri apps should not require this.

```sh title=macOS
brew install llvm
```

On macOS you also have to add `/opt/homebrew/opt/llvm/bin` to your `$PATH` as suggested in the install output.

#### Install the Windows Rust target

Assuming you're building for 64-bit Windows systems:

```sh
rustup target add x86_64-pc-windows-msvc
```

#### Install `cargo-xwin`

Instead of setting the Windows SDKs up manually we will use [`cargo-xwin`] as Tauri's "runner":

```sh
cargo install cargo-xwin
```

By default `cargo-xwin` will download the Windows SDKs into a project-local folder. If you have multiple projects and want to share those files you can set the `XWIN_CACHE_DIR` environment variable with a path to the preferred location.

#### Building the App

Now it should be as simple as adding the runner and target to the `tauri build` command:

<Command name="build --runner cargo-xwin --target x86_64-pc-windows-msvc" />

The build output will then be in `target/x86_64-pc-windows-msvc/release/bundle/nsis/`.

[tauri action]: https://github.com/tauri-apps/tauri-action
[tauri action production build workflow example]: https://github.com/tauri-apps/tauri-action#creating-a-release-and-uploading-the-tauri-bundles
[github actions]: https://docs.github.com/en/actions
[usage limits billing and administration]: https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration
[tauri-svelte-template]: https://github.com/probablykasper/tauri-svelte-template
[windows code signing with github actions]: ../distribution/sign-windows.md#bonus-sign-your-application-with-github-actions
[macos code signing with github actions]: ../distribution/sign-macos.md#example
[nsis]: https://nsis.sourceforge.io/Main_Page
[dependency update guide]: ../development/updating-dependencies
[homebrew]: https://brew.sh/
[xwin]: https://github.com/Jake-Shadle/xwin
