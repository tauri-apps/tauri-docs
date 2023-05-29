# 윈도우 맞춤화

Tauri는 앱 윈도우의 모양과 느낌을 사용자 지정하기 위한 많은 옵션을 제공합니다. 사용자 지정 제목 표시줄을 만들고, 투명한 창으로 만들고, 크기 제약을 적용하는 등의 작업을 수행할 수 있습니다.

## 설정

윈도우 설정을 바꾸기 위한 방법은 3가지가 있습니다:

- [tauri.conf.json을 통해서](../../api/config.md#tauri.windows)
- [JS API를 통해서](../../api/js/window.md#webviewwindow)
- [Rust 윈도우를 통해서](https://docs.rs/tauri/1/tauri/window/struct.Window.html)

## 사용자 지정 제목표시줄 만들기

윈도우 기능의 일반적인 용도는 사용자 지정 제목 표시줄을 만드는 것입니다. 이 짧은 자습서는 해당 프로세스에 대해 안내합니다.

### CSS

제목 표시줄을 화면 상단에 유지하고 버튼 스타일을 지정하려면 CSS를 추가해야 합니다.

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

이제, 제목표시줄을 위한 HTML을 추가해야 합니다. 이것을 `<body>` 태그 상단에 넣습니다:

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

제목 표시줄이 콘텐츠를 가리지 않도록 콘텐츠 부분을 아래로 이동해야 할 수도 있습니다.

### JS

마지막으로 버튼이 작동하도록 해야 합니다:

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
