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

### DialogFilter

Extension filters for the file dialog.

#### Properties

| Name | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="dialog.DialogFilter.extensions"><a href="#dialog.DialogFilter.extensions">`extensions`</a></div> | `string`[] | Extensions to filter, without a `.` prefix.  **Example**  ```typescript extensions: ['svg', 'png'] ``` | [dialog.ts:41](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L41) |
| <div class="anchor-with-padding" id="dialog.DialogFilter.name"><a href="#dialog.DialogFilter.name">`name`</a></div> | `string` | Filter name. | [dialog.ts:33](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L33) |

### MessageDialogOptions

#### Properties

| Name | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="dialog.MessageDialogOptions.title"><a href="#dialog.MessageDialogOptions.title">`title?`</a></div> | `string` | The title of the dialog. Defaults to the app name. | [dialog.ts:79](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L79) |
| <div class="anchor-with-padding" id="dialog.MessageDialogOptions.type"><a href="#dialog.MessageDialogOptions.type">`type?`</a></div> | `"error"` \| `"info"` \| `"warning"` | The type of the dialog. Defaults to `info`. | [dialog.ts:81](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L81) |

### OpenDialogOptions

Options for the open dialog.

#### Properties

| Name | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="dialog.OpenDialogOptions.defaultPath"><a href="#dialog.OpenDialogOptions.defaultPath">`defaultPath?`</a></div> | `string` | Initial directory or file path. | [dialog.ts:51](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L51) |
| <div class="anchor-with-padding" id="dialog.OpenDialogOptions.directory"><a href="#dialog.OpenDialogOptions.directory">`directory?`</a></div> | `boolean` | Whether the dialog is a directory selection or not. | [dialog.ts:55](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L55) |
| <div class="anchor-with-padding" id="dialog.OpenDialogOptions.filters"><a href="#dialog.OpenDialogOptions.filters">`filters?`</a></div> | [`DialogFilter`](dialog.md#dialogfilter)[] | The filters of the dialog. | [dialog.ts:49](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L49) |
| <div class="anchor-with-padding" id="dialog.OpenDialogOptions.multiple"><a href="#dialog.OpenDialogOptions.multiple">`multiple?`</a></div> | `boolean` | Whether the dialog allows multiple selection or not. | [dialog.ts:53](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L53) |
| <div class="anchor-with-padding" id="dialog.OpenDialogOptions.recursive"><a href="#dialog.OpenDialogOptions.recursive">`recursive?`</a></div> | `boolean` | If `directory` is true, indicates that it will be read recursively later. Defines whether subdirectories will be allowed on the scope or not. | [dialog.ts:60](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L60) |
| <div class="anchor-with-padding" id="dialog.OpenDialogOptions.title"><a href="#dialog.OpenDialogOptions.title">`title?`</a></div> | `string` | The title of the dialog window. | [dialog.ts:47](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L47) |

### SaveDialogOptions

Options for the save dialog.

#### Properties

| Name | Type | Description | Source |
| :------ | :------ | :------ | :------ |
| <div class="anchor-with-padding" id="dialog.SaveDialogOptions.defaultPath"><a href="#dialog.SaveDialogOptions.defaultPath">`defaultPath?`</a></div> | `string` | Initial directory or file path. If it's a directory path, the dialog interface will change to that folder. If it's not an existing directory, the file name will be set to the dialog's file name input and the dialog will be set to the parent folder. | [dialog.ts:74](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L74) |
| <div class="anchor-with-padding" id="dialog.SaveDialogOptions.filters"><a href="#dialog.SaveDialogOptions.filters">`filters?`</a></div> | [`DialogFilter`](dialog.md#dialogfilter)[] | The filters of the dialog. | [dialog.ts:68](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L68) |
| <div class="anchor-with-padding" id="dialog.SaveDialogOptions.title"><a href="#dialog.SaveDialogOptions.title">`title?`</a></div> | `string` | The title of the dialog window. | [dialog.ts:66](https://github.com/tauri-apps/tauri/blob/a5f2945d/tooling/api/src/dialog.ts#L66) |

## Functions

### ask

> **ask**(`message`: `string`, `options?`: `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Shows a question dialog with `Yes` and `No` buttons.

**Example**

```typescript
import { ask } from '@tauri-apps/api/dialog';
const yes = await ask('Are you sure?', 'Tauri');
const yes2 = await ask('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions) | The dialog's options. If a string, it represents the dialog title. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

A promise resolving to a boolean indicating whether `Yes` was clicked or not.

### confirm

> **confirm**(`message`: `string`, `options?`: `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Shows a question dialog with `Ok` and `Cancel` buttons.

**Example**

```typescript
import { confirm } from '@tauri-apps/api/dialog';
const confirmed = await confirm('Are you sure?', 'Tauri');
const confirmed2 = await confirm('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions) | The dialog's options. If a string, it represents the dialog title. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

A promise resolving to a boolean indicating whether `Ok` was clicked or not.

### message

> **message**(`message`: `string`, `options?`: `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

Shows a message dialog with an `Ok` button.

**Example**

```typescript
import { message } from '@tauri-apps/api/dialog';
await message('Tauri is awesome', 'Tauri');
await message('File not found', { title: 'Tauri', type: 'error' });
```

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| [`MessageDialogOptions`](dialog.md#messagedialogoptions) | The dialog's options. If a string, it represents the dialog title. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`void`\>

A promise indicating the success or failure of the operation.

### open

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

**Parameters**

| Name | Type |
| :------ | :------ |
| `options` | [`OpenDialogOptions`](dialog.md#opendialogoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| `string` \| `string`[]\>

A promise resolving to the selected path(s)

### save

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

**Parameters**

| Name | Type |
| :------ | :------ |
| `options` | [`SaveDialogOptions`](dialog.md#savedialogoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string`\>

A promise resolving to the selected path.
