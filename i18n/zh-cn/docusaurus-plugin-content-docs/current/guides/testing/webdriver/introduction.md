---
sidebar_position: 1
title: 简介
---

:::caution 目前处于预测试阶段
Webdriver 对 Tauri 的支持仍处于 pre-alpha 阶段。 专用于它的工具，例如 [tauri-driver][]，仍在积极开发中，可能会随着时间的推移而根据需要进行更改。 此外，目前仅支持 Windows 和 Linux。
:::

[WebDrive][] 是一个标准化接口，用于与主要用于自动化测试的 Web 文档进行交互。 Tauri 通过跨平台包装器 [`tauri-driver`][] 来调用原生平台的 [WebDriver][] 服务器以支持 [WebDriver][] 接口。

## 系统依赖

安装最新的 [`tauri-driver`][] 或通过运行以下命令更新现有安装：

```shell
cargo install tauri-driver
```

由于我们目前使用平台的本机 [WebDriver][] 服务器， 因此在支持的平台上运行 [`tauri-driver`][] 有一些要求。 平台支持目前仅限于 Linux 和 Windows。

### Linux

我们在 Linux 平台上使用 `WebKitWebDriver` 的时候。 需要检查这个二进制文件是否已经存在（命令 `which WebKitWebDriver`）， 因为某些发行版将其与常规的WebKit软件包捆绑在一起。 其他平台可能有一个单独的软件包，例如在基于 Debian 的发行版上有 `webkit2gtk-driver` 。

### Windows

Make sure to grab the version of [Microsoft Edge Driver][] that matches your Windows Edge version that the application is being built and tested on. 这几乎总是最新 Windows 安装上的最新稳定版本。 如果两个版本不匹配，则在尝试连接时可能会遇到 WebDriver 测试套件挂起的情况。

下载内容包含一个名为 `msedgedriver.exe` 的二进制文件。 [`tauri-driver`][] 在 `$PATH` 中寻找该二进制文件，因此请确保它在路径上可用或使用[`tauri-driver`][] 的 `--native-driver` 选项。 你可能希望在 CI 设置过程中自动下载此内容，以确保 Edge 和 Edge 驱动程序版本在 Windows CI 计算机上保持同步。 后续可能会添加有关如何执行此操作的指南。

## 应用示例

本指南的 [下一部分](example/setup) 将逐步介绍如何创建包含 WebDriver 测试的最小示例应用程序。

如果您想要查看根据指南操作后完成的最小代码库，则可以 <a href="https://github.com/chippers/hello_tauri" target="_blank">查看这里</a>。 该示例还附带了一个 CI 脚本，用于使用 GitHub 操作进行测试，但您可能仍然对 [WebDriver CI](ci) 指南感兴趣，因为它对概念进行了更多解释 。

[WebDrive]: https://www.w3.org/TR/webdriver/

[WebDriver]: https://www.w3.org/TR/webdriver/
[`tauri-driver`]: https://crates.io/crates/tauri-driver
[tauri-driver]: https://crates.io/crates/tauri-driver
[Microsoft Edge Driver]: https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
