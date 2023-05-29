import Command from '@theme/Command'

# 应用程序调试

当所有移动的片段都在 Tauri 中，你可能会遇到一个需要调试的问题。 有许多位置打印错误详细信息，Tauri 包含一些工具，使调试过程更加简单。

## Rust 控制台

查找错误的第一个地方是Rust Console。 这是在您运行中的终端，例如 `tauridev`。 您可以使用以下代码从 Rust 文件中将某些内容打印到该控制台

```rust
println!("Message from Rust: {}", msg);
```

有时你的 Rust 代码中可能会有错误，而 Rust 编译器可以给你很多信息。 例如，如果 `tauri dev` 崩溃，您可以在 Linux 和 macOS 上像这样重新运行它：

```shell
RUST_BACKTRACE=1 tauri dev
```

或者在Windows上可以这样：

```shell
set RUST_BACKTRACE=1 
tauri dev
```

此命令为您提供精细的堆栈跟踪。 一般来说，Rust 编译器通过为您提供有关问题的详细信息来帮助您，例如：

```
error[E0425]: cannot find value `sun` in this scope
  --> src/main.rs:11:5
   |
11 |     sun += i.to_string().parse::<u64>().unwrap();
   |     ^^^ help: a local variable with a similar name exists: `sum`

error: aborting due to previous error

For more information about this error, try `rustc --explain E0425`.
```

## WebView 控制台

在 WebView 中单击鼠标右键，然后选择 。 将打开一个类似于您习惯的 Chrome 或 Firefox 开发工具的 Web 检查器。 您也可以在 Linux 或 Windows 上使用 `Ctrl + Shift + i` 快捷方式 ，在 macOS 上使用 `Command + Option + i` 打开检查器。

检查器是特定于平台的，在 Linux 上呈现 webkit2gtk Web检查器，在 MacOS 上渲染 Safari 的检查器，在 Windows 上渲染 Microsoft Edge DevTools。

### 以编程方式打开开发工具

您可以使用 [`Window::open_devtools`][] 和 [`Window::close_devtools`][] 函数来控制查看器窗口可见性：

```rust
use tauri::Manager;
tauri::Builder::default()
  .setup(|app| {
    #[cfg(debug_assertions)] // only include this code on debug builds
    {
      let window = app.get_window("main").unwrap();
      window.open_devtools();
      window.close_devtools();
    }
    Ok(())
  });
```

### 在生产中使用检查器

默认情况下，检查器仅在开发和调试版本中启用，除非您使用 Cargo 功能启用它。

#### 创建调试版本

要创建调试构建，请运行 `tauribution --debug` 命令。

<Command name="build --debug" />

像正常的构建和开发进程一样，构建需要一些时间才能首次运行此命令，但其后运行的速度要快得多。 最后捆绑的应用已启用开发控制台，放置在 `src-tauri/target/debug/bundle` 中。

您还可以从终端运行构建的应用程序，给您的 Rust 编译器注释(如果有错误的话) 或您的 `println` 消息。 浏览文件 `src-tauri/target/(release|debug)/[app name]` 并直接在控制台中运行它，或在文件系统中双击可执行文件本身(注意：使用此方法出现错误时，控制台会关闭)。

#### 启用开发工具功能

:::warning

Devtools API 在 macOS 上是私有的。 在 macOS 上使用私有 API 可防止您的应用程序被 App Store 接受。

:::

若要在生产版本中启用 devtool，您必须在文件 `src-tauri/Cargo.toml` 中启用 `devtools` Cargo 功能：

```toml
[dependencies]
tauri = { version = "...", features = ["...", "devtools"] }
```

## 调试核心进程

核心进程由 Rust 提供支持，因此您可以使用 GDB 或 LLDB 来调试它。 您可以按照 <a href="https://tauri. app/zh-cn/v1/guides/debugging/vs-code" target="_blank">VS Code 中</a> 调试指南了解如何使用 LLDB VS 代码扩展来调试 Tauri 应用程序的核心进程。

[`Window::open_devtools`]: https://docs.rs/tauri/1/tauri/window/struct.Window.html#method.open_devtools
[`Window::close_devtools`]: https://docs.rs/tauri/1/tauri/window/struct.Window.html#method.close_devtools
