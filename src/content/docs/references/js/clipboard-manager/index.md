---
title: '@tauri-apps/plugin-clipboard-manager'
editUrl: false
prev: false
next: false
---

Read and write to the system clipboard.

## Functions

### readText()

```ts
readText(): Promise< string >
```

Gets the clipboard content as plain text.

#### Example

```typescript
import { readText } from '@tauri-apps/plugin-clipboard-manager';
const clipboardText = await readText();
```

#### Since

2.0.0

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `string` \>

**Source**: [index.ts:51](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/clipboard-manager/guest-js/index.ts#L51)

---

### writeText()

```ts
writeText(text, opts?): Promise< void >
```

Writes plain text to the clipboard.

#### Example

```typescript
import { writeText, readText } from '@tauri-apps/plugin-clipboard-manager';
await writeText('Tauri is awesome!');
assert(await readText(), 'Tauri is awesome!');
```

#### Since

2.0.0

#### Parameters

| Parameter     | Type     |
| :------------ | :------- |
| `text`        | `string` |
| `opts`?       | `object` |
| `opts.label`? | `string` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\< `void` \>

A promise indicating the success or failure of the operation.

**Source**: [index.ts:28](https://github.com/tauri-apps/plugins-workspace/blob/v2/plugins/clipboard-manager/guest-js/index.ts#L28)
