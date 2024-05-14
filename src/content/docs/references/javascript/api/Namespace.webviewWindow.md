---
title: 'webviewWindow'
editUrl: false
sidebar:
  label: 'webviewWindow'
---

## References

### DragDropEvent

Re-exports [DragDropEvent](/references/javascript/api/namespacewindow/#dragdropevent)

```ts
DragDropEvent;
```

**Source**: [webviewWindow.ts:234](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webviewWindow.ts#L234)

---

### DragDropPayload

Re-exports [DragDropPayload](/references/javascript/api/namespacewindow/#dragdroppayload)

```ts
DragDropPayload;
```

**Source**: [webviewWindow.ts:234](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webviewWindow.ts#L234)

## Classes

### WebviewWindow

Create new webview or get a handle to an existing one.

Webviews are identified by a _label_ a unique identifier that can be used to reference it later.
It may only contain alphanumeric characters `a-zA-Z` plus the following special characters `-`, `/`, `:` and `_`.

#### Example

```typescript
import { Window } from '@tauri-apps/api/window';
import { Webview } from '@tauri-apps/api/webview';

const appWindow = new Window('uniqueLabel');

// loading embedded asset:
const webview = new Webview(appWindow, 'theUniqueLabel', {
  url: 'path/to/page.html',
});
// alternatively, load a remote URL:
const webview = new Webview(appWindow, 'theUniqueLabel', {
  url: 'https://github.com/tauri-apps/tauri',
});

webview.once('tauri://created', function () {
  // webview successfully created
});
webview.once('tauri://error', function (e) {
  // an error happened creating the webview
});

// emit an event to the backend
await webview.emit('some-event', 'data');
// listen to an event from the backend
const unlisten = await webview.listen('event-name', (e) => {});
unlisten();
```

#### Since

2.0.0

#### Extends

- [`Webview`](/references/javascript/api/namespacewebview/#webview).[`Window`](/references/javascript/api/namespacewindow/#window)

#### Constructors

##### constructor()

```ts
new WebviewWindow(label, options = {}): WebviewWindow
```

Creates a new [Window](/references/javascript/api/namespacewindow/#window) hosting a [Webview](/references/javascript/api/namespacewebview/#webview).

###### Example

```typescript
import { WebviewWindow } from '@tauri-apps/api/webviewWindow';
const webview = new WebviewWindow('my-label', {
  url: 'https://github.com/tauri-apps/tauri',
});
webview.once('tauri://created', function () {
  // webview successfully created
});
webview.once('tauri://error', function (e) {
  // an error happened creating the webview
});
```

###### Parameters

| Parameter | Type                                                                                                                                                                                                                                                                                                   | Description                                                   |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| `label`   | `string`                                                                                                                                                                                                                                                                                               | The unique webview label. Must be alphanumeric: `a-zA-Z-/:_`. |
| `options` | [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\< [`WebviewOptions`](/references/javascript/api/namespacewebview/#webviewoptions), `"width"` \| `"height"` \| `"x"` \| `"y"` \> & [`WindowOptions`](/references/javascript/api/namespacewindow/#windowoptions) | -                                                             |

###### Returns

[`WebviewWindow`](/references/javascript/api/namespacewebviewwindow/#webviewwindow)

The [WebviewWindow](/references/javascript/api/namespacewebviewwindow/#webviewwindow) instance to communicate with the window and webview.

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`constructor`](/references/javascript/api/namespacewindow/#constructor)

**Source**: [webviewWindow.ts:74](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webviewWindow.ts#L74)

#### Properties

| Property                                            | Type                                                                                                                                                                                                | Description                                                                                      |
| :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| <a id="label" name="label"></a> `label`             | `string`                                                                                                                                                                                            | The webview label. It is a unique identifier for the webview, can be used to reference it later. |
| <a id="listeners" name="listeners"></a> `listeners` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< `any` \>[] \> | Local event listeners.                                                                           |
| <a id="window" name="window"></a> `window`          | [`Window`](/references/javascript/api/namespacewindow/#window)                                                                                                                                      | The window hosting this webview.                                                                 |

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`center`](/references/javascript/api/namespacewindow/#center)

**Source**: [window.ts:801](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L801)

---

##### clearEffects()

```ts
clearEffects(): Promise< void >
```

Clear any applied effects if possible.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`clearEffects`](/references/javascript/api/namespacewindow/#cleareffects)

**Source**: [window.ts:1152](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1152)

---

##### close()

```ts
close(): Promise< void >
```

Closes the webview.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
await getCurrent().close();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`close`](/references/javascript/api/namespacewindow/#close)

**Source**: [webview.ts:396](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L396)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`destroy`](/references/javascript/api/namespacewindow/#destroy)

**Source**: [window.ts:1089](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1089)

---

##### emit()

```ts
emit(event, payload?): Promise< void >
```

Emits an event to all [targets](/references/javascript/api/namespaceevent/#eventtarget).

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
await getCurrent().emit('webview-loaded', { loggedIn: true, token: 'authToken' });
```

###### Parameters

| Parameter  | Type      | Description                                                                   |
| :--------- | :-------- | :---------------------------------------------------------------------------- |
| `event`    | `string`  | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload`? | `unknown` | Event payload.                                                                |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`emit`](/references/javascript/api/namespacewindow/#emit)

**Source**: [webview.ts:285](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L285)

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
import { getCurrent } from '@tauri-apps/api/webview';
await getCurrent().emitTo('main', 'webview-loaded', { loggedIn: true, token: 'authToken' });
```

###### Parameters

| Parameter  | Type                                                                                | Description                                                                                                                           |
| :--------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `target`   | `string` \| [`EventTarget`](/references/javascript/api/namespaceevent/#eventtarget) | Label of the target Window/Webview/WebviewWindow or raw [EventTarget](/references/javascript/api/namespaceevent/#eventtarget) object. |
| `event`    | `string`                                                                            | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.                                                         |
| `payload`? | `unknown`                                                                           | Event payload.                                                                                                                        |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`emitTo`](/references/javascript/api/namespacewindow/#emitto)

**Source**: [webview.ts:313](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L313)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`hide`](/references/javascript/api/namespacewindow/#hide)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`innerPosition`](/references/javascript/api/namespacewindow/#innerposition)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`innerSize`](/references/javascript/api/namespacewindow/#innersize)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`isClosable`](/references/javascript/api/namespacewindow/#isclosable)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`isDecorated`](/references/javascript/api/namespacewindow/#isdecorated)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`isFocused`](/references/javascript/api/namespacewindow/#isfocused)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`isFullscreen`](/references/javascript/api/namespacewindow/#isfullscreen)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`isMaximizable`](/references/javascript/api/namespacewindow/#ismaximizable)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`isMaximized`](/references/javascript/api/namespacewindow/#ismaximized)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`isMinimizable`](/references/javascript/api/namespacewindow/#isminimizable)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`isMinimized`](/references/javascript/api/namespacewindow/#isminimized)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`isResizable`](/references/javascript/api/namespacewindow/#isresizable)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`isVisible`](/references/javascript/api/namespacewindow/#isvisible)

**Source**: [window.ts:748](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L748)

---

##### listen()

```ts
listen<T>(event, handler): Promise< UnlistenFn >
```

Listen to an emitted event on this webivew window.

###### Example

```typescript
import { WebviewWindow } from '@tauri-apps/api/webviewWindow';
const unlisten = await WebviewWindow.getCurrent().listen<string>('state-changed', (event) => {
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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`listen`](/references/javascript/api/namespacewindow/#listen)

**Source**: [webviewWindow.ts:154](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webviewWindow.ts#L154)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`maximize`](/references/javascript/api/namespacewindow/#maximize)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`minimize`](/references/javascript/api/namespacewindow/#minimize)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`onCloseRequested`](/references/javascript/api/namespacewindow/#oncloserequested)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`onDragDropEvent`](/references/javascript/api/namespacewindow/#ondragdropevent)

**Source**: [webview.ts:544](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L544)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`onFocusChanged`](/references/javascript/api/namespacewindow/#onfocuschanged)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`onMoved`](/references/javascript/api/namespacewindow/#onmoved)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`onResized`](/references/javascript/api/namespacewindow/#onresized)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`onScaleChanged`](/references/javascript/api/namespacewindow/#onscalechanged)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`onThemeChanged`](/references/javascript/api/namespacewindow/#onthemechanged)

**Source**: [window.ts:1881](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1881)

---

##### once()

```ts
once<T>(event, handler): Promise< UnlistenFn >
```

Listen to an emitted event on this webview window only once.

###### Example

```typescript
import { WebviewWindow } from '@tauri-apps/api/webviewWindow';
const unlisten = await WebviewWindow.getCurrent().once<null>('initialized', (event) => {
  console.log(`Webview initialized!`);
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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`once`](/references/javascript/api/namespacewindow/#once)

**Source**: [webviewWindow.ts:189](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webviewWindow.ts#L189)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`outerPosition`](/references/javascript/api/namespacewindow/#outerposition)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`outerSize`](/references/javascript/api/namespacewindow/#outersize)

**Source**: [window.ts:572](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L572)

---

##### position()

```ts
position(): Promise< PhysicalPosition >
```

The position of the top-left hand corner of the webview's client area relative to the top-left hand corner of the desktop.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
const position = await getCurrent().position();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalPosition`](/references/javascript/api/namespacedpi/#physicalposition) \>

The webview's position.

###### Inherited from

[`Webview`](/references/javascript/api/namespacewebview/#webview).[`position`](/references/javascript/api/namespacewebview/#position)

**Source**: [webview.ts:358](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L358)

---

##### reparent()

```ts
reparent(window): Promise< void >
```

Moves this webview to the given label.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
await getCurrent().reparent('other-window');
```

###### Parameters

| Parameter | Type                                                                                                                                                              |
| :-------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `window`  | `string` \| [`Window`](/references/javascript/api/namespacewindow/#window) \| [`WebviewWindow`](/references/javascript/api/namespacewebviewwindow/#webviewwindow) |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

###### Inherited from

[`Webview`](/references/javascript/api/namespacewebview/#webview).[`reparent`](/references/javascript/api/namespacewebview/#reparent)

**Source**: [webview.ts:510](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L510)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`requestUserAttention`](/references/javascript/api/namespacewindow/#requestuserattention)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`scaleFactor`](/references/javascript/api/namespacewindow/#scalefactor)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setAlwaysOnBottom`](/references/javascript/api/namespacewindow/#setalwaysonbottom)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setAlwaysOnTop`](/references/javascript/api/namespacewindow/#setalwaysontop)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setClosable`](/references/javascript/api/namespacewindow/#setclosable)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setContentProtected`](/references/javascript/api/namespacewindow/#setcontentprotected)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setCursorGrab`](/references/javascript/api/namespacewindow/#setcursorgrab)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setCursorIcon`](/references/javascript/api/namespacewindow/#setcursoricon)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setCursorPosition`](/references/javascript/api/namespacewindow/#setcursorposition)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setCursorVisible`](/references/javascript/api/namespacewindow/#setcursorvisible)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setDecorations`](/references/javascript/api/namespacewindow/#setdecorations)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setEffects`](/references/javascript/api/namespacewindow/#seteffects)

**Source**: [window.ts:1142](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1142)

---

##### setFocus()

```ts
setFocus(): Promise< void >
```

Bring the webview to front and focus.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
await getCurrent().setFocus();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setFocus`](/references/javascript/api/namespacewindow/#setfocus)

**Source**: [webview.ts:477](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L477)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setFullscreen`](/references/javascript/api/namespacewindow/#setfullscreen)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setIcon`](/references/javascript/api/namespacewindow/#seticon)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setIgnoreCursorEvents`](/references/javascript/api/namespacewindow/#setignorecursorevents)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setMaxSize`](/references/javascript/api/namespacewindow/#setmaxsize)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setMaximizable`](/references/javascript/api/namespacewindow/#setmaximizable)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setMinSize`](/references/javascript/api/namespacewindow/#setminsize)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setMinimizable`](/references/javascript/api/namespacewindow/#setminimizable)

**Source**: [window.ts:901](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L901)

---

##### setPosition()

```ts
setPosition(position): Promise< void >
```

Sets the webview position.

###### Example

```typescript
import { getCurrent, LogicalPosition } from '@tauri-apps/api/webview';
await getCurrent().setPosition(new LogicalPosition(600, 500));
```

###### Parameters

| Parameter  | Type                                                                                                                                                             | Description                                      |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| `position` | [`LogicalPosition`](/references/javascript/api/namespacedpi/#logicalposition) \| [`PhysicalPosition`](/references/javascript/api/namespacedpi/#physicalposition) | The new position, in logical or physical pixels. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setPosition`](/references/javascript/api/namespacewindow/#setposition)

**Source**: [webview.ts:443](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L443)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setProgressBar`](/references/javascript/api/namespacewindow/#setprogressbar)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setResizable`](/references/javascript/api/namespacewindow/#setresizable)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setShadow`](/references/javascript/api/namespacewindow/#setshadow)

**Source**: [window.ts:1132](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1132)

---

##### setSize()

```ts
setSize(size): Promise< void >
```

Resizes the webview.

###### Example

```typescript
import { getCurrent, LogicalSize } from '@tauri-apps/api/webview';
await getCurrent().setSize(new LogicalSize(600, 500));
```

###### Parameters

| Parameter | Type                                                                                                                                             | Description                   |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| `size`    | [`LogicalSize`](/references/javascript/api/namespacedpi/#logicalsize) \| [`PhysicalSize`](/references/javascript/api/namespacedpi/#physicalsize) | The logical or physical size. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setSize`](/references/javascript/api/namespacewindow/#setsize)

**Source**: [webview.ts:413](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L413)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setSkipTaskbar`](/references/javascript/api/namespacewindow/#setskiptaskbar)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setTitle`](/references/javascript/api/namespacewindow/#settitle)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`setVisibleOnAllWorkspaces`](/references/javascript/api/namespacewindow/#setvisibleonallworkspaces)

**Source**: [window.ts:1620](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1620)

---

##### setZoom()

```ts
setZoom(scaleFactor): Promise< void >
```

Set webview zoom level.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
await getCurrent().setZoom(1.5);
```

###### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `scaleFactor` | `number` |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

###### Inherited from

[`Webview`](/references/javascript/api/namespacewebview/#webview).[`setZoom`](/references/javascript/api/namespacewebview/#setzoom)

**Source**: [webview.ts:493](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L493)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`show`](/references/javascript/api/namespacewindow/#show)

**Source**: [window.ts:1039](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1039)

---

##### size()

```ts
size(): Promise< PhysicalSize >
```

The physical size of the webview's client area.
The client area is the content of the webview, excluding the title bar and borders.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
const size = await getCurrent().size();
```

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalSize`](/references/javascript/api/namespacedpi/#physicalsize) \>

The webview's size.

###### Inherited from

[`Webview`](/references/javascript/api/namespacewebview/#webview).[`size`](/references/javascript/api/namespacewebview/#size)

**Source**: [webview.ts:375](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L375)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`startDragging`](/references/javascript/api/namespacewindow/#startdragging)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`startResizeDragging`](/references/javascript/api/namespacewindow/#startresizedragging)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`theme`](/references/javascript/api/namespacewindow/#theme)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`title`](/references/javascript/api/namespacewindow/#title)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`toggleMaximize`](/references/javascript/api/namespacewindow/#togglemaximize)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`unmaximize`](/references/javascript/api/namespacewindow/#unmaximize)

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

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`unminimize`](/references/javascript/api/namespacewindow/#unminimize)

**Source**: [window.ts:1023](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1023)

---

##### getAll()

```ts
static getAll(): WebviewWindow[]
```

Gets a list of instances of `Webview` for all available webviews.

###### Returns

[`WebviewWindow`](/references/javascript/api/namespacewebviewwindow/#webviewwindow)[]

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`getAll`](/references/javascript/api/namespacewindow/#getall)

**Source**: [webviewWindow.ts:130](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webviewWindow.ts#L130)

---

##### getByLabel()

```ts
static getByLabel(label): null | WebviewWindow
```

Gets the Webview for the webview associated with the given label.

###### Example

```typescript
import { Webview } from '@tauri-apps/api/webviewWindow';
const mainWebview = Webview.getByLabel('main');
```

###### Parameters

| Parameter | Type     | Description        |
| :-------- | :------- | :----------------- |
| `label`   | `string` | The webview label. |

###### Returns

`null` \| [`WebviewWindow`](/references/javascript/api/namespacewebviewwindow/#webviewwindow)

The Webview instance to communicate with the webview or null if the webview doesn't exist.

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`getByLabel`](/references/javascript/api/namespacewindow/#getbylabel)

**Source**: [webviewWindow.ts:111](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webviewWindow.ts#L111)

---

##### getCurrent()

```ts
static getCurrent(): WebviewWindow
```

Get an instance of `Webview` for the current webview.

###### Returns

[`WebviewWindow`](/references/javascript/api/namespacewebviewwindow/#webviewwindow)

###### Inherited from

[`Window`](/references/javascript/api/namespacewindow/#window).[`getCurrent`](/references/javascript/api/namespacewindow/#getcurrent)

**Source**: [webviewWindow.ts:123](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webviewWindow.ts#L123)

## Functions

### getAll()

```ts
getAll(): WebviewWindow[]
```

Gets a list of instances of `Webview` for all available webview windows.

#### Since

2.0.0

#### Returns

[`WebviewWindow`](/references/javascript/api/namespacewebviewwindow/#webviewwindow)[]

**Source**: [webviewWindow.ts:34](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webviewWindow.ts#L34)

---

### getCurrent()

```ts
getCurrent(): WebviewWindow
```

Get an instance of `Webview` for the current webview window.

#### Since

2.0.0

#### Returns

[`WebviewWindow`](/references/javascript/api/namespacewebviewwindow/#webviewwindow)

**Source**: [webviewWindow.ts:23](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webviewWindow.ts#L23)
