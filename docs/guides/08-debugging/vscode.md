# Debugging in VSCode

This guide describes how to setup debugging in VSCode for the Core Process in Tauri applications.

## Setup

Install the [`lldb-vscode`] extension.

[`lldb-vscode`]: https://marketplace.visualstudio.com/items?itemName=lanza.lldb-vscode

## Configure launch.json

Create the `.vscode/launch.json` file and paste this JSON contents:

```json
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
      }
    },
    {
      "type": "lldb",
      "request": "launch",
      "name": "Tauri Production Debug",
      "cargo": {
        "args": [
          "build",
          "--release",
          "--manifest-path=./src-tauri/Cargo.toml"
        ]
      }
    }
  ]
}
```

This uses `cargo` directly to build the Rust application and load it in both development and production modes.

Note that it does not use the Tauri CLI, so exclusive CLI features such as `beforeDevCommand` and `beforeBuildCommand` must be executed beforehand.

Now you can set some breakpoints in `src-tauri/src/main.rs` or any other Rust file and start debugging by pressing F5.
