# window

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
        "setMaximizable": true,
        "setMinimizable": true,
        "setClosable": true,
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
        "setContentProtected": true,
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
        "setIgnoreCursorEvents": true,
        "startDragging": true,
        "print": true
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Window events

Events can be listened to using `appWindow.listen`:
```typescript
import { appWindow } from "@tauri-apps/api/window";
appWindow.listen("my-window-event", ({ event, payload }) => { });
```

## Enumerations

### `UserAttentionType`

Attention type to request on a window.

**Since**: 1.0.0

#### Enumeration Members

| Name | Type | Description | Defined in |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="window.UserAttentionType.Critical"><a href="#window.UserAttentionType.Critical">`Critical`</a></div> | `1` | #### Platform-specific<br/>- **macOS:** Bounces the dock icon until the application is in focus.<br/>- **Windows:** Flashes both the window and the taskbar button until the application is in focus. | [window.ts:228](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L228) |
| <div class="anchor-with-padding" id="window.UserAttentionType.Informational"><a href="#window.UserAttentionType.Informational">`Informational`</a></div> | `2` | #### Platform-specific<br/>- **macOS:** Bounces the dock icon once.<br/>- **Windows:** Flashes the taskbar button until the application is in focus. | [window.ts:234](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L234) |

## Classes

### `CloseRequestedEvent`

**Since**: 1.0.2

#### Constructors

##### `constructor`

