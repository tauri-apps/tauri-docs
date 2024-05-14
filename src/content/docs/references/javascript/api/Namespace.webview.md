---
title: 'webview'
editUrl: false
sidebar:
  label: 'webview'
---

Provides APIs to create webviews, communicate with other webviews and manipulate the current webview.

## Webview events

Events can be listened to using [Webview.listen](/references/javascript/api/namespacewebview/#listen):

```typescript
import { getCurrent } from '@tauri-apps/api/webview';
getCurrent().listen('my-webview-event', ({ event, payload }) => {});
```

## References

### DragDropEvent

Re-exports [DragDropEvent](/references/javascript/api/namespacewindow/#dragdropevent)

```ts
DragDropEvent;
```

**Source**: [webview.ts:684](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L684)

---

### DragDropPayload

Re-exports [DragDropPayload](/references/javascript/api/namespacewindow/#dragdroppayload)

```ts
DragDropPayload;
```

**Source**: [webview.ts:684](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L684)

## Classes

### Webview

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

#### Extended By

- [`WebviewWindow`](/references/javascript/api/namespacewebviewwindow/#webviewwindow)

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
const webview = new Webview(appWindow, 'my-label', {
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

| Parameter | Type                                                                            | Description                                                   |
| :-------- | :------------------------------------------------------------------------------ | :------------------------------------------------------------ |
| `window`  | [`Window`](/references/javascript/api/namespacewindow/#window)                  | the window to add this webview to.                            |
| `label`   | `string`                                                                        | The unique webview label. Must be alphanumeric: `a-zA-Z-/:_`. |
| `options` | [`WebviewOptions`](/references/javascript/api/namespacewebview/#webviewoptions) | -                                                             |

###### Returns

[`Webview`](/references/javascript/api/namespacewebview/#webview)

The [Webview](/references/javascript/api/namespacewebview/#webview) instance to communicate with the webview.

**Source**: [webview.ts:159](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L159)

#### Properties

| Property                                            | Type                                                                                                                                                                                                | Description                                                                                      |
| :-------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| <a id="label" name="label"></a> `label`             | `string`                                                                                                                                                                                            | The webview label. It is a unique identifier for the webview, can be used to reference it later. |
| <a id="listeners" name="listeners"></a> `listeners` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\< `string`, [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< `any` \>[] \> | Local event listeners.                                                                           |
| <a id="window" name="window"></a> `window`          | [`Window`](/references/javascript/api/namespacewindow/#window)                                                                                                                                      | The window hosting this webview.                                                                 |

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

**Source**: [webview.ts:396](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L396)

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

**Source**: [webview.ts:313](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L313)

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

| Parameter | Type                                                                                 | Description                                                                   |
| :-------- | :----------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `event`   | [`EventName`](/references/javascript/api/namespaceevent/#eventname)                  | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< `T` \> | Event handler.                                                                |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [webview.ts:225](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L225)

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

**Source**: [webview.ts:544](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L544)

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

| Parameter | Type                                                                                 | Description                                                                   |
| :-------- | :----------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `event`   | `string`                                                                             | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< `T` \> | Event handler.                                                                |

###### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [webview.ts:260](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L260)

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

**Source**: [webview.ts:510](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L510)

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

**Source**: [webview.ts:477](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L477)

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

**Source**: [webview.ts:443](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L443)

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

**Source**: [webview.ts:413](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L413)

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

**Source**: [webview.ts:493](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L493)

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

**Source**: [webview.ts:375](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L375)

---

##### getAll()

```ts
static getAll(): Webview[]
```

Gets a list of instances of `Webview` for all available webviews.

###### Returns

[`Webview`](/references/javascript/api/namespacewebview/#webview)[]

**Source**: [webview.ts:202](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L202)

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

`null` \| [`Webview`](/references/javascript/api/namespacewebview/#webview)

The Webview instance to communicate with the webview or null if the webview doesn't exist.

**Source**: [webview.ts:188](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L188)

---

##### getCurrent()

```ts
static getCurrent(): Webview
```

Get an instance of `Webview` for the current webview.

###### Returns

[`Webview`](/references/javascript/api/namespacewebview/#webview)

**Source**: [webview.ts:195](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L195)

## Interfaces

### WebviewOptions

Configuration for the webview to create.

#### Since

2.0.0

#### Properties

| Property                                                                        | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| :------------------------------------------------------------------------------ | :-------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="acceptfirstmouse" name="acceptfirstmouse"></a> `acceptFirstMouse`?       | `boolean` | Whether clicking an inactive webview also clicks through to the webview on macOS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| <a id="dragdropenabled" name="dragdropenabled"></a> `dragDropEnabled`?          | `boolean` | Whether the drag and drop is enabled or not on the webview. By default it is enabled.<br /><br />Disabling it is required to use HTML5 drag and drop on the frontend on Windows.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <a id="height" name="height"></a> `height`                                      | `number`  | The initial height.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| <a id="incognito" name="incognito"></a> `incognito`?                            | `boolean` | Whether or not the webview should be launched in incognito mode.<br /><br />#### Platform-specific<br /><br />- **Android:** Unsupported.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <a id="proxyurl" name="proxyurl"></a> `proxyUrl`?                               | `string`  | The proxy URL for the WebView for all network requests.<br /><br />Must be either a `http://` or a `socks5://` URL.<br /><br />#### Platform-specific<br /><br />- **macOS**: Requires the `macos-proxy` feature flag and only compiles for macOS 14+.                                                                                                                                                                                                                                                                                                                                           |
| <a id="transparent" name="transparent"></a> `transparent`?                      | `boolean` | Whether the webview is transparent or not.<br />Note that on `macOS` this requires the `macos-private-api` feature flag, enabled under `tauri.conf.json > app > macOSPrivateApi`.<br />WARNING: Using private APIs on `macOS` prevents your application from being accepted to the `App Store`.                                                                                                                                                                                                                                                                                                  |
| <a id="url" name="url"></a> `url`?                                              | `string`  | Remote URL or local file path to open.<br /><br />- URL such as `https://github.com/tauri-apps` is opened directly on a Tauri webview.<br />- data: URL such as `data:text/html,<html>...` is only supported with the `webview-data-url` Cargo feature for the `tauri` dependency.<br />- local file path or route such as `/path/to/page.html` or `/users` is appended to the application URL (the devServer URL on development, or `tauri://localhost/` and `https://tauri.localhost/` on production).                                                                                         |
| <a id="useragent" name="useragent"></a> `userAgent`?                            | `string`  | The user agent for the webview.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| <a id="width" name="width"></a> `width`                                         | `number`  | The initial width.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| <a id="x" name="x"></a> `x`                                                     | `number`  | The initial vertical position.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <a id="y" name="y"></a> `y`                                                     | `number`  | The initial horizontal position.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| <a id="zoomhotkeysenabled" name="zoomhotkeysenabled"></a> `zoomHotkeysEnabled`? | `boolean` | Whether page zooming by hotkeys is enabled<br /><br />## Platform-specific:<br /><br />- **Windows**: Controls WebView2's [`IsZoomControlEnabled`](https://learn.microsoft.com/en-us/microsoft-edge/webview2/reference/winrt/microsoft_web_webview2_core/corewebview2settings?view=webview2-winrt-1.0.2420.47#iszoomcontrolenabled) setting.<br />- **MacOS / Linux**: Injects a polyfill that zooms in and out with `ctrl/command` + `-/=`,<br />20% in each step, ranging from 20% to 1000%. Requires `webview:allow-set-webview-zoom` permission<br /><br />- **Android / iOS**: Unsupported. |

## Functions

### getAll()

```ts
getAll(): Webview[]
```

Gets a list of instances of `Webview` for all available webviews.

#### Since

2.0.0

#### Returns

[`Webview`](/references/javascript/api/namespacewebview/#webview)[]

**Source**: [webview.ts:73](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L73)

---

### getCurrent()

```ts
getCurrent(): Webview
```

Get an instance of `Webview` for the current webview.

#### Since

2.0.0

#### Returns

[`Webview`](/references/javascript/api/namespacewebview/#webview)

**Source**: [webview.ts:57](https://github.com/tauri-apps/tauri/blob/dev/tooling/api/src/webview.ts#L57)
