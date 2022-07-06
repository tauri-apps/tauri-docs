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

[helpers/event.ts:22](https://github.com/tauri-apps/tauri/blob/7bbf167/tooling/api/src/helpers/event.ts#L22)

___

### EventName

Ƭ **EventName**: `string`

#### Defined in

[helpers/event.ts:20](https://github.com/tauri-apps/tauri/blob/7bbf167/tooling/api/src/helpers/event.ts#L20)

___

### UnlistenFn

Ƭ **UnlistenFn**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[helpers/event.ts:24](https://github.com/tauri-apps/tauri/blob/7bbf167/tooling/api/src/helpers/event.ts#L24)

## Functions

### emit

▸ **emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend.

**`Example`**

```typescript
import { emit } from '@tauri-apps/api/event';
await emit('frontend-loaded', { loggedIn: true, token: 'authToken' });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | Event payload |

#### Returns

`Promise`<`void`\>

___

### listen

▸ **listen**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an event from the backend.

**`Example`**

```typescript
import { listen } from '@tauri-apps/api/event';
const unlisten = await listen<string>('error', (event) => {
  console.log(`Got error in window ${event.windowLabel}, payload: ${payload}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler callback. |

#### Returns

`Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

### once

▸ **once**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an one-off event from the backend.

**`Example`**

```typescript
import { once } from '@tauri-apps/api/event';
interface LoadedPayload {
  loggedIn: boolean,
  token: string
}
const unlisten = await once<LoadedPayload>('loaded', (event) => {
  console.log(`App is loaded, logggedIn: ${event.payload.loggedIn}, token: ${event.payload.token}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler callback. |

#### Returns

`Promise`<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
