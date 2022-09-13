# dialog

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

### `DialogFilter`

Extension filters for the file dialog.

**Since**

1.0.0

#### Properties

##### `extensions`

>  **extensions**: `string`[]

Extensions to filter, without a `.` prefix.

**Example**

```typescript
extensions: ['svg', 'png']
```

**Defined in:** [dialog.ts:45](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L45)

##### `name`

>  **name**: `string`

Filter name.

**Defined in:** [dialog.ts:37](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L37)

### `MessageDialogOptions`

**Since**

1.0.0

#### Properties

##### `title`

> `Optional` **title**: `string`

The title of the dialog. Defaults to the app name.

**Defined in:** [dialog.ts:94](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L94)

##### `type`

> `Optional` **type**: `"error"` \| `"info"` \| `"warning"`

The type of the dialog. Defaults to `info`.

**Defined in:** [dialog.ts:96](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L96)

### `OpenDialogOptions`

Options for the open dialog.

**Since**

1.0.0

#### Properties

##### `defaultPath`

> `Optional` **defaultPath**: `string`

Initial directory or file path.

**Defined in:** [dialog.ts:59](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L59)

##### `directory`

> `Optional` **directory**: `boolean`

Whether the dialog is a directory selection or not.

**Defined in:** [dialog.ts:63](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L63)

##### `filters`

> `Optional` **filters**: [`DialogFilter`](dialog.md#dialogfilter)[]

The filters of the dialog.

**Defined in:** [dialog.ts:57](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L57)

##### `multiple`

> `Optional` **multiple**: `boolean`

Whether the dialog allows multiple selection or not.

**Defined in:** [dialog.ts:61](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L61)

##### `recursive`

> `Optional` **recursive**: `boolean`

If `directory` is true, indicates that it will be read recursively later.
Defines whether subdirectories will be allowed on the scope or not.

**Defined in:** [dialog.ts:68](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L68)

##### `title`

> `Optional` **title**: `string`

The title of the dialog window.

**Defined in:** [dialog.ts:55](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L55)

### `SaveDialogOptions`

Options for the save dialog.

**Since**

1.0.0

#### Properties

##### `defaultPath`

> `Optional` **defaultPath**: `string`

Initial directory or file path.
If it's a directory path, the dialog interface will change to that folder.
If it's not an existing directory, the file name will be set to the dialog's file name input and the dialog will be set to the parent folder.

**Defined in:** [dialog.ts:86](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L86)

##### `filters`

> `Optional` **filters**: [`DialogFilter`](dialog.md#dialogfilter)[]

The filters of the dialog.

**Defined in:** [dialog.ts:80](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L80)

##### `title`

> `Optional` **title**: `string`

The title of the dialog window.

**Defined in:** [dialog.ts:78](https://github.com/tauri-apps/tauri/blob/ed9ac05/tooling/api/src/dialog.ts#L78)

## Functions

### `ask`

> **ask**(`message`: `string`, `options?`: `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Shows a question dialog with `Yes` and `No` buttons.

**Example**

```typescript
import { ask } from '@tauri-apps/api/dialog';
const yes = await ask('Are you sure?', 'Tauri');
const yes2 = await ask('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
```

**Since**

1.0.0

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions) | The dialog's options. If a string, it represents the dialog title. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

A promise resolving to a boolean indicating whether `Yes` was clicked or not.

### `confirm`

> **confirm**(`message`: `string`, `options?`: `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Shows a question dialog with `Ok` and `Cancel` buttons.

**Example**

```typescript
import { confirm } from '@tauri-apps/api/dialog';
const confirmed = await confirm('Are you sure?', 'Tauri');
const confirmed2 = await confirm('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
```

**Since**

1.0.0

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions) | The dialog's options. If a string, it represents the dialog title. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

A promise resolving to a boolean indicating whether `Ok` was clicked or not.

### `message`

> **message**(`message`: `string`, `options?`: `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Shows a message dialog with an `Ok` button.

**Example**

```typescript
import { message } from '@tauri-apps/api/dialog';
await message('Tauri is awesome', 'Tauri');
await message('File not found', { title: 'Tauri', type: 'error' });
```

**Since**

1.0.0

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions) | The dialog's options. If a string, it represents the dialog title. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### `open`

> **open**(`options?`: [`OpenDialogOptions`](dialog.md#opendialogoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| `string` \| `string`[]\>

Open a file/directory selection dialog.

The selected paths are added to the filesystem and asset protocol allowlist scopes.
When security is more important than the easy of use of this API,
prefer writing a dedicated command instead.

Note that the allowlist scope change is not persisted, so the values are cleared when the application is restarted.
You can save it to the filesystem using [tauri-plugin-persisted-scope](https://github.com/tauri-apps/tauri-plugin-persisted-scope).

**Example**

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

**Example**

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

**Since**

1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `options` | [`OpenDialogOptions`](dialog.md#opendialogoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| `string` \| `string`[]\>

A promise resolving to the selected path(s)

### `save`

> **save**(`options?`: [`SaveDialogOptions`](dialog.md#savedialogoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

Open a file/directory save dialog.

The selected path is added to the filesystem and asset protocol allowlist scopes.
When security is more important than the easy of use of this API,
prefer writing a dedicated command instead.

Note that the allowlist scope change is not persisted, so the values are cleared when the application is restarted.
You can save it to the filesystem using [tauri-plugin-persisted-scope](https://github.com/tauri-apps/tauri-plugin-persisted-scope).

**Example**

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

**Since**

1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `options` | [`SaveDialogOptions`](dialog.md#savedialogoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

A promise resolving to the selected path.
