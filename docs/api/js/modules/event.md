[@tauri-apps/api](../README.md) / event

# Module: event

The event system allows you to emit events to the backend and listen to events from it.

This package is also accessible with `window.__TAURI__.event` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Interfaces

- [Event](../interfaces/event.Event.md)

## Type Aliases

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

[helpers/event.ts:41](https://github.com/tauri-apps/tauri/blob/dc432ef/tooling/api/src/helpers/event.ts#L41)

___

### EventName

Ƭ **EventName**: `LiteralUnion`<``"tauri://update"`` \| ``"tauri://update-available"`` \| ``"tauri://update-download-progress"`` \| ``"tauri://update-install"`` \| ``"tauri://update-status"`` \| ``"tauri://resize"`` \| ``"tauri://move"`` \| ``"tauri://close-requested"`` \| ``"tauri://focus"`` \| ``"tauri://blur"`` \| ``"tauri://scale-change"`` \| ``"tauri://menu"`` \| ``"tauri://file-drop"`` \| ``"tauri://file-drop-hover"`` \| ``"tauri://file-drop-cancelled"`` \| ``"tauri://theme-changed"``, `string`\>

#### Defined in

[helpers/event.ts:21](https://github.com/tauri-apps/tauri/blob/dc432ef/tooling/api/src/helpers/event.ts#L21)

___

### UnlistenFn

Ƭ **UnlistenFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[helpers/event.ts:43](https://github.com/tauri-apps/tauri/blob/dc432ef/tooling/api/src/helpers/event.ts#L43)

## Functions

### emit

▸ **emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend.

**`example`** Emits the `frontend-loaded` event with the given payload
```typescript
import { emit } from '@tauri-apps/api/event';
await emit('frontend-loaded', { loggedIn: true, token: 'authToken' });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[event.ts:81](https://github.com/tauri-apps/tauri/blob/dc432ef/tooling/api/src/event.ts#L81)

___

### listen

▸ **listen**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an event from the backend.

**`example`** Listen to the `error` event expecting a string payload
```typescript
import { listen } from '@tauri-apps/api/event';
const unlisten = await listen<string>('error', (event) => {
  console.log(`Got error in window ${event.windowLabel}, payload: ${payload}`);
});

// removes the listener later
await unlisten();
```

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

[event.ts:37](https://github.com/tauri-apps/tauri/blob/dc432ef/tooling/api/src/event.ts#L37)

___

### once

▸ **once**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an one-off event from the backend.

**`example`** Listen to the `loaded` event that is only triggered once
```typescript
import { once } from '@tauri-apps/api/event';
interface LoadedPayload {
  loggedIn: boolean,
  token: string
}
const unlisten = await once<LoadedPayload>('loaded', (event) => {
  console.log(`App is loaded, logggedIn: ${event.payload.loggedIn}, token: ${event.payload.token}`);
});
```

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

[event.ts:62](https://github.com/tauri-apps/tauri/blob/dc432ef/tooling/api/src/event.ts#L62)
