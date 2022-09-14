# event

The event system allows you to emit events to the backend and listen to events from it.

This package is also accessible with `window.__TAURI__.event` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Interfaces

### `Event<T>`

**Type parameters**

- `T`

#### Properties

##### `event`

>  **event**: `string`

Event name

**Defined in:** [helpers/event.ts:11](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/helpers/event.ts#L11)

##### `id`

>  **id**: `number`

Event identifier used to unlisten

**Defined in:** [helpers/event.ts:15](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/helpers/event.ts#L15)

##### `payload`

>  **payload**: `T`

Event payload

**Defined in:** [helpers/event.ts:17](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/helpers/event.ts#L17)

##### `windowLabel`

>  **windowLabel**: `string`

The label of the window that emitted this event.

**Defined in:** [helpers/event.ts:13](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/helpers/event.ts#L13)

## Type Aliases

### `EventCallback<T>`

>  **EventCallback**<`T`\>: (`event`: [`Event`](event.md#event)<`T`\>) => `void`

**Type parameters**

- `T`

**Type declaration**

> (`event`: [`Event`](event.md#event)<`T`\>): `void`

**Parameters**

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](event.md#event)<`T`\> |

**Returns: **`void`

**Defined in:** [helpers/event.ts:22](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/helpers/event.ts#L22)

### `EventName`

>  **EventName**: `string`

**Defined in:** [helpers/event.ts:20](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/helpers/event.ts#L20)

### `UnlistenFn`

>  **UnlistenFn**: () => `void`

**Type declaration**

> (): `void`

**Returns: **`void`

**Defined in:** [helpers/event.ts:24](https://github.com/tauri-apps/tauri/blob/679abc6a/tooling/api/src/helpers/event.ts#L24)

## Functions

### `emit`

> **emit**(`event`: `string`, `payload?`: `unknown`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Emits an event to the backend.

**Example**

```typescript
import { emit } from '@tauri-apps/api/event';
await emit('frontend-loaded', { loggedIn: true, token: 'authToken' });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | Event payload |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

### `listen`

> **listen**<`T`\>(`event`: `string`, `handler`: [`EventCallback`](event.md#eventcallback)<`T`\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an event from the backend.

**Example**

```typescript
import { listen } from '@tauri-apps/api/event';
const unlisten = await listen<string>('error', (event) => {
  console.log(`Got error in window ${event.windowLabel}, payload: ${payload}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler callback. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

### `once`

> **once**<`T`\>(`event`: `string`, `handler`: [`EventCallback`](event.md#eventcallback)<`T`\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an one-off event from the backend.

**Example**

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

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler callback. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
