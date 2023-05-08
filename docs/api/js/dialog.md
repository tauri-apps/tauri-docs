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
        "ask": true, // enable dialog ask API
        "confirm": true, // enable dialog confirm API
        "message": true, // enable dialog message API
        "open": true, // enable file open API
        "save": true // enable file save API
      }
    }
  }
}
```
It is recommended to allowlist only the APIs you use for optimal bundle size and security.

## Interfaces

### `ConfirmDialogOptions`

#### Properties

##### `cancelLabel`

> `Optional` **cancelLabel**: `string`

The label of the cancel button.

**Defined in:** [dialog.ts:112](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L112)

##### `okLabel`

> `Optional` **okLabel**: `string`

The label of the confirm button.

**Defined in:** [dialog.ts:110](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L110)

##### `title`

> `Optional` **title**: `string`

The title of the dialog. Defaults to the app name.

**Defined in:** [dialog.ts:106](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L106)

##### `type`

> `Optional` **type**: `"info"` \| `"warning"` \| `"error"`

The type of the dialog. Defaults to `info`.

**Defined in:** [dialog.ts:108](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L108)

### `DialogFilter`

Extension filters for the file dialog.

**Since**: 1.0.0

#### Properties

##### `extensions`

>  **extensions**: `string`[]

Extensions to filter, without a `.` prefix.

**Example**

```typescript
extensions: ['svg', 'png']
```

**Defined in:** [dialog.ts:48](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L48)

##### `name`

>  **name**: `string`

Filter name.

**Defined in:** [dialog.ts:40](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L40)

### `MessageDialogOptions`

**Since**: 1.0.0

#### Properties

##### `okLabel`

> `Optional` **okLabel**: `string`

The label of the confirm button.

**Defined in:** [dialog.ts:101](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L101)

##### `title`

> `Optional` **title**: `string`

The title of the dialog. Defaults to the app name.

**Defined in:** [dialog.ts:97](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L97)

##### `type`

> `Optional` **type**: `"info"` \| `"warning"` \| `"error"`

The type of the dialog. Defaults to `info`.

**Defined in:** [dialog.ts:99](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L99)

### `OpenDialogOptions`

Options for the open dialog.

**Since**: 1.0.0

#### Properties

##### `defaultPath`

> `Optional` **defaultPath**: `string`

Initial directory or file path.

**Defined in:** [dialog.ts:62](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L62)

##### `directory`

> `Optional` **directory**: `boolean`

Whether the dialog is a directory selection or not.

**Defined in:** [dialog.ts:66](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L66)

##### `filters`

> `Optional` **filters**: [`DialogFilter`](dialog.md#dialogfilter)[]

The filters of the dialog.

**Defined in:** [dialog.ts:60](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L60)

##### `multiple`

> `Optional` **multiple**: `boolean`

Whether the dialog allows multiple selection or not.

**Defined in:** [dialog.ts:64](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L64)

##### `recursive`

> `Optional` **recursive**: `boolean`

If `directory` is true, indicates that it will be read recursively later.
Defines whether subdirectories will be allowed on the scope or not.

**Defined in:** [dialog.ts:71](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L71)

##### `title`

> `Optional` **title**: `string`

The title of the dialog window.

**Defined in:** [dialog.ts:58](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L58)

### `SaveDialogOptions`

Options for the save dialog.

**Since**: 1.0.0

#### Properties

##### `defaultPath`

> `Optional` **defaultPath**: `string`

Initial directory or file path.
If it's a directory path, the dialog interface will change to that folder.
If it's not an existing directory, the file name will be set to the dialog's file name input and the dialog will be set to the parent folder.

**Defined in:** [dialog.ts:89](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L89)

##### `filters`

> `Optional` **filters**: [`DialogFilter`](dialog.md#dialogfilter)[]

The filters of the dialog.

**Defined in:** [dialog.ts:83](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L83)

##### `title`

> `Optional` **title**: `string`

The title of the dialog window.

**Defined in:** [dialog.ts:81](https://github.com/tauri-apps/tauri/blob/73a0ad4/tooling/api/src/dialog.ts#L81)

## Functions

### `ask`

> **ask**(`message`: `string`, `options?`: `string` \| [`ConfirmDialogOptions`](dialog.md#confirmdialogoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Shows a question dialog with `Yes` and `No` buttons.

**Example**

```typescript
import { ask } from '@tauri-apps/api/dialog';
const yes = await ask('Are you sure?', 'Tauri');
const yes2 = await ask('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
```

**Since**: 1.0.0

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| [`ConfirmDialogOptions`](dialog.md#confirmdialogoptions) | The dialog's options. If a string, it represents the dialog title. |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

A promise resolving to a boolean indicating whether `Yes` was clicked or not.

### `confirm`

> **confirm**(`message`: `string`, `options?`: `string` \| [`ConfirmDialogOptions`](dialog.md#confirmdialogoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`boolean`\>

Shows a question dialog with `Ok` and `Cancel` buttons.

**Example**

```typescript
import { confirm } from '@tauri-apps/api/dialog';
const confirmed = await confirm('Are you sure?', 'Tauri');
const confirmed2 = await confirm('This action cannot be reverted. Are you sure?', { title: 'Tauri', type: 'warning' });
```

**Since**: 1.0.0

**Parameters**

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to show. |
| `options?` | `string` \| [`ConfirmDialogOptions`](dialog.md#confirmdialogoptions) | The dialog's options. If a string, it represents the dialog title. |

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

**Since**: 1.0.0

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

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `options` | [`OpenDialogOptions`](dialog.md#opendialogoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`null` \| `string` \| `string`[]\>

A promise resolving to the selected path(s)

### `save`

> **save**(`options?`: [`SaveDialogOptions`](dialog.md#savedialogoptions)): [`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string` \| `null`\>

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
  filters: [{
    name: 'Image',
    extensions: ['png', 'jpeg']
  }]
});
```

**Since**: 1.0.0

**Parameters**

| Name | Type |
| :------ | :------ |
| `options` | [`SaveDialogOptions`](dialog.md#savedialogoptions) |

**Returns: **[`Promise`]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise )<`string` \| `null`\>

A promise resolving to the selected path.
