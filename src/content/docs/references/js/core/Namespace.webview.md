---
title: 'webview'
editUrl: false
prev: false
next: false
---

Provides APIs to create webviews, communicate with other webviews and manipulate the current webview.

## Webview events

Events can be listened to using [Webview.listen](/references/js/core/namespacewebview/#listen):

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
getCurrent().listen('my-webview-event', ({ event, payload }) => {});
```

## Classes

### Webview

Create new webview or get a handle to an existing one.

Webviews are identified by a _label_ a unique identifier that can be used to reference it later.
It may only contain alphanumeric characters `a-zA-Z` plus the following special characters `-`, `/`, `:` and `_`.

#### Example

```typescript
import { Window } from '@tauri-apps/api/window';
import { Webview } from '@tauri-apps/api/webview';

// loading embedded asset:
const appWindow = new Window('uniqueLabel');

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
await webview.emit('some event', 'data');
// listen to an event from the backend
const unlisten = await webview.listen('event name', (e) => {});
unlisten();
```

#### Since

2.0.0

#### Extended By

- [`WebviewWindow`](/references/js/core/namespacewebview/#webviewwindow)

#### Constructors

##### constructor()

```ts
new Webview(
  window,
  label,
  options): Webview
```

Creates a new Webview.

###### Example

```typescript
import { Window } from '@tauri-apps/api/window';
import { Webview } from '@tauri-apps/api/webview';
const appWindow = new Window('my-label');
const webview = new Window(appWindow, 'my-label', {
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

| Parameter | Type                                                                     | Description                                                   |
| :-------- | :----------------------------------------------------------------------- | :------------------------------------------------------------ |
| `window`  | [`Window`](/references/js/core/namespacewindow/#window)                  | the window to add this webview to.                            |
| `label`   | `string`                                                                 | The unique webview label. Must be alphanumeric: `a-zA-Z-/:_`. |
| `options` | [`WebviewOptions`](/references/js/core/namespacewebview/#webviewoptions) | -                                                             |

###### Returns

[`Webview`](/references/js/core/namespacewebview/#webview)

The [Webview](/references/js/core/namespacewebview/#webview) instance to communicate with the webview.

**Source**: [webview.ts:154](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L154)

#### Properties

| Property                                            | Type                                                                                                                                                                                         | Description                                                                                      |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| <a id="label" name="label"></a> `label`             | `string`                                                                                                                                                                                     | The webview label. It is a unique identifier for the webview, can be used to reference it later. |
| <a id="listeners" name="listeners"></a> `listeners` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< `any` \>[] \> | Local event listeners.                                                                           |
| <a id="window" name="window"></a> `window`          | [`Window`](/references/js/core/namespacewindow/#window)                                                                                                                                      | The window hosting this webview.                                                                 |

#### Methods

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

**Source**: [webview.ts:391](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L391)

---

##### emit()

```ts
emit(event, payload?): Promise< void >
```

Emits an event to all [targets](/references/js/core/namespaceevent/#eventtarget).

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

**Source**: [webview.ts:280](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L280)

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
import { getCurrent } from '@tauri-apps/api/webview';
await getCurrent().emit('webview-loaded', { loggedIn: true, token: 'authToken' });
```

###### Parameters

| Parameter  | Type                                                                         | Description                                                                                                                    |
| :--------- | :--------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `target`   | `string` \| [`EventTarget`](/references/js/core/namespaceevent/#eventtarget) | Label of the target Window/Webview/WebviewWindow or raw [EventTarget](/references/js/core/namespaceevent/#eventtarget) object. |
| `event`    | `string`                                                                     | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.                                                  |
| `payload`? | `unknown`                                                                    | Event payload.                                                                                                                 |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [webview.ts:308](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L308)

---

##### listen()

```ts
listen<T>(event, handler): Promise< UnlistenFn >
```

Listen to an emitted event on this webview.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
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

**Source**: [webview.ts:220](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L220)

---

##### onFileDropEvent()

```ts
onFileDropEvent(handler): Promise< UnlistenFn >
```

Listen to a file drop event.
The listener is triggered when the user hovers the selected files on the webview,
drops the files or cancels the operation.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
const unlisten = await getCurrent().onFileDropEvent((event) => {
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

| Parameter | Type                                                                                                                                             |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< [`FileDropEvent`](/references/js/core/namespacewebview/#filedropevent) \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [webview.ts:505](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L505)

---

##### once()

```ts
once<T>(event, handler): Promise< UnlistenFn >
```

Listen to an emitted event on this webview only once.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
const unlisten = await getCurrent().once<null>('initialized', (event) => {
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

| Parameter | Type                                                                          | Description                                                                   |
| :-------- | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `event`   | `string`                                                                      | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< `T` \> | Event handler.                                                                |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [webview.ts:255](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L255)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalPosition`](/references/js/core/namespacedpi/#physicalposition) \>

The webview's position.

**Source**: [webview.ts:353](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L353)

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

**Source**: [webview.ts:472](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L472)

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

| Parameter  | Type                                                                                                                                               | Description                                      |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| `position` | [`LogicalPosition`](/references/js/core/namespacedpi/#logicalposition) \| [`PhysicalPosition`](/references/js/core/namespacedpi/#physicalposition) | The new position, in logical or physical pixels. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [webview.ts:438](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L438)

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

| Parameter | Type                                                                                                                               | Description                   |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| `size`    | [`LogicalSize`](/references/js/core/namespacedpi/#logicalsize) \| [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize) | The logical or physical size. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [webview.ts:408](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L408)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize) \>

The webview's size.

**Source**: [webview.ts:370](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L370)

---

##### getAll()

```ts
static getAll(): Webview[]
```

Gets a list of instances of `Webview` for all available webviews.

###### Returns

[`Webview`](/references/js/core/namespacewebview/#webview)[]

**Source**: [webview.ts:197](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L197)

---

##### getByLabel()

```ts
static getByLabel(label): null | Webview
```

Gets the Webview for the webview associated with the given label.

###### Example

```typescript
import { Webview } from '@tauri-apps/api/webview';
const mainWebview = Webview.getByLabel('main');
```

###### Parameters

| Parameter | Type     | Description        |
| :-------- | :------- | :----------------- |
| `label`   | `string` | The webview label. |

###### Returns

`null` \| [`Webview`](/references/js/core/namespacewebview/#webview)

The Webview instance to communicate with the webview or null if the webview doesn't exist.

**Source**: [webview.ts:183](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L183)

---

##### getCurrent()

```ts
static getCurrent(): Webview
```

Get an instance of `Webview` for the current webview.

###### Returns

[`Webview`](/references/js/core/namespacewebview/#webview)

**Source**: [webview.ts:190](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L190)

---

### WebviewWindow

Create new webview or get a handle to an existing one.

Webviews are identified by a _label_ a unique identifier that can be used to reference it later.
It may only contain alphanumeric characters `a-zA-Z` plus the following special characters `-`, `/`, `:` and `_`.

#### Example

```typescript
import { Window } from '@tauri-apps/api/window';
import { Webview } from '@tauri-apps/api/webview';

// loading embedded asset:
const appWindow = new Window('uniqueLabel');

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
await webview.emit('some event', 'data');
// listen to an event from the backend
const unlisten = await webview.listen('event name', (e) => {});
unlisten();
```

#### Since

2.0.0

#### Extends

- [`Webview`](/references/js/core/namespacewebview/#webview).[`Window`](/references/js/core/namespacewindow/#window)

#### Constructors

##### constructor()

```ts
new WebviewWindow(label, options = {}): WebviewWindow
```

Creates a new [Window](/references/js/core/namespacewindow/#window) hosting a [Webview](/references/js/core/namespacewebview/#webview).

###### Example

```typescript
import { WebviewWindow } from '@tauri-apps/api/webview';
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

| Parameter | Type                                                                                                                                                                                                                                                                                     | Description                                                   |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------ |
| `label`   | `string`                                                                                                                                                                                                                                                                                 | The unique webview label. Must be alphanumeric: `a-zA-Z-/:_`. |
| `options` | [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\< [`WebviewOptions`](/references/js/core/namespacewebview/#webviewoptions), `"x"` \| `"y"` \| `"width"` \| `"height"` \> & [`WindowOptions`](/references/js/core/namespacewindow/#windowoptions) | -                                                             |

###### Returns

[`WebviewWindow`](/references/js/core/namespacewebview/#webviewwindow)

The [WebviewWindow](/references/js/core/namespacewebview/#webviewwindow) instance to communicate with the window and webview.

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`constructor`](/references/js/core/namespacewindow/#constructor)

**Source**: [webview.ts:584](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L584)

#### Properties

| Property                                            | Type                                                                                                                                                                                         | Description                                                                                      |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| <a id="label" name="label"></a> `label`             | `string`                                                                                                                                                                                     | The webview label. It is a unique identifier for the webview, can be used to reference it later. |
| <a id="listeners" name="listeners"></a> `listeners` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< `any` \>[] \> | Local event listeners.                                                                           |
| <a id="window" name="window"></a> `window`          | [`Window`](/references/js/core/namespacewindow/#window)                                                                                                                                      | The window hosting this webview.                                                                 |

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

[`Window`](/references/js/core/namespacewindow/#window).[`center`](/references/js/core/namespacewindow/#center)

**Source**: [window.ts:810](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L810)

---

##### clearEffects()

```ts
clearEffects(): Promise< void >
```

Clear any applied effects if possible.

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`clearEffects`](/references/js/core/namespacewindow/#cleareffects)

**Source**: [window.ts:1161](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1161)

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

[`Window`](/references/js/core/namespacewindow/#window).[`close`](/references/js/core/namespacewindow/#close)

**Source**: [webview.ts:391](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L391)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`destroy`](/references/js/core/namespacewindow/#destroy)

**Source**: [window.ts:1098](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1098)

---

##### emit()

```ts
emit(event, payload?): Promise< void >
```

Emits an event to all [targets](/references/js/core/namespaceevent/#eventtarget).

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

[`Window`](/references/js/core/namespacewindow/#window).[`emit`](/references/js/core/namespacewindow/#emit)

**Source**: [webview.ts:280](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L280)

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
import { getCurrent } from '@tauri-apps/api/webview';
await getCurrent().emit('webview-loaded', { loggedIn: true, token: 'authToken' });
```

###### Parameters

| Parameter  | Type                                                                         | Description                                                                                                                    |
| :--------- | :--------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `target`   | `string` \| [`EventTarget`](/references/js/core/namespaceevent/#eventtarget) | Label of the target Window/Webview/WebviewWindow or raw [EventTarget](/references/js/core/namespaceevent/#eventtarget) object. |
| `event`    | `string`                                                                     | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.                                                  |
| `payload`? | `unknown`                                                                    | Event payload.                                                                                                                 |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`emitTo`](/references/js/core/namespacewindow/#emitto)

**Source**: [webview.ts:308](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L308)

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

[`Window`](/references/js/core/namespacewindow/#window).[`hide`](/references/js/core/namespacewindow/#hide)

**Source**: [window.ts:1064](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1064)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`innerPosition`](/references/js/core/namespacewindow/#innerposition)

**Source**: [window.ts:528](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L528)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`innerSize`](/references/js/core/namespacewindow/#innersize)

**Source**: [window.ts:561](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L561)

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

[`Window`](/references/js/core/namespacewindow/#window).[`isClosable`](/references/js/core/namespacewindow/#isclosable)

**Source**: [window.ts:741](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L741)

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

[`Window`](/references/js/core/namespacewindow/#window).[`isDecorated`](/references/js/core/namespacewindow/#isdecorated)

**Source**: [window.ts:662](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L662)

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

[`Window`](/references/js/core/namespacewindow/#window).[`isFocused`](/references/js/core/namespacewindow/#isfocused)

**Source**: [window.ts:646](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L646)

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

[`Window`](/references/js/core/namespacewindow/#window).[`isFullscreen`](/references/js/core/namespacewindow/#isfullscreen)

**Source**: [window.ts:600](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L600)

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

[`Window`](/references/js/core/namespacewindow/#window).[`isMaximizable`](/references/js/core/namespacewindow/#ismaximizable)

**Source**: [window.ts:699](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L699)

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

[`Window`](/references/js/core/namespacewindow/#window).[`isMaximized`](/references/js/core/namespacewindow/#ismaximized)

**Source**: [window.ts:630](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L630)

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

[`Window`](/references/js/core/namespacewindow/#window).[`isMinimizable`](/references/js/core/namespacewindow/#isminimizable)

**Source**: [window.ts:720](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L720)

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

[`Window`](/references/js/core/namespacewindow/#window).[`isMinimized`](/references/js/core/namespacewindow/#isminimized)

**Source**: [window.ts:614](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L614)

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

[`Window`](/references/js/core/namespacewindow/#window).[`isResizable`](/references/js/core/namespacewindow/#isresizable)

**Source**: [window.ts:678](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L678)

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

[`Window`](/references/js/core/namespacewindow/#window).[`isVisible`](/references/js/core/namespacewindow/#isvisible)

**Source**: [window.ts:757](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L757)

---

##### listen()

```ts
listen<T>(event, handler): Promise< UnlistenFn >
```

Listen to an emitted event on this webivew window.

###### Example

```typescript
import { WebviewWindow } from '@tauri-apps/api/webview';
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

| Parameter | Type                                                                          | Description                                                                   |
| :-------- | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `event`   | [`EventName`](/references/js/core/namespaceevent/#eventname)                  | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< `T` \> | Event handler.                                                                |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`listen`](/references/js/core/namespacewindow/#listen)

**Source**: [webview.ts:666](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L666)

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

[`Window`](/references/js/core/namespacewindow/#window).[`maximize`](/references/js/core/namespacewindow/#maximize)

**Source**: [window.ts:968](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L968)

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

[`Window`](/references/js/core/namespacewindow/#window).[`minimize`](/references/js/core/namespacewindow/#minimize)

**Source**: [window.ts:1016](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1016)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`onCloseRequested`](/references/js/core/namespacewindow/#oncloserequested)

**Source**: [window.ts:1705](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1705)

---

##### onFileDropEvent()

```ts
onFileDropEvent(handler): Promise< UnlistenFn >
```

Listen to a file drop event.
The listener is triggered when the user hovers the selected files on the webview,
drops the files or cancels the operation.

###### Example

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
const unlisten = await getCurrent().onFileDropEvent((event) => {
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

| Parameter | Type                                                                                                                                             |
| :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< [`FileDropEvent`](/references/js/core/namespacewebview/#filedropevent) \> |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[`Webview`](/references/js/core/namespacewebview/#webview).[`onFileDropEvent`](/references/js/core/namespacewebview/#onfiledropevent)

**Source**: [webview.ts:505](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L505)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`onFocusChanged`](/references/js/core/namespacewindow/#onfocuschanged)

**Source**: [window.ts:1736](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1736)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`onMoved`](/references/js/core/namespacewindow/#onmoved)

**Source**: [window.ts:1675](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1675)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`onResized`](/references/js/core/namespacewindow/#onresized)

**Source**: [window.ts:1651](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1651)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`onScaleChanged`](/references/js/core/namespacewindow/#onscalechanged)

**Source**: [window.ts:1776](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1776)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`onThemeChanged`](/references/js/core/namespacewindow/#onthemechanged)

**Source**: [window.ts:1802](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1802)

---

##### once()

```ts
once<T>(event, handler): Promise< UnlistenFn >
```

Listen to an emitted event on this webivew window only once.

###### Example

```typescript
import { WebviewWindow } from '@tauri-apps/api/webview';
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

| Parameter | Type                                                                          | Description                                                                   |
| :-------- | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `event`   | `string`                                                                      | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](/references/js/core/namespaceevent/#eventcallback)\< `T` \> | Event handler.                                                                |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/js/core/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`once`](/references/js/core/namespacewindow/#once)

**Source**: [webview.ts:701](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L701)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`outerPosition`](/references/js/core/namespacewindow/#outerposition)

**Source**: [window.ts:544](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L544)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`outerSize`](/references/js/core/namespacewindow/#outersize)

**Source**: [window.ts:581](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L581)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalPosition`](/references/js/core/namespacedpi/#physicalposition) \>

The webview's position.

###### Inherited from

[`Webview`](/references/js/core/namespacewebview/#webview).[`position`](/references/js/core/namespacewebview/#position)

**Source**: [webview.ts:353](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L353)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`requestUserAttention`](/references/js/core/namespacewindow/#requestuserattention)

**Source**: [window.ts:836](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L836)

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

[`Window`](/references/js/core/namespacewindow/#window).[`scaleFactor`](/references/js/core/namespacewindow/#scalefactor)

**Source**: [window.ts:512](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L512)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setAlwaysOnBottom`](/references/js/core/namespacewindow/#setalwaysonbottom)

**Source**: [window.ts:1197](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1197)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setAlwaysOnTop`](/references/js/core/namespacewindow/#setalwaysontop)

**Source**: [window.ts:1179](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1179)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setClosable`](/references/js/core/namespacewindow/#setclosable)

**Source**: [window.ts:933](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L933)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setContentProtected`](/references/js/core/namespacewindow/#setcontentprotected)

**Source**: [window.ts:1214](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1214)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setCursorGrab`](/references/js/core/namespacewindow/#setcursorgrab)

**Source**: [window.ts:1454](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1454)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`setCursorIcon`](/references/js/core/namespacewindow/#setcursoricon)

**Source**: [window.ts:1496](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1496)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`setCursorPosition`](/references/js/core/namespacewindow/#setcursorposition)

**Source**: [window.ts:1514](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1514)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setCursorVisible`](/references/js/core/namespacewindow/#setcursorvisible)

**Source**: [window.ts:1478](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1478)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setDecorations`](/references/js/core/namespacewindow/#setdecorations)

**Source**: [window.ts:1115](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1115)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`setEffects`](/references/js/core/namespacewindow/#seteffects)

**Source**: [window.ts:1151](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1151)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setFocus`](/references/js/core/namespacewindow/#setfocus)

**Source**: [webview.ts:472](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L472)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setFullscreen`](/references/js/core/namespacewindow/#setfullscreen)

**Source**: [window.ts:1365](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1365)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`setIcon`](/references/js/core/namespacewindow/#seticon)

**Source**: [window.ts:1406](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1406)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setIgnoreCursorEvents`](/references/js/core/namespacewindow/#setignorecursorevents)

**Source**: [window.ts:1550](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1550)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`setMaxSize`](/references/js/core/namespacewindow/#setmaxsize)

**Source**: [window.ts:1296](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1296)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setMaximizable`](/references/js/core/namespacewindow/#setmaximizable)

**Source**: [window.ts:888](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L888)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`setMinSize`](/references/js/core/namespacewindow/#setminsize)

**Source**: [window.ts:1262](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1262)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setMinimizable`](/references/js/core/namespacewindow/#setminimizable)

**Source**: [window.ts:910](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L910)

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

| Parameter  | Type                                                                                                                                               | Description                                      |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------- |
| `position` | [`LogicalPosition`](/references/js/core/namespacedpi/#logicalposition) \| [`PhysicalPosition`](/references/js/core/namespacedpi/#physicalposition) | The new position, in logical or physical pixels. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`setPosition`](/references/js/core/namespacewindow/#setposition)

**Source**: [webview.ts:438](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L438)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`setProgressBar`](/references/js/core/namespacewindow/#setprogressbar)

**Source**: [window.ts:1609](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1609)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setResizable`](/references/js/core/namespacewindow/#setresizable)

**Source**: [window.ts:864](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L864)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setShadow`](/references/js/core/namespacewindow/#setshadow)

**Source**: [window.ts:1141](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1141)

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

| Parameter | Type                                                                                                                               | Description                   |
| :-------- | :--------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| `size`    | [`LogicalSize`](/references/js/core/namespacedpi/#logicalsize) \| [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize) | The logical or physical size. |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`setSize`](/references/js/core/namespacewindow/#setsize)

**Source**: [webview.ts:408](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L408)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setSkipTaskbar`](/references/js/core/namespacewindow/#setskiptaskbar)

**Source**: [window.ts:1428](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1428)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setTitle`](/references/js/core/namespacewindow/#settitle)

**Source**: [window.ts:951](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L951)

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

[`Window`](/references/js/core/namespacewindow/#window).[`setVisibleOnAllWorkspaces`](/references/js/core/namespacewindow/#setvisibleonallworkspaces)

**Source**: [window.ts:1625](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1625)

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

[`Window`](/references/js/core/namespacewindow/#window).[`show`](/references/js/core/namespacewindow/#show)

**Source**: [window.ts:1048](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1048)

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`PhysicalSize`](/references/js/core/namespacedpi/#physicalsize) \>

The webview's size.

###### Inherited from

[`Webview`](/references/js/core/namespacewebview/#webview).[`size`](/references/js/core/namespacewebview/#size)

**Source**: [webview.ts:370](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L370)

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

[`Window`](/references/js/core/namespacewindow/#window).[`startDragging`](/references/js/core/namespacewindow/#startdragging)

**Source**: [window.ts:1567](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1567)

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

[`Window`](/references/js/core/namespacewindow/#window).[`startResizeDragging`](/references/js/core/namespacewindow/#startresizedragging)

**Source**: [window.ts:1583](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1583)

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

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`theme`](/references/js/core/namespacewindow/#theme)

**Source**: [window.ts:792](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L792)

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

[`Window`](/references/js/core/namespacewindow/#window).[`title`](/references/js/core/namespacewindow/#title)

**Source**: [window.ts:771](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L771)

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

[`Window`](/references/js/core/namespacewindow/#window).[`toggleMaximize`](/references/js/core/namespacewindow/#togglemaximize)

**Source**: [window.ts:1000](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1000)

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

[`Window`](/references/js/core/namespacewindow/#window).[`unmaximize`](/references/js/core/namespacewindow/#unmaximize)

**Source**: [window.ts:984](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L984)

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

[`Window`](/references/js/core/namespacewindow/#window).[`unminimize`](/references/js/core/namespacewindow/#unminimize)

**Source**: [window.ts:1032](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/window.ts#L1032)

---

##### getAll()

```ts
static getAll(): WebviewWindow[]
```

Gets a list of instances of `Webview` for all available webviews.

###### Returns

[`WebviewWindow`](/references/js/core/namespacewebview/#webviewwindow)[]

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`getAll`](/references/js/core/namespacewindow/#getall)

**Source**: [webview.ts:642](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L642)

---

##### getByLabel()

```ts
static getByLabel(label): null | WebviewWindow
```

Gets the Webview for the webview associated with the given label.

###### Example

```typescript
import { Webview } from '@tauri-apps/api/webview';
const mainWebview = Webview.getByLabel('main');
```

###### Parameters

| Parameter | Type     | Description        |
| :-------- | :------- | :----------------- |
| `label`   | `string` | The webview label. |

###### Returns

`null` \| [`WebviewWindow`](/references/js/core/namespacewebview/#webviewwindow)

The Webview instance to communicate with the webview or null if the webview doesn't exist.

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`getByLabel`](/references/js/core/namespacewindow/#getbylabel)

**Source**: [webview.ts:621](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L621)

---

##### getCurrent()

```ts
static getCurrent(): WebviewWindow
```

Get an instance of `Webview` for the current webview.

###### Returns

[`WebviewWindow`](/references/js/core/namespacewebview/#webviewwindow)

###### Inherited from

[`Window`](/references/js/core/namespacewindow/#window).[`getCurrent`](/references/js/core/namespacewindow/#getcurrent)

**Source**: [webview.ts:633](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L633)

## Interfaces

### WebviewOptions

Configuration for the webview to create.

#### Since

1.0.0

#### Properties

| Property                                                                  | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| :------------------------------------------------------------------------ | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="acceptfirstmouse" name="acceptfirstmouse"></a> `acceptFirstMouse`? | `boolean` | Whether clicking an inactive webview also clicks through to the webview on macOS.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <a id="filedropenabled" name="filedropenabled"></a> `fileDropEnabled`?    | `boolean` | Whether the file drop is enabled or not on the webview. By default it is enabled.<br /><br />Disabling it is required to use drag and drop on the frontend on Windows.                                                                                                                                                                                                                                                                                                                                   |
| <a id="height" name="height"></a> `height`                                | `number`  | The initial height.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| <a id="incognito" name="incognito"></a> `incognito`?                      | `boolean` | Whether or not the webview should be launched in incognito mode.<br /><br />#### Platform-specific<br /><br />- **Android:** Unsupported.                                                                                                                                                                                                                                                                                                                                                                |
| <a id="proxyurl" name="proxyurl"></a> `proxyUrl`?                         | `string`  | The proxy URL for the WebView for all network requests.<br /><br />Must be either a `http://` or a `socks5://` URL.<br /><br />#### Platform-specific<br /><br />- **macOS**: Requires the `macos-proxy` feature flag and only compiles for macOS 14+.                                                                                                                                                                                                                                                   |
| <a id="transparent" name="transparent"></a> `transparent`?                | `boolean` | Whether the webview is transparent or not.<br />Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > app > macOSPrivateApi`.<br />WARNING: Using private APIs on `macOS` prevents your application from being accepted to the `App Store`.                                                                                                                                                                                                          |
| <a id="url" name="url"></a> `url`?                                        | `string`  | Remote URL or local file path to open.<br /><br />- URL such as `https://github.com/tauri-apps` is opened directly on a Tauri webview.<br />- data: URL such as `data:text/html,<html>...` is only supported with the `webview-data-url` Cargo feature for the `tauri` dependency.<br />- local file path or route such as `/path/to/page.html` or `/users` is appended to the application URL (the devServer URL on development, or `tauri://localhost/` and `https://tauri.localhost/` on production). |
| <a id="useragent" name="useragent"></a> `userAgent`?                      | `string`  | The user agent for the webview.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| <a id="width" name="width"></a> `width`                                   | `number`  | The initial width.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| <a id="x" name="x"></a> `x`                                               | `number`  | The initial vertical position.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| <a id="y" name="y"></a> `y`                                               | `number`  | The initial horizontal position.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## Type Aliases

### FileDropEvent

```ts
FileDropEvent: {type: "hover";} & FileDropPayload | {type: "drop";} & FileDropPayload | {type: "cancel";}
```

The file drop event types.

**Source**: [webview.ts:42](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L42)

## Functions

### getAll()

```ts
getAll(): Webview[]
```

Gets a list of instances of `Webview` for all available webviews.

#### Since

1.0.0

#### Returns

[`Webview`](/references/js/core/namespacewebview/#webview)[]

**Source**: [webview.ts:68](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L68)

---

### getCurrent()

```ts
getCurrent(): Webview
```

Get an instance of `Webview` for the current webview.

#### Since

1.0.0

#### Returns

[`Webview`](/references/js/core/namespacewebview/#webview)

**Source**: [webview.ts:52](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L52)
