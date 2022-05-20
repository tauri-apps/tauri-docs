---
sidebar_position: 2
---

# Cross-Platform Compilation

Unfortunately because of how Tauri works cross-platform compilation is not a possibility. The next best option is to compile utilizing a CI/CD pipeline hosted on something like GitHub Actions, Azure Pipelines, GitLab, or other options. The pipeline can run the compilation for each platform simultaneously making the compilation and release process much easier. For an easy setup, Tauri currently provides Tauri Action, a GitHub Action that runs on all the supported platforms, compiles your software, generates the necessary artifacts, and releases them to a new GitHub release.

## How to use GH Action for Building: a glance at Tauri Action

### Introduction

Tauri Action leverages GitHub Actions to simultaneously build your web application as a Tauri native binary for macOS, Linux, and Windows, and automates putting it up on GitHub releases.

This GitHub Action may also be used as a testing pipeline for your Tauri app, guaranteeing compilation runs fine on all platforms for each pull request sent, even if you don't wish to create a new release.

### How to set up

To set up Tauri Action you must first set up a GitHub repository, you can use this action on a repo that doesn't have Tauri configured since we automatically initialize Tauri before building, and configure it to use your Web artifacts.

Go to [Tauri Action GitHub page][1]. Then head to GitHub Action on your GitHub project and choose "New workflow", then choose "Set up a workflow yourself". Replace the file with the test example. You can do the same steps for the [production build workflow example][2].

### Notes

You may modify the workflow name, change the triggers, add more steps such as npm run lint or npm run test. The important part is that you keep the:

```yaml
- uses: tauri-apps/tauri-action@v0
```

line at the final of the workflow, since this runs the build script and releases the artifacts.

Also note this line next to the end of the workflow:

```yaml
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

This GitHub Token is automatically issued by GitHub for each workflow run without further configuration, which means there is no risk of secret leakage. This token however only has read permissions by default and you may get a "Resource not accessible by integration" error when running the workflow, if this happens to fix it you may add read permissions to this token. To do this head over to your Project Settings, and then select Actions, scroll down until "Workflow permissions" and check "Read and write permissions".

### How to trigger

By default, the testing workflow is triggered on each pull request, but you could also trigger it for every push to the repository on all branches or select branches by changing the start like this:

```yaml
name: test-on-pr
on:
  push:
    branches:
      - '*'
  pull_request:
  workflow_dispatch:
```

The release workflow by default is triggered by pushes on the "release" branch. The action automatically creates a tag and title for the GitHub release using the application version specified on your tauri.config.json.

You could also trigger the workflow on the push of a version tag such as "app-v0.7.0". For this you may change the start of the release workflow:

```yaml
name: publish
on:
  push:
    tags:
      - 'app-v*'
  workflow_dispatch:
```

### Caveats

- Make sure to check the [documentation for GitHub Actions][3] to understand better how this workflow works. Take care to read the [Usage limits, billing, and administration][4] documentation for GitHub Actions.
- Some project templates may already implement this GitHub action workflow, such as [tauri-svelte-template][5]
- You can use this Action on a repo that doesn't have Tauri configured. We automatically initialize Tauri before building, and configure it to use your Web artifacts.
  - You can configure Tauri with the `configPath`, `distPath` and `iconPath` options.
- You can run custom Tauri CLI scripts with the `tauriScript` option. So instead of running `yarn tauri build` or `npx tauri build`, we'll execute `${tauriScript}`.
  - Useful when you need custom build functionality when creating Tauri apps e.g. a `desktop:build` script.
- When your app isn't on the root of the repo, use the `projectPath` input.

[1]: https://github.com/tauri-apps/tauri-action
[2]: https://github.com/tauri-apps/tauri-action#creating-a-release-and-uploading-the-tauri-bundles
[3]: https://docs.github.com/en/actions
[4]: https://docs.github.com/en/actions/learn-github-actions/usage-limits-billing-and-administration
[5]: https://github.com/probablykasper/tauri-svelte-template
