# event

The event system allows you to emit events to the backend and listen to events from it.

This package is also accessible with `window.__TAURI__.event` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Enumerations

### `TauriEvent`

**Since**: 1.1.0

#### Enumeration Members

| Name | Type | Defined in |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="event.TauriEvent.CHECK_UPDATE"><a href="#event.TauriEvent.CHECK_UPDATE">`CHECK_UPDATE`</a></div> | `"tauri://update"` | [event.ts:34](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L34) |
| <div class="anchor-with-padding" id="event.TauriEvent.DOWNLOAD_PROGRESS"><a href="#event.TauriEvent.DOWNLOAD_PROGRESS">`DOWNLOAD_PROGRESS`</a></div> | `"tauri://update-download-progress"` | [event.ts:38](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L38) |
| <div class="anchor-with-padding" id="event.TauriEvent.INSTALL_UPDATE"><a href="#event.TauriEvent.INSTALL_UPDATE">`INSTALL_UPDATE`</a></div> | `"tauri://update-install"` | [event.ts:36](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L36) |
| <div class="anchor-with-padding" id="event.TauriEvent.MENU"><a href="#event.TauriEvent.MENU">`MENU`</a></div> | `"tauri://menu"` | [event.ts:33](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L33) |
| <div class="anchor-with-padding" id="event.TauriEvent.STATUS_UPDATE"><a href="#event.TauriEvent.STATUS_UPDATE">`STATUS_UPDATE`</a></div> | `"tauri://update-status"` | [event.ts:37](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L37) |
| <div class="anchor-with-padding" id="event.TauriEvent.UPDATE_AVAILABLE"><a href="#event.TauriEvent.UPDATE_AVAILABLE">`UPDATE_AVAILABLE`</a></div> | `"tauri://update-available"` | [event.ts:35](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L35) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_BLUR"><a href="#event.TauriEvent.WINDOW_BLUR">`WINDOW_BLUR`</a></div> | `"tauri://blur"` | [event.ts:27](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L27) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_CLOSE_REQUESTED"><a href="#event.TauriEvent.WINDOW_CLOSE_REQUESTED">`WINDOW_CLOSE_REQUESTED`</a></div> | `"tauri://close-requested"` | [event.ts:23](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L23) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_CREATED"><a href="#event.TauriEvent.WINDOW_CREATED">`WINDOW_CREATED`</a></div> | `"tauri://window-created"` | [event.ts:24](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L24) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_DESTROYED"><a href="#event.TauriEvent.WINDOW_DESTROYED">`WINDOW_DESTROYED`</a></div> | `"tauri://destroyed"` | [event.ts:25](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L25) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_FILE_DROP"><a href="#event.TauriEvent.WINDOW_FILE_DROP">`WINDOW_FILE_DROP`</a></div> | `"tauri://file-drop"` | [event.ts:30](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L30) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_FILE_DROP_CANCELLED"><a href="#event.TauriEvent.WINDOW_FILE_DROP_CANCELLED">`WINDOW_FILE_DROP_CANCELLED`</a></div> | `"tauri://file-drop-cancelled"` | [event.ts:32](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L32) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_FILE_DROP_HOVER"><a href="#event.TauriEvent.WINDOW_FILE_DROP_HOVER">`WINDOW_FILE_DROP_HOVER`</a></div> | `"tauri://file-drop-hover"` | [event.ts:31](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L31) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_FOCUS"><a href="#event.TauriEvent.WINDOW_FOCUS">`WINDOW_FOCUS`</a></div> | `"tauri://focus"` | [event.ts:26](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L26) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_MOVED"><a href="#event.TauriEvent.WINDOW_MOVED">`WINDOW_MOVED`</a></div> | `"tauri://move"` | [event.ts:22](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L22) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_RESIZED"><a href="#event.TauriEvent.WINDOW_RESIZED">`WINDOW_RESIZED`</a></div> | `"tauri://resize"` | [event.ts:21](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L21) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_SCALE_FACTOR_CHANGED"><a href="#event.TauriEvent.WINDOW_SCALE_FACTOR_CHANGED">`WINDOW_SCALE_FACTOR_CHANGED`</a></div> | `"tauri://scale-change"` | [event.ts:28](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L28) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_THEME_CHANGED"><a href="#event.TauriEvent.WINDOW_THEME_CHANGED">`WINDOW_THEME_CHANGED`</a></div> | `"tauri://theme-changed"` | [event.ts:29](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L29) |

## Interfaces

### `Event<T>`

**Type parameters**

- `T`

#### Properties

##### `event`

>  **event**: [`EventName`](event.md#eventname)

Event name

**Defined in:** [helpers/event.ts:12](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/helpers/event.ts#L12)

##### `id`

>  **id**: `number`

Event identifier used to unlisten

**Defined in:** [helpers/event.ts:16](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/helpers/event.ts#L16)

##### `payload`

>  **payload**: `T`

Event payload

**Defined in:** [helpers/event.ts:18](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/helpers/event.ts#L18)

##### `windowLabel`

>  **windowLabel**: `string`

The label of the window that emitted this event.

**Defined in:** [helpers/event.ts:14](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/helpers/event.ts#L14)

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

**Defined in:** [helpers/event.ts:21](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/helpers/event.ts#L21)

### `EventName`

>  **EventName**: ``${TauriEvent}`` \| `string` & [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`never`, `never`\>

**Defined in:** [event.ts:15](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/event.ts#L15)

### `UnlistenFn`

>  **UnlistenFn**: () => `void`

**Type declaration**

> (): `void`

**Returns: **`void`

**Defined in:** [helpers/event.ts:23](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/helpers/event.ts#L23)

## Functions

### `emit`

> **emit**(`event`: `string`, `payload?`: `unknown`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Emits an event to the backend.

**Example**

```typescript
import { emit } from '@tauri-apps/api/event';
await emit('frontend-loaded', { loggedIn: true, token: 'authToken' });
```

**Since**: 1.0.0

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | - |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

### `listen`

> **listen**<`T`\>(`event`: [`EventName`](event.md#eventname), `handler`: [`EventCallback`](event.md#eventcallback)<`T`\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an event from the backend.

**Example**

```typescript
import { listen } from '@tauri-apps/api/event';
const unlisten = await listen<string>('error', (event) => {
  console.log(`Got error in window ${event.windowLabel}, payload: ${event.payload}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Since**: 1.0.0

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`EventName`](event.md#eventname) | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | Event handler callback. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

### `once`

> **once**<`T`\>(`event`: [`EventName`](event.md#eventname), `handler`: [`EventCallback`](event.md#eventcallback)<`T`\>): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an one-off event from the backend.

**Example**

```typescript
import { once } from '@tauri-apps/api/event';
interface LoadedPayload {
  loggedIn: boolean,
  token: string
}
const unlisten = await once<LoadedPayload>('loaded', (event) => {
  console.log(`App is loaded, loggedIn: ${event.payload.loggedIn}, token: ${event.payload.token}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

**Since**: 1.0.0

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | [`EventName`](event.md#eventname) | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler` | [`EventCallback`](event.md#eventcallback)<`T`\> | - |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
