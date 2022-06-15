# Icons

Tauri ships with a default iconset based on its logo. This is probably NOT what you want when you ship your application. To remedy this common situation, Tauri provides the `tauricon` command that will take an input file ("./app-icon.png" by default) and create all the icons needed for the various platforms:

## Usage

```console
npx @tauri-apps/tauricon --help

Description
  Create all the icons you need for your Tauri app.

  "ICON-PATH" is the path to the source icon (default: 'app-icon.png').
  The icon needs to be either png (1240x1240 with transparency) or svg (square dimensions with transparency).

Usage
  npx @tauri-apps/tauricon [ICON-PATH]

Options
  --help, -h          Displays this message
  --log, l            Logging [boolean]
  --target, t         Target folder (default: 'src-tauri/icons')
```

These will be placed in your `src-tauri/icons` folder where they will automatically be included in your built app.

If you need to source your icons from some other location, you can edit this part of the `src-tauri/tauri.conf.json` file:

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

:::info Note on filetypes

- icon.icns = macOS
- icon.ico = MS Windows
- \*.png = Linux

:::
