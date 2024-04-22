---
title: 'event'
editUrl: false
prev: false
next: false
---

The event system allows you to emit events to the backend and listen to events from it.

This package is also accessible with `window.__TAURI__.event` when [`app.withGlobalTauri`](https://tauri.app/v1/api/config/#appconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Enumerations

### TauriEvent

#### Since

1.1.0

#### Enumeration Members

##### WEBVIEW_CREATED

```ts
WEBVIEW_CREATED: 'tauri://webview-created';
```

**Source**: [event.ts:58](undefined)

---

##### WEBVIEW_FILE_DROP

```ts
WEBVIEW_FILE_DROP: 'tauri://file-drop';
```

**Source**: [event.ts:59](undefined)

---

##### WEBVIEW_FILE_DROP_CANCELLED

```ts
WEBVIEW_FILE_DROP_CANCELLED: 'tauri://file-drop-cancelled';
```

**Source**: [event.ts:61](undefined)

---

##### WEBVIEW_FILE_DROP_HOVER

```ts
WEBVIEW_FILE_DROP_HOVER: 'tauri://file-drop-hover';
```

**Source**: [event.ts:60](undefined)

---

##### WINDOW_BLUR

```ts
WINDOW_BLUR: 'tauri://blur';
```

**Source**: [event.ts:55](undefined)

---

##### WINDOW_CLOSE_REQUESTED

```ts
WINDOW_CLOSE_REQUESTED: 'tauri://close-requested';
```

**Source**: [event.ts:52](undefined)

---

##### WINDOW_DESTROYED

```ts
WINDOW_DESTROYED: 'tauri://destroyed';
```

**Source**: [event.ts:53](undefined)

---

##### WINDOW_FOCUS

```ts
WINDOW_FOCUS: 'tauri://focus';
```

**Source**: [event.ts:54](undefined)

---

##### WINDOW_MOVED

```ts
WINDOW_MOVED: 'tauri://move';
```

**Source**: [event.ts:51](undefined)

---

##### WINDOW_RESIZED

```ts
WINDOW_RESIZED: 'tauri://resize';
```

**Source**: [event.ts:50](undefined)

---

##### WINDOW_SCALE_FACTOR_CHANGED

```ts
WINDOW_SCALE_FACTOR_CHANGED: 'tauri://scale-change';
```

**Source**: [event.ts:56](undefined)

---

##### WINDOW_THEME_CHANGED

```ts
WINDOW_THEME_CHANGED: 'tauri://theme-changed';
```

**Source**: [event.ts:57](undefined)

## Interfaces

### Event

#### Type parameters

| Parameter |
| :-------- |
| `T`       |

#### Properties

| Property                                      | Type                                                                | Description                       |
| :-------------------------------------------- | :------------------------------------------------------------------ | :-------------------------------- |
| <a id="event" name="event"></a> `event`       | [`EventName`](/references/javascript/api/namespaceevent/#eventname) | Event name                        |
| <a id="id" name="id"></a> `id`                | `number`                                                            | Event identifier used to unlisten |
| <a id="payload" name="payload"></a> `payload` | `T`                                                                 | Event payload                     |

---

### Options

#### Properties

| Property                                    | Type                                                                                | Description                                                                                                                                                                                                |
| :------------------------------------------ | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a id="target" name="target"></a> `target`? | `string` \| [`EventTarget`](/references/javascript/api/namespaceevent/#eventtarget) | The event target to listen to, defaults to `{ kind: 'Any' }`, see [EventTarget](/references/javascript/api/namespaceevent/#eventtarget).<br /><br />If a string is provided, EventTarget.AnyLabel is used. |

## Type Aliases

### EventCallback

```ts
EventCallback: <T> (event) => void
```

#### Type parameters

| Parameter |
| :-------- |
| `T`       |

#### Parameters

| Parameter | Type                                                                 |
| :-------- | :------------------------------------------------------------------- |
| `event`   | [`Event`](/references/javascript/api/namespaceevent/#event)\< `T` \> |

#### Returns

`void`

**Source**: [event.ts:31](undefined)

---

### EventName

```ts
EventName: \${TauriEvent}\ | string & Record< never, never >
```

**Source**: [event.ts:35](undefined)

---

### EventTarget

```ts
EventTarget: {kind: "Any";} | {kind: "AnyLabel"; label: string;} | {kind: "App";} | {kind: "Window"; label: string;} | {kind: "Webview"; label: string;} | {kind: "WebviewWindow"; label: string;}
```

**Source**: [event.ts:14](undefined)

---

### UnlistenFn

```ts
UnlistenFn: () => void
```

#### Returns

`void`

**Source**: [event.ts:33](undefined)

## Functions

### emit()

```ts
emit(event, payload?): Promise< void >
```

Emits an event to all [targets](/references/javascript/api/namespaceevent/#eventtarget).

#### Example

```typescript
import { emit } from '@tauri-apps/api/event';
await emit('frontend-loaded', { loggedIn: true, token: 'authToken' });
```

#### Since

1.0.0

#### Parameters

| Parameter  | Type      | Description                                                                   |
| :--------- | :-------- | :---------------------------------------------------------------------------- |
| `event`    | `string`  | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload`? | `unknown` | Event payload.                                                                |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [event.ts:174](undefined)

---

### emitTo()

```ts
emitTo(
  target,
  event,
  payload?): Promise< void >
```

Emits an event to all [targets](/references/javascript/api/namespaceevent/#eventtarget) matching the given target.

#### Example

```typescript
import { emit } from '@tauri-apps/api/event';
await emit('frontend-loaded', { loggedIn: true, token: 'authToken' });
```

#### Since

1.0.0

#### Parameters

| Parameter  | Type                                                                                | Description                                                                                                                           |
| :--------- | :---------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| `target`   | `string` \| [`EventTarget`](/references/javascript/api/namespaceevent/#eventtarget) | Label of the target Window/Webview/WebviewWindow or raw [EventTarget](/references/javascript/api/namespaceevent/#eventtarget) object. |
| `event`    | `string`                                                                            | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`.                                                         |
| `payload`? | `unknown`                                                                           | Event payload.                                                                                                                        |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

**Source**: [event.ts:196](undefined)

---

### listen()

```ts
listen<T>(
  event,
  handler,
  options?): Promise< UnlistenFn >
```

Listen to an emitted event to any [target](/references/javascript/api/namespaceevent/#eventtarget).

#### Example

```typescript
import { listen } from '@tauri-apps/api/event';
const unlisten = await listen<string>('error', (event) => {
  console.log(`Got error, payload: ${event.payload}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Since

1.0.0

#### Type parameters

| Parameter |
| :-------- |
| `T`       |

#### Parameters

| Parameter  | Type                                                                                 | Description                                                                   |
| :--------- | :----------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `event`    | [`EventName`](/references/javascript/api/namespaceevent/#eventname)                  | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler`  | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< `T` \> | Event handler callback.                                                       |
| `options`? | [`Options`](/references/javascript/api/namespaceevent/#options)                      | Event listening options.                                                      |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [event.ts:101](undefined)

---

### once()

```ts
once<T>(
  event,
  handler,
  options?): Promise< UnlistenFn >
```

Listens once to an emitted event to any [target](/references/javascript/api/namespaceevent/#eventtarget).

#### Example

```typescript
import { once } from '@tauri-apps/api/event';
interface LoadedPayload {
  loggedIn: boolean;
  token: string;
}
const unlisten = await once<LoadedPayload>('loaded', (event) => {
  console.log(`App is loaded, loggedIn: ${event.payload.loggedIn}, token: ${event.payload.token}`);
});

// you need to call unlisten if your handler goes out of scope e.g. the component is unmounted
unlisten();
```

#### Since

1.0.0

#### Type parameters

| Parameter |
| :-------- |
| `T`       |

#### Parameters

| Parameter  | Type                                                                                 | Description                                                                   |
| :--------- | :----------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- |
| `event`    | [`EventName`](/references/javascript/api/namespaceevent/#eventname)                  | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `handler`  | [`EventCallback`](/references/javascript/api/namespaceevent/#eventcallback)\< `T` \> | Event handler callback.                                                       |
| `options`? | [`Options`](/references/javascript/api/namespaceevent/#options)                      | Event listening options.                                                      |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< [`UnlistenFn`](/references/javascript/api/namespaceevent/#unlistenfn) \>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

**Source**: [event.ts:145](undefined)
