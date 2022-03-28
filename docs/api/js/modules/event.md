[@tauri-apps/api](../README.md) / event

# Module: event

The event system allows you to emit events to the backend and listen to events from it.

This package is also accessible with `window.__TAURI__.event` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Interfaces

- [Event](../interfaces/event.Event.md)

## Type aliases

### EventCallback

Ƭ **EventCallback**<`T`\>: (`event`: [`Event`](../interfaces/event.Event.md)<`T`\>) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../interfaces/event.Event.md)<`T`\> |

##### Returns

`void`

#### Defined in

[helpers/event.ts:40](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/helpers/event.ts#L40)

___

### EventName

Ƭ **EventName**: `LiteralUnion`<``"tauri://update"`` \| ``"tauri://update-available"`` \| ``"tauri://update-download-progress"`` \| ``"tauri://update-install"`` \| ``"tauri://update-status"`` \| ``"tauri://resize"`` \| ``"tauri://move"`` \| ``"tauri://close-requested"`` \| ``"tauri://focus"`` \| ``"tauri://blur"`` \| ``"tauri://scale-change"`` \| ``"tauri://menu"`` \| ``"tauri://file-drop"`` \| ``"tauri://file-drop-hover"`` \| ``"tauri://file-drop-cancelled"``, `string`\>

#### Defined in

[helpers/event.ts:21](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/helpers/event.ts#L21)

___

### UnlistenFn

Ƭ **UnlistenFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[helpers/event.ts:42](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/helpers/event.ts#L42)

## Functions

### emit

▸ **emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[event.ts:55](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/event.ts#L55)

___

### listen

▸ **listen**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an event from the backend.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`EventName`](event.md#eventname) | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler callback. |

#### Returns

`Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Defined in

[event.ts:27](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/event.ts#L27)

___

### once

▸ **once**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an one-off event from the backend.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`EventName`](event.md#eventname) | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler callback. |

#### Returns

`Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Defined in

[event.ts:41](https://github.com/tauri-apps/tauri/blob/a073f27/tooling/api/src/event.ts#L41)
