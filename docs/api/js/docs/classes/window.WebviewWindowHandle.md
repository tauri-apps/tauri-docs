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
| `label` | `undefined` \| ``null`` \| `string` |

#### Defined in

[window.ts:231](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L231)

## Properties

### label

• **label**: `string`

Window label.

#### Defined in

[window.ts:227](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L227)

___

### listeners

• **listeners**: `Object`

Local event listeners.

#### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

#### Defined in

[window.ts:229](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L229)

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

[window.ts:297](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L297)

___

### emit

▸ **emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend, tied to the webview window.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. |
| `payload?` | `unknown` | Event payload. |

#### Returns

`Promise`<`void`\>

#### Defined in

[window.ts:286](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L286)

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
| `event` | [`EventName`](../modules/event.md#eventname) | Event name. |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Defined in

[window.ts:248](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L248)

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

[window.ts:269](https://github.com/tauri-apps/tauri/blob/fba1e32/tooling/api/src/window.ts#L269)
