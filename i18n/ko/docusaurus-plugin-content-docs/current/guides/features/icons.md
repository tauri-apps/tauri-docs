import Command from '@theme/Command'

# 아이콘

Tauri는 로고를 기반으로 하는 기본 아이콘 세트와 함께 제공됩니다. 이것은 애플리케이션을 출시할 때 필요한 것은 아닙니다. 일반적인 상황을 해결하기 위해, Tauri는 입력 파일(기본적으로 `"./app-icon.png"`)을 가져와 다양한 플랫폼에 필요한 모든 아이콘을 생성하는 `icon` 명령을 제공합니다.

:::정보 파일 형식에 대한 참고

- `icon.icns` = macOS
- `icon.ico` = Windows
- `*.png` = Linux
- `Square*Logo.png` & `StoreLogo.png` = Currently unused but intended for AppX/MS Store targets.

아이콘 타입은 위에 나열된 플랫폼(특히 `png`) 이외에서 사용될 수 있습니다. 그래서, 일부 플랫폼용으로만 빌드하려는 경우에도 모든 아이콘을 포함하는 것이 좋습니다.

:::

## 명령어 사용

`@tauri-apps/cli` / `tauri-cli` 버전 1.1부터는 `icon` 하위 명령이 기본 cli의 일부입니다:

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

기본적으로, 아이콘은 빌드된 앱에 자동으로 포함되는 데, `src-tauri/icons` 폴더에 위치 하게 됩니다. 다른 위치에서 아이콘을 가져오려면 `tauri.conf.json` 파일의 이 부분을 편집하면 됩니다:

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

## 아이콘 수동으로 만들기

If you prefer to build these icons yourself, for example if you want to have a simpler design for small sizes or because you don't want to depend on the CLI's internal image resizing, you must make sure your icons meet some requirements:

- `icon.icns`: The required layer sizes and names for the [`icns`][] file are described [in the Tauri repo][]
- `icon.ico`: The [`ico`][] file must include layers for 16, 24, 32, 48, 64 and 256 pixels. _개발 단계_에서 ICO 이미지를 최적으로 표시하려면, 32px이 첫 번째 단계여야 합니다.
- `png`: The requirements for the png icons are: width == height, RGBA (RGB + Transparency), and 32bit per pixel (8bit per channel). Commonly expected sizes are 32, 128, 256, and 512 pixels. We recommend to at least match the output of `tauri icon`: `32x32.png`, `128x128.png`, `128x128@2x.png`, and `icon.png`.

[in the Tauri repo]: https://github.com/tauri-apps/tauri/blob/dev/tooling/cli/src/helpers/icns.json
[`icns`]: https://en.wikipedia.org/wiki/Apple_Icon_Image_format
[`ico`]: https://en.wikipedia.org/wiki/ICO_(file_format)
