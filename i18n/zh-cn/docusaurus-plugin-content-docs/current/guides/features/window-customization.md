# 窗口自定义

Tauri提供了许多自定义应用程序窗口外观的选项。您可以创建自定义标题栏，透明窗口，强制大小约束，等等。

## 配置

有三种方法可以修改window的配置：

- [通过 tauri.conf.json](../../api/config.md#tauri.windows)
- [通过 JS API](../../api/js/window.md#webviewwindow)
- [通过 Rust 的 Window](https://docs.rs/tauri/1/tauri/window/struct.Window.html)

## 创建自定义标题栏

这些窗口特性的一个常见用途是创建自定义标题栏。这篇简短的教程将指导你完成这个过程。

### CSS

你需要为标题栏添加一些CSS，使其保持在屏幕顶部，并为按钮添加样式：

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

现在, 需要为标题栏添加 HTML. 把这些代码放到 `<body>` 标签里面的最上方：

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

请注意，你可能需要将其余内容向下移动，以免标题栏覆盖它。

### JS

最后，还需要让按钮发挥作用：

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

要使对 `appWindow` 的调用生效，你需要在 `tauri.conf.json` 文件中添加 [window](../../api/js/window.md) 权限：
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
