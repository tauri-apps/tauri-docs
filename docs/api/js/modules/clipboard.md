[@tauri-apps/api](../README.md) / clipboard

# Module: clipboard

Read and write to the system clipboard.

This package is also accessible with `window.__TAURI__.clipboard` when `tauri.conf.json > build > withGlobalTauri` is set to true.

## Functions

### readText

▸ **readText**(): `Promise`<`string` \| ``null``\>

Gets the clipboard content as plain text.

**`Example`**

 ```typescript
import { readText } from '@tauri-apps/api/clipboard';
const clipboardText = await readText();
```

#### Returns

`Promise`<`string` \| ``null``\>

A promise resolving to the clipboard content as plain text.

___

### writeText

▸ **writeText**(`text`): `Promise`<`void`\>

Writes a plain text to the clipboard.

**`Example`**

 ```typescript
import { writeText, readText } from '@tauri-apps/api/clipboard';
await writeText('Tauri is awesome!');
assert(await readText(), 'Tauri is awesome!');
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.
