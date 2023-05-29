# VS Code 디버깅

This guide will walk you through setting up VS Code for debugging the [Core Process of your Tauri app][].

## 사전 요구 사항

[`vscode-lldb`][] 확장을 설치합니다.

## launch.json 설정

`.vscode/launch.json` 파일을 생성하고 아래 JSON 내용을 복사해서 붙여 넣습니다:

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

이는 Rust 애플리케이션을 개발, 프로덕션 모드 모두에서 로드하기 위해 `cargo`를 직접 사용해 빌드합니다.

Tauri CLI를 사용하지 않으므로 전용 CLI 기능이 실행되지 않습니다. `beforeDevCommand`와 `beforeBuildCommand` 스크립트는 미리 실행하거나 `preLaunchTask` 필드에서 작업으로 구성해야 합니다. 다음은 개발 서버를 생성하는 `beforeDevCommand`와 `beforeBuildCommand` 두 가지 작업이 있는 `.vscode/tasks.json` 파일의 예입니다:

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

이제, `src-tauri/src/main.rs` 혹은 다른 Rust 파일에 중단점을 설정하고 `F5`를 눌러 디버깅을 시작할 수 있습니다.

[`vscode-lldb`]: https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb

[Core Process of your Tauri app]: ../../references/architecture/process-model.md#the-core-process