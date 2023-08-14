# tauri

Invoke your custom commands.

This package is also accessible with `window.__TAURI__.tauri` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Classes

### `Channel<T>`

**Type parameters**

- `T` = `unknown`

#### Constructors

##### `constructor`

> **new Channel**<`T`\>(): [`Channel`](tauri.md#channel)<`T`\>

**Type parameters**

- `T` = `unknown`

**Defined in:** [tauri.ts:71](https://github.com/tauri-apps/tauri/blob/3bf1bce/tooling/api/src/tauri.ts#L71)

#### Properties

##### `id`

>  **id**: `number`

**Defined in:** [tauri.ts:64](https://github.com/tauri-apps/tauri/blob/3bf1bce/tooling/api/src/tauri.ts#L64)

#### Accessors

##### `onmessage`

> **onmessage**(): (`response`: `T`) => `void`

**Returns: **`fn`

> (`response`: `T`): `void`

**Parameters**

| Name | Type |
| :------ | :------ |
| `response` | `T` |

**Returns: **`void`

> **onmessage**(`handler`: `fn`): `void`

**Parameters**

| Name | Type |
| :------ | :------ |
| `handler` | (`response`: `T`) => `void` |

**Returns: **`void`

#### Methods

##### `toJSON`

> **toJSON**(): `string`

**Returns: **`string`

### `PluginListener`

#### Constructors

##### `constructor`

> **new PluginListener**(`plugin`: `string`, `event`: `string`, `channelId`: `number`): [`PluginListener`](tauri.md#pluginlistener)

**Parameters**

| Name | Type |
| :------ | :------ |
| `plugin` | `string` |
| `event` | `string` |
| `channelId` | `number` |

**Defined in:** [tauri.ts:95](https://github.com/tauri-apps/tauri/blob/3bf1bce/tooling/api/src/tauri.ts#L95)

#### Properties

##### `channelId`

>  **channelId**: `number`

**Defined in:** [tauri.ts:93](https://github.com/tauri-apps/tauri/blob/3bf1bce/tooling/api/src/tauri.ts#L93)

##### `event`

>  **event**: `string`

**Defined in:** [tauri.ts:92](https://github.com/tauri-apps/tauri/blob/3bf1bce/tooling/api/src/tauri.ts#L92)

##### `plugin`

>  **plugin**: `string`

**Defined in:** [tauri.ts:91](https://github.com/tauri-apps/tauri/blob/3bf1bce/tooling/api/src/tauri.ts#L91)

#### Methods

##### `unregister`

> **unregister**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

## Interfaces

### `InvokeOptions`

**Since**: 2.0.0

#### Properties

##### `headers`

>  **headers**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, `string`\> \| [`Headers`]( https://developer.mozilla.org/en-US/docs/Web/API/Headers )

**Defined in:** [tauri.ts:139](https://github.com/tauri-apps/tauri/blob/3bf1bce/tooling/api/src/tauri.ts#L139)

## Type Aliases

### `InvokeArgs`

>  **InvokeArgs**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, `unknown`\> \| `number`[] \| [`ArrayBuffer`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer ) \| [`Uint8Array`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array )

Command arguments.

**Since**: 1.0.0

**Defined in:** [tauri.ts:133](https://github.com/tauri-apps/tauri/blob/3bf1bce/tooling/api/src/tauri.ts#L133)

## Functions

### `addPluginListener`

> **addPluginListener**<`T`\>(`plugin`: `string`, `event`: `string`, `cb`: `fn`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PluginListener`](tauri.md#pluginlistener)\>

Adds a listener to a plugin event.

**Since**: 2.0.0

**Type parameters**

- `T`

**Parameters**

| Name | Type |
| :------ | :------ |
| `plugin` | `string` |
| `event` | `string` |
| `cb` | (`payload`: `T`) => `void` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<[`PluginListener`](tauri.md#pluginlistener)\>

The listener object to stop listening to the events.

### `convertFileSrc`

> **convertFileSrc**(`filePath`: `string`, `protocol?`: `string`): `string`

Convert a device file path to an URL that can be loaded by the webview.
Note that `asset:` and `https://asset.localhost` must be added to [`tauri.security.csp`](https://tauri.app/v1/api/config/#securityconfig.csp) in `tauri.conf.json`.
Example CSP value: `"csp": "default-src 'self' ipc: https://ipc.localhost; img-src 'self' asset: https://asset.localhost"` to use the asset protocol on image sources.

Additionally, `asset` must be added to [`tauri.allowlist.protocol`](https://tauri.app/v1/api/config/#allowlistconfig.protocol)
in `tauri.conf.json` and its access scope must be defined on the `assetScope` array on the same `protocol` object.

**Example**

```typescript
import { appDataDir, join } from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';
const appDataDirPath = await appDataDir();
const filePath = await join(appDataDirPath, 'assets/video.mp4');
const assetUrl = convertFileSrc(filePath);

const video = document.getElementById('my-video');
const source = document.createElement('source');
source.type = 'video/mp4';
source.src = assetUrl;
video.appendChild(source);
video.load();
```

**Since**: 1.0.0

**Parameters**

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `filePath` | `string` | `undefined` | The file path. |
| `protocol` | `string` | `'asset'` | The protocol to use. Defaults to `asset`. You only need to set this when using a custom protocol. |

**Returns: **`string`

the URL that can be used as source on the webview.

### `invoke`

> **invoke**<`T`\>(`cmd`: `string`, `args?`: [`InvokeArgs`](tauri.md#invokeargs), `options?`: [`InvokeOptions`](tauri.md#invokeoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

Sends a message to the backend.

**Example**

```typescript
import { invoke } from '@tauri-apps/api/tauri';
await invoke('login', { user: 'tauri', password: 'poiwe3h4r5ip3yrhtew9ty' });
```

**Since**: 1.0.0

**Type parameters**

- `T`

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmd` | `string` | The command name. |
| `args` | [`InvokeArgs`](tauri.md#invokeargs) | The optional arguments to pass to the command. |
| `options?` | [`InvokeOptions`](tauri.md#invokeoptions) | The request options. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

A promise resolving or rejecting to the backend response.

### `transformCallback`

> **transformCallback**(`callback?`: `fn`, `once?`: `boolean`): `number`

Transforms a callback function to a string identifier that can be passed to the backend.
The backend uses the identifier to `eval()` the callback.

**Since**: 1.0.0

**Parameters**

| Name | Type | Default value |
| :------ | :------ | :------ |
| `callback?` | (`response`: `any`) => `void` | `undefined` |
| `once` | `boolean` | `false` |

**Returns: **`number`

A unique identifier associated with the callback function.
