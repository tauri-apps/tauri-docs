---
title: 'window'
editUrl: false
prev: false
next: false
---

Provides APIs to create windows, communicate with other windows and manipulate the current window.

## Window events

Events can be listened to using [Window.listen](/references/js/core/namespacewindow/#listen):

```typescript
import { getCurrent } from '@tauri-apps/api/window';
getCurrent().listen('my-window-event', ({ event, payload }) => {});
```

## References

### LogicalPosition

Re-exports [LogicalPosition](/references/js/core/namespacedpi/#logicalposition)

```ts
LogicalPosition;
```

**Source**: [window.ts:2187](undefined)

---

### LogicalSize

Re-exports [LogicalSize](/references/js/core/namespacedpi/#logicalsize)

```ts
LogicalSize;
```

**Source**: [window.ts:2185](undefined)

---

### PhysicalPosition

Re-exports [PhysicalPosition](/references/js/core/namespacedpi/#physicalposition)

```ts
PhysicalPosition;
```

**Source**: [window.ts:2188](undefined)

---

### PhysicalSize

Re-exports [PhysicalSize](/references/js/core/namespacedpi/#physicalsize)

```ts
PhysicalSize;
```

**Source**: [window.ts:2186](undefined)

## Enumerations

### Effect

Platform-specific window effects

#### Since

2.0.0

#### Enumeration Members

##### Acrylic

```ts
Acrylic: 'acrylic';
```

**Windows 10/11**

## Notes

This effect has bad performance when resizing/dragging the window on Windows 10 v1903+ and Windows 11 build 22000.

**Source**: [window.ts:1925](undefined)

---

##### AppearanceBased

```ts
AppearanceBased: 'appearanceBased';
```

A default material appropriate for the view's effectiveAppearance. **macOS 10.14-**

###### Deprecated

since macOS 10.14. You should instead choose an appropriate semantic material.

**Source**: [window.ts:1825](undefined)

---

##### Blur

```ts
Blur: 'blur';
```

**Windows 7/10/11(22H1) Only**

## Notes

This effect has bad performance when resizing/dragging the window on Windows 11 build 22621.

**Source**: [window.ts:1917](undefined)

---

##### ContentBackground

```ts
ContentBackground: 'contentBackground';
```

**macOS 10.14+**

**Source**: [window.ts:1897](undefined)

---

##### Dark

```ts
Dark: 'dark';
```

**macOS 10.14-**

###### Deprecated

since macOS 10.14. Use a semantic material instead.

**Source**: [window.ts:1837](undefined)

---

##### FullScreenUI

```ts
FullScreenUI: 'fullScreenUI';
```

**macOS 10.14+**

**Source**: [window.ts:1889](undefined)

---

##### HeaderView

```ts
HeaderView: 'headerView';
```

**macOS 10.14+**

**Source**: [window.ts:1873](undefined)

---

##### HudWindow

```ts
HudWindow: 'hudWindow';
```

**macOS 10.14+**

**Source**: [window.ts:1885](undefined)

---

##### Light

```ts
Light: 'light';
```

**macOS 10.14-**

###### Deprecated

since macOS 10.14. Use a semantic material instead.

**Source**: [window.ts:1831](undefined)

---

##### MediumLight

```ts
MediumLight: 'mediumLight';
```

**macOS 10.14-**

###### Deprecated

since macOS 10.14. Use a semantic material instead.

**Source**: [window.ts:1843](undefined)

---

##### Menu

```ts
Menu: 'menu';
```

**macOS 10.11+**

**Source**: [window.ts:1861](undefined)

---

##### Mica

```ts
Mica: 'mica';
```

**Windows 11 Only**

**Source**: [window.ts:1909](undefined)

---

##### Popover

```ts
Popover: 'popover';
```

**macOS 10.11+**

**Source**: [window.ts:1865](undefined)

---

##### Selection

```ts
Selection: 'selection';
```

**macOS 10.10+**

**Source**: [window.ts:1857](undefined)

---

##### Sheet

```ts
Sheet: 'sheet';
```

**macOS 10.14+**

**Source**: [window.ts:1877](undefined)

---

##### Sidebar

```ts
Sidebar: 'sidebar';
```

**macOS 10.11+**

**Source**: [window.ts:1869](undefined)

---

##### Tabbed

```ts
Tabbed: 'tabbed';
```

Tabbed effect that matches the system dark perefence **Windows 11 Only**

**Source**: [window.ts:1929](undefined)

---

##### TabbedDark

```ts
TabbedDark: 'tabbedDark';
```

Tabbed effect with dark mode but only if dark mode is enabled on the system **Windows 11 Only**

**Source**: [window.ts:1933](undefined)

---

##### TabbedLight

```ts
TabbedLight: 'tabbedLight';
```

Tabbed effect with light mode **Windows 11 Only**

**Source**: [window.ts:1937](undefined)

---

##### Titlebar

```ts
Titlebar: 'titlebar';
```

**macOS 10.10+**

**Source**: [window.ts:1853](undefined)

---

##### Tooltip

```ts
Tooltip: 'tooltip';
```

**macOS 10.14+**

**Source**: [window.ts:1893](undefined)

---

##### UltraDark

```ts
UltraDark: 'ultraDark';
```

**macOS 10.14-**

###### Deprecated

since macOS 10.14. Use a semantic material instead.

**Source**: [window.ts:1849](undefined)

---

##### UnderPageBackground

```ts
UnderPageBackground: 'underPageBackground';
```

**macOS 10.14+**

**Source**: [window.ts:1905](undefined)

---

##### UnderWindowBackground

```ts
UnderWindowBackground: 'underWindowBackground';
```

**macOS 10.14+**

**Source**: [window.ts:1901](undefined)

---

##### WindowBackground

```ts
WindowBackground: 'windowBackground';
```

**macOS 10.14+**

**Source**: [window.ts:1881](undefined)

---

### EffectState

Window effect state **macOS only**

#### See

https://developer.apple.com/documentation/appkit/nsvisualeffectview/state

#### Since

2.0.0

#### Enumeration Members

##### Active

```ts
Active: 'active';
```

Make window effect state always active **macOS only**

**Source**: [window.ts:1955](undefined)

---

##### FollowsWindowActiveState

```ts
FollowsWindowActiveState: 'followsWindowActiveState';
```

Make window effect state follow the window's active state **macOS only**

**Source**: [window.ts:1951](undefined)

---

##### Inactive

```ts
Inactive: 'inactive';
```

Make window effect state always inactive **macOS only**

**Source**: [window.ts:1959](undefined)

---

### ProgressBarStatus

#### Enumeration Members

##### Error

```ts
Error: 'error';
```

Error state. **Treated as Normal on linux**

**Source**: [window.ts:182](undefined)

---

##### Indeterminate

```ts
Indeterminate: 'indeterminate';
```

Indeterminate state. **Treated as Normal on Linux and macOS**

**Source**: [window.ts:174](undefined)

---

##### None

```ts
None: 'none';
```

Hide progress bar.

**Source**: [window.ts:166](undefined)

---

##### Normal

```ts
Normal: 'normal';
```

Normal state.

**Source**: [window.ts:170](undefined)

---

##### Paused

```ts
Paused: 'paused';
```

Paused state. **Treated as Normal on Linux**

**Source**: [window.ts:178](undefined)

---

### UserAttentionType

Attention type to request on a window.

#### Since

1.0.0

#### Enumeration Members

##### Critical

```ts
Critical: 1;
```

#### Platform-specific

- **macOS:** Bounces the dock icon until the application is in focus.
- **Windows:** Flashes both the window and the taskbar button until the application is in focus.

**Source**: [window.ts:91](undefined)

---

##### Informational

```ts
Informational: 2;
```

#### Platform-specific

- **macOS:** Bounces the dock icon once.
- **Windows:** Flashes the taskbar button until the application is in focus.

**Source**: [window.ts:97](undefined)

## Classes

### CloseRequestedEvent

#### Constructors

##### constructor()

```ts
new CloseRequestedEvent(event): CloseRequestedEvent
```

###### Parameters

| Parameter | Type                                                             |
| :-------- | :--------------------------------------------------------------- |
| `event`   | [`Event`](/references/js/core/namespaceevent/#event)\< `null` \> |

###### Returns

[`CloseRequestedEvent`](/references/js/core/namespacewindow/#closerequestedevent)

**Source**: [window.ts:107](undefined)

#### Properties

| Property                                                                        | Type                                                         | Description                       |
| :------------------------------------------------------------------------------ | :----------------------------------------------------------- | :-------------------------------- |
| `private` <a id="_preventdefault" name="_preventdefault"></a> `_preventDefault` | `boolean`                                                    | -                                 |
| <a id="event" name="event"></a> `event`                                         | [`EventName`](/references/js/core/namespaceevent/#eventname) | Event name                        |
| <a id="id" name="id"></a> `id`                                                  | `number`                                                     | Event identifier used to unlisten |

#### Methods

##### isPreventDefault()

```ts
isPreventDefault(): boolean
```

###### Returns

`boolean`

**Source**: [window.ts:116](undefined)

---

##### preventDefault()

```ts
preventDefault(): void
```

###### Returns

`void`

**Source**: [window.ts:112](undefined)

---

### Window

Create new window or get a handle to an existing one.

Windows are identified by a _label_ a unique identifier that can be used to reference it later.
It may only contain alphanumeric characters `a-zA-Z` plus the following special characters `-`, `/`, `:` and `_`.

#### Example

```typescript
// loading embedded asset:
const appWindow = new Window('theUniqueLabel', {
  url: 'path/to/page.html',
});
// alternatively, load a remote URL:
const appWindow = new Window('theUniqueLabel', {
  url: 'https://github.com/tauri-apps/tauri',
});

appWindow.once('tauri://created', function () {
  // window successfully created
});
appWindow.once('tauri://error', function (e) {
  // an error happened creating the window
});

// emit an event to the backend
await appWindow.emit('some event', 'data');
// listen to an event from the backend
const unlisten = await appWindow.listen('event name', (e) => {});
unlisten();
```

#### Since

2.0.0

#### Extended By

- [`WebviewWindow`](/references/js/core/namespacewebview/#webviewwindow)

#### Constructors

##### constructor()

```ts
new Window(label, options = {}): Window
```

Creates a new Window.

###### Example

```typescript
import { Window } from '@tauri-apps/api/window';
const appWindow = new Window('my-label', {
  url: 'https://github.com/tauri-apps/tauri',
});
appWindow.once('tauri://created', function () {
  // window successfully created
});
appWindow.once('tauri://error', function (e) {
  // an error happened creating the window
});
```

###### Parameters

| Parameter | Type                                                                  | Description                                                  |
| :-------- | :-------------------------------------------------------------------- | :----------------------------------------------------------- |
| `label`   | `string`                                                              | The unique window label. Must be alphanumeric: `a-zA-Z-/:_`. |
| `options` | [`WindowOptions`](/references/js/core/namespacewindow/#windowoptions) | -                                                            |

###### Returns

[`Window`](/references/js/core/namespacewindow/#window)

The [Window](/references/js/core/namespacewindow/#window) instance to communicate with the window.

**Source**: [window.ts:292](undefined)

#### Properties

| Property                                            | Type                                                                                                                                                                                         | Description                                                                                    |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| <a id="label" name="label"></a> `label`             | `string`                                                                                                                                                                                     | The window label. It is a unique identifier for the window, can be used to reference it later. |
| <a id="listeners" name="listeners"></a> `listeners` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< `any` \>[] \> | Local event listeners.                                                                         |

#### Methods

##### center()

```ts
center(): Promise< void >
```

Centers the window.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().center();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:810](undefined)

---

##### clearEffects()

```ts
clearEffects(): Promise< void >
```

Clear any applied effects if possible.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [window.ts:1161](undefined)

---

##### close()

```ts
close(): Promise< void >
```

Closes the window.

Note this emits a closeRequested event so you can intercept it. To force window close, use [Window.destroy](/references/js/core/namespacewindow/#destroy).

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().close();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1082](undefined)

---

##### destroy()

```ts
destroy(): Promise< void >
```

Destroys the window. Behaves like [Window.close](/references/js/core/namespacewindow/#close) but forces the window close instead of emitting a closeRequested event.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().destroy();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1098](undefined)

---

##### emit()

```ts
emit(event, payload?): Promise< void >
```

Emits an event to all [targets](/references/js/core/namespaceevent/#eventtarget).

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().emit('window-loaded', { loggedIn: true, token: 'authToken' });
```

###### Parameters

| Parameter  | Type      | Description                                                                   |
| :--------- | :-------- | :---------------------------------------------------------------------------- |
| `event`    | `string`  | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload`? | `unknown` | Event payload.                                                                |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [window.ts:440](undefined)

---

##### emitTo()

```ts
emitTo(
  target,
  event,
  payload?): Promise< void >
```

Emits an event to all [targets](/references/js/core/namespaceevent/#eventtarget) matching the given target.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().emit('window-loaded', { loggedIn: true, token: 'authToken' });
```

###### Parameters

| Parameter  | Type                                                                         | Description                                                                                                                    |
| :--------- | :--------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `target`   | `string` \| [`EventTarget`](/references/js/core/namespaceevent/#eventtarget) | Label of the target Window/Webview/WebviewWindow or raw [EventTarget](/references/js/core/namespaceevent/#eventtarget) object. |
| `event`    | `string`                                                                     | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.                                                  |
| `payload`? | `unknown`                                                                    | Event payload.                                                                                                                 |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [window.ts:467](undefined)

---

##### hide()

```ts
hide(): Promise< void >
```

Sets the window visibility to false.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().hide();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1064](undefined)

---

##### innerPosition()

```ts
innerPosition(): Promise< PhysicalPosition >
```

The position of the top-left hand corner of the window's client area relative to the top-left hand corner of the desktop.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const position = await getCurrent().innerPosition();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalPosition`](/references/js/core/namespacedpi/#physicalposition) \>

The window's inner position.

**Source**: [window.ts:528](undefined)

---

##### innerSize()

```ts
innerSize(): Promise< PhysicalSize >
```

The physical size of the window's client area.
The client area is the content of the window, excluding the title bar and borders.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const size = await getCurrent().innerSize();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize) \>

The window's inner size.

**Source**: [window.ts:561](undefined)

---

##### isClosable()

```ts
isClosable(): Promise< boolean >
```

Gets the window’s native close button state.

#### Platform-specific

- **iOS / Android:** Unsupported.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const closable = await getCurrent().isClosable();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

Whether the window's native close button is enabled or not.

**Source**: [window.ts:741](undefined)

---

##### isDecorated()

```ts
isDecorated(): Promise< boolean >
```

Gets the window's current decorated state.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const decorated = await getCurrent().isDecorated();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

Whether the window is decorated or not.

**Source**: [window.ts:662](undefined)

---

##### isFocused()

```ts
isFocused(): Promise< boolean >
```

Gets the window's current focus state.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const focused = await getCurrent().isFocused();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

Whether the window is focused or not.

**Source**: [window.ts:646](undefined)

---

##### isFullscreen()

```ts
isFullscreen(): Promise< boolean >
```

Gets the window's current fullscreen state.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const fullscreen = await getCurrent().isFullscreen();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

Whether the window is in fullscreen mode or not.

**Source**: [window.ts:600](undefined)

---

##### isMaximizable()

```ts
isMaximizable(): Promise< boolean >
```

Gets the window’s native maximize button state.

#### Platform-specific

- **Linux / iOS / Android:** Unsupported.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const maximizable = await getCurrent().isMaximizable();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

Whether the window's native maximize button is enabled or not.

**Source**: [window.ts:699](undefined)

---

##### isMaximized()

```ts
isMaximized(): Promise< boolean >
```

Gets the window's current maximized state.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const maximized = await getCurrent().isMaximized();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

Whether the window is maximized or not.

**Source**: [window.ts:630](undefined)

---

##### isMinimizable()

```ts
isMinimizable(): Promise< boolean >
```

Gets the window’s native minimize button state.

#### Platform-specific

- **Linux / iOS / Android:** Unsupported.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const minimizable = await getCurrent().isMinimizable();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

Whether the window's native minimize button is enabled or not.

**Source**: [window.ts:720](undefined)

---

##### isMinimized()

```ts
isMinimized(): Promise< boolean >
```

Gets the window's current minimized state.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const minimized = await getCurrent().isMinimized();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

**Source**: [window.ts:614](undefined)

---

##### isResizable()

```ts
isResizable(): Promise< boolean >
```

Gets the window's current resizable state.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const resizable = await getCurrent().isResizable();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

Whether the window is resizable or not.

**Source**: [window.ts:678](undefined)

---

##### isVisible()

```ts
isVisible(): Promise< boolean >
```

Gets the window's current visible state.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const visible = await getCurrent().isVisible();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `boolean` \>

Whether the window is visible or not.

**Source**: [window.ts:757](undefined)

---

##### listen()

```ts
listen<T>(event, handler): Promise< UnlistenFn >
```

Listen to an emitted event on this window.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const unlisten = await getCurrent().listen<string>('state-changed', (event) => {
  console.log(`Got error: ${payload}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Type parameters

| Parameter |
| :-------- |
| `T`       |

###### Parameters

| Parameter | Type                                                                          | Description                                                                   |
| :-------- | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `event`   | [`EventName`](/references/js/core/namespaceevent/#eventname)                  | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< `T` \> | Event handler.                                                                |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:381](undefined)

---

##### maximize()

```ts
maximize(): Promise< void >
```

Maximizes the window.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().maximize();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:968](undefined)

---

##### minimize()

```ts
minimize(): Promise< void >
```

Minimizes the window.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().minimize();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1016](undefined)

---

##### onCloseRequested()

```ts
onCloseRequested(handler): Promise< UnlistenFn >
```

Listen to window close requested. Emitted when the user requests to closes the window.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
import { confirm } from '@tauri-apps/api/dialog';
const unlisten = await getCurrent().onCloseRequested(async (event) => {
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

| Parameter | Type                                                                                                                               |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | (`event`) => `void` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1705](undefined)

---

##### onFocusChanged()

```ts
onFocusChanged(handler): Promise< UnlistenFn >
```

Listen to window focus change.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const unlisten = await getCurrent().onFocusChanged(({ payload: focused }) => {
  console.log('Focus changed, window is focused? ' + focused);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Parameter | Type                                                                                |
| :-------- | :---------------------------------------------------------------------------------- |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< `boolean` \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1736](undefined)

---

##### onMoved()

```ts
onMoved(handler): Promise< UnlistenFn >
```

Listen to window move.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const unlisten = await getCurrent().onMoved(({ payload: position }) => {
  console.log('Window moved', position);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Parameter | Type                                                                                                                                               |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< [`PhysicalPosition`](/references/js/core/namespacedpi/#physicalposition) \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1675](undefined)

---

##### onResized()

```ts
onResized(handler): Promise< UnlistenFn >
```

Listen to window resize.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const unlisten = await getCurrent().onResized(({ payload: size }) => {
  console.log('Window resized', size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Parameter | Type                                                                                                                                       |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize) \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1651](undefined)

---

##### onScaleChanged()

```ts
onScaleChanged(handler): Promise< UnlistenFn >
```

Listen to window scale change. Emitted when the window's scale factor has changed.
The following user actions can cause DPI changes:

- Changing the display's resolution.
- Changing the display's scale factor (e.g. in Control Panel on Windows).
- Moving the window to a display with a different scale factor.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const unlisten = await getCurrent().onScaleChanged(({ payload }) => {
  console.log('Scale changed', payload.scaleFactor, payload.size);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Parameter | Type                                                                                                                                                      |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< [`ScaleFactorChanged`](/references/js/core/namespacewindow/#scalefactorchanged) \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1776](undefined)

---

##### onThemeChanged()

```ts
onThemeChanged(handler): Promise< UnlistenFn >
```

Listen to the system theme change.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const unlisten = await getCurrent().onThemeChanged(({ payload: theme }) => {
  console.log('New theme: ' + theme);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Parameters

| Parameter | Type                                                                                                                            |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------ |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< [`Theme`](/references/js/core/namespacewindow/#theme) \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1802](undefined)

---

##### once()

```ts
once<T>(event, handler): Promise< UnlistenFn >
```

Listen to an emitted event on this window only once.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const unlisten = await getCurrent().once<null>('initialized', (event) => {
  console.log(`Window initialized!`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

###### Type parameters

| Parameter |
| :-------- |
| `T`       |

###### Parameters

| Parameter | Type                                                                          | Description                                                                   |
| :-------- | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `event`   | `string`                                                                      | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< `T` \> | Event handler.                                                                |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:416](undefined)

---

##### outerPosition()

```ts
outerPosition(): Promise< PhysicalPosition >
```

The position of the top-left hand corner of the window relative to the top-left hand corner of the desktop.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const position = await getCurrent().outerPosition();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalPosition`](/references/js/core/namespacedpi/#physicalposition) \>

The window's outer position.

**Source**: [window.ts:544](undefined)

---

##### outerSize()

```ts
outerSize(): Promise< PhysicalSize >
```

The physical size of the entire window.
These dimensions include the title bar and borders. If you don't want that (and you usually don't), use inner_size instead.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const size = await getCurrent().outerSize();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize) \>

The window's outer size.

**Source**: [window.ts:581](undefined)

---

##### requestUserAttention()

```ts
requestUserAttention(requestType): Promise< void >
```

Requests user attention to the window, this has no effect if the application
is already focused. How requesting for user attention manifests is platform dependent,
see `UserAttentionType` for details.

Providing `null` will unset the request for user attention. Unsetting the request for
user attention might not be done automatically by the WM when the window receives input.

#### Platform-specific

- **macOS:** `null` has no effect.
- **Linux:** Urgency levels have the same effect.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().requestUserAttention();
```

###### Parameters

| Parameter     | Type                                                                                    |
| :------------ | :-------------------------------------------------------------------------------------- |
| `requestType` | `null` \| [`UserAttentionType`](/references/js/core/namespacewindow/#userattentiontype) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:836](undefined)

---

##### scaleFactor()

```ts
scaleFactor(): Promise< number >
```

The scale factor that can be used to map physical pixels to logical pixels.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const factor = await getCurrent().scaleFactor();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `number` \>

The window's monitor scale factor.

**Source**: [window.ts:512](undefined)

---

##### setAlwaysOnBottom()

```ts
setAlwaysOnBottom(alwaysOnBottom): Promise< void >
```

Whether the window should always be below other windows.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setAlwaysOnBottom(true);
```

###### Parameters

| Parameter        | Type      | Description                                                     |
| :--------------- | :-------- | :-------------------------------------------------------------- |
| `alwaysOnBottom` | `boolean` | Whether the window should always be below other windows or not. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1197](undefined)

---

##### setAlwaysOnTop()

```ts
setAlwaysOnTop(alwaysOnTop): Promise< void >
```

Whether the window should always be on top of other windows.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setAlwaysOnTop(true);
```

###### Parameters

| Parameter     | Type      | Description                                                         |
| :------------ | :-------- | :------------------------------------------------------------------ |
| `alwaysOnTop` | `boolean` | Whether the window should always be on top of other windows or not. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1179](undefined)

---

##### setClosable()

```ts
setClosable(closable): Promise< void >
```

Sets whether the window's native close button is enabled or not.

#### Platform-specific

- **Linux:** GTK+ will do its best to convince the window manager not to show a close button. Depending on the system, this function may not have any effect when called on a window that is already visible
- **iOS / Android:** Unsupported.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setClosable(false);
```

###### Parameters

| Parameter  | Type      |
| :--------- | :-------- |
| `closable` | `boolean` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:933](undefined)

---

##### setContentProtected()

```ts
setContentProtected(protected_): Promise< void >
```

Prevents the window contents from being captured by other apps.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setContentProtected(true);
```

###### Parameters

| Parameter    | Type      |
| :----------- | :-------- |
| `protected_` | `boolean` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1214](undefined)

---

##### setCursorGrab()

```ts
setCursorGrab(grab): Promise< void >
```

Grabs the cursor, preventing it from leaving the window.

There's no guarantee that the cursor will be hidden. You should
hide it by yourself if you want so.

#### Platform-specific

- **Linux:** Unsupported.
- **macOS:** This locks the cursor in a fixed location, which looks visually awkward.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setCursorGrab(true);
```

###### Parameters

| Parameter | Type      | Description                                            |
| :-------- | :-------- | :----------------------------------------------------- |
| `grab`    | `boolean` | `true` to grab the cursor icon, `false` to release it. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1454](undefined)

---

##### setCursorIcon()

```ts
setCursorIcon(icon): Promise< void >
```

Modifies the cursor icon of the window.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setCursorIcon('help');
```

###### Parameters

| Parameter | Type                                                            | Description          |
| :-------- | :-------------------------------------------------------------- | :------------------- |
| `icon`    | [`CursorIcon`](/references/js/core/namespacewindow/#cursoricon) | The new cursor icon. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1496](undefined)

---

##### setCursorPosition()

```ts
setCursorPosition(position): Promise< void >
```

Changes the position of the cursor in window coordinates.

###### Example

```typescript
import { getCurrent, LogicalPosition } from '@tauri-apps/api/window';
await getCurrent().setCursorPosition(new LogicalPosition(600, 300));
```

###### Parameters

| Parameter  | Type                                                                                                                                               | Description              |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- |
| `position` | [`LogicalPosition`](/references/js/core/namespacedpi/#logicalposition) \| [`PhysicalPosition`](/references/js/core/namespacedpi/#physicalposition) | The new cursor position. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1514](undefined)

---

##### setCursorVisible()

```ts
setCursorVisible(visible): Promise< void >
```

Modifies the cursor's visibility.

#### Platform-specific

- **Windows:** The cursor is only hidden within the confines of the window.
- **macOS:** The cursor is hidden as long as the window has input focus, even if the cursor is
  outside of the window.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setCursorVisible(false);
```

###### Parameters

| Parameter | Type      | Description                                                                  |
| :-------- | :-------- | :--------------------------------------------------------------------------- |
| `visible` | `boolean` | If `false`, this will hide the cursor. If `true`, this will show the cursor. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1478](undefined)

---

##### setDecorations()

```ts
setDecorations(decorations): Promise< void >
```

Whether the window should have borders and bars.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setDecorations(false);
```

###### Parameters

| Parameter     | Type      | Description                                      |
| :------------ | :-------- | :----------------------------------------------- |
| `decorations` | `boolean` | Whether the window should have borders and bars. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1115](undefined)

---

##### setEffects()

```ts
setEffects(effects): Promise< void >
```

Set window effects.

###### Parameters

| Parameter | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `effects` | [`Effects`](/references/js/core/namespacewindow/#effects) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [window.ts:1151](undefined)

---

##### setFocus()

```ts
setFocus(): Promise< void >
```

Bring the window to front and focus.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setFocus();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1382](undefined)

---

##### setFullscreen()

```ts
setFullscreen(fullscreen): Promise< void >
```

Sets the window fullscreen state.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setFullscreen(true);
```

###### Parameters

| Parameter    | Type      | Description                                        |
| :----------- | :-------- | :------------------------------------------------- |
| `fullscreen` | `boolean` | Whether the window should go to fullscreen or not. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1365](undefined)

---

##### setIcon()

```ts
setIcon(icon): Promise< void >
```

Sets the window icon.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setIcon('/tauri/awesome.png');
```

Note that you need the `icon-ico` or `icon-png` Cargo features to use this API.
To enable it, change your Cargo.toml file:

```toml
[dependencies]
tauri = { version = "...", features = ["...", "icon-png"] }
```

###### Parameters

| Parameter | Type                                                                                                              | Description                          |
| :-------- | :---------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| `icon`    | `string` \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) | Icon bytes or path to the icon file. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1406](undefined)

---

##### setIgnoreCursorEvents()

```ts
setIgnoreCursorEvents(ignore): Promise< void >
```

Changes the cursor events behavior.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setIgnoreCursorEvents(true);
```

###### Parameters

| Parameter | Type      | Description                                                           |
| :-------- | :-------- | :-------------------------------------------------------------------- |
| `ignore`  | `boolean` | `true` to ignore the cursor events; `false` to process them as usual. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1550](undefined)

---

##### setMaxSize()

```ts
setMaxSize(size): Promise< void >
```

Sets the window maximum inner size. If the `size` argument is undefined, the constraint is unset.

###### Example

```typescript
import { getCurrent, LogicalSize } from '@tauri-apps/api/window';
await getCurrent().setMaxSize(new LogicalSize(600, 500));
```

###### Parameters

| Parameter | Type                                                                                                                                                        | Description                                                            |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| `size`    | `undefined` \| `null` \| [`LogicalSize`](/references/js/core/namespacedpi/#logicalsize) \| [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize) | The logical or physical inner size, or `null` to unset the constraint. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1296](undefined)

---

##### setMaximizable()

```ts
setMaximizable(maximizable): Promise< void >
```

Sets whether the window's native maximize button is enabled or not.
If resizable is set to false, this setting is ignored.

#### Platform-specific

- **macOS:** Disables the "zoom" button in the window titlebar, which is also used to enter fullscreen mode.
- **Linux / iOS / Android:** Unsupported.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setMaximizable(false);
```

###### Parameters

| Parameter     | Type      |
| :------------ | :-------- |
| `maximizable` | `boolean` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:888](undefined)

---

##### setMinSize()

```ts
setMinSize(size): Promise< void >
```

Sets the window minimum inner size. If the `size` argument is not provided, the constraint is unset.

###### Example

```typescript
import { getCurrent, PhysicalSize } from '@tauri-apps/api/window';
await getCurrent().setMinSize(new PhysicalSize(600, 500));
```

###### Parameters

| Parameter | Type                                                                                                                                                        | Description                                                            |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| `size`    | `undefined` \| `null` \| [`LogicalSize`](/references/js/core/namespacedpi/#logicalsize) \| [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize) | The logical or physical inner size, or `null` to unset the constraint. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1262](undefined)

---

##### setMinimizable()

```ts
setMinimizable(minimizable): Promise< void >
```

Sets whether the window's native minimize button is enabled or not.

#### Platform-specific

- **Linux / iOS / Android:** Unsupported.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setMinimizable(false);
```

###### Parameters

| Parameter     | Type      |
| :------------ | :-------- |
| `minimizable` | `boolean` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:910](undefined)

---

##### setPosition()

```ts
setPosition(position): Promise< void >
```

Sets the window outer position.

###### Example

```typescript
import { getCurrent, LogicalPosition } from '@tauri-apps/api/window';
await getCurrent().setPosition(new LogicalPosition(600, 500));
```

###### Parameters

| Parameter  | Type                                                                                                                                               | Description                                      |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| `position` | [`LogicalPosition`](/references/js/core/namespacedpi/#logicalposition) \| [`PhysicalPosition`](/references/js/core/namespacedpi/#physicalposition) | The new position, in logical or physical pixels. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1330](undefined)

---

##### setProgressBar()

```ts
setProgressBar(state): Promise< void >
```

Sets the taskbar progress state.

#### Platform-specific

- **Linux / macOS**: Progress bar is app-wide and not specific to this window.
- **Linux**: Only supported desktop environments with `libunity` (e.g. GNOME).

###### Example

```typescript
import { getCurrent, ProgressBarStatus } from '@tauri-apps/api/window';
await getCurrent().setProgressBar({
  status: ProgressBarStatus.Normal,
  progress: 50,
});
```

###### Parameters

| Parameter | Type                                                                        |
| :-------- | :-------------------------------------------------------------------------- |
| `state`   | [`ProgressBarState`](/references/js/core/namespacewindow/#progressbarstate) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1609](undefined)

---

##### setResizable()

```ts
setResizable(resizable): Promise< void >
```

Updates the window resizable flag.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setResizable(false);
```

###### Parameters

| Parameter   | Type      |
| :---------- | :-------- |
| `resizable` | `boolean` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:864](undefined)

---

##### setShadow()

```ts
setShadow(enable): Promise< void >
```

Whether or not the window should have shadow.

#### Platform-specific

- **Windows:**
  - `false` has no effect on decorated window, shadows are always ON.
  - `true` will make ndecorated window have a 1px white border,
    and on Windows 11, it will have a rounded corners.
- **Linux:** Unsupported.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setShadow(false);
```

###### Parameters

| Parameter | Type      |
| :-------- | :-------- |
| `enable`  | `boolean` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1141](undefined)

---

##### setSize()

```ts
setSize(size): Promise< void >
```

Resizes the window with a new inner size.

###### Example

```typescript
import { getCurrent, LogicalSize } from '@tauri-apps/api/window';
await getCurrent().setSize(new LogicalSize(600, 500));
```

###### Parameters

| Parameter | Type                                                                                                                               | Description                         |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------- |
| `size`    | [`LogicalSize`](/references/js/core/namespacedpi/#logicalsize) \| [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize) | The logical or physical inner size. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1232](undefined)

---

##### setSkipTaskbar()

```ts
setSkipTaskbar(skip): Promise< void >
```

Whether the window icon should be hidden from the taskbar or not.

#### Platform-specific

- **macOS:** Unsupported.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setSkipTaskbar(true);
```

###### Parameters

| Parameter | Type      | Description                                 |
| :-------- | :-------- | :------------------------------------------ |
| `skip`    | `boolean` | true to hide window icon, false to show it. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1428](undefined)

---

##### setTitle()

```ts
setTitle(title): Promise< void >
```

Sets the window title.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().setTitle('Tauri');
```

###### Parameters

| Parameter | Type     | Description   |
| :-------- | :------- | :------------ |
| `title`   | `string` | The new title |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:951](undefined)

---

##### setVisibleOnAllWorkspaces()

```ts
setVisibleOnAllWorkspaces(visible): Promise< void >
```

Sets whether the window should be visible on all workspaces or virtual desktops.

## Platform-specific

- **Windows / iOS / Android:** Unsupported.

###### Since

2.0.0

###### Parameters

| Parameter | Type      |
| :-------- | :-------- |
| `visible` | `boolean` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [window.ts:1625](undefined)

---

##### show()

```ts
show(): Promise< void >
```

Sets the window visibility to true.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().show();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1048](undefined)

---

##### startDragging()

```ts
startDragging(): Promise< void >
```

Starts dragging the window.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().startDragging();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1567](undefined)

---

##### startResizeDragging()

```ts
startResizeDragging(direction): Promise< void >
```

Starts resize-dragging the window.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().startResizeDragging();
```

###### Parameters

| Parameter   | Type              |
| :---------- | :---------------- |
| `direction` | `ResizeDirection` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1583](undefined)

---

##### theme()

```ts
theme(): Promise< null | Theme >
```

Gets the window's current theme.

#### Platform-specific

- **macOS:** Theme was introduced on macOS 10.14. Returns `light` on macOS 10.13 and below.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const theme = await getCurrent().theme();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `null` \| [`Theme`](/references/js/core/namespacewindow/#theme) \>

The window theme.

**Source**: [window.ts:792](undefined)

---

##### title()

```ts
title(): Promise< string >
```

Gets the window's current title.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
const title = await getCurrent().title();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [window.ts:771](undefined)

---

##### toggleMaximize()

```ts
toggleMaximize(): Promise< void >
```

Toggles the window maximized state.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().toggleMaximize();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1000](undefined)

---

##### unmaximize()

```ts
unmaximize(): Promise< void >
```

Unmaximizes the window.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().unmaximize();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:984](undefined)

---

##### unminimize()

```ts
unminimize(): Promise< void >
```

Unminimizes the window.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().unminimize();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1032](undefined)

---

##### getAll()

```ts
static getAll(): Window[]
```

Gets a list of instances of `Window` for all available windows.

###### Returns

[`Window`](/references/js/core/namespacewindow/#window)[]

**Source**: [window.ts:339](undefined)

---

##### getByLabel()

```ts
static getByLabel(label): null | Window
```

Gets the Window associated with the given label.

###### Example

```typescript
import { Window } from '@tauri-apps/api/window';
const mainWindow = Window.getByLabel('main');
```

###### Parameters

| Parameter | Type     | Description       |
| :-------- | :------- | :---------------- |
| `label`   | `string` | The window label. |

###### Returns

`null` \| [`Window`](/references/js/core/namespacewindow/#window)

The Window instance to communicate with the window or null if the window doesn't exist.

**Source**: [window.ts:325](undefined)

---

##### getCurrent()

```ts
static getCurrent(): Window
```

Get an instance of `Window` for the current window.

###### Returns

[`Window`](/references/js/core/namespacewindow/#window)

**Source**: [window.ts:332](undefined)

---

##### getFocusedWindow()

```ts
static getFocusedWindow(): Promise< null | Window >
```

Gets the focused window.

###### Example

```typescript
import { Window } from '@tauri-apps/api/window';
const focusedWindow = Window.getFocusedWindow();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `null` \| [`Window`](/references/js/core/namespacewindow/#window) \>

The Window instance or `undefined` if there is not any focused window.

**Source**: [window.ts:353](undefined)

## Interfaces

### Effects

The window effects configuration object

#### Since

2.0.0

#### Properties

| Property                                      | Type                                                              | Description                                                                                                                                                                                                                                  |
| :-------------------------------------------- | :---------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="color" name="color"></a> `color`?      | [`Color`](/references/js/core/namespacewindow/#color)             | Window effect color. Affects [Effect.Blur](/references/js/core/namespacewindow/#blur) and [Effect.Acrylic](/references/js/core/namespacewindow/#acrylic) only<br />on Windows 10 v1903+. Doesn't have any effect on Windows 7 or Windows 11. |
| <a id="effects" name="effects"></a> `effects` | [`Effect`](/references/js/core/namespacewindow/#effect)[]         | List of Window effects to apply to the Window.<br />Conflicting effects will apply the first one and ignore the rest.                                                                                                                        |
| <a id="radius" name="radius"></a> `radius`?   | `number`                                                          | Window effect corner radius **macOS Only**                                                                                                                                                                                                   |
| <a id="state" name="state"></a> `state`?      | [`EffectState`](/references/js/core/namespacewindow/#effectstate) | Window effect state **macOS Only**                                                                                                                                                                                                           |

---

### Monitor

Allows you to retrieve information about a given monitor.

#### Since

1.0.0

#### Properties

| Property                                                  | Type                                                                     | Description                                                                          |
| :-------------------------------------------------------- | :----------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| <a id="name" name="name"></a> `name`                      | `null` \| `string`                                                       | Human-readable name of the monitor                                                   |
| <a id="position" name="position"></a> `position`          | [`PhysicalPosition`](/references/js/core/namespacedpi/#physicalposition) | the Top-left corner position of the monitor relative to the larger full screen area. |
| <a id="scalefactor" name="scalefactor"></a> `scaleFactor` | `number`                                                                 | The scale factor that can be used to map physical pixels to logical pixels.          |
| <a id="size" name="size"></a> `size`                      | [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize)         | The monitor's resolution.                                                            |

---

### ProgressBarState

#### Properties

| Property                                          | Type                                                                          | Description                                                                                     |
| :------------------------------------------------ | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------- |
| <a id="progress" name="progress"></a> `progress`? | `number`                                                                      | The progress bar progress. This can be a value ranging from `0` to `100`                        |
| <a id="status" name="status"></a> `status`?       | [`ProgressBarStatus`](/references/js/core/namespacewindow/#progressbarstatus) | The progress bar status.                                                                        |
| <a id="unityuri" name="unityuri"></a> `unityUri`? | `string`                                                                      | The identifier for your app to communicate with the Unity desktop window manager **Linux Only** |

---

### ScaleFactorChanged

The payload for the `scaleChange` event.

#### Since

1.0.2

#### Properties

| Property                                                  | Type                                                             | Description                  |
| :-------------------------------------------------------- | :--------------------------------------------------------------- | :--------------------------- |
| <a id="scalefactor" name="scalefactor"></a> `scaleFactor` | `number`                                                         | The new window scale factor. |
| <a id="size" name="size"></a> `size`                      | [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize) | The new window size          |

---

### WindowOptions

Configuration for the window to create.

#### Since

1.0.0

#### Properties

| Property                                                                                    | Type                                                                                                                                          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| :------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="alwaysonbottom" name="alwaysonbottom"></a> `alwaysOnBottom`?                         | `boolean`                                                                                                                                     | Whether the window should always be below other windows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <a id="alwaysontop" name="alwaysontop"></a> `alwaysOnTop`?                                  | `boolean`                                                                                                                                     | Whether the window should always be on top of other windows or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| <a id="center" name="center"></a> `center`?                                                 | `boolean`                                                                                                                                     | Show window in the center of the screen..                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <a id="closable" name="closable"></a> `closable`?                                           | `boolean`                                                                                                                                     | Whether the window's native close button is enabled or not. Defaults to `true`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <a id="contentprotected" name="contentprotected"></a> `contentProtected`?                   | `boolean`                                                                                                                                     | Prevents the window contents from being captured by other apps.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <a id="decorations" name="decorations"></a> `decorations`?                                  | `boolean`                                                                                                                                     | Whether the window should have borders and bars or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <a id="focus" name="focus"></a> `focus`?                                                    | `boolean`                                                                                                                                     | Whether the window will be initially focused or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <a id="fullscreen" name="fullscreen"></a> `fullscreen`?                                     | `boolean`                                                                                                                                     | Whether the window is in fullscreen mode or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <a id="height" name="height"></a> `height`?                                                 | `number`                                                                                                                                      | The initial height.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| <a id="hiddentitle" name="hiddentitle"></a> `hiddenTitle`?                                  | `boolean`                                                                                                                                     | If `true`, sets the window title to be hidden on macOS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <a id="maxheight" name="maxheight"></a> `maxHeight`?                                        | `number`                                                                                                                                      | The maximum height. Only applies if `maxWidth` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="maxwidth" name="maxwidth"></a> `maxWidth`?                                           | `number`                                                                                                                                      | The maximum width. Only applies if `maxHeight` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="maximizable" name="maximizable"></a> `maximizable`?                                  | `boolean`                                                                                                                                     | Whether the window's native maximize button is enabled or not. Defaults to `true`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <a id="maximized" name="maximized"></a> `maximized`?                                        | `boolean`                                                                                                                                     | Whether the window should be maximized upon creation or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <a id="minheight" name="minheight"></a> `minHeight`?                                        | `number`                                                                                                                                      | The minimum height. Only applies if `minWidth` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="minwidth" name="minwidth"></a> `minWidth`?                                           | `number`                                                                                                                                      | The minimum width. Only applies if `minHeight` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="minimizable" name="minimizable"></a> `minimizable`?                                  | `boolean`                                                                                                                                     | Whether the window's native minimize button is enabled or not. Defaults to `true`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <a id="parent" name="parent"></a> `parent`?                                                 | `string` \| [`Window`](/references/js/core/namespacewindow/#window) \| [`WebviewWindow`](/references/js/core/namespacewebview/#webviewwindow) | Sets a parent to the window to be created. Can be either a [`Window`](/references/js/core/namespacewindow/#window) or a label of the window.<br /><br />#### Platform-specific<br /><br />- **Windows**: This sets the passed parent as an owner window to the window to be created.<br /> From [MSDN owned windows docs](https://docs.microsoft.com/en-us/windows/win32/winmsg/window-features#owned-windows):<br /> - An owned window is always above its owner in the z-order.<br /> - The system automatically destroys an owned window when its owner is destroyed.<br /> - An owned window is hidden when its owner is minimized.<br />- **Linux**: This makes the new window transient for parent, see \<https://docs.gtk.org/gtk3/method.Window.set_transient_for.html\><br />- **macOS**: This adds the window as a child of parent, see \<https://developer.apple.com/documentation/appkit/nswindow/1419152-addchildwindow?language=objc\> |
| <a id="resizable" name="resizable"></a> `resizable`?                                        | `boolean`                                                                                                                                     | Whether the window is resizable or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <a id="shadow" name="shadow"></a> `shadow`?                                                 | `boolean`                                                                                                                                     | Whether or not the window has shadow.<br /><br />#### Platform-specific<br /><br />- **Windows:**<br /> - `false` has no effect on decorated window, shadows are always ON.<br /> - `true` will make ndecorated window have a 1px white border,<br />and on Windows 11, it will have a rounded corners.<br />- **Linux:** Unsupported.<br /><br />**Since**<br /><br />2.0.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <a id="skiptaskbar" name="skiptaskbar"></a> `skipTaskbar`?                                  | `boolean`                                                                                                                                     | Whether or not the window icon should be added to the taskbar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <a id="tabbingidentifier" name="tabbingidentifier"></a> `tabbingIdentifier`?                | `string`                                                                                                                                      | Defines the window [tabbing identifier](https://developer.apple.com/documentation/appkit/nswindow/1644704-tabbingidentifier) on macOS.<br /><br />Windows with the same tabbing identifier will be grouped together.<br />If the tabbing identifier is not set, automatic tabbing will be disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| <a id="theme" name="theme"></a> `theme`?                                                    | [`Theme`](/references/js/core/namespacewindow/#theme)                                                                                         | The initial window theme. Defaults to the system theme.<br /><br />Only implemented on Windows and macOS 10.14+.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <a id="title" name="title"></a> `title`?                                                    | `string`                                                                                                                                      | Window title.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <a id="titlebarstyle" name="titlebarstyle"></a> `titleBarStyle`?                            | [`TitleBarStyle`](/references/js/core/namespacewindow/#titlebarstyle)                                                                         | The style of the macOS title bar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| <a id="transparent" name="transparent"></a> `transparent`?                                  | `boolean`                                                                                                                                     | Whether the window is transparent or not.<br />Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > app > macOSPrivateApi`.<br />WARNING: Using private APIs on `macOS` prevents your application from being accepted to the `App Store`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <a id="visible" name="visible"></a> `visible`?                                              | `boolean`                                                                                                                                     | Whether the window should be immediately visible upon creation or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <a id="visibleonallworkspaces" name="visibleonallworkspaces"></a> `visibleOnAllWorkspaces`? | `boolean`                                                                                                                                     | Whether the window should be visible on all workspaces or virtual desktops.<br /><br />## Platform-specific<br /><br />- **Windows / iOS / Android:** Unsupported.<br /><br />**Since**<br /><br />2.0.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <a id="width" name="width"></a> `width`?                                                    | `number`                                                                                                                                      | The initial width.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <a id="x" name="x"></a> `x`?                                                                | `number`                                                                                                                                      | The initial vertical position. Only applies if `y` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <a id="y" name="y"></a> `y`?                                                                | `number`                                                                                                                                      | The initial horizontal position. Only applies if `x` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## Type Aliases

### Color

```ts
Color: [number, number, number, number];
```

an array RGBA colors. Each value has minimum of 0 and maximum of 255.

#### Since

2.0.0

**Source**: [window.ts:1812](undefined)

---

### CursorIcon

```ts
CursorIcon: 'default' |
  'crosshair' |
  'hand' |
  'arrow' |
  'move' |
  'text' |
  'wait' |
  'help' |
  'progress' |
  'notAllowed' |
  'contextMenu' |
  'cell' |
  'verticalText' |
  'alias' |
  'copy' |
  'noDrop' |
  'grab' |
  'grabbing' |
  'allScroll' |
  'zoomIn' |
  'zoomOut' |
  'eResize' |
  'nResize' |
  'neResize' |
  'nwResize' |
  'sResize' |
  'seResize' |
  'swResize' |
  'wResize' |
  'ewResize' |
  'nsResize' |
  'neswResize' |
  'nwseResize' |
  'colResize' |
  'rowResize';
```

**Source**: [window.ts:121](undefined)

---

### Theme

```ts
Theme: 'light' | 'dark';
```

**Source**: [window.ts:55](undefined)

---

### TitleBarStyle

```ts
TitleBarStyle: 'visible' | 'transparent' | 'overlay';
```

**Source**: [window.ts:56](undefined)

## Functions

### availableMonitors()

```ts
availableMonitors(): Promise< Monitor[] >
```

Returns the list of all the monitors available on the system.

#### Example

```typescript
import { availableMonitors } from '@tauri-apps/api/window';
const monitors = availableMonitors();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Monitor`](/references/js/core/namespacewindow/#monitor)[] \>

**Source**: [window.ts:2174](undefined)

---

### currentMonitor()

```ts
currentMonitor(): Promise< Monitor | null >
```

Returns the monitor on which the window currently resides.
Returns `null` if current monitor can't be detected.

#### Example

```typescript
import { currentMonitor } from '@tauri-apps/api/window';
const monitor = currentMonitor();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Monitor`](/references/js/core/namespacewindow/#monitor) \| `null` \>

**Source**: [window.ts:2141](undefined)

---

### getAll()

```ts
getAll(): Window[]
```

Gets a list of instances of `Window` for all available windows.

#### Since

1.0.0

#### Returns

[`Window`](/references/js/core/namespacewindow/#window)[]

**Source**: [window.ts:217](undefined)

---

### getCurrent()

```ts
getCurrent(): Window
```

Get an instance of `Window` for the current window.

#### Since

1.0.0

#### Returns

[`Window`](/references/js/core/namespacewindow/#window)

**Source**: [window.ts:205](undefined)

---

### primaryMonitor()

```ts
primaryMonitor(): Promise< Monitor | null >
```

Returns the primary monitor of the system.
Returns `null` if it can't identify any monitor as a primary one.

#### Example

```typescript
import { primaryMonitor } from '@tauri-apps/api/window';
const monitor = primaryMonitor();
```

#### Since

1.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Monitor`](/references/js/core/namespacewindow/#monitor) \| `null` \>

**Source**: [window.ts:2158](undefined)
