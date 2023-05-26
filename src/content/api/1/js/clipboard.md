# clipboard

Read and write to the system clipboard.

This package is also accessible with `window.__TAURI__.clipboard` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

The APIs must be added to [`tauri.allowlist.clipboard`](https://tauri.app/v1/api/config/#allowlistconfig.clipboard) in `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "clipboard": {
        "all": true, // enable all Clipboard APIs
        "writeText": true,
        "readText": true
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Functions

### `readText`

> **readText**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string` \| `null`\>

Gets the clipboard content as plain text.

**Example**

```typescript
import { readText } from '@tauri-apps/api/clipboard';
const clipboardText = await readText();
```

**Since**: 1.0.0.

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string` \| `null`\>

### `writeText`

> **writeText**(`text`: `string`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Writes plain text to the clipboard.

**Example**

```typescript
import { writeText, readText } from '@tauri-apps/api/clipboard';
await writeText('Tauri is awesome!');
assert(await readText(), 'Tauri is awesome!');
```

**Since**: 1.0.0.

**Parameters**

| Name | Type |
| :------ | :------ |
| `text` | `string` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.
