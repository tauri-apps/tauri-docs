import Command from '@theme/Command'

# 图标

Tauri 发布了一个基于其 logo 的默认图标集。 这不是在发布应用程序时想要的。 为了纠正这种常见情况，Tauri提供了 `icon` 命令，它将需要输入文件(默认 `"./app-icon.png"`)并创建各种平台所需的所有图标。

:::info Note on filetypes

- `icon.icns` = macOS
- `icon.ico` = Windows
- `*.png` = Linux
- `Square*Logo.png` & `StoreLogo.png` = Currently unused but intended for AppX/MS Store targets.

请注意，图标类型可以在上面列出的平台以外的平台上使用(特别是 `png`) 因此，我们建议包括所有的图标，即使你打算只构建一个子集的平台。

:::

## 命令使用

从 `@tauri-apps/cli` / `tauri-cli` 版本 1.1 开始 `icon` 子命令是主 Cli 的一部分：

<Command name="icon" />

```console
> cargo tauri icon --help
cargo-tauri-icon 1.1.0

Generates various icons for all major platforms

USAGE:
    cargo tauri icon [OPTIONS] [INPUT]

ARGS:
    <INPUT>    Path to the source icon (png, 1024x1024px with transparency) [default: ./app-icon.png]

OPTIONS:
    -h, --help               Print help information
    -o, --output <OUTPUT>    Output directory. Default: 'icons' directory next to the tauri.conf.json file
    -v, --verbose            Enables verbose logging
    -V, --version            Print version information
```

默认情况下，图标将被放置在 `src-tauri/icons` 文件夹中，它们将被自动放置在内置应用程序中。 如果想要从不同的位置来获取图标，可以编辑 `tauri.conf.json` 文件的这一部分：

```json
{
  "tauri": {
    "bundle": {
      "icon": [
        "icons/32x32.png",
        "icons/128x128.png",
        "icons/128x128@2x.png",
        "icons/icon.icns",
        "icons/icon.ico"
      ]
    }
  }
}
```

## 手动创建图标

If you prefer to build these icons yourself, for example if you want to have a simpler design for small sizes or because you don't want to depend on the CLI's internal image resizing, you must make sure your icons meet some requirements:

- `icon.icns`: The required layer sizes and names for the [`icns`][] file are described [in the Tauri repo][]
- `icon.ico`: The [`ico`][] file must include layers for 16, 24, 32, 48, 64 and 256 pixels. 为了_在开发中_ 最佳显示 ICO 图像，32px 层应该是第一层。
- `png`: The requirements for the png icons are: width == height, RGBA (RGB + Transparency), and 32bit per pixel (8bit per channel). Commonly expected sizes are 32, 128, 256, and 512 pixels. We recommend to at least match the output of `tauri icon`: `32x32.png`, `128x128.png`, `128x128@2x.png`, and `icon.png`.

[in the Tauri repo]: https://github.com/tauri-apps/tauri/blob/dev/tooling/cli/src/helpers/icns.json
[`icns`]: https://en.wikipedia.org/wiki/Apple_Icon_Image_format
[`ico`]: https://en.wikipedia.org/wiki/ICO_(file_format)