> **new CloseRequestedEvent**(`event`: [`Event`](event.md#event)<`null`\>): [`CloseRequestedEvent`](window.md#closerequestedevent)

**Parameters**

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](event.md#event)<`null`\> |

**Defined in:** [window.ts:2179](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2179)

#### Properties

##### `event`

>  **event**: [`EventName`](event.md#eventname)

Event name

**Defined in:** [window.ts:2172](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2172)

##### `id`

>  **id**: `number`

Event identifier used to unlisten

**Defined in:** [window.ts:2176](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2176)

##### `windowLabel`

>  **windowLabel**: `string`

The label of the window that emitted this event.

**Defined in:** [window.ts:2174](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2174)

#### Methods

##### `isPreventDefault`

> **isPreventDefault**(): `boolean`

**Returns: **`boolean`

##### `preventDefault`

> **preventDefault**(): `void`

**Returns: **`void`

### `LogicalPosition`

A position represented in logical pixels.

**Since**: 1.0.0

#### Constructors

##### `constructor`

> **new LogicalPosition**(`x`: `number`, `y`: `number`): [`LogicalPosition`](window.md#logicalposition)

**Parameters**

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

**Defined in:** [window.ts:166](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L166)

#### Properties

##### `type`

>  **type**: `string` = `'Logical'`

**Defined in:** [window.ts:162](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L162)

##### `x`

>  **x**: `number`

**Defined in:** [window.ts:163](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L163)

##### `y`

>  **y**: `number`

**Defined in:** [window.ts:164](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L164)

### `LogicalSize`

A size represented in logical pixels.

**Since**: 1.0.0

#### Constructors

##### `constructor`

> **new LogicalSize**(`width`: `number`, `height`: `number`): [`LogicalSize`](window.md#logicalsize)

**Parameters**

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

**Defined in:** [window.ts:120](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L120)

#### Properties

##### `height`

>  **height**: `number`

**Defined in:** [window.ts:118](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L118)

##### `type`

>  **type**: `string` = `'Logical'`

**Defined in:** [window.ts:116](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L116)

##### `width`

>  **width**: `number`

**Defined in:** [window.ts:117](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L117)

### `PhysicalPosition`

A position represented in physical pixels.

**Since**: 1.0.0

#### Constructors

##### `constructor`

> **new PhysicalPosition**(`x`: `number`, `y`: `number`): [`PhysicalPosition`](window.md#physicalposition)

**Parameters**

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

**Defined in:** [window.ts:182](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L182)

#### Properties

##### `type`

>  **type**: `string` = `'Physical'`

**Defined in:** [window.ts:178](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L178)

##### `x`

>  **x**: `number`

**Defined in:** [window.ts:179](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L179)

##### `y`

>  **y**: `number`

**Defined in:** [window.ts:180](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L180)

#### Methods

##### `toLogical`

> **toLogical**(`scaleFactor`: `number`): [`LogicalPosition`](window.md#logicalposition)

Converts the physical position to a logical one.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const factor = await appWindow.scaleFactor();
const position = await appWindow.innerPosition();
const logical = position.toLogical(factor);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

**Returns: **[`LogicalPosition`](window.md#logicalposition)

### `PhysicalSize`

A size represented in physical pixels.

**Since**: 1.0.0

#### Constructors

##### `constructor`

> **new PhysicalSize**(`width`: `number`, `height`: `number`): [`PhysicalSize`](window.md#physicalsize)

**Parameters**

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |

**Defined in:** [window.ts:136](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L136)

#### Properties

##### `height`

>  **height**: `number`

**Defined in:** [window.ts:134](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L134)

##### `type`

>  **type**: `string` = `'Physical'`

**Defined in:** [window.ts:132](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L132)

##### `width`

>  **width**: `number`

**Defined in:** [window.ts:133](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L133)

#### Methods

##### `toLogical`

> **toLogical**(`scaleFactor`: `number`): [`LogicalSize`](window.md#logicalsize)

Converts the physical size to a logical one.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const factor = await appWindow.scaleFactor();
const size = await appWindow.innerSize();
const logical = size.toLogical(factor);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `scaleFactor` | `number` |

**Returns: **[`LogicalSize`](window.md#logicalsize)

### `WebviewWindow`

Create new webview windows and get a handle to existing ones.

Windows are identified by a *label*  a unique identifier that can be used to reference it later.
It may only contain alphanumeric characters `a-zA-Z` plus the following special characters `-`, `/`, `:` and `_`.

**Example**

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

**Since**: 1.0.2

**Hierarchy**

- `WindowManager`
   - **WebviewWindow**

#### Constructors

##### `constructor`

> **new WebviewWindow**(`label`: `string`, `options?`: [`WindowOptions`](window.md#windowoptions)): [`WebviewWindow`](window.md#webviewwindow)

Creates a new WebviewWindow.

**Example**

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

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The unique webview window label. Must be alphanumeric: `a-zA-Z-/:_`. |
| `options` | [`WindowOptions`](window.md#windowoptions) | - |

**Overrides:** WindowManager.constructor

**Defined in:** [window.ts:2247](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2247)

#### Properties

##### `label`

>  **label**: `string`

The window label. It is a unique identifier for the window, can be used to reference it later.

**Inherited from:** WindowManager.label

**Defined in:** [window.ts:318](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L318)

##### `listeners`

>  **listeners**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, [`EventCallback`](event.md#eventcallback)<`any`\>[]\>

Local event listeners.

**Inherited from:** WindowManager.listeners

**Defined in:** [window.ts:320](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L320)

#### Methods

##### `center`

> **center**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Centers the window.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.center();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `close`

> **close**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Closes the window.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.close();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `emit`

> **emit**(`event`: `string`, `payload?`: `unknown`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Emits an event to the backend and all Tauri windows.
The event will have this window's [label](window.md#label) as Event.windowLabel | source window label.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.emit('window-loaded', { loggedIn: true, token: 'authToken' });
```

This function can also be used to communicate between windows:
```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.listen('sync-data', (event) => { });

// on another window...
import { WebviewWindow } from '@tauri-apps/api/window';
const otherWindow = WebviewWindow.getByLabel('other')
await otherWindow.emit('sync-data');
```

Global listeners are also triggered:
```typescript
import { appWindow } from '@tauri-apps/api/window';
import { listen } from '@tauri-apps/api/event';
await listen('ping', (event) => { });

await appWindow.emit('ping');
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | Event payload. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

##### `hide`

> **hide**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window visibility to false.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.hide();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `innerPosition`

> **innerPosition**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalPosition`](window.md#physicalposition)\>

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const position = await appWindow.innerPosition();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalPosition`](window.md#physicalposition)\>

The window's inner position.

##### `innerSize`

> **innerSize**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalSize`](window.md#physicalsize)\>

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const size = await appWindow.innerSize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalSize`](window.md#physicalsize)\>

The window's inner size.

##### `isClosable`

> **isClosable**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window’s native close button state.

#### Platform-specific

- **Linux / iOS / Android:** Unsupported.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const closable = await appWindow.isClosable();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window's native close button is enabled or not.

##### `isDecorated`

> **isDecorated**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current decorated state.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const decorated = await appWindow.isDecorated();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is decorated or not.

##### `isFocused`

> **isFocused**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current focus state.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const focused = await appWindow.isFocused();
```

**Since**: 1.4

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is focused or not.

##### `isFullscreen`

> **isFullscreen**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current fullscreen state.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const fullscreen = await appWindow.isFullscreen();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is in fullscreen mode or not.

##### `isMaximizable`

> **isMaximizable**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window’s native maximize button state.

#### Platform-specific

- **Linux / iOS / Android:** Unsupported.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const maximizable = await appWindow.isMaximizable();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window's native maximize button is enabled or not.

##### `isMaximized`

> **isMaximized**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current maximized state.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const maximized = await appWindow.isMaximized();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is maximized or not.

##### `isMinimizable`

> **isMinimizable**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window’s native minimize button state.

#### Platform-specific

- **Linux / iOS / Android:** Unsupported.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const minimizable = await appWindow.isMinimizable();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window's native minimize button is enabled or not.

##### `isMinimized`

> **isMinimized**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current minimized state.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const minimized = await appWindow.isMinimized();
```

**Since**: 1.3.0

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

##### `isResizable`

> **isResizable**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current resizable state.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const resizable = await appWindow.isResizable();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is resizable or not.

##### `isVisible`

> **isVisible**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Gets the window's current visible state.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const visible = await appWindow.isVisible();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Whether the window is visible or not.

##### `listen`

> **listen**<`T`\>(`event`: [`EventName`](event.md#eventname), `handler`: [`EventCallback`](event.md#eventcallback)<`T`\>): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an event emitted by the backend or webview.
The event must either be a global event or an event targetting this window.

See [`emit`](window.md#emit) for more information.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.listen<string>('state-changed', (event) => {
  console.log(`Got error: ${payload}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`EventName`](event.md#eventname) | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

##### `maximize`

> **maximize**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Maximizes the window.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.maximize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `minimize`

> **minimize**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Minimizes the window.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.minimize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `onCloseRequested`

> **onCloseRequested**(`handler`: `fn`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to window close requested. Emitted when the user requests to closes the window.

**Example**

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

**Since**: 1.0.2

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | (`event`: [`CloseRequestedEvent`](window.md#closerequestedevent)) => `void` \| [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onFileDropEvent`

> **onFileDropEvent**(`handler`: [`EventCallback`](event.md#eventcallback)<[`FileDropEvent`](window.md#filedropevent)\>): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to a file drop event.
The listener is triggered when the user hovers the selected files on the window,
drops the files or cancels the operation.

**Example**

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

**Since**: 1.0.2

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<[`FileDropEvent`](window.md#filedropevent)\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onFocusChanged`

> **onFocusChanged**(`handler`: [`EventCallback`](event.md#eventcallback)<`boolean`\>): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to window focus change.

**Example**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onFocusChanged(({ payload: focused }) => {
 console.log('Focus changed, window is focused? ' + focused);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Since**: 1.0.2

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<`boolean`\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onMenuClicked`

> **onMenuClicked**(`handler`: [`EventCallback`](event.md#eventcallback)<`string`\>): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to the window menu item click. The payload is the item id.

**Example**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onMenuClicked(({ payload: menuId }) => {
 console.log('Menu clicked: ' + menuId);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Since**: 1.0.2

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<`string`\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onMoved`

> **onMoved**(`handler`: [`EventCallback`](event.md#eventcallback)<[`PhysicalPosition`](window.md#physicalposition)\>): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to window move.

**Example**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onMoved(({ payload: position }) => {
 console.log('Window moved', position);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Since**: 1.0.2

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<[`PhysicalPosition`](window.md#physicalposition)\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onResized`

> **onResized**(`handler`: [`EventCallback`](event.md#eventcallback)<[`PhysicalSize`](window.md#physicalsize)\>): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to window resize.

**Example**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onResized(({ payload: size }) => {
 console.log('Window resized', size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Since**: 1.0.2

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<[`PhysicalSize`](window.md#physicalsize)\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onScaleChanged`

> **onScaleChanged**(`handler`: [`EventCallback`](event.md#eventcallback)<[`ScaleFactorChanged`](window.md#scalefactorchanged)\>): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to window scale change. Emitted when the window's scale factor has changed.
The following user actions can cause DPI changes:
- Changing the display's resolution.
- Changing the display's scale factor (e.g. in Control Panel on Windows).
- Moving the window to a display with a different scale factor.

**Example**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onScaleChanged(({ payload }) => {
 console.log('Scale changed', payload.scaleFactor, payload.size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Since**: 1.0.2

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<[`ScaleFactorChanged`](window.md#scalefactorchanged)\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `onThemeChanged`

> **onThemeChanged**(`handler`: [`EventCallback`](event.md#eventcallback)<[`Theme`](window.md#theme)\>): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to the system theme change.

**Example**

```typescript
import { appWindow } from "@tauri-apps/api/window";
const unlisten = await appWindow.onThemeChanged(({ payload: theme }) => {
 console.log('New theme: ' + theme);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Since**: 1.0.2

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | [`EventCallback`](event.md#eventcallback)<[`Theme`](window.md#theme)\> |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

##### `once`

> **once**<`T`\>(`event`: `string`, `handler`: [`EventCallback`](event.md#eventcallback)<`T`\>): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an one-off event.
See [`listen`](window.md#listen) for more information.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.once<null>('initialized', (event) => {
  console.log(`Window initialized!`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

##### `outerPosition`

> **outerPosition**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalPosition`](window.md#physicalposition)\>

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const position = await appWindow.outerPosition();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalPosition`](window.md#physicalposition)\>

The window's outer position.

##### `outerSize`

> **outerSize**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalSize`](window.md#physicalsize)\>

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const size = await appWindow.outerSize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PhysicalSize`](window.md#physicalsize)\>

The window's outer size.

##### `requestUserAttention`

> **requestUserAttention**(`requestType`: `null` \| [`UserAttentionType`](window.md#userattentiontype)): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Requests user attention to the window, this has no effect if the application
is already focused. How requesting for user attention manifests is platform dependent,
see `UserAttentionType` for details.

Providing `null` will unset the request for user attention. Unsetting the request for
user attention might not be done automatically by the WM when the window receives input.

#### Platform-specific

- **macOS:** `null` has no effect.
- **Linux:** Urgency levels have the same effect.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.requestUserAttention();
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `requestType` | `null` \| [`UserAttentionType`](window.md#userattentiontype) |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `scaleFactor`

> **scaleFactor**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number`\>

The scale factor that can be used to map physical pixels to logical pixels.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const factor = await appWindow.scaleFactor();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`number`\>

The window's monitor scale factor.

##### `setAlwaysOnTop`

> **setAlwaysOnTop**(`alwaysOnTop`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Whether the window should always be on top of other windows.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setAlwaysOnTop(true);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `alwaysOnTop` | `boolean` | Whether the window should always be on top of other windows or not. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setClosable`

> **setClosable**(`closable`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets whether the window's native close button is enabled or not.

#### Platform-specific

- **Linux:** GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible
- **iOS / Android:** Unsupported.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setClosable(false);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `closable` | `boolean` |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setContentProtected`

> **setContentProtected**(`protected_`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Prevents the window contents from being captured by other apps.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setContentProtected(true);
```

**Since**: 1.2.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `protected_` | `boolean` |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setCursorGrab`

> **setCursorGrab**(`grab`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Grabs the cursor, preventing it from leaving the window.

There's no guarantee that the cursor will be hidden. You should
hide it by yourself if you want so.

#### Platform-specific

- **Linux:** Unsupported.
- **macOS:** This locks the cursor in a fixed location, which looks visually awkward.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorGrab(true);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `grab` | `boolean` | `true` to grab the cursor icon, `false` to release it. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setCursorIcon`

> **setCursorIcon**(`icon`: [`CursorIcon`](window.md#cursoricon)): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Modifies the cursor icon of the window.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorIcon('help');
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | [`CursorIcon`](window.md#cursoricon) | The new cursor icon. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setCursorPosition`

> **setCursorPosition**(`position`: [`PhysicalPosition`](window.md#physicalposition) \| [`LogicalPosition`](window.md#logicalposition)): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Changes the position of the cursor in window coordinates.

**Example**

```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
await appWindow.setCursorPosition(new LogicalPosition(600, 300));
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`PhysicalPosition`](window.md#physicalposition) \| [`LogicalPosition`](window.md#logicalposition) | The new cursor position. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setCursorVisible`

> **setCursorVisible**(`visible`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Modifies the cursor's visibility.

#### Platform-specific

- **Windows:** The cursor is only hidden within the confines of the window.
- **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
  outside of the window.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setCursorVisible(false);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `visible` | `boolean` | If `false`, this will hide the cursor. If `true`, this will show the cursor. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setDecorations`

> **setDecorations**(`decorations`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Whether the window should have borders and bars.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setDecorations(false);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `decorations` | `boolean` | Whether the window should have borders and bars. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setFocus`

> **setFocus**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Bring the window to front and focus.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setFocus();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setFullscreen`

> **setFullscreen**(`fullscreen`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window fullscreen state.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setFullscreen(true);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `fullscreen` | `boolean` | Whether the window should go to fullscreen or not. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setIcon`

> **setIcon**(`icon`: `string` \| [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window icon.

**Example**

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

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `icon` | `string` \| [`Uint8Array`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array ) | Icon bytes or path to the icon file. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setIgnoreCursorEvents`

> **setIgnoreCursorEvents**(`ignore`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Changes the cursor events behavior.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setIgnoreCursorEvents(true);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `ignore` | `boolean` | `true` to ignore the cursor events; `false` to process them as usual. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setMaxSize`

> **setMaxSize**(`size`: `undefined` \| `null` \| [`PhysicalSize`](window.md#physicalsize) \| [`LogicalSize`](window.md#logicalsize)): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.

**Example**

```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window';
await appWindow.setMaxSize(new LogicalSize(600, 500));
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| `null` \| [`PhysicalSize`](window.md#physicalsize) \| [`LogicalSize`](window.md#logicalsize) | The logical or physical inner size, or `null` to unset the constraint. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setMaximizable`

> **setMaximizable**(`maximizable`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets whether the window's native maximize button is enabled or not.
If resizable is set to false, this setting is ignored.

#### Platform-specific

- **macOS:** Disables the "zoom" button in the window titlebar, which is also used to enter fullscreen mode.
- **Linux / iOS / Android:** Unsupported.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setMaximizable(false);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `maximizable` | `boolean` |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setMinSize`

> **setMinSize**(`size`: `undefined` \| `null` \| [`PhysicalSize`](window.md#physicalsize) \| [`LogicalSize`](window.md#logicalsize)): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.

**Example**

```typescript
import { appWindow, PhysicalSize } from '@tauri-apps/api/window';
await appWindow.setMinSize(new PhysicalSize(600, 500));
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | `undefined` \| `null` \| [`PhysicalSize`](window.md#physicalsize) \| [`LogicalSize`](window.md#logicalsize) | The logical or physical inner size, or `null` to unset the constraint. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setMinimizable`

> **setMinimizable**(`minimizable`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets whether the window's native minimize button is enabled or not.

#### Platform-specific

- **Linux / iOS / Android:** Unsupported.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setMinimizable(false);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `minimizable` | `boolean` |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setPosition`

> **setPosition**(`position`: [`PhysicalPosition`](window.md#physicalposition) \| [`LogicalPosition`](window.md#logicalposition)): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window outer position.

**Example**

```typescript
import { appWindow, LogicalPosition } from '@tauri-apps/api/window';
await appWindow.setPosition(new LogicalPosition(600, 500));
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | [`PhysicalPosition`](window.md#physicalposition) \| [`LogicalPosition`](window.md#logicalposition) | The new position, in logical or physical pixels. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setResizable`

> **setResizable**(`resizable`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Updates the window resizable flag.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setResizable(false);
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `resizable` | `boolean` |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setSize`

> **setSize**(`size`: [`PhysicalSize`](window.md#physicalsize) \| [`LogicalSize`](window.md#logicalsize)): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Resizes the window with a new inner size.

**Example**

```typescript
import { appWindow, LogicalSize } from '@tauri-apps/api/window';
await appWindow.setSize(new LogicalSize(600, 500));
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `size` | [`PhysicalSize`](window.md#physicalsize) \| [`LogicalSize`](window.md#logicalsize) | The logical or physical inner size. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setSkipTaskbar`

> **setSkipTaskbar**(`skip`: `boolean`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Whether the window icon should be hidden from the taskbar or not.

#### Platform-specific

- **macOS:** Unsupported.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setSkipTaskbar(true);
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `skip` | `boolean` | true to hide window icon, false to show it. |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `setTitle`

> **setTitle**(`title`: `string`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window title.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.setTitle('Tauri');
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The new title |

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `show`

> **show**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Sets the window visibility to true.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.show();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `startDragging`

> **startDragging**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Starts dragging the window.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.startDragging();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `theme`

> **theme**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| [`Theme`](window.md#theme)\>

Gets the window's current theme.

#### Platform-specific

- **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const theme = await appWindow.theme();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| [`Theme`](window.md#theme)\>

The window theme.

##### `title`

> **title**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Gets the window's current title.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const title = await appWindow.title();
```

**Since**: 1.3.0

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

##### `toggleMaximize`

> **toggleMaximize**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Toggles the window maximized state.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.toggleMaximize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `unmaximize`

> **unmaximize**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Unmaximizes the window.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.unmaximize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `unminimize`

> **unminimize**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Unminimizes the window.

**Example**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.unminimize();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

##### `getByLabel`

> `Static` **getByLabel**(`label`: `string`): `null` \| [`WebviewWindow`](window.md#webviewwindow)

Gets the WebviewWindow for the webview associated with the given label.

**Example**

```typescript
import { WebviewWindow } from '@tauri-apps/api/window';
const mainWindow = WebviewWindow.getByLabel('main');
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The webview window label. |

**Returns: **`null` \| [`WebviewWindow`](window.md#webviewwindow)

The WebviewWindow instance to communicate with the webview or null if the webview doesn't exist.

##### `getFocusedWindow`

> `Static` **getFocusedWindow**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| [`WebviewWindow`](window.md#webviewwindow)\>

Gets the focused window.

**Example**

```typescript
import { WebviewWindow } from '@tauri-apps/api/window';
const focusedWindow = WebviewWindow.getFocusedWindow();
```

**Since**: 1.4

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| [`WebviewWindow`](window.md#webviewwindow)\>

The WebviewWindow instance to communicate with the webview or `undefined` if there is not any focused window.

## Interfaces

### `Monitor`

Allows you to retrieve information about a given monitor.

**Since**: 1.0.0

#### Properties

##### `name`

>  **name**: `null` \| `string`

Human-readable name of the monitor

**Defined in:** [window.ts:83](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L83)

##### `position`

>  **position**: [`PhysicalPosition`](window.md#physicalposition)

the Top-left corner position of the monitor relative to the larger full screen area.

**Defined in:** [window.ts:87](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L87)

##### `scaleFactor`

>  **scaleFactor**: `number`

The scale factor that can be used to map physical pixels to logical pixels.

**Defined in:** [window.ts:89](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L89)

##### `size`

>  **size**: [`PhysicalSize`](window.md#physicalsize)

The monitor's resolution.

**Defined in:** [window.ts:85](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L85)

### `ScaleFactorChanged`

The payload for the `scaleChange` event.

**Since**: 1.0.2

#### Properties

##### `scaleFactor`

>  **scaleFactor**: `number`

The new window scale factor.

**Defined in:** [window.ts:99](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L99)

##### `size`

>  **size**: [`PhysicalSize`](window.md#physicalsize)

The new window size

**Defined in:** [window.ts:101](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L101)

### `WindowOptions`

Configuration for the window to create.

**Since**: 1.0.0

#### Properties

##### `acceptFirstMouse`

> `Optional` **acceptFirstMouse**: `boolean`

Whether clicking an inactive window also clicks through to the webview on macOS.

**Defined in:** [window.ts:2410](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2410)

##### `alwaysOnTop`

> `Optional` **alwaysOnTop**: `boolean`

Whether the window should always be on top of other windows or not.

**Defined in:** [window.ts:2382](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2382)

##### `center`

> `Optional` **center**: `boolean`

Show window in the center of the screen..

**Defined in:** [window.ts:2344](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2344)

##### `closable`

> `Optional` **closable**: `boolean`

Whether the window's native close button is enabled or not. Defaults to `true`.

**Defined in:** [window.ts:2433](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2433)

##### `contentProtected`

> `Optional` **contentProtected**: `boolean`

Prevents the window contents from being captured by other apps.

**Defined in:** [window.ts:2384](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2384)

##### `decorations`

> `Optional` **decorations**: `boolean`

Whether the window should have borders and bars or not.

**Defined in:** [window.ts:2380](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2380)

##### `fileDropEnabled`

> `Optional` **fileDropEnabled**: `boolean`

Whether the file drop is enabled or not on the webview. By default it is enabled.

Disabling it is required to use drag and drop on the frontend on Windows.

**Defined in:** [window.ts:2392](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2392)

##### `focus`

> `Optional` **focus**: `boolean`

Whether the window will be initially focused or not.

**Defined in:** [window.ts:2368](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2368)

##### `fullscreen`

> `Optional` **fullscreen**: `boolean`

Whether the window is in fullscreen mode or not.

**Defined in:** [window.ts:2366](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2366)

##### `height`

> `Optional` **height**: `number`

The initial height.

**Defined in:** [window.ts:2352](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2352)

##### `hiddenTitle`

> `Optional` **hiddenTitle**: `boolean`

If `true`, sets the window title to be hidden on macOS.

**Defined in:** [window.ts:2406](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2406)

##### `maxHeight`

> `Optional` **maxHeight**: `number`

The maximum height. Only applies if `maxWidth` is also set.

**Defined in:** [window.ts:2360](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2360)

##### `maxWidth`

> `Optional` **maxWidth**: `number`

The maximum width. Only applies if `maxHeight` is also set.

**Defined in:** [window.ts:2358](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2358)

##### `maximizable`

> `Optional` **maximizable**: `boolean`

Whether the window's native maximize button is enabled or not. Defaults to `true`.

**Defined in:** [window.ts:2425](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2425)

##### `maximized`

> `Optional` **maximized**: `boolean`

Whether the window should be maximized upon creation or not.

**Defined in:** [window.ts:2376](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2376)

##### `minHeight`

> `Optional` **minHeight**: `number`

The minimum height. Only applies if `minWidth` is also set.

**Defined in:** [window.ts:2356](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2356)

##### `minWidth`

> `Optional` **minWidth**: `number`

The minimum width. Only applies if `minHeight` is also set.

**Defined in:** [window.ts:2354](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2354)

##### `minimizable`

> `Optional` **minimizable**: `boolean`

Whether the window's native minimize button is enabled or not. Defaults to `true`.

**Defined in:** [window.ts:2429](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2429)

##### `resizable`

> `Optional` **resizable**: `boolean`

Whether the window is resizable or not.

**Defined in:** [window.ts:2362](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2362)

##### `skipTaskbar`

> `Optional` **skipTaskbar**: `boolean`

Whether or not the window icon should be added to the taskbar.

**Defined in:** [window.ts:2386](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2386)

##### `tabbingIdentifier`

> `Optional` **tabbingIdentifier**: `string`

Defines the window [tabbing identifier](https://developer.apple.com/documentation/appkit/nswindow/1644704-tabbingidentifier) on macOS.

Windows with the same tabbing identifier will be grouped together.
If the tabbing identifier is not set, automatic tabbing will be disabled.

**Defined in:** [window.ts:2417](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2417)

##### `theme`

> `Optional` **theme**: [`Theme`](window.md#theme)

The initial window theme. Defaults to the system theme.

Only implemented on Windows and macOS 10.14+.

**Defined in:** [window.ts:2398](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2398)

##### `title`

> `Optional` **title**: `string`

Window title.

**Defined in:** [window.ts:2364](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2364)

##### `titleBarStyle`

> `Optional` **titleBarStyle**: [`TitleBarStyle`](window.md#titlebarstyle)

The style of the macOS title bar.

**Defined in:** [window.ts:2402](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2402)

##### `transparent`

> `Optional` **transparent**: `boolean`

Whether the window is transparent or not.
Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > tauri > macOSPrivateApi`.
WARNING: Using private APIs on `macOS` prevents your application from being accepted to the `App Store`.

**Defined in:** [window.ts:2374](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2374)

##### `url`

> `Optional` **url**: `string`

Remote URL or local file path to open.

- URL such as `https://github.com/tauri-apps` is opened directly on a Tauri window.
- data: URL such as `data:text/html,<html>...` is only supported with the `window-data-url` Cargo feature for the `tauri` dependency.
- local file path or route such as `/path/to/page.html` or `/users` is appended to the application URL (the devServer URL on development, or `tauri://localhost/` and `https://tauri.localhost/` on production).

**Defined in:** [window.ts:2342](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2342)

##### `userAgent`

> `Optional` **userAgent**: `string`

The user agent for the webview.

**Defined in:** [window.ts:2421](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2421)

##### `visible`

> `Optional` **visible**: `boolean`

Whether the window should be immediately visible upon creation or not.

**Defined in:** [window.ts:2378](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2378)

##### `width`

> `Optional` **width**: `number`

The initial width.

**Defined in:** [window.ts:2350](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2350)

##### `x`

> `Optional` **x**: `number`

The initial vertical position. Only applies if `y` is also set.

**Defined in:** [window.ts:2346](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2346)

##### `y`

> `Optional` **y**: `number`

The initial horizontal position. Only applies if `x` is also set.

**Defined in:** [window.ts:2348](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2348)

## Type Aliases

### `CursorIcon`

>  **CursorIcon**: `"default"` \| `"crosshair"` \| `"hand"` \| `"arrow"` \| `"move"` \| `"text"` \| `"wait"` \| `"help"` \| `"progress"` \| `"notAllowed"` \| `"contextMenu"` \| `"cell"` \| `"verticalText"` \| `"alias"` \| `"copy"` \| `"noDrop"` \| `"grab"` \| `"grabbing"` \| `"allScroll"` \| `"zoomIn"` \| `"zoomOut"` \| `"eResize"` \| `"nResize"` \| `"neResize"` \| `"nwResize"` \| `"sResize"` \| `"seResize"` \| `"swResize"` \| `"wResize"` \| `"ewResize"` \| `"nsResize"` \| `"neswResize"` \| `"nwseResize"` \| `"colResize"` \| `"rowResize"`

**Defined in:** [window.ts:237](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L237)

### `FileDropEvent`

>  **FileDropEvent**: { `paths`: `string`[] ; `type`: `"hover"`  } \| { `paths`: `string`[] ; `type`: `"drop"`  } \| { `type`: `"cancel"`  }

The file drop event types.

**Defined in:** [window.ts:105](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L105)

### `Theme`

>  **Theme**: `"light"` \| `"dark"`

**Defined in:** [window.ts:73](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L73)

### `TitleBarStyle`

>  **TitleBarStyle**: `"visible"` \| `"transparent"` \| `"overlay"`

**Defined in:** [window.ts:74](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L74)

## Variables

### `appWindow`

>  **appWindow**: [`WebviewWindow`](window.md#webviewwindow)

The WebviewWindow for the current window.

**Defined in:** [window.ts:2310](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/window.ts#L2310)

## Functions

### `availableMonitors`

> **availableMonitors**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor)[]\>

Returns the list of all the monitors available on the system.

**Example**

```typescript
import { availableMonitors } from '@tauri-apps/api/window';
const monitors = availableMonitors();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor)[]\>

### `currentMonitor`

> **currentMonitor**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor) \| `null`\>

Returns the monitor on which the window currently resides.
Returns `null` if current monitor can't be detected.

**Example**

```typescript
import { currentMonitor } from '@tauri-apps/api/window';
const monitor = currentMonitor();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor) \| `null`\>

### `getAll`

> **getAll**(): [`WebviewWindow`](window.md#webviewwindow)[]

Gets a list of instances of `WebviewWindow` for all available webview windows.

**Since**: 1.0.0

**Returns: **[`WebviewWindow`](window.md#webviewwindow)[]

### `getCurrent`

> **getCurrent**(): [`WebviewWindow`](window.md#webviewwindow)

Get an instance of `WebviewWindow` for the current webview window.

**Since**: 1.0.0

**Returns: **[`WebviewWindow`](window.md#webviewwindow)

### `primaryMonitor`

> **primaryMonitor**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor) \| `null`\>

Returns the primary monitor of the system.
Returns `null` if it can't identify any monitor as a primary one.

**Example**

```typescript
import { primaryMonitor } from '@tauri-apps/api/window';
const monitor = primaryMonitor();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`Monitor`](window.md#monitor) \| `null`\>
