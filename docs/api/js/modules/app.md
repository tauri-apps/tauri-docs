[@tauri-apps/api](../README.md) / app

# Module: app

Get application metadata.

This package is also accessible with `window.__TAURI__.app` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Functions

### getName

▸ **getName**(): `Promise`<`string`\>

Gets the application name.

**`example`**
```typescript
import { getName } from '@tauri-apps/api/app';
const appName = await getName();
```

#### Returns

`Promise`<`string`\>

A promise resolving to application name.

#### Defined in

[app.ts:43](https://github.com/tauri-apps/tauri/blob/13c2fc1/tooling/api/src/app.ts#L43)

___

### getTauriVersion

▸ **getTauriVersion**(): `Promise`<`string`\>

Gets the tauri version.

**`example`**
```typescript
import { getTauriVersion } from '@tauri-apps/api/app';
const tauriVersion = await getTauriVersion();
```

#### Returns

`Promise`<`string`\>

A promise resolving to tauri version.

#### Defined in

[app.ts:63](https://github.com/tauri-apps/tauri/blob/13c2fc1/tooling/api/src/app.ts#L63)

___

### getVersion

▸ **getVersion**(): `Promise`<`string`\>

Gets the application version.

**`example`**
```typescript
import { getVersion } from '@tauri-apps/api/app';
const appVersion = await getVersion();
```

#### Returns

`Promise`<`string`\>

A promise resolving to the application version.

#### Defined in

[app.ts:24](https://github.com/tauri-apps/tauri/blob/13c2fc1/tooling/api/src/app.ts#L24)
