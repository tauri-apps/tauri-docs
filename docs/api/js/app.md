# app

## Functions

### `getName`

> **getName**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Gets the application name.

**Example**

```typescript
import { getName } from '@tauri-apps/api/app';
const appName = await getName();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `getTauriVersion`

> **getTauriVersion**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Gets the Tauri version.

**Example**

```typescript
import { getTauriVersion } from '@tauri-apps/api/app';
const tauriVersion = await getTauriVersion();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `getVersion`

> **getVersion**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Gets the application version.

**Example**

```typescript
import { getVersion } from '@tauri-apps/api/app';
const appVersion = await getVersion();
```

**Since**: 1.0.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

### `hide`

> **hide**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Hides the application on macOS.

**Example**

```typescript
import { hide } from '@tauri-apps/api/app';
await hide();
```

**Since**: 1.2.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

### `show`

> **show**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Shows the application on macOS. This function does not automatically focus any specific app window.

**Example**

```typescript
import { show } from '@tauri-apps/api/app';
await show();
```

**Since**: 1.2.0

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>
