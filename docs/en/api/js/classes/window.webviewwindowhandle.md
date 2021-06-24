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

- **WebviewWindowHandle**

  ↳ [WebviewWindow](window.webviewwindow.md)

## Constructors

### constructor

• **new WebviewWindowHandle**(`label`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Defined in

[window.ts:161](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/window.ts#L161)

## Properties

### label

• **label**: `string`

Window label.

#### Defined in

[window.ts:159](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/window.ts#L159)

___

### listeners

• **listeners**: `Object`

Local event listeners.

#### Index signature

▪ [key: `string`]: [EventCallback](../modules/event.md#eventcallback)<any\>[]

#### Defined in

[window.ts:161](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/window.ts#L161)

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

#### Defined in

[window.ts:225](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/window.ts#L225)

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

#### Defined in

[window.ts:214](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/window.ts#L214)

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

#### Defined in

[window.ts:176](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/window.ts#L176)

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

#### Defined in

[window.ts:197](https://github.com/tauri-apps/tauri/blob/01d4ada/tooling/api/src/window.ts#L197)
