# clipboard

Read and write to the system clipboard.

This package is also accessible with `window.__TAURI__.clipboard` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

## Functions

### readText

> **readText**(): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string` \| `null`\>

Gets the clipboard content as plain text.

**Example**

```typescript
import { readText } from '@tauri-apps/api/clipboard';
const clipboardText = await readText();
```

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string` \| `null`\>

A promise resolving to the clipboard content as plain text.

---

### writeText

> **writeText**(`text`: `string`): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Writes plain text to the clipboard.

**Example**

```typescript
import { writeText, readText } from '@tauri-apps/api/clipboard';
await writeText('Tauri is awesome!');
assert(await readText(), 'Tauri is awesome!');
```

**Parameters**

| Name | Type |
| :------ | :------ |
| `text` | `string` |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.
