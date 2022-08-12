[@tauri-apps/api](../README.md) / window

# Module: window

Provides APIs to create windows, communicate with other windows and manipulate the current window.

This package is also accessible with `window.__TAURI__.window` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

The APIs must be added to [`tauri.allowlist.window`](https://tauri.app/v1/api/config/#allowlistconfig.window) in `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "window": {
        "all": true, // enable all window APIs
        "create": true, // enable window creation
        "center": true,
        "requestUserAttention": true,
        "setResizable": true,
        "setTitle": true,
        "maximize": true,
        "unmaximize": true,
        "minimize": true,
        "unminimize": true,
        "show": true,
        "hide": true,
        "close": true,
        "setDecorations": true,
        "setAlwaysOnTop": true,
        "setSize": true,
        "setMinSize": true,
        "setMaxSize": true,
        "setPosition": true,
        "setFullscreen": true,
        "setFocus": true,
        "setIcon": true,
        "setSkipTaskbar": true,
        "setCursorGrab": true,
        "setCursorVisible": true,
        "setCursorIcon": true,
        "setCursorPosition": true,
        "startDragging": true,
        "print": true
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

# Window events

Events can be listened using `appWindow.listen`:
```typescript
import { appWindow } from "@tauri-apps/api/window";
appWindow.listen("my-window-event", ({ event, payload }) => { });
```

## Enumerations

### UserAttentionType

Attention type to request on a window.

#### Members

##### Critical

 **Critical** = ``1``

###### Platform-specific
 - **macOS:** Bounces the dock icon until the application is in focus.
- **Windows:** Flashes both the window and the taskbar button until the application is in focus.

###### Defined in

[window.ts:193](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L193)

___

##### Informational

 **Informational** = ``2``

###### Platform-specific
- **macOS:** Bounces the dock icon once.
- **Windows:** Flashes the taskbar button until the application is in focus.

###### Defined in

[window.ts:199](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L199)


## Classes

### CloseRequestedEvent

#### Constructors

##### constructor

**new CloseRequestedEvent**(`event`)

###### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../interfaces/event.Event.md)<``null``\> |

#### Properties

##### \_preventDefault

 `Private` **\_preventDefault**: `boolean` = `false`

###### Defined in

[window.ts:1761](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1761)

___

##### event

 **event**: `string`

Event name

###### Defined in

[window.ts:1756](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1756)

___

##### id

 **id**: `number`

Event identifier used to unlisten

###### Defined in

[window.ts:1760](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1760)

___

##### windowLabel

 **windowLabel**: `string`

The label of the window that emitted this event.

###### Defined in

[window.ts:1758](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1758)

#### Methods

##### isPreventDefault

**isPreventDefault**(): `boolean`

###### Returns

`boolean`

___

##### preventDefault

**preventDefault**(): `void`

###### Returns

`void`

### LogicalPosition

A position represented in logical pixels.

#### Constructors

##### constructor

**new LogicalPosition**(`x`, `y`)

###### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Properties

##### type

 **type**: `string` = `'Logical'`

###### Defined in

[window.ts:135](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L135)

___

##### x

 **x**: `number`

###### Defined in

[window.ts:136](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L136)

___

##### y

 **y**: `number`

###### Defined in

[window.ts:137](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L137)

### LogicalSize

A size represented in logical pixels.

#### Constructors

##### constructor

**new LogicalSize**(`width`, `height`)

###### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Properties

##### height

 **height**: `number`

###### Defined in

[window.ts:99](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L99)

___

##### type

 **type**: `string` = `'Logical'`

###### Defined in

[window.ts:97](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L97)

___

##### width

 **width**: `number`

###### Defined in

[window.ts:98](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L98)

### PhysicalPosition

A position represented in physical pixels.

#### Constructors

##### constructor

**new PhysicalPosition**(`x`, `y`)

###### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Properties

##### type

 **type**: `string` = `'Physical'`

###### Defined in

[window.ts:147](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L147)

___

##### x

 **x**: `number`

###### Defined in

[window.ts:148](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L148)

___

##### y

 **y**: `number`

###### Defined in

[window.ts:149](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L149)

#### Methods

##### toLogical

**toLogical**(`scaleFactor`): [`LogicalPosition`](window.LogicalPosition.md)

Converts the physical position to a logical one.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const factor = await appWindow.scaleFactor();
const position = await appWindow.innerPosition();
const logical = position.toLogical(factor);
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

###### Returns

[`LogicalPosition`](window.LogicalPosition.md)

### PhysicalSize

A size represented in physical pixels.

#### Constructors

##### constructor

**new PhysicalSize**(`width`, `height`)

###### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

#### Properties

##### height

 **height**: `number`

###### Defined in

[window.ts:111](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L111)

___

##### type

 **type**: `string` = `'Physical'`

###### Defined in

[window.ts:109](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L109)

___

##### width

 **width**: `number`

###### Defined in

[window.ts:110](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L110)

#### Methods

##### toLogical

**toLogical**(`scaleFactor`): [`LogicalSize`](window.LogicalSize.md)

Converts the physical size to a logical one.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const factor = await appWindow.scaleFactor();
const size = await appWindow.innerSize();
const logical = size.toLogical(factor);
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

###### Returns

[`LogicalSize`](window.LogicalSize.md)

### WebviewWindow

Create new webview windows and get a handle to existing ones.

Windows are identified by a *label*  a unique identifier that can be used to reference it later.
It may only contain alphanumeric characters `a-zA-Z` plus the following special characters `-`, `/`, `:` and `_`.

**`Example`**

```typescript
// loading embedded asset:
const webview = new WebviewWindow('theUniqueLabel', {
  url: 'path/to/page.html'
});
// alternatively, load a remote URL:
const webview = new WebviewWindow('theUniqueLabel', {
  url: 'https://github.com/tauri-apps/tauri'
});

webview.once('tauri://created', function () {
 // webview window successfully created
});
webview.once('tauri://error', function (e) {
 // an error happened creating the webview window
});

// emit an event to the backend
await webview.emit("some event", "data");
// listen to an event from the backend
const unlisten = await webview.listen("event name", e => {});
unlisten();
```

#### Hierarchy

- [`WindowManager`](window.WindowManager.md)

  ↳ **`WebviewWindow`**

#### Constructors

##### constructor

**new WebviewWindow**(`label`, `options?`)

Creates a new WebviewWindow.

**`Example`**

```typescript
import { WebviewWindow } from '@tauri-apps/api/window';
const webview = new WebviewWindow('my-label', {
  url: 'https://github.com/tauri-apps/tauri'
});
webview.once('tauri://created', function () {
 // webview window successfully created
});
webview.once('tauri://error', function (e) {
 // an error happened creating the webview window
});
```

*

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The unique webview window label. Must be alphanumeric: `a-zA-Z-/:_`. |
| `options` | [`WindowOptions`](../interfaces/window.WindowOptions.md) | - |

###### Overrides

[WindowManager](window.WindowManager.md).[constructor](window.WindowManager.md#constructor)

#### Properties

##### label

 **label**: `string`

The window label. It is a unique identifier for the window, can be used to reference it later.

###### Inherited from

[WindowManager](window.WindowManager.md).[label](window.WindowManager.md#label)

###### Defined in

[window.ts:280](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L280)

___

##### listeners

 **listeners**: `Object`

Local event listeners.

###### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

###### Inherited from

[WindowManager](window.WindowManager.md).[listeners](window.WindowManager.md#listeners)

###### Defined in

[window.ts:282](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L282)

#### Methods

##### \_handleTauriEvent

**_handleTauriEvent**<`T`\>(`event`, `handler`): `boolean`

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> |

###### Returns

`boolean`

###### Inherited from

[WindowManager](window.WindowManager.md).[_handleTauriEvent](window.WindowManager.md#_handletaurievent)

___

##### center

**center**(): `Promise`<`void`\>

Centers the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.center();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[center](window.WindowManager.md#center)

___

##### close

**close**(): `Promise`<`void`\>

Closes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.close();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[close](window.WindowManager.md#close)

___

##### emit

**emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend, tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.emit('window-loaded', { loggedIn: true, token: 'authToken' });
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | Event payload. |

###### Returns

`Promise`<`void`\>

###### Inherited from

[WindowManager](window.WindowManager.md).[emit](window.WindowManager.md#emit)

___

##### hide

**hide**(): `Promise`<`void`\>

Sets the window visibility to false.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.hide();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[hide](window.WindowManager.md#hide)

___

##### innerPosition

**innerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const position = await appWindow.innerPosition();
```

###### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The window's inner position.

###### Inherited from

[WindowManager](window.WindowManager.md).[innerPosition](window.WindowManager.md#innerposition)

___

##### innerSize

**innerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const size = await appWindow.innerSize();
```

###### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The window's inner size.

###### Inherited from

[WindowManager](window.WindowManager.md).[innerSize](window.WindowManager.md#innersize)

___

##### isDecorated

**isDecorated**(): `Promise`<`boolean`\>

Gets the window's current decorated state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const decorated = await appWindow.isDecorated();
```

###### Returns

`Promise`<`boolean`\>

Whether the window is decorated or not.

###### Inherited from

[WindowManager](window.WindowManager.md).[isDecorated](window.WindowManager.md#isdecorated)

___

##### isFullscreen

**isFullscreen**(): `Promise`<`boolean`\>

Gets the window's current fullscreen state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const fullscreen = await appWindow.isFullscreen();
```

###### Returns

`Promise`<`boolean`\>

Whether the window is in fullscreen mode or not.

###### Inherited from

[WindowManager](window.WindowManager.md).[isFullscreen](window.WindowManager.md#isfullscreen)

___

##### isMaximized

**isMaximized**(): `Promise`<`boolean`\>

Gets the window's current maximized state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const maximized = await appWindow.isMaximized();
```

###### Returns

`Promise`<`boolean`\>

Whether the window is maximized or not.

###### Inherited from

[WindowManager](window.WindowManager.md).[isMaximized](window.WindowManager.md#ismaximized)

___

##### isResizable

**isResizable**(): `Promise`<`boolean`\>

Gets the window's current resizable state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const resizable = await appWindow.isResizable();
```

###### Returns

`Promise`<`boolean`\>

Whether the window is resizable or not.

###### Inherited from

[WindowManager](window.WindowManager.md).[isResizable](window.WindowManager.md#isresizable)

___

##### isVisible

**isVisible**(): `Promise`<`boolean`\>

Gets the window's current visible state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const visible = await appWindow.isVisible();
```

###### Returns

`Promise`<`boolean`\>

Whether the window is visible or not.

###### Inherited from

[WindowManager](window.WindowManager.md).[isVisible](window.WindowManager.md#isvisible)

___

##### listen

**listen**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an event emitted by the backend that is tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.listen<string>('state-changed', (event) => {
  console.log(`Got error: ${payload}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WindowManager](window.WindowManager.md).[listen](window.WindowManager.md#listen)

___

##### maximize

**maximize**(): `Promise`<`void`\>

Maximizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.maximize();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[maximize](window.WindowManager.md#maximize)

___

##### minimize

**minimize**(): `Promise`<`void`\>

Minimizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.minimize();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[minimize](window.WindowManager.md#minimize)

___

##### onCloseRequested

**onCloseRequested**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window close requested. Emitted when the user requests to closes the window.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
import { confirm } from '@tauri-apps/api/dialog';
const unlisten = await appWindow.onCloseRequested(async (event) => {
  const confirmed = await confirm('Are you sure?');
  if (!confirmed) {
    // user did not confirm closing the window; let's prevent it
    event.preventDefault();
  }
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`event`: [`CloseRequestedEvent`](window.CloseRequestedEvent.md)) => `void` |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WindowManager](window.WindowManager.md).[onCloseRequested](window.WindowManager.md#oncloserequested)

___

##### onFileDropEvent

**onFileDropEvent**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to a file drop event.
The listener is triggered when the user hovers the selected files on the window,
drops the files or cancels the operation.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onFileDropEvent((event) => {
 if (event.payload.type === 'hover') {
   console.log('User hovering', event.payload.paths);
 } else if (event.payload.type === 'drop') {
   console.log('User dropped', event.payload.paths);
 } else {
   console.log('File drop cancelled');
 }
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`FileDropEvent`](../modules/window.md#filedropevent)\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WindowManager](window.WindowManager.md).[onFileDropEvent](window.WindowManager.md#onfiledropevent)

___

##### onFocusChanged

**onFocusChanged**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window focus change.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onFocusChanged(({ payload: focused }) => {
 console.log('Focus changed, window is focused? ' + focused);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`boolean`\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WindowManager](window.WindowManager.md).[onFocusChanged](window.WindowManager.md#onfocuschanged)

___

##### onMenuClicked

**onMenuClicked**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to the window menu item click. The payload is the item id.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onMenuClicked(({ payload: menuId }) => {
 console.log('Menu clicked: ' + menuId);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`string`\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WindowManager](window.WindowManager.md).[onMenuClicked](window.WindowManager.md#onmenuclicked)

___

##### onMoved

**onMoved**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window move.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onMoved(({ payload: position }) => {
 console.log('Window moved', position);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`PhysicalPosition`](window.PhysicalPosition.md)\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WindowManager](window.WindowManager.md).[onMoved](window.WindowManager.md#onmoved)

___

##### onResized

**onResized**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window resize.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onResized(({ payload: size }) => {
 console.log('Window resized', size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`PhysicalSize`](window.PhysicalSize.md)\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WindowManager](window.WindowManager.md).[onResized](window.WindowManager.md#onresized)

___

##### onScaleChanged

**onScaleChanged**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window scale change. Emitted when the window's scale factor has changed.
The following user actions can cause DPI changes:
- Changing the display's resolution.
- Changing the display's scale factor (e.g. in Control Panel on Windows).
- Moving the window to a display with a different scale factor.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onScaleChanged(({ payload }) => {
 console.log('Scale changed', payload.scaleFactor, payload.size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`ScaleFactorChanged`](../interfaces/window.ScaleFactorChanged.md)\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WindowManager](window.WindowManager.md).[onScaleChanged](window.WindowManager.md#onscalechanged)

___

##### onThemeChanged

**onThemeChanged**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to the system theme change.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onThemeChanged(({ payload: theme }) => {
 console.log('New theme: ' + theme);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`Theme`](../modules/window.md#theme)\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WindowManager](window.WindowManager.md).[onThemeChanged](window.WindowManager.md#onthemechanged)

___

##### once

**once**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an one-off event emitted by the backend that is tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.once<null>('initialized', (event) => {
  console.log(`Window initialized!`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WindowManager](window.WindowManager.md).[once](window.WindowManager.md#once)

___

##### outerPosition

**outerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const position = await appWindow.outerPosition();
```

###### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The window's outer position.

###### Inherited from

[WindowManager](window.WindowManager.md).[outerPosition](window.WindowManager.md#outerposition)

___

##### outerSize

**outerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const size = await appWindow.outerSize();
```

###### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The window's outer size.

###### Inherited from

[WindowManager](window.WindowManager.md).[outerSize](window.WindowManager.md#outersize)

___

##### requestUserAttention

**requestUserAttention**(`requestType`): `Promise`<`void`\>

Requests user attention to the window, this has no effect if the application
is already focused. How requesting for user attention manifests is platform dependent,
see `UserAttentionType` for details.

Providing `null` will unset the request for user attention. Unsetting the request for
user attention might not be done automatically by the WM when the window receives input.

###### Platform-specific

- **macOS:** `null` has no effect.
- **Linux:** Urgency levels have the same effect.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.requestUserAttention();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `requestType` | ``null`` \| [`UserAttentionType`](../enums/window.UserAttentionType.md) |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[requestUserAttention](window.WindowManager.md#requestuserattention)

___

##### scaleFactor

**scaleFactor**(): `Promise`<`number`\>

The scale factor that can be used to map physical pixels to logical pixels.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const factor = await appWindow.scaleFactor();
```

###### Returns

`Promise`<`number`\>

The window's monitor scale factor.

###### Inherited from

[WindowManager](window.WindowManager.md).[scaleFactor](window.WindowManager.md#scalefactor)

___

##### setAlwaysOnTop

**setAlwaysOnTop**(`alwaysOnTop`): `Promise`<`void`\>

Whether the window should always be on top of other windows.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setAlwaysOnTop(true);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alwaysOnTop` | `boolean` | Whether the window should always be on top of other windows or not. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setAlwaysOnTop](window.WindowManager.md#setalwaysontop)

___

##### setCursorGrab

**setCursorGrab**(`grab`): `Promise`<`void`\>

Grabs the cursor, preventing it from leaving the window.

There's no guarantee that the cursor will be hidden. You should
hide it by yourself if you want so.

###### Platform-specific

- **Linux:** Unsupported.
- **macOS:** This locks the cursor in a fixed location, which looks visually awkward.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorGrab(true);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `grab` | `boolean` | `true` to grab the cursor icon, `false` to release it. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setCursorGrab](window.WindowManager.md#setcursorgrab)

___

##### setCursorIcon

**setCursorIcon**(`icon`): `Promise`<`void`\>

Modifies the cursor icon of the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorIcon('help');
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | [`CursorIcon`](../modules/window.md#cursoricon) | The new cursor icon. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setCursorIcon](window.WindowManager.md#setcursoricon)

___

##### setCursorPosition

**setCursorPosition**(`position`): `Promise`<`void`\>

Changes the position of the cursor in window coordinates.

**`Example`**

```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
await appWindow.setCursorPosition(new LogicalPosition(600, 300));
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`PhysicalPosition`](window.PhysicalPosition.md) \| [`LogicalPosition`](window.LogicalPosition.md) | The new cursor position. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setCursorPosition](window.WindowManager.md#setcursorposition)

___

##### setCursorVisible

**setCursorVisible**(`visible`): `Promise`<`void`\>

Modifies the cursor's visibility.

###### Platform-specific

- **Windows:** The cursor is only hidden within the confines of the window.
- **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
  outside of the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorVisible(false);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | If `false`, this will hide the cursor. If `true`, this will show the cursor. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setCursorVisible](window.WindowManager.md#setcursorvisible)

___

##### setDecorations

**setDecorations**(`decorations`): `Promise`<`void`\>

Whether the window should have borders and bars.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setDecorations(false);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decorations` | `boolean` | Whether the window should have borders and bars. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setDecorations](window.WindowManager.md#setdecorations)

___

##### setFocus

**setFocus**(): `Promise`<`void`\>

Bring the window to front and focus.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setFocus();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setFocus](window.WindowManager.md#setfocus)

___

##### setFullscreen

**setFullscreen**(`fullscreen`): `Promise`<`void`\>

Sets the window fullscreen state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setFullscreen(true);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullscreen` | `boolean` | Whether the window should go to fullscreen or not. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setFullscreen](window.WindowManager.md#setfullscreen)

___

##### setIcon

**setIcon**(`icon`): `Promise`<`void`\>

Sets the window icon.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setIcon('/tauri/awesome.png');
```

Note that you need the `icon-ico` or `icon-png` Cargo features to use this API.
To enable it, change your Cargo.toml file:
```toml
[dependencies]
tauri = { version = "...", features = ["...", "icon-png"] }
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | `string` \| `Uint8Array` | Icon bytes or path to the icon file. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setIcon](window.WindowManager.md#seticon)

___

##### setMaxSize

**setMaxSize**(`size`): `Promise`<`void`\>

Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.

**`Example`**

```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window';
await appWindow.setMaxSize(new LogicalSize(600, 500));
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| ``null`` \| [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size, or `null` to unset the constraint. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setMaxSize](window.WindowManager.md#setmaxsize)

___

##### setMinSize

**setMinSize**(`size`): `Promise`<`void`\>

Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.

**`Example`**

```typescript
import { appWindow, PhysicalSize } from '@tauri-apps/api/window';
await appWindow.setMinSize(new PhysicalSize(600, 500));
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| ``null`` \| [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size, or `null` to unset the constraint. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setMinSize](window.WindowManager.md#setminsize)

___

##### setPosition

**setPosition**(`position`): `Promise`<`void`\>

Sets the window outer position.

**`Example`**

```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
await appWindow.setPosition(new LogicalPosition(600, 500));
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`PhysicalPosition`](window.PhysicalPosition.md) \| [`LogicalPosition`](window.LogicalPosition.md) | The new position, in logical or physical pixels. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setPosition](window.WindowManager.md#setposition)

___

##### setResizable

**setResizable**(`resizable`): `Promise`<`void`\>

Updates the window resizable flag.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setResizable(false);
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `resizable` | `boolean` |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setResizable](window.WindowManager.md#setresizable)

___

##### setSize

**setSize**(`size`): `Promise`<`void`\>

Resizes the window with a new inner size.

**`Example`**

```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window';
await appWindow.setSize(new LogicalSize(600, 500));
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setSize](window.WindowManager.md#setsize)

___

##### setSkipTaskbar

**setSkipTaskbar**(`skip`): `Promise`<`void`\>

Whether to show the window icon in the task bar or not.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setSkipTaskbar(true);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skip` | `boolean` | true to hide window icon, false to show it. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setSkipTaskbar](window.WindowManager.md#setskiptaskbar)

___

##### setTitle

**setTitle**(`title`): `Promise`<`void`\>

Sets the window title.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setTitle('Tauri');
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The new title |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[setTitle](window.WindowManager.md#settitle)

___

##### show

**show**(): `Promise`<`void`\>

Sets the window visibility to true.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.show();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[show](window.WindowManager.md#show)

___

##### startDragging

**startDragging**(): `Promise`<`void`\>

Starts dragging the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.startDragging();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[startDragging](window.WindowManager.md#startdragging)

___

##### theme

**theme**(): `Promise`<``null`` \| [`Theme`](../modules/window.md#theme)\>

Gets the window's current theme.

###### Platform-specific

- **Linux:** Not implemented, always returns `light`.
- **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const theme = await appWindow.theme();
```

###### Returns

`Promise`<``null`` \| [`Theme`](../modules/window.md#theme)\>

The window theme.

###### Inherited from

[WindowManager](window.WindowManager.md).[theme](window.WindowManager.md#theme)

___

##### toggleMaximize

**toggleMaximize**(): `Promise`<`void`\>

Toggles the window maximized state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.toggleMaximize();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[toggleMaximize](window.WindowManager.md#togglemaximize)

___

##### unmaximize

**unmaximize**(): `Promise`<`void`\>

Unmaximizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.unmaximize();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[unmaximize](window.WindowManager.md#unmaximize)

___

##### unminimize

**unminimize**(): `Promise`<`void`\>

Unminimizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.unminimize();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

###### Inherited from

[WindowManager](window.WindowManager.md).[unminimize](window.WindowManager.md#unminimize)

___

##### getByLabel

`Static` **getByLabel**(`label`): ``null`` \| [`WebviewWindow`](window.WebviewWindow.md)

Gets the WebviewWindow for the webview associated with the given label.

**`Example`**

```typescript
import { WebviewWindow } from '@tauri-apps/api/window';
const mainWindow = WebviewWindow.getByLabel('main');
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The webview window label. |

###### Returns

``null`` \| [`WebviewWindow`](window.WebviewWindow.md)

The WebviewWindow instance to communicate with the webview or null if the webview doesn't exist.

### WebviewWindowHandle

A webview window handle allows emitting and listening to events from the backend that are tied to the window.

#### Hierarchy

- **`WebviewWindowHandle`**

  ↳ [`WindowManager`](window.WindowManager.md)

#### Constructors

##### constructor

**new WebviewWindowHandle**(`label`)

###### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Properties

##### label

 **label**: `string`

The window label. It is a unique identifier for the window, can be used to reference it later.

###### Defined in

[window.ts:280](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L280)

___

##### listeners

 **listeners**: `Object`

Local event listeners.

###### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

###### Defined in

[window.ts:282](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L282)

#### Methods

##### \_handleTauriEvent

**_handleTauriEvent**<`T`\>(`event`, `handler`): `boolean`

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> |

###### Returns

`boolean`

___

##### emit

**emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend, tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.emit('window-loaded', { loggedIn: true, token: 'authToken' });
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | Event payload. |

###### Returns

`Promise`<`void`\>

___

##### listen

**listen**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an event emitted by the backend that is tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.listen<string>('state-changed', (event) => {
  console.log(`Got error: ${payload}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

##### once

**once**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an one-off event emitted by the backend that is tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.once<null>('initialized', (event) => {
  console.log(`Window initialized!`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

### WindowManager

Manage the current window object.

#### Hierarchy

- [`WebviewWindowHandle`](window.WebviewWindowHandle.md)

  ↳ **`WindowManager`**

  ↳↳ [`WebviewWindow`](window.WebviewWindow.md)

#### Constructors

##### constructor

**new WindowManager**(`label`)

###### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

###### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[constructor](window.WebviewWindowHandle.md#constructor)

#### Properties

##### label

 **label**: `string`

The window label. It is a unique identifier for the window, can be used to reference it later.

###### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[label](window.WebviewWindowHandle.md#label)

###### Defined in

[window.ts:280](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L280)

___

##### listeners

 **listeners**: `Object`

Local event listeners.

###### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

###### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[listeners](window.WebviewWindowHandle.md#listeners)

###### Defined in

[window.ts:282](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L282)

#### Methods

##### \_handleTauriEvent

**_handleTauriEvent**<`T`\>(`event`, `handler`): `boolean`

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> |

###### Returns

`boolean`

###### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[_handleTauriEvent](window.WebviewWindowHandle.md#_handletaurievent)

___

##### center

**center**(): `Promise`<`void`\>

Centers the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.center();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### close

**close**(): `Promise`<`void`\>

Closes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.close();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### emit

**emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend, tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.emit('window-loaded', { loggedIn: true, token: 'authToken' });
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | Event payload. |

###### Returns

`Promise`<`void`\>

###### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[emit](window.WebviewWindowHandle.md#emit)

___

##### hide

**hide**(): `Promise`<`void`\>

Sets the window visibility to false.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.hide();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### innerPosition

**innerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const position = await appWindow.innerPosition();
```

###### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The window's inner position.

___

##### innerSize

**innerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const size = await appWindow.innerSize();
```

###### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The window's inner size.

___

##### isDecorated

**isDecorated**(): `Promise`<`boolean`\>

Gets the window's current decorated state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const decorated = await appWindow.isDecorated();
```

###### Returns

`Promise`<`boolean`\>

Whether the window is decorated or not.

___

##### isFullscreen

**isFullscreen**(): `Promise`<`boolean`\>

Gets the window's current fullscreen state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const fullscreen = await appWindow.isFullscreen();
```

###### Returns

`Promise`<`boolean`\>

Whether the window is in fullscreen mode or not.

___

##### isMaximized

**isMaximized**(): `Promise`<`boolean`\>

Gets the window's current maximized state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const maximized = await appWindow.isMaximized();
```

###### Returns

`Promise`<`boolean`\>

Whether the window is maximized or not.

___

##### isResizable

**isResizable**(): `Promise`<`boolean`\>

Gets the window's current resizable state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const resizable = await appWindow.isResizable();
```

###### Returns

`Promise`<`boolean`\>

Whether the window is resizable or not.

___

##### isVisible

**isVisible**(): `Promise`<`boolean`\>

Gets the window's current visible state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const visible = await appWindow.isVisible();
```

###### Returns

`Promise`<`boolean`\>

Whether the window is visible or not.

___

##### listen

**listen**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an event emitted by the backend that is tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.listen<string>('state-changed', (event) => {
  console.log(`Got error: ${payload}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[listen](window.WebviewWindowHandle.md#listen)

___

##### maximize

**maximize**(): `Promise`<`void`\>

Maximizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.maximize();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### minimize

**minimize**(): `Promise`<`void`\>

Minimizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.minimize();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### onCloseRequested

**onCloseRequested**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window close requested. Emitted when the user requests to closes the window.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
import { confirm } from '@tauri-apps/api/dialog';
const unlisten = await appWindow.onCloseRequested(async (event) => {
  const confirmed = await confirm('Are you sure?');
  if (!confirmed) {
    // user did not confirm closing the window; let's prevent it
    event.preventDefault();
  }
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | (`event`: [`CloseRequestedEvent`](window.CloseRequestedEvent.md)) => `void` |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

##### onFileDropEvent

**onFileDropEvent**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to a file drop event.
The listener is triggered when the user hovers the selected files on the window,
drops the files or cancels the operation.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onFileDropEvent((event) => {
 if (event.payload.type === 'hover') {
   console.log('User hovering', event.payload.paths);
 } else if (event.payload.type === 'drop') {
   console.log('User dropped', event.payload.paths);
 } else {
   console.log('File drop cancelled');
 }
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`FileDropEvent`](../modules/window.md#filedropevent)\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

##### onFocusChanged

**onFocusChanged**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window focus change.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onFocusChanged(({ payload: focused }) => {
 console.log('Focus changed, window is focused? ' + focused);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`boolean`\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

##### onMenuClicked

**onMenuClicked**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to the window menu item click. The payload is the item id.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onMenuClicked(({ payload: menuId }) => {
 console.log('Menu clicked: ' + menuId);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`string`\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

##### onMoved

**onMoved**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window move.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onMoved(({ payload: position }) => {
 console.log('Window moved', position);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`PhysicalPosition`](window.PhysicalPosition.md)\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

##### onResized

**onResized**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window resize.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onResized(({ payload: size }) => {
 console.log('Window resized', size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`PhysicalSize`](window.PhysicalSize.md)\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

##### onScaleChanged

**onScaleChanged**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to window scale change. Emitted when the window's scale factor has changed.
The following user actions can cause DPI changes:
- Changing the display's resolution.
- Changing the display's scale factor (e.g. in Control Panel on Windows).
- Moving the window to a display with a different scale factor.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onScaleChanged(({ payload }) => {
 console.log('Scale changed', payload.scaleFactor, payload.size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`ScaleFactorChanged`](../interfaces/window.ScaleFactorChanged.md)\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

##### onThemeChanged

**onThemeChanged**(`handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to the system theme change.

**`Example`**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onThemeChanged(({ payload: theme }) => {
 console.log('New theme: ' + theme);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<[`Theme`](../modules/window.md#theme)\> |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

##### once

**once**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an one-off event emitted by the backend that is tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.once<null>('initialized', (event) => {
  console.log(`Window initialized!`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Type parameters

| Name |
| :------ |
| `T` |

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

###### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[WebviewWindowHandle](window.WebviewWindowHandle.md).[once](window.WebviewWindowHandle.md#once)

___

##### outerPosition

**outerPosition**(): `Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const position = await appWindow.outerPosition();
```

###### Returns

`Promise`<[`PhysicalPosition`](window.PhysicalPosition.md)\>

The window's outer position.

___

##### outerSize

**outerSize**(): `Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const size = await appWindow.outerSize();
```

###### Returns

`Promise`<[`PhysicalSize`](window.PhysicalSize.md)\>

The window's outer size.

___

##### requestUserAttention

**requestUserAttention**(`requestType`): `Promise`<`void`\>

Requests user attention to the window, this has no effect if the application
is already focused. How requesting for user attention manifests is platform dependent,
see `UserAttentionType` for details.

Providing `null` will unset the request for user attention. Unsetting the request for
user attention might not be done automatically by the WM when the window receives input.

###### Platform-specific

- **macOS:** `null` has no effect.
- **Linux:** Urgency levels have the same effect.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.requestUserAttention();
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `requestType` | ``null`` \| [`UserAttentionType`](../enums/window.UserAttentionType.md) |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### scaleFactor

**scaleFactor**(): `Promise`<`number`\>

The scale factor that can be used to map physical pixels to logical pixels.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const factor = await appWindow.scaleFactor();
```

###### Returns

`Promise`<`number`\>

The window's monitor scale factor.

___

##### setAlwaysOnTop

**setAlwaysOnTop**(`alwaysOnTop`): `Promise`<`void`\>

Whether the window should always be on top of other windows.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setAlwaysOnTop(true);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `alwaysOnTop` | `boolean` | Whether the window should always be on top of other windows or not. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setCursorGrab

**setCursorGrab**(`grab`): `Promise`<`void`\>

Grabs the cursor, preventing it from leaving the window.

There's no guarantee that the cursor will be hidden. You should
hide it by yourself if you want so.

###### Platform-specific

- **Linux:** Unsupported.
- **macOS:** This locks the cursor in a fixed location, which looks visually awkward.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorGrab(true);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `grab` | `boolean` | `true` to grab the cursor icon, `false` to release it. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setCursorIcon

**setCursorIcon**(`icon`): `Promise`<`void`\>

Modifies the cursor icon of the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorIcon('help');
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | [`CursorIcon`](../modules/window.md#cursoricon) | The new cursor icon. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setCursorPosition

**setCursorPosition**(`position`): `Promise`<`void`\>

Changes the position of the cursor in window coordinates.

**`Example`**

```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
await appWindow.setCursorPosition(new LogicalPosition(600, 300));
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`PhysicalPosition`](window.PhysicalPosition.md) \| [`LogicalPosition`](window.LogicalPosition.md) | The new cursor position. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setCursorVisible

**setCursorVisible**(`visible`): `Promise`<`void`\>

Modifies the cursor's visibility.

###### Platform-specific

- **Windows:** The cursor is only hidden within the confines of the window.
- **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
  outside of the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorVisible(false);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | If `false`, this will hide the cursor. If `true`, this will show the cursor. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setDecorations

**setDecorations**(`decorations`): `Promise`<`void`\>

Whether the window should have borders and bars.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setDecorations(false);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `decorations` | `boolean` | Whether the window should have borders and bars. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setFocus

**setFocus**(): `Promise`<`void`\>

Bring the window to front and focus.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setFocus();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setFullscreen

**setFullscreen**(`fullscreen`): `Promise`<`void`\>

Sets the window fullscreen state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setFullscreen(true);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullscreen` | `boolean` | Whether the window should go to fullscreen or not. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setIcon

**setIcon**(`icon`): `Promise`<`void`\>

Sets the window icon.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setIcon('/tauri/awesome.png');
```

Note that you need the `icon-ico` or `icon-png` Cargo features to use this API.
To enable it, change your Cargo.toml file:
```toml
[dependencies]
tauri = { version = "...", features = ["...", "icon-png"] }
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | `string` \| `Uint8Array` | Icon bytes or path to the icon file. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setMaxSize

**setMaxSize**(`size`): `Promise`<`void`\>

Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.

**`Example`**

```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window';
await appWindow.setMaxSize(new LogicalSize(600, 500));
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| ``null`` \| [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size, or `null` to unset the constraint. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setMinSize

**setMinSize**(`size`): `Promise`<`void`\>

Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.

**`Example`**

```typescript
import { appWindow, PhysicalSize } from '@tauri-apps/api/window';
await appWindow.setMinSize(new PhysicalSize(600, 500));
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| ``null`` \| [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size, or `null` to unset the constraint. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setPosition

**setPosition**(`position`): `Promise`<`void`\>

Sets the window outer position.

**`Example`**

```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
await appWindow.setPosition(new LogicalPosition(600, 500));
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`PhysicalPosition`](window.PhysicalPosition.md) \| [`LogicalPosition`](window.LogicalPosition.md) | The new position, in logical or physical pixels. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setResizable

**setResizable**(`resizable`): `Promise`<`void`\>

Updates the window resizable flag.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setResizable(false);
```

###### Parameters

| Name | Type |
| :------ | :------ |
| `resizable` | `boolean` |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setSize

**setSize**(`size`): `Promise`<`void`\>

Resizes the window with a new inner size.

**`Example`**

```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window';
await appWindow.setSize(new LogicalSize(600, 500));
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`PhysicalSize`](window.PhysicalSize.md) \| [`LogicalSize`](window.LogicalSize.md) | The logical or physical inner size. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setSkipTaskbar

**setSkipTaskbar**(`skip`): `Promise`<`void`\>

Whether to show the window icon in the task bar or not.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setSkipTaskbar(true);
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skip` | `boolean` | true to hide window icon, false to show it. |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### setTitle

**setTitle**(`title`): `Promise`<`void`\>

Sets the window title.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setTitle('Tauri');
```

###### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The new title |

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### show

**show**(): `Promise`<`void`\>

Sets the window visibility to true.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.show();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### startDragging

**startDragging**(): `Promise`<`void`\>

Starts dragging the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.startDragging();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### theme

**theme**(): `Promise`<``null`` \| [`Theme`](../modules/window.md#theme)\>

Gets the window's current theme.

###### Platform-specific

- **Linux:** Not implemented, always returns `light`.
- **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const theme = await appWindow.theme();
```

###### Returns

`Promise`<``null`` \| [`Theme`](../modules/window.md#theme)\>

The window theme.

___

##### toggleMaximize

**toggleMaximize**(): `Promise`<`void`\>

Toggles the window maximized state.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.toggleMaximize();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### unmaximize

**unmaximize**(): `Promise`<`void`\>

Unmaximizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.unmaximize();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

##### unminimize

**unminimize**(): `Promise`<`void`\>

Unminimizes the window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.unminimize();
```

###### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.


## Interfaces

### Monitor

Allows you to retrieve information about a given monitor.

#### Properties

##### name

 **name**: ``null`` \| `string`

Human-readable name of the monitor

###### Defined in

[window.ts:72](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L72)

___

##### position

 **position**: [`PhysicalPosition`](../classes/window.PhysicalPosition.md)

the Top-left corner position of the monitor relative to the larger full screen area.

###### Defined in

[window.ts:76](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L76)

___

##### scaleFactor

 **scaleFactor**: `number`

The scale factor that can be used to map physical pixels to logical pixels.

###### Defined in

[window.ts:78](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L78)

___

##### size

 **size**: [`PhysicalSize`](../classes/window.PhysicalSize.md)

The monitor's resolution.

###### Defined in

[window.ts:74](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L74)

### ScaleFactorChanged

The payload for the `scaleChange` event.

#### Properties

##### scaleFactor

 **scaleFactor**: `number`

The new window scale factor.

###### Defined in

[window.ts:84](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L84)

___

##### size

 **size**: [`PhysicalSize`](../classes/window.PhysicalSize.md)

The new window size

###### Defined in

[window.ts:86](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L86)

### WindowOptions

Configuration for the window to create.

#### Properties

##### alwaysOnTop

 `Optional` **alwaysOnTop**: `boolean`

Whether the window should always be on top of other windows or not.

###### Defined in

[window.ts:1939](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1939)

___

##### center

 `Optional` **center**: `boolean`

Show window in the center of the screen..

###### Defined in

[window.ts:1901](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1901)

___

##### decorations

 `Optional` **decorations**: `boolean`

Whether the window should have borders and bars or not.

###### Defined in

[window.ts:1937](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1937)

___

##### fileDropEnabled

 `Optional` **fileDropEnabled**: `boolean`

Whether the file drop is enabled or not on the webview. By default it is enabled.

Disabling it is required to use drag and drop on the frontend on Windows.

###### Defined in

[window.ts:1947](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1947)

___

##### focus

 `Optional` **focus**: `boolean`

Whether the window will be initially hidden or focused.

###### Defined in

[window.ts:1925](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1925)

___

##### fullscreen

 `Optional` **fullscreen**: `boolean`

Whether the window is in fullscreen mode or not.

###### Defined in

[window.ts:1923](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1923)

___

##### height

 `Optional` **height**: `number`

The initial height.

###### Defined in

[window.ts:1909](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1909)

___

##### maxHeight

 `Optional` **maxHeight**: `number`

The maximum height. Only applies if `maxWidth` is also set.

###### Defined in

[window.ts:1917](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1917)

___

##### maxWidth

 `Optional` **maxWidth**: `number`

The maximum width. Only applies if `maxHeight` is also set.

###### Defined in

[window.ts:1915](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1915)

___

##### maximized

 `Optional` **maximized**: `boolean`

Whether the window should be maximized upon creation or not.

###### Defined in

[window.ts:1933](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1933)

___

##### minHeight

 `Optional` **minHeight**: `number`

The minimum height. Only applies if `minWidth` is also set.

###### Defined in

[window.ts:1913](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1913)

___

##### minWidth

 `Optional` **minWidth**: `number`

The minimum width. Only applies if `minHeight` is also set.

###### Defined in

[window.ts:1911](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1911)

___

##### resizable

 `Optional` **resizable**: `boolean`

Whether the window is resizable or not.

###### Defined in

[window.ts:1919](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1919)

___

##### skipTaskbar

 `Optional` **skipTaskbar**: `boolean`

Whether or not the window icon should be added to the taskbar.

###### Defined in

[window.ts:1941](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1941)

___

##### theme

 `Optional` **theme**: [`Theme`](../modules/window.md#theme)

The initial window theme. Defaults to the system theme.

Only implemented on Windows and macOS 10.14+.

###### Defined in

[window.ts:1953](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1953)

___

##### title

 `Optional` **title**: `string`

Window title.

###### Defined in

[window.ts:1921](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1921)

___

##### transparent

 `Optional` **transparent**: `boolean`

Whether the window is transparent or not.
Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > tauri > macOSPrivateApi`.
WARNING: Using private APIs on `macOS` prevents your application from being accepted to the `App Store`.

###### Defined in

[window.ts:1931](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1931)

___

##### url

 `Optional` **url**: `string`

Remote URL or local file path to open.

- URL such as `https://github.com/tauri-apps` is opened directly on a Tauri window.
- data: URL such as `data:text/html,<html>...` is only supported with the `window-data-url` Cargo feature for the `tauri` dependency.
- local file path or route such as `/path/to/page.html` or `/users` is appended to the application URL (the devServer URL on development, or `tauri://localhost/` and `https://tauri.localhost/` on production).

###### Defined in

[window.ts:1899](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1899)

___

##### visible

 `Optional` **visible**: `boolean`

Whether the window should be immediately visible upon creation or not.

###### Defined in

[window.ts:1935](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1935)

___

##### width

 `Optional` **width**: `number`

The initial width.

###### Defined in

[window.ts:1907](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1907)

___

##### x

 `Optional` **x**: `number`

The initial vertical position. Only applies if `y` is also set.

###### Defined in

[window.ts:1903](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1903)

___

##### y

 `Optional` **y**: `number`

The initial horizontal position. Only applies if `x` is also set.

###### Defined in

[window.ts:1905](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1905)


## Type Aliases

### CursorIcon

 **CursorIcon**: ``"default"`` \| ``"crosshair"`` \| ``"hand"`` \| ``"arrow"`` \| ``"move"`` \| ``"text"`` \| ``"wait"`` \| ``"help"`` \| ``"progress"`` \| ``"notAllowed"`` \| ``"contextMenu"`` \| ``"cell"`` \| ``"verticalText"`` \| ``"alias"`` \| ``"copy"`` \| ``"noDrop"`` \| ``"grab"`` \| ``"grabbing"`` \| ``"allScroll"`` \| ``"zoomIn"`` \| ``"zoomOut"`` \| ``"eResize"`` \| ``"nResize"`` \| ``"neResize"`` \| ``"nwResize"`` \| ``"sResize"`` \| ``"seResize"`` \| ``"swResize"`` \| ``"wResize"`` \| ``"ewResize"`` \| ``"nsResize"`` \| ``"neswResize"`` \| ``"nwseResize"`` \| ``"colResize"`` \| ``"rowResize"``

#### Defined in

[window.ts:202](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L202)

___

### FileDropEvent

 **FileDropEvent**: { `paths`: `string`[] ; `type`: ``"hover"``  } \| { `paths`: `string`[] ; `type`: ``"drop"``  } \| { `type`: ``"cancel"``  }

The file drop event types.

#### Defined in

[window.ts:90](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L90)

___

### Theme

 **Theme**: ``"light"`` \| ``"dark"``

#### Defined in

[window.ts:67](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L67)

## Variables

### appWindow

 **appWindow**: [`WebviewWindow`](../classes/window.WebviewWindow.md)

The WebviewWindow for the current window.

#### Defined in

[window.ts:1871](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L1871)

## Functions

### availableMonitors

**availableMonitors**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md)[]\>

Returns the list of all the monitors available on the system.

**`Example`**

```typescript
import { availableMonitors } from '@tauri-apps/api/window';
const monitors = availableMonitors();
```

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md)[]\>

___

### currentMonitor

**currentMonitor**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

Returns the monitor on which the window currently resides.
Returns `null` if current monitor can't be detected.

**`Example`**

```typescript
import { currentMonitor } from '@tauri-apps/api/window';
const monitor = currentMonitor();
```

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

___

### getAll

**getAll**(): [`WebviewWindow`](../classes/window.WebviewWindow.md)[]

Gets an instance of `WebviewWindow` for all available webview windows.

#### Returns

[`WebviewWindow`](../classes/window.WebviewWindow.md)[]

The list of WebviewWindow.

___

### getCurrent

**getCurrent**(): [`WebviewWindow`](../classes/window.WebviewWindow.md)

Get an instance of `WebviewWindow` for the current webview window.

#### Returns

[`WebviewWindow`](../classes/window.WebviewWindow.md)

The current WebviewWindow.

___

### primaryMonitor

**primaryMonitor**(): `Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>

Returns the primary monitor of the system.
Returns `null` if it can't identify any monitor as a primary one.

**`Example`**

```typescript
import { primaryMonitor } from '@tauri-apps/api/window';
const monitor = primaryMonitor();
```

#### Returns

`Promise`<[`Monitor`](../interfaces/window.Monitor.md) \| ``null``\>
