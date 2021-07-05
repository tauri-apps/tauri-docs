---
title: "Class: WebviewWindowHandle"
sidebar_label: "WebviewWindowHandle"
custom_edit_url: null
hide_title: true
---

# Class: WebviewWindowHandle

[window](../modules/window.md).WebviewWindowHandle

A webview window handle allows emitting and listening to events from the backend that are tied to the window.

## Hierarchy

- **`WebviewWindowHandle`**

  ↳ [`WebviewWindow`](window.webviewwindow.md)

  ↳ [`WindowManager`](window.windowmanager.md)

## Constructors

### constructor

• **new WebviewWindowHandle**(`label`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Defined in

[window.ts:221](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L221)

## Properties

### label

• **label**: `string`

Window label.

#### Defined in

[window.ts:219](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L219)

___

### listeners

• **listeners**: `Object`

Local event listeners.

#### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

#### Defined in

[window.ts:221](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L221)

## Methods

### \_handleTauriEvent

▸ **_handleTauriEvent**<`T`\>(`event`, `handler`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> |

#### Returns

`boolean`

#### Defined in

[window.ts:285](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L285)

___

### emit

▸ **emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend, tied to the webview window.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. |
| `payload?` | `string` | Event payload. |

#### Returns

`Promise`<`void`\>

#### Defined in

[window.ts:274](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L274)

___

### listen

▸ **listen**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an event emitted by the backend that is tied to the webview window.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Defined in

[window.ts:236](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L236)

___

### once

▸ **once**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an one-off event emitted by the backend that is tied to the webview window.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Defined in

[window.ts:257](https://github.com/tauri-apps/tauri/blob/af634db/tooling/api/src/window.ts#L257)
