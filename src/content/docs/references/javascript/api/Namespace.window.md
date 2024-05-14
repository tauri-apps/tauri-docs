---
title: 'window'
editUrl: false
sidebar:
  label: 'window'
---

Provides APIs to create windows, communicate with other windows and manipulate the current window.

## Window events

Events can be listened to using [Window.listen](/references/javascript/api/namespacewindow/#listen):

```typescript
import { getCurrent } from '@tauri-apps/api/window';
getCurrent().listen('my-window-event', ({ event, payload }) => {});
```

## References

### LogicalPosition

Re-exports [LogicalPosition](/references/javascript/api/namespacedpi/#logicalposition)

```ts
LogicalPosition;
```

**Source**: [window.ts:2266](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2266)

---

### LogicalSize

Re-exports [LogicalSize](/references/javascript/api/namespacedpi/#logicalsize)

```ts
LogicalSize;
```

**Source**: [window.ts:2264](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2264)

---

### PhysicalPosition

Re-exports [PhysicalPosition](/references/javascript/api/namespacedpi/#physicalposition)

```ts
PhysicalPosition;
```

**Source**: [window.ts:2267](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2267)

---

### PhysicalSize

Re-exports [PhysicalSize](/references/javascript/api/namespacedpi/#physicalsize)

```ts
PhysicalSize;
```

**Source**: [window.ts:2265](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2265)

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

**Source**: [window.ts:2004](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2004)

---

##### AppearanceBased

```ts
AppearanceBased: 'appearanceBased';
```

A default material appropriate for the view's effectiveAppearance. **macOS 10.14-**

###### Deprecated

since macOS 10.14. You should instead choose an appropriate semantic material.

**Source**: [window.ts:1904](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1904)

---

##### Blur

```ts
Blur: 'blur';
```

**Windows 7/10/11(22H1) Only**

## Notes

This effect has bad performance when resizing/dragging the window on Windows 11 build 22621.

**Source**: [window.ts:1996](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1996)

---

##### ContentBackground

```ts
ContentBackground: 'contentBackground';
```

**macOS 10.14+**

**Source**: [window.ts:1976](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1976)

---

##### Dark

```ts
Dark: 'dark';
```

**macOS 10.14-**

###### Deprecated

since macOS 10.14. Use a semantic material instead.

**Source**: [window.ts:1916](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1916)

---

##### FullScreenUI

```ts
FullScreenUI: 'fullScreenUI';
```

**macOS 10.14+**

**Source**: [window.ts:1968](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1968)

---

##### HeaderView

```ts
HeaderView: 'headerView';
```

**macOS 10.14+**

**Source**: [window.ts:1952](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1952)

---

##### HudWindow

```ts
HudWindow: 'hudWindow';
```

**macOS 10.14+**

**Source**: [window.ts:1964](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1964)

---

##### Light

```ts
Light: 'light';
```

**macOS 10.14-**

###### Deprecated

since macOS 10.14. Use a semantic material instead.

**Source**: [window.ts:1910](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1910)

---

##### MediumLight

```ts
MediumLight: 'mediumLight';
```

**macOS 10.14-**

###### Deprecated

since macOS 10.14. Use a semantic material instead.

**Source**: [window.ts:1922](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1922)

---

##### Menu

```ts
Menu: 'menu';
```

**macOS 10.11+**

**Source**: [window.ts:1940](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1940)

---

##### Mica

```ts
Mica: 'mica';
```

**Windows 11 Only**

**Source**: [window.ts:1988](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1988)

---

##### Popover

```ts
Popover: 'popover';
```

**macOS 10.11+**

**Source**: [window.ts:1944](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1944)

---

##### Selection

```ts
Selection: 'selection';
```

**macOS 10.10+**

**Source**: [window.ts:1936](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1936)

---

##### Sheet

```ts
Sheet: 'sheet';
```

**macOS 10.14+**

**Source**: [window.ts:1956](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1956)

---

##### Sidebar

```ts
Sidebar: 'sidebar';
```

**macOS 10.11+**

**Source**: [window.ts:1948](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1948)

---

##### Tabbed

```ts
Tabbed: 'tabbed';
```

Tabbed effect that matches the system dark perefence **Windows 11 Only**

**Source**: [window.ts:2008](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2008)

---

##### TabbedDark

```ts
TabbedDark: 'tabbedDark';
```

Tabbed effect with dark mode but only if dark mode is enabled on the system **Windows 11 Only**

**Source**: [window.ts:2012](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2012)

---

##### TabbedLight

```ts
TabbedLight: 'tabbedLight';
```

Tabbed effect with light mode **Windows 11 Only**

**Source**: [window.ts:2016](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2016)

---

##### Titlebar

```ts
Titlebar: 'titlebar';
```

**macOS 10.10+**

**Source**: [window.ts:1932](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1932)

---

##### Tooltip

```ts
Tooltip: 'tooltip';
```

**macOS 10.14+**

**Source**: [window.ts:1972](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1972)

---

##### UltraDark

```ts
UltraDark: 'ultraDark';
```

**macOS 10.14-**

###### Deprecated

since macOS 10.14. Use a semantic material instead.

**Source**: [window.ts:1928](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1928)

---

##### UnderPageBackground

```ts
UnderPageBackground: 'underPageBackground';
```

**macOS 10.14+**

**Source**: [window.ts:1984](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1984)

---

##### UnderWindowBackground

```ts
UnderWindowBackground: 'underWindowBackground';
```

**macOS 10.14+**

**Source**: [window.ts:1980](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1980)

---

##### WindowBackground

```ts
WindowBackground: 'windowBackground';
```

**macOS 10.14+**

**Source**: [window.ts:1960](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1960)

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

**Source**: [window.ts:2034](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2034)

---

##### FollowsWindowActiveState

```ts
FollowsWindowActiveState: 'followsWindowActiveState';
```

Make window effect state follow the window's active state **macOS only**

**Source**: [window.ts:2030](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2030)

---

##### Inactive

```ts
Inactive: 'inactive';
```

Make window effect state always inactive **macOS only**

**Source**: [window.ts:2038](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2038)

---

### ProgressBarStatus

#### Enumeration Members

##### Error

```ts
Error: 'error';
```

Error state. **Treated as Normal on linux**

**Source**: [window.ts:184](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L184)

---

##### Indeterminate

```ts
Indeterminate: 'indeterminate';
```

Indeterminate state. **Treated as Normal on Linux and macOS**

**Source**: [window.ts:176](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L176)

---

##### None

```ts
None: 'none';
```

Hide progress bar.

**Source**: [window.ts:168](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L168)

---

##### Normal

```ts
Normal: 'normal';
```

Normal state.

**Source**: [window.ts:172](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L172)

---

##### Paused

```ts
Paused: 'paused';
```

Paused state. **Treated as Normal on Linux**

**Source**: [window.ts:180](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L180)

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

**Source**: [window.ts:93](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L93)

---

##### Informational

```ts
Informational: 2;
```

#### Platform-specific

- **macOS:** Bounces the dock icon once.
- **Windows:** Flashes the taskbar button until the application is in focus.

**Source**: [window.ts:99](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L99)

## Classes

### CloseRequestedEvent

#### Constructors

##### constructor()

```ts
new CloseRequestedEvent(event): CloseRequestedEvent
```

###### Parameters

| Parameter | Type                                                                    |
| :-------- | :---------------------------------------------------------------------- |
| `event`   | [`Event`](/references/javascript/api/namespaceevent/#event)\< `null` \> |

###### Returns

[`CloseRequestedEvent`](/references/javascript/api/namespacewindow/#closerequestedevent)

**Source**: [window.ts:109](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L109)

#### Properties

| Property                                                                        | Type                                                                | Description                       |
| :------------------------------------------------------------------------------ | :------------------------------------------------------------------ | :-------------------------------- |
| `private` <a id="_preventdefault" name="_preventdefault"></a> `_preventDefault` | `boolean`                                                           | -                                 |
| <a id="event" name="event"></a> `event`                                         | [`EventName`](/references/javascript/api/namespaceevent/#eventname) | Event name                        |
| <a id="id" name="id"></a> `id`                                                  | `number`                                                            | Event identifier used to unlisten |

#### Methods

##### isPreventDefault()

```ts
isPreventDefault(): boolean
```

###### Returns

`boolean`

**Source**: [window.ts:118](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L118)

---

##### preventDefault()

```ts
preventDefault(): void
```

###### Returns

`void`

**Source**: [window.ts:114](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L114)

---

### Window

Create new window or get a handle to an existing one.

Windows are identified by a _label_ a unique identifier that can be used to reference it later.
It may only contain alphanumeric characters `a-zA-Z` plus the following special characters `-`, `/`, `:` and `_`.

#### Example

```typescript
import { Window } from '@tauri-apps/api/window';

const appWindow = new Window('theUniqueLabel');

appWindow.once('tauri://created', function () {
  // window successfully created
});
appWindow.once('tauri://error', function (e) {
  // an error happened creating the window
});

// emit an event to the backend
await appWindow.emit('some-event', 'data');
// listen to an event from the backend
const unlisten = await appWindow.listen('event-name', (e) => {});
unlisten();
```

#### Since

2.0.0

#### Extended By

- [`WebviewWindow`](/references/javascript/api/namespacewebviewwindow/#webviewwindow)

#### Constructors

##### constructor()

```ts
new Window(label, options = {}): Window
```

Creates a new Window.

###### Example

```typescript
import { Window } from '@tauri-apps/api/window';
const appWindow = new Window('my-label');
appWindow.once('tauri://created', function () {
  // window successfully created
});
appWindow.once('tauri://error', function (e) {
  // an error happened creating the window
});
```

###### Parameters

| Parameter | Type                                                                         | Description                                                  |
| :-------- | :--------------------------------------------------------------------------- | :----------------------------------------------------------- |
| `label`   | `string`                                                                     | The unique window label. Must be alphanumeric: `a-zA-Z-/:_`. |
| `options` | [`WindowOptions`](/references/javascript/api/namespacewindow/#windowoptions) | -                                                            |

###### Returns

[`Window`](/references/javascript/api/namespacewindow/#window)

The [Window](/references/javascript/api/namespacewindow/#window) instance to communicate with the window.

**Source**: [window.ts:283](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L283)

#### Properties

| Property                                            | Type                                                                                                                                                                                                | Description                                                                                    |
| :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| <a id="label" name="label"></a> `label`             | `string`                                                                                                                                                                                            | The window label. It is a unique identifier for the window, can be used to reference it later. |
| <a id="listeners" name="listeners"></a> `listeners` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< `any` \>[] \> | Local event listeners.                                                                         |

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

**Source**: [window.ts:801](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L801)

---

##### clearEffects()

```ts
clearEffects(): Promise< void >
```

Clear any applied effects if possible.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [window.ts:1152](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1152)

---

##### close()

```ts
close(): Promise< void >
```

Closes the window.

Note this emits a closeRequested event so you can intercept it. To force window close, use [Window.destroy](/references/javascript/api/namespacewindow/#destroy).

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().close();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1073](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1073)

---

##### destroy()

```ts
destroy(): Promise< void >
```

Destroys the window. Behaves like [Window.close](/references/javascript/api/namespacewindow/#close) but forces the window close instead of emitting a closeRequested event.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().destroy();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1089](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1089)

---

##### emit()

```ts
emit(event, payload?): Promise< void >
```

Emits an event to all [targets](/references/javascript/api/namespaceevent/#eventtarget).

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

**Source**: [window.ts:431](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L431)

---

##### emitTo()

```ts
emitTo(
  target,
  event,
  payload?): Promise< void >
```

Emits an event to all [targets](/references/javascript/api/namespaceevent/#eventtarget) matching the given target.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/window';
await getCurrent().emit('main', 'window-loaded', { loggedIn: true, token: 'authToken' });
```

###### Parameters

| Parameter  | Type                                                                                | Description                                                                                                                           |
| :--------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `target`   | `string` \| [`EventTarget`](/references/javascript/api/namespaceevent/#eventtarget) | Label of the target Window/Webview/WebviewWindow or raw [EventTarget](/references/javascript/api/namespaceevent/#eventtarget) object. |
| `event`    | `string`                                                                            | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.                                                         |
| `payload`? | `unknown`                                                                           | Event payload.                                                                                                                        |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [window.ts:458](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L458)

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

**Source**: [window.ts:1055](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1055)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalPosition`](/references/javascript/api/namespacedpi/#physicalposition) \>

The window's inner position.

**Source**: [window.ts:519](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L519)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalSize`](/references/javascript/api/namespacedpi/#physicalsize) \>

The window's inner size.

**Source**: [window.ts:552](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L552)

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

**Source**: [window.ts:732](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L732)

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

**Source**: [window.ts:653](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L653)

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

**Source**: [window.ts:637](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L637)

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

**Source**: [window.ts:591](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L591)

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

**Source**: [window.ts:690](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L690)

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

**Source**: [window.ts:621](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L621)

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

**Source**: [window.ts:711](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L711)

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

**Source**: [window.ts:605](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L605)

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

**Source**: [window.ts:669](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L669)

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

**Source**: [window.ts:748](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L748)

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

| Parameter | Type                                                                                 | Description                                                                   |
| :-------- | :----------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `event`   | [`EventName`](/references/javascript/api/namespaceevent/#eventname)                  | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< `T` \> | Event handler.                                                                |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:372](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L372)

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

**Source**: [window.ts:959](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L959)

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

**Source**: [window.ts:1007](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1007)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1700](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1700)

---

##### onDragDropEvent()

```ts
onDragDropEvent(handler): Promise< UnlistenFn >
```

Listen to a file drop event.
The listener is triggered when the user hovers the selected files on the webview,
drops the files or cancels the operation.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
const unlisten = await getCurrent().onDragDropEvent((event) => {
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

| Parameter | Type                                                                                                                                                          |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `handler` | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< [`DragDropEvent`](/references/javascript/api/namespacewindow/#dragdropevent) \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1739](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1739)

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

| Parameter | Type                                                                                       |
| :-------- | :----------------------------------------------------------------------------------------- |
| `handler` | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< `boolean` \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1815](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1815)

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

| Parameter | Type                                                                                                                                                             |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< [`PhysicalPosition`](/references/javascript/api/namespacedpi/#physicalposition) \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1670](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1670)

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

| Parameter | Type                                                                                                                                                     |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< [`PhysicalSize`](/references/javascript/api/namespacedpi/#physicalsize) \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1646](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1646)

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

| Parameter | Type                                                                                                                                                                    |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< [`ScaleFactorChanged`](/references/javascript/api/namespacewindow/#scalefactorchanged) \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1855](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1855)

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

| Parameter | Type                                                                                                                                          |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< [`Theme`](/references/javascript/api/namespacewindow/#theme) \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:1881](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1881)

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

| Parameter | Type                                                                                 | Description                                                                   |
| :-------- | :----------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `event`   | `string`                                                                             | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< `T` \> | Event handler.                                                                |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [window.ts:407](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L407)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalPosition`](/references/javascript/api/namespacedpi/#physicalposition) \>

The window's outer position.

**Source**: [window.ts:535](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L535)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalSize`](/references/javascript/api/namespacedpi/#physicalsize) \>

The window's outer size.

**Source**: [window.ts:572](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L572)

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

| Parameter     | Type                                                                                           |
| :------------ | :--------------------------------------------------------------------------------------------- |
| `requestType` | `null` \| [`UserAttentionType`](/references/javascript/api/namespacewindow/#userattentiontype) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:827](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L827)

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

**Source**: [window.ts:503](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L503)

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

**Source**: [window.ts:1188](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1188)

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

**Source**: [window.ts:1170](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1170)

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

**Source**: [window.ts:924](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L924)

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

**Source**: [window.ts:1205](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1205)

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

**Source**: [window.ts:1449](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1449)

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

| Parameter | Type                                                                   | Description          |
| :-------- | :--------------------------------------------------------------------- | :------------------- |
| `icon`    | [`CursorIcon`](/references/javascript/api/namespacewindow/#cursoricon) | The new cursor icon. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1491](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1491)

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

| Parameter  | Type                                                                                                                                                             | Description              |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------- |
| `position` | [`LogicalPosition`](/references/javascript/api/namespacedpi/#logicalposition) \| [`PhysicalPosition`](/references/javascript/api/namespacedpi/#physicalposition) | The new cursor position. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1509](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1509)

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

**Source**: [window.ts:1473](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1473)

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

**Source**: [window.ts:1106](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1106)

---

##### setEffects()

```ts
setEffects(effects): Promise< void >
```

Set window effects.

###### Parameters

| Parameter | Type                                                             |
| :-------- | :--------------------------------------------------------------- |
| `effects` | [`Effects`](/references/javascript/api/namespacewindow/#effects) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [window.ts:1142](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1142)

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

**Source**: [window.ts:1375](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1375)

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

**Source**: [window.ts:1358](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1358)

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

Note that you need the `image-ico` or `image-png` Cargo features to use this API.
To enable it, change your Cargo.toml file:

```toml
[dependencies]
tauri = { version = "...", features = ["...", "image-png"] }
```

###### Parameters

| Parameter | Type                                                                                                                                                                                                                                                                                                      | Description                          |
| :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| `icon`    | `string` \| `number`[] \| [`ArrayBuffer`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [`Uint8Array`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) \| [`Image`](/references/javascript/api/namespaceimage/#image) | Icon bytes or path to the icon file. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1399](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1399)

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

**Source**: [window.ts:1545](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1545)

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

| Parameter | Type                                                                                                                                                                      | Description                                                            |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------- |
| `size`    | `undefined` \| `null` \| [`LogicalSize`](/references/javascript/api/namespacedpi/#logicalsize) \| [`PhysicalSize`](/references/javascript/api/namespacedpi/#physicalsize) | The logical or physical inner size, or `null` to unset the constraint. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1288](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1288)

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

**Source**: [window.ts:879](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L879)

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

| Parameter | Type                                                                                                                                                                      | Description                                                            |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------- |
| `size`    | `undefined` \| `null` \| [`LogicalSize`](/references/javascript/api/namespacedpi/#logicalsize) \| [`PhysicalSize`](/references/javascript/api/namespacedpi/#physicalsize) | The logical or physical inner size, or `null` to unset the constraint. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1253](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1253)

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

**Source**: [window.ts:901](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L901)

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

| Parameter  | Type                                                                                                                                                             | Description                                      |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| `position` | [`LogicalPosition`](/references/javascript/api/namespacedpi/#logicalposition) \| [`PhysicalPosition`](/references/javascript/api/namespacedpi/#physicalposition) | The new position, in logical or physical pixels. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1323](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1323)

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

| Parameter | Type                                                                               |
| :-------- | :--------------------------------------------------------------------------------- |
| `state`   | [`ProgressBarState`](/references/javascript/api/namespacewindow/#progressbarstate) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1604](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1604)

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

**Source**: [window.ts:855](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L855)

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

**Source**: [window.ts:1132](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1132)

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

| Parameter | Type                                                                                                                                             | Description                         |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------- |
| `size`    | [`LogicalSize`](/references/javascript/api/namespacedpi/#logicalsize) \| [`PhysicalSize`](/references/javascript/api/namespacedpi/#physicalsize) | The logical or physical inner size. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [window.ts:1223](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1223)

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

**Source**: [window.ts:1423](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1423)

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

**Source**: [window.ts:942](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L942)

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

**Source**: [window.ts:1620](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1620)

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

**Source**: [window.ts:1039](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1039)

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

**Source**: [window.ts:1562](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1562)

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

**Source**: [window.ts:1578](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1578)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `null` \| [`Theme`](/references/javascript/api/namespacewindow/#theme) \>

The window theme.

**Source**: [window.ts:783](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L783)

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

**Source**: [window.ts:762](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L762)

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

**Source**: [window.ts:991](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L991)

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

**Source**: [window.ts:975](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L975)

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

**Source**: [window.ts:1023](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1023)

---

##### getAll()

```ts
static getAll(): Window[]
```

Gets a list of instances of `Window` for all available windows.

###### Returns

[`Window`](/references/javascript/api/namespacewindow/#window)[]

**Source**: [window.ts:330](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L330)

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

`null` \| [`Window`](/references/javascript/api/namespacewindow/#window)

The Window instance to communicate with the window or null if the window doesn't exist.

**Source**: [window.ts:316](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L316)

---

##### getCurrent()

```ts
static getCurrent(): Window
```

Get an instance of `Window` for the current window.

###### Returns

[`Window`](/references/javascript/api/namespacewindow/#window)

**Source**: [window.ts:323](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L323)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `null` \| [`Window`](/references/javascript/api/namespacewindow/#window) \>

The Window instance or `undefined` if there is not any focused window.

**Source**: [window.ts:344](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L344)

## Interfaces

### DragDropPayload

#### Properties

| Property                                         | Type                                                                            |
| :----------------------------------------------- | :------------------------------------------------------------------------------ |
| <a id="paths" name="paths"></a> `paths`          | `string`[]                                                                      |
| <a id="position" name="position"></a> `position` | [`PhysicalPosition`](/references/javascript/api/namespacedpi/#physicalposition) |

---

### Effects

The window effects configuration object

#### Since

2.0.0

#### Properties

| Property                                      | Type                                                                     | Description                                                                                                                                                                                                                                                |
| :-------------------------------------------- | :----------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="color" name="color"></a> `color`?      | [`Color`](/references/javascript/api/namespacewindow/#color)             | Window effect color. Affects [Effect.Blur](/references/javascript/api/namespacewindow/#blur) and [Effect.Acrylic](/references/javascript/api/namespacewindow/#acrylic) only<br />on Windows 10 v1903+. Doesn't have any effect on Windows 7 or Windows 11. |
| <a id="effects" name="effects"></a> `effects` | [`Effect`](/references/javascript/api/namespacewindow/#effect)[]         | List of Window effects to apply to the Window.<br />Conflicting effects will apply the first one and ignore the rest.                                                                                                                                      |
| <a id="radius" name="radius"></a> `radius`?   | `number`                                                                 | Window effect corner radius **macOS Only**                                                                                                                                                                                                                 |
| <a id="state" name="state"></a> `state`?      | [`EffectState`](/references/javascript/api/namespacewindow/#effectstate) | Window effect state **macOS Only**                                                                                                                                                                                                                         |

---

### Monitor

Allows you to retrieve information about a given monitor.

#### Since

1.0.0

#### Properties

| Property                                                  | Type                                                                            | Description                                                                          |
| :-------------------------------------------------------- | :------------------------------------------------------------------------------ | :----------------------------------------------------------------------------------- |
| <a id="name" name="name"></a> `name`                      | `null` \| `string`                                                              | Human-readable name of the monitor                                                   |
| <a id="position" name="position"></a> `position`          | [`PhysicalPosition`](/references/javascript/api/namespacedpi/#physicalposition) | the Top-left corner position of the monitor relative to the larger full screen area. |
| <a id="scalefactor" name="scalefactor"></a> `scaleFactor` | `number`                                                                        | The scale factor that can be used to map physical pixels to logical pixels.          |
| <a id="size" name="size"></a> `size`                      | [`PhysicalSize`](/references/javascript/api/namespacedpi/#physicalsize)         | The monitor's resolution.                                                            |

---

### ProgressBarState

#### Properties

| Property                                          | Type                                                                                 | Description                                                              |
| :------------------------------------------------ | :----------------------------------------------------------------------------------- | :----------------------------------------------------------------------- |
| <a id="progress" name="progress"></a> `progress`? | `number`                                                                             | The progress bar progress. This can be a value ranging from `0` to `100` |
| <a id="status" name="status"></a> `status`?       | [`ProgressBarStatus`](/references/javascript/api/namespacewindow/#progressbarstatus) | The progress bar status.                                                 |

---

### ScaleFactorChanged

The payload for the `scaleChange` event.

#### Since

1.0.2

#### Properties

| Property                                                  | Type                                                                    | Description                  |
| :-------------------------------------------------------- | :---------------------------------------------------------------------- | :--------------------------- |
| <a id="scalefactor" name="scalefactor"></a> `scaleFactor` | `number`                                                                | The new window scale factor. |
| <a id="size" name="size"></a> `size`                      | [`PhysicalSize`](/references/javascript/api/namespacedpi/#physicalsize) | The new window size          |

---

### WindowOptions

Configuration for the window to create.

#### Since

1.0.0

#### Properties

| Property                                                                                    | Type                                                                                                                                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| :------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="alwaysonbottom" name="alwaysonbottom"></a> `alwaysOnBottom`?                         | `boolean`                                                                                                                                                         | Whether the window should always be below other windows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| <a id="alwaysontop" name="alwaysontop"></a> `alwaysOnTop`?                                  | `boolean`                                                                                                                                                         | Whether the window should always be on top of other windows or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <a id="center" name="center"></a> `center`?                                                 | `boolean`                                                                                                                                                         | Show window in the center of the screen..                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <a id="closable" name="closable"></a> `closable`?                                           | `boolean`                                                                                                                                                         | Whether the window's native close button is enabled or not. Defaults to `true`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <a id="contentprotected" name="contentprotected"></a> `contentProtected`?                   | `boolean`                                                                                                                                                         | Prevents the window contents from being captured by other apps.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <a id="decorations" name="decorations"></a> `decorations`?                                  | `boolean`                                                                                                                                                         | Whether the window should have borders and bars or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <a id="focus" name="focus"></a> `focus`?                                                    | `boolean`                                                                                                                                                         | Whether the window will be initially focused or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <a id="fullscreen" name="fullscreen"></a> `fullscreen`?                                     | `boolean`                                                                                                                                                         | Whether the window is in fullscreen mode or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <a id="height" name="height"></a> `height`?                                                 | `number`                                                                                                                                                          | The initial height.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <a id="hiddentitle" name="hiddentitle"></a> `hiddenTitle`?                                  | `boolean`                                                                                                                                                         | If `true`, sets the window title to be hidden on macOS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <a id="maxheight" name="maxheight"></a> `maxHeight`?                                        | `number`                                                                                                                                                          | The maximum height. Only applies if `maxWidth` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <a id="maxwidth" name="maxwidth"></a> `maxWidth`?                                           | `number`                                                                                                                                                          | The maximum width. Only applies if `maxHeight` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <a id="maximizable" name="maximizable"></a> `maximizable`?                                  | `boolean`                                                                                                                                                         | Whether the window's native maximize button is enabled or not. Defaults to `true`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="maximized" name="maximized"></a> `maximized`?                                        | `boolean`                                                                                                                                                         | Whether the window should be maximized upon creation or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <a id="minheight" name="minheight"></a> `minHeight`?                                        | `number`                                                                                                                                                          | The minimum height. Only applies if `minWidth` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <a id="minwidth" name="minwidth"></a> `minWidth`?                                           | `number`                                                                                                                                                          | The minimum width. Only applies if `minHeight` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <a id="minimizable" name="minimizable"></a> `minimizable`?                                  | `boolean`                                                                                                                                                         | Whether the window's native minimize button is enabled or not. Defaults to `true`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="parent" name="parent"></a> `parent`?                                                 | `string` \| [`Window`](/references/javascript/api/namespacewindow/#window) \| [`WebviewWindow`](/references/javascript/api/namespacewebviewwindow/#webviewwindow) | Sets a parent to the window to be created. Can be either a [`Window`](/references/javascript/api/namespacewindow/#window) or a label of the window.<br /><br />#### Platform-specific<br /><br />- **Windows**: This sets the passed parent as an owner window to the window to be created.<br /> From [MSDN owned windows docs](https://docs.microsoft.com/en-us/windows/win32/winmsg/window-features#owned-windows):<br /> - An owned window is always above its owner in the z-order.<br /> - The system automatically destroys an owned window when its owner is destroyed.<br /> - An owned window is hidden when its owner is minimized.<br />- **Linux**: This makes the new window transient for parent, see \<https://docs.gtk.org/gtk3/method.Window.set_transient_for.html\><br />- **macOS**: This adds the window as a child of parent, see \<https://developer.apple.com/documentation/appkit/nswindow/1419152-addchildwindow?language=objc\> |
| <a id="resizable" name="resizable"></a> `resizable`?                                        | `boolean`                                                                                                                                                         | Whether the window is resizable or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| <a id="shadow" name="shadow"></a> `shadow`?                                                 | `boolean`                                                                                                                                                         | Whether or not the window has shadow.<br /><br />#### Platform-specific<br /><br />- **Windows:**<br /> - `false` has no effect on decorated window, shadows are always ON.<br /> - `true` will make ndecorated window have a 1px white border,<br />and on Windows 11, it will have a rounded corners.<br />- **Linux:** Unsupported.<br /><br />**Since**<br /><br />2.0.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <a id="skiptaskbar" name="skiptaskbar"></a> `skipTaskbar`?                                  | `boolean`                                                                                                                                                         | Whether or not the window icon should be added to the taskbar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <a id="tabbingidentifier" name="tabbingidentifier"></a> `tabbingIdentifier`?                | `string`                                                                                                                                                          | Defines the window [tabbing identifier](https://developer.apple.com/documentation/appkit/nswindow/1644704-tabbingidentifier) on macOS.<br /><br />Windows with the same tabbing identifier will be grouped together.<br />If the tabbing identifier is not set, automatic tabbing will be disabled.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| <a id="theme" name="theme"></a> `theme`?                                                    | [`Theme`](/references/javascript/api/namespacewindow/#theme)                                                                                                      | The initial window theme. Defaults to the system theme.<br /><br />Only implemented on Windows and macOS 10.14+.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| <a id="title" name="title"></a> `title`?                                                    | `string`                                                                                                                                                          | Window title.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <a id="titlebarstyle" name="titlebarstyle"></a> `titleBarStyle`?                            | [`TitleBarStyle`](/references/javascript/api/namespacewindow/#titlebarstyle)                                                                                      | The style of the macOS title bar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="transparent" name="transparent"></a> `transparent`?                                  | `boolean`                                                                                                                                                         | Whether the window is transparent or not.<br />Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > app > macOSPrivateApi`.<br />WARNING: Using private APIs on `macOS` prevents your application from being accepted to the `App Store`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <a id="visible" name="visible"></a> `visible`?                                              | `boolean`                                                                                                                                                         | Whether the window should be immediately visible upon creation or not.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <a id="visibleonallworkspaces" name="visibleonallworkspaces"></a> `visibleOnAllWorkspaces`? | `boolean`                                                                                                                                                         | Whether the window should be visible on all workspaces or virtual desktops.<br /><br />## Platform-specific<br /><br />- **Windows / iOS / Android:** Unsupported.<br /><br />**Since**<br /><br />2.0.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| <a id="width" name="width"></a> `width`?                                                    | `number`                                                                                                                                                          | The initial width.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="x" name="x"></a> `x`?                                                                | `number`                                                                                                                                                          | The initial vertical position. Only applies if `y` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| <a id="y" name="y"></a> `y`?                                                                | `number`                                                                                                                                                          | The initial horizontal position. Only applies if `x` is also set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

## Type Aliases

### Color

```ts
Color: [number, number, number, number];
```

an array RGBA colors. Each value has minimum of 0 and maximum of 255.

#### Since

2.0.0

**Source**: [window.ts:1891](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1891)

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

**Source**: [window.ts:123](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L123)

---

### DragDropEvent

```ts
DragDropEvent: {type: "dragged";} & DragDropPayload | {type: "dragOver";} & DragOverPayload | {type: "dropped";} & DragDropPayload | {type: "cancelled";}
```

The drag and drop event types.

**Source**: [webview.ts:46](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L46)

---

### Theme

```ts
Theme: 'light' | 'dark';
```

**Source**: [window.ts:57](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L57)

---

### TitleBarStyle

```ts
TitleBarStyle: 'visible' | 'transparent' | 'overlay';
```

**Source**: [window.ts:58](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L58)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Monitor`](/references/javascript/api/namespacewindow/#monitor)[] \>

**Source**: [window.ts:2253](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2253)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Monitor`](/references/javascript/api/namespacewindow/#monitor) \| `null` \>

**Source**: [window.ts:2220](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2220)

---

### getAll()

```ts
getAll(): Window[]
```

Gets a list of instances of `Window` for all available windows.

#### Since

1.0.0

#### Returns

[`Window`](/references/javascript/api/namespacewindow/#window)[]

**Source**: [window.ts:215](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L215)

---

### getCurrent()

```ts
getCurrent(): Window
```

Get an instance of `Window` for the current window.

#### Since

1.0.0

#### Returns

[`Window`](/references/javascript/api/namespacewindow/#window)

**Source**: [window.ts:203](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L203)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`Monitor`](/references/javascript/api/namespacewindow/#monitor) \| `null` \>

**Source**: [window.ts:2237](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L2237)
