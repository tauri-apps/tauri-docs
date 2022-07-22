[@tauri-apps/api](../README.md) / [window](../modules/window.md) / WebviewWindowHandle

# Class: WebviewWindowHandle

[window](../modules/window.md).WebviewWindowHandle

A webview window handle allows emitting and listening to events from the backend that are tied to the window.

## Hierarchy

- **`WebviewWindowHandle`**

  ↳ [`WindowManager`](window.WindowManager.md)

## Constructors

### constructor

**new WebviewWindowHandle**(`label`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

## Properties

### label

 **label**: `string`

The window label. It is a unique identifier for the window, can be used to reference it later.

#### Defined in

[window.ts:280](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L280)

___

### listeners

 **listeners**: `Object`

Local event listeners.

#### Index signature

▪ [key: `string`]: [`EventCallback`](../modules/event.md#eventcallback)<`any`\>[]

#### Defined in

[window.ts:282](https://github.com/tauri-apps/tauri/blob/679abc6/tooling/api/src/window.ts#L282)

## Methods

### \_handleTauriEvent

**_handleTauriEvent**<`T`\>(`event`, `handler`): `boolean`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> |

#### Returns

`boolean`

___

### emit

**emit**(`event`, `payload?`): `Promise`<`void`\>

Emits an event to the backend, tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
await appWindow.emit('window-loaded', { loggedIn: true, token: 'authToken' });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | Event name. Must include only alphanumeric characters, `-`, `/`, `:` and `_`. |
| `payload?` | `unknown` | Event payload. |

#### Returns

`Promise`<`void`\>

___

### listen

**listen**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an event emitted by the backend that is tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.listen<string>('state-changed', (event) => {
  console.log(`Got error: ${payload}`);
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
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.

___

### once

**once**<`T`\>(`event`, `handler`): `Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

Listen to an one-off event emitted by the backend that is tied to the webview window.

**`Example`**

```typescript
import { appWindow } from '@tauri-apps/api/window';
const unlisten = await appWindow.once<null>('initialized', (event) => {
  console.log(`Window initialized!`);
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
| `handler` | [`EventCallback`](../modules/event.md#eventcallback)<`T`\> | Event handler. |

#### Returns

`Promise`<[`UnlistenFn`](../modules/event.md#unlistenfn)\>

A promise resolving to a function to unlisten to the event.
Note that removing the listener is required if your listener goes out of scope e.g. the component is unmounted.
