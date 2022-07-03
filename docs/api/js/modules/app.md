[@tauri-apps/api](../README.md) / app

# Module: app

Get application metadata.

This package is also accessible with `window.__TAURI__.app` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Functions

### getName

▸ **getName**(): `Promise`<`string`\>

Gets the application name.

**`Example`**

 ```typescript
import { getName } from '@tauri-apps/api/app';
const appName = await getName();
```

#### Returns

`Promise`<`string`\>

A promise resolving to application name.

___

### getTauriVersion

▸ **getTauriVersion**(): `Promise`<`string`\>

Gets the tauri version.

**`Example`**

 ```typescript
import { getTauriVersion } from '@tauri-apps/api/app';
const tauriVersion = await getTauriVersion();
```

#### Returns

`Promise`<`string`\>

A promise resolving to tauri version.

___

### getVersion

▸ **getVersion**(): `Promise`<`string`\>

Gets the application version.

**`Example`**

 ```typescript
import { getVersion } from '@tauri-apps/api/app';
const appVersion = await getVersion();
```

#### Returns

`Promise`<`string`\>

A promise resolving to the application version.
