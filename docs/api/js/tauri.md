# tauri

Invoke your custom commands.

This package is also accessible with `window.__TAURI__.tauri` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Type Aliases

### `InvokeArgs`

>  **InvokeArgs**: [`Record`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type )<`string`, `unknown`\>

Command arguments.

**Since**: 1.0.0

**Defined in:** [tauri.ts:66](https://github.com/tauri-apps/tauri/blob/e816a46/tooling/api/src/tauri.ts#L66)

## Functions

### `convertFileSrc`

> **convertFileSrc**(`filePath`: `string`, `protocol?`: `string`): `string`

Convert a device file path to an URL that can be loaded by the webview.
Note that `asset:` and `https://asset.localhost` must be added to [`tauri.security.csp`](https://tauri.app/v1/api/config/#securityconfig.csp) in `tauri.conf.json`.
Example CSP value: `"csp": "default-src 'self'; img-src 'self' asset: https://asset.localhost"` to use the asset protocol on image sources.

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

> **invoke**<`T`\>(`cmd`: `string`, `args?`: [`InvokeArgs`](tauri.md#invokeargs)): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

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

**Returns: **[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`T`\>

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
