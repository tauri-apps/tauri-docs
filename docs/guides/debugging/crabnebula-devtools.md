# 在 CrabNebula DevTools 中进行调试

作为与 Tauri 项目合作的一部分，[CrabNebula](https://crabnebula.dev) 为 Tauri 提供了免费的 [DevTools](https://crabnebula.dev/devtools/) 应用程序。

通过该应用程序，您可以捕获 Tauri 应用程序的嵌入式资产、Tauri 配置文件、日志和源代码，并提供一个前端网页来实时无缝地可视化数据。

使用 CrabNebula DevTools，您可以检查应用程序的日志事件（包括来自依赖项的日志），跟踪命令调用的性能和 Tauri API 的总体使用情况，并为 Tauri 事件和命令提供一个特殊界面，包括参数、响应数据和内部日志以及执行时间跨度。

要启用 CrabNebula DevTools，请安装 `devtools` crate：

```shell
cargo add devtools
```

并在主函数中尽可能的提前初始化插件：

```rust
fn main() {
    #[cfg(debug_assertions)]
    let devtools = devtools::init(); // initialize the plugin as early as possible

    let mut builder = tauri::Builder::default();

    #[cfg(debug_assertions)]
    builder = builder.plugin(devtools); // then register it with Tauri

    builder.run(tauri::generate_context!())
        .expect("error while running tauri application");
}
```

:::note
如上述代码一样，我们建议只在调试模式下初始化 devtools 插件。
:::

更多信息，请参阅 [CrabNebula DevTools] 文档。

[CrabNebula DevTools]: https://docs.crabnebula.dev/devtools/get-started/
