[@tauri-apps/api](../index.md) / event

# Namespace: event

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

[event.ts:44](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/event.ts#L44)

___

### EventName

Ƭ **EventName**: `LiteralUnion`<``"tauri://update"`` \| ``"tauri://update-available"`` \| ``"tauri://update-install"`` \| ``"tauri://update-status"`` \| ``"tauri://resize"`` \| ``"tauri://move"`` \| ``"tauri://close-requested"`` \| ``"tauri://focus"`` \| ``"tauri://blur"`` \| ``"tauri://scale-change"`` \| ``"tauri://menu"`` \| ``"tauri://file-drop"`` \| ``"tauri://file-drop-hover"`` \| ``"tauri://file-drop-cancelled"``, `string`\>

#### Defined in

[event.ts:26](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/event.ts#L26)

___

### UnlistenFn

Ƭ **UnlistenFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[event.ts:46](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/event.ts#L46)

## Functions

### emit

▸ **emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name |
| `payload?` | `unknown` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[event.ts:112](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/event.ts#L112)

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
| `event` | [`EventName`](event.md#eventname) | Event name |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler callback |

#### Returns

`Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Defined in

[event.ts:72](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/event.ts#L72)

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
| `event` | [`EventName`](event.md#eventname) | Event name |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler callback |

#### Returns

`Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Defined in

[event.ts:95](https://github.com/tauri-apps/tauri/blob/8edc636/tooling/api/src/event.ts#L95)
