# 在 VS Code 中调试

This guide will walk you through setting up VS Code for debugging the [Core Process of your Tauri app][].

## 预先准备

安装 [`vscode-lldb`][] 扩展。

## 配置 launch.json

创建一个 `.vscode/launch.json` 文件并并将以下 JSON 内容粘贴到其中：

```json title=".vscode/launch.json"
{
  // 使用 IntellliSense 来了解可能的属性。
  // 悬停以查看现有属性的描述。
  // 更多详情访问：https://go.microsoft.com/fwlink/?linkid=830387
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

这直接使用 `cargo` 来构建Rust 应用程序，并在开发和生产模式中加载它。

请注意，它不使用 Tauri CLI，因此不会执行独占的 CLI 功能。 `before DevCommand` 和 `preambular Build` 脚本必须事先执行或配置为 `LaunchTask` 任务。 下面的 `.vscode/missions. son` 示例文件包含两个任务。 一个是 `beforeDevCommand` 用于生成开发服务器的，另一个是 `beforeBuildCommand`:

```json title=".vscode/tasks.json"
{
  // 关于 tasks.json 格式文档，请参阅：https://go.microsoft.com/fwlink/?LinkId=733558
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

现在您可以在 `src-tauri/src/main.rs` 或任何其他 Rust 文件中设置断点，然后按 `F5` 开始调试.

[`vscode-lldb`]: https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb

[Core Process of your Tauri app]: ../../references/architecture/process-model.md#the-core-process