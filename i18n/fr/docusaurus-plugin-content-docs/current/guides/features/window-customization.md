# Window Customization

Tauri provides lots of options for customizing the look and feel of your app's window. You can create custom titlebars, have transparent windows, enforce size constraints, and more.

## Configuration

There are three ways to change the window configuration:

- [Through tauri.conf.json](../../api/config.md#tauri.windows)
- [Through the JS API](../../api/js/window.md#webviewwindow)
- [Through the Window in Rust](https://docs.rs/tauri/1/tauri/window/struct.Window.html)

## Creating a Custom Titlebar

A common use of these window features is creating a custom titlebar. This short tutorial will guide you through that process.

### CSS

You'll need to add some CSS for the titlebar to keep it at the top of the screen and style the buttons:

```css
.titlebar {
  height: 30px;
  background: #329ea3;
  user-select: none;
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.titlebar-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
}
.titlebar-button:hover {
  background: #5bbec3;
}
```

### HTML

Now, you'll need to add the HTML for the titlebar. Put this at the top of your `<body>` tag:

```html
<div data-tauri-drag-region class="titlebar">
  <div class="titlebar-button" id="titlebar-minimize">
    <img
      src="https://api.iconify.design/mdi:window-minimize.svg"
      alt="minimize"
    />
  </div>
  <div class="titlebar-button" id="titlebar-maximize">
    <img
      src="https://api.iconify.design/mdi:window-maximize.svg"
      alt="maximize"
    />
  </div>
  <div class="titlebar-button" id="titlebar-close">
    <img src="https://api.iconify.design/mdi:close.svg" alt="close" />
  </div>
</div>
```

Note that you may need to move the rest of your content down so that the titlebar doesn't cover it.

### JS

Finally, you'll need to make the buttons work:

```js
import { appWindow } from '@tauri-apps/api/window'
document
  .getElementById('titlebar-minimize')
  .addEventListener('click', () => appWindow.minimize())
document
  .getElementById('titlebar-maximize')
  .addEventListener('click', () => appWindow.toggleMaximize())
document
  .getElementById('titlebar-close')
  .addEventListener('click', () => appWindow.close())
```

### tauri.conf.json

To make calls to `appWindow` work don't forget to add [window](../../api/js/window.md) permissions in `tauri.conf.json` file:
```json
"tauri": {
  "allowList": {
    ...
    "window": {
        "all": false,
        "close": true,
        "hide": true,
        "show": true,
        "maximize": true,
        "minimize": true,
        "unmaximize": true,
        "unminimize": true,
        "startDragging": true
      }
  }
  ...

  "windows": [
    {
      "decorations": false,
      ...
    }
  ]
}
```
