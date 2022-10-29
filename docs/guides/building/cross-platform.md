---
sidebar_position: 5
---

# Cross-Platform Compilation

Tauri relies heavily on native libraries and toolchains, so meaningful cross-compilation is not possible at the current moment. The next best option is to compile utilizing a CI/CD pipeline hosted on something like [GitHub Actions], Azure Pipelines, GitLab, or other options. The pipeline can run the compilation for each platform simultaneously making the compilation and release process much easier.

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

To set up Tauri Action you must first set up a GitHub repository. You can use this action on a repo that doesn't have Tauri configured since it automatically initialize Tauri before building and configure it to use your artifacts.

Go to the Actions tab on your GitHub project and choose "New workflow", then choose "Set up a workflow yourself". Replace the file with the [Tauri Action production build workflow example]. Alternatively, you may set up the workflow based on the [example lower on this page](#example-workflow)

### Configuration

You can configure Tauri with the `configPath`, `distPath` and `iconPath` options. See the actions Readme for details.

Custom Tauri CLI scripts can be run with the `tauriScript` option. So instead of running `yarn tauri build` or `npx tauri build`, `${tauriScript}` will be executed. This can be useful when you need custom build functionality such as when creating Tauri apps e.g. a `desktop:build` script.

When your app isn't on the root of the repo, use the `projectPath` input.
You may modify the workflow name, change the triggers, and add more steps such as `npm run lint` or `npm run test`. The important part is that you keep the below line at the end of the workflow, since this runs the build script and releases the artifacts:

```yaml
- uses: tauri-apps/tauri-action@v0
```

### How to Trigger

The release workflow by default is triggered by pushes on the "release" branch. The action automatically creates a tag and title for the GitHub release using the application version specified in `tauri.config.json`.

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

Below is an example workflow that has been setup to run every time a new version is created on git.

This workflow sets up the environment on Windows, Ubuntu, and macOS latest versions. Note under `jobs.release.strategy.matrix` the platform array which contains `macos-latest`, `ubuntu-latest`, and `windows-latest`.

The steps this workflow takes are:

1. Checkout the repository using `actions/checkout@v2`
2. Set up Node 16 using `actions/setup-node@v1`
3. Set up Rust using `actions-rs/toolchain@v1`
4. Installs all the dependencies and run the build script (for the web app)
5. Finally, it uses `tauri-apps/tauri-action@v0` to run `tauri build`, generate the artifacts, and create the GitHub release

```yaml
name: Release
on:
  push:
    tags:
      - 'v*'
  workflow_dispatch:

jobs:
  release:
    strategy:
      fail-fast: false
      matrix:
        platform: [macos-latest, ubuntu-latest, windows-latest]
    runs-on: ${{ matrix.platform }}
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Node.js setup
        uses: actions/setup-node@v1
        with:
          node-version: 16

      - name: Rust setup
        uses: actions-rs/toolchain@v1
        with:
          toolchain: stable

      - name: Install dependencies (ubuntu only)
        if: matrix.platform == 'ubuntu-latest'
        run: |
          sudo apt-get update
          sudo apt-get install -y libgtk-3-dev webkit2gtk-4.0 libappindicator3-dev librsvg2-dev patchelf
          
      - name: Rust cache
        uses: swatinem/rust-cache@v2
        with:
          workspaces: "./src-tauri -> target"

      - name: Yarn cache
        uses: actions/cache@v2
        with:
          path: |
            ~/.cache/yarn
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-
          
      - name: Install app dependencies and build web
        run: yarn && yarn build

      - name: Build the app
        uses: tauri-apps/tauri-action@v0

        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tagName: v__VERSION__ # tauri-action replaces \_\_VERSION\_\_ with the app version
          releaseName: 'v__VERSION__'
          releaseBody: 'See the assets to download this version and install.'
          releaseDraft: true
          prerelease: false
```

### GitHub Environment Token

The GitHub Token is automatically issued by GitHub for each workflow run without further configuration, which means there is no risk of secret leakage. This token however only has read permissions by default and you may get a "Resource not accessible by integration" error when running the workflow. If this happens, you may need to add write permissions to this token. To do this go to your GitHub Project Settings, and then select Actions, scroll down to "Workflow permissions" and check "Read and write permissions".

You can see the GitHub Token being passed to the workflow below:

```yaml
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Usage Notes

Make sure to check the [documentation for GitHub Actions][github actions] to understand better how this workflow works. Take care to read the [Usage limits, billing, and administration][usage limits billing and administration] documentation for GitHub Actions. Some project templates may already implement this GitHub action workflow, such as [tauri-svelte-template]. You can use this action on a repo that doesn't have Tauri configured. Tauri automatically initializes before building and configure it to use your web artifacts.

[tauri action]: https://github.com/tauri-apps/tauri-action
[tauri action production build workflow example]: https://github.com/tauri-apps/tauri-action#creating-a-release-and-uploading-the-tauri-bundles
[github actions]: https://docs.github.com/en/actions
[usage limits billing and administration]: https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration
[tauri-svelte-template]: https://github.com/probablykasper/tauri-svelte-template
[windows code signing with github actions]: ../distribution/sign-windows.md#bonus-sign-your-application-with-github-actions
[macos code signing with github actions]: ../distribution/sign-macos.md#example
