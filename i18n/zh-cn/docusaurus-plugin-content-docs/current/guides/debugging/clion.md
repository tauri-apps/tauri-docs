# 在 CLion 中调试

在这个指南中，我们会配置 IntelliJ CLion 以调试 [您的 Tauri 应用的核心进程][Core Process of your Tauri app]。

## 预先准备

您需要下载安装 [IntelliJ Rust Plugin][] 以启用 Rust 特性支持。

## 顶级 Cargo 工作区

默认情况下，Tauri 将 Rust 项目放在一个名为 `src-tauri` 的子文件夹中。
CLion 可能无法识别不在顶级工作区的 Cargo 项目，此时您需要前往 `Cargo -> Attach Cargo project` 选项。
如果这个选项并未生效，您需要创建一个顶层工作区指向您的核心 `Cargo.toml` 文件:

```toml title=Cargo.toml
[workspace]
members = ["src-tauri"]
```

在继续之前，请确保您的项目已完全加载。如果索引完成，并且 Cargo 工具窗口显示了工作区的所有模块和目标，那么就可以开始了。

## 运行/调试配置

我们将设置一个运行/调试配置，用于在调试模式下启动 Tauri 应用程序。要创建配置，请转到“编辑配置”，单击**+**，然后选择 Cargo 命令。

![创建运行/调试配置](/img/guides/debugging/clion/add-cargo-config-light.png#gh-light-mode-only) ![创建运行/调试配置](/img/guides/debugging/clion/add-cargo-config-dark.png#gh-dark-mode-only)

创建后，我们需要配置 CLion ，以便它使用 Cargo 在没有任何默认功能的情况下构建我们的应用程序。
这将告诉 Tauri 使用您的开发服务器，而不是从磁盘读取资产。
通常情况下，该标识由 Tauri CLI 传递，但由于我们在这里完全避开了这一点，因此需要手动传递该标志。

![添加 <code>--no-default-features</code> 标识](/img/guides/debugging/clion/set-no-default-features-light.png#gh-light-mode-only) ![添加 <code>--no-default-features</code> 标识](/img/guides/debugging/clion/set-no-default-features-dark.png#gh-dark-mode-only)

现在，我们可以选择将运行/调试配置重命名为更好记忆的名称，在本例中，我们称之为 "Run Tauri App"，但您可以随意命名。

![重命名配置](/img/guides/debugging/clion/rename-configuration-light.png#gh-light-mode-only) ![重命名配置](/img/guides/debugging/clion/rename-configuration-dark.png#gh-dark-mode-only)

:::caution

在 Windows 中，您必须确保 CLion 使用了正确的调试工具链。如果想要配置，您可以打开设置（`File -> Settings ...`），选择 `Build, Execution, Deployment -> Toolchains`，然后将 `Visual Studio` 工具链移到顶部。

:::

## 启动开发服务器

上面的配置将直接使用 Cargo 来构建 Rust 应用程序，并将调试器连接到它。这意味着我们完全避开了 Tauri CLI，因此**不会**执行 `beforeDevCommand` 和 `beforeBuildCommand` 等功能。我们需要通过打开一个新的终端并开始手动运行开发服务器来解决这个问题：

```sh
pnpm vite dev
```

> 请注意，CLion 目前不支持像 VS Code 那样的运行/调试配置中的后台任务，因此目前您需要手动运行开发服务器。

## 启动调试进程

随着开发服务器的运行和 Switcher 中选择的运行/调试配置，您现在可以通过单击 调试 来启动新的调试会话。CLion 将自动识别项目中任何 Rust 文件中的断点。

[Core Process of your Tauri app]: ../../references/architecture/process-model.md#the-core-process
[IntelliJ Rust Plugin]: https://plugins.jetbrains.com/plugin/8182-rust/docs
