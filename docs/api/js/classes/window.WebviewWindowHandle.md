[@tauri-apps/api](../index.md) / [window](../modules/window.md) / WebviewWindowHandle

# Class: WebviewWindowHandle

[window](../modules/window.md).WebviewWindowHandle

A webview window handle allows emitting and listening to events from the backend that are tied to the window.

## Hierarchy

- **`WebviewWindowHandle`**

  ↳ [`WindowManager`](window.WindowManager.md)

## Constructors

### constructor

• **new WebviewWindowHandle**(`label`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Defined in

[window.ts:254](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L254)

## Properties

### label

• **label**: `string`

The window label. It is a unique identifier for the window, can be used to reference it later.

#### Defined in

[window.ts:250](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L250)

___

### listeners

• **listeners**: `Object`

Local event listeners.

#### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

#### Defined in

[window.ts:252](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L252)

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

[window.ts:316](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L316)

___

### emit

▸ **emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend, tied to the webview window.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | Event payload. |

#### Returns

`Promise`<`void`\>

#### Defined in

[window.ts:305](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L305)

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
| `event` | [`EventName`](../modules/event.md#eventname) | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Defined in

[window.ts:267](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L267)

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
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Defined in

[window.ts:288](https://github.com/tauri-apps/tauri/blob/d24045e/tooling/api/src/window.ts#L288)
