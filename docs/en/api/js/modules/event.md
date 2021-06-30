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

- [Event](../interfaces/event.event-1.md)

## Type aliases

### EventCallback

Ƭ **EventCallback**<`T`\>: (`event`: [`Event`](../interfaces/event.event-1.md)<`T`\>) => `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`event`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../interfaces/event.event-1.md)<`T`\> |

##### Returns

`void`

#### Defined in

[event.ts:25](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/event.ts#L25)

___

### UnlistenFn

Ƭ **UnlistenFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[event.ts:27](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/event.ts#L27)

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

[event.ts:93](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/event.ts#L93)

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
| `event` | `string` | Event name |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler callback |

#### Returns

`Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Defined in

[event.ts:53](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/event.ts#L53)

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
| `event` | `string` | Event name |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler callback |

#### Returns

`Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.

#### Defined in

[event.ts:76](https://github.com/tauri-apps/tauri/blob/e663bdd/tooling/api/src/event.ts#L76)
