---
title: "Module: event"
sidebar_label: "event"
custom_edit_url: null
hide_title: true
---

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

[event.ts:45](https://github.com/tauri-apps/tauri/blob/fbb405b/tooling/api/src/event.ts#L45)

___

### EventName

Ƭ **EventName**: `LiteralUnion`<``"tauri://update"`` \| ``"tauri://update-available"`` \| ``"tauri://update-install"`` \| ``"tauri://update-status"`` \| ``"tauri://resize"`` \| ``"tauri://move"`` \| ``"tauri://close-requested"`` \| ``"tauri://destroyed"`` \| ``"tauri://focus"`` \| ``"tauri://blur"`` \| ``"tauri://scale-change"`` \| ``"tauri://menu"`` \| ``"tauri://file-drop"`` \| ``"tauri://file-drop-hover"`` \| ``"tauri://file-drop-cancelled"``, `string`\>

#### Defined in

[event.ts:26](https://github.com/tauri-apps/tauri/blob/fbb405b/tooling/api/src/event.ts#L26)

___

### UnlistenFn

Ƭ **UnlistenFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[event.ts:47](https://github.com/tauri-apps/tauri/blob/fbb405b/tooling/api/src/event.ts#L47)

## Functions

### emit

▸ **emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name |
| `payload?` | `string` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[event.ts:113](https://github.com/tauri-apps/tauri/blob/fbb405b/tooling/api/src/event.ts#L113)

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

[event.ts:73](https://github.com/tauri-apps/tauri/blob/fbb405b/tooling/api/src/event.ts#L73)

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

[event.ts:96](https://github.com/tauri-apps/tauri/blob/fbb405b/tooling/api/src/event.ts#L96)
