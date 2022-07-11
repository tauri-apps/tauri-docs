[@tauri-apps/api](../README.md) / dialog

# Module: dialog

Native system dialogs for opening and saving files.

This package is also accessible with `window.__TAURI__.dialog` when [`build.withGlobalTauri`](https://tauri.app/v1/api/config/#buildconfig.withglobaltauri) in `tauri.conf.json` is set to `true`.

The APIs must be added to [`tauri.allowlist.dialog`](https://tauri.app/v1/api/config/#allowlistconfig.dialog) in `tauri.conf.json`:
```json
{
  "tauri": {
    "allowlist": {
      "dialog": {
        "all": true, // enable all dialog APIs
        "open": true, // enable file open API
        "save": true // enable file save API
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Interfaces

- [DialogFilter](../interfaces/dialog.DialogFilter.md)
- [MessageDialogOptions](../interfaces/dialog.MessageDialogOptions.md)
- [OpenDialogOptions](../interfaces/dialog.OpenDialogOptions.md)
- [SaveDialogOptions](../interfaces/dialog.SaveDialogOptions.md)

## Functions

### ask

**ask**(`message`, `options?`): `Promise`<`boolean`\>

Shows a question dialog with `Yes` and `No` buttons.

**`Example`**

```typescript
import { ask } from '@tauri-apps/api/dialog';
const yes = await ask('Are you sure?', 'Tauri');
const yes2 = await ask('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| [`MessageDialogOptions`](../interfaces/dialog.MessageDialogOptions.md) | The dialog's options. If a string, it represents the dialog title. |

#### Returns

`Promise`<`boolean`\>

A promise resolving to a boolean indicating whether `Yes` was clicked or not.

___

### confirm

**confirm**(`message`, `options?`): `Promise`<`boolean`\>

Shows a question dialog with `Ok` and `Cancel` buttons.

**`Example`**

```typescript
import { confirm } from '@tauri-apps/api/dialog';
const confirmed = await confirm('Are you sure?', 'Tauri');
const confirmed2 = await confirm('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| [`MessageDialogOptions`](../interfaces/dialog.MessageDialogOptions.md) | The dialog's options. If a string, it represents the dialog title. |

#### Returns

`Promise`<`boolean`\>

A promise resolving to a boolean indicating whether `Ok` was clicked or not.

___

### message

**message**(`message`, `options?`): `Promise`<`void`\>

Shows a message dialog with an `Ok` button.

**`Example`**

```typescript
import { message } from '@tauri-apps/api/dialog';
await message('Tauri is awesome', 'Tauri');
await message('File not found', { title: 'Tauri', type: 'error' });
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| [`MessageDialogOptions`](../interfaces/dialog.MessageDialogOptions.md) | The dialog's options. If a string, it represents the dialog title. |

#### Returns

`Promise`<`void`\>

A promise indicating the success or failure of the operation.

___

### open

**open**(`options?`): `Promise`<``null`` \| `string` \| `string`[]\>

Open a file/directory selection dialog.

The selected paths are added to the filesystem and asset protocol allowlist scopes.
When security is more important than the easy of use of this API,
prefer writing a dedicated command instead.

Note that the allowlist scope change is not persisted, so the values are cleared when the application is restarted.
You can save it to the filesystem using [tauri-plugin-persisted-scope](https://github.com/tauri-apps/tauri-plugin-persisted-scope).

**`Example`**

```typescript
import { open } from '@tauri-apps/api/dialog';
// Open a selection dialog for image files
const selected = await open({
  multiple: true,
  filters: [{
    name: 'Image',
    extensions: ['png', 'jpeg']
  }]
});
if (Array.isArray(selected)) {
  // user selected multiple files
} else if (selected === null) {
  // user cancelled the selection
} else {
  // user selected a single file
}
```

**`Example`**

```typescript
import { open } from '@tauri-apps/api/dialog';
import { appDir } from '@tauri-apps/api/path';
// Open a selection dialog for directories
const selected = await open({
  directory: true,
  multiple: true,
  defaultPath: await appDir(),
});
if (Array.isArray(selected)) {
  // user selected multiple directories
} else if (selected === null) {
  // user cancelled the selection
} else {
  // user selected a single directory
}
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`OpenDialogOptions`](../interfaces/dialog.OpenDialogOptions.md) |

#### Returns

`Promise`<``null`` \| `string` \| `string`[]\>

A promise resolving to the selected path(s)

___

### save

**save**(`options?`): `Promise`<`string`\>

Open a file/directory save dialog.

The selected path is added to the filesystem and asset protocol allowlist scopes.
When security is more important than the easy of use of this API,
prefer writing a dedicated command instead.

Note that the allowlist scope change is not persisted, so the values are cleared when the application is restarted.
You can save it to the filesystem using [tauri-plugin-persisted-scope](https://github.com/tauri-apps/tauri-plugin-persisted-scope).

**`Example`**

```typescript
import { save } from '@tauri-apps/api/dialog';
const filePath = await save({
  multiple: true,
  filters: [{
    name: 'Image',
    extensions: ['stronghold']
  }]
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`SaveDialogOptions`](../interfaces/dialog.SaveDialogOptions.md) |

#### Returns

`Promise`<`string`\>

A promise resolving to the selected path.
