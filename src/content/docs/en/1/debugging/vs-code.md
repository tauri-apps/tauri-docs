# Debugging in VS Code

This guide will walk you through setting up VS Code for debugging the [Core Process of your Tauri app].

## Prerequisites

Install the [`vscode-lldb`] extension.

[`vscode-lldb`]: https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb

## Configure launch.json

Create a `.vscode/launch.json` file and paste the below JSON contents into it:

```json title=".vscode/launch.json"
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "lldb",
      "request": "launch",
      "name": "Tauri Development Debug",
      "cargo": {
        "args": [
          "build",
          "--manifest-path=./src-tauri/Cargo.toml",
          "--no-default-features"
        ]
      },
      // task for the `beforeDevCommand` if used, must be configured in `.vscode/tasks.json`
      "preLaunchTask": "ui:dev"
    },
    {
      "type": "lldb",
      "request": "launch",
      "name": "Tauri Production Debug",
      "cargo": {
        "args": ["build", "--release", "--manifest-path=./src-tauri/Cargo.toml"]
      },
      // task for the `beforeBuildCommand` if used, must be configured in `.vscode/tasks.json`
      "preLaunchTask": "ui:build"
    }
  ]
}
```

This uses `cargo` directly to build the Rust application and load it in both development and production modes.

Note that it does not use the Tauri CLI, so exclusive CLI features are not executed. The `beforeDevCommand` and `beforeBuildCommand` scripts must be executed beforehand or configured as a task in the `preLaunchTask` field. Below is an example `.vscode/tasks.json` file that has two tasks, one for a `beforeDevCommand` that spawns a development server and one for `beforeBuildCommand`:

```json title=".vscode/tasks.json"
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "2.0.0",
  "tasks": [
    {
      "label": "ui:dev",
      "type": "shell",
      // `dev` keeps running in the background
      // ideally you should also configure a `problemMatcher`
      // see https://code.visualstudio.com/docs/editor/tasks#_can-a-background-task-be-used-as-a-prelaunchtask-in-launchjson
      "isBackground": true,
      // change this to your `beforeDevCommand`:
      "command": "yarn",
      "args": ["dev"]
    },
    {
      "label": "ui:build",
      "type": "shell",
      // change this to your `beforeBuildCommand`:
      "command": "yarn",
      "args": ["build"]
    }
  ]
}
```

Now you can set breakpoints in `src-tauri/src/main.rs` or any other Rust file and start debugging by pressing `F5`.

[core process of your tauri app]: ../../references/architecture/process-model.md#the-core-process