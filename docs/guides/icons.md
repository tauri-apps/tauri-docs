# Icons

Tauri ships with a default iconset based on its logo. This is probably NOT what you want when you ship your application. To remedy this common situation, Tauri provides the `tauricon` command that will take an input file ("./app-icon.png" by default) and create all the icons needed for the various platforms:

## Installation

You can install the `tauricon` package either locally as a dev dependency:

```bash
npm install -D github:tauri-apps/tauricon
# OR
yarn add -D github:tauri-apps/tauricon
```

or globally:

```bash
npm install -g github:tauri-apps/tauricon
# OR
yarn add -g github:tauri-apps/tauricon
```

If you decide to use Tauri as a local package with npm (not yarn), you need to add a custom script to your package.json:

```js title=package.json
{
  // This content is just a sample
  "scripts": {
    "tauricon": "tauricon"
  }
}
```

## Usage

```bash
npm tauricon --help

Description
  Create all the icons you need for your Tauri app.
  The icon path is the source icon (png, 1240x1240 with transparency), it defaults to './app-icon.png'.

Usage
  tauricon [ICON-PATH]

Options
  --help, -h          Displays this message
  --log, l            Logging [boolean]
  --target, t         Target folder (default: 'src-tauri/icons')
  --compression, c    Compression type [optipng|zopfli]
  --ci                Runs the script in CI mode
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
