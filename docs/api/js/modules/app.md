# app

Get application metadata.

This package is also accessible with `window.__TAURI__.app` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Functions

### `getName`

> **getName**(): `Promise`<`string`\>

Gets the application name.

**`Example`**

```typescript
import { getName } from '@tauri-apps/api/app';
const appName = await getName();
```

**Returns**: `Promise`<`string`\>

A promise resolving to application name.

___

### `getTauriVersion`

> **getTauriVersion**(): `Promise`<`string`\>

Gets the Tauri version.

**`Example`**

```typescript
import { getTauriVersion } from '@tauri-apps/api/app';
const tauriVersion = await getTauriVersion();
```

**Returns**: `Promise`<`string`\>

A promise resolving to Tauri version.

___

### `getVersion`

> **getVersion**(): `Promise`<`string`\>

Gets the application version.

**`Example`**

```typescript
import { getVersion } from '@tauri-apps/api/app';
const appVersion = await getVersion();
```

**Returns**: `Promise`<`string`\>

A promise resolving to the application version.
