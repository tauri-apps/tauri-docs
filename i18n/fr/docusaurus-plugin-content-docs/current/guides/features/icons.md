import Command from '@theme/Command'

# Icons

Tauri ships with a default iconset based on its logo. This is NOT what you want when you ship your application. To remedy this common situation, Tauri provides the `icon` command that will take an input file (`"./app-icon.png"` by default) and create all the icons needed for the various platforms.

:::info Note on filetypes

- `icon.icns` = macOS
- `icon.ico` = Windows
- `*.png` = Linux
- `Square*Logo.png` & `StoreLogo.png` = Currently unused but intended for AppX/MS Store targets.

Note that icon types may be used on platforms other than those listed above (especially `png`). Therefore we recommend including all icons even if you intend to only build for a subset of platforms.

:::

## Command Usage

Starting with `@tauri-apps/cli` / `tauri-cli` version 1.1 the `icon` subcommand is part of the main cli:

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

By default, the icons will be placed in your `src-tauri/icons` folder where they will automatically be included in your built app. If you want to source your icons from a different location, you can edit this part of the `tauri.conf.json` file:

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

## Creating the icons manually

If you prefer to build these icons yourself, for example if you want to have a simpler design for small sizes or because you don't want to depend on the CLI's internal image resizing, you must make sure your icons meet some requirements:

- `icon.icns`: The required layer sizes and names for the [`icns`][] file are described [in the Tauri repo][]
- `icon.ico`: The [`ico`][] file must include layers for 16, 24, 32, 48, 64 and 256 pixels. For an optimal display of the ICO image _in development_, the 32px layer should be the first layer.
- `png`: The requirements for the png icons are: width == height, RGBA (RGB + Transparency), and 32bit per pixel (8bit per channel). Commonly expected sizes are 32, 128, 256, and 512 pixels. We recommend to at least match the output of `tauri icon`: `32x32.png`, `128x128.png`, `128x128@2x.png`, and `icon.png`.

[in the Tauri repo]: https://github.com/tauri-apps/tauri/blob/dev/tooling/cli/src/helpers/icns.json
[`icns`]: https://en.wikipedia.org/wiki/Apple_Icon_Image_format
[`ico`]: https://en.wikipedia.org/wiki/ICO_(file_format)
