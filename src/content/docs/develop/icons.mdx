---
title: App Icons
sidebar:
  order: 1
---

{/* TODO: More platform specific explanations like macOS requiring padding in the icon (waiting for https://github.com/tauri-apps/tauri/pull/11037) */}

import CommandTabs from '@components/CommandTabs.astro';

Tauri ships with a default iconset based on its logo. This is NOT what you want when you ship your application. To remedy this common situation, Tauri provides the `icon` command that will take an input file (`"./app-icon.png"` by default) and create all the icons needed for the various platforms.

:::note[Note on filetypes]

- `icon.icns` = macOS
- `icon.ico` = Windows
- `*.png` = Linux
- `Square*Logo.png` & `StoreLogo.png` = Currently unused but intended for AppX/MS Store targets.

Some icon types may be used on platforms other than those listed above (especially `png`). Therefore we recommend including all icons even if you intend to only build for a subset of platforms.

:::

## Command Usage

<CommandTabs
  npm="npm run tauri icon"
  yarn="yarn tauri icon"
  pnpm="pnpm tauri icon"
  cargo="cargo tauri icon"
  deno="deno task tauri icon"
/>

```console
> pnpm tauri icon --help

Generate various icons for all major platforms

Usage: pnpm run tauri icon [OPTIONS] [INPUT]

Arguments:
  [INPUT]  Path to the source icon (squared PNG or SVG file with transparency) [default: ./app-icon.png]

Options:
  -o, --output <OUTPUT>        Output directory. Default: 'icons' directory next to the tauri.conf.json file
  -v, --verbose...             Enables verbose logging
  -p, --png <PNG>              Custom PNG icon sizes to generate. When set, the default icons are not generated
      --ios-color <IOS_COLOR>  The background color of the iOS icon - string as defined in the W3C's CSS Color Module Level 4 <https://www.w3.org/TR/css-color-4/> [default: #fff]
  -h, --help                   Print help
  -V, --version                Print version
```

The **desktop** icons will be placed in your `src-tauri/icons` folder by default, where they will be included in your built app automatically. If you want to source your icons from a different location, you can edit this part of the `tauri.conf.json` file:

```json
{
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
```

The **mobile** icons will be placed into the Xcode and Android Studio projects directly!

## Creating icons manually

If you prefer to build these icons yourself, for example if you want to have a simpler design for small sizes or because you don't want to depend on the CLI's internal image resizing, you must make sure your icons meet some requirements:

- `icon.icns`: The required layer sizes and names for the [`icns`] file are described [in the Tauri repo]
- `icon.ico`: The [`ico`] file must include layers for 16, 24, 32, 48, 64 and 256 pixels. For an optimal display of the ICO image _in development_, the 32px layer should be the first layer.
- `png`: The requirements for the png icons are: width == height, RGBA (RGB + Transparency), and 32bit per pixel (8bit per channel). Commonly expected sizes on desktop are 32, 128, 256, and 512 pixels. We recommend to at least match the output of `tauri icon`: `32x32.png`, `128x128.png`, `128x128@2x.png`, and `icon.png`.

### Android

On Android you will need png icons with the same requirements but in different sizes. They will also need to be placed directly in the Android Studio project:

- `src-tauri/gen/android/app/src/main/res/`
  - `mipmap-hdpi/`
    - `ic_launcher.png` & `ic_launcher_round.png`: 49x49px
    - `ic_launcher_foreground.png`: 162x162px
  - `mipmap-mdpi/`
    - `ic_launcher.png` & `ic_launcher_round.png`: 48x48px
    - `ic_launcher_foreground.png`: 108x108px
  - `mipmap-xhdpi/`
    - `ic_launcher.png` & `ic_launcher_round.png`: 96x96px
    - `ic_launcher_foreground.png`: 216x216px
  - `mipmap-xxhdpi/`
    - `ic_launcher.png` & `ic_launcher_round.png`: 144x144px
    - `ic_launcher_foreground.png`: 324x324px
  - `mipmap-xxxhdpi/`
    - `ic_launcher.png` & `ic_launcher_round.png`: 192x192px
    - `ic_launcher_foreground.png`: 432x432px

If `tauri icon` cannot be used, we recommend checking out Android Studio's [Image Asset Studio] instead.

### iOS

On iOS you will need png icons with the same requirements but **without transparency** and in different sizes. They will also need to be placed directly in the Xcode project into `src-tauri/gen/apple/Assets.xcassets/AppIcon.appiconset/`. The following icons are expected:

- 20px in 1x, 2x, 3x, with an extra icon
- 29px in 1x, 2x, 3x, with an extra icon
- 40px in 1x, 2x, 3x, with an extra icon
- 60px in 2x, 3x
- 76px in 1x, 2x
- 83.5px in 2x
- 512px in 2x saved as `AppIcon-512@2x.png`

The file names are in the format of `AppIcon-{size}x{size}@{scaling}{extra}.png`. For the 20px icons this means you need icons in sizes 20x20, 40x40 and 60x60 named as `AppIcon-20x20@1x.png`, `AppIcon-20x20@2x.png`, `AppIcon-20x20@3x.png` and `2x` saved additionally as `AppIcon-20x20@2x-1.png` ("extra icon").

[in the tauri repo]: https://github.com/tauri-apps/tauri/blob/1.x/tooling/cli/src/helpers/icns.json
[`icns`]: https://en.wikipedia.org/wiki/Apple_Icon_Image_format
[`ico`]: https://en.wikipedia.org/wiki/ICO_(file_format)
[image asset studio]: https://developer.android.com/studio/write/create-app-icons
