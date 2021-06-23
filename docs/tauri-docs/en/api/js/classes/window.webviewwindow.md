---
title: "Class: WebviewWindow"
sidebar_label: "WebviewWindow"
custom_edit_url: null
hide_title: true
---

# Class: WebviewWindow

[window](../modules/window.md).WebviewWindow

Create new webview windows and get a handle to existing ones.

**`example`**
```typescript
// loading embedded asset:
const webview = new WebviewWindow('theUniqueLabel', {
  url: 'path/to/page.html'
})
// alternatively, load a remote URL:
const webview = new WebviewWindow('theUniqueLabel', {
  url: 'https://github.com/tauri-apps/tauri'
})

webview.once('tauri://created', function () {
 // webview window successfully created
})
webview.once('tauri://error', function (e) {
 // an error happened creating the webview window
})

// emit an event to the backend
await webview.emit("some event", "data")
// listen to an event from the backend
const unlisten = await webview.listen("event name", e => {})
unlisten()
```

## Hierarchy

- [WebviewWindowHandle](window.webviewwindowhandle.md)

  ↳ **WebviewWindow**

## Constructors

### constructor

• **new WebviewWindow**(`label`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |
| `options` | [WindowOptions](../interfaces/window.windowoptions.md) |

#### Overrides

[WebviewWindowHandle](window.webviewwindowhandle.md).[constructor](window.webviewwindowhandle.md#constructor)

#### Defined in

[window.ts:251](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L251)

## Properties

### label

• **label**: `string`

Window label.

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[label](window.webviewwindowhandle.md#label)

#### Defined in

[window.ts:143](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L143)

___

### listeners

• **listeners**: `Object`

Local event listeners.

#### Index signature

▪ [key: `string`]: [EventCallback](../modules/event.md#eventcallback)<any\>[]

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[listeners](window.webviewwindowhandle.md#listeners)

#### Defined in

[window.ts:145](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L145)

## Methods

### \_handleTauriEvent

▸ **_handleTauriEvent**<T\>(`event`, `handler`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `handler` | [EventCallback](../modules/event.md#eventcallback)<T\> |

#### Returns

`boolean`

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[_handleTauriEvent](window.webviewwindowhandle.md#_handletaurievent)

#### Defined in

[window.ts:209](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L209)

___

### emit

▸ **emit**(`event`, `payload?`): `Promise`<void\>

Emits an event to the backend, tied to the webview window.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. |
| `payload?` | `string` | Event payload. |

#### Returns

`Promise`<void\>

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[emit](window.webviewwindowhandle.md#emit)

#### Defined in

[window.ts:198](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L198)

___

### listen

▸ **listen**<T\>(`event`, `handler`): `Promise`<[UnlistenFn](../modules/event.md#unlistenfn)\>

Listen to an event emitted by the backend that is tied to the webview window.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. |
| `handler` | [EventCallback](../modules/event.md#eventcallback)<T\> | Event handler. |

#### Returns

`Promise`<[UnlistenFn](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[listen](window.webviewwindowhandle.md#listen)

#### Defined in

[window.ts:160](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L160)

___

### once

▸ **once**<T\>(`event`, `handler`): `Promise`<[UnlistenFn](../modules/event.md#unlistenfn)\>

Listen to an one-off event emitted by the backend that is tied to the webview window.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. |
| `handler` | [EventCallback](../modules/event.md#eventcallback)<T\> | Event handler. |

#### Returns

`Promise`<[UnlistenFn](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Inherited from

[WebviewWindowHandle](window.webviewwindowhandle.md).[once](window.webviewwindowhandle.md#once)

#### Defined in

[window.ts:181](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L181)

___

### getByLabel

▸ `Static` **getByLabel**(`label`): ``null`` \| [WebviewWindowHandle](window.webviewwindowhandle.md)

Gets the WebviewWindow handle for the webview associated with the given label.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `label` | `string` | The webview window label. |

#### Returns

``null`` \| [WebviewWindowHandle](window.webviewwindowhandle.md)

The handle to communicate with the webview or null if the webview doesn't exist.

#### Defined in

[window.ts:276](https://github.com/tauri-apps/tauri/blob/1be3546/tooling/api/src/window.ts#L276)
