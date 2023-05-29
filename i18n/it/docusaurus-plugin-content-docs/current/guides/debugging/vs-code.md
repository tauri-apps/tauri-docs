# Debugging in VS Code

This guide will walk you through setting up VS Code for debugging the [Core Process of your Tauri app][].

## Prerequisiti

Installa l'estensione [`vscode-lldb`][].

## Configura launch.json

Crea un file `.vscode/launch.json` e incolla il contenuto JSON sottostante in esso:

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

Questo utilizza `cargo` direttamente per costruire l'applicazione Rust e caricarlo sia in modalità di sviluppo che di produzione.

Nota che non utilizza il Tauri CLI, quindi le esclusive funzioni CLI non vengono eseguite. Gli script `beforeDevCommand` e `beforeBuildCommand` devono essere eseguiti in anticipo o configurati come task nel campo `preLaunchTask`. Di seguito trovate come esempio il file `.vscode/tasks.json` che ha due task, uno per un `beforeDevCommand` che genera un server di sviluppo e uno per `beforeBuildCommand`:

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

Ora puoi impostare breakpoint in `src-tauri/src/main.rs` o in qualsiasi altro file Rust e iniziare il processo di debug premendo `F5`.

[`vscode-lldb`]: https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb

[Core Process of your Tauri app]: ../../references/architecture/process-model.md#the-core-process