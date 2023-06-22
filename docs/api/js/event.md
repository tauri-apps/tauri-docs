# event

The event system allows you to emit events to the backend and listen to events from it.

This package is also accessible with `window.__TAURI__.event` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Enumerations

### `TauriEvent`

**Since**: 1.1.0

#### Enumeration Members

| Name | Type | Defined in |
| :------ | :------ | :------ |
| <div class="anchor-with-padding" id="event.TauriEvent.MENU"><a href="#event.TauriEvent.MENU">`MENU`</a></div> | `"tauri://menu"` | [event.ts:59](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L59) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_BLUR"><a href="#event.TauriEvent.WINDOW_BLUR">`WINDOW_BLUR`</a></div> | `"tauri://blur"` | [event.ts:53](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L53) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_CLOSE_REQUESTED"><a href="#event.TauriEvent.WINDOW_CLOSE_REQUESTED">`WINDOW_CLOSE_REQUESTED`</a></div> | `"tauri://close-requested"` | [event.ts:49](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L49) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_CREATED"><a href="#event.TauriEvent.WINDOW_CREATED">`WINDOW_CREATED`</a></div> | `"tauri://window-created"` | [event.ts:50](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L50) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_DESTROYED"><a href="#event.TauriEvent.WINDOW_DESTROYED">`WINDOW_DESTROYED`</a></div> | `"tauri://destroyed"` | [event.ts:51](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L51) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_FILE_DROP"><a href="#event.TauriEvent.WINDOW_FILE_DROP">`WINDOW_FILE_DROP`</a></div> | `"tauri://file-drop"` | [event.ts:56](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L56) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_FILE_DROP_CANCELLED"><a href="#event.TauriEvent.WINDOW_FILE_DROP_CANCELLED">`WINDOW_FILE_DROP_CANCELLED`</a></div> | `"tauri://file-drop-cancelled"` | [event.ts:58](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L58) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_FILE_DROP_HOVER"><a href="#event.TauriEvent.WINDOW_FILE_DROP_HOVER">`WINDOW_FILE_DROP_HOVER`</a></div> | `"tauri://file-drop-hover"` | [event.ts:57](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L57) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_FOCUS"><a href="#event.TauriEvent.WINDOW_FOCUS">`WINDOW_FOCUS`</a></div> | `"tauri://focus"` | [event.ts:52](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L52) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_MOVED"><a href="#event.TauriEvent.WINDOW_MOVED">`WINDOW_MOVED`</a></div> | `"tauri://move"` | [event.ts:48](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L48) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_RESIZED"><a href="#event.TauriEvent.WINDOW_RESIZED">`WINDOW_RESIZED`</a></div> | `"tauri://resize"` | [event.ts:47](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L47) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_SCALE_FACTOR_CHANGED"><a href="#event.TauriEvent.WINDOW_SCALE_FACTOR_CHANGED">`WINDOW_SCALE_FACTOR_CHANGED`</a></div> | `"tauri://scale-change"` | [event.ts:54](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L54) |
| <div class="anchor-with-padding" id="event.TauriEvent.WINDOW_THEME_CHANGED"><a href="#event.TauriEvent.WINDOW_THEME_CHANGED">`WINDOW_THEME_CHANGED`</a></div> | `"tauri://theme-changed"` | [event.ts:55](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L55) |

## Interfaces

### `Event<T>`

**Type parameters**

- `T`

#### Properties

##### `event`

>  **event**: [`EventName`](event.md#eventname)

Event name

**Defined in:** [event.ts:16](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L16)

##### `id`

>  **id**: `number`

Event identifier used to unlisten

**Defined in:** [event.ts:20](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L20)

##### `payload`

>  **payload**: `T`

Event payload

**Defined in:** [event.ts:22](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L22)

##### `windowLabel`

>  **windowLabel**: `string`

The label of the window that emitted this event.

**Defined in:** [event.ts:18](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L18)

### `Options`

#### Properties

##### `target`

> `Optional` **target**: `string`

Label of the window the function targets.

When listening to events and using this value,
only events triggered by the window with the given label are received.

When emitting events, only the window with the given label will receive it.

**Defined in:** [event.ts:40](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L40)

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

**Defined in:** [event.ts:25](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L25)

### `EventName`

>  **EventName**: ``${TauriEvent}`` \| `string` & [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`never`, `never`\>

**Defined in:** [event.ts:29](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L29)

### `UnlistenFn`

>  **UnlistenFn**: () => `void`

**Type declaration**

> (): `void`

**Returns: **`void`

**Defined in:** [event.ts:27](https://github.com/tauri-apps/tauri/blob/0ef9c6b/tooling/api/src/event.ts#L27)

## Functions

### `emit`

> **emit**(`event`: `string`, `payload?`: `unknown`, `options?`: [`Options`](event.md#options)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Emits an event to the backend and all Tauri windows.

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
| `options?` | [`Options`](event.md#options) | - |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

### `listen`

> **listen**<`T`\>(`event`: [`EventName`](event.md#eventname), `handler`: [`EventCallback`](event.md#eventcallback)<`T`\>, `options?`: [`Options`](event.md#options)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an event. The event can be either global or window-specific.
See [windowLabel](event.md#windowlabel) to check the event source.

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
| `options?` | [`Options`](event.md#options) | - |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

### `once`

> **once**<`T`\>(`event`: [`EventName`](event.md#eventname), `handler`: [`EventCallback`](event.md#eventcallback)<`T`\>, `options?`: [`Options`](event.md#options)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

Listen to an one-off event. See [listen](event.md#listen) for more information.

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
| `options?` | [`Options`](event.md#options) | - |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`UnlistenFn`](event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
